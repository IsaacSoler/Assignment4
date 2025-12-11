import { Component, OnInit } from '@angular/core';
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
  product: any;
  message = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getSelectedProduct().subscribe((data: any) => {
      this.product = data;
    });
  }

  submitOrder() {
    this.productService.submitOrder({ product: this.product }).subscribe((res: any) => {
      this.message = res.message;
    });
  }
}
