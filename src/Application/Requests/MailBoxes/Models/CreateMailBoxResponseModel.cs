namespace CleanArchitecture.Application.Requests.MailBoxes.Models;

public class CreateMailBoxResponseModel
{
    public bool Success { get; set; }
    public List<ErrorRepresentation> Errors { get; set; }
    public CreateResultModel Result { get; set; }
}