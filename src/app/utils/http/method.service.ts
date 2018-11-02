import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class MethodService {

  public api = 'http://127.0.0.1:3000/';


  constructor(
    private http: HttpClient
  ) { }
  //this method will retunr the token
  getAuthToken() {
    return localStorage.getItem('token');
  }

  /**
   * Perfors any type of http request
   * @param urlServices
   * @param query
   * @return {Response}
   */

  public get(urlServices: string, query: any) {

    let getUrl;

    if (query) {
      getUrl = `${urlServices}?filter=${query}`;
    } else {
      getUrl = this.api + urlServices;
    }

    return this.http.get(getUrl);

  }

  /**
  * Perfors any type of http request
  * @param urlServices
  * @param query
  * @return {Response}
  */

  getOne(urlServices: string, id: string, query: any) {

    let getUrl;

    if (query) {
      getUrl = `${urlServices}/${urlServices}/?filter=${query}`;
    } else {
      getUrl = `${urlServices}/${id}`;
    }

    return this.http.get(this.api + getUrl);

  }

  /**
  * Perfors any type of http request
  * @param urlServices
  * @param data
  * @return {Response}
  */

  post(urlServices: string, id: string, data: any) {
    return this.http.post(this.api + `${urlServices}/${id}`, data)
  }

  /**
  * Perfors any type of http request
  * @param urlServices
  * @param id
  * @param data
  * @return {Response}
  */

  put(urlServices: string, id: string, data: any) {
    return this.http.put(this.api + `${urlServices}/${id}`, data)
  }

  /**
  * Perfors any type of http request
  * @param urlServices
  * @param id
  * @return {Response}
  */

  delete(urlServices: string, id: string) {
    return this.http.delete(this.api + `${urlServices}/${id}`)
  }

}
