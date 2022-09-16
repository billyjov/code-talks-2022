import { ComponentMirror, reflectComponentType } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectCommonComponent } from './reflect-common.component';
/**
 *  Old way: https://stackoverflow.com/questions/46937746/
 *
 *  ✨ Use reflectComponentType to check some arguments
 */
fdescribe('ReflectCommonComponent', () => {
  let component: ReflectCommonComponent;
  let fixture: ComponentFixture<ReflectCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReflectCommonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReflectCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have some properties', () => {
    const mirror: ComponentMirror<ReflectCommonComponent> | null = reflectComponentType(ReflectCommonComponent);
    expect(mirror?.type).toBe(ReflectCommonComponent);
    expect(mirror?.isStandalone).toBe(true);
    expect(mirror?.inputs).toEqual([
      {
        propName: 'username',
        templateName: 'username'
      }
    ])
  });
});
