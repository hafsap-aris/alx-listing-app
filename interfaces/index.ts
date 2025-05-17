import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'confirm & pay' | 'reserve now' | 'show all amenities' | 'instant book' | 'self checkin' | 'book now, pay later' | 'free reschedule' | 'sign in' | 'all' | 'top villa' | 'show more' | 'more info' | 'filter' | 'sort by highest price';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'confirm & pay' | 'reserve now' | 'show all amenities' | 'instant book' | 'self checkin' | 'book now, pay later' | 'free reschedule' | 'sign in' | 'all' | 'top villa' | 'show more' | 'more info' | 'filter' | 'sort by highest price';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}