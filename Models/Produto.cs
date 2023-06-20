namespace ProjetoEcommerce.Models
{
     public class Produto
    {
        public int ID { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal PrecoVenda { get; set; }
        public decimal PrecoCompra { get; set; }
        public int QuantidadeEmEstoque { get; set; }
    }

}
