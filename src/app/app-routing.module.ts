import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { Routes, RouterModule } from "@angular/router"

const routes: Routes = [
	{ path: 'result', component: ResultComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	declarations: []
})
export class AppRoutingModule { }
