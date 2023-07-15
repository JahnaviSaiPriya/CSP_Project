import { Component } from '@angular/core';

@Component({
  selector: 'app-acid',
  templateUrl: './acid.component.html',
  styleUrls: ['./acid.component.css']
})
export class AcidComponent {
  isDropdownOpen: boolean = false;

  openDropdown(event: MouseEvent) {
    this.isDropdownOpen = true;
  }
  
  closeDropdown(event: MouseEvent) {
    this.isDropdownOpen = false;
  }
}
