import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductAddComponent } from './product-add/product-add.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
