var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align","right");

mainTitle = document.getElementById("mainTitle");
console.log(mainTitle.innerHTML);

var sidebar = document.getElementById("sidebar");
console.log(sidebar.innerHTML);

var arrayOfH1s = mainContent.getElementsByTagName("h1");
arrayOfH1s[0].innerHTML = "This is an oldy but a goldie";

//create the elements
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

// to add content, either use innerHTML
//newHeading.innerHTML = "Did You Know?";
//newParagraph.innerHTML = "California produces over 17 million gallons of wine each year!";

// OR create child nodes manually
var h1Text = document.createTextNode("Did You Know?");
var paraText = document.createTextNode("California produces over 17 million gallons of wine each year!");
// and add them as child nodes to the new elements
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

// and we still need to attach them to the document!
document.getElementById("trivia").appendChild(newHeading);
document.getElementById("trivia").appendChild(newParagraph);

