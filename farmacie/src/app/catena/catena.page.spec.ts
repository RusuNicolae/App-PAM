import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatenaPage } from './catena.page';

describe('CatenaPage', () => {
  let component: CatenaPage;
  let fixture: ComponentFixture<CatenaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatenaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
