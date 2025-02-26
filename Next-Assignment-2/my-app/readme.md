# Pages and Routing (With Hooks) - Next js Assignmnet-2
## App Structure
## ![App structure](outputs/structure.PNG)

## 1.Create a json file for products page and About page. (This will work as a database for the task)
## [about.json](data/about.json) , [products.json](data/products.json)

## 2.Create a common Header and Footer components and add these to all the pages. (including error pages)
## [Header.js](components/Header.js), [footer.js](components/Footer.js) , [app file](pages/_app.js)
## ![Home page](outputs/home.png)

## 3.Create a Static Route for “contact Us”, “About” and “products list” page (Multiple products will show here as card).
## [About File](pages/about/index.js) , [Contact file](pages/contact.js),[Products page](pages/products/index.js)
## ![About page](outputs/about.PNG) 
## ![contact page](outputs/contact.PNG)
## ![products page](outputs/products.PNG)

## 4.Create a Dynamic Route for single product detail page and fetch the product details from the json file for specific product Id.
## [product dynamic route file](pages/products/[id].js)
## ![product detail page](outputs/product-detail.PNG)

## 5.Under “About” page, when user visit “/about” then page will show the information about the company and when user visit “/about/1122” then user can see information about that employee ID which is already present in the json file. (UI not required. You can use plain heading and paragraph tags without CSS)
## [About dynamic page file](pages/about/[id].js)
## ![employee detail page](outputs/employee-detail.PNG)

## 6.Create a 404 page. User will redirect to homepage after 5 seconds. (Also show the redirect timer on 404 page).
## [404.js](pages/404.js)
## ![error page](outputs/error.PNG)