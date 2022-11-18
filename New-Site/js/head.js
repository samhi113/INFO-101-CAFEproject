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

//General CSS is standardizes Content
const sitePrefix = "CAFE - ";
const cssGeneral = 'general.css';

//Function to Create Page Objects
function Page(pageFile, pageTitle, pageCSS) {
    //File of Page, used to match file with title
    this.file = pageFile+".html";
    //Title of HTML Page
    this.title = sitePrefix+pageTitle;
    //Uses function series 'inject' to add HTML elements
    this.injectTitle = injectTitle(this.title);
    //Stores Page-Specific CSS, adds .css file ending
    this.css = pageCSS+".css";
    //Adds General CSS, should already have .css file ending
    this.cssGeneral = cssGeneral;
    //Uses function series 'inject' to add HTML elements to page-specific CSS
    this.injectCSS = injectCSS(this.css);
    //Uses function series 'inject' to add HTML elements to general CSS
    this.injectCSSGeneral = injectCSS(this.cssGeneral);
    //Creates the combined page head that will be written into the HTML document <head>
    this.injectHead =
        this.injectTitle +
        this.injectCSSGeneral +
        this.injectCSS;
}


//-------------------------------------
// Injection Content
//-------------------------------------

//Creates New Page Objects
//Home Page
const pageHome = new Page("index","Home","home");
//Data Source & Dataset Info Page
const pageDataSrc = new Page("datasetInfo","Source","threeBar");
//Data Visualization Page
const pageDataVis = new Page("datasetVisualization","Visualization","dataVis");
//'About Us' Page
const pageAboutUs = new Page("aboutUs","About Us", "aboutUs");
//-------------------------------------
// Actual Injections
//-------------------------------------

//Switch Based on HTML file name
switch (fileName.toString()){

    case pageHome.file:
        document.write(
            //Injects Title, General CSS, and Page-Specific CSS
            pageHome.injectHead
        )
        break;


    case pageDataSrc.file:
        document.write(
            //Injects Title, General CSS, and Page-Specific CSS
            pageDataSrc.injectHead
        )
        break;

    case pageDataVis.file:
        document.write(
            //Injects Title, General CSS, and Page-Specific CSS
            pageDataVis.injectHead
        )
        break;


    case pageAboutUs.file:
        document.write(
            //Injects Title, General CSS, and Page-Specific CSS
            pageAboutUs.injectHead
        )
        break;

    default:
        //Page Error
        //Default Code

        document.write(
            //Inject Error Title
            injectTitle("CAFE - ERROR") +
            //Inject General CSS, always True
            injectCSS(cssGeneral)
        )
        break;
}


/*
//-------------------------------------
// Deprecated Code
// Switched to Objects
//-------------------------------------

//Home Page
//const pageHome = "CAFE - Home";
//const fileHome = 'index.html';
//const cssHome = 'home.css';


//Dataset Information Page
const pageDataSrc = "CAFE - Source";
const fileDataSrc = 'datasetInfo.html';
const cssDataSrc = 'threeBar.css';

//Dataset Visualization Page
const pageDataVis = "CAFE - Visualization";
const fileDataVis = 'datasetVisualization.html';
const cssDataVis = 'dataVis.css';

//About Us Page
const pageAboutUs = "CAFE - About Us";
const fileAboutUs = 'aboutUs.html';
const cssAboutUs = 'aboutUs.css';





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

//Note: Meta Char Set cannot be added dynamically
//Inject Meta Char Set
//const meta = "<meta charset=\"utf-8\">\n";
//document.write(meta);


 */