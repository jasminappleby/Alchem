import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementConsoleComponent } from './management-console.component';

describe('ManagementConsoleComponent', () => {
  let component: ManagementConsoleComponent;
  let fixture: ComponentFixture<ManagementConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementConsoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
