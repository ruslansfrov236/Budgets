import { Routes } from '@angular/router';
import { BudgetsListComponent } from './component/budgets-list/budgets-list.component';
import { BudgetsCreateComponent } from './component/budgets-create/budgets-create.component';

export const routes: Routes = [

  {
    path:"", component:BudgetsListComponent
  },
  {
    path:"create" , component:BudgetsCreateComponent
  }
];
