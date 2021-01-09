import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardComponents } from './components/component-export';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxAutocompleteModule } from 'ngx-angular-autocomplete';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  autoplay: false,
  speed: 500,
  loop: true,
};

@NgModule({
  declarations: [...dashboardComponents],
  imports: [
    CommonModule,
    SwiperModule,
    NgxAutocompleteModule,
    DashboardRoutingModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ]
})
export class DashboardModule { }
