import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfPagTestComponent } from './inf-pag-test.component';

describe('InfPagTestComponent', () => {
  let component: InfPagTestComponent;
  let fixture: ComponentFixture<InfPagTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfPagTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfPagTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
