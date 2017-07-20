function initMap() {
    // Create a map object and specify the DOM element for display.
    let urulu = {lat: 48.742827, lng: 37.587973};
    let map = new google.maps.Map(document.querySelector('.google-map'), {
        center: {lat: 48.742827, lng: 37.587973},
        scrollwheel: false,
        zoom: 15
    });
    let marker = new google.maps.Marker({
        position: urulu,
        map: map,
        icon: 'assets/flashxsmall.png'
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

