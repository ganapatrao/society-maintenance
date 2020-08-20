import { MemberService } from './../../societyMember/member.service';
import { WaterReadingService } from './../../water/water-reading.service';
import { Members } from 'src/app/societyMember/Membermodel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  user_year_entries: Members[]
  constructor(private Members: MemberService, private waterReadingservice: WaterReadingService) { }

  ngOnInit() {
    this.user_year_entries = this.Members.getMembersMaintenanceRecords(2020);

  }

  onOpenCalendar(container) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };
    container.setViewMode('year');
  }

}
