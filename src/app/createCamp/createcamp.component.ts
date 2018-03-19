import { Component, Pipe, PipeTransform, EventEmitter, OnInit, Output } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
	selector: 'create-camp-dialog',
	templateUrl: './createcamp.component.html',
	styleUrls: ['../app.component.css', './createcamp.css']
})
export class CreateCampDialog {
	title = 'New Camp';
	emptyLabel = '- Select -';
	indicator = "Camp";
	show_other = false;

	constructor(public dialogRef: MdDialogRef<CreateCampDialog>) {}
}