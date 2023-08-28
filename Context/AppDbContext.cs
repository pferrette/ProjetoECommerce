using Microsoft.EntityFrameworkCore;
using ProjetoEcommerce.Models;

namespace ProjetoEcommerce.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Pessoa> Pessoas { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }


    }
}
