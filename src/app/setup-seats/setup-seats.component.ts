import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-seats',
  templateUrl: './setup-seats.component.html',
  styleUrls: ['./setup-seats.component.css']
})
export class SetupSeatsComponent implements OnInit {

	model: any = {};
	template: string = `
	    <h1>Seats are loading.....</h1>
	  `;
    loading = false;

	constructor() { }

	ngOnInit() {
	}

	renderSeats() {
        this.loading = true;
        console.log(this.model);
        if(this.model.row && this.model.column) {
        	//Logic to render the table
        	this.template = "<h1>Mayank Saxena</h1>";
        }
    }

}
