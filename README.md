# **Forms with Validation**

## Application Description

_Forms with Validation_ is a dynamic web application created using React, specifically tailored to manage user information with precision and efficiency. Utilizing the cra-template-redux template, it integrates Redux Toolkit for state management, making handling of data seamless and predictable. The application is designed around two primary components: a Form component and a StoredValuesList component.

The Form component is the core of the application, allowing users to enter personal details such as First Name, Last Name, Email, and a Message. The input is validated using the Validator library to ensure correctness and completeness. The StoredValuesList component acts as a display panel for all the submitted entries, neatly organized and stored in the Redux store. Whether it's for user registration or gathering feedback, "Forms with Validation" provides a clean, intuitive interface designed for users at all levels of expertise.

### How to Install/Run the Application Locally

1. **Clone the Repository**
   `git clone https://github.com/andriysavinov/forms.git`

2. **Navigate to the Directory**
   `cd forms`

3. **Install Dependencies**
   Make sure you have Node.js and npm installed in your system. Run the following command to install all the necessary dependencies:
   `npm install`

4. **Start the Local Development Server**
   Run the following command to start the application. By default, it will be available at http://localhost:3000.
   `npm start`

5. **Build for Production (Optional)**
   If you wish to create a production build, you can run:
   `npm run build`

## Features

-   **Form Component**: Input fields for First Name, Last Name, Email, and Message with validation.
-   **StoredValuesList Component**: Component: Displays a list of values (entries) in the Redux store.

## Additional Information

-   If you encounter any issues or need further assistance, please open an issue in the GitHub repository.
-   Feel free to contribute or suggest improvements.
