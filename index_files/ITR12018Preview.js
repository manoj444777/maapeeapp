function validateField_itr1_personalInfo_assesseeName_firstName(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"Assessees name in Verification cannot exceed 25 characters.",
						'0', '25')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_assesseeName_middleName(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Middle name cannot be more than 25 characters.", '0',
						'25')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_assesseeName_surNameOrOrgName(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Last name is mandatory. Please enter Last name in tab: General Information.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Last name cannot be more than 75 characters.", '1',
						'75')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_pan(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"PAN is mandatory. Please enter PAN in tab: General Information.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"Invalid PAN. PAN format should be First 5 Alphabets, next 4 digits, then 1 Alphabet.",
						'10', '10')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid PAN. PAN format should be First 5 Alphabets, next 4 digits, then 1 Alphabet.",
						'[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid PAN. PAN format should be First 5 Alphabets, next 4 digits, then 1 Alphabet. 4th letter must be P.",
						'[A-Za-z]{3}[pP]{1}[A-Za-z]{1}[0-9]{4}[A-Za-z]{1}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_address_residenceNo(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Flat/ Door/ Building in tab:General Information is mandatory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"Flat/ Door/ Building cannot be more than 50 characters.",
						'1', '50')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_address_premises(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"itr1.personalInfo.address.premises.error.length",
						'-1', '50')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_address_roadOrStreet(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"Road/ Street/Building cannot be more than 50 characters.",
						'0', '50')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_address_residenceName(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"Name of Premises / Building / Village cannot be more than 50 characters.",
						'0', '50')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_address_localityOrArea(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Area/ Locality in tab: General Information is mandatory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Area/ Locality cannot be more than 50 characters.",
						'1', '50')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_address_cityOrTownOrDistrict(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Town/City/District in tab: General Information is mandatory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"Town/City/District cannot be more than 50 characters.",
						'1', '50')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_address_stateCode(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"State in tab: General Information is mandatory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"State in tab: General Information is mandatory.",
						'^(?!-1$).*')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"State selected in tab: General Information is invalid.",
						'^[0-9]{1}[0-9]{1}$')) {
			errors = true;
			continueValidation = false;
		}
		/*if (conditionalRegexCheck(field, 'itr1.personalInfo.address.country',
				'91')) {
			if (continueValidation
					&& regexCheck_Online(
							field,
							"State in tab: General Information cannot be outside India as you have selected country India.",
							'^(?!99$).*')) {
				errors = true;
				continueValidation = false;
			}
		}*/
	}
	return !errors;
}
/*function validateField_itr1_personalInfo_address_country(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Country in tab: General Information is mandatory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Country in tab: General Information is mandatory.",
						'^(?!-1$).*')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Country selected in tab: General Information is invalid.",
						'^[0-9]{1,4}$')) {
			errors = true;
			continueValidation = false;
		}
		if (conditionalRegexCheck(field, 'itr1.personalInfo.address.stateCode',
				'^(?!(99|-1)$).*')) {
			if (continueValidation
					&& regexCheck_Online(
							field,
							"Country cannot be other than India as you have selected an Indian state.",
							'^91$')) {
				errors = true;
				continueValidation = false;
			}
		}
		if (conditionalRegexCheck(field, 'itr1.personalInfo.address.stateCode',
				'99')) {
			if (continueValidation
					&& regexCheck_Online(
							field,
							"Country should be other than India as you have selected state outside India.",
							'^(?!91$).*')) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}*/
