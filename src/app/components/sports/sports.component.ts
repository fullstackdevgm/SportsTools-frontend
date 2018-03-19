/*
Sports Component
Areas: Sports, Sub Sports, IsAdaptive
*/
import { Component, Input, Pipe, PipeTransform, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DefaultService } from '../../services/default.service';
import { Observable } from 'rxjs/Observable';
import { ObjNgFor } from '../../objngfor/objngfor';

@Component({
	selector: 'comp-sports',
	templateUrl: './sports.component.html',
	styleUrls: ['../../app.component.css', '../component.css', './sports.css']
})
export class SportsComponent implements OnInit {
	emptyLabel = '- Select -'; /* Empty Lavel for Select Box */
	@Input() emptySports = true; /* Add/Remove Empty for Sports Select */
	@Input() emptySubSports = true; /* Add/Remove Empty for Sub Sports Select */
	@Input() where = "none"; /* Child Component Indicator */
	@Input() isAdaptive = true; /* Show/Hide IsAdaptive */
	deAdaptive = true; /* Set Default Value for Adaptive */
	selSubSport: String; /* Selected Value for Sub Sports */
	selSport: String; /* Selected Value for Sports */
	ifSubSport: Boolean; /* Disable/Enable Sub Sports */
	retData = []; /* Returning Data to Backend */
	sports: any; /* Sports Data from backend */
	subSports: any; /* Sub Sports Data from backend */
	typeSchedules = [
	{value: 0, name: "League Round Robin"},
	{value: 1, name: "Tournament Single Elimination"},
	{value: 2, name: "Tournament Double Elimination"}
	]; /*Type Schedules List */
	ifCreate: Boolean; /* Action for Create Component */

	constructor(private http: HttpClient, private defaultService: DefaultService) {}

	ngOnInit() {
		this.ifSubSport = true;
		this.ifCreate = true;
		this.subSports = [];
		this.getAllSports();
	}
	/* Get Data from Backend */
	getAllSports() {
		this.http.get(this.defaultService.hosturl+'sports').subscribe( data => {
			this.sports = data;
			this.http.get(this.defaultService.hosturl+'sports/'+this.sports[0].sport_name).subscribe( data => {
				this.subSports = data;
				if (this.subSports.length) {
					this.ifSubSport = false;
					this.ifCreate = false;
				} else {
					this.ifSubSport = true;
					this.ifCreate = true;
				}
				if (this.emptySports) {
					this.selSport = this.emptyLabel;
				} else {
					this.selSport = this.sports[0].sport_name;
				}
				if (this.ifSubSport) {
					this.selSubSport = this.emptyLabel;
				} else {
					if (this.emptySubSports) {
						this.selSubSport = this.emptyLabel;
					} else {
						this.selSubSport = this.subSports[0].sport_name;
					}
				}
			});
		});
	}
	/* function controller when a Sport is selected */
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
	/* function controller when a Sub Sport is selected */
	getSubSport($event) {
		this.ifCreate = false;
	}
}