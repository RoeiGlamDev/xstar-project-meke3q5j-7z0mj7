import { AnimationType } from './types'; // Importing AnimationType from types file

const animationTypes: AnimationType[] = [
  {
    name: 'Fade In', // Animation for elements to fade in
    duration: '0.5s',
    timingFunction: 'ease-in',
  },
  {
    name: 'Slide Up', // Animation for elements to slide up
    duration: '0.5s',
    timingFunction: 'ease-out',
  },
  {
    name: 'Zoom In', // Animation for elements to zoom in
    duration: '0.5s',
    timingFunction: 'ease-in-out',
  },
  {
    name: 'Bounce', // Animation for elements to bounce
    duration: '0.8s',
    timingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  },
];

export default animationTypes; // Exporting the animation types array as default export