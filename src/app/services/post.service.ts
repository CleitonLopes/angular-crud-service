import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PostService {

  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient:HttpClient) {

  }

  getAll() {

      return this.httpClient.get(`${this.baseUrl}/posts`)

  }

}
