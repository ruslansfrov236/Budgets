import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BudgetsListComponent } from "./component/budgets-list/budgets-list.component";
import { BudgetsCreateComponent } from './component/budgets-create/budgets-create.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule,  BudgetsListComponent , BudgetsCreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'budgets';
}
