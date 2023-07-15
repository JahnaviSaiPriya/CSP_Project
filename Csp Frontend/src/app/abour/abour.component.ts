import { Component } from '@angular/core';

@Component({
  selector: 'app-abour',
  templateUrl: './abour.component.html',
  styleUrls: ['./abour.component.css']
})
export class AbourComponent {
  isDropdownOpen: boolean = false;

  openDropdown(event: MouseEvent) {
    this.isDropdownOpen = true;
  }
  
  closeDropdown(event: MouseEvent) {
    this.isDropdownOpen = false;
  }
  surveyImages: string[] = [
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ];
}
