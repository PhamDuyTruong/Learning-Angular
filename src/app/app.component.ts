import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('toggleComp') toggleComp: ToggleComponent | undefined;
  @ViewChild('toggleBtn') toggleBtn: ElementRef<HTMLButtonElement> | undefined;
  title = 'angular-100-doc';
  name = 'angular 13';
  isDanger = false;
  isWarning = false;
  checked=true;
  counter = 1;
  showTab = true;

  ngOnInit(){
    console.log('On init', this.toggleComp);
  }

  ngAfterViewInit(){
    console.log(this.toggleComp);
  }
}
