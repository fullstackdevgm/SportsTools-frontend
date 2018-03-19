import { Component, Pipe, PipeTransform, EventEmitter, OnInit, Output } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
	selector: 'create-sub-organization-dialog',
	templateUrl: './createsuborganization.component.html',
	styleUrls: ['../app.component.css', './createsuborganization.css']
})
export class CreateSubOrganizationDialog {
	title = 'New Suborganization';
	emptyLabel = '- Select -';
	mainorg = "Lorem Ipsum";
	teamiframe = '<iframesrc="demo_iframe.htm"name=“iframe_a"></iframe> <a href="https://';
	indicator = "Suborganization";

	constructor(public dialogRef: MdDialogRef<CreateSubOrganizationDialog>) {}
}