import { Component } from '@angular/core';
import { GroupComponentComponent } from '../pages/group-component/group-component.component';
import { FriendsComponentComponent } from '../pages/friends-component/friends-component.component';
import { CommonModule } from '@angular/common';
import { NotificationComponentComponent } from '../pages/notification-component/notification-component.component';
import { ProfileComponentComponent } from '../pages/profile-component/profile-component.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
            GroupComponentComponent, 
            FriendsComponentComponent, 
            CommonModule, 
            NotificationComponentComponent, 
            ProfileComponentComponent
          ],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {
  modaltarget: string | null = '';

  modalActive(active: boolean, modaltarget: string | null){
    this.modaltarget = modaltarget;
    const modal = document.querySelector('.modal');
    if (active) {
      modal?.classList.remove('display-none');
    }else {
      modal?.classList.add('display-none');
    }
  }
}
