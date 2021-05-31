import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss'],
})
export class Demo1Component implements OnInit {
  username: string;
  price: number;
  quantity: number;
  status: boolean;
  names: string[];
  products: Product[];

  constructor() {}

  ngOnInit(): void {
    this.username = 'acc1';
    this.price = 4.5;
    this.quantity = 3;
    this.status = true;
    this.names = ['name 1', 'name 2', 'name 3', 'name 4'];
    this.products = [
      {
        id: "p01",
        photo: "img1",
        name: 'product1',
        price: 21,
        quantity: 15,
        status: true,
      },
      {
        id: "p02",
        photo: "img2",
        name: 'product2',
        price: 92,
        quantity: 15,
        status: true,
      },
      {
        id: "p02",
        photo: "img2",
        name: 'product2',
        price: 14,
        quantity: 17,
        status: true,
      },
    ];
  }
}
