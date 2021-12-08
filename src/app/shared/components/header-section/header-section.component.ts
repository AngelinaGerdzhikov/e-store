import { Component, OnInit } from '@angular/core';
import { slideInFromRight } from 'shared/animations/slideIn.animation';

@Component({
  selector: 'header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
  animations: [
    slideInFromRight
  ]
})
export class HeaderSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
