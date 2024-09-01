import {initPlayer} from "./src/index.js";
const STEP = 1

initPlayer({
  target: '.my-player',
  player: '.player-content-wrapper',
  slides: [
    {
      url: './src/image/chunk5.jpg',
      alt: 'img-slide1',
      filter: ['contrast(200%)'],
      overlays: [
        {
          type: 'text',
          value: 'Буран, тест перед взлетом!',
          classes: ['watercolor'],
          styles: {
            'font-size': '40px',
            top: '70%',
            left: '30%',
          },

        },
      ]
    },
    {
      url: './src/image/chunk6.jpg',
      alt: 'img-slide2',
      filter: ['contrast(120%)', 'blur(10%)'],
    },
    {
      url: './src/image/chunk7.jpg',
      alt: 'img-slide3',
      overlays: [
        {
          type: 'text',
          value: 'Буран старт!',
          classes: ['watercolor'],
          styles: {
            'font-size': '40px',
            top: '70%',
            right: '30%',
          },
        },
        {
          type: 'question',
          question: 'Взлетаем',
          variants: [
            'Да',
            'Нет'
          ],
          styles: {
            top: '10%',
            left: '0'
          }
        }
        ]
    },
    {url: './src/image/chunk8.jpg', alt: 'img-slide4'},
    ],
  delaySlide: 2,
  step: STEP
});








