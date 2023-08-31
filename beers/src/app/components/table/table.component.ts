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


  displayedColumns: string[] = ['position', 'name'];

  dataSource: any = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.beers);
    //we receive beer as a prop in favorite and do a map 
    this.dataSource = this.beers.map((beer, index) =>({ position: index+1, name: beer.name}))
  }
}
