import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReadComponent} from './read/read.component';
import {UpdateExcelComponent} from './update-excel/update-excel.component';
import {HomeComponent} from './home/home.component'

const routes: Routes = [
    { path:  '', redirectTo:  'writeData', pathMatch:  'full' },
    {path: 'home', component: HomeComponent},
    { path: 'read', component: ReadComponent },
    { path: 'write', component: UpdateExcelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }