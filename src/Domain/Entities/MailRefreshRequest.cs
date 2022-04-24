namespace CleanArchitecture.Domain.Entities;

public class MailRefreshRequest
{
    public int Id { get; set; }

    public int MailsCount { get; set; }
    public DateTime Date { get; set; }

    public int MailBoxId { get; set; }
    public MailBox MailBox { get; set; }
}