import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peace',
  templateUrl: './peace.component.html',
  styleUrls: ['./peace.component.scss']
})
export class PeaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  postsImg = [
    'assets/img/flowers/bild1.jpg',
    'assets/img/flowers/bild2.jpg',
    'assets/img/flowers/bild3.jpg'
  ];
  
}
