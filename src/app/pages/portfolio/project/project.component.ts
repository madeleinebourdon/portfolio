import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ViewChild } from '@angular/core';

import { RealisationsService } from 'src/app/services/realisations.service';

import { SwiperOptions } from 'swiper';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  Mousewheel
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs, Mousewheel]);

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  // public id: string;
  id: string = this.route.snapshot.queryParamMap.get('id')
  realisations = this.realisationsService.realisations
  realisation

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  onSwiper(swiper) {
    console.log(swiper);
  }
  // onSlideChange() {
  //   console.log('slide change');
  // }


  // @ViewChild('galleryThumbs') carouselThumbs: any;
  // @ViewChild('galleryTop') carousel: any;


  constructor(
    private route: ActivatedRoute,
    public realisationsService: RealisationsService
  ) {
    // console.log('[project.component.ts]')

    this.id = this.route.snapshot.paramMap.get('id');
    this.realisation = this.realisations.find(element => element.id === parseInt(this.id))
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
