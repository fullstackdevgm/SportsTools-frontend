/*
Date Components
Areas: Date
*/
import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DefaultService } from '../../services/default.service';
import { Observable } from 'rxjs/Observable';
import { ObjNgFor } from '../../objngfor/objngfor';

@Component({
	selector: 'comp-date',
	templateUrl: './date.component.html',
	styleUrls: ['../../app.component.css', '../component.css', './date.css']
})
export class DateComponent implements OnInit {
	@Input() where = "none";

	ngOnInit() {
	}
}