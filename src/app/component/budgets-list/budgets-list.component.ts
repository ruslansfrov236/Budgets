import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Budgets } from '../../entities/budgets';
import { Router } from '@angular/router';
import { FilterBudget } from '../../entities/filter-budget';

@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budgets-list.component.html',
  styleUrls: ['./budgets-list.component.css']
})
export class BudgetsListComponent {
 private total:number=0;
  data: Budgets[] = [];
  months: string[] = [];


  constructor(private router: Router) {
    this.loadData();
    this.totalIncomeSum();
    this.totalExpenseSum();
    this.totalSum();



  }

  private loadData(): void {
    const storedData = localStorage.getItem('BudgetData');
    if (storedData) {
      this.data = JSON.parse(storedData);
    }
  }


  totalIncomeSum(): number {
    let total = 0;
    this.data.forEach(a => {
      total += a.income;
    });
    return total;
  }
  totalExpenseSum():number{
    let total = 0;
    this.data.forEach(a => {
      total += a.expense;
    });
    return total;
  }

  totalSum():number{
   return  this.totalIncomeSum()-this.totalExpenseSum();
  }

  filterBudgets(startDate?: HTMLInputElement, endDate?: HTMLInputElement) {
    // Tarixləri əldə edin
    const start = new Date(startDate.value);
    const end = new Date(endDate.value);

    // Filter olunan nəticəni saxlamaq üçün dəyişən
    let filteredData = this.data.filter(a => {
        const createdDate = new Date(a.createdDate);


        return createdDate >= start && createdDate <= end;
    });



    this.data=filteredData;

    console.log(this.data)





}

}
