export interface Account {
  _id: string;
  accountName: string;
  accountLink: string;
  opps: Array<Opportunity>;

}

export interface Opportunity {
  _id: string;
  oppName: string;
  entries: Array<TimeEntry>
}

export interface TimeEntry {
  accountID: string;
  oppID: string;
  when: Date;
  entered: boolean;
}
