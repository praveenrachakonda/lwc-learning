import { LightningElement, track, wire } from 'lwc';
import filterAccount from '@salesforce/apex/filterAccounts.filterAccount';
export default class AccountSearch extends LightningElement {
    @track searchKey = '';
    accounts = [];

    handleSearch(event) {
        this.searchKey = event.target.value;
        console.log('User typed:', this.searchKey);
    }
    @wire(filterAccount, { getInput: '$searchKey' })
    wiredAccounts({ data, error }) {
        console.log('Wire fired with input:', this.searchKey);
        if (data) {
            console.log('Data:', data);
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            console.error('Wire error:', error);
            this.error = error;
            this.accounts = [];
        }
    }

}