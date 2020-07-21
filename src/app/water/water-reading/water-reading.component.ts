import { WaterReadingService } from './../water-reading.service';
import { Component, OnInit } from '@angular/core';
import { WaterReading } from '../moterReadingmodel';
@Component({
	selector: 'app-water-reading',
	templateUrl: './water-reading.component.html',
	styleUrls: [ './water-reading.component.css' ]
})
export class WaterReadingComponent implements OnInit {
	constructor(private waterReadingservice: WaterReadingService) {}

	watereading: WaterReading[];

	ngOnInit() {
		this.watereading = this.waterReadingservice.getWaterReadings();
		console.log(this.watereading);
	}
}
