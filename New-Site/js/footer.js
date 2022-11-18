/*
Author: Jay Annadurai
Class: I-101 - Cafaro
Date: 11/15/2022
File: footer.js
Description: Inserts the Footer of all pages
*/

//-------------------------------------
//Function Section for Footer
//-------------------------------------

//Prints Each Element with <p> tag
//To be used with writeFooter Array's foreach loop
function printP (element){
    //Opening Tag
    document.write("<p>");
    //Content to write
    document.write(element);
    //Closing Tag
    document.write("</p>");
}

//Simply puts all the footer elements together within a footer tag
function writeFooter(leftFooter, middleFooter, rightFooter){
    //Take Input Footer Elements and put into an array
    const footerArray = [leftFooter,middleFooter,rightFooter];

    document.write("<footer>");
    footerArray.forEach(printP)
    document.write("</footer>");
}


//-------------------------------------
//Raw Input
//-------------------------------------

//Leftmost Element - Class - String
const footerLeft = "Intro to Informatics";

//Middle Element - Authors - Array of Strings
const authors = [
    "Jay Annadurai",
    "Sam Higgins",
    "Noriel Arana",
    "Ollie Heady"
];

//Last Element - Copyright - String
const footerRight = "(c) IUPUI 2022";


//Add appropriate spacers into the array
//const footerMiddle = insertDivider(authors);
const footerMiddle = authors.join(" | ");




//-------------------------------------
//Insert End of HTML Page
//-------------------------------------

//Main Body Content in HTML Page...

//Write the footer tag
writeFooter(footerLeft, footerMiddle, footerRight);

//Inject End of Body
document.write(
    "</body>"
);











//-------------------------------------
//Ignore the below
//Turns out .join is a method >_>
//-------------------------------------

/*
//Takes Elements of an array and adds spaces to odd elements
function insertDivider(array) {
    const length = array.length;
    for (let i=0;  i < (2*length-1); i++){
        if (i === 1) {
            //Do nothing at the start
        }
        else {
            //array.splice method takes index to insert after, amount of elements to remove, elements to add
            array.splice(i-1,0," | ");
            //Increment i an extra time to account for added array element
            i++;
        }
    }
    return array;
}



*/