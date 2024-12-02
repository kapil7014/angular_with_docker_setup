import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fullName: string;
  email: string;

  public userList: Array<any> = [];
  constructor() {
    this.fullName = "";
    this.email = "";
  }

  ngOnInit(): void {

  }

  submitOnClick() {
    this.userList.push({
      fullname: this.fullName,
      email: this.email
    });
    console.log(this.userList);
  }

}
