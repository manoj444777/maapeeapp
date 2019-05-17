function coalesce(value){
	if (isNaN(value) || value=='') {
		value = '0';
	}
	return value;
}

function isNVL(value){
	if (value == null || isNaN(value) || value=='') {
		return '0';
	}else{
		return value;
	}
}

function checkFirstDateBefore(firstDate,secondDate){
	if(eval(firstDate.substring(6,10)) < eval(secondDate.substring(6,10))){
		return true;
	}
	else if(eval(firstDate.substring(6,10)) == eval(secondDate.substring(6,10))){

		if(eval(firstDate.substring(3,5)) < eval(secondDate.substring(3,5))){
			return true;
		}
		else if(eval(firstDate.substring(3,5)) == eval(secondDate.substring(3,5))){
			if(eval(firstDate.substring(0,2)) < eval(secondDate.substring(0,2))){
				return true;
			}
			else if(eval(firstDate.substring(0,2)) == eval(secondDate.substring(0,2))){
				return true;
			}
			else
			{
				return false;
			}
		}
		else{
			return false;
		}
	}
	else {
	return false;
	}
}

function calcNoOfMonths(currentDate , startDate ){
	var currentYear = currentDate.substring(6,10); var startYear = startDate.substring(6,10);
	var currentMonth = currentDate.substring(3,5); var startMonth = startDate.substring(3,5);
	var noOfMonths = parseInt('0',10);
	if(checkFirstDateBefore(currentDate,startDate)) {
		noOfMonths = parseInt('0',20);
	}else {
		if(parseInt(currentYear ,10) == (parseInt(startYear ,10) + parseInt('1' ,10))){
			if(parseInt(currentMonth ,10) < parseInt(startMonth ,10)){
				noOfMonths = parseInt('12' ,10) - (parseInt(startMonth ,10) -parseInt(currentMonth ,10)) + parseInt('1' ,10);
			} else{
				noOfMonths =  parseInt('12' ,10) + (parseInt(currentMonth ,10) - parseInt(startMonth ,10)) + parseInt('1' ,10);
			}
		} else if(parseInt(currentYear ,10) == parseInt(startYear ,10)){
			noOfMonths = parseInt(currentMonth ,10) - parseInt(startMonth ,10) + parseInt('1' ,10);
		} else{

			if(parseInt(currentMonth ,10) < parseInt(startMonth ,10)){
				noOfMonths =  Math.round((eval(parseInt(currentYear ,10) -parseInt(startYear ,10) - parseInt('1' ,10)) * parseInt('12' ,10))) + parseInt('12',10) - parseInt(startMonth ,10) + parseInt(currentMonth ,10) + parseInt('1' ,10);
			} else if(parseInt(currentMonth ,10) > parseInt(startMonth ,10)){

				noOfMonths =  Math.round(((parseInt(currentYear ,10) -parseInt(startYear ,10)) * parseInt('12' ,10))) + parseInt(currentMonth ,10) -parseInt(startMonth ,10) + parseInt('1' ,10);
			} else{
				noOfMonths =  Math.round(((parseInt(currentYear ,10) -parseInt(startYear ,10)) * parseInt('12' ,10))) + parseInt('1' ,10);
			}
		}
	}
	return noOfMonths;
}

function calcNoOfMonthsOnline(currentDate , startDate ){
	var currentYear = currentDate.substring(6,10); var startYear = startDate.substring(6,10);
	var currentMonth = currentDate.substring(3,5); var startMonth = startDate.substring(3,5);
	var noOfMonths = parseInt('0',10);

	if(currentYear==startYear &&  currentMonth==startMonth &&
		currentDate.substring(0,2) == startDate.substring(0,2)){

		noOfMonths = parseInt('1',20);

	}else if(checkFirstDateBefore(currentDate,startDate)) {

		noOfMonths = parseInt('0',20);

	}else {
		if(parseInt(currentYear ,10) == (parseInt(startYear ,10) + parseInt('1' ,10))){
			if(parseInt(currentMonth ,10) < parseInt(startMonth ,10)){
				noOfMonths = parseInt('12' ,10) - (parseInt(startMonth ,10) -parseInt(currentMonth ,10)) + parseInt('1' ,10);
			} else{
				noOfMonths =  parseInt('12' ,10) + (parseInt(currentMonth ,10) - parseInt(startMonth ,10)) + parseInt('1' ,10);
			}
		} else if(parseInt(currentYear ,10) == parseInt(startYear ,10)){
			noOfMonths = parseInt(currentMonth ,10) - parseInt(startMonth ,10) + parseInt('1' ,10);
		} else{

			if(parseInt(currentMonth ,10) < parseInt(startMonth ,10)){
				noOfMonths =  Math.round((eval(parseInt(currentYear ,10) -parseInt(startYear ,10) - parseInt('1' ,10)) * parseInt('12' ,10))) + parseInt('12',10) - parseInt(startMonth ,10) + parseInt(currentMonth ,10) + parseInt('1' ,10);
			} else if(parseInt(currentMonth ,10) > parseInt(startMonth ,10)){

				noOfMonths =  Math.round(((parseInt(currentYear ,10) -parseInt(startYear ,10)) * parseInt('12' ,10))) + parseInt(currentMonth ,10) -parseInt(startMonth ,10) + parseInt('1' ,10);
			} else{
				noOfMonths =  Math.round(((parseInt(currentYear ,10) -parseInt(startYear ,10)) * parseInt('12' ,10))) + parseInt('1' ,10);
			}
		}
	}
	return noOfMonths;
}

