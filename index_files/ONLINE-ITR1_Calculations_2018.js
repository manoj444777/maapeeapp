$(function(){
	$('#submitdwn').keydown(function (event) {
    var keypressed = event.keyCode || event.which;
    if (keypressed == 13) {
        $('#submitdwn').click();
    }
});
});
function calcGrossTotIncome(){
	totalSalary();
	annualValue();
	stdDeduction30PerCalc();
	calcGrossIncome();
	headHouseProperty();
	onchangeDed();
	}

function onchangeDed(){
	allRowsForPage5DonationsSaras('ded100PerWithoutQual',0,0);
	allRowsForPage5DonationsSaras('ded50WithoutQual',0,0);
	allRowsForPage5DonationsSaras('ded100Qual',0,0);
	allRowsForPage5DonationsSaras('ded50WithQual',0,0);
}
function calcGrossIncome() {
	try{
	var salaries = document.getElementsByName('itr1.itr1IncomeDeductions.incomeFromSal')[0]; salaries.value = coalesce(salaries.value) ;
	var incFrmHP = document.getElementsByName('itr1.itr1IncomeDeductions.totalIncomeOfHP')[0]; incFrmHP.value = coalesce(incFrmHP.value) ;

	var incFrmOthSrc = document.getElementsByName('itr1.itr1IncomeDeductions.incomeOthSrc')[0]; incFrmOthSrc.value = coalesce(incFrmOthSrc.value);
	var grossTotInc = document.getElementsByName('itr1.itr1IncomeDeductions.grossTotIncome')[0];

	var advanceTaxToDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.advanceTax')[0];  advanceTaxToDisplay.value = coalesce(advanceTaxToDisplay.value);
	var TDSToDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.tds')[0]; 			   TDSToDisplay.value = coalesce(TDSToDisplay.value);
	var SATtoDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.selfAssessmentTax')[0];  SATtoDisplay.value = coalesce(SATtoDisplay.value);
	var refundDue = document.getElementsByName('itr1.refund.refundDue')[0];  refundDue.value = coalesce(refundDue.value);
    var temp = eval(parseInt(salaries.value ,10)) + eval(parseInt(incFrmHP.value ,10)) + eval(parseInt(incFrmOthSrc.value,10));
	var typeOfHP = document.getElementsByName('itr1.itr1IncomeDeductions.typeOfHP')[0].value;

    if(typeOfHP == 'L' && incFrmHP.value < -200000){

		 // window.alert("To avail the benefit of carry forward and set off of loss, please use  ITR-2");
		  var temp =  eval(parseInt(salaries.value ,10)) + -200000 + eval(parseInt(incFrmOthSrc.value,10));
			 grossTotInc.value = temp;
		  }
		  else
		  {

		      var temp = eval(parseInt(salaries.value ,10)) + eval(parseInt(incFrmHP.value ,10)) + eval(parseInt(incFrmOthSrc.value,10));
			  grossTotInc.value = temp;
		 }


	dedUndVIA();
	}catch(e){
	}
}

function dedUndVIA(){
	var salaries = document.getElementsByName('itr1.itr1IncomeDeductions.incomeFromSal')[0]; salaries.value = coalesce(salaries.value);
	var incFrmHP = document.getElementsByName('itr1.itr1IncomeDeductions.totalIncomeOfHP')[0].value; incFrmHP = coalesce(incFrmHP) ;
	var incFrmOthSrc = document.getElementsByName('itr1.itr1IncomeDeductions.incomeOthSrc')[0].value; incFrmOthSrc = coalesce(incFrmOthSrc);
	var grossTotInc = document.getElementsByName('itr1.itr1IncomeDeductions.grossTotIncome')[0].value;
	var gIncome=document.getElementsByName('itr1.itr1IncomeDeductions.grossTotIncome')[0].value;
	var salary = document.getElementsByName('itr1.itr1IncomeDeductions.salary')[0]; salary.value = coalesce(salary.value);
	var alwnsNotExempt = document.getElementsByName('itr1.itr1IncomeDeductions.alwnsNotExempt')[0]; alwnsNotExempt.value = coalesce(alwnsNotExempt.value);
	var profitSalary = document.getElementsByName('itr1.itr1IncomeDeductions.profitsInSalary')[0]; profitSalary.value = coalesce(profitSalary.value);
	var total = eval(parseInt(salary.value,10)) +  eval(parseInt(alwnsNotExempt.value,10)) + eval(parseInt(profitSalary.value,10));
	if( parseInt(grossTotInc ,10) <0 ){
		 grossTotInc = parseInt(0,10);
		}


	//var residentialStatus  = document.getElementsByName('itr1.filingStatus.residentialStatus')[0].value;

	var sec80C = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80C_Usr')[0].value; sec80C = coalesce(sec80C);
	var sec80CsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80C')[0];

	var sec80CCC = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCC_Usr')[0].value; sec80CCC = coalesce(sec80CCC);
	var sec80CCCsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCC')[0];

	var sec80CCDempeContr = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCD_Usr')[0].value; sec80CCDempeContr = coalesce(sec80CCDempeContr);
	var sec80CCDempeContrsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCD')[0];

	var sec80CCD1B = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCD1B_Usr')[0].value; sec80CCD1B = coalesce(sec80CCD1B);
	var sec80CCD1BsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCD1B')[0];

	var sec80CCDemprContr = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCDEmployer_Usr')[0].value; sec80CCDemprContr = coalesce(sec80CCDemprContr);
	var sec80CCDemprContrsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCDEmployer')[0];

	//var sec80D = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80D_Usr')[0].value; sec80D = coalesce(sec80D);

	var sec80DA = document
	.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DHealthInsurancePremiumUsr')[0];
	sec80DA.value = coalesce(sec80DA.value);

	var sec80DB = document
	.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DMedicalExpenditureUsr')[0];
	sec80DB.value = coalesce(sec80DB.value);

	var sec80DC = document
	.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DPreventiveHealthCheckUpUsr')[0];
	sec80DC.value = coalesce(sec80DC.value);

	var sec80DsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80D')[0];

	var sec80DD = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DD_Usr')[0].value; sec80DD = coalesce(sec80DD);
	var sec80DDsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80DD')[0];

	var sec80DDB = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DDB_Usr')[0].value; sec80DDB = coalesce(sec80DDB);
	var sec80DDBsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80DDB')[0];

	var sec80E = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80E_Usr')[0].value; sec80E = coalesce(sec80E);
	var sec80EsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80E')[0];

	var sec80EE = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80EE_Usr')[0].value; sec80EE = coalesce(sec80EE);
	var sec80EEsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80EE')[0];

	var sec80G = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80G_Usr')[0]; sec80G.value = coalesce(sec80G.value);
	var sec80GsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80G')[0];

	var sec80GG = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80GG_Usr')[0].value; sec80GG = coalesce(sec80GG);
	var sec80GGsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80GG')[0];

	var sec80GGA = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80GGA_Usr')[0].value; sec80GGA = coalesce(sec80GGA);
	var sec80GGAsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80GGA')[0];

	var sec80GGC = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80GGC_Usr')[0].value; sec80GGC = coalesce(sec80GGC);
	var sec80GGCsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80GGC')[0];

	var sec80U = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80U_Usr')[0].value; sec80U = coalesce(sec80U);
	var sec80UsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80U')[0];

	var sec80CCG = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCG_Usr')[0].value; sec80CCG = coalesce(sec80CCG);
	var sec80CCGsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCG')[0];

	var sec80RRB = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80RRB_Usr')[0].value; sec80RRB = coalesce(sec80RRB);
	var sec80RRBsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80RRB')[0];

	var sec80QQB = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80QQB_Usr')[0].value; sec80QQB = coalesce(sec80QQB);
	var sec80QQBsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80QQB')[0];

	var sec80TTA = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80TTA_Usr')[0].value; sec80TTA = coalesce(sec80TTA);
	var sec80TTAsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80TTA')[0];


	// CHECK FOR 80C
	if(parseInt(grossTotInc,10)> eval('100000')){

		if( parseInt(sec80C,10) > eval('150000')) {
			sec80CsysCalc.value = '150000' ;
		} else {
			sec80CsysCalc.value = parseInt(sec80C,10);
		}

	}else{

		if( parseInt(sec80C,10) > eval(grossTotInc)) {
			sec80CsysCalc.value = grossTotInc ;
		} else {
			sec80CsysCalc.value = parseInt(sec80C,10);
		}
	}

	sec80CsysCalc.value   =Math.min(sec80CsysCalc.value ,grossTotInc);
	// CHECK FOR 80CCC
	if(parseInt(grossTotInc,10)> eval('100000')){
		if( parseInt(sec80CCC,10) > eval('150000')) {
			sec80CCCsysCalc.value = '150000' ;
		} else {
			sec80CCCsysCalc.value = parseInt(sec80CCC,10);
		}

		}else{

			if( parseInt(sec80CCC,10) > parseInt(grossTotInc)) {
				sec80CCCsysCalc.value = grossTotInc ;
			} else {
				sec80CCCsysCalc.value = parseInt(sec80CCC,10);
			}
		}

	sec80CCCsysCalc.value  =Math.min(sec80CCCsysCalc.value ,grossTotInc);
	// CHECK FOR 80CCD (EMPLOYER CONTRIBUTIION)
	var temp = Math.round(eval(parseInt(total,10)) * eval('0.10'));
	if(temp > 0)
	{
	if( parseInt(sec80CCDemprContr,10) > temp ) {
		sec80CCDemprContrsysCalc.value = temp ;
	} else {
	    sec80CCDemprContrsysCalc.value = parseInt(sec80CCDemprContr,10);
	}
    }else {
	   sec80CCDemprContrsysCalc.value= parseInt('0',10);
	}
	// CHECK FOR 80CCD1B
	if( parseInt(grossTotInc ,10) >0 ){
			if( parseInt(sec80CCD1B,10) > eval('50000')){
				sec80CCD1BsysCalc.value = '50000';
			} else {
				sec80CCD1BsysCalc.value =  parseInt(sec80CCD1B,10);
			}
	}
	else {
		sec80CCD1BsysCalc.value= parseInt('0',10);
		}
	// CHECK FOR 80CCD(EMPLOYEE)
      //  var emplrCat = document.getElementsByName('itr1.personalInfo.employerCategory')[0].value;
		var salUppLimit = Math.round(eval(parseInt(total,10)) * eval('0.10'));
		var gtiUppLimit = Math.round(eval(parseInt(coalesce(grossTotInc),10)) * eval('0.20'));// 2018 changes 10% to 20%
		if( parseInt(grossTotInc ,10) >0 ){
		if(parseInt(salaries.value) == parseInt('0' , 10)){
			//if(emplrCat !='-1'){
				if(gtiUppLimit > parseInt('150000' ,10)){
					if( parseInt(sec80CCDempeContr,10) > eval('150000')) {
						sec80CCDempeContrsysCalc.value = '150000' ;
					} else {
						sec80CCDempeContrsysCalc.value = parseInt(sec80CCDempeContr,10);
					}
					if(parseInt(grossTotInc ,10) < sec80CCDempeContrsysCalc.value){
						sec80CCDempeContrsysCalc.value = grossTotInc;
					}
				} else {
					if( parseInt(sec80CCDempeContr,10) > gtiUppLimit ) {
						sec80CCDempeContrsysCalc.value = gtiUppLimit ;
					} else {
						sec80CCDempeContrsysCalc.value = parseInt(sec80CCDempeContr,10);
					}
					if(parseInt(grossTotInc ,10) < sec80CCDempeContrsysCalc.value){
						sec80CCDempeContrsysCalc.value = grossTotInc;
					}
				}
		}else{
				if(salUppLimit > parseInt('150000' ,10)){
					if( parseInt(sec80CCDempeContr,10) > eval('150000')) {
						sec80CCDempeContrsysCalc.value = '150000' ;
					} else {
						sec80CCDempeContrsysCalc.value = parseInt(sec80CCDempeContr,10);
					}
				} else {
					if( parseInt(sec80CCDempeContr,10) > salUppLimit ) {
						sec80CCDempeContrsysCalc.value = salUppLimit ;
					} else {
						sec80CCDempeContrsysCalc.value = parseInt(sec80CCDempeContr,10);
					}
				}
				if(parseInt(grossTotInc ,10) < sec80CCDempeContrsysCalc.value){
						sec80CCDempeContrsysCalc.value = grossTotInc;
					}


		}

		}else {sec80CCDempeContrsysCalc.value= parseInt('0',10);
	}
		sec80CCDempeContrsysCalc.value =Math.min(sec80CCDempeContrsysCalc.value,grossTotInc);

	// CHECK FOR 80D

	var age = calcAge();
	var option80DA = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.healthInsurancePremium')[0].value;
	var option80DB = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.medicalExpenditure')[0].value;
	var option80DC = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.preventiveHealthCheckUp')[0].value;
	var option80DD = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DDUsrType')[0].value;
	var option80DDB = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DDBUsrType')[0].value;
	var option80U = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80UUsrType')[0].value;
	var secA = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.sec80DHealthInsurancePremiumUsr_secA')[0].value;
	var secB = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.sec80DHealthInsurancePremiumUsr_secB')[0].value;
	var secC = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.sec80DHealthInsurancePremiumUsr_secC')[0].value;

	if(option80DA == '1'){
			if( parseInt(sec80DA.value,10) > eval('25000')){
				secA = '25000';
			} else {

				secA =  parseInt(sec80DA.value,10);

			}

		}

		else if(option80DA== '2'){
			if( parseInt(sec80DA.value,10) > eval('30000')){
				secA = '30000';
			} else {
				secA =  parseInt(sec80DA.value,10);
			}
		}
		else if(option80DA== '3'){
			if( parseInt(sec80DA.value,10) > eval('25000')){
				secA = '25000';
			} else {
				secA =  parseInt(sec80DA.value,10);
			}
		}else if(option80DA== '4'){
			if( parseInt(sec80DA.value,10) > eval('30000')){
				secA = '30000';
			} else {
				secA =  parseInt(sec80DA.value,10);
			}
		}else if(option80DA== '5'){
			if( parseInt(sec80DA.value,10) > eval('50000')){
				secA = '50000';
			} else {
				secA =  parseInt(sec80DA.value,10);
			}
		}else if(option80DA== '6'){

			if( parseInt(sec80DA.value,10) > eval('55000')){
				secA = '55000';
			} else {
				secA =  parseInt(sec80DA.value,10);
			}

		}else if(option80DA== '7' ){
			if(age > eval('59')){
				if( parseInt(sec80DA.value,10) > eval('60000')){

					secA = '60000';
				} else {
					secA =  parseInt(sec80DA.value,10);
				}
			}
		}else{
			secA= parseInt('0',10);
		}
		if(parseInt(grossTotInc ,10) < secA){
				secA = grossTotInc;
		}

		//80DB check

		if (option80DB == '1') {
			if (parseInt(sec80DB.value, 10) > eval('30000')) {
				secB = '30000';
			} else {
				secB = parseInt(sec80DB.value, 10);
			}
		} else if (option80DB == '2') {
			if (parseInt(sec80DB.value, 10) > eval('30000')) {
				secB = '30000';
			} else {
				secB = parseInt(sec80DB.value, 10);
			}
		} else if (option80DB == '3') {
			if (parseInt(sec80DB.value, 10) > eval('60000')) {

					secB = '60000';
				} else {
					secB = parseInt(sec80DB.value, 10);
				}
		}
		 else {
			secB = parseInt('0', 10);
		}
		if (parseInt(grossTotInc, 10) < secB) {
			secB = grossTotInc;
		}

	//80DC check
		if (option80DC == '1' || option80DC == '2' || option80DC == '3') {
			if (parseInt(sec80DC.value, 10) > eval('5000')) {
				secC = '5000';

			} else {
				secC = parseInt(sec80DC.value, 10);
			}
		}else {
			secC = parseInt('0', 10);
		}
		if (parseInt(grossTotInc, 10) < secC) {
			secC = grossTotInc;
		}



		var totalABC = eval(parseInt(secA,10) + parseInt(secB,10) + parseInt(secC,10));
		if (parseInt(totalABC, 10) > eval('60000')) {
			sec80DsysCalc.value = '60000';
		}else{
			sec80DsysCalc.value = parseInt(totalABC, 10);
		}





	// CHECK FOR 80DD

	if( parseInt(grossTotInc ,10) >0 ){

		if(option80DD == '1'){
			if( parseInt(sec80DD,10) > eval('75000')){
				sec80DDsysCalc.value = '75000';
			} else {
				sec80DDsysCalc.value =  parseInt(sec80DD,10);
			}
		}else if(option80DD == '2'){
			if( parseInt(sec80DD,10) > eval('125000')){
				sec80DDsysCalc.value = '125000';
			} else {
				sec80DDsysCalc.value =  parseInt(sec80DD,10);
			}
		}
		else{
			sec80DDsysCalc.value= parseInt('0',10);
		}
		if(parseInt(grossTotInc ,10) < sec80DDsysCalc.value){
			sec80DDsysCalc.value = grossTotInc;
	 }
	}
	else {
		sec80DDsysCalc.value= parseInt('0',10);
	}

	// CHECK FOR 80DDB

	if( parseInt(grossTotInc ,10) >0 ){

		if(option80DDB == '1'){
			if( parseInt(sec80DDB,10) > eval('40000')){
				sec80DDBsysCalc.value = '40000';
			} else {
				sec80DDBsysCalc.value =  parseInt(sec80DDB,10);
			}
		}else if(option80DDB == '2'){
			if( parseInt(sec80DDB,10) > eval('60000')){
				sec80DDBsysCalc.value = '60000';
			} else {
				sec80DDBsysCalc.value =  parseInt(sec80DDB,10);
			}
		}else if(option80DDB == '3'){
			if( parseInt(sec80DDB,10) > eval('80000')){
				sec80DDBsysCalc.value = '80000';
			} else {
				sec80DDBsysCalc.value =  parseInt(sec80DDB,10);
			}
		}
		else{
			sec80DDBsysCalc.value= parseInt('0',10);;
		}
		if(parseInt(grossTotInc ,10) < sec80DDBsysCalc.value){
			sec80DDBsysCalc.value = grossTotInc;
	 }
	}
	else {
		sec80DDBsysCalc.value= parseInt('0',10);
	}


	// CHECK FOR 80E
	if(eval(parseInt(coalesce(grossTotInc),10)>parseInt(sec80E,10))){
			sec80EsysCalc.value = parseInt(sec80E,10);
		}else{
			sec80EsysCalc.value = parseInt(coalesce(grossTotInc),10);
		}

	sec80EsysCalc.value =Math.min(sec80EsysCalc.value,grossTotInc);

	// CHECK FOR 80EE
	if( parseInt(sec80EE,10) > eval('50000')){
		sec80EEsysCalc.value = '50000';
	} else {
		sec80EEsysCalc.value = parseInt(sec80EE,10);
	}
	sec80EEsysCalc.value =Math.min(sec80EEsysCalc.value ,grossTotInc);

	// AUTOPOPULATE 80G
	var sec80Geligdonations = document.getElementsByName('itr1.schedule80G.totalEligibleDonationsUs80G')[0].value;
	sec80G.value = parseInt(sec80Geligdonations,10);
	sec80GsysCalc.value = parseInt(sec80Geligdonations,10);

	sec80GsysCalc.value =Math.min(sec80GsysCalc.value ,grossTotInc);
	// CHECK FOR 80GGA
	sec80GGAsysCalc.value = (eval(parseInt(sec80GGA,10)>=grossTotInc))?(parseInt(coalesce(grossTotInc),10)):(parseInt(isNVL(sec80GGA),10));
	sec80GGAsysCalc.value =Math.min(sec80GGAsysCalc.value ,grossTotInc);
	// CHECK FOR 80GGC

	sec80GGCsysCalc.value =  (eval(parseInt(isNVL(sec80GGC),10)>=grossTotInc))?(parseInt(coalesce(grossTotInc),10)):(parseInt(isNVL(sec80GGC),10));

	sec80GGCsysCalc.value =Math.min(sec80GGCsysCalc.value ,grossTotInc);

	// CHECK FOR 80U

	if( parseInt(grossTotInc ,10) >0 ){

		if(option80U == '1'){
			if( parseInt(sec80U,10) > eval('75000')){
				sec80UsysCalc.value = '75000';
			} else {
				sec80UsysCalc.value =  parseInt(sec80U,10);
			}
		}else if(option80U == '2'){
			if( parseInt(sec80U,10) > eval('125000')){
				sec80UsysCalc.value = '125000';
			} else {
				sec80UsysCalc.value =  parseInt(sec80U,10);
			}
		}
		else{
			sec80UsysCalc.value= parseInt('0',10);;
		}
		if(parseInt(grossTotInc ,10) < sec80UsysCalc.value){
			sec80UsysCalc.value = grossTotInc;
	 }
	}
	else {
		sec80UsysCalc.value= parseInt('0',10);
	}



	// CHECK FOR 80CCG
	 sec80CCGsysCalc.value = /*(residentialStatus=='RES' || residentialStatus=='NOR')?*/((grossTotInc <= parseInt('1200000',10))?((parseInt(isNVL(sec80CCG),10) > parseInt('25000',10))? parseInt('25000',10):parseInt(isNVL(sec80CCG),10)) : parseInt('0',10))/* : parseInt('0',10)*/ ;

	 sec80CCGsysCalc.value=Math.min(sec80CCGsysCalc.value,grossTotInc);

	// CHECK FOR 80RRB
	 if (incFrmOthSrc > 0) {
		sec80RRBsysCalc.value = ((parseInt(isNVL(sec80RRB), 10) < parseInt('300000', 10)) ? (parseInt(sec80RRB, 10)) : (parseInt('300000',10)));

		sec80RRBsysCalc.value = Math.min(sec80RRBsysCalc.value, incFrmOthSrc);
	} else {
		sec80RRBsysCalc.value = parseInt('0', 10);
	}


	// CHECK FOR 80QQB
	 if (incFrmOthSrc > 0) {
		sec80QQBsysCalc.value = ((parseInt(isNVL(sec80QQB), 10) < parseInt('300000', 10)) ? (parseInt(sec80QQB, 10)) : (parseInt('300000',10)));
		sec80QQBsysCalc.value = Math.min(sec80QQBsysCalc.value, incFrmOthSrc);
	} else {
		sec80QQBsysCalc.value = parseInt('0', 10);
	}


	// CHECK FOR 80TTA
	var incOs = document.getElementsByName('itr1.itr1IncomeDeductions.incomeOthSrc')[0].value;
	if( parseInt(grossTotInc ,10) >0 ){
		if(parseInt(isNVL(sec80TTA),10) > parseInt('0',10)){
			sec80TTAsysCalc.value=Math.min(parseInt(incOs,10),parseInt(grossTotInc ,10),10000,parseInt(isNVL(sec80TTA),10));
		} else{
			sec80TTAsysCalc.value= parseInt('0',10);
		}
	} else {
		sec80TTAsysCalc.value= parseInt('0',10);
	}



	checkSum80C80CCC();
	sumUserEntrdDed();
	sec80GGsysCalc.value=0;
	sumDeductionsWithout80GG(sec80CsysCalc,sec80CCCsysCalc,sec80CCDemprContrsysCalc,sec80CCD1BsysCalc,sec80CCDempeContrsysCalc,
					sec80DsysCalc,sec80DDsysCalc,sec80DDBsysCalc,sec80EsysCalc,sec80EEsysCalc,sec80GsysCalc,
					sec80GGAsysCalc,sec80GGCsysCalc,sec80UsysCalc,sec80CCGsysCalc,
					sec80RRBsysCalc,sec80QQBsysCalc,sec80TTAsysCalc);

	// CHECK FOR 80GG again

	var totInc = document.getElementsByName('itr1.itr1IncomeDeductions.totalIncome')[0];
	if(totInc.value > 0){
		totInc.value = document.getElementsByName('itr1.itr1IncomeDeductions.totalIncome')[0].value;
		} else {
		totInc.value = parseInt('0',10);
		}
	var oneFrthTI =  Math.round(eval(totInc.value) * eval(0.25));

	if(eval(oneFrthTI) < eval('60000')) {
		if(eval(sec80GG) > eval(oneFrthTI)){
			sec80GGsysCalc.value = eval(oneFrthTI);
		} else {
			sec80GGsysCalc.value = sec80GG;
		}
	} else{
		if(eval(sec80GG) > eval('60000')){
			sec80GGsysCalc.value = eval('60000');
		}else {
			sec80GGsysCalc.value = sec80GG;
		}
	}

	sec80GGsysCalc.value = (sec80GGsysCalc.value < eval('0')) ? parseInt('0',10): (sec80GGsysCalc.value) ;
	sec80GGsysCalc.value=Math.min(sec80GGsysCalc.value,grossTotInc);


	if(gIncome< eval('0')){
		sec80CCDemprContrsysCalc.value=parseInt('0',10);
		sec80CCD1BsysCalc.value=parseInt('0',10);
        sec80QQBsysCalc.value =parseInt('0',10);
		sec80RRBsysCalc.value=parseInt('0',10);
		sec80CCGsysCalc.value=parseInt('0',10);
		sec80UsysCalc.value =parseInt('0',10);
		sec80GGCsysCalc.value=parseInt('0',10);
		sec80GGAsysCalc.value=parseInt('0',10);
		sec80GsysCalc.value=parseInt('0',10);
		sec80EsysCalc.value=parseInt('0',10);
		sec80EEsysCalc.value=parseInt('0',10);
		sec80DDBsysCalc.value=parseInt('0',10);
		sec80DDsysCalc.value=parseInt('0',10);
		sec80DsysCalc.value=parseInt('0',10);
		sec80CCDempeContrsysCalc.value=parseInt('0',10);
		sec80CCCsysCalc.value=parseInt('0',10);
		sec80CsysCalc.value=parseInt('0',10);
		sec80QQBsysCalc.value=parseInt('0',10);
		sec80TTAsysCalc.value=parseInt('0',10);
		sec80GGsysCalc.value= parseInt('0',10);
	}



	// Do the sum of deductions again after adding 80GG and 80G
	 sumDeductions(sec80CsysCalc,sec80CCCsysCalc,sec80CCDemprContrsysCalc,sec80CCD1BsysCalc,sec80CCDempeContrsysCalc,
		sec80DsysCalc,sec80DDsysCalc,sec80DDBsysCalc,sec80EsysCalc,sec80EEsysCalc,sec80GsysCalc,
		sec80GGsysCalc,sec80GGAsysCalc,sec80GGCsysCalc,sec80UsysCalc,sec80CCGsysCalc,
		sec80RRBsysCalc,sec80QQBsysCalc,sec80TTAsysCalc);
}

