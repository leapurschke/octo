import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  animations: [
    trigger('flyInOut0', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('450ms')
      ]),
      transition('* => void', [
        animate('900ms', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('flyInOut1', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('600ms')
      ]),
      transition('* => void', [
        animate('900ms', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('flyInOut2', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('750ms')
      ]),
      transition('* => void', [
        animate('900ms', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('flyInOut3', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('900ms')
      ]),
      transition('* => void', [
        animate('900ms', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class StartComponent implements OnInit {
  changeImageText1: boolean;
  changeImageText2: boolean;
  changeImageText3: boolean;
  position= '';
  constructor(private router: Router) { 
    this.changeImageText1 = false;
    this.changeImageText2 = false;
    this.changeImageText3 = false;
  }
  
  gotoLove(){
    this.router.navigate(['/love']);
}
  ngOnInit(): void {
    
  }
  

}


