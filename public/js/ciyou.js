/*global $:false */
(function () {
    "use strict";
    var getWordlistLength = function (callback) {
        $.getJSON("/api/wordlist/1", null, function (d) {
            callback(d.len);
        });
    };

    var getWord = function (index, callback) {
        $.getJSON("/api/word/" + index, null, function (d) {
            callback(d);
        });
    };

    var updateWord = function (index) {
        var elements = ["word", "pronounciation", "explanation"];
        var callback = function (content) {
            for (var i = 0; i < elements.length; i += 1) {
                var e = elements[i];
                $("#" + e).html(content[e]);
            }
        };

        getWord(index, callback);
    };

    var index = 0;
    var wordlistLength = 0;
    var KeyPressed = function (e) {
        if (wordlistLength === 0) {
            return;
        }
        var key = (window.event) ? event.keyCode : e.keyCode;
        switch (key) {
        case 37:
            index = (index - 1 + wordlistLength) % wordlistLength;
            updateWord(index);
            break;
        case 39:
            index = (index + 1 + wordlistLength) % wordlistLength;
            updateWord(index);
            break;
        }
    };

    $(document).ready(function () {

        document.onkeyup = KeyPressed;
        getWordlistLength(function (ret) {
            wordlistLength = ret;
        });
    });
})();