function sumUserEntrdDed() {

	var sec80C = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80C_Usr')[0] ; sec80C.value = coalesce(sec80C.value);
	var sec80CCC = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCC_Usr')[0] ;sec80CCC.value = coalesce(sec80CCC.value);
	var sec80CCDempeContr = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCD_Usr')[0] ;sec80CCDempeContr.value = coalesce(sec80CCDempeContr.value);
	var sec80CCD1B = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCD1B_Usr')[0] ;sec80CCD1B.value = coalesce(sec80CCD1B.value);
	var sec80DA = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DHealthInsurancePremiumUsr')[0];
	sec80DA.value = coalesce(sec80DA.value);
	var sec80DB = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DMedicalExpenditureUsr')[0];
	sec80DB.value = coalesce(sec80DB.value);
	var sec80DC = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DPreventiveHealthCheckUpUsr')[0];
	sec80DC.value = coalesce(sec80DC.value);


	var sec80CCDemprContr = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCDEmployer_Usr')[0] ;sec80CCDemprContr.value = coalesce(sec80CCDemprContr.value);
	var sec80DD = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DD_Usr')[0] ;sec80DD.value = coalesce(sec80DD.value);
	var sec80DDB = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DDB_Usr')[0] ;sec80DDB.value = coalesce(sec80DDB.value);

	var sec80E = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80E_Usr')[0] ;sec80E.value = coalesce(sec80E.value);
	var sec80EE = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80EE_Usr')[0] ;sec80EE.value = coalesce(sec80EE.value);

	var sec80G = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80G_Usr')[0];sec80G.value = coalesce(sec80G.value);
	var sec80GG = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80GG_Usr')[0] ;sec80GG.value = coalesce(sec80GG.value);
	var sec80GGA = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80GGA_Usr')[0] ;sec80GGA.value = coalesce(sec80GGA.value);
	var sec80GGC = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80GGC_Usr')[0] ;sec80GGC.value = coalesce(sec80GGC.value);
	var sec80U = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80U_Usr')[0] ;sec80U.value = coalesce(sec80U.value);
	var sec80CCG = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCG_Usr')[0]; sec80CCG.value = coalesce(sec80CCG.value);
	var sec80RRB = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80RRB_Usr')[0]; sec80RRB.value = coalesce(sec80RRB.value);
	var sec80QQB = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80QQB_Usr')[0]; sec80QQB.value = coalesce(sec80QQB.value);
	var sec80TTA = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80TTA_Usr')[0]; sec80TTA.value = coalesce(sec80TTA.value);

		var userEntrdDed = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.totalChapVIADeductions_Usr')[0];
		userEntrdDed.value = eval(parseInt(sec80C.value ,10))+
							 eval(parseInt(sec80CCC.value ,10))+
							 eval(parseInt(sec80CCDempeContr.value ,10))+
							 eval(parseInt(sec80CCDemprContr.value ,10))+
							 eval(parseInt(sec80CCD1B.value ,10))+
							 eval(parseInt(sec80DD.value ,10))+
							 eval(parseInt(sec80DDB.value ,10))+
							 eval(parseInt(sec80E.value ,10))+
							 eval(parseInt(sec80EE.value ,10))+
							 eval(parseInt(sec80G.value ,10))+
							 eval(parseInt(sec80GG.value ,10))+
							 eval(parseInt(sec80GGA.value ,10))+
							 eval(parseInt(sec80GGC.value ,10))+
							 eval(parseInt(sec80U.value ,10))+
							 eval(parseInt(sec80CCG.value ,10))+
							 eval(parseInt(sec80RRB.value ,10))+
							 eval(parseInt(sec80QQB.value ,10))+
							 eval(parseInt(sec80TTA.value ,10))+
							 eval(parseInt(sec80DA.value ,10))+
							 eval(parseInt(sec80DB.value ,10))+
							 eval(parseInt(sec80DC.value ,10));
							 }

function checkSum80C80CCC(){
	var sec80CsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80C')[0];
	var sec80CCCsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCC')[0];
	var sec80CCDempeContrsysCalc = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCD')[0];
	var netSum = eval(sec80CsysCalc.value) + eval(sec80CCCsysCalc.value) + eval(sec80CCDempeContrsysCalc.value);
	var maxAmount = getMaxLimitAmount();
	if(eval(netSum) >  eval(maxAmount)) {
		var residue = eval(netSum) - eval(maxAmount);
		if(sec80CCDempeContrsysCalc.value >= residue) {
			sec80CCDempeContrsysCalc.value = eval(sec80CCDempeContrsysCalc.value) - eval(residue);
		}else {
			residue = eval(residue) - eval(sec80CCDempeContrsysCalc.value);
			sec80CCDempeContrsysCalc.value =eval('0');

			if(sec80CCCsysCalc.value >= residue){
				sec80CCCsysCalc.value = eval(sec80CCCsysCalc.value) -eval(residue);
			} else {
				residue = eval(residue) - eval(sec80CCCsysCalc.value);
				sec80CCCsysCalc.value =eval('0');
			}
		}
	}
}

function getMaxLimitAmount() {
	var gtaAmount = document.getElementsByName('itr1.itr1IncomeDeductions.grossTotIncome')[0].value;
	var maxAmount = eval('150000');
	if(gtaAmount >= eval('150000')) {
		return maxAmount;
	} else {
		return gtaAmount;
	}

}

