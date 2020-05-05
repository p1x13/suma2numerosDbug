import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;

  beforeEach(async(() => {
    app = new AppComponent();
    }));
  it('la suma debe dar 10',async(() =>{
    expect(app.add(5,2)).toEqual(10);
  }));
});