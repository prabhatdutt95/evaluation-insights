import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chatWindow = false;
  nonGraphStaticData = [
    {
      name: "Tools Evaluated",
      value: 40,
      icon: 'fas fa-cogs fa-3x'
    },
    {
      name: "Revenue Impact",
      value: 1000000,
      unit: 'USD',
      icon: 'fas fa-receipt fa-3x'
    },
    {
      name: "Projects covered",
      value: 10,
      icon: 'fa fa-project-diagram fa-3x'
    },
    {
      name: "Number of ongoing proposals",
      value: 10,
      icon: 'fa fa-handshake fa-3x'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  openChatWindow() {
    this.chatWindow = true;
  }
  closeChatWindow() {
    this.chatWindow = false;
  }

}