function sumDeductionsWithout80GG(sec80CsysCalc,sec80CCCsysCalc,sec80CCDemprContrsysCalc, sec80CCD1BsysCalc,sec80CCDempeContrsysCalc,
		sec80DsysCalc,sec80DDsysCalc,sec80DDBsysCalc,sec80EsysCalc,sec80EEsysCalc,sec80GsysCalc,
		sec80GGAsysCalc,sec80GGCsysCalc,sec80UsysCalc,sec80CCGsysCalc,
		sec80RRBsysCalc,sec80QQBsysCalc,sec80TTAsysCalc){

	sec80CsysCalc.value 			= coalesce(sec80CsysCalc.value); 				sec80CCCsysCalc.value			= coalesce(sec80CCCsysCalc.value);
	sec80CCDemprContrsysCalc.value 	= coalesce(sec80CCDemprContrsysCalc.value); 	sec80CCDempeContrsysCalc.value 	= coalesce(sec80CCDempeContrsysCalc.value);
	sec80CCD1BsysCalc.value 	= coalesce(sec80CCD1BsysCalc.value);
	sec80DsysCalc.value 			= coalesce(sec80DsysCalc.value);
	sec80DDsysCalc.value 			= coalesce(sec80DDsysCalc.value); 				sec80DDBsysCalc.value			= coalesce(sec80DDBsysCalc.value);
	sec80EsysCalc.value 			= coalesce(sec80EsysCalc.value); 				sec80EEsysCalc.value 			= coalesce(sec80EEsysCalc.value);
	sec80GsysCalc.value 			= coalesce(sec80GsysCalc.value);
	sec80GGAsysCalc.value 			= coalesce(sec80GGAsysCalc.value);
	sec80GGCsysCalc.value 			= coalesce(sec80GGCsysCalc.value); 				sec80UsysCalc.value 			= coalesce(sec80UsysCalc.value);
	sec80CCGsysCalc.value 			= coalesce(sec80CCGsysCalc.value);				sec80RRBsysCalc.value 			= coalesce(sec80RRBsysCalc.value);
	sec80QQBsysCalc.value 			= coalesce(sec80QQBsysCalc.value);				sec80TTAsysCalc.value 			= coalesce(sec80TTAsysCalc.value);

	var dedVIA = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.totalChapVIADeductions')[0];

	var temp2 = eval(sec80CsysCalc.value) + eval(sec80CCCsysCalc.value) + eval(sec80CCDemprContrsysCalc.value) +eval(sec80CCD1BsysCalc.value)+
				eval(sec80CCDempeContrsysCalc.value) + eval(sec80DsysCalc.value) +
				eval(sec80DDsysCalc.value) + eval(sec80DDBsysCalc.value) + eval(sec80EsysCalc.value) + eval(sec80EEsysCalc.value) +



				eval(sec80GsysCalc.value) + eval(sec80GGAsysCalc.value) +
				eval(sec80GGCsysCalc.value)+ eval(sec80UsysCalc.value)+ eval(sec80CCGsysCalc.value)+ eval(sec80RRBsysCalc.value)+
				eval(sec80QQBsysCalc.value)+ eval(sec80TTAsysCalc.value);

	var grossTotInc = document.getElementsByName('itr1.itr1IncomeDeductions.grossTotIncome')[0]; grossTotInc.value = coalesce(grossTotInc.value);

	if(grossTotInc.value > parseInt('0',10)){
		if( temp2 >  parseInt(grossTotInc.value ,10)){
			dedVIA.value = parseInt(grossTotInc.value ,10);
		} else{
			dedVIA.value = temp2;
		}
	}else{
		dedVIA.value = temp2;
	}

	var totInc = document.getElementsByName('itr1.itr1IncomeDeductions.totalIncome')[0];
	totInc.value = eval(parseInt(coalesce(grossTotInc.value) ,10) - parseInt(coalesce(dedVIA.value) ,10));
	totInc.value= eval(Math.round(eval(totInc.value)/10)*parseInt('10' ,10));
	var lang = document.getElementsByName("hindi")[0].value;
	if(totInc.value > 5000000){
	   if(lang=='Y'){
			addErrorXHTML('','कुल आय 5000000 से अधिक नहीं हो सकती है।');
			j.setFieldError('itr1.itr1IncomeDeductions.totalIncome','कुल आय 5000000 से अधिक नहीं हो सकती है।');
		}else{
		addErrorXHTML('','Total Income Can not exceed 5000000');
		j.setFieldError('itr1.itr1IncomeDeductions.totalIncome','Total Income Can not exceed 5000000');
		}
	}
		totInc.value= eval(Math.round(eval(totInc.value)/10)*parseInt('10' ,10));

		if(totInc.value > 0){
			totInc.value = document.getElementsByName('itr1.itr1IncomeDeductions.totalIncome')[0].value;
			} else {
			totInc.value = parseInt('0',10);
			}

}

function sumDeductions(sec80CsysCalc,sec80CCCsysCalc,sec80CCDemprContrsysCalc,sec80CCD1BsysCalc,sec80CCDempeContrsysCalc,
		sec80DsysCalc,sec80DDsysCalc,sec80DDBsysCalc,sec80EsysCalc,sec80EEsysCalc,sec80GsysCalc,
		sec80GGsysCalc,sec80GGAsysCalc,sec80GGCsysCalc,sec80UsysCalc,sec80CCGsysCalc,
		sec80RRBsysCalc,sec80QQBsysCalc,sec80TTAsysCalc){

	sec80CsysCalc.value 			= coalesce(sec80CsysCalc.value); 				sec80CCCsysCalc.value			= coalesce(sec80CCCsysCalc.value);
	sec80CCDemprContrsysCalc.value 	= coalesce(sec80CCDemprContrsysCalc.value);
	sec80CCD1BsysCalc.value 	= coalesce(sec80CCD1BsysCalc.value);
	sec80CCDempeContrsysCalc.value 	= coalesce(sec80CCDempeContrsysCalc.value);
	sec80DsysCalc.value 			= coalesce(sec80DsysCalc.value);
	sec80DDsysCalc.value 			= coalesce(sec80DDsysCalc.value); 				sec80DDBsysCalc.value			= coalesce(sec80DDBsysCalc.value);
	sec80EsysCalc.value 			= coalesce(sec80EsysCalc.value); 				sec80EEsysCalc.value 			= coalesce(sec80EEsysCalc.value);
	sec80GsysCalc.value 			= coalesce(sec80GsysCalc.value);
	sec80GGsysCalc.value 			= coalesce(sec80GGsysCalc.value); 				sec80GGAsysCalc.value 			= coalesce(sec80GGAsysCalc.value);
	sec80GGCsysCalc.value 			= coalesce(sec80GGCsysCalc.value); 				sec80UsysCalc.value 			= coalesce(sec80UsysCalc.value);
	sec80CCGsysCalc.value 			= coalesce(sec80CCGsysCalc.value);				sec80RRBsysCalc.value 			= coalesce(sec80RRBsysCalc.value);
	sec80QQBsysCalc.value 			= coalesce(sec80QQBsysCalc.value);				sec80TTAsysCalc.value 			= coalesce(sec80TTAsysCalc.value);

	var dedVIA = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.totalChapVIADeductions')[0];

	var temp2 = eval(sec80CsysCalc.value) + eval(sec80CCCsysCalc.value) + eval(sec80CCDemprContrsysCalc.value) +eval(sec80CCD1BsysCalc.value)+
				eval(sec80CCDempeContrsysCalc.value) + eval(sec80DsysCalc.value) +
				eval(sec80DDsysCalc.value) + eval(sec80DDBsysCalc.value) + eval(sec80EsysCalc.value) + eval(sec80EEsysCalc.value) +
				eval(sec80GsysCalc.value) + eval(sec80GGsysCalc.value) + eval(sec80GGAsysCalc.value) +
				eval(sec80GGCsysCalc.value)+ eval(sec80UsysCalc.value)+ eval(sec80CCGsysCalc.value)+ eval(sec80RRBsysCalc.value)+
				eval(sec80QQBsysCalc.value)+ eval(sec80TTAsysCalc.value);

	var grossTotInc = document.getElementsByName('itr1.itr1IncomeDeductions.grossTotIncome')[0]; grossTotInc.value = coalesce(grossTotInc.value);



	if(grossTotInc.value > parseInt('0',10)){
		if( temp2 >  parseInt(grossTotInc.value ,10)){
			dedVIA.value = parseInt(grossTotInc.value ,10);
		} else{
			dedVIA.value = temp2;
		}
	}else{
		dedVIA.value = temp2;
	}

	//checkTotDeductions();

	calcTI();
}

function calcTI(){

	var dedVIA = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.totalChapVIADeductions')[0];  dedVIA.value = coalesce(dedVIA.value);
	var totInc = document.getElementsByName('itr1.itr1IncomeDeductions.totalIncome')[0];	totInc.value = coalesce(totInc.value);
	var grossInc = document.getElementsByName('itr1.itr1IncomeDeductions.grossTotIncome')[0].value;

	/* if( parseInt(grossInc ,10) <0 ){
		 grossInc = parseInt(0,10);
		}*/

	totInc.value = eval(coalesce(grossInc)) - eval(dedVIA.value); totInc.value = coalesce(totInc.value);

	/*if(eval(parseInt(coalesce(grossInc),10) > parseInt(dedVIA.value,10))){
		totInc.value = eval(coalesce(grossInc)) - eval(dedVIA.value);
	}else{
		totInc.value = parseInt('0' ,10);
	}*/

	// Rounding of to nearest multiple of 10

	totInc.value= eval(Math.round(eval(totInc.value)/10)*parseInt('10' ,10));
	if(totInc.value > 0){
		totInc.value = document.getElementsByName('itr1.itr1IncomeDeductions.totalIncome')[0].value;
		} else {
		totInc.value = parseInt('0',10);
		}

	/*if(eval(totInc.value) > 10){
	 totInc.value= eval(Math.round(eval(totInc.value)/10)*parseInt('10' ,10));
	}*/

	calcTaxPayableOnTI();
}

//Tax calculation according to tax slabs
function calcTaxPayableOnTI(){

 var totInc = document.getElementsByName('itr1.itr1IncomeDeductions.totalIncome')[0];
 var taxPayable = document.getElementsByName('itr1.itr1TaxComputationOnline.totalTaxPayable')[0];

 var age = calcAge();


	if(( eval(age)> eval(59) ) &&  (eval(age) <= eval(79))){
		if ( eval(totInc.value) <= eval('300000')){
			taxPayable.value = '0';
		} else {
			if((eval(totInc.value) >= eval('300001')) && (eval(totInc.value) <= eval('500000'))){
				var temp = (eval(totInc.value) - eval ('300000')) * eval('0.05');
				taxPayable.value = Math.round(eval(temp));
			} else if((eval(totInc.value) >= eval('500001')) && (eval(totInc.value) <= eval('1000000'))) {
				var temp = (eval(totInc.value) - eval ('500000')) * eval('0.20');
				taxPayable.value = Math.round(eval(temp) + eval('10000'));
			} else if(eval(totInc.value) >= eval('1000001')) {
				var temp = (eval(totInc.value) - eval ('1000000')) * eval('0.30');
				taxPayable.value = Math.round(eval(temp) + eval('110000'));
			}
		}
	} else if( /*(resStatus == 'RES' || resStatus == 'NOR') && */ ( eval(age)> eval(79))){
		if ( eval(totInc.value) <= eval('500000')){
			taxPayable.value = '0';
		} else {
			if((eval(totInc.value) >= eval('500001')) && (eval(totInc.value) <= eval('1000000'))){
				var temp = (eval(totInc.value) - eval ('500000')) * eval('0.20');
				taxPayable.value = Math.round(eval(temp));
			}
			else if(eval(totInc.value) >= eval('1000001')) {
				var temp = (eval(totInc.value) - eval ('1000000')) * eval('0.30');
				taxPayable.value = Math.round(eval(temp) + eval('100000'));
			}
		}
	}else {
		if ( eval(totInc.value) <= eval('250000')){
			taxPayable.value = '0';
		} else {
			if((eval(totInc.value) >= eval('250001')) && (eval(totInc.value) <= eval('500000'))){
				var temp = (eval(totInc.value) - eval ('250000')) * eval('0.05');
				taxPayable.value = Math.round(eval(temp));
			} else if((eval(totInc.value) >= eval('500001')) && (eval(totInc.value) <= eval('1000000'))) {
				var temp = (eval(totInc.value) - eval ('500000')) * eval('0.20');
				taxPayable.value = Math.round(eval(temp) + eval('12500'));
			} else if(eval(totInc.value) >= eval('1000001')) {
				var temp = (eval(totInc.value) - eval ('1000000')) * eval('0.30');
				taxPayable.value = Math.round(eval(temp) + eval('112500'));
			}
		}
	}

 calcTaxPayableAfterRebate();
 calcEduCess();
}

function calcTaxPayableAfterRebate() {

	 var totInc = document.getElementsByName('itr1.itr1IncomeDeductions.totalIncome')[0];
	 var taxPayable = document.getElementsByName('itr1.itr1TaxComputationOnline.totalTaxPayable')[0];
	 var rebate87A = document.getElementsByName('itr1.itr1TaxComputationOnline.rebate87A')[0];
	 var taxPayableAfterRebate = document.getElementsByName('itr1.itr1TaxComputationOnline.taxPayableOnRebate')[0];


	 if(eval(totInc.value)  <= eval('350000')) {

		 if ( eval(taxPayable.value) <= eval('2500')){
			 rebate87A.value = taxPayable.value;

		 } else {
			 rebate87A.value = '2500';
		 }

		 taxPayableAfterRebate.value = eval(taxPayable.value) - eval(rebate87A.value);

	 } else {
		 rebate87A.value = '0';
		 taxPayableAfterRebate.value = eval(taxPayable.value);

	 }
}

function calcEduCess(){

	//calcSurcharge();

	var taxPayableAfterRebate = document.getElementsByName('itr1.itr1TaxComputationOnline.taxPayableOnRebate')[0];
	var eduCess = document.getElementsByName('itr1.itr1TaxComputationOnline.educationCess')[0];

	eduCess.value = (eval(taxPayableAfterRebate.value)) /*+ eval(surchargeOnAboveCrore.value) )*/ * eval('0.03');
	eduCess.value  = Math.round(eduCess.value);

	var totTaxWithEduCess = document.getElementsByName('itr1.itr1TaxComputationOnline.grossTaxLiability')[0];
	totTaxWithEduCess.value = eval(taxPayableAfterRebate.value) +/* eval(surchargeOnAboveCrore.value)*/ + eval(eduCess.value);
	calcBalTaxPay();
}


function calcBalTaxPay(){

	var sec89 = document.getElementsByName('itr1.itr1TaxComputationOnline.section89')[0]; sec89.value = coalesce(sec89.value);
	var totTaxWithEduCess = document.getElementsByName('itr1.itr1TaxComputationOnline.grossTaxLiability')[0]; totTaxWithEduCess.value = coalesce(totTaxWithEduCess.value);

	var balTaxPay = document.getElementsByName('itr1.itr1TaxComputationOnline.netTaxLiability')[0];
	balTaxPay.value= Math.round(eval(parseInt(totTaxWithEduCess.value ,10)-parseInt(sec89.value ,10)));
	if(balTaxPay.value < eval('0')) {
		balTaxPay.value = '0';
	}
	calcInterestPayable();
	calcIntrstPayable();
}

function calcIntrstPayable(){


	var balTaxPay = document.getElementsByName('itr1.itr1TaxComputationOnline.netTaxLiability')[0]; balTaxPay.value = coalesce(balTaxPay.value);
	var totIntrstPay = document.getElementsByName('itr1.itr1TaxComputationOnline.totalIntrstPay')[0]; totIntrstPay.value = coalesce(totIntrstPay.value);
	var totTaxIntrstPay = document.getElementsByName('itr1.itr1TaxComputationOnline.totTaxPlusIntrstPay')[0]; totTaxIntrstPay.value = coalesce(totTaxIntrstPay.value);

	totTaxIntrstPay.value = eval(balTaxPay.value) + eval(totIntrstPay.value);
	calcTaxPayable15Minus17();
}

function deleteRowTaxDedTDSPage(tableId , noOfHeader , noOfFooter) {

	deleteRowTable(tableId , noOfHeader , noOfFooter);
	calcInterestPayable();
	calcTaxPayable15Minus17();
}

function addRowToTablePage5Donations (tableId,noOfRow,last){

	addRowToTable(tableId,noOfRow,last);
	allRowsForPage5Donations (tableId,noOfRow,last);

}

function addRowToTablePage3(tableId,noOfRow,last){

	addRowToTable(tableId,noOfRow,last);
	calcInterestPayable();
	calcGrossIncome();
}

function deleteRowToTablePage5Donations(tableId,noOfRow,last){

	deleteRowTaxDedTDSPage(tableId,noOfRow,last);
	allRowsForPage5Donations(tableId,noOfRow,last);
}

function allRowsForPage5Donations (tableId,noOfRow,last)  {

	allRowsForPage5DonationsSaras(tableId,0,0);
	allRowsForPage5DonationsSaras('ded100PerWithoutQual',0,0);
	allRowsForPage5DonationsSaras('ded50WithoutQual',0,0);
	allRowsForPage5DonationsSaras('ded100Qual',0,0);
	allRowsForPage5DonationsSaras('ded50WithQual',0,0);

}

