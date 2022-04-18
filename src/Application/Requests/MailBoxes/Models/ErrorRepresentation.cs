namespace CleanArchitecture.Application.Requests.MailBoxes.Models;

public class ErrorRepresentation
{
    public string Code { get; set; }
    public string Message { get; set; }
    public string Detail { get; set; }
}