import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-flower-card',
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.scss']
})
export class FlowerCardComponent implements OnInit {
  @Input() img:string ='';
  @Input() text:string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