function validateField_itr1_personalInfo_address_pinCode(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "Please enter Pincode. ",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Pincode must be exactly 6 digits and should not start with zero.",
						'^[1-9]{1}[0-9]{5}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
/*function validateField_itr1_personalInfo_address_zipCode(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& conditionalRequiredCheck(field,
						'itr1.personalInfo.address.country', '^(?!91$).*')) {
			if (globalVillageCheck(field, "Please enter Zipcode. ",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Zipcode must be of 8 characters", '-1', '8')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}*/
function validateField_itr1_personalInfo_address_emailAddress(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Email Address in tab: General Information is mandatory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& emailCheck_Online(field, "Invalid E-mail ID. Please retry.")) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_address_countryCodeMobile(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "Please enter STD/ISD code.",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"(STD/ISD code- STD/ISD Code should not be more than 5 digits (do not prefix 0 before STD/ISD code).",
						'^[1-9]{1}[0-9]{1,4}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_address_mobileNo(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field,
					"Mobile number in tab: General Information is mandatory .",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						" Please enter a valid 10 digit Mobile Number.",
						'^[0-9]{10}')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						" Please enter a valid Mobile Number.",
						'^[6-9]{1}[0-9]{9}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_dob(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field,
					"Date of Birth in tab: General Information is mandatory.",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		if (continueValidation && validateDateCheck_online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& maxDateCheck(field,
						"itr1.personalInfo.dob.2016.error.invalid", null,
						'01/04/2018', false)) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_employerCategory(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Employer Category in tab: General Information is mandatory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Employer Category in tab: General Information is mandatory.",
						'^(?!-1$).*')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Employer Category selected in tab: General Information is invalid.",
						'(GOV)|(PSU)|(OTH)|(NA)$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_aadhaarCardNo(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Please enter the valid Aadhaar number.",
						'^$|^[0-9]{12}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Please enter the valid Aadhaar number.",
						'^((?![0]{12})[0-9]{12})*$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Please enter the valid Aadhaar number.",
						'^((?![1]{12})[0-9]{12})*$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_personalInfo_aadhaarEnrolmentId(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Please enter the valid Aadhaar Enrolment Id.",
						'^$|^[0-9]{28}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Please enter the valid Aadhaar Enrolment Id.",
						'^((?![0]{28})[0-9]{28})*$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Please enter the valid Aadhaar Enrolment Id.",
						'^((?![1]{28})[0-9]{28})*$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_filingStatus_returnFileSec(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Return filed under section in tab: General Information is mandatory.",
							parseFloat('-9223372036854775808'),
							parseFloat('99999999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Return filed under section in tab: General Information is mandatory.",
						'^(?!-1$).*')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Return filed under section selected in tab: General Information is invalid.",
						'^11|12|13|14|15|16|17|18|20$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Sec139(4) read with section 119(2)(b) should be filed after expiry of due date mentioned in 139(1)/139(4).",
						'^(?!20$).*$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_filingStatus_returnType(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Whether original or revised return in tab: General Information  is mandatory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Whether original or revised return in tab: General Information  is mandatory.",
						'^(?!-1$).*')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Type of return selected in tab: General Information  is invalid.",
						'(O)|(R)$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_filingStatus_receiptNo(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& conditionalReqStringCheck(field,
						"Acknowledgement no. is mandatory for revised return.",
						'itr1.filingStatus.returnFileSec', '17')) {
			errors = true;
			continueValidation = false;
		}
		if (conditionalRegexCheck(field, 'itr1.filingStatus.returnFileSec',
				'17')) {
			if (continueValidation
					&& regexCheck_Online(field,
							"Invalid Acknowledgement no. Please retry.",
							'^[0-9]{15}$')) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_filingStatus_origRetFiledDate(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& conditionalDateCheck(field,
						'itr1.filingStatus.returnFileSec', '17')) {
			if (globalVillageCheck(
					field,
					"Date of filing of Original Return is mandatory for revised return.",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		if (continueValidation && validateDateCheck_online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& minDateCheck(field,
						"Notice Date cannot be prior to 01/04/2018", null,
						'31/03/2018', false)) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_filingStatus_ackNoOriginalReturn(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& conditionalReqStringCheck(
						field,
						"Acknowledgement no. is mandatory for return filed u/s 139(9).",
						'itr1.filingStatus.returnFileSec', '18')) {
			errors = true;
			continueValidation = false;
		}
		if (conditionalRegexCheck(field, 'itr1.filingStatus.returnFileSec',
				'18')) {
			if (continueValidation
					&& regexCheck_Online(field,
							"Invalid Acknowledgement no. Please retry.",
							'^[0-9]{15}$')) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_filingStatus_noticeNo(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& conditionalReqStringCheck(
						field,
						"Notice number is mandatory for return filed u/s 139(9).",
						'itr1.filingStatus.returnFileSec', '18')) {
			errors = true;
			continueValidation = false;
		}
		if (conditionalRegexCheck(field, 'itr1.filingStatus.returnFileSec',
				'18')) {
			if (continueValidation
					&& regexCheck_Online(field,
							"Notice number cannot exceed 23 characters.",
							'^[a-zA-Z0-9/]{0,23}$')) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_filingStatus_noticeDate(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& conditionalDateCheck(field,
						'itr1.filingStatus.returnFileSec', '18')) {
			if (globalVillageCheck(field,
					"Notice Date is  mandatory for return filed u/s 139(9).",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		if (continueValidation && validateDateCheck_online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& minDateCheck(field,
						"Notice Date cannot be prior to 01/04/2018.", null,
						'31/03/2018', false)) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_filingStatus_noticeDateUnderSec(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& conditionalDateCheck(field,
						'itr1.filingStatus.returnFileSec', '13|14|15|16')) {
			if (globalVillageCheck(
					field,
					"Notice Date is  mandatory for return filed u/s 139(9)/142(1)/148/153A/153C.",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		if (continueValidation && validateDateCheck_online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& minDateCheck(field,
						"Notice Date cannot be prior to 01/04/2018.", null,
						'31/03/2018', false)) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_filingStatus_portugeseCC5A(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Whether governed by Portuguese Civil code is mandatory. ",
						'^(?!-1$).*')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Option selected in governed by Portuguese Civil code is invalid.",
						'(Y)|(N)$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_filingStatus_panOfSpouse(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& conditionalReqStringCheck(
						field,
						"Please enter PAN as you selected Yes in Portuguese code.",
						'itr1.filingStatus.portugeseCC5A', 'Y')) {
			errors = true;
			continueValidation = false;
		}
		if (conditionalRegexCheck(field, 'itr1.filingStatus.portugeseCC5A', 'Y')) {
			if (continueValidation
					&& regexCheck_Online(
							field,
							"Invalid PAN.PAN format should be First 5 Alphabets, next 4 digits, then 1 Alphabet. 4th letter must be P.",
							'[A-Za-z]{3}[pP]{1}[A-Za-z]{1}[0-9]{4}[A-Za-z]{1}$')) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_salary(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_alwnsNotExempt(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_perquisitesValue(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_profitsInSalary(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductionUs16(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Deduction u/s 16 should not exceed 10,000 and  should be non-negative, non-decimal, numeric, not exceeding 14 digits.",
							parseFloat('0'), parseFloat('10000'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_incomeFromSal(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_typeOfHP(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Option selected in type of House Property is invalid.",
						'^S$|^L$|^D$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& conditionalRequiredCheck(field,
						'itr1.itr1IncomeDeductions.totalIncomeOfHP',
						'^(?!0).*$')) {
			if (globalVillageCheck(field,
					"Please select type of House Property.", globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_grossRentReceived(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_taxPaidlocalAuth(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_annualValue(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('-99999999999999'),
							parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_standardDeduction(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_interestPayable(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& conditionalRequiredCheck(field,
						'itr1.itr1IncomeDeductions.typeOfHP', 'S')) {
			if (globalVillageCheck(
					field,
					"Interest payable on borrowed capital should not exceed 200000",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_totalIncomeOfHP(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-decimal, numeric, not exceeding 14 digits",
							parseFloat('-200000'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_TotalIncomeOfHPNegative(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-decimal, numeric, not exceeding 14 digits",
							parseFloat('-99999999999999'),
							parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_incomeOthSrc(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_grossTotIncome(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "Invalid amount.Please retry.",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-decimal, numeric, not exceeding 14 digits",
							parseFloat('-99999999999999'),
							parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_totalIncome(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "Invalid amount.Please retry.",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-decimal, numeric, not exceeding 14 digits",
							parseFloat('-99999999999999'),
							parseFloat('5000000'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80C(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.section80C.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80CCC(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.section80CCC.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80CCD(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.section80CCD.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80CCDEmployer(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field,
					"error.section80CCDEmployer.required", globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80D(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.section80D.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80DD(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.section80DD.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80DDB(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.section80DDB.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80E(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.section80E.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80EE(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(
					field,
					"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80CCD1B(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(
					field,
					"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80G(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.section80G.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80GG(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.section80GG.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80GGA(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.section80GGA.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80GGC(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.section80GGC.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80U(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.section80U.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80CCG(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(
					field,
					"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80RRB(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(
					field,
					"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80QQB(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(
					field,
					"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80TTA(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(
					field,
					"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_totalChapVIADeductions(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "Invalid amount.Please retry.",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80C_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80CCC_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80CCD_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80CCDEmployer_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80D_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DD_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DDB_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80E_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80EE_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80CCD1B_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80G_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80GG_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80GGA_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80GGC_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80U_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80CCG_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80RRB_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80QQB_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80TTA_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_totalChapVIADeductions_Usr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "Invalid amount.Please retry.",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1TaxComputationOnline_totalTaxPayable(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.totalTaxPayable.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"error.totalTaxPayable.length", parseFloat('0'),
							parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1TaxComputationOnline_rebate87A(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "Enter Amount.", globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Non negative, no decimal, numeric, not exceeding 2000.",
							parseFloat('0'), parseFloat('5000'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1TaxComputationOnline_taxPayableOnRebate(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(
					field,
					"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1TaxComputationOnline_educationCess(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "error.educationCess.required",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"error.educationCess.length", parseFloat('0'),
							parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1TaxComputationOnline_grossTaxLiability(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "Invalid amount.Please retry.",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1TaxComputationOnline_section89(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "Enter Amount.", globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1TaxComputationOnline_netTaxLiability(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "Invalid amount.Please retry.",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1TaxComputationOnline_intrstPay_intrstPayUs234A(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(
					field,
					"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1TaxComputationOnline_intrstPay_intrstPayUs234B(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(
					field,
					"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1TaxComputationOnline_intrstPay_intrstPayUs234C(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(
					field,
					"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1TaxComputationOnline_intrstPay_lateFilingFee234F(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(
					field,
					"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1TaxComputationOnline_totalIntrstPay(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "Invalid amount.Please retry.",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1TaxComputationOnline_totTaxPlusIntrstPay(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "Invalid amount.Please retry.",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_tdSonSalaries_tdSonSalary(field, toclear) {
	var errors = false;
	{
		var rowCount = countRowInTable('itr1.tdSonSalaries.tdSonSalary',
				'employerOrDeductorOrCollectDetl.tan');
		if (validateTableCheck(
				'itr1.tdSonSalaries.tdSonSalary[',
				rowCount,
				'null',
				'null',
				'N',
				[
						"employerOrDeductorOrCollectDetl.tan",
						"employerOrDeductorOrCollectDetl.employerOrDeductorOrCollecterName",
						"incChrgSal", "totalTDSSal" ],
				[ "Please enter TAN of employer.",
						"Please enter name of the employer.",
						"Please enter the Income under Salary.",
						"Please enter the Tax deducted." ],
				[
						validateField_itr1_tdSonSalaries_tdSonSalary_employerOrDeductorOrCollectDetl_tan,
						validateField_itr1_tdSonSalaries_tdSonSalary_employerOrDeductorOrCollectDetl_employerOrDeductorOrCollecterName,
						validateField_itr1_tdSonSalaries_tdSonSalary_incChrgSal,
						validateField_itr1_tdSonSalaries_tdSonSalary_totalTDSSal ])) {
			errors = true;
		}
	}
	return !errors;
}
function validateField_itr1_tdSonOthThanSals_tdSonOthThanSal(field, toclear) {
	var errors = false;
	{
		var rowCount = countRowInTable('itr1.tdSonOthThanSals.tdSonOthThanSal',
				'employerOrDeductorOrCollectDetl.tan');
		if (validateTableCheck(
				'itr1.tdSonOthThanSals.tdSonOthThanSal[',
				rowCount,
				'null',
				'null',
				'N',
				[
						"employerOrDeductorOrCollectDetl.tan",
						"employerOrDeductorOrCollectDetl.employerOrDeductorOrCollecterName",
						"amtForTaxDeduct", "deductedYr", "totTDSOnAmtPaid",
						"claimOutOfTotTDSOnAmtPaid" ],
				[ "Please enter TAN of deductor.",
						"Please enter name of the deductor.",
						"Enter Amount which is subject to tax deduction",
						"Please enter Deducted Year.",
						"Please enter the Tax deducted.",
						"Please enter amount claimed for this year." ],
				[
						validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_employerOrDeductorOrCollectDetl_tan,
						validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_employerOrDeductorOrCollectDetl_employerOrDeductorOrCollecterName,
						validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_amtForTaxDeduct,
						validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_deductedYr,
						validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_totTDSOnAmtPaid,
						validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_claimOutOfTotTDSOnAmtPaid ])) {
			errors = true;
		}
	}
	return !errors;
}
function validateField_itr1_tdsDtls26QC_tdsDetails26QC(field, toclear) {
	var errors = false;
	{
		var rowCount = countRowInTable('itr1.tdsDtls26QC.tdsDetails26QC',
				'panOfTenant');
		if (validateTableCheck(
				'itr1.tdsDtls26QC.tdsDetails26QC[',
				rowCount,
				'null',
				'null',
				'N',
				[ "panOfTenant", "nameOfTenant", "amtForTaxDeduct",
						"deductedYr", "taxDeducted",
						"claimOutOfTotTDSOnAmtPaid" ],
				[
						"Please enter the PAN of Tenant.",
						"Please enter the Name of Tenant.",
						"Please enter the amount Amount which is subject to tax deduction.",
						"Please select deduction year from dropdown.",
						"Please enter the Tax deducted.",
						"Please enter amount claimed for this year." ],
				[
						validateField_itr1_tdsDtls26QC_tdsDetails26QC_panOfTenant,
						validateField_itr1_tdsDtls26QC_tdsDetails26QC_nameOfTenant,
						validateField_itr1_tdsDtls26QC_tdsDetails26QC_amtForTaxDeduct,
						validateField_itr1_tdsDtls26QC_tdsDetails26QC_deductedYr,
						validateField_itr1_tdsDtls26QC_tdsDetails26QC_taxDeducted,
						validateField_itr1_tdsDtls26QC_tdsDetails26QC_claimOutOfTotTDSOnAmtPaid ])) {
			errors = true;
		}
	}
	return !errors;
}
function validateField_itr1_scheduleTCS_tcs(field, toclear) {
	var errors = false;
	{
		var rowCount = countRowInTable('itr1.scheduleTCS.tcs',
				'employerOrDeductorOrCollectDetl.tan');
		if (validateTableCheck(
				'itr1.scheduleTCS.tcs[',
				rowCount,
				'null',
				'null',
				'N',
				[
						"employerOrDeductorOrCollectDetl.tan",
						"employerOrDeductorOrCollectDetl.employerOrDeductorOrCollecterName",
						"amtTaxCollected", "deductedYr", "totalTCS",
						"amtTCSClaimedThisYear" ],
				[ "Please enter TAN of the Collector",
						"Please enter name of the collector.",
						"Enter Amount which is subject to tax collection.",
						"Please enter Collected Year.",
						"Please enter the Tax collected.",
						"Please enter amount claimed for this year." ],
				[
						validateField_itr1_scheduleTCS_tcs_employerOrDeductorOrCollectDetl_tan,
						validateField_itr1_scheduleTCS_tcs_employerOrDeductorOrCollectDetl_employerOrDeductorOrCollecterName,
						validateField_itr1_scheduleTCS_tcs_amtTaxCollected,
						validateField_itr1_scheduleTCS_tcs_deductedYr,
						validateField_itr1_scheduleTCS_tcs_totalTCS,
						validateField_itr1_scheduleTCS_tcs_amtTCSClaimedThisYear ])) {
			errors = true;
		}
	}
	return !errors;
}
function validateField_itr1_taxPayments_taxPayment(field, toclear) {
	var errors = false;
	{
		var rowCount = countRowInTable('itr1.taxPayments.taxPayment', 'bsrCode');
		if (validateTableCheck('itr1.taxPayments.taxPayment[', rowCount,
				'null', 'null', 'N', [ "bsrCode", "dateDep", "srlNoOfChaln",
						"amt" ], [ "Please enter the BSR code.",
						"Please enter Date of Deposit.",
						"Please enter the serial number of challan.",
						"Please enter the Tax Paid." ], [
						validateField_itr1_taxPayments_taxPayment_bsrCode,
						validateField_itr1_taxPayments_taxPayment_dateDep,
						validateField_itr1_taxPayments_taxPayment_srlNoOfChaln,
						validateField_itr1_taxPayments_taxPayment_amt ])) {
			errors = true;
		}
	}
	return !errors;
}
function validateField_itr1_taxPaid_taxesPaid_advanceTax(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"Invalid amount.Please retry.", parseFloat('0'),
							parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_taxPaid_taxesPaid_tds(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"Invalid amount.Please retry.", parseFloat('0'),
							parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_taxPaid_taxesPaid_tcs(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"Invalid amount.Please retry.", parseFloat('0'),
							parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_taxPaid_taxesPaid_selfAssessmentTax(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"Invalid amount.Please retry.", parseFloat('0'),
							parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_taxPaid_taxesPaid_totalTaxesPaid(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"Invalid amount.Please retry.", parseFloat('0'),
							parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_taxPaid_balTaxPayable(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"Invalid amount.Please retry.", parseFloat('0'),
							parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_refund_refundDue(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"Invalid amount.Please retry.", parseFloat('0'),
							parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_priBankDetails_ifscCode(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"IFSC code in tab: Taxes paid and verification is compulsory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"IFSC Code should be exactly 11 characters,First 4 characters should be alphabets, 5th character must be zero (0) and remaining 6 should be either numeric or alphabets",
						'^[A-Za-z]{4}0[a-zA-Z0-9]{6}$|^$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_priBankDetails_bankName(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Please enter the Bank name.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"Name of Bank/Institution cannot exceed 125 characters.",
						'0', '125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_priBankDetails_bankAccountNo(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Bank Account number in tab: Taxes paid and verification is mandatory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Bank Account Number should be between 1 to 20 characters.",
						'^.{1,20}$|^$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^[a-zA-Z0-9]{1}[a-zA-Z0-9/-]{0,19}$|$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^.*[0-9]$|^$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^.*[1-9].*$|^$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^((?![-]0{1,}[-]).)*$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^((?![/]0{1,}[/]).)*$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^((?![a-zA-Z]0{1,}[a-zA-Z]).)*$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^((?![/]{2}|[-]{2}).)*$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_addtnlBankDetails(field, toclear) {
	var errors = false;
	{
		var rowCount = countRowInTable(
				'itr1.refund.scheduleBA.addtnlBankDetails', 'ifscCode');
		if (validateTableCheck(
				'itr1.refund.scheduleBA.addtnlBankDetails[',
				rowCount,
				'null',
				'null',
				'N',
				[ "ifscCode", "bankName", "bankAccountNo" ],
				[ "Please enter the IFSC.", "Please enter the Bank name.",
						"Please enter the Bank Account Number." ],
				[
						validateField_itr1_refund_scheduleBA_addtnlBankDetails_ifscCode,
						validateField_itr1_refund_scheduleBA_addtnlBankDetails_bankName,
						validateField_itr1_refund_scheduleBA_addtnlBankDetails_bankAccountNo ])) {
			errors = true;
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_foreignBankDetails(field, toclear) {
	var errors = false;
	{
		var rowCount = countRowInTable(
				'itr1.refund.scheduleBA.foreignBankDetails', 'ibanSwiftCode');
		if (validateTableCheck(
				'itr1.refund.scheduleBA.foreignBankDetails[',
				rowCount,
				'null',
				'null',
				'N',
				[ "ibanSwiftCode", "bankName", "countryCode", "bankAccountNo" ],
				[ "Please enter the IBAN/SWIFT Code.",
						"Please enter the Bank Name.",
						"Please select the Country.",
						"Please enter the Account Number." ],
				[
						validateField_itr1_refund_scheduleBA_foreignBankDetails_ibanSwiftCode,
						validateField_itr1_refund_scheduleBA_foreignBankDetails_bankName,
						validateField_itr1_refund_scheduleBA_foreignBankDetails_countryCode,
						validateField_itr1_refund_scheduleBA_foreignBankDetails_bankAccountNo ])) {
			errors = true;
		}
	}
	return !errors;
}
function validateField_itr1_taxPaid_taxesPaid_excIncSec1038(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_taxPaid_taxesPaid_excIncSec1034(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_taxExmpIntInc(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Agricultural Income should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"If agricultural income is more than Rs 5000/- then use ITR 2 or 3",
							parseFloat('0'), parseFloat('5000'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_verification_place(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Place in Verification is mandatory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Place in Verification cannot exceed 50 characters.",
						'1', '150')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_verification_date(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && requiredCheck_Online(field)) {
			if (globalVillageCheck(field, "Please enter the Date.",
					globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
		if (continueValidation && validateDateCheck_online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation && validateDateCheck_online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& minDateCheck(field,
						"Verification date cannot be before 01/04/2018.", null,
						'31/03/2018', false)) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_verification_declaration_assesseeVerName(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Assessees name in Verification is mandatory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"Assessees name in Verification cannot exceed 25 characters.",
						'1', '127')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_verification_declaration_fatherName(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Fathers name in Verification is mandatory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"Fathers name in Verification cannot exceed 125 characters.",
						'1', '125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_verification_declaration_assesseeVerPAN(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"PAN in Verification is mandatory.")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"Invalid PAN. First 5 Alphabets, next 4 digits, then 1 Alphabet.",
						'10', '10')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid PAN. First 5 Alphabets, next 4 digits, then 1 Alphabet.",
						'[A-Za-z]{3}[pP]{1}[A-Za-z]{1}[0-9]{4}[A-Za-z]{1}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_verification_capacity(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& requiredStringCheck_Online(field,
						"Please enter the capacity")) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field, "Please enter the capacity",
						'^(?!-1$).*')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Type of capacity selected in invalid",
						'(S)|(R)$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}

function validateField_itr1_taxReturnPreparer_identificationNoOfTRP(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Identification no. of TRP cannot exceed 10 digits.",
						'0', '10')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field, "Please enter a valid TRP PIN.",
						'^[T][0-9]{9}$|^[0-9]{6}$|^$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_taxReturnPreparer_nameOfTRP(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Name of TRP cannot exceed 125 characters.", '0', '125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_taxReturnPreparer_reImbFrmGov(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100Percent_doneeWithPan(field,
		toclear) {
	var errors = false;
	{
		var rowCount = countRowInTable(
				'itr1.schedule80G.don100Percent.doneeWithPan',
				'doneeWithPanName');
		if (validateTableCheck(
				'itr1.schedule80G.don100Percent.doneeWithPan[',
				rowCount,
				'null',
				'null',
				'N',
				[ "doneeWithPanName", "addressDetail.addrDetail",
						"addressDetail.cityOrTownOrDistrict",
						"addressDetail.stateCode", "addressDetail.pinCode",
						"doneePAN", "donationAmt" ],
				[ "Please enter name of donee.",
						"Please enter address of donee.",
						"Please enter city/town/district of donee.",
						"Please select state of donee.",
						"Please enter pincode of donee.",
						"Please enter PAN of donee.",
						"Please enter amount of donation." ],
				[
						validateField_itr1_schedule80G_don100Percent_doneeWithPan_doneeWithPanName,
						validateField_itr1_schedule80G_don100Percent_doneeWithPan_addressDetail_addrDetail,
						validateField_itr1_schedule80G_don100Percent_doneeWithPan_addressDetail_cityOrTownOrDistrict,
						validateField_itr1_schedule80G_don100Percent_doneeWithPan_addressDetail_stateCode,
						validateField_itr1_schedule80G_don100Percent_doneeWithPan_addressDetail_pinCode,
						validateField_itr1_schedule80G_don100Percent_doneeWithPan_doneePAN,
						validateField_itr1_schedule80G_don100Percent_doneeWithPan_donationAmt ])) {
			errors = true;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan(
		field, toclear) {
	var errors = false;
	{
		var rowCount = countRowInTable(
				'itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan',
				'doneeWithPanName');
		if (validateTableCheck(
				'itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan[',
				rowCount,
				'null',
				'null',
				'N',
				[ "doneeWithPanName", "addressDetail.addrDetail",
						"addressDetail.cityOrTownOrDistrict",
						"addressDetail.stateCode", "addressDetail.pinCode",
						"doneePAN", "donationAmt" ],
				[ "Please enter name of donee.",
						"Please enter address of donee.",
						"Please enter city/town/district of donee.",
						"Please select state of donee.",
						"Please enter pincode of donee.",
						"Please enter PAN of donee.",
						"Please enter amount of donation." ],
				[
						validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_doneeWithPanName,
						validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_addressDetail_addrDetail,
						validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_addressDetail_cityOrTownOrDistrict,
						validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_addressDetail_stateCode,
						validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_addressDetail_pinCode,
						validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_doneePAN,
						validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_donationAmt ])) {
			errors = true;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan(
		field, toclear) {
	var errors = false;
	{
		var rowCount = countRowInTable(
				'itr1.schedule80G.don100PercentApprReqd.doneeWithPan',
				'doneeWithPanName');
		if (validateTableCheck(
				'itr1.schedule80G.don100PercentApprReqd.doneeWithPan[',
				rowCount,
				'null',
				'null',
				'N',
				[ "doneeWithPanName", "addressDetail.addrDetail",
						"addressDetail.cityOrTownOrDistrict",
						"addressDetail.stateCode", "addressDetail.pinCode",
						"doneePAN", "donationAmt" ],
				[ "Please enter name of donee.",
						"Please enter address of donee.",
						"Please enter city/town/district of donee.",
						"Please select state of donee.",
						"Please enter pincode of donee.",
						"Please enter PAN of donee.",
						"Please enter amount of donation." ],
				[
						validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_doneeWithPanName,
						validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_addressDetail_addrDetail,
						validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_addressDetail_cityOrTownOrDistrict,
						validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_addressDetail_stateCode,
						validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_addressDetail_pinCode,
						validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_doneePAN,
						validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_donationAmt ])) {
			errors = true;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan(
		field, toclear) {
	var errors = false;
	{
		var rowCount = countRowInTable(
				'itr1.schedule80G.don50PercentApprReqd.doneeWithPan',
				'doneeWithPanName');
		if (validateTableCheck(
				'itr1.schedule80G.don50PercentApprReqd.doneeWithPan[',
				rowCount,
				'null',
				'null',
				'N',
				[ "doneeWithPanName", "addressDetail.addrDetail",
						"addressDetail.cityOrTownOrDistrict",
						"addressDetail.stateCode", "addressDetail.pinCode",
						"doneePAN", "donationAmt" ],
				[ "Please enter name of donee.",
						"Please enter address of donee.",
						"Please enter city/town/district of donee.",
						"Please select state of donee.",
						"Please enter pincode of donee.",
						"Please enter PAN of donee.",
						"Please enter amount of donation." ],
				[
						validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_doneeWithPanName,
						validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_addressDetail_addrDetail,
						validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_addressDetail_cityOrTownOrDistrict,
						validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_addressDetail_stateCode,
						validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_addressDetail_pinCode,
						validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_doneePAN,
						validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_donationAmt ])) {
			errors = true;
		}
	}
	return !errors;
}
function validateField_itr1_taxPaid_taxesPaid_othersInc_othersIncDtls(field,
		toclear) {
	var errors = false;
	{
		var rowCount = countRowInTable(
				'itr1.taxPaid.taxesPaid.othersInc.othersIncDtls', 'othNatOfInc');
		if (validateTableCheck(
				'itr1.taxPaid.taxesPaid.othersInc.othersIncDtls[',
				rowCount,
				'null',
				'null',
				'N',
				[ "natureDesc", "othAmount" ],
				[ "Please enter the nature of income.",
						"Please enter the amount." ],
				[
						validateField_itr1_taxPaid_taxesPaid_othersInc_othersIncDtls_othNatOfInc,
						validateField_itr1_taxPaid_taxesPaid_othersInc_othersIncDtls_othAmount ])) {
			errors = true;
			}
	}
	return !errors;
	}
function validateField_itr1_taxPaid_taxesPaid_othersInc_othersIncTotal(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DHealthInsPremium_healthInsurancePremium(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Please select an option from the drop down",
						'^1$|^2$|^3$|^4$|^5$|^6$|^7$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& conditionalRequiredCheck(
						field,
						'itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DHealthInsurancePremiumUsr',
						'^(?!0).*$')) {
			if (globalVillageCheck(field,
					"Please select an option from the drop down", globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DHealthInsPremium_medicalExpenditure(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Please select an option from the drop down",
						'^1$|^2$|^3$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& conditionalRequiredCheck(
						field,
						'itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DMedicalExpenditureUsr',
						'^(?!0).*$')) {
			if (globalVillageCheck(field,
					"Please select an option from the drop down", globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DHealthInsPremium_preventiveHealthCheckUp(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Please select an option from the drop down",
						'^1$|^2$|^3$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& conditionalRequiredCheck(
						field,
						'itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DPreventiveHealthCheckUpUsr',
						'^(?!0).*$')) {
			if (globalVillageCheck(field,
					"Please select an option from the drop down", globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DHealthInsPremium_sec80DHealthInsurancePremiumUsr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DHealthInsPremium_sec80DMedicalExpenditureUsr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DHealthInsPremium_sec80DPreventiveHealthCheckUpUsr(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DDUsrType(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Please select an option from the drop down",
						'^1$|^2$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& conditionalRequiredCheck(
						field,
						'itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DD_Usr',
						'^(?!0).*$')) {
			if (globalVillageCheck(field,
					"Please select an option from the drop down", globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DDBUsrType(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Please select an option from the drop down",
						'^1$|^2$|^3$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& conditionalRequiredCheck(
						field,
						'itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DDB_Usr',
						'^(?!0).*$')) {
			if (globalVillageCheck(field,
					"Please select an option from the drop down", globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80UUsrType(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Please select an option from the drop down",
						'^1$|^2$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& conditionalRequiredCheck(
						field,
						'itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80U_Usr',
						'^(?!0).*$')) {
			if (globalVillageCheck(field,
					"Please select an option from the drop down", globalVillage)) {
				errors = true;
			}
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_tdSonSalaries_tdSonSalary_employerOrDeductorOrCollectDetl_tan(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid TAN. TAN format should be First 4 alphabets, then 5 digits, then alphabet.",
						'^[a-zA-Z]{4}[0-9]{5}[a-zA-Z]{1}$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_tdSonSalaries_tdSonSalary_employerOrDeductorOrCollectDetl_employerOrDeductorOrCollecterName(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Name of deductor cannot be more than 125 characters.",
						'0', '125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_tdSonSalaries_tdSonSalary_incChrgSal(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_tdSonSalaries_tdSonSalary_totalTDSSal(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_employerOrDeductorOrCollectDetl_tan(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid TAN. TAN format should be First 4 alphabets, then 5 digits, then alphabet.",
						'^[a-zA-Z]{4}[0-9]{5}[a-zA-Z]{1}$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_employerOrDeductorOrCollectDetl_employerOrDeductorOrCollecterName(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Name of deductor cannot be more than 125 characters.",
						'0', '125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_amtForTaxDeduct(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_deductedYr(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid Deducted Year,Please Enter 4 digit valid year.",
						'^[0-9]{4}$|^$')) {
			errors = true;
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Deducted year cannot be greater than 2016 for A.Y. 2018-19.",
							parseFloat('1000'), parseFloat('2017'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_totTDSOnAmtPaid(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_claimOutOfTotTDSOnAmtPaid(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_tdsDtls26QC_tdsDetails26QC_panOfTenant(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid PAN. First 5 Alphabets, next 4 digits, then 1 Alphabet.",
						'^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$|^$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_tdsDtls26QC_tdsDetails26QC_nameOfTenant(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Name of deductor cannot be more than 125 characters.",
						'0', '125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_tdsDtls26QC_tdsDetails26QC_amtForTaxDeduct(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_tdsDtls26QC_tdsDetails26QC_deductedYr(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid Deducted Year,Please Enter 4 digit valid year.",
						'^[0-9]{4}$|^$')) {
			errors = true;
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Deducted year cannot be greater than 2016 for A.Y. 2018-19.",
							parseFloat('1000'), parseFloat('2017'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_tdsDtls26QC_tdsDetails26QC_taxDeducted(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_tdsDtls26QC_tdsDetails26QC_claimOutOfTotTDSOnAmtPaid(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_scheduleTCS_tcs_employerOrDeductorOrCollectDetl_tan(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid TAN. First 4 Alphabets, next 5 digits, then 1 Alphabet.",
						'^$|^[A-Za-z]{4}[0-9]{5}[A-Za-z]{1}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_scheduleTCS_tcs_employerOrDeductorOrCollectDetl_employerOrDeductorOrCollecterName(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"Name of collector cannot be more than 125 characters.",
						'0', '125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_scheduleTCS_tcs_amtTaxCollected(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_scheduleTCS_tcs_deductedYr(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid Collection Year,Please Enter 4 digit valid year.",
						'^[0-9]{4}$|^$')) {
			errors = true;
			continueValidation = false;
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"error.collectedYr.2018.invalid",
							parseFloat('1000'), parseFloat('2017'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_scheduleTCS_tcs_totalTCS(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_scheduleTCS_tcs_amtTCSClaimedThisYear(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_taxPayments_taxPayment_bsrCode(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Please enter a valid 7 digit BSR Code.",
						'^[0-9]{7}$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_taxPayments_taxPayment_dateDep(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation && validateDateCheck_online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& minDateCheck(
						field,
						"Date of Deposit to Central government cannot be prior to 01/04/2017.",
						null, '31/03/2017', false)) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_taxPayments_taxPayment_srlNoOfChaln(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Serial no. of Challan should be upto 5 digits in length.",
							parseFloat('-9223372036854775808'),
							parseFloat('99999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_taxPayments_taxPayment_amt(field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"Invalid amount.Please retry.", parseFloat('0'),
							parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_addtnlBankDetails_ifscCode(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"IFSC Code should be exactly 11 characters,First 4 characters should be alphabets, 5th character must be zero (0) and remaining 6 should be either numeric or alphabets",
						'^[A-Za-z]{4}0[a-zA-Z0-9]{6}$|^$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_addtnlBankDetails_bankName(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"Name of Bank/Institution cannot exceed 125 characters.",
						'0', '125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_addtnlBankDetails_bankAccountNo(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Bank Account Number should be between 1 to 20 characters.",
						'^.{1,20}$|^$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^[a-zA-Z0-9]{1}[a-zA-Z0-9/-]{0,19}$|^$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^.*[0-9]$|^$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^.*[1-9].*$|^$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^((?![-]0{1,}[-]).)*$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^((?![/]0{1,}[/]).)*$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^((?![a-zA-Z]0{1,}[a-zA-Z]).)*$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^((?![/]{2}|[-]{2}).)*$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_addtnlBankDetails_cashDeposited(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative,  numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_foreignBankDetails_ibanSwiftCode(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"IBAN/SWIFT Code cannot be more than 30 characters.",
						'-1', '30')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_foreignBankDetails_swiftCode(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"IBAN/SWIFT Code cannot be more than 30 characters.",
						'-1', '30')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_foreignBankDetails_bankName(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"Name of Bank/Institution cannot exceed 125 characters.",
						'0', '125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_foreignBankDetails_countryCode(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field, "Please select the country.",
						'^[0-9]{0,4}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_foreignBankDetails_bankAccountNo(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Bank Account Number should be between 1 to 20 characters.",
						'^.{1,20}$|^$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^[a-zA-Z0-9]{1}[a-zA-Z0-9/-]{0,19}$|^$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^.*[0-9]$|^$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^.*[1-9].*$|^$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^((?![-]0{1,}[-]).)*$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^((?![/]0{1,}[/]).)*$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^((?![a-zA-Z]0{1,}[a-zA-Z]).)*$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& regexCheck_Online(field,
						"Invalid Bank Account Number. Please retry",
						'^((?![/]{2}|[-]{2}).)*$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_refund_scheduleBA_foreignBankDetails_iban(field,
		toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"IBAN/SWIFT Code cannot be more than 30 characters.",
						'-1', '30')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100Percent_doneeWithPan_doneeWithPanName(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Name of donee cannot exceed 125 characters.", '0',
						'125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100Percent_doneeWithPan_addressDetail_addrDetail(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Address of donee cannot exceed 200 characters.", '-1',
						'200')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100Percent_doneeWithPan_addressDetail_cityOrTownOrDistrict(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"City/Town/District of donee cannot exceed 50 characters.",
						'0', '50')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100Percent_doneeWithPan_addressDetail_stateCode(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field, "error.itr1.page5.state.required",
						'^[0-9]{1}[0-9]{1}$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100Percent_doneeWithPan_addressDetail_pinCode(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"Please enter a 6 digit valid Pin Code.",
							parseFloat('100000'), parseFloat('999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100Percent_doneeWithPan_doneePAN(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid PAN. PAN format should be First 5 Alphabets, next 4 digits, then 1 Alphabet.",
						'[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& validateDuplicacyCheck_Online(
						field,
						"Donee PAN cannot be same as assesse PAN or verification PAN .",
						'userContactPan')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& validateDuplicacyCheck_Online(
						field,
						"Donee PAN cannot be same as assesse PAN or verification PAN .",
						'selectedPan')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100Percent_doneeWithPan_donationAmt(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_doneeWithPanName(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Name of donee cannot exceed 125 characters.", '0',
						'125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_addressDetail_addrDetail(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Address of donee cannot exceed 200 characters.", '-1',
						'200')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_addressDetail_cityOrTownOrDistrict(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"City/Town/District of donee cannot exceed 50 characters.",
						'0', '50')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_addressDetail_stateCode(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field, "error.itr1.page5.state.required",
						'^[0-9]{1}[0-9]{1}$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_addressDetail_pinCode(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"Please enter a 6 digit valid Pin Code.",
							parseFloat('100000'), parseFloat('999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_doneePAN(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid PAN. PAN format should be First 5 Alphabets, next 4 digits, then 1 Alphabet.",
						'[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& validateDuplicacyCheck_Online(
						field,
						"Donee PAN cannot be same as assesse PAN or verification PAN .",
						'userContactPan')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& validateDuplicacyCheck_Online(
						field,
						"Donee PAN cannot be same as assesse PAN or verification PAN .",
						'selectedPan')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_donationAmt(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_doneeWithPanName(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Name of donee cannot exceed 125 characters.", '0',
						'125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_addressDetail_addrDetail(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Address of donee cannot exceed 200 characters.", '-1',
						'200')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_addressDetail_cityOrTownOrDistrict(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"City/Town/District of donee cannot exceed 50 characters.",
						'0', '50')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_addressDetail_stateCode(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field, "error.itr1.page5.state.required",
						'^[0-9]{1}[0-9]{1}$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_addressDetail_pinCode(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"Please enter a 6 digit valid Pin Code.",
							parseFloat('100000'), parseFloat('999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_doneePAN(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid PAN. PAN format should be First 5 Alphabets, next 4 digits, then 1 Alphabet.",
						'[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& validateDuplicacyCheck_Online(
						field,
						"Donee PAN cannot be same as assesse PAN or verification PAN .",
						'userContactPan')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& validateDuplicacyCheck_Online(
						field,
						"Donee PAN cannot be same as assesse PAN or verification PAN .",
						'selectedPan')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_donationAmt(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_doneeWithPanName(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Name of donee cannot exceed 125 characters.", '0',
						'125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_addressDetail_addrDetail(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Address of donee cannot exceed 200 characters.", '-1',
						'200')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_addressDetail_cityOrTownOrDistrict(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(
						field,
						"City/Town/District of donee cannot exceed 50 characters.",
						'0', '50')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_addressDetail_stateCode(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(field, "error.itr1.page5.state.required",
						'^[0-9]{1}[0-9]{1}$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_addressDetail_pinCode(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(field,
							"Please enter a 6 digit valid Pin Code.",
							parseFloat('100000'), parseFloat('999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_doneePAN(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& regexCheck_Online(
						field,
						"Invalid PAN. PAN format should be First 5 Alphabets, next 4 digits, then 1 Alphabet.",
						'[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$|^.{0,0}$')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& validateDuplicacyCheck_Online(
						field,
						"Donee PAN cannot be same as assesse PAN or verification PAN .",
						'userContactPan')) {
			errors = true;
			continueValidation = false;
		}
		if (continueValidation
				&& validateDuplicacyCheck_Online(
						field,
						"Donee PAN cannot be same as assesse PAN or verification PAN .",
						'selectedPan')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_donationAmt(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateField_itr1_taxPaid_taxesPaid_othersInc_othersIncDtls_othNatOfInc(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field,
						"Nature of Income should not exceed 125 characters",
						'0', '125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}
function validateField_itr1_taxPaid_taxesPaid_othersInc_othersIncDtls_natureDesc(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		if (continueValidation
				&& stringLengthCheck_Online(field, "error.natureDesc.length",
						'0', '125')) {
			errors = true;
			continueValidation = false;
		}
	}
	return !errors;
}

function validateField_othersIncDtls_natureDesc() {

	var table=document.getElementById('othersIncome');
	var noOfRows=table.rows.length;

		for(var i=0;i<noOfRows-4;i++){

			if( document.getElementsByName("itr1.taxPaid.taxesPaid.othersInc.othersIncDtls["+i+"].natureDesc")[0].value == 'OTH' ) {

				if(document.getElementsByName("itr1.taxPaid.taxesPaid.othersInc.othersIncDtls["+i+"].othNatOfInc")[0].value==""){
					addErrorXHTML(document.getElementsByName("itr1.taxPaid.taxesPaid.othersInc.othersIncDtls["+i+"].othNatOfInc")[0],"Please enter description of nature of income.");
					focusTab("itr1.taxPaid.taxesPaid.othersInc.othersIncDtls.othNatOfInc");
					return false;

				}

			}
		}
		return true;
}

function validateField_itr1_taxPaid_taxesPaid_othersInc_othersIncDtls_othAmount(
		field, toclear) {
	if (field == undefined) {
		return true;
	}
	if (toclear) {
		clearFieldErrorMessages(field);
		clearFieldErrorLabels(field);
	}
	var errors = false;
	var continueValidation = true;
	var isFieldArray = false;
	var fieldLength = 1;
	if (field.length > 0 && field.type != 'select-one') {
		fieldLength = field.length;
		fieldArray = field;
		isFieldArray = true;
	}
	for (var i = 0; i < fieldLength; i++) {
		if (isFieldArray) {
			field = fieldArray[i];
		}
		var toBeChecked = true;
		if (continueValidation && validateIsNumericCheck_Online(field)) {
			errors = true;
			continueValidation = false;
		}
		if (toBeChecked) {
			if (continueValidation
					&& validateNumericCheck_Online(
							field,
							"Amount should be non-negative, non-decimal, numeric, not exceeding 14 digits",
							parseFloat('0'), parseFloat('99999999999999'))) {
				errors = true;
				continueValidation = false;
			}
		}
	}
	return !errors;
}
function validateForm_ITR12018Preview(form) {
	clearErrorMessages(form);
	clearErrorLabels(form);
	var errors = true;
	try {
		var isFileOk = document.getElementsByName('isFileSizeOk')[0].value;
		if (isFileOk == 0) {
			alert('Attachments cannot exceed 50MB.');
			return false;
		}
	} catch (e) {
	}
	errors = validateField_itr1_personalInfo_assesseeName_firstName(
			form.elements["itr1.personalInfo.assesseeName.firstName"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.assesseeName.firstName");
	}
	errors = validateField_itr1_personalInfo_assesseeName_middleName(
			form.elements["itr1.personalInfo.assesseeName.middleName"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.assesseeName.middleName");
	}
	errors = validateField_itr1_personalInfo_assesseeName_surNameOrOrgName(
			form.elements["itr1.personalInfo.assesseeName.surNameOrOrgName"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.assesseeName.surNameOrOrgName");
	}
	errors = validateField_itr1_personalInfo_pan(
			form.elements["itr1.personalInfo.pan"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.pan");
	}
	errors = validateField_itr1_personalInfo_address_residenceNo(
			form.elements["itr1.personalInfo.address.residenceNo"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.address.residenceNo");
	}
	errors = validateField_itr1_personalInfo_address_premises(
			form.elements["itr1.personalInfo.address.premises"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.address.premises");
	}
	errors = validateField_itr1_personalInfo_address_roadOrStreet(
			form.elements["itr1.personalInfo.address.roadOrStreet"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.address.roadOrStreet");
	}
	errors = validateField_itr1_personalInfo_address_residenceName(
			form.elements["itr1.personalInfo.address.residenceName"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.address.residenceName");
	}
	errors = validateField_itr1_personalInfo_address_localityOrArea(
			form.elements["itr1.personalInfo.address.localityOrArea"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.address.localityOrArea");
	}
	errors = validateField_itr1_personalInfo_address_cityOrTownOrDistrict(
			form.elements["itr1.personalInfo.address.cityOrTownOrDistrict"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.address.cityOrTownOrDistrict");
	}
	errors = validateField_itr1_personalInfo_address_stateCode(
			form.elements["itr1.personalInfo.address.stateCode"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.address.stateCode");
	}
	/*errors = validateField_itr1_personalInfo_address_country(
			form.elements["itr1.personalInfo.address.country"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.address.country");
	}*/
	errors = validateField_itr1_personalInfo_address_pinCode(
			form.elements["itr1.personalInfo.address.pinCode"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.address.pinCode");
	}
	/*errors = validateField_itr1_personalInfo_address_zipCode(
			form.elements["itr1.personalInfo.address.zipCode"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.address.zipCode");
	}*/
	errors = validateField_itr1_personalInfo_address_emailAddress(
			form.elements["itr1.personalInfo.address.emailAddress"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.address.emailAddress");
	}
	errors = validateField_itr1_personalInfo_address_countryCodeMobile(
			form.elements["itr1.personalInfo.address.countryCodeMobile"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.address.countryCodeMobile");
	}
	errors = validateField_itr1_personalInfo_address_mobileNo(
			form.elements["itr1.personalInfo.address.mobileNo"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.address.mobileNo");
	}
	errors = validateField_itr1_personalInfo_dob(
			form.elements["itr1.personalInfo.dob"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.dob");
	}
	errors = validateField_itr1_personalInfo_employerCategory(
			form.elements["itr1.personalInfo.employerCategory"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.employerCategory");
	}
	errors = validateField_itr1_personalInfo_aadhaarCardNo(
			form.elements["itr1.personalInfo.aadhaarCardNo"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.aadhaarCardNo");
	}
	errors = validateField_itr1_personalInfo_aadhaarEnrolmentId(
			form.elements["itr1.personalInfo.aadhaarEnrolmentId"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.personalInfo.aadhaarEnrolmentId");
	}
	errors = validateField_itr1_filingStatus_returnFileSec(
			form.elements["itr1.filingStatus.returnFileSec"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.filingStatus.returnFileSec");
	}
	errors = validateField_itr1_filingStatus_returnType(
			form.elements["itr1.filingStatus.returnType"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.filingStatus.returnType");
	}
	errors = validateField_itr1_filingStatus_receiptNo(
			form.elements["itr1.filingStatus.receiptNo"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.filingStatus.receiptNo");
	}
	errors = validateField_itr1_filingStatus_origRetFiledDate(
			form.elements["itr1.filingStatus.origRetFiledDate"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.filingStatus.origRetFiledDate");
	}
	errors = validateField_itr1_filingStatus_ackNoOriginalReturn(
			form.elements["itr1.filingStatus.ackNoOriginalReturn"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.filingStatus.ackNoOriginalReturn");
	}
	errors = validateField_itr1_filingStatus_noticeNo(
			form.elements["itr1.filingStatus.noticeNo"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.filingStatus.noticeNo");
	}
	errors = validateField_itr1_filingStatus_noticeDate(
			form.elements["itr1.filingStatus.noticeDate"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.filingStatus.noticeDate");
	}

	errors = validateField_itr1_filingStatus_noticeDateUnderSec(
			form.elements["itr1.filingStatus.noticeDateUnderSec"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.filingStatus.noticeDateUnderSec");
	}
	errors = validateField_itr1_filingStatus_portugeseCC5A(
			form.elements["itr1.filingStatus.portugeseCC5A"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.filingStatus.portugeseCC5A");
	}
	errors = validateField_itr1_filingStatus_panOfSpouse(
			form.elements["itr1.filingStatus.panOfSpouse"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.filingStatus.panOfSpouse");
	}
	errors = validateField_itr1_itr1IncomeDeductions_salary(
			form.elements["itr1.itr1IncomeDeductions.salary"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.salary");
	}
	errors = validateField_itr1_itr1IncomeDeductions_alwnsNotExempt(
			form.elements["itr1.itr1IncomeDeductions.alwnsNotExempt"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.alwnsNotExempt");
	}
	errors = validateField_itr1_itr1IncomeDeductions_perquisitesValue(
			form.elements["itr1.itr1IncomeDeductions.perquisitesValue"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.perquisitesValue");
	}
	errors = validateField_itr1_itr1IncomeDeductions_profitsInSalary(
			form.elements["itr1.itr1IncomeDeductions.profitsInSalary"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.profitsInSalary");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductionUs16(
			form.elements["itr1.itr1IncomeDeductions.deductionUs16"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductionUs16");
	}
	errors = validateField_itr1_itr1IncomeDeductions_incomeFromSal(
			form.elements["itr1.itr1IncomeDeductions.incomeFromSal"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.incomeFromSal");
	}
	errors = validateField_itr1_itr1IncomeDeductions_typeOfHP(
			form.elements["itr1.itr1IncomeDeductions.typeOfHP"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.typeOfHP");
	}
	errors = validateField_itr1_itr1IncomeDeductions_grossRentReceived(
			form.elements["itr1.itr1IncomeDeductions.grossRentReceived"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.grossRentReceived");
	}
	errors = validateField_itr1_itr1IncomeDeductions_taxPaidlocalAuth(
			form.elements["itr1.itr1IncomeDeductions.taxPaidlocalAuth"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.taxPaidlocalAuth");
	}
	errors = validateField_itr1_itr1IncomeDeductions_annualValue(
			form.elements["itr1.itr1IncomeDeductions.annualValue"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.annualValue");
	}
	errors = validateField_itr1_itr1IncomeDeductions_standardDeduction(
			form.elements["itr1.itr1IncomeDeductions.standardDeduction"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.standardDeduction");
	}
	errors = validateField_itr1_itr1IncomeDeductions_interestPayable(
			form.elements["itr1.itr1IncomeDeductions.interestPayable"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.interestPayable");
	}
	errors = validateField_itr1_itr1IncomeDeductions_totalIncomeOfHP(
			form.elements["itr1.itr1IncomeDeductions.totalIncomeOfHP"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.totalIncomeOfHP");
	}
	errors = validateField_itr1_itr1IncomeDeductions_TotalIncomeOfHPNegative(
			form.elements["itr1.itr1IncomeDeductions.TotalIncomeOfHPNegative"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.TotalIncomeOfHPNegative");
	}
	errors = validateField_itr1_itr1IncomeDeductions_incomeOthSrc(
			form.elements["itr1.itr1IncomeDeductions.incomeOthSrc"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.incomeOthSrc");
	}
	errors = validateField_itr1_itr1IncomeDeductions_grossTotIncome(
			form.elements["itr1.itr1IncomeDeductions.grossTotIncome"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.grossTotIncome");
	}
	errors = validateField_itr1_itr1IncomeDeductions_totalIncome(
			form.elements["itr1.itr1IncomeDeductions.totalIncome"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.totalIncome");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80C(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80C"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80C");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80CCC(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCC"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCC");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80CCD(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCD"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCD");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80CCDEmployer(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCDEmployer"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCDEmployer");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80D(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80D"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80D");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80DD(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80DD"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80DD");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80DDB(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80DDB"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80DDB");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80E(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80E"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80E");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80EE(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80EE"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80EE");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80CCD1B(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCD1B"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCD1B");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80G(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80G"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80G");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80GG(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80GG"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80GG");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80GGA(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80GGA"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80GGA");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80GGC(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80GGC"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80GGC");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80U(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80U"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80U");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80CCG(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCG"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80CCG");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80RRB(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80RRB"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80RRB");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80QQB(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80QQB"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80QQB");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_section80TTA(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.section80TTA"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.section80TTA");
	}
	errors = validateField_itr1_itr1IncomeDeductions_deductUndChapVIA_totalChapVIADeductions(
			form.elements["itr1.itr1IncomeDeductions.deductUndChapVIA.totalChapVIADeductions"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.deductUndChapVIA.totalChapVIADeductions");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80C_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80C_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80C_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80CCC_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCC_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCC_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80CCD_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCD_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCD_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80CCDEmployer_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCDEmployer_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCDEmployer_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80D_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80D_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80D_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DD_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DD_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DD_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DDB_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DDB_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DDB_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80E_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80E_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80E_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80EE_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80EE_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80EE_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80CCD1B_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCD1B_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCD1B_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80G_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80G_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80G_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80GG_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80GG_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80GG_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80GGA_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80GGA_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80GGA_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80GGC_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80GGC_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80GGC_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80U_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80U_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80U_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80CCG_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCG_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80CCG_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80RRB_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80RRB_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80RRB_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80QQB_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80QQB_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80QQB_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80TTA_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80TTA_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80TTA_Usr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_totalChapVIADeductions_Usr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.totalChapVIADeductions_Usr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.totalChapVIADeductions_Usr");
	}
	errors = validateField_itr1_itr1TaxComputationOnline_totalTaxPayable(
			form.elements["itr1.itr1TaxComputationOnline.totalTaxPayable"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1TaxComputationOnline.totalTaxPayable");
	}
	errors = validateField_itr1_itr1TaxComputationOnline_rebate87A(
			form.elements["itr1.itr1TaxComputationOnline.rebate87A"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1TaxComputationOnline.rebate87A");
	}
	errors = validateField_itr1_itr1TaxComputationOnline_taxPayableOnRebate(
			form.elements["itr1.itr1TaxComputationOnline.taxPayableOnRebate"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1TaxComputationOnline.taxPayableOnRebate");
	}
	errors = validateField_itr1_itr1TaxComputationOnline_educationCess(
			form.elements["itr1.itr1TaxComputationOnline.educationCess"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1TaxComputationOnline.educationCess");
	}
	errors = validateField_itr1_itr1TaxComputationOnline_grossTaxLiability(
			form.elements["itr1.itr1TaxComputationOnline.grossTaxLiability"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1TaxComputationOnline.grossTaxLiability");
	}
	errors = validateField_itr1_itr1TaxComputationOnline_section89(
			form.elements["itr1.itr1TaxComputationOnline.section89"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1TaxComputationOnline.section89");
	}
	errors = validateField_itr1_itr1TaxComputationOnline_netTaxLiability(
			form.elements["itr1.itr1TaxComputationOnline.netTaxLiability"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1TaxComputationOnline.netTaxLiability");
	}
	errors = validateField_itr1_itr1TaxComputationOnline_intrstPay_intrstPayUs234A(
			form.elements["itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234A"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234A");
	}
	errors = validateField_itr1_itr1TaxComputationOnline_intrstPay_intrstPayUs234B(
			form.elements["itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234B"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234B");
	}
	errors = validateField_itr1_itr1TaxComputationOnline_intrstPay_intrstPayUs234C(
			form.elements["itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234C"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1TaxComputationOnline.intrstPay.intrstPayUs234C");
	}
	errors = validateField_itr1_itr1TaxComputationOnline_intrstPay_lateFilingFee234F(
			form.elements["itr1.itr1TaxComputationOnline.intrstPay.lateFilingFee234F"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1TaxComputationOnline.intrstPay.lateFilingFee234F");
	}
	errors = validateField_itr1_itr1TaxComputationOnline_totalIntrstPay(
			form.elements["itr1.itr1TaxComputationOnline.totalIntrstPay"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1TaxComputationOnline.totalIntrstPay");
	}
	errors = validateField_itr1_itr1TaxComputationOnline_totTaxPlusIntrstPay(
			form.elements["itr1.itr1TaxComputationOnline.totTaxPlusIntrstPay"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1TaxComputationOnline.totTaxPlusIntrstPay");
	}
	errors = validateField_itr1_tdSonSalaries_tdSonSalary(
			form.elements["itr1.tdSonSalaries.tdSonSalary"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdSonSalaries.tdSonSalary");
	}
	errors = validateField_itr1_tdSonOthThanSals_tdSonOthThanSal(
			form.elements["itr1.tdSonOthThanSals.tdSonOthThanSal"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdSonOthThanSals.tdSonOthThanSal");
	}
	errors = validateField_itr1_tdsDtls26QC_tdsDetails26QC(
			form.elements["itr1.tdsDtls26QC.tdsDetails26QC"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdsDtls26QC.tdsDetails26QC");
	}
	errors = validateField_itr1_scheduleTCS_tcs(
			form.elements["itr1.scheduleTCS.tcs"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.scheduleTCS.tcs");
	}
	errors = validateField_itr1_taxPayments_taxPayment(
			form.elements["itr1.taxPayments.taxPayment"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPayments.taxPayment");
	}
	errors = validateField_itr1_taxPaid_taxesPaid_advanceTax(
			form.elements["itr1.taxPaid.taxesPaid.advanceTax"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPaid.taxesPaid.advanceTax");
	}
	errors = validateField_itr1_taxPaid_taxesPaid_tds(
			form.elements["itr1.taxPaid.taxesPaid.tds"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPaid.taxesPaid.tds");
	}
	errors = validateField_itr1_taxPaid_taxesPaid_tcs(
			form.elements["itr1.taxPaid.taxesPaid.tcs"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPaid.taxesPaid.tcs");
	}
	errors = validateField_itr1_taxPaid_taxesPaid_selfAssessmentTax(
			form.elements["itr1.taxPaid.taxesPaid.selfAssessmentTax"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPaid.taxesPaid.selfAssessmentTax");
	}
	errors = validateField_itr1_taxPaid_taxesPaid_totalTaxesPaid(
			form.elements["itr1.taxPaid.taxesPaid.totalTaxesPaid"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPaid.taxesPaid.totalTaxesPaid");
	}
	errors = validateField_itr1_taxPaid_balTaxPayable(
			form.elements["itr1.taxPaid.balTaxPayable"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPaid.balTaxPayable");
	}
	errors = validateField_itr1_refund_refundDue(
			form.elements["itr1.refund.refundDue"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.refundDue");
	}
	errors = validateField_itr1_refund_scheduleBA_priBankDetails_ifscCode(
			form.elements["itr1.refund.scheduleBA.priBankDetails.ifscCode"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.priBankDetails.ifscCode");
	}
	errors = validateField_itr1_refund_scheduleBA_priBankDetails_bankName(
			form.elements["itr1.refund.scheduleBA.priBankDetails.bankName"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.priBankDetails.bankName");
	}
	errors = validateField_itr1_refund_scheduleBA_priBankDetails_bankAccountNo(
			form.elements["itr1.refund.scheduleBA.priBankDetails.bankAccountNo"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.priBankDetails.bankAccountNo");
	}
	errors = validateField_itr1_refund_scheduleBA_addtnlBankDetails(
			form.elements["itr1.refund.scheduleBA.addtnlBankDetails"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.addtnlBankDetails");
	}
	errors = validateField_itr1_refund_scheduleBA_foreignBankDetails(
			form.elements["itr1.refund.scheduleBA.foreignBankDetails"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.foreignBankDetails");
	}
	errors = validateField_itr1_taxPaid_taxesPaid_excIncSec1038(
			form.elements["itr1.taxPaid.taxesPaid.excIncSec1038"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPaid.taxesPaid.excIncSec1038");
	}
	errors = validateField_itr1_taxPaid_taxesPaid_excIncSec1034(
			form.elements["itr1.taxPaid.taxesPaid.excIncSec1034"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPaid.taxesPaid.excIncSec1034");
	}
	errors = validateField_itr1_taxExmpIntInc(
			form.elements["itr1.taxExmpIntInc"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxExmpIntInc");
	}
	errors = validateField_itr1_verification_place(
			form.elements["itr1.verification.place"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.verification.place");
	}
	errors = validateField_itr1_verification_date(
			form.elements["itr1.verification.date"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.verification.date");
	}
	errors = validateField_itr1_verification_declaration_assesseeVerName(
			form.elements["itr1.verification.declaration.assesseeVerName"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.verification.declaration.assesseeVerName");
	}
	errors = validateField_itr1_verification_declaration_fatherName(
			form.elements["itr1.verification.declaration.fatherName"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.verification.declaration.fatherName");
	}
	errors = validateField_itr1_verification_declaration_assesseeVerPAN(
			form.elements["itr1.verification.declaration.assesseeVerPAN"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.verification.declaration.assesseeVerPAN");
	}
	errors = validateField_itr1_verification_capacity(
			form.elements["itr1.verification.capacity"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.verification.capacity");
	}
	errors = validateField_itr1_taxReturnPreparer_identificationNoOfTRP(
			form.elements["itr1.taxReturnPreparer.identificationNoOfTRP"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxReturnPreparer.identificationNoOfTRP");
	}
	errors = validateField_itr1_taxReturnPreparer_nameOfTRP(
			form.elements["itr1.taxReturnPreparer.nameOfTRP"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxReturnPreparer.nameOfTRP");
	}
	errors = validateField_itr1_taxReturnPreparer_reImbFrmGov(
			form.elements["itr1.taxReturnPreparer.reImbFrmGov"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxReturnPreparer.reImbFrmGov");
	}
	errors = validateField_itr1_schedule80G_don100Percent_doneeWithPan(
			form.elements["itr1.schedule80G.don100Percent.doneeWithPan"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100Percent.doneeWithPan");
	}
	errors = validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan(
			form.elements["itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan");
	}
	errors = validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan(
			form.elements["itr1.schedule80G.don100PercentApprReqd.doneeWithPan"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100PercentApprReqd.doneeWithPan");
	}
	errors = validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan(
			form.elements["itr1.schedule80G.don50PercentApprReqd.doneeWithPan"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentApprReqd.doneeWithPan");
	}
	errors = validateField_itr1_taxPaid_taxesPaid_othersInc_othersIncDtls(
			form.elements["itr1.taxPaid.taxesPaid.othersInc.othersIncDtls"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPaid.taxesPaid.othersInc.othersIncDtls");
	}
	errors = validateField_itr1_taxPaid_taxesPaid_othersInc_othersIncTotal(
			form.elements["itr1.taxPaid.taxesPaid.othersInc.othersIncTotal"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPaid.taxesPaid.othersInc.othersIncTotal");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DHealthInsPremium_healthInsurancePremium(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.healthInsurancePremium"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.healthInsurancePremium");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DHealthInsPremium_medicalExpenditure(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.medicalExpenditure"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.medicalExpenditure");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DHealthInsPremium_preventiveHealthCheckUp(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.preventiveHealthCheckUp"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.preventiveHealthCheckUp");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DHealthInsPremium_sec80DHealthInsurancePremiumUsr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DHealthInsurancePremiumUsr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DHealthInsurancePremiumUsr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DHealthInsPremium_sec80DMedicalExpenditureUsr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DMedicalExpenditureUsr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DMedicalExpenditureUsr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DHealthInsPremium_sec80DPreventiveHealthCheckUpUsr(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DPreventiveHealthCheckUpUsr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DHealthInsPremium.sec80DPreventiveHealthCheckUpUsr");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DDUsrType(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DDUsrType"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DDUsrType");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80DDBUsrType(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DDBUsrType"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80DDBUsrType");
	}
	errors = validateField_itr1_itr1IncomeDeductions_usrDeductUndChapVIA_section80UUsrType(
			form.elements["itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80UUsrType"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.itr1IncomeDeductions.usrDeductUndChapVIA.section80UUsrType");
	}
	errors = validateField_itr1_tdSonSalaries_tdSonSalary_employerOrDeductorOrCollectDetl_tan(
			form.elements["itr1.tdSonSalaries.tdSonSalary.employerOrDeductorOrCollectDetl.tan"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdSonSalaries.tdSonSalary.employerOrDeductorOrCollectDetl.tan");
	}
	errors = validateField_itr1_tdSonSalaries_tdSonSalary_employerOrDeductorOrCollectDetl_employerOrDeductorOrCollecterName(
			form.elements["itr1.tdSonSalaries.tdSonSalary.employerOrDeductorOrCollectDetl.employerOrDeductorOrCollecterName"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdSonSalaries.tdSonSalary.employerOrDeductorOrCollectDetl.employerOrDeductorOrCollecterName");
	}
	errors = validateField_itr1_tdSonSalaries_tdSonSalary_incChrgSal(
			form.elements["itr1.tdSonSalaries.tdSonSalary.incChrgSal"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdSonSalaries.tdSonSalary.incChrgSal");
	}
	errors = validateField_itr1_tdSonSalaries_tdSonSalary_totalTDSSal(
			form.elements["itr1.tdSonSalaries.tdSonSalary.totalTDSSal"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdSonSalaries.tdSonSalary.totalTDSSal");
	}
	errors = validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_employerOrDeductorOrCollectDetl_tan(
			form.elements["itr1.tdSonOthThanSals.tdSonOthThanSal.employerOrDeductorOrCollectDetl.tan"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdSonOthThanSals.tdSonOthThanSal.employerOrDeductorOrCollectDetl.tan");
	}
	errors = validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_employerOrDeductorOrCollectDetl_employerOrDeductorOrCollecterName(
			form.elements["itr1.tdSonOthThanSals.tdSonOthThanSal.employerOrDeductorOrCollectDetl.employerOrDeductorOrCollecterName"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdSonOthThanSals.tdSonOthThanSal.employerOrDeductorOrCollectDetl.employerOrDeductorOrCollecterName");
	}
	errors = validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_amtForTaxDeduct(
			form.elements["itr1.tdSonOthThanSals.tdSonOthThanSal.amtForTaxDeduct"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdSonOthThanSals.tdSonOthThanSal.amtForTaxDeduct");
	}
	errors = validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_deductedYr(
			form.elements["itr1.tdSonOthThanSals.tdSonOthThanSal.deductedYr"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdSonOthThanSals.tdSonOthThanSal.deductedYr");
	}
	errors = validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_totTDSOnAmtPaid(
			form.elements["itr1.tdSonOthThanSals.tdSonOthThanSal.totTDSOnAmtPaid"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdSonOthThanSals.tdSonOthThanSal.totTDSOnAmtPaid");
	}
	errors = validateField_itr1_tdSonOthThanSals_tdSonOthThanSal_claimOutOfTotTDSOnAmtPaid(
			form.elements["itr1.tdSonOthThanSals.tdSonOthThanSal.claimOutOfTotTDSOnAmtPaid"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdSonOthThanSals.tdSonOthThanSal.claimOutOfTotTDSOnAmtPaid");
	}
	errors = validateField_itr1_tdsDtls26QC_tdsDetails26QC_panOfTenant(
			form.elements["itr1.tdsDtls26QC.tdsDetails26QC.panOfTenant"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdsDtls26QC.tdsDetails26QC.panOfTenant");
	}
	errors = validateField_itr1_tdsDtls26QC_tdsDetails26QC_nameOfTenant(
			form.elements["itr1.tdsDtls26QC.tdsDetails26QC.nameOfTenant"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdsDtls26QC.tdsDetails26QC.nameOfTenant");
	}
	errors = validateField_itr1_tdsDtls26QC_tdsDetails26QC_amtForTaxDeduct(
			form.elements["itr1.tdsDtls26QC.tdsDetails26QC.amtForTaxDeduct"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdsDtls26QC.tdsDetails26QC.amtForTaxDeduct");
	}
	errors = validateField_itr1_tdsDtls26QC_tdsDetails26QC_deductedYr(
			form.elements["itr1.tdsDtls26QC.tdsDetails26QC.deductedYr"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdsDtls26QC.tdsDetails26QC.deductedYr");
	}
	errors = validateField_itr1_tdsDtls26QC_tdsDetails26QC_taxDeducted(
			form.elements["itr1.tdsDtls26QC.tdsDetails26QC.taxDeducted"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdsDtls26QC.tdsDetails26QC.taxDeducted");
	}
	errors = validateField_itr1_tdsDtls26QC_tdsDetails26QC_claimOutOfTotTDSOnAmtPaid(
			form.elements["itr1.tdsDtls26QC.tdsDetails26QC.claimOutOfTotTDSOnAmtPaid"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.tdsDtls26QC.tdsDetails26QC.claimOutOfTotTDSOnAmtPaid");
	}
	errors = validateField_itr1_scheduleTCS_tcs_employerOrDeductorOrCollectDetl_tan(
			form.elements["itr1.scheduleTCS.tcs.employerOrDeductorOrCollectDetl.tan"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.scheduleTCS.tcs.employerOrDeductorOrCollectDetl.tan");
	}
	errors = validateField_itr1_scheduleTCS_tcs_employerOrDeductorOrCollectDetl_employerOrDeductorOrCollecterName(
			form.elements["itr1.scheduleTCS.tcs.employerOrDeductorOrCollectDetl.employerOrDeductorOrCollecterName"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.scheduleTCS.tcs.employerOrDeductorOrCollectDetl.employerOrDeductorOrCollecterName");
	}
	errors = validateField_itr1_scheduleTCS_tcs_amtTaxCollected(
			form.elements["itr1.scheduleTCS.tcs.amtTaxCollected"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.scheduleTCS.tcs.amtTaxCollected");
	}
	errors = validateField_itr1_scheduleTCS_tcs_deductedYr(
			form.elements["itr1.scheduleTCS.tcs.deductedYr"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.scheduleTCS.tcs.deductedYr");
	}
	errors = validateField_itr1_scheduleTCS_tcs_totalTCS(
			form.elements["itr1.scheduleTCS.tcs.totalTCS"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.scheduleTCS.tcs.totalTCS");
	}
	errors = validateField_itr1_scheduleTCS_tcs_amtTCSClaimedThisYear(
			form.elements["itr1.scheduleTCS.tcs.amtTCSClaimedThisYear"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.scheduleTCS.tcs.amtTCSClaimedThisYear");
	}
	errors = validateField_itr1_taxPayments_taxPayment_bsrCode(
			form.elements["itr1.taxPayments.taxPayment.bsrCode"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPayments.taxPayment.bsrCode");
	}
	errors = validateField_itr1_taxPayments_taxPayment_dateDep(
			form.elements["itr1.taxPayments.taxPayment.dateDep"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPayments.taxPayment.dateDep");
	}
	errors = validateField_itr1_taxPayments_taxPayment_srlNoOfChaln(
			form.elements["itr1.taxPayments.taxPayment.srlNoOfChaln"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPayments.taxPayment.srlNoOfChaln");
	}
	errors = validateField_itr1_taxPayments_taxPayment_amt(
			form.elements["itr1.taxPayments.taxPayment.amt"], false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPayments.taxPayment.amt");
	}
	errors = validateField_itr1_refund_scheduleBA_addtnlBankDetails_ifscCode(
			form.elements["itr1.refund.scheduleBA.addtnlBankDetails.ifscCode"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.addtnlBankDetails.ifscCode");
	}
	errors = validateField_itr1_refund_scheduleBA_addtnlBankDetails_bankName(
			form.elements["itr1.refund.scheduleBA.addtnlBankDetails.bankName"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.addtnlBankDetails.bankName");
	}
	errors = validateField_itr1_refund_scheduleBA_addtnlBankDetails_bankAccountNo(
			form.elements["itr1.refund.scheduleBA.addtnlBankDetails.bankAccountNo"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.addtnlBankDetails.bankAccountNo");
	}
	errors = validateField_itr1_refund_scheduleBA_addtnlBankDetails_cashDeposited(
			form.elements["itr1.refund.scheduleBA.addtnlBankDetails.cashDeposited"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.addtnlBankDetails.cashDeposited");
	}
	errors = validateField_itr1_refund_scheduleBA_foreignBankDetails_ibanSwiftCode(
			form.elements["itr1.refund.scheduleBA.foreignBankDetails.ibanSwiftCode"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.foreignBankDetails.ibanSwiftCode");
	}
	errors = validateField_itr1_refund_scheduleBA_foreignBankDetails_swiftCode(
			form.elements["itr1.refund.scheduleBA.foreignBankDetails.swiftCode"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.foreignBankDetails.swiftCode");
	}
	errors = validateField_itr1_refund_scheduleBA_foreignBankDetails_bankName(
			form.elements["itr1.refund.scheduleBA.foreignBankDetails.bankName"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.foreignBankDetails.bankName");
	}
	errors = validateField_itr1_refund_scheduleBA_foreignBankDetails_countryCode(
			form.elements["itr1.refund.scheduleBA.foreignBankDetails.countryCode"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.foreignBankDetails.countryCode");
	}
	errors = validateField_itr1_refund_scheduleBA_foreignBankDetails_bankAccountNo(
			form.elements["itr1.refund.scheduleBA.foreignBankDetails.bankAccountNo"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.foreignBankDetails.bankAccountNo");
	}
	errors = validateField_itr1_refund_scheduleBA_foreignBankDetails_iban(
			form.elements["itr1.refund.scheduleBA.foreignBankDetails.iban"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.refund.scheduleBA.foreignBankDetails.iban");
	}
	errors = validateField_itr1_schedule80G_don100Percent_doneeWithPan_doneeWithPanName(
			form.elements["itr1.schedule80G.don100Percent.doneeWithPan.doneeWithPanName"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100Percent.doneeWithPan.doneeWithPanName");
	}
	errors = validateField_itr1_schedule80G_don100Percent_doneeWithPan_addressDetail_addrDetail(
			form.elements["itr1.schedule80G.don100Percent.doneeWithPan.addressDetail.addrDetail"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100Percent.doneeWithPan.addressDetail.addrDetail");
	}
	errors = validateField_itr1_schedule80G_don100Percent_doneeWithPan_addressDetail_cityOrTownOrDistrict(
			form.elements["itr1.schedule80G.don100Percent.doneeWithPan.addressDetail.cityOrTownOrDistrict"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100Percent.doneeWithPan.addressDetail.cityOrTownOrDistrict");
	}
	errors = validateField_itr1_schedule80G_don100Percent_doneeWithPan_addressDetail_stateCode(
			form.elements["itr1.schedule80G.don100Percent.doneeWithPan.addressDetail.stateCode"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100Percent.doneeWithPan.addressDetail.stateCode");
	}
	errors = validateField_itr1_schedule80G_don100Percent_doneeWithPan_addressDetail_pinCode(
			form.elements["itr1.schedule80G.don100Percent.doneeWithPan.addressDetail.pinCode"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100Percent.doneeWithPan.addressDetail.pinCode");
	}
	errors = validateField_itr1_schedule80G_don100Percent_doneeWithPan_doneePAN(
			form.elements["itr1.schedule80G.don100Percent.doneeWithPan.doneePAN"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100Percent.doneeWithPan.doneePAN");
	}
	errors = validateField_itr1_schedule80G_don100Percent_doneeWithPan_donationAmt(
			form.elements["itr1.schedule80G.don100Percent.doneeWithPan.donationAmt"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100Percent.doneeWithPan.donationAmt");
	}
	errors = validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_doneeWithPanName(
			form.elements["itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.doneeWithPanName"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.doneeWithPanName");
	}
	errors = validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_addressDetail_addrDetail(
			form.elements["itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.addressDetail.addrDetail"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.addressDetail.addrDetail");
	}
	errors = validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_addressDetail_cityOrTownOrDistrict(
			form.elements["itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.addressDetail.cityOrTownOrDistrict"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.addressDetail.cityOrTownOrDistrict");
	}
	errors = validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_addressDetail_stateCode(
			form.elements["itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.addressDetail.stateCode"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.addressDetail.stateCode");
	}
	errors = validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_addressDetail_pinCode(
			form.elements["itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.addressDetail.pinCode"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.addressDetail.pinCode");
	}
	errors = validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_doneePAN(
			form.elements["itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.doneePAN"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.doneePAN");
	}
	errors = validateField_itr1_schedule80G_don50PercentNoApprReqd_doneeWithPan_donationAmt(
			form.elements["itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.donationAmt"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentNoApprReqd.doneeWithPan.donationAmt");
	}
	errors = validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_doneeWithPanName(
			form.elements["itr1.schedule80G.don100PercentApprReqd.doneeWithPan.doneeWithPanName"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100PercentApprReqd.doneeWithPan.doneeWithPanName");
	}
	errors = validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_addressDetail_addrDetail(
			form.elements["itr1.schedule80G.don100PercentApprReqd.doneeWithPan.addressDetail.addrDetail"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100PercentApprReqd.doneeWithPan.addressDetail.addrDetail");
	}
	errors = validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_addressDetail_cityOrTownOrDistrict(
			form.elements["itr1.schedule80G.don100PercentApprReqd.doneeWithPan.addressDetail.cityOrTownOrDistrict"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100PercentApprReqd.doneeWithPan.addressDetail.cityOrTownOrDistrict");
	}
	errors = validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_addressDetail_stateCode(
			form.elements["itr1.schedule80G.don100PercentApprReqd.doneeWithPan.addressDetail.stateCode"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100PercentApprReqd.doneeWithPan.addressDetail.stateCode");
	}
	errors = validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_addressDetail_pinCode(
			form.elements["itr1.schedule80G.don100PercentApprReqd.doneeWithPan.addressDetail.pinCode"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100PercentApprReqd.doneeWithPan.addressDetail.pinCode");
	}
	errors = validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_doneePAN(
			form.elements["itr1.schedule80G.don100PercentApprReqd.doneeWithPan.doneePAN"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100PercentApprReqd.doneeWithPan.doneePAN");
	}
	errors = validateField_itr1_schedule80G_don100PercentApprReqd_doneeWithPan_donationAmt(
			form.elements["itr1.schedule80G.don100PercentApprReqd.doneeWithPan.donationAmt"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don100PercentApprReqd.doneeWithPan.donationAmt");
	}
	errors = validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_doneeWithPanName(
			form.elements["itr1.schedule80G.don50PercentApprReqd.doneeWithPan.doneeWithPanName"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentApprReqd.doneeWithPan.doneeWithPanName");
	}
	errors = validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_addressDetail_addrDetail(
			form.elements["itr1.schedule80G.don50PercentApprReqd.doneeWithPan.addressDetail.addrDetail"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentApprReqd.doneeWithPan.addressDetail.addrDetail");
	}
	errors = validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_addressDetail_cityOrTownOrDistrict(
			form.elements["itr1.schedule80G.don50PercentApprReqd.doneeWithPan.addressDetail.cityOrTownOrDistrict"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentApprReqd.doneeWithPan.addressDetail.cityOrTownOrDistrict");
	}
	errors = validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_addressDetail_stateCode(
			form.elements["itr1.schedule80G.don50PercentApprReqd.doneeWithPan.addressDetail.stateCode"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentApprReqd.doneeWithPan.addressDetail.stateCode");
	}
	errors = validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_addressDetail_pinCode(
			form.elements["itr1.schedule80G.don50PercentApprReqd.doneeWithPan.addressDetail.pinCode"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentApprReqd.doneeWithPan.addressDetail.pinCode");
	}
	errors = validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_doneePAN(
			form.elements["itr1.schedule80G.don50PercentApprReqd.doneeWithPan.doneePAN"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentApprReqd.doneeWithPan.doneePAN");
	}
	errors = validateField_itr1_schedule80G_don50PercentApprReqd_doneeWithPan_donationAmt(
			form.elements["itr1.schedule80G.don50PercentApprReqd.doneeWithPan.donationAmt"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.schedule80G.don50PercentApprReqd.doneeWithPan.donationAmt");
	}
	errors = validateField_itr1_taxPaid_taxesPaid_othersInc_othersIncDtls_othNatOfInc(
			form.elements["itr1.taxPaid.taxesPaid.othersInc.othersIncDtls.othNatOfInc"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPaid.taxesPaid.othersInc.othersIncDtls.othNatOfInc");
	}
	errors = validateField_itr1_taxPaid_taxesPaid_othersInc_othersIncDtls_natureDesc(
			form.elements["itr1.taxPaid.taxesPaid.othersInc.othersIncDtls.natureDesc"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPaid.taxesPaid.othersInc.othersIncDtls.natureDesc");
	}
	errors=validateField_othersIncDtls_natureDesc() && errors;
	if (!errors) {
		return false;
	}
	errors = validateField_itr1_taxPaid_taxesPaid_othersInc_othersIncDtls_othAmount(
			form.elements["itr1.taxPaid.taxesPaid.othersInc.othersIncDtls.othAmount"],
			false)
			&& errors;
	if (!errors) {
		return focusTab("itr1.taxPaid.taxesPaid.othersInc.othersIncDtls.othAmount");
	}
	return errors;
}