# alx-listing-app
## Project Goal
- Making a clone of the airbnb listing page
## Project structure
* **`components/`**: This directory houses reusable UI components that are used throughout the application. Examples include `Navbar`, `ListingCard`, `Button`, `Input`, etc. Organizing components here promotes modularity and makes it easier to manage the user interface.
* **`interfaces/`**: This directory is dedicated to defining TypeScript interfaces. These interfaces are crucial for ensuring type safety across the application, especially when dealing with data structures like listing properties, user information, or API responses. They help enforce consistency and reduce potential errors.
* **`constants/`**: This directory stores constant values used globally within the application. This might include API endpoints, configuration settings, magic numbers, or predefined lists (e.g., categories, amenities). Centralizing these values makes them easy to manage and modify.
* **`public/assets/`**: This directory is used to store static assets such as images, fonts, and other media files that are served directly by Next.js. For instance, images for listing thumbnails or application logos would typically reside here.
## How to Run Locally

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/hafsap-aris/alx-listing-app]
    cd alx-listing-app
    ```
  

2.  **Install dependencies:**
    Navigate to the project's root directory and install the necessary npm packages:
    ```bash
    npm install
    ```

3.  **Run the development server:**
    Once the dependencies are installed, you can start the development server:
    ```bash
    npm run dev
    ```

    The application should now be accessible in your web browser at `http://localhost:3000` (or whatever port Next.js assigns).
