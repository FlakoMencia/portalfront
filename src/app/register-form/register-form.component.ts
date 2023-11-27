import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

    @Output() onSubmitRegisterEvent = new EventEmitter();

    submitted: boolean = false;
    active: string = "register";
    name: string = "";
    email: string = "";
    password: string = "";
    phone: phoneObject[] = [
        {
            number: "",
            citycode: "",
            country: "",
        }
    ];

    onSubmitRegister(): void {
        this.submitted = true;
        this.onSubmitRegisterEvent.emit({"name": this.name, "email": this.email, "password": this.password, "phone": this.phone } );
    }

}

class phoneObject {
    number: string = "";
    citycode: string = "";
    country: string = "";
}
