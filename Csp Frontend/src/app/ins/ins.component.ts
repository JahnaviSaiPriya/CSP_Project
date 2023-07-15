import { Component } from '@angular/core';

@Component({
  selector: 'app-ins',
  templateUrl: './ins.component.html',
  styleUrls: ['./ins.component.css']
})
export class InsComponent {
  isDropdownOpen: boolean = false;

  openDropdown(event: MouseEvent) {
    this.isDropdownOpen = true;
  }
  
  closeDropdown(event: MouseEvent) {
    this.isDropdownOpen = false;
  }
}
