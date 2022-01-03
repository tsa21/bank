import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUserName:any
  users: any = {
    1000: { acno: 1000, uname: "Ann", password: "123456", balance: 5000 },
    1001: { acno: 1001, uname: "cann", password: "123456", balance: 5000 },
    1002: { acno: 1002, uname: "dnn", password: "123456", balance: 5000 }
  }


  constructor() { }
//to store in local storage
  saveDetails(){
    if(this.users){
      localStorage.setItem("db",JSON.stringify(this.users))
    }
    if(this.currentUserName){
      localStorage.setItem("cUserName",JSON.stringify(this.currentUserName))
    }
  }
  register(acno: any, password: any, uname: any) {
    let db = this.users
    if (acno in db) {
      return false
      // alert("Account already exist!!!!")
    }
    else {
      db[acno] = {
        acno,
        uname,
        password,
        balance: 0
      }
      console.log(db);
      this.saveDetails()
      return true


    }
    alert("Register clicked!!")
  }

  login(acno: any, password: any) {
    let database = this.users

    if (acno in database) {

      if (password == database[acno]["password"]) {
        this.currentUserName= database[acno]["uname"]
        this.saveDetails()
        return true

      }
      else {

        alert("incorrect password")
        return false
      }


    }

    else {
      return false
      alert("invalid account number")
    }
  }
  deposit(acno: any, password: any, amt: any) {

    var amount =parseInt(amt)
    let db = this.users

    if (acno in db) {
      if (password == db[acno]["password"]) {
        db[acno]["balance"]+=amount
        this.saveDetails()
        return db[acno]["balance"]

      }
      else {
        alert("incorrect password")

      }

    }
    else {
      alert("invalid account number")
      return false
    }
  }

  withdraw(acno: any, password: any, amt: any) {

    var amount =parseInt(amt)
    let db = this.users

    if (acno in db) {
      if (password == db[acno]["password"]) {
        if(db[acno]["balance"]>amount){
          db[acno]["balance"]-=amount
          this.saveDetails()
          return db[acno]["balance"]

        }
        else{
          alert("insufficient balance")
          return false
        }
       

      }
      else {
        alert("incorrect password")

      }

    }
    else {
      alert("invalid account number")
      return false
    }
  }






}
