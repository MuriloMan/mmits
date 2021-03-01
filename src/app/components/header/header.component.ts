import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() lang: string;
  @Input() showCreditsFlag: boolean;
  @Output() showCreditsFlagChange = new EventEmitter<boolean>();
  @Output() langChange = new EventEmitter<string>();

  constructor(public messages: MessageService, public storage: StorageService) { }
  public m: any;
  public flag: string = 'usflag';
  public languageIndex: number = 0;

  ngOnInit(): void {
    this.getLocalStorage();
    this.ngOnChanges();
  }

  getLocalStorage() {
    debugger;
    this.flag = this.storage.get("langFlag");
    this.languageIndex = this.flag == 'usflag' ? 0 : 1;
    this.refreshLang();
  }

  showCredits(): void {
    this.showCreditsFlag = !this.showCreditsFlag;
    this.showCreditsFlagChange.emit(this.showCreditsFlag);
  }

  ngOnChanges(): void {
    this.m = this.messages.getTexts(this.lang);
  }

  refreshLang(): void {
    this.flag = this.flag == null || '' == this.flag ? 'usflag' : this.flag;
    if (this.flag == 'brflag') {
      this.lang = 'PT-BR';
    }
    else {
      this.lang = 'EN-US';
    }
    this.langChange.emit(this.lang);
  }

  public toNextLanguage(): void {
    this.languageIndex = this.languageIndex === 1 ? 0 : 1;
    if (this.languageIndex === 1) {
      this.flag = 'brflag';
    } else if (this.languageIndex === 0) {
      this.flag = 'usflag';
    }
    this.refreshLang();
    this.storage.set("langFlag", this.flag);
  }
}
