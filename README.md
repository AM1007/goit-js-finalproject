# goit-js-finalproject

### Task 1. Image gallery

Create a gallery with the ability to click on its elements and view a full-sized image in a modal window.
[Check out the gallery's demo video in action](https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4).

Execute this task in files `01-gallery.html` and `01-gallery.js.` Break it down into several subtasks:

1. Create and render the markup based on the data array `galleryItems` and the provided gallery item template.
2. Implement event delegation on the `ul.gallery` to obtain the `URL` of the full-sized image.
3. Link the script and styles of the modal window library using [basicLightbox](https://basiclightbox.electerious.com/). Utilize the [jsdelivr CDN](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist) CDN service and add links to the minified (.min) library files to the project.
4. The modal window should open when clicking on a gallery element. To achieve this, please refer to the [documentation](https://github.com/electerious/basicLightbox#readme) and [examples](https://basiclightbox.electerious.com/) for guidance.
5. Replace the `src` attribute value of the `<img>` element in the modal window before opening it. Utilize the pre-made markup of the modal window with an image from the [basicLightbox](https://basiclightbox.electerious.com/) library examples.

---

#### Gallery element markup

The link to the original image should be stored in the data attribute named `source` on the `<img>` element and should be specified in the `href` attribute of the link. Do not add any other HTML tags or CSS classes except those provided in this template.

```HTML
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>
```

Take note that the image is wrapped with a link, so by default, a user will be redirected to another page when clicked. Disable this behavior by default.

#### Keyboard closing

Add modal window closing upon pressing the Escape key. Ensure that keyboard listening is active only while the modal window is open. The [basicLightbox](https://basiclightbox.electerious.com/) library includes a method for programmatically closing the modal window.

---

### Task 2. The `SimpleLightbox` library

Create the same gallery as in the first task, but use the [SimpleLightbox](https://simplelightbox.com/) library, which will handle image clicks, opening and closing the modal window, and navigating through images using the keyboard.

https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4

You'll need to make some slight changes to the gallery card markup, using this template.

```html
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="small-image.jpg" alt="Image description" />
  </a>
</li>
```

Execute this task in files `02-lightbox.html` and `02-lightbox.js.` Break it down into several subtasks:

1. Create and render the markup based on the data array `galleryItems` and the provided gallery item template. Utilize the existing code from the first task.
2. Connect the library's styles and script using the CDN service from cdnjs. You need to add links to two files: `simple-lightbox.min.js` and `simple-lightbox.min.css`.
3. Initialize the library after creating and adding gallery elements to the `ul.gallery`. To do this, please refer to the [SimpleLightbox](https://simplelightbox.com/) documentation, especially the 'Usage' and 'Markup' sections.
4. Take a look at the 'Options' section in the documentation and add captions to the images based on the alt attribute. Let the caption appear at the bottom and delay its display by 250 milliseconds after opening the image.
