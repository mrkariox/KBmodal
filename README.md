# KBmodal
JavaScript library for displaying popup modals including images, galleries, youtube iframes or custom HTML content. Fully responsive.
## Demo
inside docs catalog in repo
https://mrkariox.github.io/KBmodal/
## Usage
1. First add jQuery library to your document (tested on jquery-3.3.1).
2. Include font awesome library for gallery icons
    (<link rel='stylesheet' id='fontawesome-css'  href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?ver=4.9.8' type='text/css' media='all' />)
2. Then add JS and CSS/SCSS files to your project (from inc repo catalog)
### Creating image modal:
```
<div class="KBmodal" data-content-url="src_to_full_size_image">
    //content (img or anything else)
    <img src="src_to_thumbnail_image">
</div>
```
### Creating gallery modal:
User can use arrows (left, right) to navigate through gallery and esc key to leave gallery
```
<div class="KBmodal" data-content-url="src_to_full_size_image" data-content-type="gallery" data-content-gallery="unique_for_this_gallery_id_same_for_all_images">
    //content (img or anything else)
    <img src="src_to_thumbnail_image">
</div>
<div class="KBmodal" data-content-url="src_to_full_size_image" data-content-type="gallery" data-content-gallery="unique_for_this_gallery_id_same_for_all_images">
    //content (img or anything else)
    <img src="src_to_thumbnail_image">
</div>
<div class="KBmodal" data-content-url="src_to_full_size_image" data-content-type="gallery" data-content-gallery="unique_for_this_gallery_id_same_for_all_images">
    //content (img or anything else)
    <img src="src_to_thumbnail_image">
</div>
```
### Creating Youtube modal:
```
<div class="KBmodal" data-content-url="https://youtu.be/EJQaKf3txVg" data-content-type="yt">
    //content (img or anything else)
    <img src="src_to_thumbnail_image">
</div>
```
### Creating custom HTML modal:
```
<div class="KBmodal" data-content-url="insert_your_html_code_here" data-content-type="html">
    //content (img or anything else)
</div>
```
### Using modal through JS:
```
var content = '<a href="/link"><img src="url_to_img"></a>';
generateKBmodal(content, 'html', undefined, undefined);
```
### Using modal through JS (modal not closeable):
```
var content = '<a href="/link"><img src="url_to_img"></a>';
generateKBmodal(content, 'html', undefined, undefined, "1");
```
And to close modal use:
```
KBcloseAction(undefined, true);
```

