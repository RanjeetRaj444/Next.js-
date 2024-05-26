# Next.js Tutorial for beginer :-

### What is `Next.js` ?

- `Next.js` is a `React` framework that gives you building blocks to create web applications.
- It makes building fullstack `React` applications simple.
- Provides additional features that enable you to build production-ready application.
- These features include routing, optimized rendering, data fetching, bundling, compiling, and more.
- It is a `React` framework that gives you building blocks to create web applications.

### What is `React`?

- It's not feasible to create a fully-featured applications ready for production with `React` alone.
- `React` is a JavaScript library for building user interfaces.

### Why learn `Next.js`?

- `Next.js` simplifies the process of building a web application for production

1. routing
2. API routes
3. rendering
4. Data fetching
5. Styling
6. optimization
7. Dev and prod building system

### 8. Private Folder ?

- A private folder indecates that it is a private implementation detail and should not be considere by the routing system.
- The folder and all its subfolders are excluded from routing,
- Prefix the folder name with an underscore

### 5. Private Folder contd.

- For separating UI logic from routing logic.
- For consistently organizing internal files across a project
- For sorting and grouping files in code editors
- And finally, for avoiding potential naming conflicts with future `Next.js` file conventions.
- If you want to include an underscore in URL segment, you can prefix the folder name with "%5F," which is the URL-encoded from of an underscore.

### 5. Route Groups ?

- Allows us to logically group our routes and project file without affecting the URL path structure
  Let's implement authentication routes - Register - Login - Forgot password

### 6. Layouts ?

- A page is UI that is unique to a route.
- A layout is UI that is shared between multiple pages in the app - HEADER - CONTENT - FOOTER

### 7. How to create layouts?

- You can define a layout by default exporting a `React` component from a layout.js or layout.tsx file.
- That component should accept a children prop that will be populated with a child page during rendering.

### 8. Route Group uses?

- To organize your project in a manner that doesn't affect the URL.
- To selective apply a layout to certain segments while leaving others unchanged.

### 9. Routing Metadata

- Ensuring proper search engine optimization (SEO) is crucial for increasing visibility and attracting users.
- `Next.js` intruduces the Metadata API which allows you to define metadata for each page.
- Metadata ensures accurate and relevent information is displayed when your pages are shared or indexed.

### 10. Configuring Metadata

### 11. Export a static metadata object..

### 12. Export a dynamic generateMetadata function.

metadata rules

- Both layout.tsx amd `page.tsx` files can export metadata. If define in a layout, it applies to all pages in the layout, but if defined in a page, it applies only to that page.

### 11. title Metadata

- The titlw fields primary purpose is to define the document title
- It can be either a string or an object.

### 12. Navigation

### 13. File based routing

- We manually entered the URLs in the brouser's address bar to navigate to the different routes.

### 14. User relay on the UI elements like link to navigate

- Clicking on them or
- Through programmatic navigation after completing an action.

## UI-

### Link Components Navigation

- To enable client-side navigation `Next.js` provides us with the Link components.
- The `<Link>` component is a `React` component that extends the HTML `<a>` element, and it's the primary way to navigate between routes in `Next.js`
- To use it, we need to import it from "next/link"

### 13. Templates.

- Templates are similar to layouts in the they wrap each child layout or page.
- But, with templates, when a user navigates between routes that share a templates, a new instance of the components is mounted, DOM elements are recreated, state is not presderved,and effects are re-synchronized.
- A template can be defined by exporting a default `React` component from a template.js or template.tsx file
- Similar to layouts, templetes palso should accept a childreren props which will render the nested segment in the route.

### 14. Special Files :-

- `page.tsx`
- `layout.tsx`
- `template.tsx`
- `not-found.tsx`
- `loading.tsx` :- This file allows us to create loading statrs that are displayed to us users while a specifuc route segment content is loading.The loading state appears immediately upon navigation, giving users the assurance that the application is responsive and actively loading content.

  - `loading.tsx` benefits

  - You can display the loading state as soon as user navigate toi new route. The immediate feedback reasssures users that their action has been acknowledged, reduces perceived loaing times, and makes the application feel more responsive.
  - `Next.js` allows the creation of shared layouts that remain interactive while new route segments are loading. Users can continue inracting whit certain parts of the application, such as a navigaton menue or sidebar even if the main content is still being fetched.

