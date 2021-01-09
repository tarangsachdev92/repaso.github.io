import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperDirective } from "ngx-swiper-wrapper";

@Component({
  selector: 'app-popular-restaurant-item',
  templateUrl: './popular-restaurant-item.component.html',
  styleUrls: ['./popular-restaurant-item.component.scss']
})
export class PopularRestaurantItemComponent implements OnInit {

  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
  public popularRestaurantConfig: SwiperConfigInterface = {};

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.setSwiperConfig();
    }, 30);
  }

  setSwiperConfig = () => {
    this.popularRestaurantConfig = {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    };
  };
}
