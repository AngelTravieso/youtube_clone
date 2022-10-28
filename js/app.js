"use strict";

// Variables
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search_bar');
const cancelIcon = document.querySelector('.cancel-icon');
const aside = document.querySelector('aside');
const toggleMenuBtn = document.querySelector('aside .menu');


cancelIcon.style.display = 'none';


// Funciones

// * Mostrar/ocultar icono de cancelar del input de búsqueda
const showIconInSearchField = () => {
    if(searchInput.value.length >= 1) {
        cancelIcon.style.display = 'block';
    } else {
        cancelIcon.style.display = 'none';
    }
    
}

//* Expandir menú
const expandMenu = () => {
    aside.classList.toggle('expanded');
}

//* Submit formulario de búsqueda
const submitSearchForm = ( evt ) => {
    evt.preventDefault();
    console.log('submit...');
    searchInput.value = '';
}

// Eventos
searchInput.addEventListener('input', showIconInSearchField);

searchForm.addEventListener('submit', submitSearchForm);

toggleMenuBtn.addEventListener('click', expandMenu);