/*
Name Component
Areas: Name
*/
import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DefaultService } from '../../services/default.service';
import { Observable } from 'rxjs/Observable';
import { ObjNgFor } from '../../objngfor/objngfor';

@Component({
	selector: 'comp-name',
	templateUrl: './name.component.html',
	styleUrls: ['../../app.component.css', '../component.css', './name.css']
})
export class NameComponent implements OnInit {
	@Input() where = "none";

	ngOnInit() {
	}
}