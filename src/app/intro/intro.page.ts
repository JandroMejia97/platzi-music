import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Slide } from 'src/app/core/models/slide.model';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
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

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  finish() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/home');
  }

}
