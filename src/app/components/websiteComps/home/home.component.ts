import {Component, OnInit} from '@angular/core';
import {PricingComponent} from "../pricing/pricing.component";
import {AllProductsComponent} from "../products/all-products/all-products.component";
import {RouterLink} from "@angular/router";
import {FeaturesComponent} from "../features/features.component";
import {TestimonialsComponent} from "../testimonials/testimonials.component";
import {TeamComponent} from "../team/team.component";
import {NumbersComponent} from "../numbers/numbers.component";

interface Testimonial {
  image: string;
  quote: string;
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PricingComponent,
    AllProductsComponent,
    RouterLink,
    FeaturesComponent,
    TestimonialsComponent,
    TeamComponent,
    NumbersComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


}
