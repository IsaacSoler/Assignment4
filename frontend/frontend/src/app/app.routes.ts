import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list';
import { ReviewComponent } from './pages/review/review';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'review', component: ReviewComponent }
];
