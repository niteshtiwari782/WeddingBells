import { garden, goldenLight, lalit, sayaji } from '../assets/showcaseImages';

const imgs = [garden, goldenLight, lalit, sayaji];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomBool() {
  return Math.random() < 0.5;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const venueNames = [
  'Royal Palace',
  'Sunshine Garden',
  'Moonlight Banquet',
  'Emerald Venue',
  'Crystal Hall',
  'Golden Terrace',
  'Silver Oak',
  'Maple Pavilion',
  'Lavender Court',
  'Rosewood Hall',
];

const locations = ['Indore', 'Bhopal', 'Ujjain', 'Dewas'];

const areas = ['Palasia', 'Vijay Nagar', 'Bhawarkua', 'Rau'];

const badgeValues = ['Excellent', 'Very Good', 'Good'];

const dummyArray = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name:
    venueNames[i % venueNames.length] +
    (i >= venueNames.length ? ` ${Math.floor(i / venueNames.length)}` : ''),
  location: getRandomElement(locations),
  img: getRandomElement(imgs),
  venueStar: getRandomInt(3, 5),
  rating: getRandomInt(3, 5),
  isOnlyVeg: getRandomBool(),
  area: getRandomElement(areas),
  reviewsCount: getRandomInt(10, 60),
  badgeValue: getRandomElement(badgeValues),
  startPrice: getRandomInt(20000, 50000),
  capacity: getRandomElement([100, 300, 400, 500, 1000]),
}));

const VenueShowcaseData = [
  {
    id: 1,
    name: 'Royal Palace',
    location: 'Indore',
    img: lalit,
    venueStar: 4,
    rating: 5,
    isOnlyVeg: true,
    area: 'Palasia',
    reviewsCount: 23,
    badgeValue: 'Excellent',
    startPrice: 40000,
    capacity: 500,
  },
  {
    id: 2,
    name: 'Sunshine Garden',
    location: 'Bhopal',
    img: garden,
    venueStar: 3,
    rating: 4,
    isOnlyVeg: false,
    area: 'Vijay Nagar',
    reviewsCount: 43,
    badgeValue: 'Very Good',
    startPrice: 34000,
    capacity: 300,
  },
  {
    id: 3,
    name: 'Moonlight Banquet',
    location: 'Ujjain',
    img: sayaji,
    venueStar: 5,
    rating: 3,
    isOnlyVeg: true,
    area: 'Bhawarkua',
    reviewsCount: 13,
    badgeValue: 'Good',
    startPrice: 20000,
    capacity: 1000,
  },
  {
    id: 4,
    name: 'Emerald Venue',
    location: 'Dewas',
    img: goldenLight,
    venueStar: 3,
    rating: 5,
    isOnlyVeg: true,
    area: 'Vijay Nagar',
    reviewsCount: 56,
    badgeValue: 'Excellent',
    startPrice: 48000,
    capacity: 400,
  },
];

export default dummyArray;
