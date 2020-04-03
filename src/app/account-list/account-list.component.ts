import { Component, OnInit } from '@angular/core';
import { Account, Opportunity, TimeEntry } from '../account.types';
import { TimeService } from '../time.service';



@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts;
  //  = [
  //   {
  //     "_id": 1,
  //     "accountName": "Account 1",
  //     "accountLink": "http://mongodb.com",
  //     "opps": [
  //       {
  //         _id: "A1O1",
  //         oppName: "A1 Opp 1"
  //       },
  //       {
  //         _id: "A1O2",
  //         oppName: "A1 Opp 2"
  //       },
  //       {
  //         _id: "A1O3",
  //         oppName: "A1 Opp 3"
  //       },
  //       {
  //         _id: "A1O4",
  //         oppName: "A1 Opp 4"
  //       },
  //       {
  //         _id: "A1O5",
  //         oppName: "A1 Opp 5"
  //       },
  //       {
  //         _id: "A1O6",
  //         oppName: "A1 Opp 6"
  //       },
  //       {
  //         _id: "A1O7",
  //         oppName: "A1 Opp 7"
  //       },
  //       {
  //         _id: "A1O8",
  //         oppName: "A1 Opp 8"
  //       },
  //       {
  //         _id: "A1O9",
  //         oppName: "A1 Opp 9"
  //       },
  //       {
  //         _id: "A1O10",
  //         oppName: "A1 Opp 10"
  //       }
  //     ]
  //   },
  //   {
  //     "_id": 2,
  //     "accountName": "Account 2",
  //     "accountLink": "http://mongodb.com",
  //     "opps": [
  //       {
  //         _id: "A2O1",
  //         oppName: "A2 Opp 1"
  //       },
  //       {
  //         _id: "A2O2",
  //         oppName: "A2 Opp 2"
  //       },
  //       {
  //         _id: "A2O3",
  //         oppName: "A2 Opp 3"
  //       },
  //       {
  //         _id: "A2O4",
  //         oppName: "A2 Opp 4"
  //       },
  //       {
  //         _id: "A2O5",
  //         oppName: "A2 Opp 5"
  //       }
  //     ]
  //   },
  //   {
  //     "_id": 3,
  //     "accountName": "Account 3",
  //     "accountLink": "http://mongodb.com",
  //     "opps": [
  //       {
  //         _id: "A3O1",
  //         oppName: "A3 Opp 1"
  //       },
  //       {
  //         _id: "A3O2",
  //         oppName: "A3 Opp 2"
  //       },
  //       {
  //         _id: "A3O3",
  //         oppName: "A3 Opp 3"
  //       }
  //     ]
  //   },
  //   {
  //     "_id": 4,
  //     "accountName": "Account 4",
  //     "accountLink": "http://mongodb.com",
  //     opps: []
  //   },
  //   {
  //     "_id": 5,
  //     "accountName": "Account 5",
  //     "accountLink": "http://mongodb.com",
  //     opps: []
  //   }
  // ]  ;
  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.timeService.getAccountList().subscribe((data) => {
      console.log(data);
      this.accounts = data;
    });
  }
  selectedAccountID = 0;
  selectedAccount = null;

  selectedOppID = null;
  oppsList = null;



  onAccountSelected(event) {
    console.log("Account Selecetd");
    var newVal = event.target.value;
    this.selectedAccountID = event.target.value;
    console.log(`Selected AccountID is ${this.selectedAccountID}`);
    this.selectedAccount = this.accounts.find((acct) => acct._id == this.selectedAccountID);
    if (this.selectedAccountID == 0)
    {
      this.oppsList = null;
    } else {
      this.oppsList = this.selectedAccount.opps;
    }
    console.log("Find complete");
    console.log(this.selectedAccount);
  }

  onOppSelected(event) {
    console.log("Opp Selected: " + JSON.stringify(event));
    this.selectedOppID = event.target.value;
    console.log("Selected value: " + this.selectedOppID);
  }

}
