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
    if (todoitem.value == "" || todotime.value == "") {
        alert("Please Fill INPUT SECTTIONS carefully");
    } else {
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

// ----input values----//
var titl = document.getElementById('to-do-title');
var link = document.getElementById('to-do-link');
var key1 = document.getElementById('pro-inp1');
var key2 = document.getElementById('pro-inp2');
var key3 = document.getElementById('pro-inp3');

var disp3 = document.getElementById('display3');
var j = 0;

function temp3() {
    if (titl.value == "" || link.value == "" || key1.value == "" || key2.value == "" || key3.value == "") {
        alert("Please Fill INPUT SECTTIONS carefully");
    } else {
        // ----Creates div Element----//
        var divv = document.createElement("div");
        divv.setAttribute("class", "col-sm-3");
        divv.setAttribute("id", "col");

        // ----Heading Element create and append in div----//
        var head1 = document.createElement("h2");
        var tt = document.createTextNode(titl.value);
        head1.appendChild(tt);
        head1.setAttribute("class", "pro-title");
        titl.value = "";

        // delete button //
        var del = document.createElement("img");
        del.src = "images/deleteicon.png";
        del.setAttribute("class", "btn");
        del.setAttribute("id", "close");
        head1.appendChild(del);
        divv.appendChild(head1);

        // ----ul Element create and append in div----//
        var ulist = document.createElement("ul");
        ulist.setAttribute("class", "pro-keys");

        // list Element//
        var li1 = document.createElement("li");
        li1.setAttribute("class", "keywords");
        var text1 = document.createTextNode(key1.value);
        li1.appendChild(text1);
        ulist.appendChild(li1);
        key1.value = "";
        // list Element//
        var li2 = document.createElement("li");
        li2.setAttribute("class", "keywords");
        var text2 = document.createTextNode(key2.value);
        li2.appendChild(text2);
        ulist.appendChild(li2);
        key2.value = "";
        // list Element//
        var li3 = document.createElement("li");
        li3.setAttribute("class", "keywords");
        var text3 = document.createTextNode(key3.value);
        li3.appendChild(text3);
        ulist.appendChild(li3);
        key3.value = "";

        divv.appendChild(ulist);

        // ----Heading Element create and append in div----//
        var head2 = document.createElement("h2");
        var tt2 = document.createTextNode(link.value);
        head2.appendChild(tt2);
        head2.setAttribute("class", "pro-links");
        divv.appendChild(head2);
        link.value = ""

        // ---- append whole div in displaytemplate----//
        disp3.appendChild(divv);

        // color changing using js//
        divv.style.backgroundColor = colors[j];
        j++;
        if (j == 4) j = 0;

        del.setAttribute("onclick", "Delete3(this)");
    }
}

function Delete3(e) {
    e.parentNode.parentNode.remove();
}

function Deleteall3() {
    disp3.innerHTML = "";
}
// Template Project //

// Template Next7Days //
var disp2 = document.getElementById('display2');
var daynum = document.getElementById('daynumb');
var dayinp1 = document.getElementById('dayinp-1');
var dayinp2 = document.getElementById('dayinp-2');
var dayinp3 = document.getElementById('dayinp-3');
var dayinp4 = document.getElementById('dayinp-4');
var dayinp5 = document.getElementById('dayinp-5');
var k = 0;
var h = 0;
var days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"]

function temp2() {
    if (dayinp1.value == "" || dayinp2.value == "" || dayinp3.value == "" || dayinp4.value == "" || dayinp5.value == "") {
        alert("Please Fill INPUT SECTTIONS carefully");
    } else {

        // ----Creates div Element----//
        var div2 = document.createElement("div");
        div2.setAttribute("class", "col-sm-3");
        div2.setAttribute("id", "col2");

        // ----ul Element create and append in div----//
        var ulist2 = document.createElement("ul");
        ulist2.setAttribute("class", "keys-7");

        // ----Heading Element create and append in div----//
        var head7 = document.createElement("h5");
        var ht = document.createTextNode(days[h]);
        head7.appendChild(ht);
        h++;
        if (h == 7) h = 0;

        // delete button //
        var del = document.createElement("img");
        del.src = "images/deleteicon.png";
        del.setAttribute("class", "btn");
        del.setAttribute("id", "close");
        head7.appendChild(del);
        ulist2.appendChild(head7);

        // list Element//
        var li1 = document.createElement("li");
        li1.setAttribute("class", "keywords-7");
        var text1 = document.createTextNode(dayinp1.value);
        li1.appendChild(text1);
        ulist2.appendChild(li1);
        dayinp1.value = "";
        // list Element//
        var li1 = document.createElement("li");
        li1.setAttribute("class", "keywords-7");
        var text4 = document.createTextNode(dayinp2.value);
        li1.appendChild(text4);
        ulist2.appendChild(li1);
        dayinp2.value = "";
        // list Element//
        var li1 = document.createElement("li");
        li1.setAttribute("class", "keywords-7");
        var text5 = document.createTextNode(dayinp3.value);
        li1.appendChild(text5);
        ulist2.appendChild(li1);
        dayinp3.value = "";
        // list Element//
        var li2 = document.createElement("li");
        li2.setAttribute("class", "keywords-7");
        var text2 = document.createTextNode(dayinp4.value);
        li2.appendChild(text2);
        ulist2.appendChild(li2);
        dayinp4.value = "";
        // list Element//
        var li3 = document.createElement("li");
        li3.setAttribute("class", "keywords-7");
        var text3 = document.createTextNode(dayinp5.value);
        li3.appendChild(text3);
        ulist2.appendChild(li3);
        div2.appendChild(ulist2);
        dayinp5.value = "";

        // ---- append whole div in displaytemplate----//
        disp2.appendChild(div2);

        // color changing using js//
        div2.style.backgroundColor = colors[k];
        k++;
        if (k == 4) k = 0;

        del.setAttribute("onclick", "Delete2(this)");
    }
}

function Delete2(a) {
    a.parentNode.parentNode.parentNode.remove();
}

function deleteall2() {
    disp2.innerHTML = "";
}