namespace CleanArchitecture.Domain.Events;

public class MailBoxCreatedEvent : DomainEvent
{
    public MailBoxCreatedEvent(MailBox item)
    {
        Box = item;
    }

    public MailBox Box { get; }
}
