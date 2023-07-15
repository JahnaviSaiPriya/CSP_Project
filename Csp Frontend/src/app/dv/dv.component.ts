import { Component } from '@angular/core';

@Component({
  selector: 'app-dv',
  templateUrl: './dv.component.html',
  styleUrls: ['./dv.component.css']
})
export class DvComponent {
  isDropdownOpen: boolean = false;

  openDropdown(event: MouseEvent) {
    this.isDropdownOpen = true;
  }
  
  closeDropdown(event: MouseEvent) {
    this.isDropdownOpen = false;
  }
}
