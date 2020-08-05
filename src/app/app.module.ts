import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WaterReadingComponent } from './water/water-reading/water-reading.component';
import { AddWaterReadingComponent } from './water/add-water-reading/add-water-reading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './router/router.module';
import { GenerateWaterbillComponent } from './water/generate-waterbill/generate-waterbill.component';
//import { GenerateWaterbillComponent } from './app/water/generate-waterbill/generate-waterbill.component';
@NgModule({
	declarations: [AppComponent, WaterReadingComponent, AddWaterReadingComponent, GenerateWaterbillComponent],
	imports: [
		BrowserModule,
		FormsModule,
		RoutingModule,
		BrowserAnimationsModule,
		BsDatepickerModule.forRoot()
		// Formsmodule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
