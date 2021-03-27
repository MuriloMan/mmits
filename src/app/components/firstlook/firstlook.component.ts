import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-firstlook',
  templateUrl: './firstlook.component.html',
  styleUrls: ['./firstlook.component.sass']
})
export class FirstlookComponent implements OnInit {

  constructor(public messages: MessageService) { }

  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(): void{
  }

  
  gets(s:string):string{
    return this.messages.gets(s);
  }

}
