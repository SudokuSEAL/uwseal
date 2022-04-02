// import publications from publications.js
console.log(publications["refereedArchivalJournalPublicationsArray"]);

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

/* -------------------------------------------------------------------------
    Add data from the publication csv's to the Publications section
   -----------------------------------------------------------------------*/

// retrieve the publications data from the JS file
let refereedArchivalJournalPublicationsList =
    document.getElementById("refereedArchivalJournalPublicationsList");
let nonJournalFullyRefereedPublicationsList =
    document.getElementById("nonJournalFullyRefereedPublicationsList");
let nonJournalAbstractRefereedPublicationsList =
    document.getElementById("nonJournalAbstractRefereedPublicationsList");
let bookPublicationsList =
    document.getElementById("bookPublicationsList");
let partOfBookPublicationsList =
    document.getElementById("partOfBookPublicationsList");

// group and retrieve the specific subsets of publications
let refereedArchivalJournalPublicationsArray =
    publications["refereedArchivalJournalPublicationsArray"];
let nonJournalFullyRefereedPublicationsArray =
    publications["nonJournalFullyRefereedPublicationsArray"];
let nonJournalAbstractRefereedPublicationsArray =
    publications["nonJournalAbstractRefereedPublicationsArray"];
let bookPublicationsArray =
    publications["bookPublicationsArray"];
let partOfBookPublicationsArray =
    publications["partOfBookPublicationsArray"];

// add the publication entries as list elements
refereedArchivalJournalPublicationsArray.forEach(entry => {
    let liElement = document.createElement("li");
    liElement.innerText = entry.authors + ", \"" + entry.paper + "\", " +
        entry.publication;
    refereedArchivalJournalPublicationsList.appendChild(liElement);
});

nonJournalFullyRefereedPublicationsArray.forEach(entry => {
    let liElement = document.createElement("li");
    liElement.innerText = entry.authors + ", \"" + entry.paper + "\", " +
        entry.publication;
    nonJournalFullyRefereedPublicationsList.appendChild(liElement);
});

nonJournalAbstractRefereedPublicationsArray.forEach(entry => {
    let liElement = document.createElement("li");
    liElement.innerText = entry.authors + ", \"" + entry.paper + "\", " +
        entry.publication;
    nonJournalAbstractRefereedPublicationsList.appendChild(liElement);
});

bookPublicationsArray.forEach(entry => {
    let liElement = document.createElement("li");
    liElement.innerText = entry.authors + ", \"" + entry.book + "\"";
    bookPublicationsList.appendChild(liElement);
});

partOfBookPublicationsArray.forEach(entry => {
    let liElement = document.createElement("li");
    liElement.innerText = entry.authors + ", \"" + entry.book + "\", " +
        entry.info;
    partOfBookPublicationsList.appendChild(liElement);
});