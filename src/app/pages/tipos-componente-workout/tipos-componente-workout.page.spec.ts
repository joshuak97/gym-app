import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiposComponenteWorkoutPage } from './tipos-componente-workout.page';

describe('TiposComponenteWorkoutPage', () => {
  let component: TiposComponenteWorkoutPage;
  let fixture: ComponentFixture<TiposComponenteWorkoutPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposComponenteWorkoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiposComponenteWorkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
