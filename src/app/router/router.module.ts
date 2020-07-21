import { NgModule } from '@angular/core';
import { WaterReadingComponent } from '../water/water-reading/water-reading.component';
import { AddWaterReadingComponent } from '../water/add-water-reading/add-water-reading.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	//	{ path: '', redirectTo: '/waterbill', pathMatch: 'full' },
	//{ path: 'waterReading', component: WaterReadingComponent },
	{ path: 'addwaterBill', component: WaterReadingComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class RoutingModule {}
