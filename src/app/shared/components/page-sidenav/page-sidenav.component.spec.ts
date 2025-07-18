import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSidenavComponent } from './page-sidenav.component';

describe('PageSidenavComponent', () => {
  let component: PageSidenavComponent;
  let fixture: ComponentFixture<PageSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageSidenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
