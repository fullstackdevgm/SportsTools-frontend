/*
Modules File
This will manage all modules, services and components.
*/
/* Importing Angular Modules */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MdAutocompleteModule,
	MdButtonModule,
	MdButtonToggleModule,
	MdCardModule,
	MdCheckboxModule,
	MdChipsModule,
	MdCoreModule,
	MdDatepickerModule,
	MdDialogModule,
	MdExpansionModule,
	MdGridListModule,
	MdIconModule,
	MdInputModule,
	MdListModule,
	MdMenuModule,
	MdNativeDateModule,
	MdPaginatorModule,
	MdProgressBarModule,
	MdProgressSpinnerModule,
	MdRadioModule,
	MdRippleModule,
	MdSelectModule,
	MdSidenavModule,
	MdSliderModule,
	MdSlideToggleModule,
	MdSnackBarModule,
	MdSortModule,
	MdTableModule,
	MdTabsModule,
	MdToolbarModule,
	MdTooltipModule,
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk';
/* Importing Components - Pages & Layouts */
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrganizationComponent } from './organization/organization.component';
import { ClubComponent } from './club/club.component';
import { PlayerComponent } from './player/player.component';
import { SportComponent } from './sport/sport.component';
/* Importing Dialogs */
import { CreateUserDialog } from './createUser/createuser.component';
import { CreateTeamDialog } from './createTeam/createteam.component';
import { CreateOrganizationDialog } from './createOrganization/createorganization.component';
import { CreateSubOrganizationDialog } from './createSubOrganization/createsuborganization.component';
import { CreateLeagueDialog } from './createLeague/createleague.component';
import { CreateClubDialog } from './createClub/createclub.component';
import { CreateFacilityDialog } from './createFacility/createfacility.component';
import { CreateSubFacilityDialog } from './createSubFacility/createsubfacility.component';
import { CreateTournamentDialog } from './createTournament/createtournament.component';
import { CreateCampDialog } from './createCamp/createcamp.component';
/* Importing Routes File */
import { routes } from './app.routes';
/* Importing Components - Sub Contents */
import { AddressComponent } from './components/address/address.component';
import { SportsComponent } from './components/sports/sports.component';
import { NameComponent } from './components/name/name.component';
import { DateComponent } from './components/date/date.component';
import { StartEndComponent } from './components/startend/startend.component';
import { CreateCloseComponent } from './components/createclose/createclose.component';
/* Importing Services & Others */
import { ObjNgFor } from './objngfor/objngfor';
import { DefaultService } from './services/default.service';

@NgModule({
	exports: [
	CdkTableModule,
	MdAutocompleteModule,
	MdButtonModule,
	MdButtonToggleModule,
	MdCardModule,
	MdCheckboxModule,
	MdChipsModule,
	MdCoreModule,
	MdDatepickerModule,
	MdDialogModule,
	MdExpansionModule,
	MdGridListModule,
	MdIconModule,
	MdInputModule,
	MdListModule,
	MdMenuModule,
	MdNativeDateModule,
	MdPaginatorModule,
	MdProgressBarModule,
	MdProgressSpinnerModule,
	MdRadioModule,
	MdRippleModule,
	MdSelectModule,
	MdSidenavModule,
	MdSliderModule,
	MdSlideToggleModule,
	MdSnackBarModule,
	MdSortModule,
	MdTableModule,
	MdTabsModule,
	MdToolbarModule,
	MdTooltipModule,
	]
})
export class PlunkerMaterialModule {}

@NgModule({
	declarations: [
	AppComponent,
	HeaderComponent,
	FooterComponent,
	MainComponent,
	OrganizationComponent,
	ClubComponent,
	PlayerComponent,
	SportComponent,
	CreateUserDialog,
	CreateTeamDialog,
	CreateOrganizationDialog,
	CreateSubOrganizationDialog,
	CreateClubDialog,
	CreateFacilityDialog,
	CreateSubFacilityDialog,
	CreateTournamentDialog,
	CreateCampDialog,
	CreateLeagueDialog,
/* Sub Components */
	AddressComponent,
	SportsComponent,
	NameComponent,
	DateComponent,
	StartEndComponent,
	CreateCloseComponent,

	ObjNgFor
	],
	imports: [
	routes,
	BrowserModule,
	BrowserAnimationsModule,
	PlunkerMaterialModule,
	MdNativeDateModule,
	FormsModule,
	ReactiveFormsModule,
	HttpModule,
	HttpClientModule
	],
	entryComponents: [
	CreateUserDialog,
	CreateTeamDialog,
	CreateOrganizationDialog,
	CreateSubOrganizationDialog,
	CreateClubDialog,
	CreateFacilityDialog,
	CreateSubFacilityDialog,
	CreateTournamentDialog,
	CreateLeagueDialog,
	CreateCampDialog
	],
	providers: [DefaultService, ObjNgFor],
	bootstrap: [AppComponent]
})
export class AppModule { }
