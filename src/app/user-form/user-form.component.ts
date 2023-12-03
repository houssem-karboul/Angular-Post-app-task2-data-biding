import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userName!: string;
  userEmail!: string;
  userAddress!: string;

  ngOnInit(): void {
    this.userName = '';
    this.userEmail = '';
    this.userAddress = '';
  }
}
