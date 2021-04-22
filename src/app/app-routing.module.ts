import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstViewComponent } from './demo/first-view/first-view.component';


const routes: Routes = [
  {path: 'demoInterface', component: FirstViewComponent},
//{ path: 'login', component: LoginComponent},  // make it redirect to your login component
 { path: '',redirectTo:'demoInterface', pathMatch:'full'}, //change this to your own home page
//{path: '**', component:PageNotFoundComponent} // make it redirect to your 404 not found component

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
