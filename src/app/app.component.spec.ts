import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach(async(() => {
    app = new AppComponent();
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[]
    }).compileComponents();

    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .createComponent(AppComponent);
    }));
  
    it('la suma debe dar 10',async(() =>{
    expect(app.add(5,5)).toEqual(10);
    }));

    it('la suma debe dar 10',async(() =>{
    
      (<HTMLInputElement>document.getElementById("a")).valueAsNumber= 5;
      (<HTMLInputElement>document.getElementById("b")).valueAsNumber= 5;
      document.getElementById("calc").click();
      expect((<HTMLInputElement>document.getElementById("result")).value).toBe('10'); 
      }
  ));
});