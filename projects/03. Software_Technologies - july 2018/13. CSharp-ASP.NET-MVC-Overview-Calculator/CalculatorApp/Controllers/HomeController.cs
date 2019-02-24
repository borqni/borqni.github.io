using Microsoft.AspNetCore.Mvc;
using CalculatorApp.Models;
using CalculatorApp.Models.ViewModels;

namespace CalculatorApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index(Calculator calculator)
        {
            return View(calculator);
        }

        [HttpPost]
        public IActionResult Calculate(CalculatorViewModel viewModel)
        {
            Calculator calculator = new Calculator
            {
                LeftOperand = viewModel.LeftOperand,
                RightOperand = viewModel.RightOperand,
                Operator = viewModel.Operator
            };

            calculator.CalculateResult();
            return RedirectToAction("Index", calculator);
        }
    }
}
