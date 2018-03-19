/*
Start & End Date Component
Areas: Start Date, End Date
*/
import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DefaultService } from '../../services/default.service';
import { Observable } from 'rxjs/Observable';
import { ObjNgFor } from '../../objngfor/objngfor';

@Component({
	selector: 'comp-startend',
	templateUrl: './startend.component.html',
	styleUrls: ['../../app.component.css', '../component.css', './startend.css']
})
export class StartEndComponent implements OnInit {
	@Input() where = "none";

	ngOnInit() {
	}
}