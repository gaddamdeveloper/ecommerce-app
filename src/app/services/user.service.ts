import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
// create user
  public createUser(user:any){
    return this.http.post(environment.userUrl,user);
  }
  public getOneUser(id:any){
    return this.http.get(`${environment.userUrl}/${id}`)
  }
   
  public updateUser(id:any,user:any){
    return this.http.put(`${environment.userUrl}/${id}`,user)
  }

public createUserAddress(address:any){
  return this.http.post(`${environment.addressUrl}`,address)
}

public getUserAddress(){
  return this.http.get(`${environment.addressUrl}`)
}
public deleteUserAddress(id:any){
  return this.http.delete(`${environment.addressUrl}/${id}`)
}
public getAddressById(id:any){
  return this.http.get(`${environment.addressUrl}/${id}`)
}

public updateSelectedIdAddress(id:any,address:any){
  return this.http.put(`${environment.addressUrl}/${id}`,address)
}

}
