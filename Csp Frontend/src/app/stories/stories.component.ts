import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent {
  isDropdownOpen: boolean = false;

  openDropdown(event: MouseEvent) {
    this.isDropdownOpen = true;
  }
  
  closeDropdown(event: MouseEvent) {
    this.isDropdownOpen = false;
  }
  
 
  currentIndex = 0;
  totalStories = 3; // Update this value with the actual total number of stories

  previousStory() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.totalStories - 1;
    }
  }

  nextStory() {
    this.currentIndex++;
    if (this.currentIndex >= this.totalStories) {
      this.currentIndex = 0;
    }
  } 
 
}

