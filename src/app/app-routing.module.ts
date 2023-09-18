import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FAQsComponent } from './faqs/faqs.component';
import { BLOGComponent } from './blog/blog.component';
import { NewsroomComponent } from './newsroom/newsroom.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LUDOComponent } from './ludo/ludo.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"faqs",component:FAQsComponent},
  {path:"blog",component:BLOGComponent},
  {path:"newsroom",component:NewsroomComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"ludo",component:LUDOComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
