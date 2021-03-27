import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.sass']
})
export class CreditsComponent implements OnInit {


  @Input() showcredits:boolean;
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
