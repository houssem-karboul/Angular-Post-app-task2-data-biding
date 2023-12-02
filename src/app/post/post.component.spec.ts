import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent]
    });

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display post title and content', () => {
    component.post =   {
      id: 2,
      title: "CSS Styling Tips",
      content: "What are some best practices for styling responsive web designs with CSS?",
      author: "Bob",
      createdAt: new Date("2023-10-24T14:30:00Z"),
      likes: 8,
      comments: ["Use media queries for responsive design.", "Consider using CSS frameworks like Bootstrap."]
    }; 
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.post-title');
    const contentElement = fixture.nativeElement.querySelector('.post-content');

    expect(titleElement.textContent).toContain('Test Title');
    expect(contentElement.textContent).toContain('Test Content');
  });

});
