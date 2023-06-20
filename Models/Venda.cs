namespace ProjetoEcommerce.Models
{
    public class Venda
    {
        public int ID { get; set; }
        public int ClienteID { get; set; }
        public DateTime DataHoraVenda { get; set; }
        public decimal TotalVenda { get; set; }
    }
}
