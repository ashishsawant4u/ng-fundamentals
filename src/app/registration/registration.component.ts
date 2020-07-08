import { Component } from '@angular/core';
import { RegistrationForm } from './registrationform';

@Component({
    selector:"registration-form",
    templateUrl:'./registration.component.html',
    styles:[`
        .form-lable {color:#f0ab00}
        form {font-family: Georgia;font-size: 15pt;}
    `]   
})
export class RegistrationComponent
{
    genderList: string[] = ["Men","Women"];
    standsList:  string[] = ["Front Stands","Middle Stands","Back Stands","VIP Box"];
    registrationForm: RegistrationForm = {
            name:"",
            age:null,
            mobileNumber:null,
            gender:"",
            stands:"",
            termsAndconditions:false,
    };
}