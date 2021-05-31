import {Injectable} from '@angular/core'

@Injectable()
export class DemoService{

  hello = (): string  => {
    return "hello world"
  }

  hi = (name: string): string => {
    return `Xin chao ${name}`
  }

  add = (a: number, b: number): number => {
    return a + b
  }

}
