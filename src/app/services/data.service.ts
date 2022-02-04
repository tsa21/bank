import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
//to create headers

//export - can access inside details
export class DataService {
  currentUserName: any
  currentAcno: any
  users: any = {
    1000: { acno: 1000, uname: "Ann", password: "123456", balance: 5000, transaction: [] },
    1001: { acno: 1001, uname: "cann", password: "123456", balance: 5000, transaction: [] },
    1002: { acno: 1002, uname: "dnn", password: "123456", balance: 5000, transaction: [] }
  }


  constructor(private http: HttpClient) {

  }

  getTransaction(acno:any) {
    const data={}
    //asynchrounous
    return this.http.post('http://localhost:3000/gettransaction/'+acno,data,this.getOptions())

  }
  //to store in local storage
  
  //to get values from local storage

  register(acno: any, password: any, uname: any) {
    const data = {
      acno,
      password,
      uname
    }
    //asynchronous events
    return this.http.post('http://localhost:3000/register', data)
  }



  login(acno: any, password: any) {
    let database = this.users
    const data = {
      acno,
      password,

    }
    //asynchronous events
    return this.http.post('http://localhost:3000/login', data)
  }





  deposit(acno: any, password: any, amt: any) {
    const data = {
      acno,
      password,
      amt
    }
   
    //asynchronous events
    return this.http.post('http://localhost:3000/deposit', data,this.getOptions())
  }

  //to add token into the request header
  getOptions(){
  const token = JSON.parse(localStorage.getItem("token") || '')
  console.log(token);
  let headers = new HttpHeaders()
  if (token) {
   headers= headers.append('x-access-token', token)
    options.headers=headers
  }
  return options

 }


withdraw(acno: any, password: any, amt: any) {
  const data = {
    acno,
    password,
    amt
  }
 
  //asynchronous events
  return this.http.post('http://localhost:3000/withdraw', data,this.getOptions())

  
}
delete(acno:any){
  return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())
}






}
