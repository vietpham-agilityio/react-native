# Bazer Books Mobile App

A React Native CLI project for creating a feature-rich e-commerce mobile application for books.

## 📱 Project Overview

Bazer Books is a mobile application designed to provide users with a seamless experience for browsing, discovering, and purchasing books. The app includes features such as onboarding, authentication, book browsing by categories, detailed product views, shopping cart functionality, and a streamlined checkout process.

## ✨ Features

- **Onboarding**: Step-by-step introduction to the app's features
- **Authentication**: Sign in with email and password
- **Home Screen**: 
  - Carousel thumbnails
  - Product cards
  - Vendor listings
  - Author listings
  - Interactive product details
- **Category Browsing**: Filter books by category
- **Shopping Cart**: Add books and manage quantities
- **Checkout Process**: Address information and order summary

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- CocoaPods (for iOS dependencies, macOS only)

### Installation

1. Clone the repository:

```bash
git clone git@gitlab.asoft-python.com:viet.pham/reactnative.git
cd BazerBooksApplication
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (macOS only):

```bash
npm run pod-install
```

### Running the app

#### Start Metro Bundler separately

```bash
npm run metro
```

#### iOS (macOS only)

```bash
npm run ios
# or
yarn ios
```

#### Android

```bash
npm run android
# or
yarn android
```

## 🛠️ Tech Stack

- **React Native CLI**: Core framework for native mobile development
- **TypeScript**: Type-safe code development
- **React Navigation**: Navigation and routing
- **Jest & React Testing Library**: Unit and component testing
- **Storybook**: Component documentation and visualization

## 📂 Project Structure

```
Will update later
```

## 🧪 Testing

The application has a robust testing setup with Jest and React Testing Library.

```bash
# Run all tests
npm test
# or
yarn test

# Run tests with coverage report
npm test -- --coverage
# or
yarn test --coverage
```

Target test coverage: > 80%

## 📦 Building for Production

### Android

```bash
# Generate APK
npm run build:android
# or
yarn build:android
```

The APK file will be generated at `android/app/build/outputs/apk/release/app-release.apk`

## 🧩 Scripts

- `npm start`: Start Metro Bundler
- `npm run android`: Build and run on Android
- `npm run ios`: Build and run on iOS
- `npm run test`: Run tests
- `npm run lint`: Run ESLint

## ✍️ Acknowledgments

- Developed at [Agility.io](https://www.agilityio.com)
- Author by [viet.pham](viet.pham@asnet.com.vn) 🧑‍💻 
- Part of React Native Training (May 2025)
