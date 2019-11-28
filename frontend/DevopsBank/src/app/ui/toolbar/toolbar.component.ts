import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() menuClick: EventEmitter<any>;
  isActive = false;

  constructor() {
    this.menuClick = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  openSidenav() {
    this.menuClick.emit();
  }

}
