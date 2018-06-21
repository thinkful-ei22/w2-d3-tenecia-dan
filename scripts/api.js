'use strict';
/*global $ */

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Olivia';

  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, callback);
  };
  
  const createItem = (name, callback) => {
    const newItem = JSON.stringify({name,});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: function callback (res) {
        console.log(res);
      },
      'error': function (err) {
        console.log(err);
      }
    });
  };
  const updateItem = function (id, updateData, callback){
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: function callback (res) {
        console.log(res);
      },
      'error': function (err) {
        console.log(err);
      }
    });
  };
    
  const deleteItem = (id, callback)=> {

    $.ajax({
      url:`${BASE_URL}/items/${id}`,
      method:'DELETE',
      contentType:'application/json',
      success: function callback (res) {
        console.log(res);
      },
      'error': function (err) {
        console.log(err);
      }
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };

}());