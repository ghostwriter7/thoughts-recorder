import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() sidenavToggled = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav(): void {
    this.sidenavToggled.emit();
  }
}
