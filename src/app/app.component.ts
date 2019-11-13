import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PGTourAdmin';

  constructor(private elementRef: ElementRef, private router: Router) {

  }

  // ngAfterViewInit() {
  //   this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#5D4B9D';
  // }

  logar() {
    this.router.navigate(['/home']);
  }
}
