import { Injectable } from '@angular/core';
import { Members } from './Membermodel';
import { UserMaintenance } from './UserMaintenancemodel';

@Injectable({
	providedIn: 'root'
})
export class MemberService {
	private SocietyMembers: Members[] = [
		{ id: 1, name: 'pednekar' },
		{ id: 2, name: 'Tinaikar' },
		{ id: 3, name: 'Dessai' },
		{ id: 4, name: 'Rane' }
	];
	//[new Members('Tinaikar')]

	private MembersMaintenanceRecords: UserMaintenance[] = [
		{ id: 1, name: 'pednekar', monthtracking: [true, true, false, false] },
		{ id: 2, name: 'Tinaikar', monthtracking: [true, true, true, false] },
		{ id: 3, name: 'Dessai', monthtracking: [true, true, false, false] },
		{ id: 4, name: 'Rane', monthtracking: [true, true, true, false] }
	];

	constructor() { }

	getMembers() {
		return this.SocietyMembers;
	}

	getMembersMaintenanceRecords(year = 2020) {
		return this.MembersMaintenanceRecords;
	}
}
