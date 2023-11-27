import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {AxiosService} from "../axios.service";
import Swal from 'sweetalert2';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from "@angular/router";

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements AfterViewInit {
    constructor(private axiosService: AxiosService, private spinner: NgxSpinnerService) {  }

    @Output() onLogOut:EventEmitter<any> = new EventEmitter();

    usuarios : any[] = [];
    total : string = "";

    ngAfterViewInit(): void {
        this.spinner.show();
        this.axiosService.request(
            "GET",
            "/api/user/list",
            null).then(
            response => {
                if (response.data.success) {
                    this.usuarios = response.data.data;
                    this.total = response.data.message;
                    this.usuarios.sort((a,b) => a.id - b.id)
                } else {
                    this.usuarios = [];
                    this.total="No se encontraron registros";
                }
            }).catch(
            error => {
                console.table(error);
                Swal.fire(error.message, 'Verifique conexión o log del backend', 'error');
                this.redirectToLogin();
            }
        ).finally(() => {
            this.spinner.hide();
        });
    }

    redirectToLogin(){
        this.onLogOut.emit()
    }
}
