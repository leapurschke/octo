import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-happiness',
  templateUrl: './happiness.component.html',
  styleUrls: ['./happiness.component.scss']
})
export class HappinessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  postsImg = [
    'assets/img/flowers/bild1.jpg',
    'assets/img/flowers/bild2.jpg',
    'assets/img/flowers/bild3.jpg'
  ];
  
}
