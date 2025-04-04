HarvestHub - Agricultural E-commerce Website 🌾
HarvestHub is a modern and classy e-commerce platform designed to connect farmers with consumers by offering fresh, organic agricultural products. The website includes features like product browsing, cart management, checkout functionality, user profiles, and order confirmation.

🌟 Core Features
Home Page:  Nature-inspired design with featured products, testimonials, and subscription options.
Shop Page: Product browsing with filters (categories, price range) and sorting options.
Cart Page: Dynamic cart management with item quantity updates and promo code application.
Checkout Page: Shipping address entry, delivery method selection, payment options (Credit Card, UPI, Net Banking, COD), and order summary.
Confirmation Page: Displays order details (random order ID, payment method, total amount including GST) with print receipt functionality.
User Profile: Dashboard for managing orders, subscriptions, addresses, and payment methods.

🛠 Additional Features
Responsive design for all devices.
Dynamic item summary in checkout based on cart contents.
GST calculation (18%) included in the total amount.
Secure checkout process.
Print functionality for order confirmation receipts.

Technologies Used

Frontend
HTML5: Structure of the website.
CSS3: Styling and responsive design.
Includes custom styles for print functionality.
JavaScript (ES6): Interactivity and dynamic content.
LocalStorage used for cart and checkout data persistence.

Backend
Flask : For deploying the database
MongoDB : For Database

External Libraries
Font Awesome: Icons for buttons and navigation.
Google Fonts: Elegant typography using Playfair Display and Poppins.

Steps to Download, Set Up, and Run the HarvestHub Project
Download the Zip File
1.	Navigate to the GitHub repository for HarvestHub
2.	Click on the green "Code" button at the top right of the repository page
3.	Select "Download ZIP" from the dropdown menu
4.	Wait for the zip file to download to your computer
Extract the Zip File
1.	Locate the downloaded zip file in your downloads folder
2.	Right-click on the zip file and select "Extract All..." (Windows) or use your system's extraction tool
3.	Choose a destination folder for the extracted files
4.	Click "Extract" to unzip the repository files
Open the Workspace in VS Code
1.	Open Visual Studio Code
2.	Click on "File" in the menu bar, then select "Open Folder"
3.	Navigate to the extracted HarvestHub folder
4.	Select the folder and click "Open"
5.	VS Code will load the project as a workspace
Install Necessary Packages
1.	Open the integrated terminal in VS Code (View > Terminal or Ctrl+`)
2.	Install the required packages:
Install Dependencies
Run the following command in your terminal:
pip install flask flask-bcrypt flask-cors pymongo python-dotenv
List of Required Packages
1.	Flask – Web framework for Python.
2.	Flask-Bcrypt – For hashing and verifying passwords securely.
3.	Flask-CORS – Handles Cross-Origin Resource Sharing (CORS) for API requests.
4.	pymongo – MongoDB driver for Python to interact with MongoDB Atlas.
5.	python-dotenv – Loads environment variables from a .env file.
Save the file
Run the Application
1.	In the VS Code terminal, run the Flask application:
python app.py
2.	The terminal will display a local URL (typically http://127.0.0.1:5000/)
3.	Open your web browser and navigate to this URL
4.	You should now see the HarvestHub application running locally
The application is now running with a connection to your MongoDB Atlas database.

Usage
Local Setup
Open index.html to view the home page.

Navigate to the shop page (shop.html) to browse products.

Add items to the cart and proceed to checkout (checkout.html).

After completing checkout, view your order confirmation (confirmation.html).

Print Receipt
On the confirmation page:

Click "Print Receipt" to generate a clean receipt of your order details.

File Structure
text
harvesthub/
├── index.html          # Home page
├── shop.html           # Product browsing page
├── cart.html           # Shopping cart page
├── checkout.html       # Checkout page
├── confirmation.html   # Order confirmation page
├── profile.html        # User profile dashboard
├── styles.css          # Global styles
├── shop.css            # Shop-specific styles
├── cart.css            # Cart-specific styles
├── checkout.css        # Checkout-specific styles
├── confirmation.css    # Confirmation-specific styles
├── script.js           # Global JavaScript functionality
├── cart.js             # Cart-specific JavaScript functionality
├── checkout.js         # Checkout-specific JavaScript functionality
├── confirmation.js     # Confirmation-specific JavaScript functionality
└── README.md           # Project documentation


License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For questions or feedback:

Email: shashwat.kumar2023@vitstudent.ac.in
GitHub: Shashwat-kr

Thank you for visiting HarvestHub! 🌾
