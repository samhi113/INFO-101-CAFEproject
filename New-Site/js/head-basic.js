/*
Author: Jay Annadurai
Class: I-101 - Cafaro
Date: 11/15/2022
File: info-css.js
Description: Injects CSS & References into All Pages
*/

//-------------------------------------
// Function Content
//-------------------------------------

//Create a constant that contains the HTML filename
const fileName = location.href.split("/").slice(-1);

//Function to inject Title
function injectTitle(page){
    return  "<title>" + page + "</title>\n";
}

//Function to inject CSS
function injectCSS(css){
    return  "<link href=\"css/" + css + "\" rel=\"stylesheet\" type=\"text/css\">\n";
}

//Refresher on Objects:
//https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/
/*
//Example Page Object that contains Property Information
const page = {
    file: "index",
    name: "CAFE - Page",
    css: "general",
};
*/





//-------------------------------------
// Injection Content
//-------------------------------------
//General CSS is standardizes Content
const sitePrefix = "CAFE - ";
const cssGeneral = 'general.css';


//Home Page
const pageHome = sitePrefix + "Home";
const fileHome = 'index.html';
const cssHome = 'home.css';


//Dataset Information Page
const pageDataSrc = sitePrefix + "Source";
const fileDataSrc = 'datasetInfo.html';
const cssDataSrc = 'threeBar.css';

//Dataset Visualization Page
const pageDataVis = sitePrefix + "Visualization";
const fileDataVis = 'datasetVisualization.html';
const cssDataVis = 'dataVis.css';

//About Us Page
const pageAboutUs = sitePrefix + "About Us";
const fileAboutUs = 'aboutUs.html';
const cssAboutUs = 'aboutUs.css';

//-------------------------------------
// Actual Injections
//-------------------------------------
//Switch Based on HTML file name
switch (fileName.toString()){

    case fileHome:
        document.write(
            //Inject Title
            injectTitle(pageHome) +
            //Inject General CSS, always True
            injectCSS(cssGeneral) +
            //Inject Page-Specific CSS
            injectCSS(cssHome)
        )
        break;


    case fileDataSrc:
        document.write(
            //Inject Title
            injectTitle(pageDataSrc) +
            //Inject General CSS, always True
            injectCSS(cssGeneral) +
            //Inject Page-Specific CSS
            injectCSS(cssDataSrc)
        )
        break;

    case fileDataVis:
        document.write(
            //Inject Title
            injectTitle(pageDataVis) +
            //Inject General CSS, always True
            injectCSS(cssGeneral) +
            //Inject Page-Specific CSS
            injectCSS(cssDataVis)
        )
        break;


    case fileAboutUs:
        document.write(
            //Inject Title
            injectTitle(pageAboutUs) +
            //Inject General CSS, always True
            injectCSS(cssGeneral) +
            //Inject Page-Specific CSS
            injectCSS(cssAboutUs)
        )
        break;

    default:
        //Page Error
        //Default Code

        document.write(
            //Inject Title
            injectTitle("CAFE - ERROR") +
            //Inject General CSS, always True
            injectCSS(cssGeneral)
        )
        break;
}


/*
//-------------------------------------
// Legacy Code
//-------------------------------------








//Note: Meta Char Set cannot be added dynamically
//Inject Meta Char Set
//const meta = "<meta charset=\"utf-8\">\n";
//document.write(meta);


 */