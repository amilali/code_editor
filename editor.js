// loader
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    setTimeout(function() {
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }, 3000); // Delay of 2 seconds (2000 milliseconds)
  }
};


// loader
let editor1 = ace.edit("htmlcode");
let editor2 = ace.edit("csscode");
let editor3 = ace.edit("jscode");

let editorlib = {
    init() {
        editor2.setTheme("ace/theme/tomorrow_night_bright");
        editor2.session.setMode("ace/mode/css");

        editor3.setTheme("ace/theme/tomorrow_night_bright");
        editor3.session.setMode("ace/mode/javascript");

        editor1.setTheme("ace/theme/tomorrow_night_bright");
        editor1.session.setMode("ace/mode/html");

        editor1.setOptions({
          fontSize: "16pt",
          animatedScroll: true,
          enableEmmet: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableAutoIndent: true,
          enableSnippets: true,
          autoScrollEditorIntoView: true,
          useSpellcheck: true
        });
        editor2.setOptions({
            fontSize: "16pt",
            animatedScroll: true,
            enableEmmet: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableAutoIndent: true,
            enableSnippets: true,
            useSpellcheck: true
          });
          editor3.setOptions({
            fontSize: "16pt",
            animatedScroll: true,
            enableEmmet: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableAutoIndent: true,
            enableSnippets: true,
            useSpellcheck: true
          });
        
          


    }
}

editorlib.init();