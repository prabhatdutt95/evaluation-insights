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
      name: "Total Income",
      value: 953000,
      unit: 'USD',
      icon: 'fas fa-wallet fa-3x'
    },
    {
      name: "Total Expense",
      value: 236000,
      unit: 'USD',
      icon: 'fas fa-receipt fa-3x'
    },
    {
      name: "Total Assets",
      value: 987563,
      icon: 'fa fa-cogs fa-3x'
    },
    {
      name: "Total Staff",
      value: 9846,
      icon: 'fa fa-users fa-3x'
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
