import { Component } from '@angular/core';
import { AxiosService } from "../axios.service";
import  Swal  from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  componentToShow: string = "login";

  constructor(private axiosService: AxiosService ,private spinner: NgxSpinnerService) { }


  onLogin(input: any): void {
    this.spinner.show();
    if(input.email === '' || input.password ===''){
      Swal.fire("¡Error!", 'Complete campos obligatorios', 'error');
      this.spinner.hide();
      return;
    }
    this.axiosService.request(
      "POST",
      "/api/authenticate",
      {
        email: input.email,
        password: input.password
      }).then(
      response => {
        if(response.data.success){
          this.axiosService.setAuthToken(response.data.data.token);
          this.componentToShow = "usuarios";
        }else{
          this.componentToShow = "login";
          this.axiosService.setAuthToken(null);
          Swal.fire('¡No Encontrado!', response.data.message, 'warning');
        }
      }).catch(
      error => {
        Swal.fire(error.message, 'Verifique conexión o log del backend', 'error');
        this.axiosService.setAuthToken(null);
        this.componentToShow = "login";
      }
    ).finally(()=>{
      this.spinner.hide();
    });

  }

  onRegister(input: any): void {
    this.spinner.show();
    if(input.name ==='' || input.email === '' || input.password ===''){
      Swal.fire("¡Error!", 'Complete campos obligatorios', 'error');
      this.spinner.hide();
      return;
    }
    this.axiosService.request(
      "POST",
      "/api/user/register",
      {
        name: input.name,
        email: input.email,
        password: input.password
      }).then(
      response => {
        if(response.data.success){
          this.axiosService.setAuthToken(response.data.data.token);
          this.componentToShow = "usuarios";
        }else{
          this.componentToShow = "register";
          this.axiosService.setAuthToken(null);
          Swal.fire('¡No Registrado!', response.data.message, 'warning');
        }
      }).catch(
      error => {
        Swal.fire(error.message, 'Verifique conexión o log del backend', 'error');
        this.axiosService.setAuthToken(null);
        this.componentToShow = "register";
      }
    ).finally(()=>{
      this.spinner.hide();
    });
  }

  onLogOut(): void{
    this. componentToShow = "login";
  }
}
