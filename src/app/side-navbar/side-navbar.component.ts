import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
import { SlideInOutAnimation } from '../animations';
interface Tab{
  tab: string;
  path: string;
  icon: string;
  usertype: string;
}


@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
  animations: [SlideInOutAnimation]
})
export class SideNavbarComponent implements OnInit {


  public tabs: Tab[] = [
    {tab:"Home", path:"home", icon:"home", usertype:"r-a-c"},
    {tab:"Auditors", path:"auditors", icon:"people_alt", usertype:"r"},
    {tab:"Companies", path:"companies", icon:"account_balance", usertype:"r-a"},
    {tab:"Projects", path:"projects", icon:"assignment", usertype:"r-a-c"},
    {tab:"Standards", path:"standards", icon:"description", usertype:"r-a-c"},
    {tab:"Statistics", path:"stats", icon:"analytics", usertype:"r-a-c"},
    {tab:"Calendar", path:"calendar", icon:"event", usertype:"r-a-c"}
  ];



  animationState = 'in';

  toggleShowDiv(divName: string) {
    if (divName === 'divA') {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }
  }

  constructor() { 

  }

  ngOnInit(): void {
  }



}