function genderHiglight(element, startcolour, endcolour, time_elapsed) {
	var interval = 30;
	var steps = time_elapsed / interval;
	var red_change = (startcolour[0] - endcolour[0]) / steps;
	var green_change = (startcolour[1] - endcolour[1]) / steps;
	var blue_change = (startcolour[2] - endcolour[2]) / steps;
	var currentcolour = startcolour;
	var stepcount = 0;
	element.style.backgroundColor = 'rgb(' + currentcolour.toString() + ')';
	 var timer = setInterval(function(){
		currentcolour[0] = parseInt(currentcolour[0] - red_change);
		currentcolour[1] = parseInt(currentcolour[1] - green_change);
		currentcolour[2] = parseInt(currentcolour[2] - blue_change);
		element.style.backgroundColor = 'rgb(' + currentcolour.toString() + ')';
		stepcount += 1;
		if (stepcount >= steps) {
			element.style.backgroundColor = 'rgb(' + endcolour.toString() + ')';
			clearInterval(timer);
		}
	}, interval);
}

//calculates age as of 31-MAR-(assYr)

function calcAgeWithAsstYear(dob,assessmentYear) {

	var birth_year = parseInt(dob.value.substring(6,10) ,10);
	var birth_month = parseInt(dob.value.substring(3,5) ,10);
	var	birth_day = parseInt(dob.value.substring(0,2) ,10);

	var today_year = parseInt(assessmentYear ,10);
	var today_month = parseInt('3' ,10);
	var today_day = parseInt('31' ,10);

	age = today_year - birth_year;
	if( eval(today_month) <  eval(birth_month)){
		age--;
	} else if( (eval(today_month) == eval(birth_month)) && ( eval(today_day) < eval(birth_day) )){
		age--;
	}

	return age;
}

function calcAgeWithAsstYearPost2015(dob,assessmentYear) {

	var birth_year = parseInt(dob.value.substring(6,10) ,10);
	var birth_month = parseInt(dob.value.substring(3,5) ,10);
	var	birth_day = parseInt(dob.value.substring(0,2) ,10);

	var today_year = parseInt(assessmentYear ,10);
	var today_month = parseInt('4' ,10);
	var today_day = parseInt('01' ,10);

	age = today_year - birth_year;
	if( eval(today_month) <  eval(birth_month)){
		age--;
	} else if( (eval(today_month) == eval(birth_month)) && ( eval(today_day) < eval(birth_day) )){
		age--;
	}

	return age;
}
function calcAgeCommon(dob) {
	var assessmentYear = eval(parseInt(document.getElementsByName('customReturnType')[0].value.split('_')[1],10));
	var birth_year = parseInt(dob.value.substring(6,10) ,10);
	var birth_month = parseInt(dob.value.substring(3,5) ,10);
	var	birth_day = parseInt(dob.value.substring(0,2) ,10);

	var today_year = parseInt(assessmentYear ,10);
	var today_month = parseInt('3' ,10);
	var today_day = parseInt('31' ,10);

	age = today_year - birth_year;
	if( eval(today_month) <  eval(birth_month)){
		age--;
	} else if( (eval(today_month) == eval(birth_month)) && ( eval(today_day) < eval(birth_day) )){
		age--;
	}

	return age;
}


function changeSerialNumber(){
	var table = document.getElementById('scheduleBA');
	var total = table.rows.length;
	for(var i=1; i < (total-1); i++){
	    if(i > 0){
	        table.rows[i].cells[0].innerHTML = i+1;
	    }
	}

}

