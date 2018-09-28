import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

	constructor() { }
	title = 'Simple Date Converter';
	isGone = false;
	constructor(private route: ActivatedRoute) { }
	// result = this.route.snapshot.paramMap.get('result');

	ngOnInit() {
	}
}
