import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAnalyzersComponent } from './client-analyzers.component';

describe('ClientAnalyzersComponent', () => {
  let component: ClientAnalyzersComponent;
  let fixture: ComponentFixture<ClientAnalyzersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAnalyzersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAnalyzersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
