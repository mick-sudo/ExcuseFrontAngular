import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpMessageComponent } from './http-message.component';

describe('HttpMessageComponent', () => {
  let component: HttpMessageComponent;
  let fixture: ComponentFixture<HttpMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
