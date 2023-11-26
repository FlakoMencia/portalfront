import { Component} from '@angular/core';
import {AxiosService} from "../axios.service";

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})
export class PingComponent {

  data: string = "";
  alive: boolean = false;

  constructor(private axiosService: AxiosService) {
  }

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/api/isAlive",
      {}).then(
      (response) => {
        this.data = response.data
        this.alive = true;
      }
    ).catch(
      (error) => {
        this.data ="<h3>¡Error! Verifique el estado de la API</h3>";
        // console.error("Error en la petición:", error);
      }
    )
  };
}
