import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl, NgForm, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('toggleComp') toggleComp: ToggleComponent | undefined;
  @ViewChild('toggleBtn') toggleBtn: ElementRef<HTMLButtonElement> | undefined;
  title = 'angular-100-doc';
  name='';
  email = '';
  address = ''
  isDanger = false;
  isWarning = false;
  checked=true;
  counter = 1;
  showTab = true;
  form: any


  constructor(){
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      skills: new FormArray([])
    })
  };

  get fullname(){
    return this.form.get("fullName")
  };

  get Email(){
    return this.form.get("email")
  }

  get Address(){
    return this.form.get("address")
  };

  get Skills(){
    return this.form.get("skills")
  }

  addSkills(skill: HTMLInputElement){
      (this.form.get("skills") as FormArray).push(new FormControl(skill.value));
      skill.value = ''
  };

  removeSkill(index: number){
    this.Skills.removeAt(index);
  }

  ngOnInit(){
    const osTest$ = new Observable(observer => {
      observer.next('Returned from observation');
      observer.next("This is the second observation");
      observer.next("This is the third observation")
    }).subscribe(value => console.log(value));
    const osTest = function(){

    }
    console.log('On init', this.toggleComp);
  }

  ngAfterViewInit(){
    console.log(this.toggleComp);
  }

  saveData(f: NgForm){
  }


  onSubmit(){
    console.log(this.form.value)
  }

  getValue(f: FormControl){

  }
}
