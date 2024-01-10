'use strict';

function getFavoriteTool() {
    let tool = prompt('What\'s your favorite development tool?');
    let tracker = 0;
    // This still won't check for whitespaces or bad characters.
    while (tool == "" || tool == null) {
        // Let's ask 3 times then ask a different way.
        if (tracker <= 2) {
            tool = prompt('What\'s your favorite development tool?'); 
        } 
        else {
            tool = prompt('Come on.... What\'s your favorite development tool? I\'ve asked ' + tracker + ' times already!')
        }
        tracker++;      
    }
    // Let's ask the user to rate their favorite tool from 1-5 stars.
    let stars = rateFavoriteTool(tool);
    let cookies = likeCookies();
    // Now let's put it all together and write to the document.
    if (cookies) {
        document.write("<p>Your favorite tool is: " + tool + " and you also like cookies!</p>");
        writeStars(stars, tool);
    }
    else{
        document.write("<p>Your favorite tool is: " + tool + "  and you live a sad sad sad cookie free life.... =(</p>");
        writeStars(stars, tool);
    }
    if (tool.toLowerCase() == "jace") {
        document.write("<p>Well at least I am your favorite! LOL</p>"); 
    }
    if (tool.toLowerCase() == "vscode") {
        document.write("<p>WE'RE SPIRIT ANIMALS!!! Seriously, did we just become best friends? We both like VSCode!</p>");
    }
}

function likeCookies() {
    let cookie = confirm("Do you like cookies? OK for Yes or Cancel for No!");
    return cookie;
}

function getYear() {
    // I had help with this: https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript
    document.write(new Date().getFullYear());
}

function rateFavoriteTool(tool) {
    let rating = prompt('Please rate ' + tool +' from 1-5 stars!');
    // this breaks if the user enters a string.
    while (rating > 5 || rating < 1) {
        rating = prompt('Please rate ' + tool +' from 1-5 stars!');
    }
    return rating;
}

function writeStars(stars, tool) {
    // the idea here will be to write a list using a for loop.
    document.write("<p>You think " + tool + " is " + stars + " stars!"); 
    document.write("<ul class=\"star-rating\">");
    for (let i = 0; i < stars; i++){
        // I made this image in MSPaint, don't judge lol.
        document.write("<li><img src=\"assets\\star1.jpg\"></li>");
    }
    document.write("</ul></p>");
}