import { Component } from '@angular/core';
import { Slide } from '../core/models/slide.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOptions: any = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };

  slides: Slide[] = [
    {
      icon: 'play-circle',
      title: 'Ut enim ad minim veniam',
      subtitle: 'Quis nostrud exercitation ullamco laboris.',
      imageSrc: 'assets/img/PlatziMusic.png',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `
    },
    {
      icon: 'videocam',
      title: 'Ut enim ad minim veniam',
      subtitle: 'Quis nostrud exercitation ullamco laboris.',
      imageSrc: 'assets/img/PlatziMusic.png',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `
    },
    {
      icon: 'thumbs-up',
      title: 'Ut enim ad minim veniam',
      subtitle: 'Quis nostrud exercitation ullamco laboris.',
      imageSrc: 'assets/img/PlatziMusic.png',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `
    }
  ];

  constructor() { }

}
