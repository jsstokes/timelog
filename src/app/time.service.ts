import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account, Opportunity, TimeEntry } from './account.types';
// import { AccountListComponent } from './account-list/account-list.component';
import { Observable } from 'rxjs';

const TIME_SERVICE_URL = "http://localhost:3000/timeEntries"

const STATIC_ACCOUNTS: Account[] = [
  {
    "_id": "1",
    "accountName": "Account 1",
    "accountLink": "http://mongodb.com",
    "opps": [
      {
        _id: "A1O6",
        oppName: "A1 Opp 6",
        entries: []
      },
      {
        _id: "A1O7",
        oppName: "A1 Opp 7",
        entries: []
      },
      {
        _id: "A1O8",
        oppName: "A1 Opp 8",
        entries: []
      },
      {
        _id: "A1O9",
        oppName: "A1 Opp 9",
        entries: []
      },
      {
        _id: "A1O10",
        oppName: "A1 Opp 10",
        entries: []
      }
    ]
  },
  {
    "_id": "2",
    "accountName": "Account 2",
    "accountLink": "http://mongodb.com",
    "opps": [
      {
        _id: "A2O1",
        oppName: "A2 Opp 1",
        entries: []
      }
    ]
  }
];


@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private accountList: Observable<any[]> = null;
  private selectedOpp: Observable<Opportunity> = null;
  private selectedOppID: Observable<string> = null;
  private selectedAccount: Observable<Account> = null;
  private selectedAccountID: Observable<string> = null;
  private oppList: Array<Opportunity> = null;

  constructor(private httpClient: HttpClient) { }

  getAccountList(): Observable <any[]> {
    return <Observable<Account[]>> this.httpClient.get(TIME_SERVICE_URL);
    // return this.accountList;
  }





}
