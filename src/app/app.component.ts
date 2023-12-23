import { Component, OnInit } from '@angular/core';
import { EventService } from './Service/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  isUserLog: any = false;
  loggedDetails: any;
  constructor(
    private Service: EventService
  ) {
    const localdata = localStorage.getItem('EventBook');
    if (localdata != null) {
      this.isUserLog = true;
      this.loggedDetails = JSON.parse(localdata);
    }
  }
  logOut(){
    localStorage.removeItem('EventBook');
    this.isUserLog=false;
    this.loggedDetails=undefined;
  }

  loginObj: any = {
    "Password": "",
    "ContactNo": ""
  }
  registerObj: any = {
    "UserId": 0,
    "Name": "",
    "Email": "",
    "Password": "",
    "ContactNo": "",
    "Role": ""
  }
  islogform: boolean = true;
  openLoginModal() {
    const Modal = document.getElementById('loginModal');
    if (Modal != null) {
      Modal.style.display = 'block'
    }
  }

  closeLoginModal() {
    const Modal = document.getElementById('loginModal');
    if (Modal != null) {
      Modal.style.display = 'none';
    }
  }


  onLogin() {
    this.Service.Login(this.loginObj).subscribe((response: any) => {
      console.log(response.data, "logged user");
      this.closeLoginModal();
      localStorage.setItem('EventBook', JSON.stringify(response.data));
      this.isUserLog = true;
      this.loggedDetails = response.data;
      if (response.result) {
        alert("Success Login");
      } else {
        alert("Error Login");
      }
    })
  }

  onRegister() {
    this.Service.CreateUser(this.registerObj).subscribe((response: any) => {
      console.log(response.data, "logged user");
      this.closeLoginModal();
      this.registerObj = null;
      localStorage.setItem('EventBook', JSON.stringify(response.data))
      if (response.result) {
        alert("Success register");
      } else {
        alert("Error register");
      }
    })
  }



}
