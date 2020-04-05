import { Component, OnInit, OnDestroy } from '@angular/core';
import { Account, Opportunity, TimeEntry } from '../account.types';
import { TimeService } from '../time.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  accounts;
  selectedAccountID = 0;
  selectedAccount = null;

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.timeService.fetchAccountList();
    this.subscriptions.push(
      this.timeService.accountList.subscribe((data) => {
        console.log(data);
        this.accounts = data;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => { sub.unsubscribe()});
  }

  // selectedOppID = null;
  // oppsList = null;



  onAccountSelected(event) {
    console.log("Account Selecetd");
    var newVal = event.target.value;
    this.selectedAccountID = event.target.value;
    console.log(`Selected AccountID is ${this.selectedAccountID}`);
    var acctSelected = this.accounts.find((acct) => acct._id == this.selectedAccountID);
    if (acctSelected == 0)
    {
      this.timeService.changeOppList(null)
    } else {
      this.timeService.changeOppList(acctSelected.opps);
    }
    console.log("Find complete");
    console.log(this.selectedAccount);
  }
}
