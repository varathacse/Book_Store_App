# Book_store_App

**Bookstore Application Description:**

The Bookstore Application is a full-stack web application that allows users to manage a collection of books. It is built using React for the frontend, Spring Boot with JPA for the backend, and MySQL for the database. The application includes features like user authentication using JWT tokens and supports many-to-many bidirectional relationships between books and authors.

# Key Features:

**User Authentication:**

Users are required to log in to access the bookstore functionalities.
JWT tokens are used for secure authentication.

**Book Management:**

Users can view a list of all books in the bookstore.
Each book includes details such as book name, edition, publication date, price, and authors.

**Author Management:**

Authors can be associated with multiple books, and each book can have multiple authors.
Many-to-many bidirectional relationships between books and authors are established.

**CRUD Operations:**

Create: Users can add new books to the bookstore, providing details like book name, edition, publication date, price, and authors.
Read: Users can view the details of each book, including the list of authors associated with the book.
Update: Users can modify the details of existing books, including adding or removing authors.
Delete: Users can delete books from the bookstore.

**Search Functionality:**

Users can search for books based on book names, author names, or any other relevant criteria.
The application provides a user-friendly search interface.

**Secure API Endpoints:**

API endpoints are secured, and only authenticated users with valid JWT tokens can perform CRUD operations.

**Database Integration:**

The application uses MySQL as the database to store information about books, authors, and user credentials.

**Bi-Directional Relationships:**

Books and authors have a bi-directional relationship, allowing easy navigation between them.

# Technology Stack:

**Frontend:**
React.js for building the user interface.

**Backend:**
Spring Boot for creating a RESTful API.
Spring Data JPA for data access and managing relationships.

**Database:**
MySQL for storing book, author, and user data.

**Authentication:**
JSON Web Tokens (JWT) for secure user authentication.
