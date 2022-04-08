using CleanArchitecture.Application.Requests.Auth.Commands;
using CleanArchitecture.Application.Requests.Auth.Models;
using Microsoft.AspNetCore.Mvc;

namespace CleanArchitecture.WebUI.Controllers;
public class AccountController : ApiControllerBase
{
    [Route("api/Account/Get-Token")]
    [HttpPost]
    public async Task<IActionResult> GetToken(LoginUserRequest model)
    {
        var result = await Mediator.Send(new LoginUserCommand(model));
        return Ok(result);
    }
    [Route("api/Account/Refresh-Token")]
    [HttpPost]
    public async Task<IActionResult> RefreshToken(RefreshRequest model)
    {
        var result = await Mediator.Send(new RefreshCommand(model));
        return Ok(result);
    }
}
