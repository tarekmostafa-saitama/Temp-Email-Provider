using CleanArchitecture.Application.Requests.MailBoxes.Models;
using MediatR;
using Newtonsoft.Json;
using RestSharp;
using RestSharp.Serializers;

namespace CleanArchitecture.Application.Requests.MailBoxes.Queries;
public  class GetMailboxMailIdsQuery : IRequest<GetMailBoxMailIdsResponseModel>
{
    public string Token { get; set; }
    public string Name { get; set; }

    public GetMailboxMailIdsQuery(string token, string name)
    {
        Token = token;
        Name = name;
    }
}
public class GetMailboxMailIdsQueryHandler : IRequestHandler<GetMailboxMailIdsQuery, GetMailBoxMailIdsResponseModel>
{
    public GetMailboxMailIdsQueryHandler()
    {
        
    }

    public async Task<GetMailBoxMailIdsResponseModel> Handle(GetMailboxMailIdsQuery requestQuery, CancellationToken cancellationToken)
    {



        var client = new RestClient($"https://www.developermail.com/api/v1/mailbox/{requestQuery.Name}");
        var request = new RestRequest("", Method.Get);
        request.AddHeader("X-MailboxToken", requestQuery.Token);
        request.AddHeader("accept", "application/json");
      
        RestResponse response = await client.ExecuteAsync(request, cancellationToken);
        var mailsObject = JsonConvert.DeserializeObject<GetMailBoxMailIdsResponseModel>(response.Content);
        return mailsObject;
    }
}
