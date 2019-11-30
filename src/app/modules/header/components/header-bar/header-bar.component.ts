import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  headerLinks = [
    { link: ['/', 'dashboard'], icon: 'home' },
    { link: ['/', 'settings'], icon: 'cog' },
  ];

  subLinks = [
    { link: ['/', 'dashboard'], label: 'Dashboard' },
    { link: ['/', 'posts'], label: 'Posts' },
    { link: ['/', 'todos'], label: 'Todos' },
    { link: ['/', 'users'], label: 'Users' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
