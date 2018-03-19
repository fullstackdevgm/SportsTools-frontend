import { Component, Pipe, PipeTransform, EventEmitter, OnInit, Output } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
	selector: 'create-club-dialog',
	templateUrl: './createclub.component.html',
	styleUrls: ['../app.component.css', './createclub.css']
})
export class CreateClubDialog {
	title = 'New Club';
	emptyLabel = '- Select -';
	teamiframe = '<iframesrc="demo_iframe.htm"name=“iframe_a"></iframe> <a href="https://';
	indicator = "Club";

	constructor(public dialogRef: MdDialogRef<CreateClubDialog>) {}
}