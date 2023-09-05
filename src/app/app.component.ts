import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeMenuMobile: boolean = false;

  handleToggleMenuMobile() {
    this.activeMenuMobile = !this.activeMenuMobile;
  }
}
