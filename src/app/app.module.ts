import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisComponent } from './dis/dis.component';
import { PythonComponent } from './python/python.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisComponent,
    PythonComponent,
    HtmlComponent,
    CssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
