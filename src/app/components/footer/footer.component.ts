import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService} from '../../services/message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  @Input() lang: string;
  @Input() showCreditsFlag: boolean;
  @Output() showCreditsFlagChange = new EventEmitter<boolean>();

  constructor(public messages: MessageService) { }

  public year: number = 0;
  public vn: string;
  public m: any;

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.vn = environment.appVersion;
    this.ngOnChanges();
  }

  ngOnChanges(): void{
    this.m = this.messages.getTexts(this.lang);
  }


  showCredits(): void {
    this.showCreditsFlag = !this.showCreditsFlag;
    this.showCreditsFlagChange.emit(this.showCreditsFlag);
  }
}
