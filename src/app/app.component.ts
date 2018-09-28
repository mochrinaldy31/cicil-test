import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Simple Date Converter';
	isEmpty = false;
	isGone = false;
	value = '';
	pipe = new DatePipe('en-US');

	constructor(private _router: Router) { }

	onSubmit(event) {
		// this.value = new Date(event);
		if (event == "") {
			this.isEmpty = true;
			this.isGone = false;
		} else {
			this.isEmpty = false;
			this.isGone = true;
			this.value = this.pipe.transform(event, 'fullDate');
			this._router.navigate(['result'/*, { result: this.value }*/]);
		}
	}
}
