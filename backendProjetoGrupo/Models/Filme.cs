using System.Text.Json.Serialization;

namespace BackendProjetoGrupo{
    public class Filme
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public int Ano { get; set; }

        public int GeneroId { get; set; }
        [JsonIgnore]
        public Genero? Genero { get; set; }

        public Filme()
        {
            Titulo = ""; 
        }
    }
}