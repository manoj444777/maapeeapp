/*
 * $Id: validation.js 692578 2008-09-05 23:30:16Z davenewton $
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function clearErrorMessages(form) {
	clearErrorMessagesXHTML(form);
}

function clearErrorMessagesXHTML(form) {

}
function clearFieldErrorLabels(form) {
}
function clearFieldErrorMessages(form) {
}

function clearErrorLabels(form) {
	clearErrorLabelsXHTML(form);
}

function clearErrorLabelsXHTML(form) {

}

function addError(e, errorText) {
	addErrorXHTML(e, errorText);
}

var lastErrorField = '';

function addErrorXHTML(e, errorText) {

	if(e!=null && e!=undefined && e!=''){
		focusTab(e);			
		window.scroll(0,findPos(e));			
		calculatePos(e);
	}
	
	lastErrorField=e;		
	$('#validationErrorMsg').stop(0,function(){});
	
	$('#validationErrorMsg').show(0,function(){
		$('#validationErrorMsg').html(errorText);
		$('#validationErrorMsg').fadeOut(12000);
	});
	
	if(e==null||e==undefined||e==''){
		$('#validationErrorMsg')[0].style.top = '10px';
		$('#validationErrorMsg')[0].style.width = '50%';
		$('#validationErrorMsg')[0].style.left = '';
		$('#validationErrorMsg')[0].className="";
	}
	else{
		calculatePos(e);
		window.onscroll=function() { calculatePos(e, true) };
	}
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop -100];
    }
}

function calculatePos(e, scroll){

	if($('#validationErrorMsg')[0].className=='' && scroll==true){
		return;
	}
	var pos = $('[name="'+e.name+'"]').offset();
	/* var pos = $('#'+e.id).offset(); */
	var top = (pos.top - $('#validationErrorMsg')[0].offsetHeight - 15);
	$('#validationErrorMsg')[0].className="triangleBottom-isosceles";
	if(top < 0){
		top = pos.top + e.offsetHeight + 15;
		$('#validationErrorMsg')[0].className="triangleTop-isosceles";
	}
	pos.top = top;
	$('#validationErrorMsg').offset(pos);
	$('#validationErrorMsg')[0].style.width = '300px';
}

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft ;
        _y += el.offsetTop ;
        el = el.offsetParent;
    }
    return { top: _y -  $(document).scrollTop(), left: _x - $(document).scrollLeft()};
}


/* function addErrorXHTML(e, errorText) {
	alert(errorText);
} */

function isInteger(input) {

	for ( var i = 0; i < input.length; i++) {
		if (!(input.charAt(i) >= '0' && input.charAt(i) <= '9')) {
			return false;
		}
	}
	return true;
}

function checkDate(inputDate) {

	if (inputDate.replace(/^\\s+|\\s+$/g, '').length == 0) {
		return true;
	}

	var dateArray = inputDate.split("/");

	var isDateValid = true;

	if (dateArray.length == 3) {

		var dayOfDate = dateArray[0];
		var monthOfDate = dateArray[1];
		var yearOfDate = dateArray[2];

		if (isInteger(dayOfDate) && isInteger(monthOfDate)
				&& isInteger(yearOfDate) && dayOfDate.length == 2
				&& monthOfDate.length == 2 && yearOfDate.length == 4) {

			var tempDate = new Date(monthOfDate + "/" + dayOfDate + "/"
					+ yearOfDate);

			if (tempDate.getMonth() != monthOfDate - 1) {

				isDateValid = false;
			}
		} else {
			isDateValid = false;
		}
	} else {
		isDateValid = false;
	}

	return isDateValid;
}

function isFirstDateBefore(firstDate,secondDate){
	if((firstDate != null && firstDate != '') && (secondDate != null && secondDate != '')){		
		if(eval(firstDate.substring(6,10)) < eval(secondDate.substring(6,10))){
			return true;
		} else if(eval(firstDate.substring(6,10)) == eval(secondDate.substring(6,10))){
			if(eval(firstDate.substring(3,5)) < eval(secondDate.substring(3,5))){
				return true;
			} else if(eval(firstDate.substring(3,5)) == eval(secondDate.substring(3,5))){
				if(eval(firstDate.substring(0,2)) < eval(secondDate.substring(0,2))){
					return true;
				} else if(eval(firstDate.substring(0,2)) == eval(secondDate.substring(0,2))){
					return true;
				} else {
					return false;
				}
			} else{
				return false;
			}
		} else {
			return false;
		}
	}else{
		return false;
	}
}


