import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FirstTabComponent} from './first-tab/first-tab.component';
import {SecondTabComponent} from './second-tab/second-tab.component';
import {ThirdTabComponent} from './third-tab/third-tab.component';
import {UserData} from './userData';
import { ThxComponent } from './thx/thx.component';

@NgModule({
    declarations: [
        AppComponent,
        FirstTabComponent,
        SecondTabComponent,
        ThirdTabComponent,
        ThxComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [UserData],
    bootstrap: [AppComponent]
})
export class AppModule {
}
