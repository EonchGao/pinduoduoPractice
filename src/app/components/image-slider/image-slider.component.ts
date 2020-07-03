import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit, AfterViewInit {

  @Input() sliders: ImageSlider[] = [];

  @ViewChild('imageSlider', { static: true }) imageSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  constructor(
    private rd2: Renderer2
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.imgs.forEach(item => {
      this.rd2.setStyle(item.nativeElement, 'height', '100px');
    });

  }

}