function addRowToTable(tableId, noOfRow, last) {

	var isRowBlank = checkRowBlank(tableId, noOfRow, last);
	if(isRowBlank == false){
		var tab = document.getElementById(tableId);
		var rowCount = tab.rows.length;
		var clone = tab.getElementsByTagName('tr')[rowCount - noOfRow].cloneNode(true);

		var lastRow = tab.getElementsByTagName('tr')[rowCount - last];

		var allInputTags = clone.getElementsByTagName('input');
		var serialNumber = eval(clone.getElementsByTagName('td')[0].innerHTML);
		clone.getElementsByTagName('td')[0].innerHTML = serialNumber + 1;
		if(tableId == 'scheduleBA'){
			serialNumber = serialNumber -1;
		}

		for ( var i = 0; i < allInputTags.length; i++) {

			var classMme = allInputTags[i].getAttribute("class");
			var className = allInputTags[i].getAttribute("className");

			if (classMme == "date_dummy_black hasDatepicker" || className ==  "date_dummy_black hasDatepicker" ) {
				allInputTags[i].id = allInputTags[i].id + serialNumber;
				allInputTags[i].setAttribute("className","date_dummy_black");
				allInputTags[i].setAttribute("class","date_dummy_black");
				saras  = allInputTags[i].id;

			}else if( classMme == "date_dummy_white hasDatepicker" || className ==  "date_dummy_white hasDatepicker"  ){
				allInputTags[i].id = allInputTags[i].id + serialNumber;
				allInputTags[i].setAttribute("className","date_dummy_white");
				allInputTags[i].setAttribute("class","date_dummy_white");
				saras  = allInputTags[i].id;
			}

			allInputTags[i].value='';
			var inputelem = allInputTags[i].name;
			var inputelemLen = inputelem.length;
			var index1 = inputelem.indexOf("[");
			var index2 = inputelem.indexOf("]");
			var str1 = inputelem.substring(0, index1);

			var str3 = inputelem.substring(index2 + 1, inputelemLen);

			var name = str1 + '[' + serialNumber + ']' + str3;

			allInputTags[i].name = name;
			allInputTags[i].id=name.replace(/\./gi,"_").replace(/\[/gi,"_").replace(/\]/gi,"_");
		}
		var selectTags = clone.getElementsByTagName('select');

		for ( var i = 0; i < selectTags.length; i++) {

			var inputelem = selectTags[i].name;
			var inputelemLen = inputelem.length;
			var index1 = inputelem.indexOf("[");
			var index2 = inputelem.indexOf("]");
			var str1 = inputelem.substring(0, index1);

			var str3 = inputelem.substring(index2 + 1, inputelemLen);

			var name = str1 + '[' + serialNumber + ']' + str3;

			selectTags[i].name = name;
			selectTags[i].id=name.replace(/\./gi,"_").replace(/\[/gi,"_").replace(/\]/gi,"_");

			var selectElem = selectTags[i];
			selectElem[0].selected = true;
		}

		var textareaTags = clone.getElementsByTagName('textarea');

		for ( var i = 0; i < textareaTags.length; i++) {
			var textareaElem = textareaTags[i].name;
			var textareaElemLen = textareaElem.length;
			var index1 = textareaElem.indexOf("[");
			var index2 = textareaElem.indexOf("]");
			var str1 = textareaElem.substring(0, index1);
			var str3 = textareaElem.substring(index2 + 1, textareaElemLen);
			var name = str1 + '[' + serialNumber + ']' + str3;
			textareaTags[i].name = name;
			textareaTags[i].id=name.replace(/\./gi,"_").replace(/\[/gi,"_").replace(/\]/gi,"_");
			textareaTags[i].value = '';
		}

		try {
			var parentNode = lastRow.parentNode;
			parentNode.insertBefore(clone, lastRow);
		}catch (e) {
			alert ('uma exceptoin :  ' + e );
		}

		var tab = document.getElementById(tableId);
		var rowCount = tab.rows.length;
		var lastRow = tab.getElementsByTagName('tr')[rowCount - last];
		var allInputTags = clone.getElementsByTagName('input');

		for ( var i = 0; i < allInputTags.length; i++) {

			var classMme = allInputTags[i].getAttribute("class");
			var className = allInputTags[i].getAttribute("className");


			if (classMme == "date_dummy_black" || className ==  "date_dummy_black" ||
				classMme == "date_dummy_white" || className ==  "date_dummy_white" ) {

				saras  = allInputTags[i].id;

					$(function() {
					$( "#"+saras ).datepicker({
						changeMonth: true,
						changeYear: true,
						yearRange: "-100:+5",
						dateFormat: "dd/mm/yy",
						buttonText: "Choose",
						showOtherMonths: true,
						selectOtherMonths: true
					});
				})
			}
		}
	}else{
		addErrorXHTML('', 'Please fill in all the mandatory fields in the last row before adding another row.');
	}
}

