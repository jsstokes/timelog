import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account, Opportunity, TimeEntry } from './account.types';
// import { AccountListComponent } from './account-list/account-list.component';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
// import 'rxjs/add/observable/of';

const TIME_SERVICE_URL = "http://localhost:3000/timeEntries"


@Injectable({
  providedIn: 'root'
})

export class TimeService implements OnInit, OnDestroy {

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetchAccountList();
  }
   ngOnDestroy() {

   }

  private accountListSource: BehaviorSubject<Account[]> = new BehaviorSubject(null);
  accountList: Observable<Account[]> = this.accountListSource.asObservable();
  fetchAccountList() {
    // var results: Observable<Account[]> = this.httpClient.get<Account[]>(TIME_SERVICE_URL);
    // console.log("Results are: " + results);
    this.httpClient.get<Account[]>(TIME_SERVICE_URL).subscribe((data) => {
      console.log("=========== Initial FETCH Account[] ==============");
      this.accountListSource.next(data);
    });
  }

  private selectedAccountSource = new BehaviorSubject<Account>(null);
  selectedAccount = this.selectedAccountSource.asObservable();
  changeSelectedAccount(newSelection: Account) {
    this.selectedAccountSource.next(newSelection);
  }

  private selectedOppSource = new BehaviorSubject<any>(null);
  private selectedOpp = this.selectedOppSource.asObservable();
  changeSelectedOpp(newOpp: Opportunity) {
    console.log("Changing selectOpp to: " + JSON.stringify(newOpp));
    this.selectedOppSource.next(newOpp);
  }


  /**
   * oppListSource - provides the observable for the list of Opportunities
   *    changeOppList(newOpp: Opportunity[]) should be used to update
   * @private
   * @memberof TimeService
   */
  private oppListSource = new BehaviorSubject<Opportunity[]>(null);
  oppList = this.oppListSource.asObservable();
  changeOppList(newOppList: Opportunity[]) {
    this.oppListSource.next(newOppList);
  }

}
