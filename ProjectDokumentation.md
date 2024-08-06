# Project Documentation

## Overview

This project is a web application built using React.js. It includes features such as user authentication, CRUD operations, and client-side routing. The application is divided into public and private sections, each with distinct functionalities.

## What Exactly is the Project About

Inspired by platforms like Pinterest and Tumblr, this project aims to create a vibrant space for art enthusiasts and creators. Artists can connect with a community of like-minded individuals, receive feedback, and gain inspiration from others' work. The goal is to foster a collaborative and supportive environment where creativity can flourish and new artistic connections are made.

## Application Structure

### Public Part
- **Home Page**: A welcoming introduction to the platform. If the user is logged in, their username will be displayed with a personalized greeting.
- **About Page**: Provides insights into the purpose and features of the application, along with a showcase of the latest artwork.
- **Gallery Page**: Displays a comprehensive list of available artworks, with options to view detailed information for each piece.
- **Details Page**: Allows users to view detailed information about specific artwork but can only see it, can't do anything with it.
- **Register Page**: Enables new users to create an account by providing a username, email, and password.
- **Login Page**: Allows existing users to log in with their email and password.


### Private Part
- **Profile Page**: Users can view only their own artwork and the pieces they have liked.
- **Create Art Page**: Enables users to create new records.
- **Edit Art Page**: Provides functionality to edit existing records.
- **Logout Page**: Allows users to log out of the application.

## Key Features

1. **Authentication**:
   - **Login**: Users can log in with their email and password.
   - **Register**: New users can create an account by providing a username, email, and password.
   - **Logout**: Users can log out of their session.

2. **User Actions**:
   - **Create**: Users can create new records.
   - **Read**: Users can view a list of all records and details of specific records.
   - **Update**: Users can edit their own records.
   - **Delete**: Users can delete their own records.
   - **Like**: Users can like records to show appreciation.
   - **Comment**: Users can add comments to records to provide feedback.

3. **Routing**:
   - Uses React Router for navigation with protected routes and guards for authenticated and guest users.

4. **Error Handling and Validation**:
   - **Client-Side Validation**: Validates user input before sending it to the server, enhancing data integrity and user experience.
   - **Error Handling**: Captures and displays error messages for failed API requests or invalid actions, providing feedback and guidance to users.

## Folder Structure
- **`public/`**: Contains static assets including images and the favicon.

- **`src/`**: Includes all the source code for the application.
  - **`components/`**: Reusable UI components, such as headers, footers, and modals.
  - **`contexts/`**: React Context API implementations for managing global state.
  - **`guards/`**: Route guards for protecting private and guest routes.
  - **`hooks/`**: Custom hooks for handling form state and other reusable logic.
  - **`lib/`**: Utility functions for making API requests.
  - **`services/`**: Service files for interacting with APIs (e.g., authentication, art management).

## Technologies Used

- **React.js**: For building the user interface.
- **React Router**: For client-side routing and navigation.
- **CSS**: For styling components.
- **Fetch API**: For making HTTP requests to the server.
- **Context API**: For managing global state, such as authentication status.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**:
    Download the project code to your local machine using Git.

2. **Run the Server**:
    Open a terminal window, navigate to the server folder, and start the server with:
    ```bash
    node server.js
    ```

3. **Install Dependencies**:
    Navigate to the `client` folder and install the necessary dependencies with:
    ```bash
    npm install
    ```

4. **Start the Client Application**:
    In the `client` folder, start the development server with:
    ```bash
    npm run dev
    ```
    After starting the server, a link will be displayed in the terminal. Click on this link to open the application in your web browser.

