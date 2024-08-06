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



function checkp1() {
    var n = document.getElementById('nump1').value;
    if (n < 0) {
        document.getElementById('outp1').value = "The number is negetive";
    }
    else if (n > 0) {
        document.getElementById('outp1').value = "The number is positive";
    }
    else {
        document.getElementById('outp1').value = "The number is zero";
    }
}
function resetp1() {
    document.getElementById('nump1').value = "";
    document.getElementById('outp1').value = "";
}
function checkp2()
{
    var n=document.getElementById('nump2').value;
    if(n%2!=0)
    {
        document.getElementById('outp2').value="The number is odd";
    }
    else{
        document.getElementById('outp2').value="The number is even";
    }
}
function resetp2()
{
    document.getElementById('nump2').value="";
    document.getElementById('outp2').value="";
}
function checkp3()
{
    var y=document.getElementById('nump3').value;
    if(y%400==0)
    {
        document.getElementById('outp3').value=y+" is a Leap Year";
    }
    else if(y%4==0 && y%100!=0)
    {
        document.getElementById('outp3').value=y+" is a Leap Year";
    }
    else{
        document.getElementById('outp3').value=y+" is Not a Leap Year";
    }
}
function resetp3()
{
    document.getElementById('nump3').value="";
    document.getElementById('outp3').value="";
}
function checkp4()
{
    var a,b,c,max;
    a=document.getElementById('n1p4').value;
    b=document.getElementById('n2p4').value;
    c=document.getElementById('n3p4').value;
    max=a;
    if(b>max)
    {
        max=b;
    }
    if(c>max)
    {
        max=c;
    }

    document.getElementById('outp4').value="The largest number is "+max;
}
function resetp4()
{
    document.getElementById('n1p4').value="";
    document.getElementById('n2p4').value="";
    document.getElementById('n3p4').value="";
    document.getElementById('outp4').value="";
}