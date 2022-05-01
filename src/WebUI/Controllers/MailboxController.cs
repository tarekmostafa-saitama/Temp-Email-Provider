using System.Buffers.Text;
using System.Net.Mail;
using System.Text;
using CleanArchitecture.Application.Requests.MailBoxes.Commands;
using CleanArchitecture.Application.Requests.MailBoxes.Models;
using CleanArchitecture.Application.Requests.MailBoxes.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MimeKit;

namespace CleanArchitecture.WebUI.Controllers;

[Authorize]
public class MailboxController : ApiControllerBase
{
    private readonly ISender _sender;

    public MailboxController(ISender sender)
    {
        _sender = sender;
    }
    [Route("api/Mailbox/Create")]
    [HttpPost]
    public async Task<ActionResult<CreateMailBoxResponseModel>> Create()
    {
        var result = await Mediator.Send(new CreateMailBoxCommand());
        var user = HttpContext.User;
        return Ok(result);
    }
    [Route("api/Mailbox/GetAllMessages/{name}/{token}")]
    [HttpGet]
    public async Task<ActionResult<GetMailBoxMailsResponseModel>> GetAllMessages(string name, string token)
    {
        var result = await Mediator.Send(new GetMailboxMailsQuery(token, name));
        return Ok(result);
    }

}
