import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CounterComponent } from './counter/counter.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ContactService } from './contact.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ServicesComponent,
    CounterComponent,
    PortfolioComponent,
    TestimonialComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// added manually

export interface ContactModel {
  email: string;
  fullname: string;
  comment: string;
}