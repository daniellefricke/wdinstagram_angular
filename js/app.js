"use strict";




(function(){

  let WdinstagramData = [
    {author: "DanielleF", content: "#beachlife", photo_url: "http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/12/3/top-10-caribbean-beaches-eagle-beach-aruba.jpg.rend.hgtvcom.966.725.jpeg"},
    {author: "JordanF", content: "#IronChef", photo_url: "http://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/exps38682_THCA153054A10_21_1b.jpg"},
    {author: "AmandaF", content: "I love my Jeep", photo_url: "https://blog.jeep.com/wp-content/uploads/2017/03/16487663_10156730120161515_7984841347332865597_o.jpg" }
  ]

  angular
  .module("Wdinstagram", [])
  .controller("WdinstagramController",[WdinstagramControllerFunction])

  function WdinstagramControllerFunction(){
    this.grams = WdinstagramData
  }
})
();
