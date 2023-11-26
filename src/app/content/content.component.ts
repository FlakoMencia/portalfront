import { Component } from '@angular/core';
import { AxiosService } from "../axios.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  componentToShow: string = "login";

  constructor(private axiosService: AxiosService) { }
  onLogin(input: any): void {
    this.axiosService.request(
      "POST",
      "/api/authenticate",
      {
        email: input.email,
        password: input.password
      }).then(
      response => {
        console.table(response);
        if(response.data.success){
        console.log("response.data.data.token::::" +response.data.data.token)
          this.axiosService.setAuthToken(response.data.data.token);
          this.componentToShow = "usuarios";
        }else{
          this.componentToShow = "login";
          alert(response.data.message); // IMPLEMENTAR SWEET ALERT AQUI
        }
      }).catch(
      error => {
        console.log("error ::::::" +error)
        this.axiosService.setAuthToken(null);
        this.componentToShow = "login";
      }
    );

  }

  onRegister(input: any): void {  // FIXME!
    this.axiosService.request(
      "POST",
      "/api/user/register",
      {
        name: input.pending()
      }).then(
      response => {
        this.axiosService.setAuthToken(response.data.token);
        this.componentToShow = "messages";
      }).catch(
      error => {
        this.axiosService.setAuthToken(null);
        this.componentToShow = "welcome";
      }
    );
  }

}
