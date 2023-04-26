import Android from '@/Assets/Icons/android.svg';
import Bug from '@/Assets/Icons/bug.svg';
import Facebook from '@/Assets/Icons/facebook.svg';
import Google from '@/Assets/Icons/google.svg';
import Apple from '@/Assets/Icons/ios.svg';
import Linkedin from '@/Assets/Icons/linkedin.svg';
import Twitter from '@/Assets/Icons/twitter.svg';
import Windows from '@/Assets/Icons/windows.svg';
import Images from '@/Assets/Images';
import { ms } from '@/Theme';
import React from 'react';

const stats = [
  {
    name: 'Weekly Sales',
    value: '714k',
    background: '#C8FACD',
    gradient1: 'rgba(0, 123, 85, 0.24)',
    gradient2: 'rgba(0, 123, 85, 0)',
    textColor: '#005249',
    icon: <Android height={ms(24)} width={ms(24)} />,
  },
  {
    name: 'New Users',
    value: '1.35m',
    background: '#D0F2FF',
    gradient1: 'rgba(12, 83, 183, 0.24)',
    gradient2: 'rgba(12, 83, 183, 0)',
    textColor: '#04297A',
    icon: <Apple height={ms(24)} width={ms(24)} />,
  },
  {
    name: 'Item Orders',
    value: '1.72m',
    background: '#FFF7CD',
    gradient1: 'rgba(183, 129, 3, 0.24)',
    gradient2: 'rgba(183, 129, 3, 0)',
    textColor: '#7A4F01',
    icon: <Windows height={ms(24)} width={ms(24)} />,
  },
  {
    name: 'Bug Reports',
    value: '234',
    background: '#FFE7D9',
    gradient1: 'rgba(183, 33, 54, 0.24)',
    gradient2: 'rgba(183, 33, 54, 0)',
    textColor: '#7A0C2E',
    icon: <Bug height={ms(24)} width={ms(24)} />,
  },
];

const newsUpdates = [
  {
    image: Images.news1,
    title: 'Master The Art Of Event With These 7 Tips',
    description:
      'blandit et, volutpat molestie, porta ut, ligula. Aliquam eu nunc...',
  },
  {
    image: Images.news2,
    title: 'Master The Art Of Event With These 7 Tips',
    description:
      'blandit et, volutpat molestie, porta ut, ligula. Aliquam eu nunc...',
  },
  {
    image: Images.news3,
    title: 'Master The Art Of Event With These 7 Tips',
    description:
      'blandit et, volutpat molestie, porta ut, ligula. Aliquam eu nunc...',
  },
  {
    image: Images.news4,
    title: 'Master The Art Of Event With These 7 Tips',
    description:
      'blandit et, volutpat molestie, porta ut, ligula. Aliquam eu nunc...',
  },
  {
    image: Images.news5,
    title: 'Master The Art Of Event With These 7 Tips',
    description:
      'blandit et, volutpat molestie, porta ut, ligula. Aliquam eu nunc...',
  },
];

const orderTimeline = [
  {
    name: '1983, orders, $4220',
    createdAt: '2023-04-26T06:36:03.924Z',
    color: '#00AB55',
  },
  {
    name: '12 Invoices have been paid',
    createdAt: '2023-04-26T06:36:03.924Z',
    color: '#FFC107',
  },
  {
    name: 'Order #37745 from September',
    createdAt: '2023-04-26T06:36:03.924Z',
    color: '#1890FF',
  },
  {
    name: 'New order placed #XF-2356',
    createdAt: '2023-04-26T06:36:03.924Z',
    color: '#FF4842',
  },
  {
    name: 'New order placed #XF-2356.',
    createdAt: '2023-04-26T06:36:03.924Z',
    color: '#54D62C',
  },
];

const trafficBySite = [
  {
    name: 'FaceBook',
    value: '8,20k',
    siteIcon: <Facebook height={ms(32)} width={ms(32)} />,
  },
  {
    name: 'Google',
    value: '7,2k',
    siteIcon: <Google height={ms(32)} width={ms(32)} />,
  },
  {
    name: 'Linkedin',
    value: '6,2k',
    siteIcon: <Linkedin height={ms(32)} width={ms(32)} />,
  },
  {
    name: 'Twitter',
    value: '4,5k',
    siteIcon: <Twitter height={ms(32)} width={ms(32)} />,
  },
];

const tasks = [
  {
    name: 'Create FireStone Logo',
    isCompleted: false,
  },
  {
    name: 'Add SCSS and JS files if required',
    isCompleted: false,
  },
  {
    name: 'Stakeholder Meeting',
    isCompleted: false,
  },
  {
    name: 'Scoping & Estimations',
    isCompleted: false,
  },
  {
    name: 'Sprint Showcase',
    isCompleted: false,
  },
];

const webSitesVisits = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  datasets: [
    {
      data: [20, 40, 80, 100, 40, 80, 100, 70, 100],
      color: (opacity = 1) => 'rgba(45, 153, 255, 1)',
      strokeWidth: 2, // optional
    },
    {
      data: [10, 30, 40, 80, 20, 50, 70, 50, 80],
      color: (opacity = 1) => 'rgba(255, 231, 0, 1)',
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Team 1', 'Team 2'], // optional
};

const currentVisits = [
  {
    name: 'Seoul',
    population: 200,
    color: '#FFE700',
  },
  {
    name: 'Toronto',
    population: 90,
    color: '#826AF9',
  },
  {
    name: 'Beijing',
    population: 100,
    color: '#00AB55',
  },
  {
    name: 'New York',
    population: 100,
    color: '#2D99FF',
  },
];

export const HomeData = {
  stats,
  newsUpdates,
  orderTimeline,
  trafficBySite,
  tasks,
  webSitesVisits,
  currentVisits,
};
