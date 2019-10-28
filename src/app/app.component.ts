import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  preloadFinishPar = false;
  title = 'Chaos Dream';
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;


    onWelcomeDone() {
      this.preloadFinishPar = true;
    }

  ngOnInit() {

    this.myStyle = {
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'z-index': -1,
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
    };

this.myParams = {

  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
        mode: 'repulse',
      }
    }
  },
        'particles': {
          size: {
            anim: {
              speed: 20,
            },
          },
            move: {
              straight: true,
              direction: 'top',
              out_mode: 'out',
              speed: .75,
              bounce: false
            },
            opacity: {
              value: 1
            },
            line_linked: {
              opacity: .0

            },
            number: {
                value: 200,
            },
            color: {
                value: ['#ffffff', '#000000', '#333333']
            },
            shape: {
                type: ['circle', 'triangle']
            },
    }
};
}
}
