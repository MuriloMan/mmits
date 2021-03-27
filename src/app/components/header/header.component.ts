import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

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
    this.flag = this.storage.get("langFlag");
    this.languageIndex = this.flag == null ? 0 : this.flag == 'usflag' ? 0 : 1;
    this.refreshLang();
  }

  ngOnChanges(): void {
  }

  gets(s:string):string{
    return this.messages.gets(s);
  }

  refreshLang(): void {
    this.flag = this.flag == null || '' == this.flag ? 'usflag' : this.flag;
  }

  toNextLanguage(): void {
    this.languageIndex = this.languageIndex == 1 ? 0 : 1;
    if (this.languageIndex == 1) {
      this.flag = 'brflag';
    } else if (this.languageIndex == 0) {
      this.flag = 'usflag';
    }
    this.refreshLang();
    this.storage.set("langFlag", this.flag);
  }
}
