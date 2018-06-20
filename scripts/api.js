'use strict';
/*global $ */

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/dan';

  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const createItem = (name, callback) => {
    const newItem = JSON.stringify({name: 'Bananas'});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    });
  };

  return {getItems, createItem};
}());



