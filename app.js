// ----------Display Template Using JS-------------//Start//
var displaytmp = document.getElementById('displaytemplate')
var tmp1 = document.getElementById('template-1');
var tmp2 = document.getElementById('template-2');
var tmp3 = document.getElementById('template-3');
var tmp4 = document.getElementById('template-4');
var notmp = document.getElementById('whennotemp');

// Set initially "none" //
tmp1.style.display = "none";
tmp2.style.display = "none";
tmp3.style.display = "none";
tmp4.style.display = "none";

// Display Today//
function today() {
    tmp1.style.display = "block";
    displaytmp.appendChild(tmp1);
    tmp2.style.display = "none";
    tmp3.style.display = "none";
    tmp4.style.display = "none";
    notmp.style.display = "none";
}
// Display Next7Days//
function Next7Days() {
    tmp2.style.display = "block";
    displaytmp.appendChild(tmp2);
    tmp1.style.display = "none";
    tmp3.style.display = "none";
    tmp4.style.display = "none";
    notmp.style.display = "none";
}
// Display Project//
function Project() {
    tmp3.style.display = "block";
    displaytmp.appendChild(tmp3);
    tmp2.style.display = "none";
    tmp1.style.display = "none";
    tmp4.style.display = "none";
    notmp.style.display = "none";
}
//Display Project//
function Reminder() {
    tmp4.style.display = "block";
    displaytmp.appendChild(tmp4);
    tmp2.style.display = "none";
    tmp3.style.display = "none";
    tmp1.style.display = "none";
    notmp.style.display = "none";
}
// ----------Display Template Using JS-------------//End//


// Template Today //

var todoitem = document.getElementById('to-do-item');
var todotime = document.getElementById('to-do-time');
var lis = document.getElementById('list');
var i = 0;
// array of colors//
var colors = ["#dd3e54", "#41295a", "#004e92", "#0b8793"]

function additem() {
    // list creator//
    var li = document.createElement('li');
    var text = document.createTextNode(todoitem.value);
    li.appendChild(text);
    todoitem.value = "";
    var textb = document.createTextNode(" at ");
    li.appendChild(textb);
    var textt = document.createTextNode(todotime.value);
    li.appendChild(textt);
    todotime.value = "";

    // delete button //
    var del = document.createElement("img");
    del.src = "images/deleteicon.png";
    del.setAttribute("class", "btn");
    del.setAttribute("id", "close");
    li.appendChild(del);

    // delete button //
    var edit = document.createElement("img");
    edit.src = "images/editicon.png";
    edit.setAttribute("class", "ebtn");
    edit.setAttribute("id", "eclose");
    li.appendChild(edit);

    lis.appendChild(li);

    // css on button//
    li.style.backgroundColor = colors[i];

    i++;
    if (i == 4) i = 0;
    del.setAttribute("onclick", "Delete(this)");
    edit.setAttribute("onclick", "edit(this)")


}

// Delete function //
function Delete(e) {
    e.parentNode.remove();
}

// Deleteall function //
function Deleteall() {
    lis.innerHTML = " ";
}

// Edit function//
function edit(a) {
    var val = prompt("Enter edit value", a.parentNode.firstChild.nodeValue);
    var val2 = prompt("Enter edit time");
    a.parentNode.firstChild.nodeValue = val;
    a.parentNode.childNodes[2].nodeValue = val2;
}
// 
// Template Today //


// Template Project //
var disp3 = document.getElementById('display3');
var j = 0;

function temp3() {

    // ----input values----//
    var titl = document.getElementById('to-do-title').value;
    var link = document.getElementById('to-do-link').value;
    var key1 = document.getElementById('pro-inp1').value;
    var key2 = document.getElementById('pro-inp2').value;
    var key3 = document.getElementById('pro-inp3').value;

    // ----Creates div Element----//
    var divv = document.createElement("div");
    divv.setAttribute("class", "col-sm-3");
    divv.setAttribute("id", "col");

    // ----Heading Element create and append in div----//
    var head1 = document.createElement("h2");
    var tt = document.createTextNode(titl);
    head1.appendChild(tt);
    head1.setAttribute("class", "pro-title");
    divv.appendChild(head1);

    // ----ul Element create and append in div----//
    var ulist = document.createElement("ul");
    ulist.setAttribute("class", "pro-keys");

    // list Element//
    var li1 = document.createElement("li");
    li1.setAttribute("class", "keywords");
    var text1 = document.createTextNode(key1);
    li1.appendChild(text1);
    ulist.appendChild(li1);
    // list Element//
    var li2 = document.createElement("li");
    li2.setAttribute("class", "keywords");
    var text2 = document.createTextNode(key2);
    li2.appendChild(text2);
    ulist.appendChild(li2);
    // list Element//
    var li3 = document.createElement("li");
    li3.setAttribute("class", "keywords");
    var text3 = document.createTextNode(key3);
    li3.appendChild(text3);
    ulist.appendChild(li3);

    divv.appendChild(ulist);

    // ----Heading Element create and append in div----//
    var head2 = document.createElement("h2");
    var tt2 = document.createTextNode(link);
    head2.appendChild(tt2);
    head2.setAttribute("class", "pro-links");
    divv.appendChild(head2);

    // ---- append whole div in displaytemplate----//
    disp3.appendChild(divv);

    // color changing using js//
    divv.style.backgroundColor = colors[j];
    j++;
    if (j == 4) j = 0;
}
// Template Project //