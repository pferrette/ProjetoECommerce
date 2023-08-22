namespace ProjetoEcommerce.Models
{
    public class Pedido
    {
        public int ID { get; set; }
        public Cliente Cliente { get; set; }
        public DateTime DataPedido { get; set; }
        public decimal ValorTotal { get; set; }
        public List<Produto> Produtos { get; set; }

    }
}
