# KBmodal
JavaScript library for displaying popup modals including images, galleries, youtube iframes or custom HTML content. Fully responsive.
## Usage
1. First add jQuery library to your document (tested on jquery-3.3.1).
2. Then add JS and CSS/SCSS files to your project (from inc repo catalog)
### Creating image modal:
```
<div class="KBmodal" data-content-url="src_to_full_size_image">
    //content (img or anything else)
    <img src="src_to_thumbnail_image">
</div>
```
### Creating gallery modal:
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

