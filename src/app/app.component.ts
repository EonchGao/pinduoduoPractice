import { Component } from '@angular/core';
import { TopMenu, ImageSlider } from './components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toMenus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '电脑',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    },
    {
      title: '家装',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '家具',
      link: ''
    }
  ];

  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'https://via.placeholder.com/600X50',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://via.placeholder.com/600X50',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://via.placeholder.com/600X50',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://via.placeholder.com/600X50',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://via.placeholder.com/600X50',
      link: '',
      caption: ''
    },
  ];

  handleTabSelected(tabMenu: TopMenu) {
    console.log(tabMenu);
  }
}
