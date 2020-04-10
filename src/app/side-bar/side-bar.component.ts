import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }
  icon = [
    'fa fa-heartbeat',
    'fa fa-eye',
    'fas fa-bone',
    'fas fa-brain',
    'fas fa-tooth',
    'fa fa-warning'

  ];

  ngOnInit(): void {
  }


}
