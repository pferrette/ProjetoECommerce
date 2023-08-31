using ProjetoEcommerce.Context;
using ProjetoEcommerce.Repositories.Interfaces;

namespace ProjetoEcommerce.Repositories
{
    public class ProdutoRepository: IProdutoRepository
    {
        private readonly AppDbContext _context;
        public ProdutoRepository(AppDbContext context)
        {
            _context = context;
        }
        
    }
}
