import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private swipeCoord?: [number, number];
  private swipeTime?: number;
  pageNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 //
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
          const swipe = direction[0] < 0 ? 'next' : 'previous';
          // Do whatever you want with swipe
          // const selectedTab = this.getTabMethod();

          if (swipe === 'next') {
            if (this.pageNumber < 5) {
              this.pageNumber++;
            } else if (this.pageNumber >= 5) {
              this.pageNumber = 0;
            }
          } else if (swipe === 'previous') {
              if (this.pageNumber > 0) {
                this.pageNumber--;
              } else if (this.pageNumber <= 0) {
                this.pageNumber = 5;
              }
          }
      }
    }
    console.log(this.pageNumber);
  }

}
