function initMap() {
    // Create a map object and specify the DOM element for display.
    let map = new google.maps.Map(document.querySelector('.google-map'), {
        center: {lat: 48.742827, lng: 37.587973},
        scrollwheel: false,
        zoom: 18
    });
}
/*function initMap() {*/
    // Create a map object and specify the DOM element for display.

/*document.addEventListener('DOMContentLoaded', () => {
    let map = new google.maps.Map(document.querySelector('.google-map'), {
        center: {lat: 48.742827, lng: 37.587973},
        scrollwheel: false,
        zoom: 16
    });
});*/

