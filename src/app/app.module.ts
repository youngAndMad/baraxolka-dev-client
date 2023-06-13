import { BoutiqueDetailsComponent } from './components/boutique-details/boutique-details.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AkbulakFirstFloorComponent } from './map/akbulak/akbulak-first-floor/akbulak-first-floor.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {NgOptimizedImage} from "@angular/common";
import {HttpClientInterceptor} from "./interceptors/http-client.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AkbulakFirstFloorComponent,
    BoutiqueComponent,
    HomeComponent,
    BoutiqueDetailsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
