import { Component, OnInit } from '@angular/core';

export interface Money {
  color: string,
  amount: number
}

export interface SignColors{
  mainColor: string,
  toggleColor: string
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  multiplicationSignObject : SignColors ={mainColor: "#FF8300",toggleColor:"grey"};
  plusSignObject : SignColors ={mainColor:"#6AB8EE",toggleColor:"grey"};
  minusSignObject : SignColors ={mainColor:"#B8EE30",toggleColor:"grey"};
  divisionSignObject: SignColors ={mainColor:"#F62AA0",toggleColor:"grey"};
  multiplicationSign = this.multiplicationSignObject.mainColor;
  plusSign = this.plusSignObject.mainColor;
  minusSign = this.minusSignObject.mainColor;
  divisionSign = this.divisionSignObject.mainColor;
  total = 0;
  operationFlag = "";

  twentyThousand: Money = { color: '#FBC858', amount: 20000 }
  fiveHundred: Money = { color: '#F9F940', amount: 500 }
  thousand: Money = { color: 'pink', amount: 1000 }
  fiveThousand: Money = { color: '#FCB5AC', amount: 5000 }
  tenThousand: Money = { color: '#A0E7E5', amount: 10000 }
  fiftyThousand: Money = { color: '#B5E5CF', amount: 50000 }
  oneHundredThousand: Money = { color: 'white', amount: 100000 }
  promissoryNote: Money = { color: '#F66AA6', amount: 20000 }


  constructor() { }

  ngOnInit(): void {
  }

  operationClick(operation: string) {

    switch (operation) {
      case "add": {
        this.plusSign = this.plusSignObject.toggleColor;
        this.minusSign = this.minusSignObject.mainColor;
        this.multiplicationSign = this.multiplicationSignObject.mainColor;
        this.divisionSign = this.divisionSignObject.mainColor;
        break;
      }
      case "subtract": {
        this.minusSign = this.minusSignObject.toggleColor;
        this.multiplicationSign = this.multiplicationSignObject.mainColor;
        this.divisionSign = this.divisionSignObject.mainColor;
        this.plusSign = this.plusSignObject.mainColor;
        break;
      }
      case "multiply": {
        this.multiplicationSign = this.multiplicationSignObject.toggleColor;
        this.divisionSign = this.divisionSignObject.mainColor;
        this.plusSign = this.plusSignObject.mainColor;
        this.minusSign = this.minusSignObject.mainColor;
        break;
      }
      case "divide": {
        this.divisionSign = this.divisionSignObject.toggleColor;
        this.minusSign = this.minusSignObject.mainColor;
        this.multiplicationSign = this.multiplicationSignObject.mainColor;
        this.plusSign = this.plusSignObject.mainColor;
        break;
      }
      default: {
        break;
      }
    }
    this.operationFlag = operation;
  }

  amountClick(amount: number) {
    switch (this.operationFlag) {
      case "add": {
        this.total += amount;
        break;
      }
      case "subtract": {
        this.total -= amount;
        break;
      }
      case "multiply": {
        this.total *= amount;
        break;
      }
      case "divide": {
        this.total /= amount;
        break;
      }
      default: {
        break;
      }
    }
  }

  reset(){
    this.operationFlag = "";
    this.total = 0;
    this.minusSign = this.minusSignObject.mainColor;
    this.multiplicationSign = this.multiplicationSignObject.mainColor;
    this.plusSign = this.plusSignObject.mainColor;
    this.divisionSign = this.divisionSignObject.mainColor;
  }

}
