using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ProjetoEcommerce.Models;

namespace ProjetoEcommerce.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

     public IActionResult ContaAdmin()
    {
        return View();
    }

    public IActionResult ProdutosConsultar()
    {
        return View();
    }

    public IActionResult ProdutosCadastrar()
    {
        return View();
    }

    public IActionResult Pedidos()
    {
        return View();
    }

    public IActionResult AdministradoresConsultar()
    {
        return View();
    }

    public IActionResult ClientesConsultar()
    {
        return View();
    }

public IActionResult RelatorioDiario()
    {
        return View();
    }

    public IActionResult RelatorioMensal()
    {
        return View();
    }

   public IActionResult RelatorioAnual()
    {
        return View();
    }

 public IActionResult RelatorioGlobal()
    {
        return View();
    }

     public IActionResult Configuracoes()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}