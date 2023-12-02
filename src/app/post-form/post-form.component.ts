import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postTitle !: string;
  postDetails!: string;
  imageUrl!: string;
  postUrl!: string;
  addBackground!: boolean;
  ngOnInit(): void {
    this.postTitle = '';
    this.postDetails = '';
    this.imageUrl = '';
    this.postUrl = '';
    this.addBackground = false;
    throw new Error('Method not implemented.');
  }
  
}


