import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/PagenationAccount.getAccounts';

export default class AccountPagination extends LightningElement {
    @track allAccounts = [];
    pageSize = 5;
    currentPage = 1;
    columns = [
        { label: 'Account Name', fieldName: 'Name' },
        { label: 'Account Name', fieldName: 'Id' }
    ];
    get paginatedAccounts() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = this.currentPage * this.pageSize;
        return this.allAccounts.slice(start, end);
    }
    get isFirstPage() {
        return this.currentPage === 1;
    }

    get isLastPage() {
        return this.currentPage === this.totalPages;
    }

    get totalPages() {
        return Math.ceil(this.allAccounts.length / this.pageSize);
    }

    handleNext(){
        if(this.currentPage < this.totalPages){
            this.currentPage++;
        }
    }
    handlePrevious(){
        if(this.currentPage > 1){
            this.currentPage--;
        }
    }

    @wire(getAccounts)
    wiredAccounts({ data, error }) {
        if (data) {
            // store data in allAccounts
            this.allAccounts = data;
            // log the length or sample to console
            console.log('allAccounts' + this.allAccounts.length);
        } else if (error) {
            console.error('Error fetching accounts', error);
        }
    }
}