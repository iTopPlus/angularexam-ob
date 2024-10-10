import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-in-component.component.html',
  styleUrl: './sign-in-component.component.scss'
})
export class SignInComponentComponent {
  constructor(private router: Router){};

  signInCommit(){
    this.router.navigate(['/home']);
  }

  turnBack(){
    this.router.navigate(['/firsttime']);
  }
}