function checkRowBlank(tableId, noOfRow, last){
	var tab = document.getElementById(tableId);
	var rowCount = tab.rows.length;
	var trOfLastRow = tab.getElementsByTagName('tr')[rowCount - noOfRow];
	var allInputTags = trOfLastRow.getElementsByTagName('input');
	var allSelectTags = trOfLastRow.getElementsByTagName('select');
	var allTextareaTags = trOfLastRow.getElementsByTagName('textarea');
	var isRowBlank = true;

	for ( var i = 0; i < allInputTags.length; i++) {
		if(!allInputTags[i].name.match(".chosenCheckBox$")){
			if(allInputTags[i] != undefined || allInputTags[i].value != null){
				if((allInputTags[i].getAttribute("readonly") == null ) ||
					(allInputTags[i].getAttribute("readonly") != 'readonly')){
						if( allInputTags[i].parentNode.style.display != "none"  && allInputTags[i].getAttribute('type')!='hidden' ){
							var str = allInputTags[i].value.replace(/^\s+|\s+$/g,'');
							if(str!=''){
								isRowBlank = false;
								break;
							}
						}
				}
			}
		}
	}

	for ( var i = 0; i < allTextareaTags.length; i++) {
		if(allTextareaTags[i] != undefined || allTextareaTags[i].value != null ){
			var str = allTextareaTags[i].value.replace(/^\s+|\s+$/g,'');
			if(str!=''){
				isRowBlank = false;
				break;
			}
		}
	}

	for ( var i = 0; i < allSelectTags.length; i++) {
		if(allSelectTags[i].value != '-1' && allSelectTags[i].value != ''){
			isRowBlank = false;
			break;
		}
	}

	return isRowBlank;
}

function displayArrow(currentPage,totalPage) {
		if (currentPage == totalPage) {
			document.getElementById("nextPageId1").style.display = "none";
			document.getElementById("nextPageId2").style.display = "none";
			document.getElementById("nextPageDisable1").style.display = "block";
			document.getElementById("nextPageDisable2").style.display = "block";
			document.getElementById("prevPageId1").style.display = "block";
			document.getElementById("prevPageId2").style.display = "block";
			document.getElementById("prevPageDisable1").style.display = "none";
			document.getElementById("prevPageDisable2").style.display = "none";
		}
		if (currentPage == 1) {

			document.getElementById("nextPageId1").style.display = "block";
			document.getElementById("nextPageId2").style.display = "block";
			document.getElementById("nextPageDisable1").style.display = "none";
			document.getElementById("nextPageDisable2").style.display = "none";
			document.getElementById("prevPageId1").style.display = "none";
			document.getElementById("prevPageId2").style.display = "none";
			document.getElementById("prevPageDisable1").style.display = "block";
			document.getElementById("prevPageDisable2").style.display = "block";
		}

		if((parseInt(currentPage,10) < parseInt(totalPage,10)) && (currentPage > 1)){
			document.getElementById("nextPageId1").style.display = "block";
			document.getElementById("nextPageId2").style.display = "block";
			document.getElementById("nextPageDisable1").style.display = "none";
			document.getElementById("nextPageDisable2").style.display = "none";
			document.getElementById("prevPageId1").style.display = "block";
			document.getElementById("prevPageId2").style.display = "block";
			document.getElementById("prevPageDisable1").style.display = "none";
			document.getElementById("prevPageDisable2").style.display = "none";
		}

	}

function showPage(page) {

	var currentPage=document.getElementById("currentPage").value;
	var totalPage=document.getElementById("totalPage").value;
	hideAllPage(totalPage);
	document.getElementById(page).style.display = "block";
	document.getElementById(page + "btn").setAttribute("className","tab myCorner active");
	document.getElementById(page + "btn").setAttribute("class","tab myCorner active");
	currentPage=page.substring(4);
	document.getElementById("currentPage").value = currentPage;
	displayArrow(currentPage,totalPage);
	document.body.style.height="";
	document.body.style.height="auto";


	try{
		var len=document.getElementById(page).getElementsByTagName('h4').length;
		var attch=document.getElementById(page).getElementsByTagName('h4').item(0).innerHTML;
		if(len > 1){
			attch=attch+document.getElementById(page).getElementsByTagName('h4').item(1).innerHTML;
		}
		if(attch.indexOf("Attachment") !=-1){
			addErrorXHTML('','Please fill all the mandatory fields before selecting the attachments');
		}

		if(document.getElementById(page + "btn").innerHTML.indexOf("TDS")!=-1){
			alert(':: Please verify the prefilled TAN details and the amount of credit as available in your form 16 and 26AS before submitting the form.'+
			'\n\n:: Please verify the prefilled Tax Payment'+
			'details(BSR code, Challan details and date of payment  and amount - not to be rounded off) as available in your form 26AS before submitting the form.');
		}

	}catch(e){}
}

