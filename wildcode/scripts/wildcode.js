function moveto(number) {
	var content="content"+number.toString();
	var elmnt = document.getElementById(content);
	elmnt.scrollIntoView({behavior: "smooth", block: "center"});
}


var initSubject='',initBody='';
 

function submitHandler(){
    var to = "cosmin.pirvu@wildcodeschool.de";
    var name = nameText.value;
    var email = emailText.value;
    var subject = subText.value;

    var body = ""+bodyText.value+'%0A%0A%0A';
        body += "From："+nameText.value+'%0A';
        body += "Email："+emailText.value+'%0A';

    mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body;
    mailTo.click();
}
function showMap(){
	document.getElementById('map').style.backgroundImage="URL('./images/MAP.jpg')";
}
function hideMap(){
	document.getElementById('map').style.backgroundImage="none";
}