# Very basic PWA
This is my experiment with making a PWA from scratch - it's really just at the first stages.

It's a simple form which allows users to choose a big cat gif, and stores information about their previous choices (cat type and the date object - which I haven't yet translated into anything readable).

To get it running, I used the web server for chrome app (just set it up to run with the project folder) https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en.

## Features so far
I've created a basic 'app shell' - so the page is loaded first without data. This is basic HTML/CSS/JS.

The site can store data when the page is reloaded, using the LocalForage library - which allows asynchronous storage (unlike localStorage) while having the browser compatibility of indexedDB.

Try reloading the page and seeing your past options!

I've set up a service worker and some data caching - but I need more research to allow it to run background syncs.

## Features not yet developed
* data shared with server
* offline access
* background syncs with server
* push notifications
* web app manifest - allows home screen installation

## Resources
* Udacity course https://classroom.udacity.com/courses/ud811
* Google's PWA course (although the Udacity one above seems like a more up to date version) https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/
* LocalForage https://localforage.github.io/localForage/
* Info on IndexedDB if you're interested in using it: https://developers.google.com/web/ilt/pwa/working-with-indexeddb-slides (the npm module is https://www.npmjs.com/package/idb )