function gotoNextPage() {
	var currentPage=document.getElementById("currentPage").value;
	document.getElementById("currentPage").value=++currentPage;
	var goTopage = 'page' + currentPage;
	showPage(goTopage);
}

function gotoPrevPage() {
	var currentPage=document.getElementById("currentPage").value;
	document.getElementById("currentPage").value=--currentPage;

	var goTopage = 'page' + currentPage;
	showPage(goTopage);

}

function hideAllPage(totalPage) {
	var v = 0;
	for (v = 1; v <= totalPage; v++) {
		document.getElementById("page" + v).style.display = "none";
		document.getElementById("page" + v + "btn").setAttribute(
				"className", "tab myCorner");
		document.getElementById("page" + v + "btn").setAttribute("class",
				"tab myCorner");
	}
}

function deleteRowTable(tableId , noOfHeader , noOfFooter){
	try{
		var mytable = document.getElementById(tableId);
		var rowCount = mytable.rows.length;
		noOfHeader = parseInt(noOfHeader , 10);
		var isChecked=false;
		var listOfCheckBox = mytable.getElementsByTagName('input');

		var totalChecked = 0;
		for(var z=0; z<listOfCheckBox.length; z++){
			if(listOfCheckBox[z].name.match(".chosenCheckBox$")){
				if(listOfCheckBox[z].checked==true){
					totalChecked = eval( parseInt(totalChecked,10) +1);
					isChecked=true;
				}
			}
		}
		if(!isChecked){
			addErrorXHTML('','Please select a checkbox for deleting row');
		}

		for(var j=1; j<=totalChecked ; j++){      // iterate for total number of checkboxes
			var totalNoOfInput = mytable.getElementsByTagName('input');

			for(var z=0; z<totalNoOfInput.length; z++){
				if(totalNoOfInput[z].name.match(".chosenCheckBox$")){		// if its a chosenCheckBox element

					var akhilIndex1 = eval(parseInt(totalNoOfInput[z].name.indexOf('[') ,10)+1);
					var akhilIndex2 = eval(parseInt(totalNoOfInput[z].name.indexOf(']') ,10));
					var rowNumber = totalNoOfInput[z].name.substring(akhilIndex1, akhilIndex2);
					rowNumber = parseInt(rowNumber ,10);

					var myCurrtable = document.getElementById(tableId);
					var rowCurrCount = myCurrtable.rows.length;


					if(totalNoOfInput[z].checked==true){
						if((rowNumber!=0) || (rowNumber==0 &&  eval(rowCurrCount-noOfHeader-noOfFooter)>1) ){
							rowNumber = eval(parseInt(rowNumber,10) + noOfHeader);
							if(tableId == 'scheduleBA' && rowNumber == (rowCount-1)){
								mytable.deleteRow(rowNumber-1);
							}else{
								mytable.deleteRow(rowNumber);
							}
							//To Do - reset the name of row for all input , textarea, select
							var newTrList = mytable.getElementsByTagName('tr');
							var newTrListLength = eval(parseInt(newTrList.length ,10)-noOfFooter);
							for( var p=rowNumber; p < newTrListLength ; p++ ){	//iterate over all rows from delete point to second last row
								//set the serial number;

								if(noOfHeader==2){
									newTrList[p].getElementsByTagName('td')[0].innerHTML = parseInt(p-1,10);
								}else if(noOfHeader==1){
									newTrList[p].getElementsByTagName('td')[0].innerHTML = parseInt(p,10);
								}else if(noOfHeader==3){
									newTrList[p].getElementsByTagName('td')[0].innerHTML = parseInt(p-2,10);
								}

								if(tableId == 'scheduleBA' && rowNumber >=1){
									newTrList[p].getElementsByTagName('td')[0].innerHTML = parseInt(p+1,10);
								}


								var allInputTags = newTrList[p].getElementsByTagName('input');

								for(var zz=0; zz<allInputTags.length ; zz++ ){
									var index1= allInputTags[zz].name.indexOf('[');
									var index2= allInputTags[zz].name.indexOf(']');

									var str1 = allInputTags[zz].name.substring(0, index1);
									var str3 = allInputTags[zz].name.substring(index2 + 1, allInputTags[zz].name.length);

									allInputTags[zz].name = str1+'[' +eval(parseInt(p,10)-noOfHeader) +']'+str3;
								}

								var allSelectTags = newTrList[p].getElementsByTagName('select');

								for(var zz=0; zz<allSelectTags.length ; zz++ ){
									var index1= allSelectTags[zz].name.indexOf('[');
									var index2= allSelectTags[zz].name.indexOf(']');

									var str1 = allSelectTags[zz].name.substring(0, index1);
									var str3 = allSelectTags[zz].name.substring(index2 + 1, allSelectTags[zz].name.length);

									allSelectTags[zz].name = str1+'[' +eval(parseInt(p,10)-noOfHeader) +']'+str3;
								}

								var allTextAreaTags = newTrList[p].getElementsByTagName('textarea');

								for(var zz=0; zz<allTextAreaTags.length ; zz++ ){
									var index1= allTextAreaTags[zz].name.indexOf('[');
									var index2= allTextAreaTags[zz].name.indexOf(']');

									var str1 = allTextAreaTags[zz].name.substring(0, index1);
									var str3 = allTextAreaTags[zz].name.substring(index2 + 1, allTextAreaTags[zz].name.length);

									allTextAreaTags[zz].name = str1+'[' +eval(parseInt(p,10)-noOfHeader) +']'+str3;
								}
							}
							break;
						}else if((rowNumber==0)  && (eval(rowCurrCount-noOfHeader-noOfFooter)==1)){
							//Vacate the content if its first row

							var firstRow = mytable.getElementsByTagName('tr')[noOfHeader];

							var firstInputBox = firstRow.getElementsByTagName('input')[0];
							firstInputBox.checked = false;

							var allInputTags = firstRow.getElementsByTagName('input');
							for ( var i = 0; i < allInputTags.length; i++) {
								allInputTags[i].value = "";
							}
							var allSelectTags = firstRow.getElementsByTagName('select');
							for ( var i = 0; i < allSelectTags.length; i++) {
								var elem = allSelectTags[i];
								elem[0].selected = true;
							}
							var allTextAreaTags = firstRow.getElementsByTagName('textarea');
							for ( var i = 0; i < allTextAreaTags.length; i++) {
								allTextAreaTags[i].value = "";
							}
						}
					}
				}
			}
		}
	}catch(e){
		alert('exception caught in =' +e.stack );
	}
}

