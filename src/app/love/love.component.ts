import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.scss']
})

export class LoveComponent implements OnInit {
  changeImageBackgroundColor: boolean;
  changeImageBackgroundColor1: boolean;
  changeImageBackgroundColor2: boolean;
  constructor() {
    this.changeImageBackgroundColor = false;
    this.changeImageBackgroundColor1 = false;
    this.changeImageBackgroundColor2 = false;
   }

  postsImg = [
    'assets/img/flowers/bild1.jpg',
    'assets/img/flowers/bild2.jpg',
    'assets/img/flowers/bild3.jpg'
  ];
  
  ngOnInit(): void {
  }

  
}
