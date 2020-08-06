'use strict';

const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const DETAIL_FRAME_SELECTOR = '[data-image-role = "frame"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
const TINY_EFFECT_CLASS = 'is-tyny';
const ESC_KEY = 27;

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
        showDetails();
    });
}

function getThumbnailsArray(){
    let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    let thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails(){
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails(){
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function(){
        frame.classList.remove(TINY_EFFECT_CLASS)
    }, 50);
    
}

function addKeyPressHandler(){
    document.body.addEventListener('keyup', function(event){
        event.preventDefault();
        console.log(event.keyCode);
        if (event.keyCode === ESC_KEY){
            hideDetails();
        }
    })
}

function initializeEvents(){
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}


initializeEvents();