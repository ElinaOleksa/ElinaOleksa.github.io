/***Immediately Invoked Function Exression (IIFE)***/
(function () {

    var names = ["Yaakov", "John", "Sue", "Elina", "Lena", "Kristaps", "Lina", "Paula", "Ivars", "Joe"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();