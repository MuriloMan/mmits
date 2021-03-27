import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html',
  styleUrls: ['./whatwedo.component.sass']
})
export class WhatwedoComponent implements OnInit {

  constructor(public messages: MessageService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
  }

  gets(s:string):string{
    return this.messages.gets(s);
  }
}
