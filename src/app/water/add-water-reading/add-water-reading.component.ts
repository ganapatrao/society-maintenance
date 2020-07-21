import { WaterReadingService } from './../water-reading.service';
import { MemberService } from './../../societyMember/member.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Members } from 'src/app/societyMember/Membermodel';
import { WaterReading } from '../moterReadingmodel';

@Component({
	selector: 'app-add-water-reading',
	templateUrl: './add-water-reading.component.html',
	styleUrls: [ './add-water-reading.component.css' ]
})
export class AddWaterReadingComponent implements OnInit {
	constructor(private Members: MemberService, private waterReadingservice: WaterReadingService) {}

	readingCount = '';
	@ViewChild('f', { static: false })
	waterreadingform: NgForm;

	societyMember: Members[];

	toreading: Number = 0;
	readingfrom: Number = 0;
	totalcount: Number = 0;
	totalcount = this.readingfrom - this.toreading;

	ngOnInit() {
		this.societyMember = this.Members.getMembers();
		//this.totalcount =
		//	this.waterreadingform.controls.readingfrom.value - this.waterreadingform.controls.toreading.value;
	}

	OnAddItem(form: NgForm) {
		//console.log(this.waterreadingform.controls.readingfrom.value);
		const value = form.value;
		const units = (value.toreading - value.readingfrom).toFixed(1);
		//console.log(value.member,value.readingfrom,value.toreading,units)
		//  const newreading =new WaterReading(form.value.name)

		//console.log(this.selectDate)
		const newwaterReading = new WaterReading(
			value.member,
			value.readingfrom,
			value.toreading,
			units,
			value.selectDate
		);
		//console.log(newwaterReading); //gtx
		this.waterReadingservice.addWaterReading(newwaterReading);
	}
}
