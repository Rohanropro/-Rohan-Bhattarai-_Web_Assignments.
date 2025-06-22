(function (window) {
  var farewells = [
    "Goodbye", "Adiós", "Au revoir", "Tschüss", "Addio",
    "さようなら", "안녕히 가세요", "再见", "Tạm biệt", "विदा"
  ];

  var goodbyeSpeaker = {};

  goodbyeSpeaker.speak = function (name) {
    for (var i = 0; i < farewells.length; i++) {
      console.log(farewells[i] + " " + name);
    }
  };

  window.goodbyeSpeaker = goodbyeSpeaker;
})(window);
