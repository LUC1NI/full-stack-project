
using Microsoft.EntityFrameworkCore;
using BackendProjetoGrupo.Data;
using BackendProjetoGrupo;

var builder = WebApplication.CreateBuilder(args);

// Configura o banco de dados
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=filmes.db"));



// Swagger (documentação da API)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyMethod()
              .AllowAnyHeader(); 
    });
});


var app = builder.Build();

app.UseCors("AllowReactApp");


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.MapPost("/generos", async (Genero genero, AppDbContext db) =>
{
    db.Generos.Add(genero);
    await db.SaveChangesAsync();
    return Results.Created($"/generos/{genero.Id}", genero);
});

app.MapGet("/generos", async (AppDbContext db) =>
{
    var generos = await db.Generos.ToListAsync();
    return Results.Ok(generos);
});
app.MapGet("/generos/{id}", async (int id, AppDbContext db) =>
{
    var genero = await db.Generos.FindAsync(id);
    return genero is not null ? Results.Ok(genero) : Results.NotFound();
});

app.MapPut("/generos/{id}", async (int id, Genero generoAtualizado, AppDbContext db) =>
{
    var genero = await db.Generos.FindAsync(id);
    if (genero is null) return Results.NotFound();

    genero.Nome = generoAtualizado.Nome;
    await db.SaveChangesAsync();
    return Results.Ok(genero);
});

app.MapDelete("/generos/{id}", async (int id, AppDbContext db) =>
{
    var genero = await db.Generos.FindAsync(id);
    if (genero is null) return Results.NotFound();

    db.Generos.Remove(genero);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.MapGet("/debug", async (AppDbContext db) =>
{
    var filmes = await db.Filmes.ToListAsync();
    return Results.Ok(filmes);
});


// GET - Listar todos os filmes
app.MapGet("/filmes", async (AppDbContext db) =>
{
    var filmesComGenero = await db.Filmes.Include(f => f.Genero)
        .Select(f => new {
            f.Id,
            f.Titulo,
            f.Ano,
            GeneroNome = f.Genero.Nome  // aqui pega o nome do gênero
        }).ToListAsync();

    return Results.Ok(filmesComGenero);
});


// GET - Buscar um filme por ID
app.MapGet("/filmes/{id}", async (int id, AppDbContext db) =>
    await db.Filmes.Include(f => f.Genero).FirstOrDefaultAsync(f => f.Id == id));

// POST - Criar um novo filme
app.MapPost("/filmes", async (Filme filme, AppDbContext db) =>
{
    if (string.IsNullOrWhiteSpace(filme.Titulo))
    {
        return Results.BadRequest("O campo 'Título' é obrigatório.");
    }

    if (filme.Ano < 1888 || filme.Ano > DateTime.Now.Year) // Considerando 1888 como o ano do primeiro filme
    {
        return Results.BadRequest("O ano deve ser um valor válido.");
    }

    var generoExistente = await db.Generos.FindAsync(filme.GeneroId);
    if (generoExistente == null)
    {
        return Results.BadRequest("O 'GeneroId' fornecido não existe.");
    }

    db.Filmes.Add(filme);
    await db.SaveChangesAsync();
    return Results.Created($"/filmes/{filme.Id}", filme);
});


// PUT - Atualizar um filme
app.MapPut("/filmes/{id}", async (int id, Filme filmeAtualizado, AppDbContext db) =>
{
    var filme = await db.Filmes.FindAsync(id);
    if (filme == null) return Results.NotFound();

    filme.Titulo = filmeAtualizado.Titulo;
    filme.Ano = filmeAtualizado.Ano;
    filme.GeneroId = filmeAtualizado.GeneroId;

    await db.SaveChangesAsync();
    return Results.NoContent();
});

// DELETE - Deletar um filme
app.MapDelete("/filmes/{id}", async (int id, AppDbContext db) =>
{
    var filme = await db.Filmes.FindAsync(id);
    if (filme == null) return Results.NotFound();

    db.Filmes.Remove(filme);
    await db.SaveChangesAsync();
    return Results.NoContent();
});


app.Run();
