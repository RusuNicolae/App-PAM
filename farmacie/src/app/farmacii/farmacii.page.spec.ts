import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FarmaciiPage } from './farmacii.page';

describe('FarmaciiPage', () => {
  let component: FarmaciiPage;
  let fixture: ComponentFixture<FarmaciiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmaciiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FarmaciiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
