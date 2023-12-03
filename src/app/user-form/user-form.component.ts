import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface User {
  name: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';
  userAddress: string = '';

  users: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'address'];
  dataSource = new MatTableDataSource<User>(this.users);

  ngOnInit(): void {
  }

  saveUser() {
    // Add the user to the list
    const newUser: User = { name: this.userName, email: this.userEmail, address: this.userAddress };
    this.users.push(newUser);

    // Create a new instance of MatTableDataSource with the updated data
    this.dataSource = new MatTableDataSource<User>(this.users);

    // Clear the form fields
    this.userName = '';
    this.userEmail = '';
    this.userAddress = '';
  }
}
