<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- ABOUT THE PROJECT -->
## About The Project

### Project Book E-Commerce Website
This project represents an e-commerce website focused on books. It operates by utilizing the Google Book API to fetch data. The key features of the project include:

### Home Page
On the home page, a list of available books is displayed. Each book is presented with its name, product rating, and other essential details.

### Book Details
You can explore detailed content for each book. This page includes general information about the book, its author, publisher, and more.

### Search
Using the search bar at the top, you can easily find the book you are looking for.

### Cart Operations
Add to Cart: You can add your favorite books to the cart.
Cart Contents: View your cart to see a list of the books you've added.
Edit Product Quantity: Adjust the quantity of each item in the cart.
Total Price: See the total price of the books in your cart.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* pnpm
  ```sh
  npm install -g pnpm
  ```
### Installation


1. Get your key after activating the API by following the instructions  [https://developers.google.com/books/docs/v1/using?hl=tr](https://developers.google.com/books/docs/v1/using?hl=tr)
2. Clone the repo
   ```sh
   git clone https://github.com/elacays/codexist_case.git
   ```
3. Install NPM packages
   ```sh
   pnpm install
   ```
4. Create .env file in root directory
5. Enter your API and required variables in `.env`
   ```sh
    NEXT_PUBLIC_API_KEY='Enter your key'
    NEXT_PUBLIC_API=https://www.googleapis.com/books/v1/volumes?
    NEXT_PUBLIC_SINGLE_BOOK_API=https://www.googleapis.com/books/v1/volumes/    
   ```
6. Run the project
    ```sh
   pnpm install
   ```


<!-- CONTACT -->
## Contact

Uğur Hikmet Köse -  contact@ugurkose.dev

Project Link: [https://github.com/elacays/codexist_case](https://github.com/elacays/codexist_case)


