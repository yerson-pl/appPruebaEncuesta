import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import * as PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

/*
  Generated class for the EmployeeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmployeeProvider {
  public pdb;
  public employees;
  constructor(public http: HttpClient) {
    console.log('Hello EmployeeProvider Provider');
  }

  createPouchDB() {
    PouchDB.plugin(cordovaSqlitePlugin);
    this.pdb = new PouchDB('employees.db',
    { adapter: 'cordova-sqlite' });
  }

  create(employee) {
    return this.pdb.post(employee);
  }

  update(employee) {
    return this.pdb.put(employee);
  }

  delete(employee) {
    return this.pdb.delete(employee);
  }


}
