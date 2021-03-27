import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor(public messages: MessageService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  gets(s: string): string {
    return this.messages.gets(s);
  }

}