function focusTab(akhilFieldName){

        var tempField = document.getElementsByName(akhilFieldName)[0];
        callMeRec(tempField,akhilFieldName );
        return false;
}

function callMeRec(tempField,akhilFieldName){
try{
    var parentElem = tempField.parentNode;

		var parentElemId = parentElem.id;

            if(parentElemId != undefined){
		if(parentElemId.match("^page[0-9]{1,2}$")){
			if(document.getElementById('currentPage').value != parentElemId.substring(4))
			showPage(parentElemId);
			document.getElementsByName(akhilFieldName)[0].focus();
                     var element=document.getElementsByName(akhilFieldName)[0];

                 colorHighlight(element, [255,0,0], [211,211,211], 2500);
		}else{
			callMeRec(parentElem,akhilFieldName);
		}
            }else{
    callMeRec(parentElem,akhilFieldName);
}
		return true;
	}catch(e){
		//alert('exception caught in callMeRec =' + e);
	}

}

function getCurrentDate(){
		var dt = new Date();
		return ("00" + dt.getDate()).slice(-2) + '/' + ("00" + (dt.getMonth()+1)).slice(-2)+ '/' + dt.getFullYear() ;
}

function toUpperCase (element){

	element.value = element.value.toUpperCase();
}
function itrCheckForCorp(){

   var userId = document.getElementById("userId").value;
   if(userId.substring(3,4)=='C'){

	   alert("Corporate PAN cannot file ITR-1 and ITR-4S online. Please select an Individual PAN");
   }
}




function changeLanguage(language) {

	var form = document.forms[0];
	var varRandNum="";
	if( form.elements['requestId']==undefined){

	varRandNum = form.elements['ID'].value;

	}else{

	varRandNum = form.elements['requestId'].value;

	}
	form.action= "/e-Filing/OnlineItr/OnlineItrLang.html?ID="+varRandNum+"&onlineItrLang="+language;
	form.onsubmit ="";
	form.submit();

}

