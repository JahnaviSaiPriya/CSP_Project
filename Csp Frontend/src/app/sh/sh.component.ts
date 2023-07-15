import { Component } from '@angular/core';

@Component({
  selector: 'app-sh',
  templateUrl: './sh.component.html',
  styleUrls: ['./sh.component.css']
})
export class ShComponent {
  isDropdownOpen: boolean = false;

  openDropdown(event: MouseEvent) {
    this.isDropdownOpen = true;
  }
  
  closeDropdown(event: MouseEvent) {
    this.isDropdownOpen = false;
  }
}
