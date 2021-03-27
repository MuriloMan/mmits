import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.sass']
})
export class TitlePageComponent implements OnInit {

  @Input()
  titlePage:string;

  @Input()
  id:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
