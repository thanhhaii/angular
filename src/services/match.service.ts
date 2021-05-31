import { Injectable } from '@angular/core'

@Injectable()
export class MathService {

  add(a: number, b: number): number {
    return a + b;
  }

  mul(a: number, b: number): number {
    return a * b;
  }

}
