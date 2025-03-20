import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IbiComponentComponent } from './ibi.component';

describe('IbiComponentComponent', () => {
  let component: IbiComponentComponent;
  let fixture: ComponentFixture<IbiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IbiComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IbiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
