import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserData} from '../userData';
import {FormFieldsService, Plan} from '../form-fields.service';

@Component({
    selector: 'app-first-tab',
    templateUrl: './first-tab.component.html',
    styleUrls: ['./first-tab.component.scss']
})
export class FirstTabComponent implements OnInit {

    /*массив планов*/
    plans: Plan[] = [];
    /*выбраный план*/
    selectedPlan: Plan;

    constructor(
        private router: Router
        , private userData: UserData
        , private  formFields: FormFieldsService
    ) {
    }

    /*событе кнопки далее*/
    next() {
        if (this.selectedPlan != null) {
            /*если все выбрано записываем план в глоб перемен*/
            this.userData.selectedPlan = this.selectedPlan;
            /*следующий таб*/
            this.router.navigate(['info']);
        }
    }

    /*событие выора плана*/
    onSelectPlan(p: Plan) {
        this.selectedPlan = p;
    }

    ngOnInit() {
        /*проверка на предыдущий выбор*/
        this.selectedPlan = this.userData.selectedPlan;
        /*планы из json*/
        this.formFields.getPlans().subscribe(data => this.plans = data['plans']);
    }

}
