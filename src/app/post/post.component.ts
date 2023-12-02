import { Component, Input } from '@angular/core';
import { Post } from '../models/post-model.js';

/**
 * PostComponent displays individual posts with their details.
 */
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: Post; // Input property for receiving post data from parent component

  /**
   * Constructor for PostComponent.
   */
  constructor() { }
}

