import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';
/*интерфейсы фходных данных формы*/
export interface Plan {
    id: number;
    title: string;
    price: number;
    preview: string;
    currency: string;
}


export interface FieldItem {
    id: number;
    title: string;
}

export interface Field {
    id: string;
    title: string;
    type: string;
    pattern: string;
    items: FieldItem[];
    control: FormControl;
}

@Injectable({
    providedIn: 'root'
})
export class FormFieldsService {

    constructor(private http: HttpClient) {
    }

    getPlans() {
        return this.http.get('assets/plans.json');
    }

    getInfo() {
        return this.http.get('assets/information.json');
    }

}
