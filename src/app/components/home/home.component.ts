import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

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
