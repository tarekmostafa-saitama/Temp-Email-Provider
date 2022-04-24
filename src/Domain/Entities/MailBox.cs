namespace CleanArchitecture.Domain.Entities;

public class MailBox : AuditableEntity
{
    public int Id { get; set; }
    public string Address { get; set; }

    public List<MailRefreshRequest> MailRefreshRequests { get; set; }


    public MailBox(string address)
    {
        Address = address;
    }
}
