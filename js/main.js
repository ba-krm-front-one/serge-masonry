(() => {
    function useIsotope(event) {
let masonry = new Masonry( '.grid', {
    columnWidth: 400,
    itemSelector: '.grid-item',
    percentSelector: true,
});

let applyFilterFromLink = (linkObject) => {
    let filterValue = linkObject.dataset.filter;
    // let filterValue = event.target.dataset.filter;
    // use matching filter function
    isotopeGrid.arrange({ filter: filterValue });
};

let filterGrid = function( event ) {
    event.preventDefault();

    applyFilterFromLink(this);

    let activeBtn = document.querySelector('.active');
    if (activeBtn) {
        activeBtn.classList.remove('active');
    }
    this.classList.add('active');
};

document.querySelectorAll('.filter-btn').forEach(filterBtn => {
    filterBtn.addEventListener( 'click', filterGrid);
});


let activeBtn = document.querySelector('.active');

applyFilterFromLink(activeBtn);
}

document.addEventListener('DOMContentLoaded', useIsotope);
})();