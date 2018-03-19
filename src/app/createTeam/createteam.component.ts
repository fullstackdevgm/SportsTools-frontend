import { Component, Input, Pipe, PipeTransform, EventEmitter, OnInit, Output } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
	selector: 'create-team-dialog',
	templateUrl: './createteam.component.html',
	styleUrls: ['../app.component.css', './createteam.css']
})
export class CreateTeamDialog {
	title = 'New Team';
	emptyLabel = '- Select -';
	teamowner = "Juan Gonzalez";
	teamiframe = '<iframesrc="demo_iframe.htm"name=“iframe_a"></iframe> <a href="https://';
	indicator = "Team";

	constructor(public dialogRef: MdDialogRef<CreateTeamDialog>) {}
}