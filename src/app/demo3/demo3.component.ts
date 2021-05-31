import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { DemoService } from 'src/services/demo.service';
import { ProductService } from 'src/services/product.service';
import { RectangleService } from 'src/services/rectangel.service';

@Component({
  selector: 'app-root',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss'],
})
export class Demo3Component implements OnInit {
  result1: string;
  result2: string;
  result3: number;
  product: Product;
  area: number;
  perimeter: number;

  constructor(
    private demoService: DemoService,
    private productService: ProductService,
    private rectangleService: RectangleService
  ) {}

  ngOnInit(): void {
    this.result1 = this.demoService.hello();
    this.result2 = this.demoService.hi('Hong Van');
    this.result3 = this.demoService.add(5, 9);
    this.product = this.productService.find();
    this.area = this.rectangleService.area(2, 10);
    this.perimeter = this.rectangleService.perimeter(2, 10);
  }
}
