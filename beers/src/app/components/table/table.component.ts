import { Component, OnInit, Input } from '@angular/core';
import { Beer } from 'src/app/Beers';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input()
  //array with all bears
  beers!: Beer[];

  displayedColumns: string[] = ['position', 'name', 'btn'];

  dataSource: any = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.beers);
    //we receive beer as a prop in favorite and do a map to show on the screen
    this.dataSource = this.beers.map((beer, index) => ({
      position: index + 1,
      name: beer.name,
      id: beer.id,
    }));
  }

  removeFavorite(id: number) {
    console.log('removeFavorite');
    const data: Beer[] = JSON.parse(localStorage.getItem('favorite') || '[]');

    //filter the data from local storage with the same name of the beer clicked and return a new array with the ids different from the id clicked
    const removeBeer = data.filter((beer: any) => beer.id !== id);

    //save the data again in local storage without the beer removed
    localStorage.setItem('favorite', JSON.stringify(removeBeer));

    // do a map again with the new array without the beer removed to show the data on the screen
this.dataSource = removeBeer.map(
      (beer, index: number) => ({
        position: index + 1,
        name: beer.name,
        id: beer.id,
      })
    );
  }
}
