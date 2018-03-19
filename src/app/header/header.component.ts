import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { CreateUserDialog } from '../createUser/createuser.component';
import { CreateTeamDialog } from '../createTeam/createteam.component';
import { CreateLeagueDialog } from '../createLeague/createleague.component';
import { CreateOrganizationDialog } from '../createOrganization/createorganization.component';
import { CreateSubOrganizationDialog } from '../createSubOrganization/createsuborganization.component';
import { CreateClubDialog } from '../createClub/createclub.component';
import { CreateFacilityDialog } from '../createFacility/createfacility.component';
import { CreateSubFacilityDialog } from '../createSubFacility/createsubfacility.component';
import { CreateTournamentDialog } from '../createTournament/createtournament.component';
import { CreateCampDialog } from '../createCamp/createcamp.component';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['../app.component.css', './header.css']
})
export class HeaderComponent {
	title = 'Sports Tools';
	selectedOption: string;

	constructor(public dialog: MdDialog) {}

	openCreateUserDialog() {
		let dialogRef = this.dialog.open(CreateUserDialog);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}

	openCreateTeamDialog() {
		let dialogRef = this.dialog.open(CreateTeamDialog);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}

	openCreateLeagueDialog() {
		let dialogRef = this.dialog.open(CreateLeagueDialog);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}

	openCreateOrganizationDialog() {
		let dialogRef = this.dialog.open(CreateOrganizationDialog);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}

	openCreateSubOrganizationDialog() {
		let dialogRef = this.dialog.open(CreateSubOrganizationDialog);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}

	openCreateClubDialog() {
		let dialogRef = this.dialog.open(CreateClubDialog);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}

	openCreateFacilityDialog() {
		let dialogRef = this.dialog.open(CreateFacilityDialog);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}

	openCreateSubFacilityDialog() {
		let dialogRef = this.dialog.open(CreateSubFacilityDialog);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}

	openCreateTournamentDialog() {
		let dialogRef = this.dialog.open(CreateTournamentDialog);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}

	openCreateCampDialog() {
		let dialogRef = this.dialog.open(CreateCampDialog);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}
}
