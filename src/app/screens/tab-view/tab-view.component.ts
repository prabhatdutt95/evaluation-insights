import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css']
})
export class TabViewComponent implements OnInit {

  activeTab = "Home";
  avaiableTabs = [
    {
      name: "Home",
      routeTo: "home",
      active: true
    },
    {
      name: "Technology",
      routeTo: "tech",
      dropDownItems: [
        {
          name: "UI",
          routeTo: "ui"
        },
        {
          name: "Java",
          routeTo: "java"
        },
        {
          name: "Angular",
          routeTo: "angular"
        }
      ]
    },
    {
      name: "Tools",
      routeTo: "tools"
    },
    {
      name: "Frameworks",
      routeTo: "frameworks"
    },
    {
      name: "Case Studies",
      routeTo: "case"
    },
    {
      name: "Contact Us",
      routeTo: "contact"
    }
  ]

  constructor() { }
  ngOnInit() {
  }

  changeActiveTab(name){
    this.activeTab = name
  }

}
