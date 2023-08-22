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
        public string Categoria { get; set; }
        public string Subcategoria { get; set; }
        public bool SobDemanda { get; set; }

        //public Fornecedor Fornecedor { get; set; }

        public bool EmPromoção { get; set; }
        public float PorProcentagem { get; set; }
        public float PorValor { get; set; }
        public float Lucro { get; set; }
        public string Imagem { get; set; }


    }

}
