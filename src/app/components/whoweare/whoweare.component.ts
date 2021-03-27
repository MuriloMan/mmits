import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.sass']
})
export class WhoweareComponent implements OnInit {

  constructor(public messages: MessageService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
  }

  gets(s:string):string{
    return this.messages.gets(s);
  }
}
