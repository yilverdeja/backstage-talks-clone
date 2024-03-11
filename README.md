[![Netlify Status](https://api.netlify.com/api/v1/badges/7b9680c7-fef6-41a7-ac90-f3b8dd6faf3b/deploy-status)](https://app.netlify.com/sites/backstage-talks-clone/deploys)

<img src="https://github.com/yilverdeja/backstage-talks-clone/assets/29952939/ec50bbea-7902-4ee8-93f3-98dff66a5d9c" alt="drawing" height="300"/>
<img src="https://github.com/yilverdeja/backstage-talks-clone/assets/29952939/e63cca85-ef37-49a3-ad27-445829f94979" alt="drawing" height="300"/>
<img src="https://github.com/yilverdeja/backstage-talks-clone/assets/29952939/2c7e2506-a8c7-4515-a4d3-68cc9911d290" alt="drawing" height="300"/>

# Backstage Talks Clone

A [clone](https://backstage-talks-clone.netlify.app) of the [backstage talks](https://backstagetalks.com/) website

## Why?

To practice my frontend skills using a bottom-up approach by first adding the basic styles, then designing sub-components, block-level components then finishing with the whole page.

In addition, I wanted to create this page as a layout to my pottery website.

<!-- TODO: ADD LINK to pottery website -->

## Interactions

On desktop, swipe up/down or use the keyboard up and down keys to move between issues. On the mobile version, just swipe up and down to move to the different issues.

## New Learnings
### Development on Desktop vs Mobile
Using Chrome dev tools to check if the site is responsive is nice, however it does not emulate touch events from a mobile. In order to test the mobile version, we first need to make sure both the computer and phone are on the same network, then get the local IP address of the network.

On the desktop, the live server will be deployed at a url like the following: `http://127.0.0.1:5501/index.html`. If we break it down into parts, this is how the url is structured `http://[local_ip_address]:[port]/[html_file]`.

Replace the local host ip address in the browser (either `localhost` or `127.0.0.1`) with your networks ip address, and enter the full url into your mobile browser!

Here's an [article](https://medium.com/@pavankapoor31/how-to-use-vs-code-live-server-local-host-on-mobile-phone-8b38a62117d2) explaining it a bit more.

### Mobile Browser Dev Tools
Developing on the mobile can be hard when you don't have access to the browser dev tools we have on the desktop. [Eruda](https://github.com/liriliri/eruda) makes this process easier during development.

It's as easy as just adding the following script to the page, and voila! Dev tools on mobile browsers!
```html
<script src="//cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>
```

### Working with Template Literals
We can inject HTML elements into the DOM using template literals in javascript. Here is an [article](https://medium.com/@tforward/get-html-to-the-dom-fast-with-js-template-literals-insertadjacenthtml-24b8aa4e8807) describing it. 

However, it's probably best for **future iterations** to structure the files following an [MVC pattern](https://www.freecodecamp.org/news/the-model-view-controller-pattern-mvc-architecture-and-frameworks-explained/).

### Loading images dynamically in Javascript
Within the template literals, I initially tried loading the pictures dynamically depending on the issue id, but that did not work. During build time, the bundler doesn't recognize that the string literal for the image urls are for image urls so it cannot import it properly. Hence we need to import it into the javascript file either by using `import` or  `require` statements.

## Todo
In order to improve this website, the following should be looked into:
* urls to the correct link items
* use the MVC pattern to organize the javascript files (and make the file naming more meaninful)
* refactor, and remove redundencies and duplicated code (slipped 🍌 in the end and css and js files are quite messy)
