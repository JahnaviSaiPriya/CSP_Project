import { Component } from '@angular/core';

@Component({
  selector: 'app-dowry',
  templateUrl: './dowry.component.html',
  styleUrls: ['./dowry.component.css']
})
export class DowryComponent {
  isDropdownOpen: boolean = false;

  openDropdown(event: MouseEvent) {
    this.isDropdownOpen = true;
  }
  
  closeDropdown(event: MouseEvent) {
    this.isDropdownOpen = false;
  }
}
