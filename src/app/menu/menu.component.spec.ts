import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    // Configure testing module
    TestBed.configureTestingModule({
      declarations: [MenuComponent]
    });

    // Create component and fixture
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy(); // Check if the component is created successfully
  });

  it('should have menu items', () => {
    fixture.detectChanges(); // Trigger change detection

    const menuItems = fixture.nativeElement.querySelectorAll('.menu-item');
    expect(menuItems.length).toBeGreaterThan(0); // Check if there are menu items in the template
  });

});
