'use strict';
/* global shoppingList, store, Item, api $ */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

// $.getJSON('https://thinkful-list-api.herokuapp.com/ei-student/items', (response) => {
//   console.log('api response:', response);
// });

// api.getItems(function(data) {
//   console.log(data);
// });
  
// console.log(api.BASE_URL);

api.createItem('pears', (newItem) => {
  api.getItems((items) => {
    console.log(items);
  });
});