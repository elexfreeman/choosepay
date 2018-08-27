import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserData} from '../userData';
import {FormFieldsService, Plan} from '../form-fields.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-third-tab',
    templateUrl: './third-tab.component.html',
    styleUrls: ['./third-tab.component.scss']
})
export class ThirdTabComponent implements OnInit {

    /*выбранный план*/
    selectedPlan: Plan;
    /*заполненные поля*/
    fields: any[];

    /*форма Reactive Forms*/
    payForm = new FormGroup({
        cardNumber: new FormControl('', Validators.required),

        CVC: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('[0-9][0-9][0-9]')
        ])),

        month: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('[0-1][1-9]')
        ])),

        year: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('[2][0-1][0-9][0-9]')
        ]))
    });

    constructor(
        private router: Router
        , private userData: UserData
        , private  formFields: FormFieldsService
    ) {
    }

    pay() {
       /*если форма валидна показываем стр спасибо*/
        if (this.payForm.status === 'VALID') {
            this.router.navigate(['thx']);
        }
    }

    ngOnInit() {
        /*проверка на 1-й шаг*/
        if (this.userData.selectedPlan.id === -1) {
            /*если ничего не выбрано редиректив начало*/
            this.router.navigate(['']);
        }

        /*проверка на 2-й шаг*/
        if (this.userData.fields == null) {
            /*если ничего не выбрано редиректив начало*/
            this.router.navigate(['']);
        }

        this.fields = this.userData.fields;
        this.selectedPlan = this.userData.selectedPlan;
    }

}
