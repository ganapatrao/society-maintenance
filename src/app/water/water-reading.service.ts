import { Injectable } from '@angular/core';
import { WaterReading } from './moterReadingmodel';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';

@Injectable({
	providedIn: 'root'
})
export class WaterReadingService {
	constructor() {}
	//private waterreading: WaterReading[] = [];

	private waterreading: WaterReading[] = [
		new WaterReading('Tinaikar', 100, 101, 1, new Date('Sep 23, 2013 12:00:00')),
		new WaterReading('Tinaikar', 100, 101, 1, new Date('Sep 23, 2013 12:00:00')),
		new WaterReading('Rane', 100, 101, 1, new Date('Sep 23, 2013 12:00:00')),
		new WaterReading('Dessai', 100, 101, 1, new Date('Sep 23, 2013 12:00:00')),
		new WaterReading('Tinaikar', 100, 101, 1, new Date('Sep 23, 2013 12:00:00')),
		new WaterReading('Rane', 100, 101, 1, new Date('Sep 23, 2013 12:00:00'))
	];

	addWaterReading(reading: WaterReading) {
		// this.httpclient
		// 	.post<{ Message: string; postid: string }>('http://localhost:3000/waterreading', reading)
		// 	.subscribe((waterreading) => {
		// 		const readingid = waterreading.postid;
		// 		console.log(waterreading);
		// 		this.waterreading.push(reading);
		// 		this.readingUdates.next(this.waterreading);
		// 	});
		this.waterreading.push(reading);

		console.log(this.waterreading);
		// this.waterReadingChanged.next(this.waterbillReading)
	}

	getWaterReadings() {
		//this.httpclient.get<WaterReading[]>('http://localhost:3000/waterreading')
		//console.log(this.posts.length)
		//    .subscribe(result =>{

		//      this.waterreading=result;
		//     this.readingUdates.next(this.waterreading)
		//     // this.postUpdates.next([...this.posts])
		//})

		return this.waterreading;
		// console.log(this.waterbillReading)
	}
}
