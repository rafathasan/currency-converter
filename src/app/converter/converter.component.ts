import { Component, OnInit } from '@angular/core';
import { ExchangesRatesService } from '../services/exchanges-rates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  amount = 1;
  from = "CAD"
  to = "USD"
  rates: {[key:  string]: number};

  convert(): number{
    return this.amount * this.rates[this.to];
  }

  constructor(private service: ExchangesRatesService) {
  }

  getAllccurrencies(): string[]{
    return Object.keys(this.rates)
  }

  loadRates(){
    this.service.getRates(this.from).subscribe(res => this.rates = res.rates)
  }

  ngOnInit(): void {
    this.loadRates()
  }
}
