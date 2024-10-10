import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-up-component.component.html',
  styleUrl: './sign-up-component.component.scss'
})
export class SignUpComponentComponent {
  setupProfile: boolean = false;
  constructor(private router: Router){};

  signUpCommit(){
    this.setupProfile = true;
  }

  signIn(){
    this.router.navigate(['/sign-in']);
  }

  turnBack(){
    this.router.navigate(['/firsttime']);
  }
}
