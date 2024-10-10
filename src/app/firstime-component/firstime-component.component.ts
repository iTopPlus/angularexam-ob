import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstime-component',
  standalone: true,
  imports: [],
  templateUrl: './firstime-component.component.html',
  styleUrl: './firstime-component.component.scss'
})
export class FirstimeComponentComponent {
  constructor(private router: Router){};

  signIn(){
    this.router.navigate(['/sign-in']);
  }

  signUp(){
    this.router.navigate(['/sign-up']);
  }
}
