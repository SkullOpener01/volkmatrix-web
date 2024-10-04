import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatScreenComponent } from './user-chat-screen.component';

describe('UserChatScreenComponent', () => {
  let component: UserChatScreenComponent;
  let fixture: ComponentFixture<UserChatScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserChatScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserChatScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