function allRowsForPage5DonationsSaras (tableId,noOfRow,last)  {
	 try {

		 	var residue50Perc;
		 	var qualifyingLimit;
			var grossTotalIncome = coalesce(document.getElementsByName('itr1.itr1IncomeDeductions.grossTotIncome')[0].value);

			 if( parseInt(grossTotalIncome ,10) <0 ){
				 grossTotalIncome = parseInt(0,10);
				}


			var sys80G = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80G')[0]; sys80G.value = coalesce(sys80G.value);
			var sys80GG = document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.section80GG')[0]; sys80GG.value = coalesce(sys80GG.value);
			var sec80GG = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80GG_Usr')[0]; sec80GG.value = coalesce(sec80GG.value);
			var deductionsSysTotal =  document.getElementsByName('itr1.itr1IncomeDeductions.deductUndChapVIA.totalChapVIADeductions')[0]; deductionsSysTotal.value = coalesce(deductionsSysTotal.value);

			var tab = document.getElementById(tableId);
			var allInputTags = tab.getElementsByTagName('input');

			if ( tableId == 'ded100PerWithoutQual' ) {
				for(var i = 0; i < allInputTags.length; i++) {
					if (allInputTags[i].name.match("eligibleDonationAmt$")) {
						allInputTags[i].value = coalesce(allInputTags[i - 1].value);
							if( parseInt(allInputTags[i].value,10) > parseInt(grossTotalIncome ,10)) {
								allInputTags[i].value = grossTotalIncome;
							}
					}
				}
				calcTableTotEligAmt('ded100PerWithoutQual',qualifyingLimit,residue50Perc);
			}

			if ( tableId == 'ded50WithoutQual' ) {
				for(var i = 0; i < allInputTags.length; i++) {
					if (allInputTags[i].name.match("eligibleDonationAmt$")) {
						allInputTags[i].value = parseInt(Math.round(coalesce(allInputTags[i - 1].value)/2) , 10);
						if( parseInt(allInputTags[i].value ,10) > parseInt(grossTotalIncome ,10) ) {
								allInputTags[i].value = grossTotalIncome;
							}
					}
				}
				calcTableTotEligAmt('ded50WithoutQual',qualifyingLimit,residue50Perc);
			}
			var	adjstGTI;
			if(grossTotalIncome == eval(parseInt(deductionsSysTotal.value,10) - parseInt(sys80G.value ,10))){
			adjstGTI=0;
			}else{
				 adjstGTI = eval(parseInt(grossTotalIncome ,10) - (parseInt(deductionsSysTotal.value ,10) - parseInt(sys80G.value ,10) - parseInt(sys80GG.value ,10) + parseInt(sec80GG.value ,10)));

			}
			qualifyingLimit = eval(parseInt(adjstGTI ,10) * parseFloat('0.10'));


			 if( parseInt(qualifyingLimit ,10) <0 ){
				 qualifyingLimit = parseInt(0,10);
				}



			if ( tableId == 'ded100Qual' ) {
				for(var i = 0; i < allInputTags.length; i++) {
					if (allInputTags[i].name.match("eligibleDonationAmt$")) {
						allInputTags[i].value = parseInt(Math.round(coalesce(allInputTags[i - 1].value)) , 10);
						if( parseInt(allInputTags[i].value ,10) > parseInt(qualifyingLimit , 10)) {
								allInputTags[i].value = parseInt(qualifyingLimit , 10);
							}
					}
				}
				calcTableTotEligAmt('ded100Qual',qualifyingLimit,residue50Perc);
			}

			var totEligAmtTableC = document.getElementsByName('itr1.schedule80G.don100PercentApprReqd.totEligibleDon100PercentApprReqd')[0]; totEligAmtTableC.value = coalesce(totEligAmtTableC.value);
			var residue;
			if(parseInt(qualifyingLimit , 10) > parseInt(totEligAmtTableC.value , 10)) {
					residue = eval( parseInt(qualifyingLimit , 10) - parseInt(totEligAmtTableC.value , 10) );
				} else {
					residue = parseInt('0' ,10) ;
				}

			 residue50Perc = eval( parseInt(residue , 10) * parseFloat('0.50') );
			if ( tableId == 'ded50WithQual' ) {
				for(var i = 0; i < allInputTags.length; i++) {
					if (allInputTags[i].name.match("eligibleDonationAmt$")) {
						allInputTags[i].value = parseInt(Math.round(coalesce(allInputTags[i - 1].value)/2) , 10);
						if( parseInt(allInputTags[i].value ,10) > parseInt(residue50Perc , 10)) {
								allInputTags[i].value = parseInt(residue50Perc , 10);
							}
					}
				}
				calcTableTotEligAmt('ded50WithQual',qualifyingLimit,residue50Perc);
			}
		}
		catch (e) {

		}
}

function calcTableTotEligAmt(tableId,qualifyingLimit,residue50Perc){

		var tab = document.getElementById(tableId);
		var allInputTags = tab.getElementsByTagName('input');
		var sumOfAll = parseInt('0' ,10);
		var sumOfAlluserEntredValue = parseInt('0' ,10);
			for(var i = 0; i < allInputTags.length; i++) {
				if (allInputTags[i].name.match("eligibleDonationAmt$")) {
					sumOfAll = eval ( parseInt(sumOfAll ,10) + parseInt( allInputTags[i].value ,10) );
					sumOfAlluserEntredValue = eval ( parseInt(sumOfAlluserEntredValue ,10) + parseInt( coalesce(allInputTags[i-1].value) ,10) );
				}
			}

		var grossTotalIncome = coalesce(document.getElementsByName('itr1.itr1IncomeDeductions.grossTotIncome')[0].value);

		 if( parseInt(grossTotalIncome ,10) <0 ){
			 grossTotalIncome = parseInt(0,10);
			}

		if( parseInt(sumOfAll ,10) > parseInt(grossTotalIncome ,10)) {
			sumOfAll = grossTotalIncome;
		}

		if(tableId == 'ded100PerWithoutQual'){
				var temp1 = document.getElementsByName('itr1.schedule80G.don100Percent.totEligibleDon100Percent')[0] ;
				var temp2 = document.getElementsByName('itr1.schedule80G.don100Percent.totDon100Percent')[0] ;
				temp1.value = parseInt(sumOfAll ,10);
				temp2.value = parseInt(sumOfAlluserEntredValue ,10);
			}
		else if(tableId == 'ded50WithoutQual'){
				var temp1 = document.getElementsByName('itr1.schedule80G.don50PercentNoApprReqd.totEligibleDon50Percent')[0] ;
				var temp2 = document.getElementsByName('itr1.schedule80G.don50PercentNoApprReqd.totDon50PercentNoApprReqd')[0] ;
				temp1.value = parseInt(sumOfAll ,10);
				temp2.value = parseInt(sumOfAlluserEntredValue ,10);
			}
		else if(tableId == 'ded100Qual'){
				var temp1 = document.getElementsByName('itr1.schedule80G.don100PercentApprReqd.totEligibleDon100PercentApprReqd')[0] ;
				var temp2 = document.getElementsByName('itr1.schedule80G.don100PercentApprReqd.totDon100PercentApprReqd')[0] ;
				temp1.value = parseInt(sumOfAll ,10);
				temp2.value = parseInt(sumOfAlluserEntredValue ,10);

				if(parseInt(temp1.value ,10) > parseInt(qualifyingLimit ,10)){

					temp1.value=parseInt(qualifyingLimit ,10);;
				}

		}
		else if(tableId == 'ded50WithQual'){
				var temp1 = document.getElementsByName('itr1.schedule80G.don50PercentApprReqd.totEligibleDon50PercentApprReqd')[0] ;
				var temp2 = document.getElementsByName('itr1.schedule80G.don50PercentApprReqd.totDon50PercentApprReqd')[0] ;
				temp1.value = parseInt(sumOfAll ,10);
				temp2.value = parseInt(sumOfAlluserEntredValue ,10);

				if(parseInt(temp1.value ,10) > parseInt(residue50Perc ,10)){

					temp1.value=parseInt(residue50Perc ,10);;
				}
		}

		calcUserDonations80G();
		calcDonationsEligb();
	}

function calcUserDonations80G(){
 var tot80GAuserEntrd =  document.getElementsByName('itr1.schedule80G.don100Percent.totDon100Percent')[0]; tot80GAuserEntrd.value = coalesce(tot80GAuserEntrd.value);
 var tot80GBuserEntrd =  document.getElementsByName('itr1.schedule80G.don50PercentNoApprReqd.totDon50PercentNoApprReqd')[0]; tot80GBuserEntrd.value = coalesce(tot80GBuserEntrd.value);
 var tot80GCuserEntrd =  document.getElementsByName('itr1.schedule80G.don100PercentApprReqd.totDon100PercentApprReqd')[0]; tot80GCuserEntrd.value = coalesce(tot80GCuserEntrd.value);
 var tot80GDuserEntrd =  document.getElementsByName('itr1.schedule80G.don50PercentApprReqd.totDon50PercentApprReqd')[0]; tot80GDuserEntrd.value = coalesce(tot80GDuserEntrd.value);
 var tot80GDonuserEntrd =  document.getElementsByName('itr1.schedule80G.totalDonationsUs80G')[0]; tot80GDonuserEntrd.value = coalesce(tot80GDonuserEntrd.value);

 tot80GDonuserEntrd.value = eval(tot80GAuserEntrd.value)+ eval(tot80GBuserEntrd.value)+ eval(tot80GCuserEntrd.value)+ eval(tot80GDuserEntrd.value) ;

}

function calcDonationsEligb(){
 var tot80GAelig =  document.getElementsByName('itr1.schedule80G.don100Percent.totEligibleDon100Percent')[0]; tot80GAelig.value = coalesce(tot80GAelig.value);
 var tot80GBelig =  document.getElementsByName('itr1.schedule80G.don50PercentNoApprReqd.totEligibleDon50Percent')[0]; tot80GBelig.value = coalesce(tot80GBelig.value);
 var tot80GCelig =  document.getElementsByName('itr1.schedule80G.don100PercentApprReqd.totEligibleDon100PercentApprReqd')[0]; tot80GCelig.value = coalesce(tot80GCelig.value);
 var tot80GDelig =  document.getElementsByName('itr1.schedule80G.don50PercentApprReqd.totEligibleDon50PercentApprReqd')[0]; tot80GDelig.value = coalesce(tot80GDelig.value);
 var tot80GDonelig =  document.getElementsByName('itr1.schedule80G.totalEligibleDonationsUs80G')[0]; tot80GDonelig.value = coalesce(tot80GDonelig.value);

 tot80GDonelig.value = eval(tot80GAelig.value)+ eval(tot80GBelig.value)+ eval(tot80GCelig.value)+ eval(tot80GDelig.value) ;
 var grossTotalIncome = coalesce(document.getElementsByName('itr1.itr1IncomeDeductions.grossTotIncome')[0].value);

 if( parseInt(grossTotalIncome ,10) <0 ){
	 grossTotalIncome = parseInt(0,10);
	}

 if( parseInt(grossTotalIncome ,10) <  parseInt(tot80GDonelig.value ,10)) {
		tot80GDonelig.value = parseInt(grossTotalIncome ,10);
   }
 calcGrossIncome();
}

