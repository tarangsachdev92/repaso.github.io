import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperDirective } from "ngx-swiper-wrapper";

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit {

  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
  public reviewConfig: SwiperConfigInterface = {};

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.setSwiperConfig();
    }, 30);
  }

  setSwiperConfig = () => {
    this.reviewConfig = {
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '</span>';
        },
      }
    };
  };

}
