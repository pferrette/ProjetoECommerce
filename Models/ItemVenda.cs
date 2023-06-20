namespace ProjetoEcommerce.Models
{
    public class ItemVenda
    {
        public int VendaID { get; set; }
        public int ProdutoID { get; set; }
        public int Quantidade { get; set; }
        public decimal PrecoUnitario { get; set; }
    }
}
