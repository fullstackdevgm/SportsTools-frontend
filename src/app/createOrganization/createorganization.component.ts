import { Component, Pipe, PipeTransform, EventEmitter, OnInit, Output } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
	selector: 'create-organization-dialog',
	templateUrl: './createorganization.component.html',
	styleUrls: ['../app.component.css', './createorganization.css']
})
export class CreateOrganizationDialog {
	title = 'New Organization';
	emptyLabel = '- Select -';
	teamiframe = '<iframesrc="demo_iframe.htm"name=“iframe_a"></iframe> <a href="https://';
	indicator = "Organization";

	constructor(public dialogRef: MdDialogRef<CreateOrganizationDialog>) {}
}