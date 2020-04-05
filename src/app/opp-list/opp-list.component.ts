import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimeService } from '../time.service';
import { Opportunity } from '../account.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-opp-list',
  templateUrl: './opp-list.component.html',
  styleUrls: ['./opp-list.component.css']
})
export class OppListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(private timeService: TimeService) { }

  opportunityList: Opportunity[];

  selectedOpp: Opportunity;

  ngOnInit() {
    this.subscriptions.push(
      this.timeService.oppList.subscribe((data) => {
        this.opportunityList = data;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => { sub.unsubscribe()});

  }

  onOppSelected(event) {
    console.log("Opp Selected: " + JSON.stringify(event));
    console.log(event.target.value);
    var thisOpp = this.opportunityList.find((opp) => opp._id == event.target.value);
    this.timeService.changeSelectedOpp(thisOpp);
    // this.selectedOppID = event.target.value;
    // console.log("Selected value: " + this.selectedOppID);
  }

}
