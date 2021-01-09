import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { SwiperConfigInterface, SwiperDirective } from "ngx-swiper-wrapper";
@Component({
  selector: 'app-popular-category-item',
  templateUrl: './popular-category-item.component.html',
  styleUrls: ['./popular-category-item.component.scss']
})
export class PopularCategoryItemComponent implements OnInit {

  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
  public popularCategoryConfig: SwiperConfigInterface = {};

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.setSwiperConfig();
    }, 30);
  }

  setSwiperConfig = () => {
    this.popularCategoryConfig = {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    };
  };

}
