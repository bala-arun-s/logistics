import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemStatusPage } from './item-status.page';

describe('ItemStatusPage', () => {
  let component: ItemStatusPage;
  let fixture: ComponentFixture<ItemStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
