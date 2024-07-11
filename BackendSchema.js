// backend-structure.js

const backendStructure = `
// Simplified Backend Structure for Interior Design Platform

1. **API Endpoints**
   - /api/users: Handles user operations.
     - POST /register: Registers new users.
     - POST /login: Authenticates users.
     - GET /user/profile: Retrieves user profiles.
     - PUT /user/profile: Updates user profiles.
   - /api/products: Manages product listings.
     - GET /: Retrieves all products.
     - POST /: Adds a new product (restricted to designers and suppliers).
     - GET /:productId: Provides details for a specific product.
   - /api/designs: Manages design submissions.
     - POST /: Submits a new design (designers only).
     - GET /:designId: Retrieves details of a specific design.

2. **Database Schema (MongoDB Collections)**
   - Users
     - id
     - username
     - email
     - password (hashed)
     - userType (e.g., client, designer, supplier)
   - Products
     - id
     - name
     - description
     - price
     - creatorId
   - Designs
     - id
     - title
     - createdBy
     - description
     - productsUsed (array of product IDs)

3. **Authentication**
   - Utilizes JWT for secure user authentication.
   - Middleware ensures that routes are accessed only by appropriate user roles.

4. **Server Configuration (Express.js)**
   - Basic setup with necessary middleware for body parsing, CORS, and error handling.
   - Uses mongoose for database operations, connecting to MongoDB Atlas.
`;

//console.log(backendStructure);
