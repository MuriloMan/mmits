import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.sass']
})
export class CreditsComponent implements OnInit {


  @Input() showcredits:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
  }
}
