import { Component } from '@angular/core';

@Component({
  selector: 'app-estado-backend',
  templateUrl: './estado-backend.component.html',
  styleUrls: ['./estado-backend.component.css']
})
export class EstadoBackendComponent {
  btStadoBkend = 'Estado del Backend';
  showPing: boolean = false;

  comprobarBackend() {
    this.showPing = !this.showPing;
    this.btStadoBkend= this.showPing? 'Ocultar Estado' :'Estado del Backend';
  }

}
