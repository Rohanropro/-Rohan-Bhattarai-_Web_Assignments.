(function () {
  var names = ["Alice", "Bob", "Charlie", "jsRaj", "JSNina", "Sam"];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();
    var secondLetter = name.charAt(1).toLowerCase();

    if (firstLetter === 'j' && secondLetter === 's') {
      goodbyeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();
