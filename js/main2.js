(() => {
    function useIsotope(event) {

        // init Isotope
        let isotopeGrid = new Isotope( '.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: 200
            }
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
