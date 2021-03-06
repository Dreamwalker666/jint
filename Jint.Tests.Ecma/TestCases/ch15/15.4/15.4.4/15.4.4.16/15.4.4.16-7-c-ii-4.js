/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-7-c-ii-4.js
 * @description Array.prototype.every - k values are passed in ascending numeric order
 */


function testcase() {

        var arr = [0, 1, 2, 3, 4, 5];
        var lastIdx = 0;
        var called = 0;
        function callbackfn(val, idx, o) {
            called++;
            if (lastIdx !== idx) {
                return false;
            } else {
                lastIdx++;
                return true;
            }
        }

        return arr.every(callbackfn) &&  arr.length === called;
    }
runTestCase(testcase);
