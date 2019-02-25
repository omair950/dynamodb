import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  // addBusiness(  thread_id, threadtype, createon,updateon,channelname) {
  //   const obj = {
  //       thread_id:   thread_id,
  //       threadtype: threadtype,
  //     createon: createon,
  //     updateon:updateon,
  //     channelname:channelname

  //   }; 
  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }
    // console.log(obj);
    // this.http.post(`${this.uri}/add`, obj)
    //     .subscribe(res => console.log('Done'));
  
}