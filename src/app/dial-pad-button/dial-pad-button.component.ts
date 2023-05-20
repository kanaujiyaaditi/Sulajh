import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dial-pad-button',
  templateUrl: './dial-pad-button.component.html',
  styleUrls: ['./dial-pad-button.component.css']
})
export class DialPadButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openDialPad(): void {
    window.location.href = 'tel:';
  }
}
