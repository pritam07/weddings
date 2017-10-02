import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {MzToastService} from 'ng2-materialize';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import {NgProgressService} from 'ngx-progressbar';
@Injectable()
export class ApiService {

  constructor(public afDb: AngularFireDatabase, private toastService: MzToastService,
    public progressService: NgProgressService) { }
  getFirebaseObjectObservable(path) {
    this.progressService.start();
    let getObjObservable = this.afDb.object(path).valueChanges().map(data => data).catch(err => { return Observable.of(this.showError())});
    getObjObservable.subscribe(
      data => this.progressService.done()
     )
     return getObjObservable;
    //return this.afDb.object(path).valueChanges().map(data => data).catch(err => { return Observable.of(this.showError())}).subscribe(() => { return this.progressService.start();});
  }
  getFirebaseListObservable(path) {
    this.progressService.start();
    return this.afDb.list(path).valueChanges().map(data => data).catch(err => { return Observable.of(this.showError())});
  }
  showError() {
    this.toastService.show('Server is not responding', 4000, 'black');  
  }

}
