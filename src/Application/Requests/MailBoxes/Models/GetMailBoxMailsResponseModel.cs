﻿namespace CleanArchitecture.Application.Requests.MailBoxes.Models;

public class GetMailBoxMailsResponseModel
{
    public bool Success { get; set; }
    public List<ErrorRepresentation> Errors { get; set; }
    public List<KeyValuePair<string,string>> Result { get; set; }
}