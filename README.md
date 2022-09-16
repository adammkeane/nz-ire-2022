python3 -m http.server
# Ireland's 2022 Rugby Tour of New Zealand

This website aims to provide a convenient place to find all the relevant info about Irelands's 2022 rugby tour of New Zealand. I found that I was searching for a few different wesbites to find the information about the tour, so this website aims to bring all the sites I wanted into one place. Hopefully, others will also find the sites I looked for of interest to them.


(techsini mockup generator)

## Features


### Site wide
* Navigation Menu
    * Contains links to the Home, the three Test Match and Sign Up pages, and will be responsive on all devices.
    * This will allow users to easily navigate between the pages within the site on any size device. 
    * Uses an expandable and contractable hamburger menu design to allow it to be hidden when not needed.

* Footer
    * This will contain icons as links to social media websites that will open in new tabs. Icons will be accessible to the visually impaired who may be using a screen reader, by the use of aria labels.

* Favicon
    * A site wide favicon will be implemented with a custom emblem.
    * This will provide an image in the the tabs header to allow the user to easily identify the website if they have multiple tabs open.

### Landing Page
* Introductory text and images
    * Provides an overview of what the site aims to provide.
    * Uses the logos of the two teams in question.
    * Provides a link to wikipedia for more information about the tour.

* The three test images/links
    * Provides hopefully eye catching images to direct the user to the three main pages of the site (information about each of the test matches)

* Sign up explainer
    * Provides reasons why a user may want to sign up and provides them with links to do so.

### The Three Test Match Pages
* Introductory info and embdeded Youtube video.
    * Provides the basic game informations, such as date and location.
    * Provides embeded Youtube video that won't autoplay when the page opens. The user can choose when and if they want to watch.

* City information
    * Provides some hopefully interesting nuggets about the city the match was played in.
    * Provides a link to the city's wikipedia page for further information.

* Embedded Google map
    * Provides a map view of the stadium where the match was played.
    * User may explore the surrounding area on the map if they like.

### Sign Up Page
* Sign up form
    * Provides a hopefully simple form which user can fill out if they would like to kept up to date with our other projects.
    * The form will require a name and an email address before submitting. 
    * User can optionally select to specific if they are interested in any particular sports that will likely create projects for in the future.

### Features Left to Implement

* A page where users can play an interactive rugby game on the site.

## Technologies

* HTML
    * The structure of the Website was developed using HTML as the main language.
* CSS
    * The Website was styled using custom CSS in an external file.
* Javascript
    * The hamburger navigation bar was built with the help of Javascript code found online.
* GitHub
    * Source code is hosted on GitHub and delpoyed using Git Pages.
* Git 
    * Used to commit and push code during the development opf the Website
* Font Awesome
    * Icons obtained from https://fontawesome.com/ were used as the Social media links in the footer section. 
* TinypNG
    * https://tinypng.com/ was used to reduce the size of the images used throughout the website
* Favicon.io
    * favicon files were created at https://favicon.io/

## Testing 

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Chrome, Edge, Firefox and Opera browsers.

Steps to test:

1. Open browser and navigate to [Ireland's 2022 Rugby Tour of New Zealand](https://adammkeane.github.io/nz-ire-2022/)
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched.
No horizontal scroll is present.
No elements overlap.

Actual:

Website behaved as expected.

Website was also opened on the following devices and no responsive issues were seen:

- Google Pixel 3a
- Dell XPS 15
- iPhone Mini


### Accessibility

[Wave Accessibility](https://wave.webaim.org/) tool was used throughout development and for final testing of the deployed website to check for any aid accessibility testing.

Testing was focused to ensure the following criteria were met:

- All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs
- Color contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
- All not textual content had alternative text or titles so descriptions are read out to screen readers
- HTML page lang attribute has been set
- Aria properties have been implemented correctly
- WCAG 2.1 Coding best practices being followed

### Functional Testing

**Navigation Links**
Testing was performed to ensure all navigation links on the respective pages, navigated to the correct pages as per design. This was done by clicking on the navigation links on each page.

| Navigation Link | Page to Load    |
| --------------- | --------------- |
| Home                  | index.html      |
| First Test - Auckland | test-one.html |
| Second Test - Dunedin | test-two.html    |
| Third Test - Wellington | test-thre.html    |
| Sign Up | sign-up.html    |

Links on all pages navigated to the correct pages as exptected.

**Footer Social Media Icons / Links**
Testing was performed on the Font Awesome Social Media icons in the footer to ensure that each one opened in a new tab and that each one had a hover affect of the orange branding color.

Each item opened a new tab when clicked as expected and correct hover color was present.

### Validator Testing 

- HTML
  - One error was returned when passing through the official [W3C validator](https://validator.w3.org)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)