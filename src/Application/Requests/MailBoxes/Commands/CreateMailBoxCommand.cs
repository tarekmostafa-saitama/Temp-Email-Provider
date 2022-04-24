using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Application.Requests.MailBoxes.Models;
using CleanArchitecture.Domain.Entities;
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
    private readonly IApplicationDbContext _dbContext;

    public CreateMailBoxCommandHandler(IConfiguration configuration, IApplicationDbContext dbContext)
    {
        _configuration = configuration;
        _dbContext = dbContext;
    }
    public async Task<CreateMailBoxResponseModel> Handle(CreateMailBoxCommand commandRequest, CancellationToken cancellationToken)
    {
        var client = new RestClient("https://www.developermail.com/api/v1/mailbox");
        var request = new RestRequest("",Method.Put);
        RestResponse response = await client.ExecuteAsync(request,cancellationToken);
        var mailObject = JsonConvert.DeserializeObject<CreateMailBoxResponseModel>(response.Content ?? throw new InvalidOperationException());

        _dbContext.MailBoxes.Add(new MailBox(mailObject.Result.Name));
        await _dbContext.SaveChangesAsync(cancellationToken);

        return mailObject;
    }
}