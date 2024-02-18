using System.Text.Json.Nodes;
using Microsoft.AspNetCore.Mvc;

namespace TodoApi.Controllers;
{

    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        public IActionResult Get(){
            return JsonArray
        }
    }


}
