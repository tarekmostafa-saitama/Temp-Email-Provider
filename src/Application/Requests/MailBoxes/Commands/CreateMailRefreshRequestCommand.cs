using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CleanArchitecture.Application.Requests.MailBoxes.Commands;

public class CreateMailRefreshRequestCommand: IRequest<Unit>
{
    public string Name { get; set; }
    public int MessagesCount { get; set; }

    public CreateMailRefreshRequestCommand(string name, int messagesCount)
    {
        Name = name;
        MessagesCount = messagesCount;
    }
}
public class CreateMailRefreshRequestCommandHandler : IRequestHandler<CreateMailRefreshRequestCommand, Unit>
{
    private readonly IApplicationDbContext _dbContext;
    private readonly ICurrentUserService _currentUserService;

    public CreateMailRefreshRequestCommandHandler(IApplicationDbContext dbContext, ICurrentUserService currentUserService)
    {
        _dbContext = dbContext;
        _currentUserService = currentUserService;
    }
    public async Task<Unit> Handle(CreateMailRefreshRequestCommand request, CancellationToken cancellationToken)
    {
        var mailBox = await _dbContext.MailBoxes.AsNoTracking()
            .Where(x => x.Address == request.Name && x.CreatedBy == _currentUserService.UserId)
            .FirstOrDefaultAsync(cancellationToken);
        if (mailBox != null)
        {
            _dbContext.MailRefreshRequests.Add(new MailRefreshRequest()
            {
                Date = DateTime.UtcNow, MailBoxId = mailBox.Id, MailsCount = request.MessagesCount
            });
            await _dbContext.SaveChangesAsync(cancellationToken);
        }
        return Unit.Value;
    }
}