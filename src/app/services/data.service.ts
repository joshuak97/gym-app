import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
   
  }

  getUsers() {
   return new Promise((resolve, reject) => {
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }    

  getMenuOpts() {
    return new Promise((resolve, reject) => {
      this.http.get('/assets/data/menu.json').subscribe(res => {
        resolve(res);
    }, err => {
      reject(err);
    });
  });
}

getMenuOptsAdmin() {
  return new Promise((resolve, reject) => {
    this.http.get('/assets/data/menu-admin.json').subscribe(res => {
      resolve(res);
  }, err => {
    reject(err);
  });
});
}

}
