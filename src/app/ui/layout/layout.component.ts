import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public menuItems: { path: string, icon: string, label: string }[] = [
    { path: '/home', icon: 'home', label: 'home'},
    { path: '/home/folder', icon: 'folder', label: 'Add new folder'},
    { path: '/auth/signup', icon: 'abc', label: 'abc'},
  ];

  public close() {
    this.sidenav.close();
  }

  public toggle() {
    this.sidenav.toggle();
  }

}
