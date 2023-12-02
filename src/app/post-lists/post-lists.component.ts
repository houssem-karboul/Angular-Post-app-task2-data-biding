import { Post } from '../models/post-model.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit{
dummyPosts: any;
  ngOnInit(): void {

     // Declare an array of posts
     this.dummyPosts = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      content: "Hello, I am new to JavaScript. Can someone recommend good learning resources?",
      author: "Alice",
      createdAt: new Date("2023-10-25T08:00:00Z"),
      likes: 10,
      comments: ["Check out MDN Web Docs!", "Try freeCodeCamp's JavaScript course."]
    },
    {
      id: 2,
      title: "CSS Styling Tips",
      content: "What are some best practices for styling responsive web designs with CSS?",
      author: "Bob",
      createdAt: new Date("2023-10-24T14:30:00Z"),
      likes: 8,
      comments: ["Use media queries for responsive design.", "Consider using CSS frameworks like Bootstrap."]
    },
    {
      id: 3,
      title: "React vs Angular",
      content: "I'm trying to decide between React and Angular for my project. Any insights?",
      author: "Charlie",
      createdAt: new Date("2023-10-23T11:45:00Z"),
      likes: 15,
      comments: ["React is more flexible.", "Angular provides a full framework experience."]
    },
    {
      id: 4,
      title: "Learning Python Basics",
      content: "I want to start learning Python. What are the fundamental concepts I should focus on?",
      author: "David",
      createdAt: new Date("2023-10-22T09:20:00Z"),
      likes: 12,
      comments: ["Start with variables, data types, and control structures.", "Practice coding exercises on platforms like LeetCode."]
    },
    {
      id: 5,
      title: "Web Development Project Ideas",
      content: "Looking for interesting web development project ideas. Any suggestions?",
      author: "Eva",
      createdAt: new Date("2023-10-21T16:10:00Z"),
      likes: 11,
      comments: ["Build a portfolio website.", "Create a web app for tracking daily habits."]
    }
  ];  
  
    throw new Error('Method not implemented.');
  }

}
