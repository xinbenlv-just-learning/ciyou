(function () {
    "use strict";

    var wordlist = [
        {"word": "prodigious",
        "pronounciation": "[prə'didʒəs]",
        "explanation": "adj. 巨大的,奇异的; n. 奇迹"},
        {"word": "corpulence",
        "pronounciation": "['kɔ:pjʊləns]",
        "explanation": "n. 肥胖, 臃肿"},
        {"word": "hominid",
        "pronounciation": "['hɔminid]",
        "explanation": "n. 原始人类 adj. 灵长类的"},
        {"word": "inextricable",
        "pronounciation": "[ˌɪnɪk'strɪkəbl]",
        "explanation": "adj. 无法摆脱的, 纠缠的"},
        {"word": "quandary",
        "pronounciation": "['kwɔndəri]",
        "explanation": "n. 困惑, 迷惑, 为难"}
    ];
 
    exports.index = function (req, res) {
        req.accepts(['html', 'json']);
        res.send([{"api": "works"}]);
    };

    exports.user = function (req, res) {
        req.accepts(['html', 'json']);
        res.send([{
            "user": {
                "id": req.params.uid
            }
        }]);
    };
 
    exports.word = function (req, res) {
        req.accepts(['html', 'json']);
        if (req.params.id < wordlist.length) {
            res.send(wordlist[req.params.id]);
        }
        else {
            res.send(["not found"]);//TODO(zzn)
        }
    };
    
    exports.wordlist = function (req, res) {
        req.accepts(['html', 'json']);
        res.send({
            "id": req.params.id,
            "name": "GRE",
            "len": wordlist.length
        }); //TODO(zzn)
    };
 
})();
