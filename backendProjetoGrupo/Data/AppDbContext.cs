using Microsoft.EntityFrameworkCore;
using BackendProjetoGrupo;

namespace BackendProjetoGrupo.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        public DbSet<Filme> Filmes { get; set; }
        public DbSet<Genero> Generos { get; set; }
    }
}