function loadFiledSectionPopup(){

	$("#filedSectionDialog").dialog({
		autoOpen : false,
		width : 750,
		modal : true,
	    dialogClass: 'noclose',
		closeOnEscape: false,
		show : {
			effect : "slide",
			duration : 500
		},
		hide : {
			effect : "fold",
			duration : 500
		}
	});
	$('#filedSectionDialog').dialog('open');

}

function loadFiledSectionPopup13(){

	$("#filedSectionDialog13").dialog({
		autoOpen : false,
		width : 750,
		modal : true,
	    dialogClass: 'noclose',
		closeOnEscape: false,
		show : {
			effect : "slide",
			duration : 500
		},
		hide : {
			effect : "fold",
			duration : 500
		}
	});
	$('#filedSectionDialog13').dialog('open');

}


function onlineItrSaveDraftAjaxePay() {
	setButtonStatus();
	var form = document.forms[0]
	var formId = form.id;
	var target = "ajaxMessage";
	$('.savebtn'). attr('disabled','disabled');

        $.ajax({
                type: "POST",
                url :  "/e-Filing/OnlineItr/OnlineItrSaveDraft.html",
                data: $("#"+formId).serialize(),
                beforeSend: function(){
					 $("#savingDraft").dialog("open");
                },
                success : function(data) {
                	if (data.indexOf("Login") != -1) {
    					$('#'+target).html("<html><body><p><b>Session expired. Please try again later.</b></p><body></html>");
    				} else {
    					$('#'+target).html(data);
    				}
                },
                complete: function(){
				 $("#savingDraft").dialog("close");
				 $('.savebtn').removeAttr('disabled');
                }
        });
	 $("#EpayButtonDialog1").dialog("close");
     submitEpaypopup1();
     return false;
}

function onlineItrSaveDraftAjax() {
	setButtonStatus();
	var form = document.forms[0]
	var formId = form.id;
	var target = "ajaxMessage";
	$('.savebtn'). attr('disabled','disabled');

        $.ajax({
                type: "POST",
                url :  "/e-Filing/OnlineItr/OnlineItrSaveDraft.html",
                data: $("#"+formId).serialize(),
                beforeSend: function(){
					 $("#savingDraft").dialog("open");
                },
                success : function(data) {
                	if (data.indexOf("Login") != -1) {
    					$('#'+target).html("<html><body><p><b>Session expired. Please try again later.</b></p><body></html>");
    				} else {
    					$('#'+target).html(data);
    				}
                },
                complete: function(){
				 $("#savingDraft").dialog("close");
				 $('.savebtn').removeAttr('disabled');
                }
        });

     return false;
}
function addRowToTableWithoutGrandTotal(tableId,maxRows) {

	var tableLength = document.getElementById(tableId).rows.length;
	tableLength=eval(parseInt(tableLength)-2);

	if(tableLength>=maxRows){
		alert('Only ' + maxRows + ' rows can be added');
	    return false;
	} else{
		addRowToTable(tableId,2,1);
	}
}

function addRowToTableWithoutGrandTotal(tableId) {
	addRowToTable(tableId,2,1);
}

function deleteRowTableWithGrandTotal(tableId) {
	deleteRowTable(tableId,1,2);
}

function deleteRowTableWithoutGrandTotal(tableId) {
	deleteRowTable(tableId,1,1);
}


function loadFiledSection20Popup(){

	$("#filedSection20Dialog").dialog({
		autoOpen : false,
		width : 750,
		modal : true,
	    dialogClass: 'noclose',
		closeOnEscape: false,
		show : {
			effect : "slide",
			duration : 500
		},
		hide : {
			effect : "fold",
			duration : 500
		}
	});
	$('#filedSection20Dialog').dialog('open');

}

function loadFiledSection13Popup(){

	$("#filedSection13Dialog").dialog({
		autoOpen : false,
		width : 750,
		modal : true,
	    dialogClass: 'noclose',
		closeOnEscape: false,
		show : {
			effect : "slide",
			duration : 500
		},
		hide : {
			effect : "fold",
			duration : 500
		}
	});
	$('#filedSection13Dialog').dialog('open');

}
function loadFiledSection15Popup(){

	$("#filedSection15Dialog").dialog({
		autoOpen : false,
		width : 750,
		modal : true,
	    dialogClass: 'noclose',
		closeOnEscape: false,
		show : {
			effect : "slide",
			duration : 500
		},
		hide : {
			effect : "fold",
			duration : 500
		}
	});
	$('#filedSection15Dialog').dialog('open');

}
function loadFiledSection16Popup(){

	$("#filedSection16Dialog").dialog({
		autoOpen : false,
		width : 750,
		modal : true,
	    dialogClass: 'noclose',
		closeOnEscape: false,
		show : {
			effect : "slide",
			duration : 500
		},
		hide : {
			effect : "fold",
			duration : 500
		}
	});
	$('#filedSection16Dialog').dialog('open');

}

