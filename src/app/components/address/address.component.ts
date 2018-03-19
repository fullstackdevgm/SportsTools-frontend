/*
Address Components
Areas: Address 1, Address 2, City, County/District, Country, Zip/Postal, State, Time Zone, Phone_1, Phone_2, Email, Website Address, SportsTools Address
*/

import { Component, Input, Pipe, PipeTransform, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'comp-address',
	templateUrl: './address.component.html',
	styleUrls: ['../../app.component.css', '../component.css', './address.css']
})
export class AddressComponent {
	emptyLabel = '- Select -';
	@Input() where = "none";
	@Input() show_other = true; /* Show/Hide Areas from Time Zone */
}