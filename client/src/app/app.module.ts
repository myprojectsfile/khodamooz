import { AuthService } from './authentication/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule,MdIconModule,MdMenuModule,MdToolbarModule,MdDialogModule} from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LoginDialogComponent } from './authentication/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './authentication/register-dialog/register-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdDialogModule
  ],
  providers: [
    AuthService
  ],
  entryComponents:[RegisterDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
