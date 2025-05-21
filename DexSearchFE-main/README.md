# GamewShop FrontEnd

## Capability
 - authentation
    - login - user login route
    - sign up 0 user register route
- Show All inventory
    - Show all Route
- Show One Inventory
    - Show one route
- Add Games
- Edit Games
- Delete Games

## Data model for Inventory
`` {
    title: "Terraforming Mars",
    category: "Board",
    price: 68.99,
    desc: "Catan like boardgame where you and your company are in charge of making Mars livable.",
    qty: 5,
    img: "https://example.com/images/terraforming-mars.jpg",
  }, ``

## Pages
- Landing Page/Homepage - show all route -  path="/"
- Auth -                        path="/auth"
    - login form
    - register form
- user Dashboard/Cart Page -    path="/dashboard"
- Show One page -               path="product/:id"
- Create Inventory Form -       path="/create"
- 404 Not found - path="*"




- About**
- Checkout**

**means stretch/if we have time


## Steps to start building a FrontEnd
1. WireFrame
2. Containerzation
3. create your vite
4. folder structure
    - components
    - utilities
    - pages
5. setup react-router-dom - main.jsx
6. create very basic react page components for each page i want to create
7. create my routing for the pages in my app.jsx
8. create a super simple nav to navigate