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
      title: 'Play your music',
      subtitle: 'ANYWHERE.',
      imageSrc: 'assets/img/PlatziMusic.png',
      description: `
        The best albums, the best songs. Listen and share at any time, at all hours.
      `
    },
    {
      icon: 'videocam',
      title: 'Enjoy our player',
      subtitle: 'OF INCREDIBLE VIDEOS',
      imageSrc: 'assets/img/PlatziMusic.png',
      description: `
        Enter the video mode of our player and get access to clips, documentaries and making incredible offs of your favorite artist.
      `
    },
    {
      icon: 'bicycle',
      title: 'Access the exclusive',
      subtitle: 'SPORTS MODE',
      imageSrc: 'assets/img/PlatziMusic.png',
      description: `
        Create a playlist based on your physical activity. Have reports and access to what you need, integrated with GPS!
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
    this.router.navigateByUrl('/menu/home');
  }

}
