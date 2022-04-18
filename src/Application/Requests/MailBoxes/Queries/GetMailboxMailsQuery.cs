﻿using CleanArchitecture.Application.Requests.MailBoxes.Models;
using MediatR;
using Newtonsoft.Json;
using RestSharp;
using RestSharp.Serializers;

namespace CleanArchitecture.Application.Requests.MailBoxes.Queries;
public  class GetMailboxMailsQuery:IRequest<GetMailBoxMailsResponseModel>
{
    public string Token { get; set; }
    public string Name { get; set; }

    public GetMailboxMailsQuery(string token, string name)
    {
        Token = token;
        Name = name;
    }
}
public class GetMailboxMailsQueryHandler : IRequestHandler<GetMailboxMailsQuery, GetMailBoxMailsResponseModel>
{
    private readonly ISender _sender;

    public GetMailboxMailsQueryHandler(ISender sender)
    {
        _sender = sender;
    }

    public async Task<GetMailBoxMailsResponseModel> Handle(GetMailboxMailsQuery requestQuery, CancellationToken cancellationToken)
    {

        var idsObject = await _sender.Send(new GetMailboxMailIdsQuery(requestQuery.Token, requestQuery.Name),cancellationToken);

        var client = new RestClient($"https://www.developermail.com/api/v1/mailbox/{requestQuery.Name}/messages");
        var request = new RestRequest("", Method.Post);
        request.AddHeader("X-MailboxToken", requestQuery.Token);
        request.AddHeader("accept", "application/json");
        request.AddHeader("Content-Type", "application/json");
        request.AddStringBody(JsonConvert.SerializeObject(idsObject.Result), ContentType.Json);
        RestResponse response = await client.ExecuteAsync(request, cancellationToken);
        var mailsObject = JsonConvert.DeserializeObject<GetMailBoxMailsResponseModel>(response.Content);
        return mailsObject;
    }
}