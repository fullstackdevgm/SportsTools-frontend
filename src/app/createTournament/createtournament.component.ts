import { Component, Pipe, PipeTransform, EventEmitter, OnInit, Output } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
	selector: 'create-tournament-dialog',
	templateUrl: './createtournament.component.html',
	styleUrls: ['../app.component.css', './createtournament.css']
})
export class CreateTournamentDialog {
	title = 'New Tournament';
	emptyLabel = '- Select -';
	indicator = "Tournament";

	constructor(public dialogRef: MdDialogRef<CreateTournamentDialog>) {}
}