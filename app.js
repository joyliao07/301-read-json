'use strict';

function Dog(dog) {
  this.name = dog.name;
  this.picture = dog.image_url;
  this.hobbies = dog.hobbies;
  this.render();
}


Dog.prototype.render = function (){
  let $sectionNew = $('#dog-template').clone();
  $('main').append($sectionNew);
  $sectionNew.find('h2').text(this.name);
  $sectionNew.find('img').attr('src', this.picture);
  $sectionNew.find('p').text(this.hobbies);
};


Dog.readJson = () => {
  $.get('data.json', 'json')
    .then( data => {
      data.forEach( dog => {
        new Dog(dog);
      });
    });
};


$(document).ready(function() {
  Dog.readJson();
});
