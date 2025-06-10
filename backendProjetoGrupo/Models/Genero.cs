namespace BackendProjetoGrupo{
    public class Genero
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public List<Filme> Filmes { get; set; } = new List<Filme>();

        public Genero()
        {
            Nome = ""; 
        }
    }
}