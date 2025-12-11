import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.html',
  styleUrl: './review.css'
})
export class ReviewComponent implements OnInit {
  product: any = null;
  message = '';

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('ReviewComponent initialized');

    this.productService.getSelectedProduct().subscribe({
      next: (data: any) => {
        console.log('Selected product from backend:', data);
        this.product = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error getting selected product:', err);
      }
    });
  }

  submitOrder() {
    console.log('Submitting order for:', this.product);

    this.productService.submitOrder({ product: this.product }).subscribe({
      next: (res: any) => {
        console.log('Submit-order response:', res);
        this.message = res.message;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error submitting order:', err);
      }
    });
  }
}
