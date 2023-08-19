import { Component, OnInit } from '@angular/core';

import { BeersService } from './../../services/beers.service';
import { Beer } from 'src/app/Beers';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  beers?: Beer[];
  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.beersService
      .getBeers()
      .subscribe((item) => (this.beers = item));

  }
}
