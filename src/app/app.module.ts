import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WaterReadingComponent } from './water/water-reading/water-reading.component';
import { AddWaterReadingComponent } from './water/add-water-reading/add-water-reading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './router/router.module';
@NgModule({
	declarations: [AppComponent, WaterReadingComponent, AddWaterReadingComponent],
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
