import {Injectable} from '@angular/core';
import {Field, Plan} from './form-fields.service';

Injectable();

/*класс глобального состояния приложения с заполнинными данными формы*/
export class UserData {
    /*выбраный план*/
    public selectedPlan: Plan = {
        id: -1,
        title: '',
        price: 0,
        currency: '',
        preview: ''
    };

    public fields: any[];
}
