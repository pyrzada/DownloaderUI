import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoSearchComponent} from "./video-search/video-search.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path:'',
    component:VideoSearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
