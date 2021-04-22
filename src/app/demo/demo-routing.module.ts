import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstViewComponent } from './first-view/first-view.component';


const routes: Routes = [{ path:'demoModuleLayout',component:FirstViewComponent,}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
