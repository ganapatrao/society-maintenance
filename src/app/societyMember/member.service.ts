import { Injectable } from '@angular/core';
import { Members } from './Membermodel';

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

	constructor() {}

	getMembers() {
		return this.SocietyMembers;
	}
}
