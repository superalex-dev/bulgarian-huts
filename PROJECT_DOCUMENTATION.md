# Project Documentation: Bulgarian Mountain Huts Website

## Project Description

This project is a comprehensive web application for exploring and booking Bulgarian mountain huts. The website provides information about mountain huts in Bulgaria's three major mountain ranges: Стара Планина (Balkan Mountains), Рила (Rila), and Пирин (Pirin). Users can browse huts, view detailed information, make reservations, leave reviews, and save favorites.

## Technical Implementation

### 1. HTML5 Structure

The project uses semantic HTML5 elements throughout:

- **`<header>`**: Site navigation and branding
- **`<main>`**: Primary content area
- **`<section>`**: Content sections (hero, features, huts grid)
- **`<article>`**: Individual hut cards and feature cards
- **`<nav>`**: Navigation menu
- **`<footer>`**: Site footer with copyright
- **`<form>`**: Contact and booking forms

All pages include proper DOCTYPE declaration (`<!DOCTYPE html>`) and language attribute (`lang="bg"`).

### 2. Pages Structure

The project includes four HTML pages:

1. **index.html** - Homepage with hero section and feature cards
2. **huts.html** - Main listing page with search, filters, and hut cards
3. **contacts.html** - Contact form page
4. **favorites.html** - User's favorite huts page

### 3. CSS3 Styling

All styling is implemented using CSS3 features:

- **CSS Variables**: Custom properties for colors and spacing
- **Flexbox**: For navigation and card layouts
- **Grid**: For responsive hut cards and filters
- **Media Queries**: Responsive design for mobile, tablet, and desktop
- **Transitions**: Smooth animations and hover effects
- **Box Shadow**: Modern depth effects

The CSS file (`css/style.css`) is completely separate and unmodified (not minified).

### 4. JavaScript Functionality

JavaScript provides extensive interactivity:

- **Dynamic Content**: Year display, like counts, ratings
- **Search & Filtering**: Real-time hut filtering by name, mountain, price
- **Sorting**: Multiple sorting options (price, likes, name)
- **Modal System**: Booking and hut details modals
- **Form Validation**: Client-side validation for contact and booking forms
- **LocalStorage**: Persistent data storage for likes, bookings, reviews, favorites
- **Image Gallery**: Interactive image carousel in hut details
- **Mobile Menu**: Hamburger menu for mobile devices

The JavaScript file (`js/script.js`) is separate and unmodified (not minified or obfuscated).

### 5. Responsive Design

The website is fully responsive using:

- **Mobile-First Approach**: Base styles for mobile devices
- **Breakpoints**: Media queries at 768px for tablets and mobile
- **Flexible Layouts**: Grid and Flexbox adapt to screen size
- **Touch-Friendly**: Large buttons and touch targets on mobile
- **Adaptive Navigation**: Hamburger menu on mobile, full menu on desktop
- **Responsive Images**: Images scale appropriately
- **Fluid Typography**: Text sizes adapt to viewport

### 6. Features Implemented

**Core Features:**
- Hut browsing with detailed information
- Search and filter functionality
- Sorting options
- Like system with persistent counts
- Booking/reservation system
- Review and rating system
- Favorites page
- Contact form

**Advanced Features:**
- Image galleries for each hut
- Route information with detailed descriptions
- Location and contact information
- Amenities display
- Statistics dashboard (via console)
- Form submission storage

## File Structure

```
bulgarian-huts/
├── index.html          (Homepage)
├── huts.html           (Huts listing page)
├── contacts.html       (Contact page)
├── favorites.html      (Favorites page)
├── css/
│   └── style.css       (All CSS3 styles)
├── js/
│   └── script.js       (All JavaScript functionality)
└── README.md           (Project readme)
```

## W3C Validation

The project is designed to meet W3C validation standards:

- **HTML5**: Proper DOCTYPE, semantic structure, valid attributes
- **CSS3**: Valid CSS syntax, no deprecated properties
- **Accessibility**: ARIA labels, semantic HTML, proper heading hierarchy

**Note**: Files should be validated using:
- W3C HTML Validator: https://validator.w3.org/
- W3C CSS Validator: https://jigsaw.w3.org/css-validator/

## Browser Compatibility

The website is compatible with:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design tested on various screen sizes

## Data Storage

All user data is stored locally using browser's localStorage:
- User likes and preferences
- Like counts (shared across sessions)
- Form submissions
- Bookings
- Reviews and ratings

## Project Requirements Compliance

✅ **Initial Page + 2 Internal Pages**: 4 pages total (index, huts, contacts, favorites)  
✅ **HTML5 Semantic Content**: All pages use semantic HTML5 elements  
✅ **CSS3 Styling**: All styles in separate CSS3 file  
✅ **JavaScript Interactivity**: Comprehensive JavaScript in separate file  
✅ **Responsive Design**: Fully adaptive layout with media queries  
✅ **Separate Files**: CSS and JS in separate, unmodified files  
✅ **W3C Validation Ready**: Code structured for validation  
✅ **Documentation**: This document (2 pages maximum)

---

**Project Status**: Complete and ready for submission

