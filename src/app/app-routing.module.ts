import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisComponent } from './dis/dis.component';
import { PythonComponent } from './python/python.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';

const routes: Routes = [
  {path:'',component:DisComponent},
  {path:'javascript',component:DisComponent},
  {path:'python',component : PythonComponent},
  {path:'html',component: HtmlComponent},
  {path:'css',component: CssComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
