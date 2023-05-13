import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModafotosPage } from './modafotos.page';

describe('ModafotosPage', () => {
  let component: ModafotosPage;
  let fixture: ComponentFixture<ModafotosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModafotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
