/*
Create & Close Components
Areas: Create, Close
*/
import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DefaultService } from '../../services/default.service';
import { Observable } from 'rxjs/Observable';
import { ObjNgFor } from '../../objngfor/objngfor';

@Component({
	selector: 'comp-cac',
	templateUrl: './createclose.component.html',
	styleUrls: ['../../app.component.css', '../component.css', './createclose.css']
})
export class CreateCloseComponent implements OnInit {
	@Input() where = "none";
	@Input() ifClose = true; /* Show/Hide Close Button */
	@Input() isCreate = true; /* Disable/Enable Create Button */

	ngOnInit() {
	}
}