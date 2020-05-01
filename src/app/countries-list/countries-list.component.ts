import { Component, OnInit } from '@angular/core';
import { Country } from './country.class';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  countriesList: Country [] = COUNTRIES;

  constructor() { }

  ngOnInit(): void {
  }
  selectedCountryCapital: string;
  onSelect(selected: Country) {
    this.selectedCountryCapital = selected.capital;
  }
}

const COUNTRIES: Country [] = [
  { name: 'Poland', capital: 'Warsaw' },
  { name: 'Spain', capital: 'Madrid' },
  { name: 'Ukraine', capital: 'Kyiv' },
  { name: 'Switzerland', capital: 'Bern' },
  { name: 'Belgium', capital: 'Brussel' },
  { name: 'Greece', capital: 'Athens' }
 ];
