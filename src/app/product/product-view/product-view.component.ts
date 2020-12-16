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
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  @Input() products: Product[];
  isGrid= false;
  @Output() viewProductDetail = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  viewProduct(): void {
    this.viewProductDetail.emit();
  }
}
