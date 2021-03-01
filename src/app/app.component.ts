import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'mmits-site';
  public lang: string = 'EN-US';
  public showCreditsFlag: boolean = false;

  ngOnInit(){

  }
}
