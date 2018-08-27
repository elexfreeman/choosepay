import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FirstTabComponent} from './first-tab/first-tab.component';
import {SecondTabComponent} from './second-tab/second-tab.component';
import {ThirdTabComponent} from './third-tab/third-tab.component';
import {ThxComponent} from './thx/thx.component';


const routes: Routes = [
    {path: '', component: FirstTabComponent}
    , {path: 'info', component: SecondTabComponent}
    , {path: 'payment', component: ThirdTabComponent}
    , {path: 'thx', component: ThxComponent}
];

@NgModule({
    imports: [
        CommonModule
        , RouterModule.forRoot(routes, {useHash: true}) /*ставим флаг использования #*/
    ]
    , exports: [RouterModule]
    , declarations: []
})
export class AppRoutingModule {
}