function calcInterestPayable(){


		var advanceTaxToDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.advanceTax')[0];  advanceTaxToDisplay.value = coalesce(advanceTaxToDisplay.value);
		var TDSToDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.tds')[0]; 			   TDSToDisplay.value = coalesce(TDSToDisplay.value);
		var SATtoDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.selfAssessmentTax')[0];  SATtoDisplay.value = coalesce(SATtoDisplay.value);
     var TCStoDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.tcs')[0];  TCStoDisplay.value = coalesce(TCStoDisplay.value);

		var balTaxPayable = document.getElementsByName('itr1.itr1TaxComputationOnline.netTaxLiability')[0]; balTaxPayable.value = coalesce(balTaxPayable.value);
		var advanceTax = parseInt('0' ,10) ;
		var selfAssessmentTax = parseInt('0' ,10) ;


		var TDS = parseInt('0' ,10);
		var tab1 = document.getElementById('taxDedSourceSal');
		var allInputTags = tab1.getElementsByTagName('input');
		var lang = document.getElementsByName("hindi")[0].value;
			for(var i = 0; i < allInputTags.length; i++) {
				if (allInputTags[i].name.match("totalTDSSal$")) {
				    if(lang=='Y'){
						if(parseInt(allInputTags[i].value ,10) > parseInt(allInputTags[i-1].value ,10)){
							addErrorXHTML('','कुल कर कटौती  शीर्ष वेतन के तहत आय प्रभाय से अधिक नहीं हो सकता  है|');
							allInputTags[i].value = parseInt('0' ,10);
							TDS = eval(parseInt(TDS ,10) + parseInt(isNVL(allInputTags[i].value) ,10));
						} else{
							TDS = eval(parseInt(TDS ,10) + parseInt(isNVL(allInputTags[i].value) ,10));
					}
					}else{
					if(parseInt(allInputTags[i].value ,10) > parseInt(allInputTags[i-1].value ,10)){
						addErrorXHTML('','Total Tax deducted cannot be more than income chargeable under the head salaries');
						allInputTags[i].value = parseInt('0' ,10);
						TDS = eval(parseInt(TDS ,10) + parseInt(isNVL(allInputTags[i].value) ,10));
					} else{
						TDS = eval(parseInt(TDS ,10) + parseInt(isNVL(allInputTags[i].value) ,10));
					}
				}
				}
			}
			//alert('SASA TDS : '+TDS);

		var portuVal = document.getElementsByName('itr1.filingStatus.portugeseCC5A')[0].value;
		var tab2 = document.getElementById('taxDedSourceSrc');
		var allInputTags = tab2.getElementsByTagName('input');



			for(var i = 0; i < allInputTags.length; i++) {
					if (allInputTags[i].name.match("claimOutOfTotTDSOnAmtPaid$")){

						if(eval(parseInt(coalesce(allInputTags[i].value),10)  >  parseInt(allInputTags[i-1].value,10))){
							if(lang=='Y'){
							addErrorXHTML('','इस वर्ष के लिए दावा की ग​ई राशि कुल कटौती से अधिक नहीं हो सकती');
							}else{
							addErrorXHTML('','Amount claimed for this year cannot be more than total tax deducted');
							}
							allInputTags[i].value = '';
							calculateTotalTaxTDS2('taxDedSourceSrc');
							//calculateTotalTaxTDS3('taxDedSourceSrc26QC');
							TDS = eval(parseInt(TDS ,10) + parseInt(isNVL(allInputTags[i].value) ,10));
							//alert("TDS inside if "+TDS);
						}else{
							TDS = eval(parseInt(TDS ,10) + parseInt(isNVL(allInputTags[i].value) ,10));
							//alert("TDS inside else "+TDS);
						}
					}
				}

			var tab2 = document.getElementById('taxDedSourceSrc26QC');
			var allInputTags = tab2.getElementsByTagName('input');



				for(var i = 0; i < allInputTags.length; i++) {
						if (allInputTags[i].name.match("claimOutOfTotTDSOnAmtPaid$") ) {
							if(eval(parseInt(coalesce(allInputTags[i].value),10)  >  parseInt(allInputTags[i-1].value,10))){
                                if(lang=='Y'){
							      addErrorXHTML('','इस वर्ष के लिए दावा की ग​ई राशि कुल कटौती से अधिक नहीं हो सकती');
						        }else{
								addErrorXHTML('','Amount claimed for this year cannot be more than total tax deducted');
                                }

								allInputTags[i].value = '';

								//calculateTotalTaxTDS2('taxDedSourceSrc');
								calculateTotalTaxTDS3('taxDedSourceSrc26QC');
								TDS = eval(parseInt(TDS ,10) + parseInt(isNVL(allInputTags[i].value) ,10));
								//alert("1TDS inside if "+TDS);
							}else{
								TDS = eval(parseInt(TDS ,10) + parseInt(isNVL(allInputTags[i].value) ,10));
								//alert("2TDS inside else "+TDS);
							}
						}
					}

		TDSToDisplay.value = parseInt(TDS,10);

		var TCS = parseInt('0' ,10);
		var tcsTAB = document.getElementById('tcsTableId');
		var allInputTags = tcsTAB.getElementsByTagName('input');




			for(var i = 0; i < allInputTags.length; i++) {
					if (allInputTags[i].name.match("amtTCSClaimedThisYear$")) {
						if(eval(parseInt(coalesce(allInputTags[i].value),10)) >  parseInt(allInputTags[i-1].value,10)){
							/*addError(allInputTags[i],'Amount claimed for this year cannot be more than total tax collected',true);
								j.setFieldError(allInputTags[i].name,'Amount claimed for this year cannot be more than total tax collected');*/
							   if(lang=='Y'){
							      addErrorXHTML('','इस वर्ष के लिए दावा की ग​ई राशि एकत्रित कुल कर से अधिक नहीं हो सकती');
						        }else{
								addErrorXHTML('','Amount claimed for this year cannot be more than total tax collected');
								}
							allInputTags[i].value = '';
							TCS = eval(parseInt(TCS ,10) + parseInt(isNVL(allInputTags[i].value) ,10));
						}else{
							TCS = eval(parseInt(TCS ,10) + parseInt(isNVL(allInputTags[i].value) ,10));
						}
					}
				}

		calculateTotalTaxTCS('tcsTableId');

		var totalTCS = document.getElementsByName('itr1.scheduleTCS.totalSchTCS')[0].value;
		TCStoDisplay.value = parseInt(totalTCS,10);
		TCS = parseInt(totalTCS,10);

		var tab3 = document.getElementById('taxDedSelf');
		var allInputTags = tab3.getElementsByTagName('input');
		for(var i = 0; i < allInputTags.length; i++) {
			if(allInputTags[i].name.match("dateDep$")){
				if(checkFirstDateBefore('01/04/2017' , allInputTags[i].value) && checkFirstDateBefore(allInputTags[i].value , '31/03/2018')){
						advanceTax = eval( parseInt(isNVL(advanceTax) ,10) + parseInt(isNVL(allInputTags[i+2].value) ,10));
					}else if( checkFirstDateBefore('01/04/2018' , allInputTags[i].value)){
						selfAssessmentTax = eval(parseInt(isNVL(selfAssessmentTax) ,10) + parseInt(isNVL(allInputTags[i+2].value) ,10)) ;
					}
			}
		}

		var selfAssessmentTax234A = parseInt('0',10);
	   	for(var i = 0; i < allInputTags.length; i++) {
				if(allInputTags[i].name.match("dateDep$")){
					if(checkFirstDateBefore('01/04/2018' , allInputTags[i].value) && checkFirstDateBefore(allInputTags[i].value , '31/08/2018')){
						selfAssessmentTax234A = selfAssessmentTax234A +parseInt(isNVL(allInputTags[i+2].value) ,10) ;
					}
				}
		}

		advanceTaxToDisplay.value = parseInt(advanceTax,10);
		SATtoDisplay.value = parseInt(selfAssessmentTax,10);

		var intrst234Aprinciple	;
		if(parseInt(balTaxPayable.value ,10) - parseInt(advanceTax ,10) - parseInt(TDS ,10)- parseInt(TCS ,10) - parseInt(selfAssessmentTax234A,10) < 0){
			intrst234Aprinciple = parseInt('0' ,10);
		}else {
			intrst234Aprinciple = parseInt(balTaxPayable.value ,10) - parseInt(advanceTax ,10) - parseInt(TDS ,10)- parseInt(TCS ,10) - parseInt(selfAssessmentTax234A,10);
			// Rounding off to previous hundered
			if(parseInt(intrst234Aprinciple,10) > 100){
				intrst234Aprinciple= Math.floor(parseInt(intrst234Aprinciple,10)/100)*parseInt('100' ,10);
			}
		}

		var currentDate = document.getElementsByName('itr1.verification.date')[0].value;
		if(checkFirstDateBefore(currentDate, getCurrentDate())){
			currentDate = getCurrentDate();
		}
		var MonthsAfterDueDate;
		MonthsAfterDueDate =  calcNoOfMonthsOnline(currentDate , '01/09/2018');
		if(document.getElementsByName('itr1.filingStatus.returnFileSec')[0].value=='17' &&
			document.getElementsByName('itr1.filingStatus.returnType')[0].value=='R'){

			var origDate = document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].value;
			if(origDate!=null && origDate!=undefined  && origDate!=''){
				MonthsAfterDueDate =  calcNoOfMonthsOnline(origDate , '01/09/2018'); 	// for Revised return take date of original filling
			}else{
				MonthsAfterDueDate =  0;
			}
		}


		if(document.getElementsByName('itr1.filingStatus.returnFileSec')[0].value=='18'){

			var origDate = document.getElementsByName('itr1.filingStatus.noticeDate')[0].value;
			if(origDate!=null && origDate!=undefined  && origDate!=''){
				MonthsAfterDueDate =  calcNoOfMonthsOnline(origDate , '01/09/2018'); 	// for Defective return take date of original filling
			}else{
				MonthsAfterDueDate =  0;
			}
		}

		var intrst234A = parseInt(intrst234Aprinciple,10) * parseFloat('0.01') * parseInt(MonthsAfterDueDate) ;
		var intrst234B = parseInt('0' ,10);
		var	intrst234C = parseInt('0' ,10);
		var	intrst234F = parseInt('0' ,10);

		var slab1 = parseInt('0' ,10);
		var slab2 = parseInt('0' ,10);
		var slab3 = parseInt('0' ,10);
		var slab4 = parseInt('0' ,10);

			var tab4 = document.getElementById('taxDedSelf');
			var allInputTags = tab4.getElementsByTagName('input');
			for(var i = 0; i < allInputTags.length; i++) {
				if (allInputTags[i].name.match("dateDep$")) {

					if(checkFirstDateBefore('01/04/2017' , allInputTags[i].value) && checkFirstDateBefore( allInputTags[i].value , '15/06/2017' ) ){
						slab1 = eval(parseInt(slab1 ,10) + parseInt(isNVL(allInputTags[i+2].value) ,10));
					}
					else if(checkFirstDateBefore('16/06/2017' , allInputTags[i].value) && checkFirstDateBefore( allInputTags[i].value , '15/09/2017' ) ){
						slab2 = eval(parseInt(slab2 ,10) + parseInt(isNVL(allInputTags[i+2].value) ,10));
					}
					else if(checkFirstDateBefore('16/09/2017' , allInputTags[i].value) && checkFirstDateBefore( allInputTags[i].value , '15/12/2017' ) ){
						slab3 = eval(parseInt(slab3 ,10) + parseInt(isNVL(allInputTags[i+2].value) ,10));
					}
					else if(checkFirstDateBefore('16/12/2017' , allInputTags[i].value) && checkFirstDateBefore( allInputTags[i].value , '15/03/2018') ){
						slab4 = eval(parseInt(slab4 ,10) + parseInt(isNVL(allInputTags[i+2].value) ,10));
					}
				}
			}


			var intrst234Ci = parseInt('0' ,10);
			var intrst234Cii = parseInt('0' ,10);
			var intrst234Ciii = parseInt('0' ,10);
			var intrst234Civ = parseInt('0' ,10);
			var advanceTaxToDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.advanceTax')[0];  advanceTaxToDisplay.value = coalesce(advanceTaxToDisplay.value);
			var TDSToDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.tds')[0]; 			   TDSToDisplay.value = coalesce(TDSToDisplay.value);
			var SATtoDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.selfAssessmentTax')[0];  SATtoDisplay.value = coalesce(SATtoDisplay.value);

			var balTaxPayable = document.getElementsByName('itr1.itr1TaxComputationOnline.netTaxLiability')[0]; balTaxPayable.value = coalesce(balTaxPayable.value);
			if(( eval(parseInt(balTaxPayable.value ,10) - parseInt(TDS ,10) - parseInt(TCS ,10)) >=  parseInt('10000',10))){

				if(parseInt(slab1 ,10) < eval((parseInt(balTaxPayable.value ,10) - parseInt(TDS ,10) - parseInt(TCS ,10)) * parseFloat('0.12'))){
					var tempintrst234Ci = (((parseInt(balTaxPayable.value ,10) - parseInt(TDS ,10) - parseInt(TCS ,10) ) * parseFloat('0.15')) - parseInt(slab1 ,10));

					if(parseInt(tempintrst234Ci,10) > 100){
						tempintrst234Ci= Math.floor(parseInt(tempintrst234Ci,10)/100)*parseInt('100' ,10);
					}
					intrst234Ci=parseInt(tempintrst234Ci,10)* parseFloat('0.01') * parseInt('3' ,10) ;

				}

				if(eval(parseInt(slab1 ,10) + parseInt(slab2 ,10)) < eval((parseInt(balTaxPayable.value ,10) - parseInt(TDS ,10) - parseInt(TCS ,10)) * parseFloat('0.36') )){
					var tempintrst234Cii = (((parseInt(balTaxPayable.value ,10) - parseInt(TDS ,10) - parseInt(TCS ,10)) * parseFloat('0.45') ) -parseInt(slab1 ,10) - parseInt(slab2 ,10) );

					if(parseInt(tempintrst234Cii,10) > 100){0
						tempintrst234Cii= Math.floor(parseInt(tempintrst234Cii,10)/100)*parseInt('100' ,10);
					}
					intrst234Cii=parseInt(tempintrst234Cii,10)* parseFloat('0.01') * parseInt('3' ,10) ;

				}

				if(eval(parseInt(slab1 ,10) + parseInt(slab2 ,10) + parseInt(slab3 ,10)) < eval((parseInt(balTaxPayable.value ,10) - parseInt(TDS ,10) - parseInt(TCS ,10)) * parseFloat('0.75'))){
					var tempintrst234Ciii = (((parseInt(balTaxPayable.value ,10) - parseInt(TDS ,10) - parseInt(TCS ,10)) * parseFloat('0.75') ) - parseInt(slab1 ,10)- parseInt(slab2 ,10) - parseInt(slab3 ,10) );

					if(parseInt(tempintrst234Ciii,10) > 100){
						tempintrst234Ciii= Math.floor(parseInt(tempintrst234Ciii,10)/100)*parseInt('100' ,10);
					}
					intrst234Ciii=parseInt(tempintrst234Ciii,10)* parseFloat('0.01') * parseInt('3' ,10) ;
				}


				if(eval(parseInt(slab1 ,10) + parseInt(slab2 ,10) + parseInt(slab3 ,10) + parseInt(slab4 ,10)) < eval((parseInt(balTaxPayable.value ,10) - parseInt(TDS ,10) - parseInt(TCS ,10)) * parseInt('1' ,10))){
					var tempintrst234Civ = (((parseInt(balTaxPayable.value ,10) - parseInt(TDS ,10) - parseInt(TCS ,10)) * parseFloat('1') ) - parseInt(slab1 ,10)- parseInt(slab2 ,10) - parseInt(slab3 ,10) - parseInt(slab4 ,10));

					if(parseInt(tempintrst234Civ,10) > 100){
						tempintrst234Civ= Math.floor(parseInt(tempintrst234Civ,10)/100)*parseInt('100' ,10);
					}
					intrst234Civ=parseInt(tempintrst234Civ,10)* parseFloat('0.01') * parseInt('1' ,10) ;
				}



			}
			else {
				 intrst234Ci = parseInt('0',10);
				 intrst234Cii = parseInt('0',10);
				 intrst234Ciii = parseInt('0',10);
				 intrst234Civ = parseInt('0',10);
			}

			intrst234C = eval(parseInt(intrst234Ci ,10) + parseInt(intrst234Cii ,10) + parseInt(intrst234Ciii ,10) + parseInt(intrst234Civ ,10));
			var age = calcAge();

			if(eval(parseInt(age,10)>parseInt('59' ,10)) /*&& (residentialStatus =='RES' || residentialStatus=='NOR')*/ ){
				intrst234C=parseInt('0' ,10);
			}


		 // ===========234F fee calculations======

			var totInc = document.getElementsByName('itr1.itr1IncomeDeductions.totalIncome')[0].value;
			var currentDate = document.getElementsByName('itr1.verification.date')[0].value;
			var origRetFileDate = document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].value;
			var returnFileSec = document.getElementsByName('itr1.filingStatus.returnFileSec')[0].value;
			var dob_234F= document.getElementsByName('itr1.personalInfo.dob')[0].value;
			var gti_234F=document.getElementsByName('itr1.itr1IncomeDeductions.grossTotIncome')[0].value;
			var verf_date=document.getElementsByName('itr1.verification.date')[0].value;
			var excIncSec1038=document.getElementsByName('itr1.taxPaid.taxesPaid.excIncSec1038')[0];
			var grossSec1038= eval(parseInt(gti_234F,10)) + (parseInt(coalesce(excIncSec1038.value), 10) ) ;

		if(returnFileSec == '17'){

			if (checkFirstDateBefore(dob_234F,'01/04/1938')){

				if(grossSec1038 > 500000){
					if( totInc <=500000){
						if(checkFirstDateBefore('01/09/2018' , origRetFileDate)){
						intrst234F= '1000';
						}
						else{
						intrst234F= '0';
						}
					}

					else {
						if(checkFirstDateBefore('01/09/2018' , origRetFileDate) && checkFirstDateBefore( origRetFileDate , '31/12/2018' )){
							intrst234F= '5000';
						}
							else if(checkFirstDateBefore('01/01/2019', origRetFileDate)){
								intrst234F= '10000';
							}
							else{
								intrst234F= '0';
							}

					}

				}else{
					intrst234F= '0';
				}

			}
			else if ((checkFirstDateBefore('02/04/1938',dob_234F))&&(checkFirstDateBefore(dob_234F,'01/04/1958'))){

				if(grossSec1038 > 300000){
					if( totInc <=500000){
						if(checkFirstDateBefore('01/09/2018' , origRetFileDate)){
						intrst234F= '1000';
						}
						else{
						intrst234F= '0';
						}
					}

					else {
						if(checkFirstDateBefore('01/09/2018' , origRetFileDate) && checkFirstDateBefore( origRetFileDate , '31/12/2018' )){
							intrst234F= '5000';
						}
							else if(checkFirstDateBefore('01/01/2019', origRetFileDate)){
								intrst234F= '10000';
							}
							else{
								intrst234F= '0';
							}

					}

				}else{
					intrst234F= '0';
				}

			}
			else{

				if(grossSec1038 > 250000){

					if( totInc <=500000){

						if(checkFirstDateBefore('01/09/2018' , origRetFileDate)){

							intrst234F= '1000';
							}
							else{
							intrst234F= '0';
							}
					}

					else{

						if(checkFirstDateBefore('01/09/2018' , origRetFileDate) && checkFirstDateBefore( origRetFileDate , '31/12/2018' )){

							intrst234F= '5000';
						}
							else if(checkFirstDateBefore('01/01/2019', origRetFileDate)){

								intrst234F= '10000';
							}
							else{
								intrst234F= '0';
							}

					}

				}else{

					intrst234F= '0';
				}
			}
			}
			else if(returnFileSec == '11' || returnFileSec == '12' || returnFileSec == '13'){

                if (checkFirstDateBefore(dob_234F,'01/04/1938')){

					if(grossSec1038 > 500000){
						if( totInc <=500000){
							if(checkFirstDateBefore('01/09/2018' , verf_date)){
							intrst234F= '1000';
							}
							else{
							intrst234F= '0';
							}
						}

						else {
							if(checkFirstDateBefore('01/09/2018' , verf_date) && checkFirstDateBefore( verf_date , '31/12/2018' )){
								intrst234F= '5000';
							}
								else if(checkFirstDateBefore('01/01/2019', verf_date)){
									intrst234F= '10000';
								}
								else{
									intrst234F= '0';
								}

						}

					}else{
						intrst234F= '0';
					}

				}
				else if ((checkFirstDateBefore('02/04/1938',dob_234F))&&(checkFirstDateBefore(dob_234F,'01/04/1958'))){

					if(grossSec1038 > 300000){
						if( totInc <=500000){
							if(checkFirstDateBefore('01/09/2018' , verf_date)){
							intrst234F= '1000';
							}
							else{
							intrst234F= '0';
							}
						}

						else {
							if(checkFirstDateBefore('01/09/2018' , verf_date) && checkFirstDateBefore( verf_date , '31/12/2018' )){
								intrst234F= '5000';
							}
								else if(checkFirstDateBefore('01/01/2019', verf_date)){
									intrst234F= '10000';
								}
								else{
									intrst234F= '0';
								}

						}

					}else{
						intrst234F= '0';
					}

				}
				else{
                   	if(grossSec1038 > 250000){
						if( totInc <=500000){

							if(checkFirstDateBefore('01/09/2018' , verf_date)){

								intrst234F= '1000';
								}
								else{
								intrst234F= '0';
								}
						}

						else{

							if(checkFirstDateBefore('01/09/2018' , verf_date) && checkFirstDateBefore( verf_date , '31/12/2018' )){

								intrst234F= '5000';
							}
								else if(checkFirstDateBefore('01/01/2019', verf_date)){

									intrst234F= '10000';
								}
								else{
									intrst234F= '0';
								}

						}

					}else{

						intrst234F= '0';
					}
				}


			}
			if(gti_234F <0)
		   {
		    	if(checkFirstDateBefore('01/09/2018' , origRetFileDate)){
		            intrst234F ='1000';
				}else{
					intrst234F= '0';
				}

		   }

		// ===============Interest234B calculation=======================

		var intrst234Bprinciple;
		var intrst234Bi=parseInt('0',10);
		var noOfMonthsTillSelfasst= parseInt('0',10);

		if(parseInt(balTaxPayable.value,10) - parseInt(TDS,10) - parseInt(TCS ,10) >= parseInt('10000' ,10)) {
			if(parseInt(advanceTax,10) < ((parseInt(balTaxPayable.value,10) - parseInt(TDS,10) - parseInt(TCS ,10)) * parseFloat('0.90'))) {
				intrst234Bprinciple = (parseInt(balTaxPayable.value ,10) - parseInt(advanceTax ,10) - parseInt(TDS,10) - parseInt(TCS ,10) );


				// Rounding off to previous hundered
				if(parseInt(intrst234Bprinciple,10) > 100){
					intrst234Bprinciple= Math.floor(parseInt(intrst234Bprinciple,10)/100)*parseInt('100' ,10);
				}

				//======== Interest 234B first part calc==========

				var selfAsspaidDates=new Array();
				var selfAsspaidAmts=new Array();
				var x=parseInt('0',10);
				var tempDate=parseInt('0',10);
				var tempAmt=parseInt('0',10);

				var tab234B = document.getElementById('taxDedSelf');
				var allInputTags234B = tab234B.getElementsByTagName('input');

				// to get all self assesment tax values
				for(var p = 0; p < allInputTags.length; p++) {
					if(allInputTags[p].name.match("dateDep$")){
						if( checkFirstDateBefore('01/04/2018' , allInputTags[p].value) && checkFirstDateBefore(allInputTags[p].value, currentDate) ){
							if(allInputTags[p+2].value!=0){
							selfAsspaidDates[x]=allInputTags[p].value;
							selfAsspaidAmts[x]=allInputTags[p+2].value;
							x++;
							}
						}
					}
				}

				// to sort all self assesment tax values according to date
				var selfAsspaidDatesSorted=new Array();
				var selfAsspaidAmtsSorted=new Array();

				if(selfAsspaidDates.length > 1){
					for(var q = 0; q < selfAsspaidDates.length-1; q++) {
						for(var r = q+1; r < selfAsspaidDates.length; r++) {
							if(checkFirstDateBefore(selfAsspaidDates[q], selfAsspaidDates[r])){

							}else{
								tempDate=selfAsspaidDates[q];
								tempAmt=selfAsspaidAmts[q];

								selfAsspaidDates[q]=selfAsspaidDates[r];
								selfAsspaidAmts[q]=selfAsspaidAmts[r];

								selfAsspaidDates[r]=tempDate;
								selfAsspaidAmts[r]=tempAmt;
							}
						}
					}
					var arrLen = selfAsspaidDates.length;
					var lastMonth = 0;
					var lastIndex = -1;
					var lastYear =0;
					for(var q = 0; q < arrLen; q++) {
						if(parseInt(selfAsspaidDates[q].substr(3,2), 10) == lastMonth && parseInt(selfAsspaidDates[q].substr(8,2), 10) == lastYear){
							selfAsspaidAmts[lastIndex] = parseInt(selfAsspaidAmts[lastIndex], 10) + parseInt(selfAsspaidAmts[q], 10);
						}else{
							lastMonth = parseInt(selfAsspaidDates[q].substr(3,2), 10);
							lastYear = parseInt(selfAsspaidDates[q].substr(8,2), 10);
							selfAsspaidAmts[++lastIndex] = selfAsspaidAmts[q];
							selfAsspaidDates[lastIndex] = selfAsspaidDates[q];
						}
					}
					selfAsspaidAmts.length = ++lastIndex;
					selfAsspaidDates.length = lastIndex;
				}

				if(selfAsspaidDates.length==0){
					noOfMonthsTillSelfasst=calcNoOfMonthsOnline(currentDate,'01/04/2018');
				}else{
					noOfMonthsTillSelfasst=calcNoOfMonthsOnline(selfAsspaidDates[0],'01/04/2018');
				}

				intrst234Bi= parseInt(intrst234Bprinciple,10) * parseFloat('0.01') * parseInt(noOfMonthsTillSelfasst) ;


				//======== Interest 234B second part calc==========
				var intrst234Bprinciple2=parseInt('0',10);  // intrst234Bprinciple if self assesment is paid
				var selfAsspart=parseInt('0',10);
				var noOfMonthsTillSelfasst2;
				var intrst234Bii=parseInt('0',10);
				var partialSelfAssPaid=parseInt('0',10);
				var k=parseInt('0',10);
				var interestFrom;
				var interestTill;




				if(selfAsspaidDates.length!=0){

					for(var i = 0; i < selfAsspaidDates.length; i++) {
						partialSelfAssPaid= eval(parseInt(partialSelfAssPaid ,10) +parseInt(selfAsspaidAmts[i] ,10));

						intrst234Bprinciple2=eval(parseInt(balTaxPayable.value ,10) - parseInt(advanceTax ,10) - parseInt(TDS,10) - parseInt(TCS ,10) +
								parseInt(intrst234A ,10)+parseInt(intrst234F ,10)+parseInt(intrst234C ,10)+parseInt(intrst234Bi ,10)+parseInt(intrst234Bii ,10)
								-parseInt(partialSelfAssPaid,10));


								// Rounding off to previous hundered
						if(parseInt(intrst234Bprinciple2,10) > parseInt('100' ,10)){
							intrst234Bprinciple2= Math.floor(parseInt(intrst234Bprinciple2,10)/100)*parseInt('100' ,10);
						}
						else if(parseInt(intrst234Bprinciple2,10) < 0){
							intrst234Bprinciple2 = parseInt('0',10);
						}
						//calclulating remaining months to levy interest

						interestTill=currentDate;
						interestFrom=selfAsspaidDates[i];

						if(i != eval(selfAsspaidDates.length-parseInt('1' ,10))){

								for(k=i;k < eval(selfAsspaidDates.length-parseInt('1' ,10)); k++){
									if(selfAsspaidDates[k]!=selfAsspaidDates[k+1]){
										interestTill=selfAsspaidDates[k+1];
										interestFrom=selfAsspaidDates[k];
										k=selfAsspaidDates.length;
									}
								}
						}

						noOfMonthsTillSelfasst2=calcNoOfMonths(interestTill,interestFrom)-parseInt('1' ,10) ;
						if(parseInt(intrst234Bprinciple2,10) < parseInt(intrst234Bprinciple,10)){
							intrst234Bprinciple = intrst234Bprinciple2;
							intrst234Bii= eval(parseInt(intrst234Bii,10) +
								(parseInt(intrst234Bprinciple2,10) * parseFloat('0.01') * parseInt(noOfMonthsTillSelfasst2))) ;
						}else{
							intrst234Bii= eval(parseInt(intrst234Bii,10) +
								(parseInt(intrst234Bprinciple,10) * parseFloat('0.01') * parseInt(noOfMonthsTillSelfasst2))) ;
						}
					}
				}

				intrst234B=eval(parseInt(intrst234Bi,10) +parseInt(intrst234Bii,10));
			}
		}else{
			intrst234B = parseInt('0' ,10);
		}

		if(eval(parseInt(age,10)>parseInt('59' ,10))  /*&& (residentialStatus =='RES' || residentialStatus=='NOR')*/ ){
			intrst234B=parseInt('0' ,10);
		}

		var intrstPayable = document.getElementsByName('itr1.itr1TaxComputationOnline.totalIntrstPay')[0]; intrstPayable.value = coalesce(intrstPayable.value);


		var input234A = document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234A')[0]; input234A.value = parseInt(intrst234A ,10);
		var input234B = document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234B')[0]; input234B.value = parseInt(intrst234B ,10);
		var input234C = document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234C')[0]; input234C.value = parseInt(intrst234C ,10);
		var input234F = document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.lateFilingFee234F')[0]; input234F.value = parseInt(intrst234F ,10);

		intrstPayable.value = Math.round(eval(parseInt(intrst234A ,10) + parseInt(intrst234B ,10) + parseInt(intrst234C ,10) + parseInt(intrst234F ,10)));

		var balTaxPay = document.getElementsByName('itr1.itr1TaxComputationOnline.netTaxLiability')[0]; balTaxPay.value = coalesce(balTaxPay.value);
		var totIntrstPay = document.getElementsByName('itr1.itr1TaxComputationOnline.totalIntrstPay')[0]; totIntrstPay.value = coalesce(totIntrstPay.value);
		var totTaxIntrstPay = document.getElementsByName('itr1.itr1TaxComputationOnline.totTaxPlusIntrstPay')[0]; totTaxIntrstPay.value = coalesce(totTaxIntrstPay.value);

		totTaxIntrstPay.value = eval(balTaxPay.value) + eval(totIntrstPay.value);


		calcTotTaxPaid();

}


