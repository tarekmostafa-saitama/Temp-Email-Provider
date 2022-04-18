namespace CleanArchitecture.Application.Requests.MailBoxes.Models;

public class GetMailBoxMailIdsResponseModel
{
    public bool Success { get; set; }
    public List<ErrorRepresentation> Errors { get; set; }
    public List<string> Result { get; set; }

}