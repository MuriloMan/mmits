import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService} from '../../services/message/message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor(public messages: MessageService) { }
  public showcredits: boolean = false;
  public year: number = 0;
  public vn: string;
  public m: any;

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.vn = environment.appVersion;
    this.ngOnChanges();
  }

  ngOnChanges(): void{
  }

  gets(s:string):string{
    return this.messages.gets(s);
  }

  public showcred():void{
    this.showcredits = !this.showcredits;
  }
}
