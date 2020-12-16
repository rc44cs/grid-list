import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export interface Product {
  productId: string;
  imagePath: string;
  rating: number;
  percentage: number;
  tags: string;
  title: string;
  price: number;
  ePacket: boolean;
  createdAt: Date;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [];
  constructor() {}

  ngOnInit(): void {
    this.products.push({
      productId: '1',
      imagePath: '',
      rating: 3,
      percentage: 23,
      tags: '1.3K',
      title: 'Xiaomi Wifi Extender',
      price: 23,
      ePacket: true,
      createdAt: new Date(),
    });
  }

  viewProductDetail(): void {
    
  }
}
