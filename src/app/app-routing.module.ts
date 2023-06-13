import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AkbulakFirstFloorComponent} from "./map/akbulak/akbulak-first-floor/akbulak-first-floor.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path: 'first-floor', component: AkbulakFirstFloorComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
