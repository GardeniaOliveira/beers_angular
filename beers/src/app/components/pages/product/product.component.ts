import { Component, OnInit } from '@angular/core';
import { BeersService } from './../../../services/beers.service';
import { Beer } from 'src/app/Beers';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  beers?: Beer[];
  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.beersService.getBeers().subscribe((item) => (this.beers = item));
  }
}
