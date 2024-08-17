## Website name: Easy Sell
#### It's a single page web application which is mostly focused on functionalities like pagination, sorting and searching data from the backend server.

## live link: https://easy-sell-304cc.web.app

### Technologies used:
React, Tailwind CSS, Firebase

## How to Start the project:

### Installation
1. Clone the repository
2. Install dependencies:
    ```sh
   npm install
    ```

### Configuration
1. Set up Firebase:
    - Create a project in [Firebase Console](https://console.firebase.google.com/) and add a web app.
    - Copy the Firebase config.

2. Create a `.env.local` file in the root directory:
    ```plaintext
    VITE_apiKey=your-api-key
    VITE_authDomain=your-auth-domain
    VITE_projectId=your-project-id
    VITE_storageBucket=your-storage-bucket
    VITE_messagingSenderId=your-messaging-sender-id
    VITE_appId=your-app-id
    ```

## Usage

1. Run the development server:
    ```sh
    npm start
    ```
2. Build for production:
    ```sh
    npm run build
    ```