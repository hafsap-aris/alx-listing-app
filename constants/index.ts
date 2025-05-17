export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';
export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  USERS: '/users',
  ORDERS: '/orders',
};

export const ITEMS_PER_PAGE = 10;
export const DEFAULT_THEME = 'light';

export const APP_NAME = 'My Awesome Project';
export const CTA_TEXT = 'Book Now';
export const DETAILS_TEXT = 'Details';
export const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} ${APP_NAME}. All rights reserved.`;

export const LOCAL_STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_PREFERENCES: 'userPreferences',
};

export const STRIPE_PUBLIC_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;