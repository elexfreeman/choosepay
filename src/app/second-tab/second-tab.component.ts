/*вкладка Info*/

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserData} from '../userData';
import {Field, FormFieldsService} from '../form-fields.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-second-tab',
    templateUrl: './second-tab.component.html',
    styleUrls: ['./second-tab.component.scss']
})
export class SecondTabComponent implements OnInit {

    /*форма Reactive Forms*/
    userForm = new FormGroup({});
    /*поля ввода*/
    fields: Field[];

    constructor(
        private router: Router
        , private userData: UserData
        , private  formFields: FormFieldsService
    ) {
    }

    /*событие надатие кнопки далее*/
    next() {
        /*если форма валидна редиректим далее*/
        if (this.userForm.status === 'VALID') {
            this.userData.fields = this.userForm.value;
            this.router.navigate(['payment']);
        }
    }

    ngOnInit() {
        /*проверка на предыдущий выбор*/
        if (this.userData.selectedPlan.id === -1) {
            /*если ничего не выбрано редиректив начало*/
            this.router.navigate(['']);
        } else {
            /*планы*/
            this.formFields.getInfo().subscribe(data => {
                this.fields = data['fields'];

                this.fields.map((item, key) => {

                    /*значение поля*/
                    let formState = '';
                    /*если что-то есть в заполненных предыдущих дынных*/
                    if (this.userData.fields != null) {
                        formState = this.userData.fields[item.id];
                    }

                    /*проврка валидности полей*/
                    if (item.pattern == null) {
                        /*если не нужна*/
                        this.userForm.addControl(
                            item.id,
                            new FormControl(formState)
                        );
                    } else {
                        /*если нужна валидация*/
                        this.userForm.addControl(
                            item.id,
                            new FormControl(formState, Validators.compose([
                                Validators.required,
                                /*убираем лишние слэши*/
                                Validators.pattern(item.pattern.replace(/\\{2,}/g, '\\')
                                )
                            ]))
                        );
                    }

                });
            });
        }

    }

}
