(function (window) {
  var farewell = [
    "Goodbye", "Adiós", "Au revoir", "Tschüss", "Addio",
    "さようなら", "안녕히 가세요", "再见", "Tạm biệt", "विदा"
  ];

  var goodbyeSpeaker = {};

  goodbyeSpeaker.speak = function (name) {
    for (var i = 0; i < farewell.length; i++) {
      console.log(farewell[i] + " " + name);
    }
  };

  window.goodbyeSpeaker = goodbyeSpeaker;
})(window);
