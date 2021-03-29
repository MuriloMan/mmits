import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { WhatwedoComponent } from './components/whatwedo/whatwedo.component';
import { ContactComponent } from './components/contact/contact.component';
import { FirstlookComponent } from './components/firstlook/firstlook.component';
import { CreditsComponent } from './components/credits/credits.component';
import { TitlePageComponent } from './components/title-page/title-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    WhatwedoComponent,
    ContactComponent,
    FirstlookComponent,
    CreditsComponent,
    TitlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
