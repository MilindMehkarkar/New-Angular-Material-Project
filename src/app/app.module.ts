import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatMenuModule, MatIconModule, MatTabsModule, MatButtonToggleModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule } from '@angular/material'



import { AppComponent } from './app.component';
import { HeaderApp } from './CollegeClientProject/header/header';
import { FootApp } from './CollegeClientProject/footer/footer';
import { BodyApp } from './CollegeClientProject/body/body';


@NgModule({
  declarations: [
    AppComponent,
    HeaderApp,
    FootApp,
    BodyApp,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatListModule
    
   


    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
