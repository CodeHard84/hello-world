'use strict';

function getFavoriteTool(){
    // This still needs tons of validation. However, it is a start.
    let tool = prompt("What is your favorite development tool?");
    if (tool == "" || tool == null){
        tool = prompt("What is your favorite development tool?");
    }
    // After extensive testing I found out prompt returns null if 'cancelled' not an empty string.
    if (tool !== "" && tool !== null) {
        if (likeCookies()) {
            document.write("<p>Your favorite tool is: " + tool + " and you also like cookies!</p>");
        }
        else {
            document.write("<p>Your favorite tool is: " + tool + "  and you live a sad sad sad cookie free life.... =(</p>");
        }
    } else {
        document.write("<p>This would be more fun if you would answer the questions!! Press F5 and try again!</p>");
    }
    if (tool.toLowerCase() == "jace") {
        document.write("<p>Well at least I am your favorite! LOL</p>");
    }
    if (tool.toLowerCase() == "vscode") {
        document.write("<p>WE'RE SPIRIT ANIMALS!!! Seriously, did we just become best friends? We both like VSCode!</p>");
    }
}

function likeCookies() {
    let cookie;
    cookie = confirm("Do you like cookies? OK for Yes or Cancel for No!");
    return cookie;
}

function getYear() {
    // I had help with this: https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript
    document.write(new Date().getFullYear());
}