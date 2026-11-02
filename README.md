# WEDE5020POE

# The Afro Crown Beauty Official Website Project

## Student Information
* **Student Name:** Nkahosheko Kopa
* **Student ID:** ST10507079
* **Module:** Web Development (WEDE5020)

## Project Overview
This website is designed and developed for **The Afro Crown Beauty**, an afro specialist hair salon and product retail brand established in 2024. The platform captures a rich African aesthetic while delivering modern functionality for client inquiries, automated booking debriefs, and product browsing.

## Website Goals and Objectives
* Create a high-converting digital storefront for afro hair products and salon services.
* Promote natural hair health with the brand ethos: *"Royalty rooted in crowning the coils"*.
* Facilitate client engagement via structured inquiry forms, automated booking debriefs, and an interactive e-commerce cart.

## Key Features
* 7 Semantic HTML5 web pages (`index`, `about`, `services`, `shop`, `bookings`, `contact`, `enquiries`).
* Clean visual layout with an African-inspired color palette and responsive dark theme styling.
* Responsive navigation bar with functional mobile toggle (hamburger menu).
* Interactive Client-Side Features:
  * Universal image lightbox modal across all pages.
  * Automated URL-parameter pre-selection from Services to Bookings (`?treatment=...`).
  * Interactive e-commerce cart with delivery checkout flow on `shop.html`.
  * Automated booking confirmation debrief box on `bookings.html`.
  * Dynamic copyright year footer script.
* Multi-location contact details with embedded responsive Google Maps and direct calling links (`tel:`).

## Sitemap
* Home (`index.html`)
* About Us (`about.html`)
* Services & Pricing (`services.html`)
* Shop Products (`shop.html`)
* Bookings (`bookings.html`)
* Contact Us (`contact.html`)
* Enquiries (`enquiries.html`)

## Changelog

### [Part 1] - Initial Release
* Created core folder and file structure (`css/`, `js/`, `images/`).
* Implemented basic semantic HTML markup for all 7 core pages.
* Added navigation bar links across all pages.
* Drafted initial project README documentation.

### [Part 2] - Styling, Branding & Responsive Web Design
* **Responsive Layout & Media Queries (`@media`):** Implemented global media queries targeting viewports `768px` and below to ensure content stacks fluidly on mobile devices.
* **Fluid Container Sizing:** Applied relative sizing (`vw`, `%`, `rem`) to prevent unwanted horizontal scrolling across dynamic screen sizes.
* **Centered Grid & Desktop Styling Fixes:** Standardized alignment across product cards, hero sections, and image wrappers (`margin: 0 auto`, `align-items: center`).
* **Media & Content Optimization:** Enforced `max-width: 100%` on images and made embedded Google Maps `iframe` elements fully fluid (`width: 100%`).
* **Text Wrapping & Typography:** Fixed long text string overflows using `overflow-wrap: break-word` and responsive text scaling via CSS `clamp()`.

### [Part 3] - Interactivity, Form Validation & Final Polish
* **Full-Width Navigation & Mobile Hamburger Menu:** Redesigned `.navbar-full` with gold dashed accent borders and fixed the mobile toggle (`.nav-toggle` and `.nav-active`) to expand and collapse cleanly without viewport overflow.
* **Centered Hero & Grid Alignment:** Centered the main hero shot (`Miniheroshot.jpg`) and aligned featured highlight cards side-by-side inside `.highlights-grid` with uniform image dimensions.
* **Services Grid Layout:** Structured service items into a balanced two-row grid (*Row 1:* Hydration & Locs; *Row 2:* Braids & Silk Press) with uniform image sizing (`240px` height) and responsive mobile stacking.
* **Shop Grid & E-Commerce Cart Logic:** Arranged product items side-by-side inside `.shop-products-grid` with uniform `250px` height images. Integrated a JavaScript cart system allowing users to add items, view totals, enter delivery details, select payment options, and view an instant order debrief summary.
* **Automated Booking Debrief & Form Validation:** Fixed form element mapping (`client-name`, `client-phone`, `service-select`, `booking-date`) so valid submissions render an immediate, styled appointment summary card without reloading the page.
* **Service-to-Booking Link Transfer:** Configured service cards to pass treatment parameters (`?treatment=...`) via URL, pre-selecting the corresponding option on `bookings.html`.
* **Universal Lightbox & Dynamic Footer:** Implemented a site-wide click-to-zoom image modal script and automated the footer copyright year with `new Date().getFullYear()`.

## Built With
* **HTML5** – Semantic structure (`header`, `nav`, `main`, `section`, `article`, `footer`).
* **CSS3** – Flexbox layouts, CSS Grid, media queries, and Google Web Fonts (*Great Vibes*, *Poppins*).
* **JavaScript (ES6)** – DOM manipulation, Regex validation, URL search params (`URLSearchParams`), and interactive cart logic.
* **VS Code Live Server** – Local testing and mobile network debugging.

## How to Test Responsiveness
1. **Chrome Developer Tools:** Open the site, press `F12` (or `Cmd + Option + I`), and toggle the Device Toolbar (`Ctrl + Shift + M`).
2. **Local Network / Live Server:** Run Live Server in VS Code and connect your mobile device using your computer's local IP address (`http://<YOUR-IP>:5500`).

## References
* Unsplash. 2026. *Free High-Resolution African Hair & Beauty Photos*. Available at: <https://unsplash.com> [Accessed 12 August 2026].
* W3Schools. 2026. *HTML5 Semantic Elements Reference*. Available at: <https://www.w3schools.com/html/> [Accessed 12 August 2026].
