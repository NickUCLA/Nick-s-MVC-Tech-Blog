# Nick's MVC-Tech-Blog

## Table of Contents

- [Description](#description)
- [Live URL](#live-url)
- [Screenshots](#screenshots--video)
- [Technologies Used](#technologies-used)
- [Installation Steps](#installation-steps)
- [Credits](#credits)
- [Features](#features)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Questions](#questions)

## Description

This is a full-stack application designed for users to create and engage with tech-related content. It provides features like creating, editing, and deleting posts, as well as commenting on others' posts. Users can view posts without an account, but need to login or create an account to access certain features. User data is securely managed through authentication using session storage, cookies, and password hashing with bcrypt.

## Live URL

[Explore the app here]()

## Screenshots

![Screenshot1]()

![Screenshot2]()

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize (ORM)
- Handlebars (template engine)
- Bootstrap
- Jest (for future unit testing)
- Insomnia (for testing routes)

## Installation Steps

1. **Clone the repository:**
   git clone

2. **Install Node.js (v16):**
   If using Homebrew, run `brew install node@16`.

3. **Initialize npm:**
   npm init -y

4. **Install Dependencies:**
   npm install sequelize mysql2 express@4.18.2 dotenv nodemon bcrypt bootstrap connect-session-sequelize express-handlebars express-session jest

5. **Set Up .env File:**
   Create a .env file in the root directory and add your database name, MySQL username, and password.

6. **Create Database:**
   Run `source schema.sql` in MySQL shell from the 'db' directory.

7. **Seed Database:**
   Run `npm run seed` from the root directory.

8. **Start the Server:**
   Run `npm start` or `npm run watch` (with nodemon) from the root directory.

9. **Testing:**
   Use Insomnia or similar tools to test the routes.

## Credits

- Week-14 mini project code
- Collaboration with tutor

## Features

- User account creation and authentication
- Public feed for visitors
- User dashboard for creating, editing, and deleting posts
- Commenting on posts

## Usage Information

The app is user-friendly. Visitors can view posts without an account. To interact and create content, users need to log in or create an account. Navigate through the UI to access different features and contribute to the content.

## Contribution Guidelines

Feel free to collaborate! Open an issue, create a feature branch, and propose changes. Wait for approval before merging into the main branch.

**License:** This application is covered under the MIT License.

## Questions

For additional questions, you can reach me through:

- [GitHub](https://github.com/NickUCLA)
- Email: [nheal179@gmail.com](Nick:nheal179@gmail.com)
