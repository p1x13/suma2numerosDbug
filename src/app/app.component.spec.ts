import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let n=3;
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

    //After every try 
    afterEach(async(() =>{
    n++;
  }));
  
    it('la suma debe dar 10 metodoSuma',async(() =>{
    expect(app.add(5,5)).toEqual(10);
    }));
    
   it('contiene Suma', async(() => {
     const title = document.getElementById('title').innerHTML;
     expect(title).toContain('Suma');
   }
   ));

   it('la suma debe dar 10 llenadoHTML',async(() =>{  
    (<HTMLInputElement>document.getElementById("a")).valueAsNumber= n;
    (<HTMLInputElement>document.getElementById("b")).valueAsNumber= 5;
    document.getElementById("calc").click();
    expect((<HTMLInputElement>document.getElementById("result")).value).toBe('10'); 
    }
    ));

    it('contiene Suma', async(() =>{
      const title = document.getElementById('title').innerHTML;
      expect(title).toContain('Suma');
    }));

    it('titulo está definido', async(() =>{
      const title = document.getElementById('title').innerHTML;
      expect(title).toBeDefined();
    }));
    it('la Suma es mayor a 6', async(() =>{
      (<HTMLInputElement>document.getElementById("a")).valueAsNumber= n;
      (<HTMLInputElement>document.getElementById("b")).valueAsNumber= 5;
      document.getElementById("calc").click();
      expect((<HTMLInputElement>document.getElementById("result")).value).toBeGreaterThan(10); 
    }));

});