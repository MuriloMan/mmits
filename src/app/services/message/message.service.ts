import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { MessagesMmits } from '../../Models/messages-mmits';
import { KeyValue } from '../../Models/keyValue';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _jsonURL = "assets/messages/messages.json";
  messages: MessagesMmits;
  lang: string = "usflag";

  constructor(private http: HttpClient, private storage: StorageService) {
    this.storage.removeItem("messages");
    this.getFromJson();
  }

  private getFromJson(): void {
    let session: string = this.storage.get("messages");
    if (session == null || session == '') {
      this.getJSON().subscribe((data: MessagesMmits) => {
        this.messages = data;
        this.storage.set("messages", JSON.stringify(this.messages));
      });
    } else {
      this.messages = JSON.parse(session);
    }
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  public gets(key: string): string {
    let session: string = this.storage.get("langFlag"), s: KeyValue;
    let messagesSession = this.storage.get("messages");
    if (messagesSession != null) {
      this.messages = JSON.parse(messagesSession);
      session = session == null ? 'usflag' : session;
      s = this.messages.texts.find((x: KeyValue) => x.key.toUpperCase() == key.toUpperCase());

      if (s == null) {
        return "Not Found Message obj";
      }

      return (session == 'usflag') ? s.valueEnUs : s.valuePtBr;
    }
    return key;
  }
}