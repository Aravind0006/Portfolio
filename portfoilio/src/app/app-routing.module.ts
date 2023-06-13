import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AddempComponent } from './addemp/addemp.component';
import { DisempComponent } from './disemp/disemp.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'template',component:TemplateComponent},
  {path:'reactive',component:ReactiveComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'addemp',component:AddempComponent},
  {path:'disemp',component:DisempComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
