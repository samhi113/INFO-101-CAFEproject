/*
Author: Jay Annadurai
Class: I-101 - Cafaro
Date: 11/15/2022
File: header.js
Description: Inserts the Header of all pages
*/

//-------------------------------------
//Body & Navbar
//-------------------------------------

//Inject Start of Body
document.write(
    "<body>\n"
);


//Inject Anchor
document.write(
    "\t <div id=\"top\"> </div>"
);


//Inject Start of Navbar
document.write(
    "\t<nav>"
);



//Inject Header Section One
document.write(
    "<div>" +
        //Button 1: Home
        "<a href=\"index.html\"><button class=\"leftButton\">" +
            "Home" +
        "</button></a>" +

        //Button 2: Dataset Info
        "<a href=\"datasetInfo.html\"><button class=\"rightButton\">" +
            "Dataset Info</button>" +
        "</a>" +
    "</div>"
);

//Inject Header Section Two: Site Title
document.write(
    "<h1 id=\"siteTitle\">Consumer Vehicle Fuel Economy</h1>"
)

//Inject Header Section Three
document.write(
    "<div>" +
        //Button 3: Dataset Visualization
        "<a href=\"datasetVisualization.html\"><button class=\"leftButton\">" +
            "Dataset Visualization" +
        "</button></a>" +

        //Button 4: About Us
        "<a href=\"aboutUs.html\"><button class=\"rightButton\">" +
            "About Us" +
        "</button></a>" +

    "</div>"
)

//Inject End of Navbar
document.write(
    "\t</nav>\n"
);

//Main Body Content in HTML Page...







