import {NgModule} from '@angular/core'
import{RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

const appRoutes:Routes=[
  {
    path:"",
    component:HomeComponent,
  },
  {
    path:"news",
    component:NewsComponent,
  },
]

@NgModule({
  imports:[
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
