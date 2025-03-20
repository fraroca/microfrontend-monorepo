import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IvtmComponentComponentComponent } from './ivtm_component.component';

describe('IvtmComponentComponentComponent', () => {
  let component: IvtmComponentComponentComponent;
  let fixture: ComponentFixture<IvtmComponentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvtmComponentComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IvtmComponentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
