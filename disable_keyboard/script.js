// ==UserScript==
// @name         disable keyboard in certain sites
// @namespace    http://tampermonkey.net/
// @description  disable keyboard in certain sites
// @author       You
// @match        https://app.slack.com/*
// @match        https://mail.google.com/*
// @match        https://github.com/RentTheRunway/*/pull/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /* true will permit the next key entered */
    var allowNext = false;

    var allowedCodes = new Set([
        // spacing:
        "Enter",
        "Space",
        "Backspace",
        "Delete",
        // navigation:
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight"
    ]);
    var allowedKeys = new Set("`~!@#$%^&*()-_=+[]{}\\|;:'\",<.>/?".split(""));

    document.onkeyup = function(e) {
        console.log(`onkeyup(${e.key})`);

        // if Z is tapped and keys are disabled, switch mode to enabled
        if (e.key === "z" && !allowNext) {
            allowNext = true;
            return;
        }
    };

    document.onkeydown = function(e) {
        console.log(`onkeydown(${e.key})`);

        // allow some specific keys and any Ctrl- Cmd- modified keys
        if (e.ctrlKey || e.metaKey || allowedCodes.has(e.code) || allowedKeys.has(e.key)) {
            return;
        }
        // if should allow the next key, toggle it and return
        if (allowNext) {
            allowNext = false;
            return;
        }
        // prevent the key
        e.preventDefault();
    };
})();
