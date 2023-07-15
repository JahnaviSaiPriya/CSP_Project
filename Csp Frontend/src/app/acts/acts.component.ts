import { Component } from '@angular/core';

@Component({
  selector: 'app-acts',
  templateUrl: './acts.component.html',
  styleUrls: ['./acts.component.css']
})
export class ActsComponent {
  isDropdownOpen: boolean = false;

  openDropdown(event: MouseEvent) {
    this.isDropdownOpen = true;
  }
  
  closeDropdown(event: MouseEvent) {
    this.isDropdownOpen = false;
  }
}
