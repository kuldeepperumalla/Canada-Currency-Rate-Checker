import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title: string = 'Kuldeep Perumalla C0808003';
  input: string = 'hi! please input the currency symbol';
  toggle: boolean = true;
  display: any = 0;
  inputValue = '';
  currencyVal = {
    'USD': 1.311,
    'AUD': 0.954,
    'INR': 0.016,
    'PHP': 0.024,
    'CHF': 1.333,
    'AED': 0.35,
    'GMD': 0.02

  }
  keyValues = Object.keys(this.currencyVal);

  currencyCheck(val: string) {

    this.inputValue = val.toUpperCase();
    const entries = Object.entries(this.currencyVal);

    if (this.keyValues.includes(this.inputValue) && this.inputValue.length === 3) {
      let filtered = entries.filter(([key, value]) => key == this.inputValue);
      const arr = Object.values(filtered);
      this.display = arr[0][1]
      this.input = `1 ${this.inputValue} currency is : $${this.display} CAD`;
      this.toggle = true

    }
    else {
      this.input = "Sorry! please try a valid symbol Ex: USD";
      this.display = 0;
      this.toggle = false;
    }
  }



}

