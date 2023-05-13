import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModaPage } from './moda.page';

describe('ModaPage', () => {
  let component: ModaPage;
  let fixture: ComponentFixture<ModaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
