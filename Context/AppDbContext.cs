﻿using Microsoft.EntityFrameworkCore;
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
        public DbSet<ItemVenda> ItemVendas { get; set; }
        public DbSet<Pedido> Vendas { get; set; }


    }
}
