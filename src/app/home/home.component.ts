import { Component, OnInit, ViewEncapsulation, Renderer } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; 
import { Router } from '@angular/router';

import {ApiService} from './../services/api.service';
import {CommonService} from './../services/common.service';

import {HomeModel} from './home.model';
import {AppConstant} from './../app.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;  
  registerForm: FormGroup;
  errorMessageResources: any;
  masterDataList: any;
  maxDate: any;
  constructor(private formBuilder: FormBuilder, public afAtuh: AngularFireAuth, public commonService: CommonService,
    private router: Router, public apiService: ApiService) { }

  ngOnInit() {
    this.errorMessageResources = AppConstant.errorMessageResources; 
    this.buildLoginForm();
    this.buildRegisterForm();
    this.getMasterData();
    this.registerForm.controls['gender'].valueChanges.subscribe(newGender => {
      this.registerForm.controls['dob'].reset(null, { emitEvent: false });
      this.registerForm.controls['dob'].enable({onlySelf: true, emitEvent: false});
      if (newGender.value == 'female') {        
        this.maxDate = new Date(new Date().setFullYear((new Date().getUTCFullYear() - 18)));        
      }
      else if (newGender.value == 'male') {        
       this.maxDate = new Date(new Date().setFullYear((new Date().getUTCFullYear() - 21)));
      }
    })
  }
  buildLoginForm() {
    this.loginForm = this.commonService.buildLoginFormService(); 
  }
  buildRegisterForm() {
    this.registerForm =  this.commonService.buildRegisterFormService(); 
  }
  getMasterData() {
    this.apiService.getFirebaseObjectObservable('/masterdetails').subscribe(data => {  
      this.masterDataList = data;    
      console.log(JSON.stringify(this.masterDataList));
    },    
    error => {     
      // handle/report the error
    }
  )
  }
  onSubmit(formData, isValid) {
    if(isValid) {     
      this.commonService.signInEmailAndPassword(formData)
      .then((user) => {       
        this.router.navigate(['/dashboard']);      
    }).catch((err) => {      
       
    });
    }
   
  }
  Submit(formData, isValid) {
    if(isValid) {      
        console.log(JSON.stringify(formData));
       //console.log(JSON.stringify(formData));
    }
  }

}
 