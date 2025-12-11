import { Component, OnInit } from '@angular/core';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        console.log('Products from backend:', data);
        this.products = Array.isArray(data) ? data : [];
        this.loading = false;
        this.error = '';
      },
      error: (err) => {
        console.error('Error loading products, will retry in 2s:', err);
        this.error = 'Error loading products. Retrying...';
        this.loading = true;
        setTimeout(() => this.loadProducts(), 2000);
      }
    });
  }

  buy(product: any) {
    this.productService.selectProduct(product).subscribe({
      next: () => {
        this.router.navigate(['/review']);
      },
      error: (err) => {
        console.error('Error selecting product:', err);
      }
    });
  }
}
