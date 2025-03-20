import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IvtmPruebaComponentComponent } from './ivtm_prueba_component';

describe('IvtmPruebaComponentComponent', () => {
  let component: IvtmPruebaComponentComponent;
  let fixture: ComponentFixture<IvtmPruebaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvtmPruebaComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IvtmPruebaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
