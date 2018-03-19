import { Component, Pipe, PipeTransform, EventEmitter, OnInit, Output } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
	selector: 'create-facility-dialog',
	templateUrl: './createfacility.component.html',
	styleUrls: ['../app.component.css', './createfacility.css']
})
export class CreateFacilityDialog {
	title = 'New Facility';
	emptyLabel = '- Select -';
	indicator = "Facility";

	constructor(public dialogRef: MdDialogRef<CreateFacilityDialog>) {}
}