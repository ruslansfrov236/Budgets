import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Budgets } from '../../entities/budgets';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-create',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './budgets-create.component.html'
})
export class BudgetsCreateComponent {
  data: Budgets[] = [];

  constructor(private router: Router) {
    this.loadData();
  }

  private loadData(): void {
    const storedData = localStorage.getItem('BudgetData');
    if (storedData) {
      this.data = JSON.parse(storedData);
    }
  }

  createBudgets(createdDate: HTMLInputElement, income: HTMLInputElement, incomeTitle: HTMLInputElement, expense: HTMLInputElement, expenseTitle: HTMLInputElement) {
    const incomeValue = +income.value;
    const expenseValue = +expense.value;


    if (incomeValue > 0 && expenseValue > 0) {

      const budget = new Budgets();
      budget.Id = this.data.length ? Math.max(...this.data.map(b => b.Id)) + 1 : 1; // Unique ID generation

      budget.createdDate = new Date(createdDate.value);
      budget.income = incomeValue;
      budget.incomeTitle = incomeTitle.value;
      budget.expense = expenseValue;
      budget.expenseTitle = expenseTitle.value;

      this.data.push(budget);
      localStorage.setItem('BudgetData', JSON.stringify(this.data));

      this.router.navigateByUrl('/');
    } else if (incomeValue== 0 && expenseValue < 0) {
      alert('You have entered a negative value!');
    } else {
      alert('You have entered a not found value!');
    }
  }
}
