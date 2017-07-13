import { Component, OnInit } from '@angular/core';
import {NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent} from 'angular2-grid';

interface Box {
    id: number;
    config: any;
}

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

	private boxes: Array<Box> = [];
  private rgb: string = '#efefef';
  private curNum;
  private gridConfig: NgGridConfig = <NgGridConfig>{
    'margins': [4],
    'draggable': true,
    'resizable': false,
    'max_cols': 0,
    'max_rows': 0,
    'visible_cols': 0,
    'visible_rows': 0,
    'min_cols': 1,
    'min_rows': 1,
    'col_width': 2,
    'row_height': 2,
    'cascade': 'up',
    'min_width': 5,
    'min_height': 5,
    'fix_to_grid': true,
    'auto_style': true,
    'auto_resize': false,
    'maintain_ratio': true,
    'prefer_new': false,
    'zoom_on_drag': false,
    'limit_to_screen': true
  };
  private itemPositions: Array<any> = [];

  constructor() {
    const dashconf = this._generateDefaultDashConfig();
    for (var i = 0; i < dashconf.length; i++) {
      const conf = dashconf[i];
      conf.payload = 1 + i;
      this.boxes[i] = { id: i + 1, config: conf };
    }
    this.curNum = dashconf.length + 1;
  }

  addBox(): void {
    const conf: NgGridItemConfig = this._generateDefaultItemConfig();
    conf.payload = this.curNum++;
    this.boxes.push({ id: conf.payload, config: conf });
  }

  removeWidget(index: number): void {
    if (this.boxes[index]) {
      this.boxes.splice(index, 1);
    }
  }

  updateItem(index: number, event: NgGridItemEvent): void {
    // Do something here
  }

  onDrag(index: number, event: NgGridItemEvent): void {
    // Do something here
  }

  onResize(index: number, event: NgGridItemEvent): void {
    // Do something here
  }

  private _generateDefaultItemConfig(): NgGridItemConfig {
    return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
  }

  private _generateDefaultDashConfig(): NgGridItemConfig[] {
    return [{ 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 5, 'sizey': 5 },
    { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 5, 'sizey': 5 },
    { 'dragHandle': '.handle', 'col': 26, 'row': 1, 'sizex': 5, 'sizey': 5 },
    { 'dragHandle': '.handle', 'col': 51, 'row': 1, 'sizex': 5, 'sizey': 5 },
    { 'dragHandle': '.handle', 'col': 51, 'row': 26, 'sizex': 5, 'sizey': 5 },
    { 'dragHandle': '.handle', 'col': 83, 'row': 26, 'sizex': 5, 'sizey': 5 }];
  }

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
