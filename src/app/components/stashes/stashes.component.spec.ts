import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StashesComponent } from './stashes.component';
import {HttpClientModule} from '@angular/common/http';
import {StashesService} from './stashes.service';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('StashesComponent', () => {
  let component: StashesComponent;
  let fixture: ComponentFixture<StashesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StashesComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [StashesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StashesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
