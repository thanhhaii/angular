import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { ProductService } from 'src/services/product.service';
import { RectangleService } from 'src/services/rectangel.service';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss'],
})
export class Demo4Component implements OnInit {
  msg1: string;
  msg2: string;
  a: number;
  b: number;
  area: number;
  min: number;
  max: number;
  perimeter: number;
  products: Product[];

  constructor(
    private rectangleService: RectangleService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.msg1 = 'abc';
    this.msg2 = 'def';
    this.a = 0;
    this.b = 0;
    this.products = this.productService.findAll();
  }

  calculate = () => {
    this.area = this.rectangleService.area(this.a, this.b);
    this.perimeter = this.rectangleService.perimeter(this.a, this.b);
  };

  seacrhProduct = () => {
    this.products = this.productService.search(this.min, this.max)
  }
}
