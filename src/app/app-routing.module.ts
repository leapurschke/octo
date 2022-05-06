import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './art/art.component';
import { LoveComponent } from './love/love.component';
import { PeaceComponent } from './peace/peace.component';
import { HappinessComponent } from './happiness/happiness.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
const routes: Routes = [
  {path: 'art', component: ArtComponent},
  {path: 'love', component: LoveComponent},
  {path: 'peace', component: PeaceComponent},
  {path: 'happiness', component: HappinessComponent},
  {path: 'home', component: HomeComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'start', component: StartComponent },
  {path: 'info', component: InfoComponent }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ArtComponent,LoveComponent,PeaceComponent,HappinessComponent, InfoComponent]
