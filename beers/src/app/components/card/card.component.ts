import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from 'src/app/Beers';
import { BeersService } from 'src/app/services/beers.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  beers?: Beer[];
  constructor(
    private beersService: BeersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.beersService.getBeers().subscribe((item) => (this.beers = item));
  }

  //click in read more and redirect to the product page
  showProduct(id: number) {
    this.router.navigate([`/${id}`]);
  }
}
