import { Component, OnInit, AfterContentInit } from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import { NgProgressService} from 'ngx-progressbar'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'app';
  constructor(private router: Router, private progress: NgProgressService){}
  
  ngOnInit() {
    this.router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.progress.start();
      }
      if(event instanceof NavigationEnd) {
        this.progress.done();
      }      
    });
  }
  ngAfterContentInit(){    
   this.progress.start();
   setTimeout(()=>{
     this.progress.done();
   }, 2000);


  }
  
}
