import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SenderReceiverPage } from './sender-receiver.page';

describe('SenderReceiverPage', () => {
  let component: SenderReceiverPage;
  let fixture: ComponentFixture<SenderReceiverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenderReceiverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SenderReceiverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
