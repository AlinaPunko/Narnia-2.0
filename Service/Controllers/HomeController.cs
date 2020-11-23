using Microsoft.AspNetCore.Mvc;

namespace Service.Controllers
{
    [Route("/")]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        //[Route("js")]
        //public ActionResult JS()
        //{
        //    return FileResult("main.js");
        //}
    }
}
