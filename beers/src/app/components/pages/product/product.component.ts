import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeersService } from './../../../services/beers.service';
import { Beer } from 'src/app/Beers';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  //here is not more a [] of beers, but only one beer
  beer?: Beer;
  constructor(
    private beersService: BeersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //get the specific id
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.beersService.getBeers().subscribe(
      //the element is a beer with id, title, description etc. in this case we compare the same id
      (item) => (this.beer = item.find((element) => element.id === id))
    );
  }

  //save data on the local storage
  saveFavorite() {
    //get all in the local storage
    const data = JSON.parse(localStorage.getItem('favorite') || '[]');
    console.log('saveFavorite');

    //create a new array to store the data from local storage and the beer clicked
    const newData = data.concat(this.beer);

    //save the data again
    localStorage.setItem('favorite', JSON.stringify(newData));
  }

  shareOnSocialMedia() {
    console.log('share on social media');
  }
}
