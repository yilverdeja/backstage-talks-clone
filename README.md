[![Netlify Status](https://api.netlify.com/api/v1/badges/7b9680c7-fef6-41a7-ac90-f3b8dd6faf3b/deploy-status)](https://app.netlify.com/sites/backstage-talks-clone/deploys)

# Backstage Talks Clone

A [clone](https://backstage-talks-clone.netlify.app) of the [backstage talks](https://backstagetalks.com/) website

## Why?

To practice my frontend skills using a bottom-up approach by first adding the basic styles, then designing sub-components, block-level components then finishing with the whole page.

In addition, I wanted to create this page as a layout to my pottery website.

<!-- TODO: ADD LINK to pottery website -->

## Interactions

On desktop, swipe up/down or use the keyboard up and down keys to move between issues. On the mobile version, just swipe up and down to move to the different issues.

<!-- TODO: Add the rest of the content below when the site is done  -->

## How does it work?

Tell us how it works...

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
