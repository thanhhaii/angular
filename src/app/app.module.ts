import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DemoService } from 'src/services/demo.service';
import { MathService } from 'src/services/match.service';
import { ProductService } from 'src/services/product.service';
import { RectangleService } from 'src/services/rectangel.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { Demo6Component } from './demo6/demo6.component';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { NewsComponent } from './component/news/news.component';
import { ProductsComponent } from './component/products/products.component';
import { DetailsComponent } from './component/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    RegisterFormComponent,
    Demo6Component,
    HomeComponent,
    AboutUsComponent,
    NewsComponent,
    ProductsComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DemoService,
    ProductService,
    MathService,
    RectangleService,
  ],
  bootstrap: [Demo6Component]
})
export class AppModule { }
