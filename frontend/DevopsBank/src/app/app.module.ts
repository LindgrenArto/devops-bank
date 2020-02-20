import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MAT_DATE_LOCALE,
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatNativeDateModule, MatSelectModule,
  MatSidenavModule, MatSnackBarModule, MatStepperModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import { ToolbarComponent } from './ui/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ListComponent} from './components/list/list.component';
import {AngularIbanModule} from 'angular-iban';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {NgModule} from '@angular/core';
import construct = Reflect.construct;


// @ts-ignore
export const options: Partial<IConfig> | (() => Partial<IConfig>);

// @ts-ignore

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatTableModule,
    MatExpansionModule,
    AngularIbanModule,
    MatSelectModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
