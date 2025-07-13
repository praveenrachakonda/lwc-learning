import { LightningElement, wire, track } from 'lwc';
import returnAccounts from '@salesforce/apex/LazyLoadAccounts.returnAccounts';
import getTotalAccountCount from '@salesforce/apex/LazyLoadAccounts.getTotalAccountCount';
export default class LazyAccountTable extends LightningElement {
    @track records =[];
    @track totalRecords = 0;
    offset = 0;
    isLoading = false;
    pageSize = 5;
    columns = [
        { label: 'Account Name', fieldName: 'Name' }
    ];
    connectedCallback() {
        this.loadMoreAccounts();
        this.loadTotalRecords();
    }
    async loadTotalRecords() {
        try {
            this.totalRecords = await getTotalAccountCount();
        } catch (error) {
            console.error('Error fetching total account count', error);
        }
    }

    async loadMoreAccounts(){
        if (this.isLoading || this.allLoaded) {
            return; // Prevent multiple simultaneous calls and stop loading when done
        }

        this.isLoading = true;
        try{
            const result = await returnAccounts({offSetValue : this.offset, limitValue : this.pageSize});
            this.records = [...this.records, ...result];
            this.offset += result.length;

            if (this.records.length >= this.totalRecords) {
                this.allLoaded = true;
            }
            
        } catch(error) {
            console.error('Error loading accounts', error);
        } finally {
            this.isLoading = false;
        }
    }
}