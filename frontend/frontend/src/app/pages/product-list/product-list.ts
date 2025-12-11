import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  loading = true;
  error = '';

  constructor(
    private productService: ProductService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('ProductListComponent initialized');

    this.productService.getProducts().subscribe({
      next: (data: any[]) => {
        console.log('Products from backend:', data);
        this.products = data;
        this.loading = false;
        this.error = '';
        this.cdr.detectChanges();   // ensure view updates
      },
      error: (err) => {
        console.error('Error loading products:', err);
        this.error = 'Failed to load products. Please try again.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  buy(product: any) {
    console.log('Buy clicked with product:', product);

    this.productService.selectProduct(product).subscribe({
      next: (res) => {
        console.log('Select-product response:', res);
        this.router.navigate(['/review']);
      },
      error: (err) => {
        console.error('Error selecting product:', err);
      }
    });
  }
}
