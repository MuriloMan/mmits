import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.sass']
})
export class WhoweareComponent implements OnInit {

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