- error.tsx

  - Automatically wrap a route segment and its nested children in a `React` Erroe Boundry.
  - Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity.
  - Issolate errors to affected segments while keeping the rest of the application functional.
  - Add functionality to attemp to recover from an error without a full page reload.

## Handling Errors in Nested routes

- Error bubble up to the closest parent error boundry.
- An error.tsx file will cater to errors for all its nested child segments.
- By positioning error.tsx files at different levels in the nested folders of a route, you can achieve a more granular leve; of error handling.

## Handling Errors in Layouts

- An error.tsx file will handle errors for all its nested child segments.
- The error boundry does not catch errors thrown here because its nested inside the layouts component.

14. Parallel Routes contd.

    - Parallel routes in `Next.js` are using a feature knoen as slots
    - Slots help structure our content in a modular fashion.
    - to define a slot, we use the `@folder` naming convention.
    - Each slot is then passed as a prop to its corresponding `layout.tsx` file.

    - Parallel Routes Benefits - A clear benefit of Parallel routes is their abilitiy to aplit a single layout into various slots, making the code more manageable. - Independent route handling. - Sub-navigation

## Independent route handling

- Each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error states.
- This granular control is particularly benificial in scenarios where different sections of the page load at varying speeds or encounter unique errors.

- Sub-navigation
  - Each slot of your dashboard can essentially function as a mini-application, complete with its own navigation and state management.
  - This is especially useful in a complex application such as our dashboard where different section serve distinct purposes.

### 15. Unmatched Routes.

- Navigation from the UI
- In the case of navigation within the UI, Next,js retains the previously active state of a slot regardless of changes in the URL.
- Page reload.
- `Next.js` immediately for a default.tsx file within each unmatched slot.
- The presence of this file is critical, as it provides the default content thet `Next.js` will render in the interface.
- If this default.tsx file is missing in any of the unmatched slots for the current route `Next.js` will render a 404 error.

### 16. default.tsx

- The `default.txs` file in the `Next.js` serve as a fallback to render content whenthe framwork cannot retrieve a slot's active the current URL.
- You have completed freedom to defin the UI for unmatched routes: you can either mirror the content found in `page.tsx` or carft an entirely coustom view.

### 17. Intercepting Routes:-

- Intercepting routes allow ypou to intercept or stop the default routing behaviour to present an alternate view or component when navigation through the UI, while still preserving the intentded route for scenarios like page reloads.
- This can be useful if you want to show a route while keeping the context of the current page.

### 18. Intercepting Routes convention

- `(.)` to match segments on the same level.
- `(..)` to match segments on level above
- `(..)(..)` to match segments two levels above.`

```html
Note:- (..)(..) Having some issue to routing It will be fixed soon.
```

- `(...)` to match segments form the root app directory.

### 19. Route Handlers

- We can also create request handlers for our routes using a feature called route handlers.
- Unlike page routes, which respond with HTML content, route handlers allow you to create RESTful endpoints, giving you full control over the response.
- There is no overhead of having to create and confiure a separate server.
- Route handlers are also greate for making external API requests.
- Route handlers run server-side, enduring that sensetive information like private keys remains secure and never gets shipped to the browser.
- Route Handlers are the equivalent of API routes in Page router.

  - Headers in Route Handlers

    - HTTp headers represent the metadata associated with an API request and response.

    1.  Request Headers

    - These are sent by the client, sech as a web browser, to the server. They contain essential information about the request, which help the server understand and process it correctly.
      For Example:-

    ```
    `User-Agent` which identifies the browser and operating system to the server.
    `Accept` which specifies the type of content ( text, video, image format ) that the client can accept.
    `Authorization` header used by the client to authenticate itself to the server.

    ```

    2. Response Headers

    - These are sent back from the server to the client. They provide information about the server and the data being sent in the response.

    For Example :-

    ```
    `Content-Type` header wiich indicates the media type of the response. It tells the client what data type of the returned cointent is, such as text/html for HTML documents, application/json for JSON data, etc..

    ```
  
  - Cookies in Route Handlers.
    - Cookies are small pieces of data that a server sends to a user's web browser.
    - The browser may store the cookies and send it back to the same server with later requests.
    - Cookies are mainly used for three purpose.
      - Session management like login and shopping carts
      - Personalization like user preferences and themes
      - Tracking like recording and analyzing user bhaviour.


