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
    'assets/img/art/art1.jpeg',
    'assets/img/art/art2.jpeg',
    'assets/img/art/art3.jpeg'
  ];
  
  ngOnInit(): void {
  }

  
}
