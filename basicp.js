// SWAP NUMBER
function swap() {
	var a = parseFloat(document.getElementById('n1').value);
	var b = parseFloat(document.getElementById('n2').value);
	document.getElementById('out1').value = "Before Swapping : " + a + "  " + b;
	a = a + b;
	b = a - b;
	a = a - b;
	document.getElementById('out2').value = "After Swapping : " + a + "  " + b;
}
function reset() {
	document.getElementById('n1').value = "";
	document.getElementById('n2').value = "";
	document.getElementById('out1').value = "";
	document.getElementById('out2').value = "";
}

// SIDE OF SQUARE
function calside() {
	var s, ar, pr
	s = parseFloat(document.getElementById('side').value)
	ar = s * s;
	pr = 4 * s;
	document.getElementById('outsq1').value = "Area : " + ar;
	document.getElementById('outsq2').value = "Perimeter : " + pr;
}
function resetsq() {
	document.getElementById('side').value = "";
	document.getElementById('outsq1').value = "";
	document.getElementById('outsq2').value = "";
}


// L & B RECTANGLE
function calp3() {
	var a = parseFloat(document.getElementById('lenp3').value);
	var b = parseFloat(document.getElementById('widp3').value);
	var ar = a * b;
	var pr = 2 * (a + b);
	document.getElementById('out1p3').value = "Perimeter : " + ar;
	document.getElementById('out2p3').value = "Area : " + pr;
}
function resetp3() {
	document.getElementById('lenp3').value = "";
	document.getElementById('widp3').value = "";
	document.getElementById('out1p3').value = "";
	document.getElementById('out2p3').value = "";
}


// Radius Of Circle
function calp4() {
	var r, ar, cr;
	r = parseFloat(document.getElementById('radp4').value);
	ar = 3.14 * r * r;
	cr = 2 * 3.14 * r;
	document.getElementById('out1p4').value = "Area : " + ar;
	document.getElementById('out2p4').value = "Circumference : " + cr;
}
function resetp4() {
	document.getElementById('radp4').value = "";
	document.getElementById('out1p4').value = "";
	document.getElementById('out2p4').value = "";
}

function mf() {
    // Get the text field
    var copyText = document.getElementById("mb");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    }

    function mf1() {
    // Get the text field
    var copyText1 = document.getElementById("mb1");

    // Select the text field
    copyText1.select();
    copyText1.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText1.value);
    }

    function mf2() {
    // Get the text field
    var copyText2 = document.getElementById("mb2");

    // Select the text field
    copyText2.select();
    copyText2.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText2.value);
    }

    function mf3() {
    // Get the text field
    var copyText3 = document.getElementById("mb3");

    // Select the text field
    copyText3.select();
    copyText3.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText3.value);
    }