import { Component, Pipe, PipeTransform, EventEmitter, OnInit, Output } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
	selector: 'create-sub-facility-dialog',
	templateUrl: './createsubfacility.component.html',
	styleUrls: ['../app.component.css', './createsubfacility.css']
})
export class CreateSubFacilityDialog {
	title = 'New Sub Facility';
	emptyLabel = '- Select -';
	mainfacility = "Lorem Ipsum";
	teamiframe = '<iframesrc="demo_iframe.htm"name=“iframe_a"></iframe> <a href="https://';
	indicator = "Sub Facility";

	constructor(public dialogRef: MdDialogRef<CreateSubFacilityDialog>) {}
}