import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlowerCardComponent } from './flower-card/flower-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { ArtComponent } from './art/art.component';
import { LoveComponent } from './love/love.component';
import { PeaceComponent } from './peace/peace.component';
import { HappinessComponent } from './happiness/happiness.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { HeaderstartComponent } from './headerstart/headerstart.component';
import { HeaderaboutComponent } from './headerabout/headerabout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlowerCardComponent,
    routingComponents,
    ArtComponent,
    LoveComponent,
    PeaceComponent,
    HappinessComponent,
    StartComponent,
    HomeComponent,
    InfoComponent,
    HeaderstartComponent,
    HeaderaboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
