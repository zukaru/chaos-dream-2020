import { Component, OnInit, Output, EventEmitter, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit, AfterViewInit  {
  @Output() preloadFinish = new EventEmitter<boolean>();
  hidden = false;
  pDirection = 'right';
  pOoscillationCoefficient = 50;
  welcomeMessage: Element;
  pColor: object = {};
  pDuration: number;
  welcomePar: Element;
  Colors: [];
  blinkMe: Element;
  audio = new Audio('../assets/Music2.mp3');


  // @HostListener('document: click')
  // @HostListener('window: click')
  // onclick(ev: MouseEvent) {
  //   this.screenGo();
  // }

  ngAfterViewInit() {
    setTimeout( () => {
      this.screenGo();
    },  2000);
  }



  screenGo() {
    // this.welcomePar = document.querySelector('p');
    // this.welcomePar.parentElement.removeChild(this.welcomePar);
    this.welcomeMessage = document.querySelector('h4');
    // this.blinkMe = document.querySelector('.blink_me');
    this.hidden = true;

    setTimeout(() => {
     this.preloadFinish.emit(true);
    }, 7500);

    setTimeout(() => {
      this.welcomeMessage.textContent = 'KAaS DREM';
      this.welcomeMessage.classList.replace('before', 'after');
      // this.blinkMe.classList.replace('blink_me', 'not_blink');
      this.hidden = false;
    }, 3100);
  }

  constructor() {

  }

  ngOnInit() {
  }

}
