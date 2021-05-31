import { Injectable } from '@angular/core';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
  find = (): Product => {
    return {
      id: 'p01',
      name: 'name1',
      photo: 'img1.jpg',
      price: 4.6,
      quantity: 5,
      status: true,
    };
  };

  findAll = (): Product[] => {
    return [
      {
        id: 'p01',
        name: 'name1',
        photo: 'img1.jpg',
        price: 5,
        quantity: 5,
        status: true,
      },
      {
        id: 'p02',
        name: 'name2',
        photo: 'img2.jpg',
        price: 9,
        quantity: 5,
        status: true,
      },
      {
        id: 'p03',
        name: 'name3',
        photo: 'img3.jpg',
        price: 12,
        quantity: 5,
        status: true,
      },
    ];
  };

  search(min: number, max: number): Product[] {
    var products = this.findAll();
    var result: Product[] = [];
    for (var i = 0; i < products.length; i++) {
      if (products[i].price >= min && products[i].price <= max) {
        result.push(products[i]);
      }
    }
    return result;
  }

  findById(id: string): Product {
    return this.findAll().find((product) => product.id === id);
  }
}
