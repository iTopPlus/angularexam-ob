import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-group-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-component.component.html',
  styleUrl: './group-component.component.scss'
})
export class GroupComponentComponent {
  img: string | ArrayBuffer | null = null;
  alreadyInGroup: boolean = true;

  buttonActive(event: Event){
    const element = event.target as HTMLElement;
    element.classList.toggle('active');
  }

  modalActive(){
    const modal = document.querySelector('.modal-box');
    if (modal) {
      modal.classList.toggle('display-none');
    }
  }

  imageAdd(event: Event){
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.img = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
