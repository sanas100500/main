import { getNumber } from './module-1'

class Main {
  num: number
  str: string
  constructor() {
    this.num = getNumber(5, 5)
  }
}