function isFirstDateBeforeOrEqual(firstDate,secondDate){
	if((firstDate != null && firstDate != '') && (secondDate != null && secondDate != '')){		
		if(eval(firstDate.substring(6,10)) < eval(secondDate.substring(6,10))){
			return true;
		} else if(eval(firstDate.substring(6,10)) == eval(secondDate.substring(6,10))){
			if(eval(firstDate.substring(3,5)) < eval(secondDate.substring(3,5))){
				return true;
			} else if(eval(firstDate.substring(3,5)) == eval(secondDate.substring(3,5))){
				if(eval(firstDate.substring(0,2)) < eval(secondDate.substring(0,2))){
					return true;
				} else {
					return false;
				}
			} else{
				return false;
			}
		} else {
			return false;
		}
	}else{
		return false;
	}
}

function checkFileSize(fileSize) {
	var browserName = navigator.userAgent;
	var fileIds ;
	if(navigator.userAgent.indexOf('MSIE 8.0')==-1){
	fileIds = document.forms[0].getElementsByClassName('fileUpload');
	}
	else{
		fileIds = document.forms[0].querySelectorAll('.fileUpload');	
	}
	var isArray = false;
	var sizeComputed = 0, maxFileSize = 52428800;
	if (!isNaN(fileSize) && fileSize != 0)
		maxFileSize = fileSize;

	if (document.getElementsByName('isFileSizeOk').length == 0) {
		var input = document.createElement("input");
		input.setAttribute("name", "isFileSizeOk");
		input.setAttribute("type", "hidden");
		input.setAttribute("value", "2");
		document.forms[0].appendChild(input);
	}
	if (document.getElementsByName('maxFileSize').length == 0) {
		var input = document.createElement("input");
		input.setAttribute("name", "maxFileSize");
		input.setAttribute("type", "hidden");
		input.setAttribute("value", fileSize);
		document.forms[0].appendChild(input);
	}
	if (fileIds.length > 0) {
		isArray = true;
	}
	var browserAccept = true;

	if (browserName.indexOf('MSIE') != -1) {

		try {
			var myActiveX = new ActiveXObject("Scripting.FileSystemObject");
			if (browserAccept) {
				if (isArray) {
					for ( var i = 0; i < fileIds.length; i++) {
						if (fileIds[i].value != '')
							sizeComputed = sizeComputed
									+ myActiveX.getFile(fileIds[i].value).size;
					}
				} else {
					if (fileIds.value != '')
						sizeComputed = myActiveX.getFile(fileIds.value).size;
				}
			}
		} catch (e) {
			browserAccept = false;
		}
	} else {
		try {

			if (isArray) {
				for ( var i = 0; i < fileIds.length; i++) {
					var tempSize=0;
					if (fileIds[i].files.length != 0){
						tempSize=fileIds[i].files[0].size;
						sizeComputed = sizeComputed + tempSize;
					}

					if (isNaN(sizeComputed)) {
						browserAccept = false;
						break;
					}
					insertFileSize(i,tempSize);
				}
			} else {
				var tempSize=0;
				if (fileIds.files.length != 0){
					tempSize=fileIds.files[0].size;
					sizeComputed = sizeComputed +tempSize ;
					
				}
				if (isNaN(sizeComputed)) {
					browserAccept = false;
				}
				insertFileSize(0,tempSize);
				
			}
		} catch (e) {
			alert(e);
			browserAccept = false;
		}
	}
	if (browserAccept)
		if (sizeComputed > maxFileSize) {
			sizeComputed=sizeComputed/(1024*1024);
			sizeComputed=(sizeComputed+'');
			if(sizeComputed.indexOf('.') != -1){
				sizeComputed=sizeComputed.substring(0,sizeComputed.indexOf('.')+4);
			}
			alert('The attachment upload is '+sizeComputed+' MB. All the attachments together submitted exceed 50MB.');
			document.getElementsByName('isFileSizeOk')[0].value = 0;
		} else if (sizeComputed != 0) {
			document.getElementsByName('isFileSizeOk')[0].value = 1;
		}

	/*if (!browserAccept) {
		if (document.getElementById('fileAppletDiv') == null
				|| document.getElementById('fileAppletDiv') == 'undefined') {
			var div = document.createElement("div");
			div.setAttribute("id", "fileAppletDiv");

			var newContent = document.createTextNode("");

			div.appendChild(newContent);

			document.forms[0].appendChild(div);
		}

		document.getElementById("fileAppletDiv").innerHTML = '<object	classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" codebase="http://java.sun.com/products/plugin/autodl/jinstall-1_4-windows-i586.cab#Version=1,4,0,0"						width="130" height="25" mayscript="true">		<param name="type" value="application/x-java-applet;version=1.4"></param>		<param name="code" value="FileUploadApplet"></param>		<param name="archive"	value="/e-Filing/DitApplet/FileUploadApplet.jar"></param>		<param name="mayscript" value="true"></param>			<param name="scriptable" value="true"></param>			<param name="fileNameField" value="uploadFile"></param>			<param name="certificationChainField" value="certificationChain"></param>			<param name="signatureField" value="signature"></param>		<param name="tokenType" value="tokenType"></param>			<param name="signButtonCaption" value="Sign with .PFX file"></param>		<comment> <embed					type="application/x-java-applet;version=1.4"	pluginspage="http://java.sun.com/products/plugin/index.html#download"		code="FileUploadApplet"		archive="/e-Filing/DitApplet/FileUploadApplet.jar" width="130"			height="25" mayscript="true" scriptable="true"		uploadform="mainForm" filenamefield="uploadFile"			certificationchainfield="certificationChain"		signaturefield="signature" tokentype="tokenType"							signbuttoncaption="Sign selected file"></embed> <noembed>Document signing applet cannot be started because Java Plug-In version 1.6 or later is not installed.</noembed> </comment>		</object>';
	}*/

}
function countRowInTable(field,inField) {
	var count = 0;
	while (true) {
		if (document.getElementsByName(field+'['+ count + '].'+inField).length != 0)
			count++;
		else
			break;

	}
	return count;
}

