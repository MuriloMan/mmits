import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-firstlook',
  templateUrl: './firstlook.component.html',
  styleUrls: ['./firstlook.component.sass']
})
export class FirstlookComponent implements OnInit {

  @Input() lang: string;
  public m: any;

  constructor(public messages: MessageService) { }

  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(): void{
    this.m = this.messages.getTexts(this.lang);
  }
}
