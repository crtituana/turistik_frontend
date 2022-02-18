import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaUserComponent } from './reserva-user.component';

describe('ReservaUserComponent', () => {
  let component: ReservaUserComponent;
  let fixture: ComponentFixture<ReservaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