function getCurDate()
{
	
	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;

    var yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} 
    
    var today = dd+'/'+mm+'/'+yyyy;
    
    return today;
}

function curDateCompare(DateA, DateB) {     // this function is good for dates > 01/01/1970

    var a = new Date(DateA.substring(0,2),DateA.substring(3,5),DateA.substring(6,10));
    var b = new Date(DateB.substring(0,2),DateB.substring(3,5),DateB.substring(6,10));

    var msDateA = Date.UTC(a.getFullYear(), a.getMonth()+1, a.getDate());
    var msDateB = Date.UTC(b.getFullYear(), b.getMonth()+1, b.getDate());

    if (parseFloat(msDateA) < parseFloat(msDateB))
      return true;  
    
      return false;  
}






////////////////


function requiredCheckV1(field,error){
			
			var tempValLen =field.value.replace(/^\s+|\s+$/g, '').length;
			
			if ( (field.value != null) && ((field.value == '') || (tempValLen == 0))) {
				
				addErrorV1(field, error);
				return true;
			}

}

function addErrorV1(e, errorText) {
    addErrorXHTMLV1(e, errorText);
}



function addErrorXHTMLV1(e, errorText) {

    try {
        var row = (e.type ? e : e[0]);

        while(row.nodeName.toUpperCase() != "TD") {
            row = row.parentNode;
		}

		//row.setAttribute("class", "errorsBg");
		//row.setAttribute("className", "errorsBg"); //ie hack cause ie does not support setAttribute


		var nodeList = row.childNodes;

		for (var i = 0; i < nodeList.length; i++) {

			var node = nodeList[i];
			if (node.nodeName == 'DIV') {

				var div = node;

				if (div.getAttribute("errorFor") == row.id ) {

	
					div.innerHTML = errorText;
					return;
					/*
					var divNodeList = div.childNodes;

					for (var i = 0; i < divNodeList.length; i++) {

						var spanElement = divNodeList[i];

						if (spanElement.nodeName == 'SPAN') { 

								spanElement.innerHTML = errorText;
								return;
						}

					}
					*/

				}

			};

		}


        var error = document.createTextNode(errorText);
        var div = document.createElement("div");
        var span = document.createElement("span");

		div.setAttribute("width", "100%");
		div.setAttribute("class", "error");
		div.setAttribute("className", "error"); //ie hack cause ie does not support setAttribute

		div.setAttribute("errorFor", e.id); //ie hack cause ie does not support setAttribute
		
		/*
        span.setAttribute("class", "errorMessage");
        span.setAttribute("className", "errorMessage"); //ie hack cause ie does not support setAttribute

        span.appendChild(error);
        div.appendChild(span); */
		
		div.appendChild(error); 
		
		row.insertBefore(div,nodeList[0]);


    } catch (e) {
        alert('Exception :- ' + e);
    }

}



