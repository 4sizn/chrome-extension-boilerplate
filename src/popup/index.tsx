import React from "react";
import { render } from "react-dom";
import { Popup } from "./Popup";

if (chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
        render(<Popup />, document.getElementById("popup"));
    });
} else {
    render(<Popup />, document.getElementById("popup"));
}

console.log("hello world");
