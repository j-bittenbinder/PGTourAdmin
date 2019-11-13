import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private elementRef: ElementRef, private router: Router) { }

  ngOnInit() {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#5D4B9D';
  }

  logar() {
    this.router.navigate(['/home']);
  }
}