function clearFieldErrorMessagesV1(field) {

    clearFieldErrorMessagesXHTMLV1(field);
}


function clearFieldErrorMessagesXHTMLV1(e) {

		var row = (e.type ? e : e[0]);

        while(row.nodeName.toUpperCase() != "TD") {
            row = row.parentNode;
		}

		
		var nodeList = row.childNodes;

		for (var i = 0; i < nodeList.length; i++) {

			var node = nodeList[i];
			if (node.nodeName == 'DIV') {

				var div = node;


				if (div.getAttribute("errorFor") == e.id  || div.getAttribute("errorFor") == 'undefined' ) {

					var divNodeList = div.childNodes;

							if (div.getAttribute("errorFor") == e.id  || div.getAttribute("errorFor") == 'undefined' ) {


								div.innerHTML = "";
								div.className="";
								return true;

				}

				}

			};

		}
	
}



function clearFieldErrorLabelsV1(field) {

    clearFieldErrorLabelsXHTML(field);
}


function clearFieldErrorLabelsXHTMLV1(field) {
	try
	{
		
	var td = field.parentNode.parentNode;
    //td.setAttribute("class", "tdNormal");
	//td.setAttribute("className", "tdNormal");
	}
	catch (e)
	{
		alert (e);
	}

}

function addErrorV1(e, errorText) {
    addErrorXHTMLV1(e, errorText);
}

function addErrorXHTMLV1(e, errorText) {

    try {
        var row = (e.type ? e : e[0]);

        while(row.nodeName.toUpperCase() != "TD") {
            row = row.parentNode;
		}

		//row.setAttribute("class", "errorsBg");
		//row.setAttribute("className", "errorsBg"); //ie hack cause ie does not support setAttribute


		var nodeList = row.childNodes;

		for (var i = 0; i < nodeList.length; i++) {

			var node = nodeList[i];
			if (node.nodeName == 'DIV') {

				var div = node;

				if (div.getAttribute("errorFor") == row.id ) {

	
					div.innerHTML = errorText;
					return;
					/*
					var divNodeList = div.childNodes;

					for (var i = 0; i < divNodeList.length; i++) {

						var spanElement = divNodeList[i];

						if (spanElement.nodeName == 'SPAN') { 

								spanElement.innerHTML = errorText;
								return;
						}

					}
					*/

				}

			};

		}


        var error = document.createTextNode(errorText);
        var div = document.createElement("div");
        var span = document.createElement("span");

		div.setAttribute("width", "100%");
		div.setAttribute("class", "error");
		div.setAttribute("className", "error"); //ie hack cause ie does not support setAttribute

		div.setAttribute("errorFor", e.id); //ie hack cause ie does not support setAttribute
		
		/*
        span.setAttribute("class", "errorMessage");
        span.setAttribute("className", "errorMessage"); //ie hack cause ie does not support setAttribute

        span.appendChild(error);
        div.appendChild(span); */
		
		div.appendChild(error); 
		
		row.insertBefore(div,nodeList[0]);


    } catch (e) {
        alert('Exception :- ' + e);
    }

}

function regexCheckV1(field,error,regEx){

			var row = (field.type != null) ? field : field[0];
			
			if (row.value != null && !row.value.match(regEx)) {
				
				addErrorV1(row, error);
				return true;
			}

}
function UserBack(){
	var varRandNum = document.getElementsByName("requestId")[0].value;
	document.forms[0].action= "/e-Filing/MyAccount/MyAccountHome.html?ID="+varRandNum;
	document.forms[0].onsubmit ="";
	document.forms[0].submit();
}