function loadFiledSection14Popup(){

	$("#filedSection14Dialog").dialog({
		autoOpen : false,
		width : 750,
		modal : true,
	    dialogClass: 'noclose',
		closeOnEscape: false,
		show : {
			effect : "slide",
			duration : 500
		},
		hide : {
			effect : "fold",
			duration : 500
		}
	});
	$('#filedSection14Dialog').dialog('open');

}

function returnZeroIfNegative(value){
	if (value < 0) {
		return 0;
	}else{
	return value;
	}
}
function showEpay(){
	var form = $("input[name='returnType']").val();
	var itr="itr1";
	if(form === "ITR-4"|| form === 'ITR-4S'){
		itr='itr4S';
	}
	if(parseInt($("input[name='"+itr+".taxPaid.balTaxPayable']").val())>0){

		$('#epay').show();
		}
	else{
		$('#epay').hide();
	}
}
	function submitEpay(){
		var form = $("input[name='returnType']").val();
		var itr="itr1";
		if(form === "ITR-4"|| form === 'ITR-4S'){
			itr='itr4S';
		}
		var sessionId=$('#sessionId').val();
		var url="/e-Filing/MyAccount/payTaxItr.html?ID=";
		url = url+sessionId;
		var pan =  $("input[name='"+itr+".personalInfo.pan']").val();
		var amount = $("input[name='"+itr+".taxPaid.balTaxPayable']").val();
		url = url+'&pan='+pan+'&amount='+amount;
		window.location=url;
	}

function refreshTaxDetails(){
	$('#taxDetailsDialog').dialog('open');
}

function refreshTaxDetailsSubmit(){
	var varRandNum = document.forms[0].elements['requestId'].value;
	document.forms[0].action= "/e-Filing/OnlineItr/RefreshTaxDetails.html?ID="+varRandNum;
	document.forms[0].onsubmit ="";
	document.forms[0].submit();
}

function closeTaxDetailsDialog(){
	$('#taxDetailsDialog').dialog('close');
}

function backToITRPage() {

	var varRandNum="";
	if( document.forms[0].elements['requestId']==undefined||document.forms[0].elements['requestId'].value==""){
		varRandNum = document.forms[0].elements['ID'].value;
	}else{
		varRandNum = document.forms[0].elements['requestId'].value;
	}
    console.log('sessionrandomnumber'+varRandNum);
	document.forms[0].action= "/e-Filing/MyAccount/OnlineAndUploadItrLink.html?ID="+varRandNum;
	document.forms[0].onsubmit ="";
	document.forms[0].submit();
}


function submitEpaypopup() {
		var opt = {
			autoOpen: false,
			closeOnEscape : false,
			modal: true,
			width: 550,
			height:150,
			title: 'Save Draft'
		};
		document.getElementById("EpayButtonDialog1").style.display="";
		var theDialog = $("#EpayButtonDialog1").dialog(opt);
		theDialog.dialog("open");

	}

function submitEpaypopup1() {
	 $("#EpayButtonDialog1").dialog("close");
		epay_Button();
			var opt = {
				autoOpen: false,
				closeOnEscape : false,
				modal: true,
				width: 600,
				height:200,
				title: 'e-Pay Tax'
			};
			document.getElementById("EpayButtonDialog").style.display="";
			var theDialog = $("#EpayButtonDialog").dialog(opt);
			theDialog.dialog("open");
		
		}


function epay_Button(){
	var form = $("input[name='returnType']").val();
	var formYY = document.forms[0];
	var itr="itr1";
	if(form === "ITR-4"|| form === 'ITR-4S'){
		itr='itr4S';
	}
	var pan =  $("input[name='"+itr+".personalInfo.pan']").val();
	var amount = $("input[name='"+itr+".taxPaid.balTaxPayable']").val();
	var sessionId=$('#sessionId').val();
	var newUrl ="/e-Filing/OnlineItr/epayTaxItrJson.html?ID="+sessionId+"&pan="+pan+"&amount="+amount;
	var formId = formYY.id;
	$.ajax({
		
		type : "POST",	
		url : newUrl ,
		data : $("#" + formId).serialize(),
		success : function(data) {
				document.getElementById('confirmEpay').href=data.encodedURL;
			
		}
	
	 });
}

	function closeEpayButtonDialog() {

		$('#EpayButtonDialog').dialog('close');

	}
