import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseURL: any; 

  constructor( private http:HttpClient) { }

// get products
 public getAllProducts():Observable<any>{
  return this.http.get(environment.productUrl)
  }
  //get users
  
}

