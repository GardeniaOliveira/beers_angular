import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  favorite: any;
  constructor() {}

  ngOnInit(): void {
    //get data from localStorage
    this.favorite = JSON.parse(localStorage.getItem('favorite') || '');
    console.log(this.favorite);
  }
}
