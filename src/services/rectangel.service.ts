import { Injectable } from '@angular/core';
import { MathService } from './match.service';

@Injectable()
export class RectangleService {
  constructor(private mathService: MathService) {}

  area(a: number, b: number): number {
    return this.mathService.mul(a, b);
  }

  perimeter(a: number, b: number): number {
    var result = this.mathService.add(a, b);
    return this.mathService.mul(result, 2);
  }
}
