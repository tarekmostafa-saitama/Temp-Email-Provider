import { Component, OnInit } from '@angular/core';
import { CreateMailBoxResponseModel, GetMailBoxMailsResponseModel, MailboxClient, MailMessage } from 'src/app/web-api-client';
import { MailboxService } from '../Shared/Services/mailbox.service';

@Component({
  selector: "app-generate-mail",
  templateUrl: "./generate-mail.component.html",
  styleUrls: ["./generate-mail.component.css"],
})
export class GenerateMailComponent implements OnInit {
  createMailBoxResponseModel: CreateMailBoxResponseModel;
  getMailBoxMailsResponseModel: GetMailBoxMailsResponseModel;
  currentSelectedMail: MailMessage;
  constructor(private mailboxService: MailboxService) {
    this.createMailBoxResponseModel = new CreateMailBoxResponseModel();
    this.getMailBoxMailsResponseModel = new GetMailBoxMailsResponseModel();
  }

  ngOnInit() {
    this.mailboxService.CreateMailBox().subscribe((x) => {
      if (x.success) {
        this.createMailBoxResponseModel = x;
      } else {
      }
    });
  }

  public getAllMessages() {
    this.mailboxService
      .GetMailBoxMessages(
        this.createMailBoxResponseModel.result.token,
        this.createMailBoxResponseModel.result.name
      )
      .subscribe((x) => {
        if (x.success) {
          this.getMailBoxMailsResponseModel = x;
        }
      });
  }

  public selectCurrentMail(key) {
    this.currentSelectedMail = this.getMailBoxMailsResponseModel.parsedResult.find(x=>x.key == key).value;
  }
}
