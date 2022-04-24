using MimeKit;

namespace CleanArchitecture.Application.Requests.MailBoxes.Models;

public class MailMessage
{

    public MailMessage(MimeMessage message)
    {
        HtmlBody = message.HtmlBody;
        TextBody = message.TextBody;
        Subject = message.Subject;
        ToAddress = message.To.Mailboxes.First().Address;
        FromAddress = message.From.Mailboxes.First().Address;
        FromName = message.From.Mailboxes.First().Name;
        Date = message.Date.DateTime.ToShortTimeString();

    }

    public string HtmlBody { get; set; }
    public string TextBody { get; set; }
    public string Subject { get; set; }
    public string ToAddress { get; set; }
    public string FromAddress { get; set; }
    public string FromName { get; set; }
    public string Date { get; set; }
}