import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user/services/user.service';
import { User } from 'src/app/models/user/user.model';
@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getLoggedInUser();
  }

  getLoggedInUser(){
    this.userService.getLoggedInUser().subscribe(res => {
      this.user = res;
    });
  }

  logout(){
    this.userService.logout();
  }

}
