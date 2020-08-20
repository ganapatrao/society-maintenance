import { NgModule } from '@angular/core';
import { WaterReadingComponent } from '../water/water-reading/water-reading.component';
import { GenerateWaterbillComponent } from '../water/generate-waterbill/generate-waterbill.component';
import { MaintenanceComponent } from '../maintenance/maintenance/maintenance.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	//	{ path: '', redirectTo: '/waterbill', pathMatch: 'full' },
	{ path: 'waterReading', component: WaterReadingComponent },
	{ path: 'addwaterBill', component: GenerateWaterbillComponent },
	{ path: 'maintenanceBilling', component: MaintenanceComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class RoutingModule { }
