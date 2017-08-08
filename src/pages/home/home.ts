import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 private goat : FormGroup;

  constructor(public navCtrl: NavController,private formBuilder: FormBuilder) {
       this.goat = this.formBuilder.group({
       tagNo: ['', Validators.required],
       breed: ['',Validators.required],
       birthDate: [new Date().toISOString(),Validators.required],
       birthWeight: ['',Validators.required],
       femaleTagNo: ['',Validators.required],
       femaleBreed: ['1',Validators.required],
       horn:['0',Validators.required],
       maleTagNo: ['',Validators.required],
       maleBreed: ['1',Validators.required],
       color: ['',Validators.required]

      });
  }

  addGoat(form){
    debugger;
    if(this.goat.valid){
      console.log(this.goat.value);
    }else{
      return false;
    }
      
  }; 

}
