import {Component, EventEmitter, Output} from '@angular/core';
import {AxiosService} from "../axios.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(private axiosService: AxiosService){

  }

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  submitted: boolean = false;
  active: string = "login";
  email: string = "";
  password: string = "";
  onLoginTab(): void {
    this.active = "login";
  }

  onRegisterTab(): void {
    this.active = "register";
  }

  onSubmitLogin(): void {
    this.submitted = true;
    this.onSubmitLoginEvent.emit({"email": this.email, "password": this.password});
  }

  onSubmitRegister(input: any): void {
    this.onSubmitRegisterEvent.emit(input);
  }

  ngOnInit(): void{
    if(window.localStorage.getItem("auth_token")){
      window.localStorage.removeItem("auth_token");
    }
  }


}
