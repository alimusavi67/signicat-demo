import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StashItemComponent } from './stash-item.component';

describe('StashItemComponent', () => {
  let component: StashItemComponent;
  let fixture: ComponentFixture<StashItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StashItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StashItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    window.history.pushState({ stash: {items: []}}, 'state', '/items');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
