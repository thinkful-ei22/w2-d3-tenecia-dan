'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/dan';

  const getItems = function(callback){
    callback('api module works!');
  };

  const createItem = (name, callback) => {
    const newItem = JSON.stringify({name: 'Bananas'});
    $.ajax({
      url: BASE_URL,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    });
  };

  return {getItems, createItem};
}());



