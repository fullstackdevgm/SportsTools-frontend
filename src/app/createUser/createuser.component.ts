import { Component, Pipe, PipeTransform, EventEmitter, OnInit, Output } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
	selector: 'create-user-dialog',
	templateUrl: './createuser.component.html',
	styleUrls: ['../app.component.css', './createuser.css']
})
export class CreateUserDialog {
	title = 'New User';
	emptyLabel = '- Select -';
	indicator = "User";
	show_other = false;

	constructor(public dialogRef: MdDialogRef<CreateUserDialog>) {}
}