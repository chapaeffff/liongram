'use strict';

const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
    // Здесь будет находиться код 
    const detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.src = imageUrl;

    const DetailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    DetailTitle.textContent = titleText;
} 

function imageFromThumb(thumbnail){
    return thumbnail.getAttribute('data-image-url');    
}

function titleFromThumb(thumbnail){
    return thumbnail.getAttribute('data-image-title')
}

function setDetailsFromThumb(thumbnail){
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb){
    thumb.addEventListener('click', function(event){
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}

function getThumbnailsArray(){
    let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    let thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents(){
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}


initializeEvents();