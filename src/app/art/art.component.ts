import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {

  constructor() { }

  postsTexts = [
    'Love',
    'Peace',
    'Happiness'
  ];
 
  postsImg = [
    'assets/img/flowers/bild1.jpg',
    'assets/img/flowers/bild2.jpg',
    'assets/img/flowers/bild3.jpg'
  ];

  ngOnInit(): void {
  }

}