function sum234A234B234C(){

	var intrstPayable = document.getElementsByName('itr1.itr1TaxComputationOnline.totalIntrstPay')[0]; intrstPayable.value = coalesce(intrstPayable.value);



	var input234A = document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234A')[0]; input234A.value = coalesce(input234A.value);
	var input234B = document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234B')[0]; input234B.value = coalesce(input234B.value);
	var input234C = document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234C')[0]; input234C.value = coalesce(input234C.value);
	var input234F = document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.lateFilingFee234F')[0]; input234F.value = coalesce(input234F.value);

	intrstPayable.value =eval(Math.round(eval(input234A.value) + eval(input234B.value)+ eval(input234C.value) + eval(input234F.value)));


	calcIntrstPayable();
}

function calcTotTaxPaid(){

	var advanceTaxToDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.advanceTax')[0];  advanceTaxToDisplay.value = coalesce(advanceTaxToDisplay.value);
	var TDSToDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.tds')[0]; 			   TDSToDisplay.value = coalesce(TDSToDisplay.value);
	var SATtoDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.selfAssessmentTax')[0];  SATtoDisplay.value = coalesce(SATtoDisplay.value);
    var TCStoDisplay = document.getElementsByName('itr1.taxPaid.taxesPaid.tcs')[0];  TCStoDisplay.value = coalesce(TCStoDisplay.value);

	var totTaxPaid = document.getElementsByName('itr1.taxPaid.taxesPaid.totalTaxesPaid')[0];  totTaxPaid.value = coalesce(totTaxPaid.value);

	totTaxPaid.value = eval(parseInt(advanceTaxToDisplay.value ,10) + parseInt(TDSToDisplay.value,10) + parseInt(SATtoDisplay.value ,10) + parseInt(TCStoDisplay.value,10));

	calcTaxPayable15Minus17();
}

function calcTaxPayable15Minus17(){


	var totTaxPaid = document.getElementsByName('itr1.taxPaid.taxesPaid.totalTaxesPaid')[0];  totTaxPaid.value = coalesce(totTaxPaid.value);
	var totTaxIntrstPay = document.getElementsByName('itr1.itr1TaxComputationOnline.totTaxPlusIntrstPay')[0]; totTaxIntrstPay.value = coalesce(totTaxIntrstPay.value);



	if(eval(totTaxPaid.value) <= eval(totTaxIntrstPay.value)) {
		var taxPayable15M17 = document.getElementsByName('itr1.taxPaid.balTaxPayable')[0]; taxPayable15M17.value = coalesce(taxPayable15M17.value);
		var refund15M17 = document.getElementsByName('itr1.refund.refundDue')[0]; refund15M17.value = coalesce(refund15M17.value);
		refund15M17.value = eval('0');
		taxPayable15M17.value = eval(totTaxIntrstPay.value) - eval(totTaxPaid.value);

		taxPayable15M17.value= eval(Math.round(eval(taxPayable15M17.value)/10)*parseInt('10' ,10));

	} else{
		var taxPayable15M17 = document.getElementsByName('itr1.taxPaid.balTaxPayable')[0]; taxPayable15M17.value = coalesce(taxPayable15M17.value);
		var refund15M17 = document.getElementsByName('itr1.refund.refundDue')[0]; refund15M17.value = coalesce(refund15M17.value);
		refund15M17.value = eval(totTaxPaid.value) -  eval(totTaxIntrstPay.value);

		taxPayable15M17.value = eval('0');

		refund15M17.value= eval(Math.round(eval(refund15M17.value)/10)*parseInt('10' ,10));

		//taxStatus.value='TR';
	}

	var balTaxPayable = document.getElementsByName('itr1.taxPaid.balTaxPayable')[0];  balTaxPayable.value = coalesce(balTaxPayable.value);
	var refundDue = document.getElementsByName('itr1.refund.refundDue')[0]; refundDue.value = coalesce(refundDue.value);
	showEpay();

}

function calcAge(){
	var dob = document.getElementsByName('itr1.personalInfo.dob')[0];
	var retVal = calcAgeWithAsstYearPost2015(dob,'2018');
	return retVal;
}

function returnFile_UnderSec() {
try{
	var val=document.getElementsByName('itr1.filingStatus.returnFileSec')[0].value;

	if(val=='18'){

		loadFiledSectionPopup();
		document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234A')[0].readOnly=true;
		document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234B')[0].readOnly=true;


	}else if(val=='17'){
		document.getElementsByName('itr1.filingStatus.returnType')[0].value='R';

		document.getElementsByName('itr1.filingStatus.ackNoOriginalReturn')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.ackNoOriginalReturn')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.ackNoOriginalReturn')[0].value = '';
		document.getElementsByName('itr1.filingStatus.noticeNo')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.noticeNo')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.noticeNo')[0].value = '';
		document.getElementsByName('itr1.filingStatus.noticeDate')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.noticeDate')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.noticeDate')[0].value = '';

		document.getElementsByName('itr1.filingStatus.noticeDateUnderSec')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.noticeDateUnderSec')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.noticeDateUnderSec')[0].value = '';

		document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234A')[0].readOnly=true;
		document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234B')[0].readOnly=true;




		$(function(){
			$("#PersistITR_itr1_filingStatus_origRetFiledDate").datepicker({
				changeMonth: true,
				changeYear: true,
				yearRange: "-100:+6",
				dateFormat: "dd/mm/yy",
				buttonText: "Choose",
				showOtherMonths: true,
				selectOtherMonths: true
			});
		});

		$(function(){
			$("#PersistITR_itr1_filingStatus_noticeDate").datepicker("destroy");
		});

		$(function(){
			$("#PersistITR_itr1_filingStatus_noticeDateUnderSec").datepicker("destroy");
		});

		returnType_change();

	}else if(val.match('13|14|15|16')) {

		document.getElementsByName('itr1.filingStatus.returnType')[0].value='O';

		document.getElementsByName('itr1.filingStatus.receiptNo')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.receiptNo')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.receiptNo')[0].value='';
		document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].value='';

		document.getElementsByName('itr1.filingStatus.ackNoOriginalReturn')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.ackNoOriginalReturn')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.ackNoOriginalReturn')[0].value = '';
		document.getElementsByName('itr1.filingStatus.noticeNo')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.noticeNo')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.noticeNo')[0].value = '';

		document.getElementsByName('itr1.filingStatus.noticeDate')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.noticeDate')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.noticeDate')[0].value = '';


		document.getElementsByName('itr1.filingStatus.noticeDateUnderSec')[0].disabled=false;
		document.getElementsByName('itr1.filingStatus.noticeDateUnderSec')[0].readOnly=false;


		document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234A')[0].readOnly=false;
		document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234B')[0].readOnly=false;


		$(function(){
			$("#PersistITR_itr1_filingStatus_noticeDateUnderSec").datepicker({
				changeMonth: true,
				changeYear: true,
				yearRange: "-100:+6",
				dateFormat: "dd/mm/yy",
				buttonText: "Choose",
				showOtherMonths: true,
				selectOtherMonths: true
			});
		});

		$(function(){
			$("#PersistITR_itr1_filingStatus_noticeDate").datepicker("destroy");
		});

		$(function(){
			$("#PersistITR_itr1_filingStatus_origRetFiledDate").datepicker("destroy");
		});

	} else{

		document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234A')[0].readOnly=true;
		document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234B')[0].readOnly=true;

		if(val=='20'){

			document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234A')[0].readOnly=false;
			document.getElementsByName('itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234B')[0].readOnly=false;

		}

		document.getElementsByName('itr1.filingStatus.returnType')[0].value='O';

		document.getElementsByName('itr1.filingStatus.receiptNo')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.receiptNo')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.receiptNo')[0].value='';
		document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].value='';

		document.getElementsByName('itr1.filingStatus.ackNoOriginalReturn')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.ackNoOriginalReturn')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.ackNoOriginalReturn')[0].value = '';
		document.getElementsByName('itr1.filingStatus.noticeNo')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.noticeNo')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.noticeNo')[0].value = '';

		document.getElementsByName('itr1.filingStatus.noticeDate')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.noticeDate')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.noticeDate')[0].value = '';

		document.getElementsByName('itr1.filingStatus.noticeDateUnderSec')[0].disabled=true;
		document.getElementsByName('itr1.filingStatus.noticeDateUnderSec')[0].readOnly=true;
		document.getElementsByName('itr1.filingStatus.noticeDateUnderSec')[0].value = '';





		$(function(){
			$("#PersistITR_itr1_filingStatus_noticeDate").datepicker("destroy");
		});

		$(function(){
			$("#PersistITR_itr1_filingStatus_origRetFiledDate").datepicker("destroy");
		});

		$(function(){
			$("#PersistITR_itr1_filingStatus_noticeDateUnderSec").datepicker("destroy");
		});

	}
	}catch(e){
	}
}

function returnType_change() {
	var val=document.getElementsByName('itr1.filingStatus.returnType')[0].value;
	var sec=document.getElementsByName('itr1.filingStatus.returnFileSec')[0].value;
	var lang = document.getElementsByName("hindi")[0].value;
	if(val=='O'){
		if(sec == '17'){
		 if(lang=='Y'){
			addErrorXHTML('','यदि धारा 139(5) के तहत विवरणी दाखिल करने पर​ ,आपके​ आय विवरण में विवरणी का प्रकार मूल नहीं हो सकता हैं|');
			document.getElementsByName('itr1.filingStatus.returnType')[0].value='R';
			document.getElementsByName('itr1.filingStatus.receiptNo')[0].disabled=false;
			document.getElementsByName('itr1.filingStatus.receiptNo')[0].readOnly=false;
			document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].disabled=false;
			document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].readOnly=false;

		  }else{
			addErrorXHTML('','Return type in Income Details cannot be original if return filed under section 139(5)');
			document.getElementsByName('itr1.filingStatus.returnType')[0].value='R';
			document.getElementsByName('itr1.filingStatus.receiptNo')[0].disabled=false;
			document.getElementsByName('itr1.filingStatus.receiptNo')[0].readOnly=false;
			document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].disabled=false;
			document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].readOnly=false;
			}
		} else{
			document.getElementsByName('itr1.filingStatus.receiptNo')[0].disabled=true;
			document.getElementsByName('itr1.filingStatus.receiptNo')[0].readOnly=true;
			document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].disabled=true;
			document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].readOnly=true;
			document.getElementsByName('itr1.filingStatus.receiptNo')[0].value='';
			document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].value='';
		}
	} else if(val=='R'){
		if(sec != '17') {
		   if(lang=='Y'){
				addErrorXHTML('','यदि धारा 139(5) के तहत विवरणी दाखिल न  करने पर,आपके​ आय विवरण में विवरणी का प्रकार पुनरीक्षित नहीं हो सकता हैं|');
				document.getElementsByName('itr1.filingStatus.returnType')[0].value='O';
				document.getElementsByName('itr1.filingStatus.receiptNo')[0].disabled=true;
				document.getElementsByName('itr1.filingStatus.receiptNo')[0].readOnly=true;
				document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].disabled=true;
				document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].readOnly=true;
				document.getElementsByName('itr1.filingStatus.receiptNo')[0].value='';
				document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].value='';
			}else{
			addErrorXHTML('','Return type in Income Details cannot be revised if return NOT filed under section 139(5)');
			document.getElementsByName('itr1.filingStatus.returnType')[0].value='O';
			document.getElementsByName('itr1.filingStatus.receiptNo')[0].disabled=true;
			document.getElementsByName('itr1.filingStatus.receiptNo')[0].readOnly=true;
			document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].disabled=true;
			document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].readOnly=true;
			document.getElementsByName('itr1.filingStatus.receiptNo')[0].value='';
			document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].value='';
			}

		}else{
			document.getElementsByName('itr1.filingStatus.receiptNo')[0].disabled=false;
			document.getElementsByName('itr1.filingStatus.receiptNo')[0].readOnly=false;
			document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].disabled=false;
			document.getElementsByName('itr1.filingStatus.origRetFiledDate')[0].readOnly=false;
		}
	}
}

