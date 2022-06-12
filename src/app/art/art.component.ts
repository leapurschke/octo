import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
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
