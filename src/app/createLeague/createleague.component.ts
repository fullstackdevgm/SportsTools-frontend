import { Component, Pipe, PipeTransform, EventEmitter, OnInit, Output } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Sport } from '../models/sport';
import { DefaultService } from '../services/default.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import { ObjNgFor } from '../objngfor/objngfor';

@Component({
	selector: 'create-league',
	templateUrl: './createleague.component.html',
	styleUrls: ['../app.component.css', './createleague.css']
})
export class CreateLeagueDialog implements OnInit {
	title = 'Create a League Schedule';
	emptyLabel = '- Select -'; //the empty option label
	indicator = "League";
	selSubSport: String;
	selSport: String;
	selType: Number;
	ifSubSport: Boolean;
	ifCreate: Boolean;
	retData = [];
	sports: any;
	subSports: any;
	typeSchedules = [
	{value: 0, name: "League Round Robin"},
	{value: 1, name: "Tournament Single Elimination"},
	{value: 2, name: "Tournament Double Elimination"}
	];

	constructor(public dialogRef: MdDialogRef<CreateLeagueDialog>, private http: HttpClient, private defaultService: DefaultService) {}

	ngOnInit() {
		this.ifSubSport = true;
		this.ifCreate = true;
		this.subSports = [];
		this.getAllSports();
	}
	getAllSports() {
		this.http.get(this.defaultService.hosturl+'sports').subscribe( data => {
			this.sports = data;
		});
	}
	getSport($event) {
		this.selSubSport = null;
		this.http.get(this.defaultService.hosturl+'sports/'+$event).subscribe( data => {
			this.subSports = data;
			if (this.subSports.length) {
				this.ifSubSport = false;
				if(this.selType) {
					this.ifCreate = false;
				}
			} else {
				this.ifSubSport = true;
				this.ifCreate = true;
			}
		});
	}
	getSubSport($event) {
		if(this.selType) {
			this.ifCreate = false;
		}
	}
	getType($event) {
		if(this.selSport) {
			this.ifCreate = false;
		}
	}
}
