import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ariaExpanded = false;

  @HostListener('window: click')
  onclick(ev: MouseEvent) {
    if (this.ariaExpanded === true)  {
      this.ariaExpanded = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
