import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('result', {static: true}) 
  result : any; 

  title = 'ng-jasmine';

  public ngOnInit(): void{

  }

  public add(a:number, b:number):number{    
    return a + b;
  }

  public printAdd(a:number,b:number): any{
    this.result.nativeElement.value = this.add(a,b);
  }

}
