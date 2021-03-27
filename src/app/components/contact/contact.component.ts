import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor(public messages: MessageService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
  }

  public gets(s:string):string{
    return this.messages.gets(s)
  }
}
