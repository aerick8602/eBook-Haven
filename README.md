# eBook Haven

eBook Haven is a web application built to manage a collection of books. It allows users to upload, view, edit, and delete books along with their details.

![eBook Haven Screenshot](./client/public/demo/Screenshot%202024-06-15%20210139.png)

## Technologies Used

- **Frontend**: React, React Router DOM, Axios for API calls, React Icons for iconography, Notistack for notifications.
- **Backend**: Node.js with Express for REST API, MongoDB with Mongoose for database management, Multer for file uploads.
- **Styling**: Tailwind CSS for utility-first CSS framework.

## Project Structure

### Backend:

- **`index.js`**: Entry point for Express server.
- **`routes/`**: Contains route handlers for CRUD operations.
- **`models/`**: Defines MongoDB schema using Mongoose.
- **`public/Images/`**: Directory to store uploaded book PDFs.

### Frontend:

- **`src/`**:
  - **`components/`**: Reusable React components.
  - **`pages/`**: Main pages of the application.
  - **`assets/`**: Contains images and other static assets.


## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on 
books.
- ### Create 
    ![Create](./client/public/demo/Screenshot%202024-06-15%20210219.png)
- ### Read
    ![Create](./client/public/demo/Screenshot%202024-06-15%20210338.png)
- ### Update
    ![Edit](./client/public/demo/Screenshot%202024-06-15%20210356.png)
- ### Delete
    ![Create](./client/public/demo/Screenshot%202024-06-15%20210321.png)

- **File Upload**: Upload PDF files for each book.
- **Responsive Interface**: Displays books in a table format with options to view details, download PDFs, edit book details, and delete books.
- **Loading Indicator**: Shows a loading spinner while fetching data from the backend.


## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js & npm: Make sure Node.js and npm are installed on your machine.
- MongoDB: Ensure MongoDB is installed and running either locally or on a cloud service. 

### Clone the repository

1. Clone the repository:

   ```bash
   cd eBook.com/
   ```

2. Install dependencies:
    ```bash
    npm install express mongoose express cors multer
    ```

3. Set up environment variables:
    Create a connection file in the root of the project for backend configuration (e.g., MongoDB connection URL).

4. Start the backend server:
    ```bash
    cd server/
    npm start
    ```

5. Start the frontend development server:
    ```bash
    cd client/
    npm run dev
    ```

# Usage
- Upon starting the application, you will see a list of books displayed in a table format.
- Use the "Add Book" button to navigate to the form for adding new books.
Each book entry provides options to view details, download the associated PDF, edit details, and delete the book.


# Contributing
Contributions are welcome! Please fork the repository and create a pull request with your improvements.😁😁#