function onLoadFunction () {
	try{

		//disableBankDtlFlag();
		enableBankDtls();
		var state = document.getElementsByName('itr1.personalInfo.address.stateCode')[0];

		var portugeseCC5A = document.getElementsByName('itr1.filingStatus.portugeseCC5A')[0].value;
		var panOfSpouse = document.getElementsByName('itr1.filingStatus.panOfSpouse')[0];

		if(portugeseCC5A == 'Y'){

			panOfSpouse.disabled=false;
			panOfSpouse.readOnly=false;
			enableFieldInTable('taxDedSourceSrc','amtClaimedBySpouse');
			enableFieldInTable('taxDedSourceSrc26QC','amtClaimedBySpouse');
			enableFieldInTable('tcsTableId','amtClaimedBySpouse');

		} else {

			panOfSpouse.disabled=true;
			panOfSpouse.readOnly=true;
			panOfSpouse.value = '';
			disableFieldInTable('taxDedSourceSrc','amtClaimedBySpouse');
			disableFieldInTable('taxDedSourceSrc26QC','amtClaimedBySpouse');
			disableFieldInTable('tcsTableId','amtClaimedBySpouse');
		}
		populateVerName();
		$('#PersistITR12018 #submitITRTableIdUp tr td').each(function(){
			  if($(this).children().length == 0){
			    $(this).css('display','none');
			  }
		});


	}catch(e){

	}
}

function onStateChng(){
	try{
		var state = document.getElementsByName('itr1.personalInfo.address.stateCode')[0];
		//var country = document.getElementsByName('itr1.personalInfo.address.country')[0];
		var pinCode = document.getElementsByName('itr1.personalInfo.address.pinCode')[0];

		if(state.value != '99' && state.value != '-1'){
			//country.value='91';
			pinCode.value='';

		}else if(state.value == '99'){
			pinCode.value='999999';
		}
	}catch(e){

	}
}

function onChngPCC5A(){

	var portugeseCC5A = document.getElementsByName('itr1.filingStatus.portugeseCC5A')[0].value;
	var panOfSpouse = document.getElementsByName('itr1.filingStatus.panOfSpouse')[0];
	var panOfSpouseVal = document.getElementsByName('itr1.filingStatus.panOfSpouse')[0].value;
    var lang = document.getElementsByName("hindi")[0].value;


	if(portugeseCC5A == 'Y'){
	    if(lang =='Y'){

		   panOfSpouse.disabled=false;
		   panOfSpouse.readOnly=false;
		   enableFieldInTable('taxDedSourceSrc','amtClaimedBySpouse');
		   enableFieldInTable('tcsTableId','amtClaimedBySpouse');

		   if(panOfSpouseVal==""){
		   addErrorXHTML('','अगर धारा 5 क के प्रावधानों के अनुसार विभाजित होने की कोई आय है, तो कृपया आईटीआर 2 का उपयोग करें');

		   }

		}
	    else{

		   panOfSpouse.disabled=false;
		   panOfSpouse.readOnly=false;
		   enableFieldInTable('taxDedSourceSrc','amtClaimedBySpouse');
		   enableFieldInTable('tcsTableId','amtClaimedBySpouse');

		   if(panOfSpouseVal==""){
		   addErrorXHTML('','If there is any income to be apportioned in accordance with provisions of '+
		   'section 5A, please use ITR 2');
		}
	 }

    }
	 else {

		panOfSpouse.disabled=true;
		panOfSpouse.readOnly=true;
		panOfSpouse.value = '';
		disableFieldInTable('taxDedSourceSrc','amtClaimedBySpouse');
		disableFieldInTable('tcsTableId','amtClaimedBySpouse');
	}

}


function checkTRP(){

	try{

		var trpName=document.getElementsByName('itr1.taxReturnPreparer.nameOfTRP')[0].value;
		var trpId=document.getElementsByName('itr1.taxReturnPreparer.identificationNoOfTRP')[0].value;

		if(trpName.length==0 && trpId.length!=0){
			addErrorXHTML('','Please enter the TRP Name');

		}

		if(trpId.length==0 && trpName.length!=0){
			addErrorXHTML('','Please enter the TRP Id');

		}
		}catch(e){

		}

}

function populateVerName(){

	var fName=document.getElementsByName('itr1.personalInfo.assesseeName.firstName')[0].value;
	var mName=document.getElementsByName('itr1.personalInfo.assesseeName.middleName')[0].value;
	var lName=document.getElementsByName('itr1.personalInfo.assesseeName.surNameOrOrgName')[0].value;

	var verName;

	if(fName !='' && mName!='' ){
	verName=fName+ ' '+ mName +' '+lName ;
	}

	else if(fName =='' && mName!='' ){
		verName= mName +' '+lName ;
		}

	else if(fName !='' && mName =='' ){
		verName=fName+ ' '+lName ;
		}
	else{
		verName=lName;
	}
	document.getElementsByName('itr1.verification.declaration.assesseeVerName')[0].value=verName.toUpperCase();

}

function gtiWarningMessage() {

	var grossTotalIncome = document.getElementsByName('itr1.itr1IncomeDeductions.grossTotIncome')[0].value;
	var grossRentReceived = document.getElementsByName('itr1.itr1IncomeDeductions.grossRentReceived')[0].value;
	var taxPaidLocalAuth = document.getElementsByName('itr1.itr1IncomeDeductions.taxPaidlocalAuth')[0].value;
	var lang = document.getElementsByName("hindi")[0].value;
	if( parseInt(grossTotalIncome ,10) <0 ){
	    if(lang=='Y'){
			 grossTotalIncome = parseInt(0,10);
			 addErrorXHTML('','अग्रनीत किया जाना और मुजरा किया जाना का लाभ लेने के लिए, कृपया आईटीआर -2 का उपयोग करें।');
				}
		else{
   		     grossTotalIncome = parseInt(0,10);
	         addErrorXHTML('','To avail the benefit of carry forward and set off of loss, please use ITR-2');
			}

	}
	if( parseInt(grossRentReceived ,10) == 0 &&  parseInt(taxPaidLocalAuth ,10) > 0  ){
		if(lang=='Y'){
			 grossTotalIncome = parseInt(0,10);
			 addErrorXHTML('','स्थानीय अधिकारियों क भुगतान कर केवल तभी स्वीकार किया जा सकता है जब घर की संपत्ति से आय घोषित की जाती है।');
				}
		else{
  		     grossTotalIncome = parseInt(0,10);
	         addErrorXHTML('','Tax paid to local authorities can be claimed only if income from house property is declared');
			}

	}
}



function selfOccupdNegativChk(){

	var typeOfHP = document.getElementsByName('itr1.itr1IncomeDeductions.typeOfHP')[0].value;
	var incmHP = document.getElementsByName('itr1.itr1IncomeDeductions.totalIncomeOfHP')[0].value;
	var lang = document.getElementsByName("hindi")[0].value;
	if(typeOfHP== 'S' && incmHP > 0){
		if(lang=='Y'){
			addErrorXHTML('' ,'अनुभाग 23(2) के तहत​ स्वयं अधिग्रहीत गृह संपत्ति की वार्षिक आय​ शून्य नहीं होगा');
			j.setFieldError('itr1.itr1IncomeDeductions.totalIncomeOfHP','Annual value of Self Occupied House property shall be nil in view of Sec 23(2)');
		}
		else{
		addErrorXHTML('' ,'Annual value of Self Occupied House property shall be nil in view of Sec 23(2)');
		j.setFieldError('itr1.itr1IncomeDeductions.totalIncomeOfHP','Annual value of Self Occupied House property shall be nil in view of Sec 23(2)');
		}
	}

	}

function selfOccupdGrayed(){

	var hpValue = document.getElementsByName('itr1.itr1IncomeDeductions.typeOfHP')[0];

	if(hpValue.value=='S'){

	document.getElementsByName('itr1.itr1IncomeDeductions.grossRentReceived')[0].disabled=true;
	document.getElementsByName('itr1.itr1IncomeDeductions.grossRentReceived')[0].readOnly=true;
	document.getElementsByName('itr1.itr1IncomeDeductions.grossRentReceived')[0].value = '';

	document.getElementsByName('itr1.itr1IncomeDeductions.taxPaidlocalAuth')[0].disabled=true;
	document.getElementsByName('itr1.itr1IncomeDeductions.taxPaidlocalAuth')[0].readOnly=true;
	document.getElementsByName('itr1.itr1IncomeDeductions.taxPaidlocalAuth')[0].value = '';

	document.getElementsByName('itr1.itr1IncomeDeductions.annualValue')[0].value = 0;
	document.getElementsByName('itr1.itr1IncomeDeductions.standardDeduction')[0].value = 0;
	}

	else{
		document.getElementsByName('itr1.itr1IncomeDeductions.grossRentReceived')[0].disabled=false;
		document.getElementsByName('itr1.itr1IncomeDeductions.grossRentReceived')[0].readOnly=false;

				document.getElementsByName('itr1.itr1IncomeDeductions.taxPaidlocalAuth')[0].disabled=false;
		document.getElementsByName('itr1.itr1IncomeDeductions.taxPaidlocalAuth')[0].readOnly=false;

	}

}

function disableFieldInTable(tableId, fieldName) {

	var tab = document.getElementById(tableId);
	var allInputTags = tab.getElementsByTagName('input');

	for ( var i = 0; i < allInputTags.length; i++) {

		if (allInputTags[i].name.match(fieldName)) {

			allInputTags[i].disabled=true;
			allInputTags[i].readOnly=true;
			allInputTags[i].value = '';

		}
	}

}

function enableFieldInTable(tableId, fieldName) {

	var tab = document.getElementById(tableId);
	var allInputTags = tab.getElementsByTagName('input');

	for ( var i = 0; i < allInputTags.length; i++) {

		if (allInputTags[i].name.match(fieldName)) {

			allInputTags[i].disabled=false;
			allInputTags[i].readOnly=false;

		}
	}

}

function rndOffNrsTen(newVar){

	if(eval(newVar) < 10){
		return newVar;
	}

	if(eval(newVar) > 10){
		newVar = eval(Math.round(eval(newVar)/10)*parseInt('10' ,10));
		return newVar;
	}

}


function checkAmtClaimSpouse(){
var portFlag=document.getElementsByName('itr1.filingStatus.portugeseCC5A')[0].value;

var tab = document.getElementById('taxDedSourceSrc');
		var allInputTags = tab.getElementsByTagName('input');
			for(var i = 0; i < allInputTags.length; i++) {
					if (allInputTags[i].name.match("amtClaimedBySpouse$")) {
						if(portFlag=='Y' && (allInputTags[i].value==0||allInputTags[i].value=='')){
							addError(allInputTags[i],'The amount Claimed in the hands of Spouse is required',true);
							j.setFieldError(allInputTags[i].name,'The amount Claimed in the hands of Spouse  is required');

						}
					}
				}

}

function displayWarnings(){
	var balTaxPayable = coalesce(document.getElementsByName('itr1.taxPaid.balTaxPayable')[0].value,10);

    var incSal = document.getElementsByName('itr1.itr1IncomeDeductions.incomeFromSal')[0].value;
    var totalexempt= document.getElementsByName('itr1.taxPaid.taxesPaid.othersInc.othersIncTotal')[0].value;

    var tab1 = document.getElementById('taxDedSourceSal');
    var noOfRows=tab1.rows.length;
	var sum = 0;
	var amt = 0;

		for ( var i = 0; i < (noOfRows-3); i++) {
				amt = document.getElementsByName('itr1.tdSonSalaries.tdSonSalary['+i+'].incChrgSal')[0].value;
				sum = eval(parseInt(sum,10) + parseInt(coalesce(amt),10) );
		}

 var tdsSalminusTenPer = sum*parseFloat('0.90');

 if(((parseInt(coalesce(incSal),10) + parseInt(coalesce(totalexempt),10)) < tdsSalminusTenPer) && totalexempt > 0){
	alert('Income chargeable under the head ‘Salaries’ and the amount shown in "others" under "Exempt income"  is less than 90% of Salary reported in Schedule TDS1');
 }

 var tds3Total= document.getElementsByName('itr1.tdsDtls26QC.totalTDSDetails26QC')[0].value;
 var grossRent= document.getElementsByName('itr1.itr1IncomeDeductions.grossRentReceived')[0].value;

if (tds3Total > 0 && grossRent == 0 ){
	 alert('Gross rent received /receivable /letable value should be greater then zero');
 }
}


function populateBankName() {

	var table = document.getElementById('scheduleBA');
	var rowCount = table.rows.length;

	for ( var i = 0; i < rowCount - 2; i++) {
		var ifscCode = document.getElementsByName('itr1.refund.scheduleBA.addtnlBankDetails['+i+'].ifscCode')[0].value;
		if (ifscCode != '') {
			document.getElementsByName('bankCode')[0].value = ifscCode.substring(0, 4);
			if ($("#bankCode option:selected").text().trim() == "Select") {
				document.getElementsByName('itr1.refund.scheduleBA.addtnlBankDetails['+ i + '].bankName')[0].value = '';
			} else {
				document.getElementsByName('itr1.refund.scheduleBA.addtnlBankDetails['+ i + '].bankName')[0].value = $("#bankCode option:selected").text();
			}
		} else {
			document.getElementsByName('itr1.refund.scheduleBA.addtnlBankDetails[' + i+ '].bankName')[0].value = '';
		}
		document.getElementsByName('bankCode')[0].value='';
	}
}

function displayBankName() {
		var ifscCode = document.getElementsByName('itr1.refund.scheduleBA.priBankDetails.ifscCode')[0].value;
		if (ifscCode != '') {
			document.getElementsByName('bankCode')[0].value = ifscCode.substring(0, 4);
			if ($("#bankCode option:selected").text().trim() == "Select") {
				document.getElementsByName('itr1.refund.scheduleBA.priBankDetails.bankName')[0].value = '';
			} else {
				document.getElementsByName('itr1.refund.scheduleBA.priBankDetails.bankName')[0].value = $("#bankCode option:selected").text();
			}
		} else {
			document.getElementsByName('itr1.refund.scheduleBA.priBankDetails.bankName')[0].value = '';
		}
		document.getElementsByName('bankCode')[0].value='';
	}


function calculateTotalTax(tableId){

	var tab1 = document.getElementById(tableId);
    var noOfRows=tab1.rows.length;
	var sum = 0;
	var amt = 0;

		for ( var i = 0; i < (noOfRows-3); i++) {
				amt = document.getElementsByName('itr1.tdSonSalaries.tdSonSalary['+i+'].totalTDSSal')[0].value;
				sum = eval(parseInt(sum,10) + parseInt(coalesce(amt),10));
		}

		document.getElementsByName('itr1.tdSonSalaries.totalTDSonSalaries')[0].value = parseInt(sum,10);

}

function calculateTotalExemptIncome(tableId){


	var tab1 = document.getElementById(tableId);
    var noOfRows=tab1.rows.length;
	var sum = 0;
	var amt = 0;

		for ( var i = 0; i < (noOfRows-4); i++) {
			amt = document.getElementsByName('itr1.taxPaid.taxesPaid.othersInc.othersIncDtls['+i+'].othAmount')[0].value;

			sum = eval(parseInt(sum,10) + parseInt(coalesce(amt),10));
		}
		document.getElementsByName('itr1.taxPaid.taxesPaid.othersInc.othersIncTotal')[0].value = parseInt(sum,10);


}
function calculateTotalTaxTDS2(tableId){


	var tab1 = document.getElementById(tableId);
    var noOfRows=tab1.rows.length;
	var sum = 0;
	var amt = 0;

		for ( var i = 0; i < (noOfRows-3); i++) {
			amt = document.getElementsByName('itr1.tdSonOthThanSals.tdSonOthThanSal['+i+'].claimOutOfTotTDSOnAmtPaid')[0].value;

			sum = eval(parseInt(sum,10) + parseInt(coalesce(amt),10));
		}
		document.getElementsByName('itr1.tdSonOthThanSals.totalTDSonOthThanSals')[0].value = parseInt(sum,10);


}


