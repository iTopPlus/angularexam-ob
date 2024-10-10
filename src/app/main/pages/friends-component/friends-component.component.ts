import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './friends-component.component.html',
  styleUrl: './friends-component.component.scss'
})
export class FriendsComponentComponent {
  page: string = 'empty';
  mode: string = 'username';
  search: string = '';

  changeTo(target: string){
    this.page = target;
  }

  changeMode(mode: string){
    this.mode = mode;
  }
}
