import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelsPage } from './travels.page';

describe('TravelsPage', () => {
  let component: TravelsPage;
  let fixture: ComponentFixture<TravelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