function calculateTotalTaxTDS3(tableId){



		var tab1 = document.getElementById(tableId);
	    var noOfRows=tab1.rows.length;
		var sum = 0;
		var amt = 0;

			for ( var i = 0; i < (noOfRows-3); i++) {
				amt = document.getElementsByName('itr1.tdsDtls26QC.tdsDetails26QC['+i+'].claimOutOfTotTDSOnAmtPaid')[0].value;

				sum = eval(parseInt(sum,10) + parseInt(coalesce(amt),10));

			}

			document.getElementsByName('itr1.tdsDtls26QC.totalTDSDetails26QC')[0].value = parseInt(sum,10);
}

function calculateTotalTaxIT(tableId){

	var tab1 = document.getElementById(tableId);
    var noOfRows=tab1.rows.length;
	var sum = 0;
	var amt = 0;

		for ( var i = 0; i < (noOfRows-3); i++) {
			amt = document.getElementsByName('itr1.taxPayments.taxPayment['+i+'].amt')[0].value;
			sum = eval(parseInt(sum,10) + parseInt(coalesce(amt),10));
		}

		document.getElementsByName('itr1.taxPayments.totalTaxPayments')[0].value = parseInt(sum,10);
}


//To calculate Total tax on TCS

function calculateTotalTaxTCS(tableId){

	var tab1 = document.getElementById(tableId);
    var noOfRows=tab1.rows.length;
	var sum = 0;
	var amt = 0;

	if(tableId = 'tcsTableId'){


		for ( var i = 0; i < (noOfRows-3); i++) {
			 amt = document.getElementsByName('itr1.scheduleTCS.tcs['+i+'].amtTCSClaimedThisYear')[0].value;
			 sum = eval(parseInt(sum,10) + parseInt(coalesce(amt),10));
		}

		document.getElementsByName('itr1.scheduleTCS.totalSchTCS')[0].value = parseInt(sum,10);
	}
}


function totAmtOfSchedAL() {

	var immovableAssetLand = document.getElementsByName('itr1.scheduleAL.immovableAssetLand')[0].value;
	var immovableAssetBuilding = document.getElementsByName('itr1.scheduleAL.immovableAssetBuilding')[0].value;
	var cashInHand = document.getElementsByName('itr1.scheduleAL.movableAsset.cashInHand')[0].value;
	var jewelleryBullionEtc = document.getElementsByName('itr1.scheduleAL.movableAsset.jewelleryBullionEtc')[0].value;
	var vehiclYachtsBoatsAircrafts = document.getElementsByName('itr1.scheduleAL.movableAsset.vehiclYachtsBoatsAircrafts')[0].value;

	var totalImmovablMovablAssets = document.getElementsByName('itr1.scheduleAL.movableAsset.totalImmovablMovablAssets')[0];

	if(immovableAssetLand == '' && immovableAssetBuilding == '' && cashInHand == '' && jewelleryBullionEtc == '' && vehiclYachtsBoatsAircrafts == '') {
		totalImmovablMovablAssets.value = '';
	}

	else{
		totalImmovablMovablAssets.value = eval(parseInt(coalesce(immovableAssetLand)) + parseInt(coalesce(immovableAssetBuilding)) + parseInt(coalesce(cashInHand)) + parseInt(coalesce(jewelleryBullionEtc)) + parseInt(coalesce(vehiclYachtsBoatsAircrafts)));

	}
}

//To populate name in Verification section
function populateVerName(){


	var fName=document.getElementsByName('itr1.personalInfo.assesseeName.firstName')[0].value;
	var mName=document.getElementsByName('itr1.personalInfo.assesseeName.middleName')[0].value;
	var lName=document.getElementsByName('itr1.personalInfo.assesseeName.surNameOrOrgName')[0].value;

	var verName;

	if(fName !='' && mName!='' ){
	verName=fName+ ' '+ mName +' '+lName ;
	}

	else if(fName =='' && mName!='' ){
		verName= mName +' '+lName ;
		}

	else if(fName !='' && mName =='' ){
		verName=fName+ ' '+lName ;
		}
	else{
		verName=lName;
	}
	document.getElementsByName('itr1.verification.declaration.assesseeVerName')[0].value=verName.toUpperCase();

}



//To remove Table Data
function removeTableData(tableID,flag){

    var tab = document.getElementById(tableID);

    if(flag!='Y'){

		var row = tab.rows.length;
		if((row-2) == "1"){

		 tab.getElementsByTagName('input')[0].checked =true;
			deleteRowTable(tableID,1,1);
			$('#'+tableID+' input').attr("checked" , false);

		}else{

		$('#'+tableID).find('[type=\"checkbox\"]').click();
		deleteRowTable(tableID,1,1);
		$('#'+tableID+' input').attr("checked" , false);
		}

    }

	var allInputTags = tab.getElementsByTagName('input');
    var selectTags=tab.getElementsByTagName('select');


	for(var i = 0; i < allInputTags.length; i++) {
		if(flag=='Y'){
			allInputTags[i].disabled=false;
			allInputTags[i].readOnly=false;

	}else{

		allInputTags[i].disabled=true;
		allInputTags[i].readOnly=true;
		allInputTags[i].value="";
	}
}
for(var i = 0; i < selectTags.length; i++){
	if(flag=='Y'){
		  selectTags[i].disabled=false;
	}else{
		selectTags[i].disabled=true;
		selectTags[i].value="";

	}
}

}




function enableBankDtls()
{
	var bankDtlFlag = document.getElementsByName('itr1.refund.scheduleBA.bankDtlsFlag')[0];
	bankDtlFlag.value = document.getElementsByName('itr1.refund.scheduleBA.bankDtlsFlag_display')[0].value;

	enableField('itr1.refund.scheduleBA.bankDtlsFlag','Y','itr1.refund.scheduleBA.priBankDetails.ifscCode');
	enableField('itr1.refund.scheduleBA.bankDtlsFlag','Y','itr1.refund.scheduleBA.priBankDetails.bankName');
	enableField('itr1.refund.scheduleBA.bankDtlsFlag','Y','itr1.refund.scheduleBA.priBankDetails.bankAccountNo');


	var flag = document.getElementsByName('itr1.refund.scheduleBA.bankDtlsFlag')[0].value;
	removeTableData('scheduleBA',flag);

	enableField('itr1.refund.scheduleBA.bankDtlsFlag','N','itr1.refund.scheduleBA.foreignBankDetails[0].ibanSwiftCode');
	enableField('itr1.refund.scheduleBA.bankDtlsFlag','N','itr1.refund.scheduleBA.foreignBankDetails[0].bankName');
	enableField('itr1.refund.scheduleBA.bankDtlsFlag','N','itr1.refund.scheduleBA.foreignBankDetails[0].countryCode');
	enableField('itr1.refund.scheduleBA.bankDtlsFlag','N','itr1.refund.scheduleBA.foreignBankDetails[0].bankAccountNo');

}

//To enable field
function enableField(src, val, targets) {
	var srcField = document.getElementsByName(src)[0];
	if (contains(val, srcField.value)) {
		for ( var i = 2; i < arguments.length; i++) {
			var targetField = document.getElementsByName(arguments[i])[0];
			targetField.disabled = false;
			targetField.readOnly = false;
		}
	} else {
		for ( var i = 2; i < arguments.length; i++) {
			var targetField = document.getElementsByName(arguments[i])[0];
			if (targetField.type == 'select-one') {
				targetField.selectedIndex = 0;
			} else {
				targetField.value = '';
			}
			targetField.disabled = true;
			targetField.readOnly = true;
		}
	}

}



function contains(arr, val) {
	if (arr.constructor.name == "Array") {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == val) {
				return true;
			}
		}
		return false;
	} else {
		return (arr == val);
	}
}
function section80DChk()
{
	var lang = document.getElementsByName("hindi")[0].value;
	var age = calcAge();
	var sec80DA = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.healthInsurancePremium')[0].value;
	var sec80DB = document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.medicalExpenditure')[0].value;

	if(lang == 'Y'){
		if( (sec80DA == '2' || sec80DA == '7' ) && age < 60)
			{
			addErrorXHTML(document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.healthInsurancePremium')[0] ,'कृपया धारा 80ङ  के ड्रॉपडाउन से एक वैध विकल्प का चयन करें');
			focusTab('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DHealthInsurancePremiumUsr');
			return false;
			}
		/*else if( (sec80DB == '1' || sec80DB == '3' ) && age < 80)
			{
			addErrorXHTML(document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.medicalExpenditure')[0] ,'कृपया धारा 80ङ  के ड्रॉपडाउन से एक वैध विकल्प का चयन करें');
			focusTab('itr4S.itr4SIncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.medicalExpenditure');
			return false;
			}*/
		}else{
			if( (sec80DA == '2' || sec80DA == '7' ) && age < 60)
			{
			addErrorXHTML(document.getElementsByName('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.healthInsurancePremium')[0] ,'Please select a valid option from the dropdown of Sec.80D');
			focusTab('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.healthInsurancePremium');
			return false;
			}
	    /*else if( (sec80DB == '1' || sec80DB == '3' ) && age < 80)
			{
			addErrorXHTML(document.getElementsByName('itr4S.itr4SIncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.medicalExpenditure')[0] ,'Please select a valid option from the dropdown of Sec.80D');
			focusTab('itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.medicalExpenditure');
			return false;
			}*/
		}
	return true;
}


function totalSalary(){
   	var sal = document.getElementsByName('itr1.itr1IncomeDeductions.salary')[0] ; sal.value = coalesce(sal.value);
	var alwnsNotExempt = document.getElementsByName('itr1.itr1IncomeDeductions.alwnsNotExempt')[0] ; alwnsNotExempt.value = coalesce(alwnsNotExempt.value);
	var perquisitesValue = document.getElementsByName('itr1.itr1IncomeDeductions.perquisitesValue')[0] ; perquisitesValue.value = coalesce(perquisitesValue.value);
	var profitsInSalary = document.getElementsByName('itr1.itr1IncomeDeductions.profitsInSalary')[0] ; profitsInSalary.value = coalesce(profitsInSalary.value);
	var deductionUs16 = document.getElementsByName('itr1.itr1IncomeDeductions.deductionUs16')[0] ; deductionUs16.value = coalesce(deductionUs16.value);
	var empCategory = document.getElementsByName('itr1.personalInfo.employerCategory')[0].value ;
	var incomeFromSal = document.getElementsByName('itr1.itr1IncomeDeductions.incomeFromSal')[0];
	var lang = document.getElementsByName("hindi")[0].value;

	incomeFromSal.value = coalesce(eval(parseInt(sal.value ,10)+
	 (parseInt(alwnsNotExempt.value ,10))+
	 (parseInt(perquisitesValue.value ,10))+
	 (parseInt(profitsInSalary.value ,10))));

	if(lang=='Y'){
		  if (empCategory == 'OTH' && deductionUs16.value > 5000) {
			addErrorXHTML('', ' कर्मचारी श्रेणी "अन्य" के लिए अधिकतम राशि जिसे आप  धारा 16 में बंद कर सकते हैं ,5000 है');
		  } else if (empCategory == 'NA' && deductionUs16.value > 0) {
			addErrorXHTML('', 'धारा 16 कटौती नियोक्ता श्रेणी "अनुपलब्ध" के लिए लागू नहीं है');
		  }
	}else{
	      if (empCategory == 'OTH' && deductionUs16.value > 5000) {
		  	addErrorXHTML('', ' For employee category "Others" maximum amount that can be claimed u/s 16 is 5000');
		   } else if (empCategory == 'NA' && deductionUs16.value > 0) {
			addErrorXHTML('', 'Deduction u/s 16 is not applicable for employer category " NA"');
		   }
		 }
	if(deductionUs16.value > 10000)
		{
		incomeFromSal.value = coalesce(incomeFromSal.value);
		}else
			{
			incomeFromSal.value = coalesce(eval(parseInt(incomeFromSal.value ,10) - parseInt(deductionUs16.value ,10)));
			if( incomeFromSal.value < 0 ){

				incomeFromSal.value = parseInt('0',10);
				}
			}

}


function annualValue(){
	var grossRentReceived = document.getElementsByName('itr1.itr1IncomeDeductions.grossRentReceived')[0] ; grossRentReceived.value = coalesce(grossRentReceived.value);
	var taxPaidlocalAuth = document.getElementsByName('itr1.itr1IncomeDeductions.taxPaidlocalAuth')[0] ; taxPaidlocalAuth.value = coalesce(taxPaidlocalAuth.value);
	var annualValue = document.getElementsByName('itr1.itr1IncomeDeductions.annualValue')[0] ;

	annualValue.value = eval(parseInt(grossRentReceived.value ,10))-
	 eval(parseInt(taxPaidlocalAuth.value ,10));
}

function headHouseProperty(){
	var annualValue = document.getElementsByName('itr1.itr1IncomeDeductions.annualValue')[0] ; annualValue.value = coalesce(annualValue.value);
	var standardDeduction = document.getElementsByName('itr1.itr1IncomeDeductions.standardDeduction')[0] ; standardDeduction.value = coalesce(standardDeduction.value);
	var interestPayable = document.getElementsByName('itr1.itr1IncomeDeductions.interestPayable')[0] ; interestPayable.value = coalesce(interestPayable.value);
	var totalIncomeOfHP = document.getElementsByName('itr1.itr1IncomeDeductions.totalIncomeOfHP')[0] ;


	totalIncomeOfHP.value = eval(parseInt(annualValue.value ,10))-
	 eval(parseInt(standardDeduction.value ,10))-
	 eval(parseInt(interestPayable.value ,10));

	if (totalIncomeOfHP.value < -200000) {
		totalIncomeOfHP.value = -200000;
	}
}

function stdDeduction30PerCalc()
{
	var anu=document.getElementsByName('itr1.itr1IncomeDeductions.annualValue')[0].value;
	document.getElementsByName('itr1.itr1IncomeDeductions.standardDeduction')[0].value= Math.round(eval(parseInt(coalesce(anu),10)*(0.3),10));
	if (anu < 0) {
		document.getElementsByName('itr1.itr1IncomeDeductions.standardDeduction')[0].value = 0;
	}
}

function interestPayableCapital() {

	var typeOfHP = document
			.getElementsByName('itr1.itr1IncomeDeductions.typeOfHP')[0].value;
	var interestPay = document
			.getElementsByName('itr1.itr1IncomeDeductions.interestPayable')[0].value;
	var lang = document.getElementsByName("hindi")[0].value;

	if (typeOfHP == 'S' && interestPay > 200000) {
		if(lang=='Y'){
		   addErrorXHTML('','उधार पूंजी पर देय ब्याज 2,00,000 से अधिक नहीं होना चाहिए');
		}  else{
		  addErrorXHTML('',
				'Interest payable on borrowed capital should not exceed 2,00,000');
		}
			focusTab('itr1.itr1IncomeDeductions.interestPayable');
	}

}

function spousePanCheck()
{
    var assesseePan=document.getElementsByName('itr1.personalInfo.pan')[0].value;
    var spousePan=document.getElementsByName('itr1.filingStatus.panOfSpouse')[0].value;
    var lang = document.getElementsByName("hindi")[0].value;
    if(assesseePan==spousePan)
    	{
    	if(lang=='Y'){
    		addErrorXHTML('','पति / पत्नी का पैन निर्धारिती पैन के समान नहीं हो सकता है।');
    	}else{
    		addErrorXHTML('','PAN of the spouse cannot be same as assessee PAN .');
    	}
    	focusTab('itr1.filingStatus.panOfSpouse');
    	}
	}


function onPropertyChange() {
	var table = document.getElementById('othersIncome');
	var noOfRows = table.rows.length;
	for (var i = 0; i < noOfRows - 4; i++) {
		var type = document.getElementsByName('itr1.taxPaid.taxesPaid.othersInc.othersIncDtls['	+ i + '].natureDesc')[0].value;
		if (type == "OTH") {
			document.getElementsByName('itr1.taxPaid.taxesPaid.othersInc.othersIncDtls['+ i + '].othNatOfInc')[0].readOnly = false;
			document.getElementsByName('itr1.taxPaid.taxesPaid.othersInc.othersIncDtls['+ i + '].othNatOfInc')[0].disabled = false;
		} else {
			document.getElementsByName('itr1.taxPaid.taxesPaid.othersInc.othersIncDtls['+ i + '].othNatOfInc')[0].value = "";
			document.getElementsByName('itr1.taxPaid.taxesPaid.othersInc.othersIncDtls['+ i + '].othNatOfInc')[0].readOnly = true;
			document.getElementsByName('itr1.taxPaid.taxesPaid.othersInc.othersIncDtls['+ i + '].othNatOfInc')[0].disabled = true;
		}
	}
}

