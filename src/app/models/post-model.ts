  export interface Post {
    id: number; // Unique identifier for the post
    title: string; // Title of the post
    content: string; // Content of the post, the actual message or question
    author: string; // Name of the author of the post
    createdAt: Date; // Date and time when the post was created
    likes: number; // Number of likes the post has received
    comments: string[]; // Array of comments associated with the post
  }