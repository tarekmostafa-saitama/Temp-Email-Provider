using CleanArchitecture.Application.Requests.MailBoxes.Models;
using MediatR;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using RestSharp;

namespace CleanArchitecture.Application.Requests.MailBoxes.Commands;

public class CreateMailBoxCommand: IRequest<CreateMailBoxResponseModel>
{
    
}
public class CreateMailBoxCommandHandler : IRequestHandler<CreateMailBoxCommand, CreateMailBoxResponseModel>
{
    private readonly IConfiguration _configuration;

    public CreateMailBoxCommandHandler(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    public async Task<CreateMailBoxResponseModel> Handle(CreateMailBoxCommand commandRequest, CancellationToken cancellationToken)
    {
        var client = new RestClient("https://www.developermail.com/api/v1/mailbox");
        var request = new RestRequest("",Method.Put);
        RestResponse response = await client.ExecuteAsync(request,cancellationToken);
        var mailObject = JsonConvert.DeserializeObject<CreateMailBoxResponseModel>(response.Content);
        return mailObject;
    }
}