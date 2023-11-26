import {Component} from '@angular/core';
import {AxiosService} from "../axios.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  data: string = "";

  constructor(private axiosService: AxiosService) {
  }

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/api/isAlive",
      {}).then(
      (response) => this.data = response.data
    )
    console.log("this is data: " + this.data);
  };

}
