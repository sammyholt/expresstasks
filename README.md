# expresstasks

This is a Node/Express app for managing simple tasks.

### Live Demo: https://expresstasks.sammyholt.com/
Demo is hosted with a sandbox heroku dyno, so it may take some time to spin up on the first load.

### How to Run
1. Install required dependencies with `npm install`.
2. Ensure MongoDB is installed on your local machine.
3. Run the project with `npm start`.
4. Visit `localhost:5000` in your web browser.

## Features
- Add/Edit/Delete Tasks
- Tasks unique to each user account
- Only add and edit tasks for user's own account
- Drag and drop tasks to sort them 
- Sorting saves to database immediately


## What I learned

- Creating an application using Node and Express
- Using MongoDB to store and load data
- User authentication using passport and bcrypt
- Using environment variables to store sensitive configuration settings
- Live deployment to a cloud service
