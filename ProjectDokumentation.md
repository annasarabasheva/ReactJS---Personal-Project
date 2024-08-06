# Project Documentation
Overview
This project is a web application built using React.js. It includes features such as user authentication, CRUD operations, and client-side routing. The application is divided into public and private sections, each with distinct functionalities.

Application Structure
Public Part
Home Page: Displays an overview of the application.
About Page: Provides information about the application or organization.
Gallery Page: Lists all available records with options to view details.
Private Part
Profile Page: Allows users to view and edit their profile.
Create Art Page: Enables users to create new records.
Edit Art Page: Provides functionality to edit existing records.
Logout Page: Allows users to log out of the application.
Key Features
Authentication:

Login: Users can log in with their email and password.
Register: New users can create an account by providing a username, email, and password.
Logout: Users can log out from their session.
User Actions:

Create: Users can create new records.
Read: Users can view a list of all records and details of specific records.
Update: Users can edit their own records.
Delete: Users can delete their own records.
Routing:

Uses React Router for navigation with protected routes and guards for authenticated and guest users.