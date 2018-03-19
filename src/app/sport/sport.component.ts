import { Component, Input, Pipe, PipeTransform, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DefaultService } from '../services/default.service';
import { Observable } from 'rxjs/Observable';
import { ObjNgFor } from '../objngfor/objngfor';

@Component({
	selector: 'sport-content',
	templateUrl: './sport.component.html',
	styleUrls: ['../app.component.css', './sport.component.css']
})
export class SportComponent implements OnInit {
	title = 'Summary of Sports Activity in your Area';

	emptyLabel = '- Select -';
	selSubSport: String;
	selSport: String;
	ifSubSport: Boolean;
	retData = [];
	sports: any;
	subSports: any;
	typeSchedules = [
	{value: 0, name: "League Round Robin"},
	{value: 1, name: "Tournament Single Elimination"},
	{value: 2, name: "Tournament Double Elimination"}
	];
	ifCreate: Boolean;

	constructor(private http: HttpClient, private defaultService: DefaultService) {}

	ngOnInit() {
		this.ifSubSport = true;
		this.ifCreate = true;
		this.subSports = [];
		this.getAllSports();
		this.selSport = this.emptyLabel;
		this.selSubSport = this.emptyLabel;
	}
	getAllSports() {
		this.http.get(this.defaultService.hosturl+'sports').subscribe( data => {
			this.sports = data;
		});
	}
	getSport($event) {
		this.selSubSport = this.emptyLabel;
		this.http.get(this.defaultService.hosturl+'sports/'+$event).subscribe( data => {
			this.subSports = data;
			if (this.subSports.length) {
				this.ifSubSport = false;
				this.ifCreate = false;
			} else {
				this.ifSubSport = true;
				this.ifCreate = true;
			}
		});
	}
	getSubSport($event) {
		this.ifCreate = false;
	}
}
