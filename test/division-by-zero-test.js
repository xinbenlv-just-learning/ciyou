// division-by-zero-test.js

var vows = require('vows'),
    assert = require('assert'),
    theadd = require('./../theadd');

// Create a Test Suite
vows.describe('Division by Zero').addBatch({
    'when dividing a number by zero': {
        topic: function () { return 42 / 0 },

        'we get Infinity': function (topic) {
            assert.equal (topic, Infinity);
        }
    },
    'but when dividing zero by zero': {
        topic: function () { return 0 / 0 },

        'we get a value which': {
            'is not a number': function (topic) {
                assert.isNaN (topic);
            },
            'is not equal to itself': function (topic) {
                assert.notEqual (topic, topic);
            }
        }
    },
    ' when add': {
        topic: theadd.add,
        'we get add xxx': function(topic) {
            assert.equal(true,true);
        }
    }
}).exportTo(module); // Run it
