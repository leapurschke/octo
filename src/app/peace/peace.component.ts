import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peace',
  templateUrl: './peace.component.html',
  styleUrls: ['./peace.component.scss']
})
export class PeaceComponent implements OnInit {
  changeImageBackgroundColor: boolean;
  changeImageBackgroundColor1: boolean;
  changeImageBackgroundColor2: boolean;
  constructor() {
    this.changeImageBackgroundColor = false;
    this.changeImageBackgroundColor1 = false;
    this.changeImageBackgroundColor2 = false;
   }

  postsImg = [
    'assets/img/art/art4.jpeg',
    'assets/img/art/art5.jpeg',
    'assets/img/art/art6.jpeg'
  ];
  
  ngOnInit(): void {
  }

  
  
}
