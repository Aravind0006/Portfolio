import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  constructor(private http:HttpClient) { }

  postEmployee(go:any){
    return this.http.post("http://catodotest.elevadosoftwares.com/Employee/InsertEmployee",go);
  }
  GetEmployee(){
    return this.http.get("http://catodotest.elevadosoftwares.com/Employee/GetAllEmployeeDetails")
    }
}
