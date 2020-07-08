var types = [
    "palace", "flat", "house", "bungalo"
];

var times = [
    "12:00", "13:00", "14:00"
];

var facilities = [
    "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"
];

var getRandom = function (min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

var getMocks = function (count) {
    var result = [];
    for ( var i = 1; i <= count; i++) {
       var hotel = {
            author: {
                avatar:  "img/avatars/user0" + i  + ".png"
            },
            offer: {
                title:  "строка, заголовок предложения",
                address: "600, 350",
                price: "число, стоимость",
                type: types[getRandom(0, 3)],
                rooms: "число, количество комнат",
                guests: "число, количество гостей, которое можно разместить",
                checkin: times[getRandom(0, 2)],
                checkout: times[getRandom(0, 2)],
                features: facilities[getRandom(0, 3)],
                description: "строка с описанием",
                photos: "http://o0.github.io/assets/images/tokyo/hotel" + i + ".jpg"
            },
            location: {
                 x: getRandom(0, 1200),
                y: getRandom(130, 630)
            }
       };
       result.push(hotel);
    }
    return result;
}

console.log(getMocks(8));

var map = document.querySelector(".map");
map.classList.remove("map-faded");

var similarListElement = document.querySelector(".map__pins");
var similarPinTemplate = document.querySelector("#pin")
  .content
  .querySelector(".map__pin");


var renderMapTip = function(result) {
  for (var i = 1; i <= count; i++) {
    var mapPinElement = similarPinTemplate.cloneNode(true);
    mapPinElement.style.left = result[i].location.x;
    mapPinElement.style.top = result[i].location.y;
    mapPinElement.querySelector("img").setAttribute("src", "result[i].author.avatar");
    mapPinElement.querySelector("img").setAttribute("alt", "result[i].offer.title");
  };
  return mapPinElement;
}

var createFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 1; i <= count; i++) {
    fragment.appendChild(renderMapTip(result));
  }
  similarListElement.appendChild(fragment);
}
