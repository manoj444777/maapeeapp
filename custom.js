var RWJSON
var LoadTypes = ["Self Weight", "Soil Fill @ Back", "Soil Fill @ Front", "Water Table @ Back", "Surcharge @ Back", "Axial Load", "Point Load @ Back", "Line Load @ Back", "Strip Load @ Back"];
var LoadTypesDescription = ["@ Backfill", "On Wall Top", "@ Backfill", "@ Backfill", "@ Backfill"];
var input_fld_Names = ['den_Concrete',
             'den_Water',
             'den_BackFillSoil_Normal', 'den_BackFillSoil_Saturated', 'den_BackFillSoil_Submerged', 'den_BackFillSoil_phi',
             'den_BaseSoil_Normal', 'den_BaseSoil_Saturated', 'den_BaseSoil_Submerged', 'den_BaseSoil_phi',
             'den_FrontFillSoil_Normal', 'den_FrontFillSoil_Saturated', 'den_FrontFillSoil_Submerged'];
var cal_fld_Names = ['den_BackFillSoil_ka', 'den_BackFillSoil_kp', 'den_BackFillSoil_ko',
             'den_BaseSoil_ka', 'den_BaseSoil_kp', 'den_BaseSoil_ko',
             'den_FrontFillSoil_phi', 'den_FrontFillSoil_ka', 'den_FrontFillSoil_kp', 'den_FrontFillSoil_ko'];
$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $("form").submit();
        }
    });
    var x = $('[name="' + 'den_Concrete' + '"]')[0];
    if (x.value === "") {
        x.value = x.placeholder;
    }
    var den_Concrete = parseFloat(x.value);

    //--------------------------------------------------
    //Adding Wall Geometry to Table
    $('#addWall').click(function () {
        //var tbl_Wall_tbody = $(this).closest('tbody');
        var tbl_Wall_tbody = $('#tbl_WallGeo').children('tbody');
        //var x = $("#WallGeo2").children('tbody');
        var cntWall = tbl_Wall_tbody.children().length;
        if (cntWall + 1 <= 5) {
            var varString = " ";
            varString = '<tr class="ui-state-default ui-sortable-handle">' +
                '<td>' + (cntWall + 1) + '</td>' +
                '<td>' + 'Wall ' + (cntWall + 1) + '</td>' +
                '<td><input type="text" style="width:100%" maxlength="4" name="" placeholder="500" value="500" class="numericRightAlign"></td>' +
                '<td><input type="text" style="width:100%" maxlength="4" name="" placeholder="200" value="200" class="numericRightAlign"></td>' +
                '<td><input type="text" style="width:100%" maxlength="4" name="" placeholder="200" value="200" class="numericRightAlign"></td>' +
                '<td><input type="text" style="width:100%" name="" class="numericRightAlign" readonly="readonly" disabled></td>' +
                '<td><input type="text" style="width:100%" name="" class="numericRightAlign" readonly="readonly" disabled></td>' +
                '<td><input type="text" style="width:100%" name="" class="numericRightAlign" readonly="readonly" disabled></td>' +
                '<td><input type="text" style="width:100%" name="" class="numericRightAlign" readonly="readonly" disabled></td>' +
                '<td><button type="button" class="redcol DeleteRow" style="width:100%"><strong>x</strong></button></td>' +
                '</tr>';
            tbl_Wall_tbody.append(varString);
        } else {
            alert("Could not add wall \n Maximum of only 5 walls are allowed");
        }
        ////alert(varString+"Handler for .click() called.");
    });
    //--------------------------------------------------

    //--------------------------------------------------
    //Adding Load Cases to Table
    $('#addLoadCase').click(function () {
        var tbl_LoadCase_tbody = $('#tbl_LoadCase').children('tbody');
        //var x = $("#WallGeo2").children('tbody');
        var cntCase = tbl_LoadCase_tbody.children().length;
        if (cntCase <= (5 - 1)) {
            var varString = '<tr>' +
                '<td>' + (cntCase + 1) + '</td>' +
                '<td>' +
                '<select name="" id="" class="inputs" style="width:100%">' +
                '<option>Toe @ Left, Back Fill at Right Side</option>' +
                '<option>Toe @ Right, Back Fill at Left Side</option>' +
                '</select>' +
                '</td>' +
                '<td><input type="text" maxlength="250" name="" placeholder="Description" class="inputs" style="width:100%"></td>' +
                '<td><button type="button" class="redcol DeleteRow" style="width:100%"><strong>x</strong></button></td>' +
                '</tr>';
            tbl_LoadCase_tbody.append(varString);
            fn_tbl_AddLoadCase(cntCase + 1);
        } else {
            alert("Could not add wall \n Maximum of only 5 walls are allowed");
        }
        ////alert(varString+"Handler for .click() called.");
    });

    //Function to Add Input for Load Case table
    function fn_tbl_AddLoadCase(cntCases) {
        var div_LoadsinLoadCases = $('#div_LoadsinLoadCases');
        var curCnt = div_LoadsinLoadCases.children().length;
        if (curCnt < cntCases) {
            var varString = '<div width="100%" style="overflow-x: scroll;">' +
                '<table width="100%" class="grid bor0" cellspacing="1" cellpadding="4">' +
                '<caption>Input for Load Case<span> ' + cntCases + '</span> </caption>' +
                '<thead>' +
                '<tr>' +
                '<td rowspan="3"><strong>Load No</strong></td>' +
                '<td rowspan="3"><strong>Type</strong></td>' +
                '<td rowspan="3"><strong>Description</strong></td>' +
                '<td rowspan="3"><strong>Values</strong></td>' +
                '<td rowspan="3"><strong>Units</strong></td>' +
                '<td rowspan="2"><strong>Distance X From Wall Face</strong></td>' +
                '<td rowspan="2"><strong>Length (L) </strong></td>' +
                '<td colspan="10"><strong>Design Considerations</strong></td>' +
                '<td rowspan="3"><strong>Delete</strong></td>' +
                '</tr>' +
                '<tr>' +
                '<td colspan="2"><strong>For Sliding Check</strong></td>' +
                '<td colspan="2"><strong>For Overturning Check</strong></td>' +
                '<td colspan="2"><strong>For Base Pressure Check</strong></td>' +
                '<td colspan="2"><strong>For Baseslab Design</strong></td>' +
                '<td colspan="2"><strong>For Wall Design</strong></td>' +
                '</tr>' +
                '<tr>' +
                '<td><strong>( m )</strong></td>' +
                '<td><strong>( m )</strong></td>' +
                '<td><strong>Consider?</strong></td>' +
                '<td><strong>Factor</strong></td>' +
                '<td><strong>Consider?</strong></td>' +
                '<td><strong>Factor</strong></td>' +
                '<td><strong>Consider?</strong></td>' +
                '<td><strong>Factor</strong></td>' +
                '<td><strong>Consider?</strong></td>' +
                '<td><strong>Factor</strong></td>' +
                '<td><strong>Consider?</strong></td>' +
                '<td><strong>Factor</strong></td>' +
                '</tr>' +
                '</thead>' +
                '<tbody>' +
                '<tr>' +
                '<td>1</td>' +
                '<td>' +
                '<select class="form-control inputs"> ' +
                '<option value="0" disabled="" selected>Self Weight</option>' +
                '<option value="1" disabled="" >Soil Fill @ Back</option>' +
                '</select>' +
                '</td>' +
                '<td>Wall</td>' +
                '<td></td>' +
                '<td></td>' +
                '<td></td>' +
                '<td></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.0" class="numericRightAlign"></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.0" class="numericRightAlign"></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.0" class="numericRightAlign"></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.5" class="numericRightAlign"></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.5" class="numericRightAlign"></td>' +
                '<td></td>' +
                '</tr>' +
                '<tr>' +
                '<td>2</td>' +
                '<td>' +
                '<select class="form-control inputs"> ' +
                '<option value="0" disabled="">Self Weight</option>' +
                '<option value="1" disabled="" selected>Soil Fill @ Back</option>' +
                '</select>' +
                '</td>' +
                '<td>Soil Backfilling</td>' +
                '<td><input type="text" style="width:98%" name="" class="numericRightAlign"></td>' +
                '<td>m</td>' +
                '<td></td>' +
                '<td></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.0" class="numericRightAlign"></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.0" class="numericRightAlign"></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.0" class="numericRightAlign"></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.5" class="numericRightAlign"></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.5" class="numericRightAlign"></td>' +
                '<td>' +
                '<!--<button type="button" class="btn btn-danger btn-outline-danger DeleteRow" style="width:100%" disabled=""><span><i class="fa fa-trash-o"></i></span></button> -->' +
                '</td>' +
                '</tr>' +
                '</tbody>' +
                '<tfoot>' +
                '<tr>' +
                '<td colspan="18">' +
                '<button id="" type="button" class="confirmBTN addLoad" style="float: left;">+ Add Load</button>' +
                '</td>' +
                '</tr>' +
                '</tfoot>' +
                '</table>' +
                '</div>';
            div_LoadsinLoadCases.append(varString);
        }
    }
    //--------------------------------------------------

    //--------------------------------------------------
    //Adding Load to Load Cases Table
    //--------------------------------------------------
    // Adding Loads to Load Case Table
    //This Adds Extra Loadcase onClick event
    $("#div_LoadsinLoadCases").on('click', '.addLoad', function () {
        var ele = $(this).closest('table').children('tbody');
        var cntLoad = ele.children().length;
        if (cntLoad + 1 <= 10) {
            var varString = '<tr>' +
                '<td>' + (cntLoad + 1) + '</td>' +
                '<td>' + fn_LoadType() + '</td>' +
                '<td><input type="text" style="width:100%" placeholder="Description"></td>' +
                '<td><input type="text" style="width:95%" name="" class="numericRightAlign"></td>' +
                '<td>m</td>' +
                '<td><input type="text" style="width:95%" placeholder="1.0" class="numericRightAlign"></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.0" class="numericRightAlign"></td>' +

                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.0" class="numericRightAlign"></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.0" class="numericRightAlign"></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.0" class="numericRightAlign"></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.5" class="numericRightAlign"></td>' +
                '<td><select name="" id="" class="inputs" style="width:98%"><option>Yes</option><option>No</option></select></td>' +
                '<td><input type="text" style="width:95%" placeholder="1.5" class="numericRightAlign"></td>' +
                '<td><button type="button" class="redcol DeleteRow" style="width:100%"><strong>x</strong></button></td>' +
                '</tr>';
            ele.append(varString);
            //alert("Load Number " + (cntLoad + 1) + "\nSuccessfully added Load to Table");
        } else {
            alert("Warning : Load not added to Table\n" + "Can not add Loads beyond 10 Nos");
        }
    });

    function fn_LoadType() {
        var varString = "";
        varString = '<select class="form-control inputs">';
        var arrayLength = LoadTypes.length;
        for (var i = 0; i < arrayLength; i++) {
            var condition = (i <= 1) ? "disabled" : "";
            varString = varString + '<option value=' + i + ' ' + condition + '>' + LoadTypes[i] + '</option>';
            //Do something
        }
        varString = varString + '</select>';
        return varString;
    }
    //function fn_AddLoad(ele) {
    //$("#LoadCases").append('<li>');
    //ele.append($('<tr></tr>').load("addLoad.htm"));
    //}
    //--------------------------------------------------    
    //Deleting Row from Wall Table
    $('#tbl_WallGeo').on('click', '.DeleteRow', function () {
        //var xtbody = $(this).closest('tbody');
        //var xtrs = xtbody.children('tr');
        var ele = $(this).closest('tr');
        fn_DeleteRow(ele);
        //fn_UpdateSlNo();
    });
    //--------------------------------------------------
    //--------------------------------------------------    
    //Deleting Row from Wall Table
    $('#div_LoadsinLoadCases').on('click', '.DeleteRow', function () {
        var ele = $(this).closest('tr');
        fn_DeleteRow(ele);
    });
    //--------------------------------------------------

    //--------------------------------------------------
    //Deleting Row from Load Case from Table
    $('#tbl_LoadCase').on('click', '.DeleteRow', function () {
        var ele = $(this).closest('tr');
        fn_DeleteRow(ele);
        var x = $('#tbl_LoadCase').children('tbody').children('tr');
        var index = x.index(ele) + 1;
        fn_DeleteLoadCaseTbl(index);
    });
    //--------------------------------------------------


    $('#Recalculate').on('click', function () {
        fn_UpdateSlNo();
    });


    //--------------------------------------------------
    //Function to Delete Load Case Table from Load Case List
    function fn_DeleteLoadCaseTbl(index) {
        var x = $('#div_LoadsinLoadCases').children('div')
        x[index - 1].remove();
    }

    //--------------------------------------------------
    //function to Delete Row from Table(Wall Table, Load from Load Case Tables)
    function fn_DeleteRow(ele) {
        ele.fadeOut(250, function () {
            $(this).remove(); // this is the callback
            //alert("nSuccessfully deleted/removed");
        }); // function that runs after item fades
        event.stopPropagation(); // stops bubblin        
    }
    //--------------------------------------------------
    //function to Upadte Sl No's in Tbody
    function fn_UpdateSlNo() {
        var xtbody = $('#tbl_WallGeo').children('tbody');
        var xtrs = xtbody.children('tr');
        xtrs.each(function () {
            var curtr = $(this);
            var curindex = xtrs.index(this) + 1;
            var curtrtd0 = $(this).find("td:eq(0)")[0];
            curtrtd0.innerText = parseInt(curindex);
            var curtrtd1 = $(this).find("td:eq(1)")[0];
            curtrtd1.innerText = "Wall " + parseInt(curindex);
        });

        xtbody = $('#tbl_LoadCase').children('tbody');
        xtrs = xtbody.children('tr');
        xtrs.each(function () {
            var curtr = $(this);
            var curindex = xtrs.index(this) + 1;
            var curtrtd0 = $(this).find("td:eq(0)")[0];
            curtrtd0.innerText = parseInt(curindex);
        });



        var xtable = $('#div_LoadsinLoadCases').find('table');
        xtable.each(function () {
            var curtable = $(this);
            var xtbody = curtable.children('tbody');
            var xtrs = xtbody.children('tr');
            xtrs.each(function () {
                var curtr = $(this);
                var curindex = xtrs.index(this) + 1;
                var curtrtd0 = $(this).find("td:eq(0)")[0];
                curtrtd0.innerText = parseInt(curindex);
            });
        });



    }
    //--------------------------------------------------
    // Adding Load Cases to Work
    //This Adds Default Loadcase on Document Load
    var Tbl_LoadCases = $("#LoadCases");
    var Tbl_LoadCases_len = Tbl_LoadCases.children().length;
    if (Tbl_LoadCases_len == 1) {
        fn_AddCase(Tbl_LoadCases);
    }
    //This Adds Extra Loadcase onClick event
    $("#addCase").click(function () {
        //alert("Adding Load Case");
        var ele = Tbl_LoadCases;
        var cntCase = ele.children().length;
        if (cntCase - 1 <= 5) {
            fn_AddCase(ele);
        } else {
            alert("Warning : Load not added to Table\n" + "Can not add Loads beyond 5 Nos");
        }
    });
    //function to Adds Loadcase
    //Used in onClick and onLoad event
    function fn_AddCase(ele) {
        //$("#LoadCases").append('<li>');
        ele.append($('<li class=""></li>').load("addCase.htm"));
    }
    //--------------------------------------------------
    //$('td button span').click(function () {});
    //$("thead, .zeroheight").height("0px");
    $('ul.tabs li').click(function () {
        $(this).parent().find('a').removeClass("active");
        var Cur_ele = $(this);
        Cur_ele.find('a').addClass("active");
        $('.content').css('display', 'none');
        var CurContent = "#" + Cur_ele.attr('title');
        $(CurContent).css('display', 'block');
    });
    onLoadFunction();
    $(function () {
        $(".datepick").datepicker();
    });
    $(function () {
        $(".date_dummy_white").datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: "-100:+6",
            dateFormat: "dd/mm/yy",
            buttonText: "Choose",
            showOtherMonths: true,
            selectOtherMonths: true
        });
    });
    $(function () {
        $(".date_dummy_black").datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: "-100:+6",
            dateFormat: "dd/mm/yy",
            buttonText: "Choose",
            showOtherMonths: true,
            selectOtherMonths: true
        });
    });

});



function fn_Updt_FOS_Sliding(){
    var val_Rec = document.getElementsByName('FOS_Sliding_Rec')[0].value;
    var val_Input = document.getElementsByName('FOS_Sliding_Input')[0].value;
    var ele_Use = document.getElementsByName('FOS_Sliding_Use')[0]; 
    ele_Use.value = val_Input;
    if (val_Input < val_Rec){
        ele_Use.style.color = "white";    
        ele_Use.style.backgroundColor = "red";        
        //alert("Hey There");
    } else {
        ele_Use.style.color = "";    
        ele_Use.style.backgroundColor = ""; 
    }
    
}

function fn_Updt_FOS_Overturning(){
    var val_Rec = document.getElementsByName('FOS_Overturning_Rec')[0].value;
    var val_Input = document.getElementsByName('FOS_Overturning_Input')[0].value;
    var ele_Use = document.getElementsByName('FOS_Overturning_Use')[0]; 
    ele_Use.value = val_Input;
    if (val_Input < val_Rec){
        ele_Use.style.color = "white";    
        ele_Use.style.backgroundColor = "red";        
        //alert("Hey There");
    } else {
        ele_Use.style.color = "";    
        ele_Use.style.backgroundColor = ""; 
    } 
}

function fn_Updt_Fac_SoilFriction(){
    var val_Rec = document.getElementsByName('Fac_SoilFriction_Rec')[0].value;
    var val_Input = document.getElementsByName('Fac_SoilFriction_Input')[0].value;
    var ele_Use = document.getElementsByName('Fac_SoilFriction_Use')[0]; 
    ele_Use.value = val_Input;
    if (val_Input > val_Rec){
        ele_Use.style.color = "white";    
        ele_Use.style.backgroundColor = "red";        
        //alert("Hey There");
    } else {
        ele_Use.style.color = "";    
        ele_Use.style.backgroundColor = ""; 
    }
}

function fn_Updt_Fac_CharactDL(){
    var val_Rec = document.getElementsByName('Fac_CharactDL_Rec')[0].value;
    var val_Input = document.getElementsByName('Fac_CharactDL_Input')[0].value;
    var ele_Use = document.getElementsByName('Fac_CharactDL_Use')[0]; 
    ele_Use.value = val_Input;
    if (val_Input > val_Rec){
        ele_Use.style.color = "white";    
        ele_Use.style.backgroundColor = "red";        
        //alert("Hey There");
    } else {
        ele_Use.style.color = "";    
        ele_Use.style.backgroundColor = ""; 
        
    }
}


function fn_Updt_ErtPrCoeffs_BackFill(){
    var roundoffdigit = 5;
    var phi = parseFloat(document.getElementsByName('BackFillSoil_phi')[0].value);
    phi = DegreesToRadians(phi);
    var ka = (1-Math.sin(phi))/(1+Math.sin(phi));
    var kp = (1+Math.sin(phi))/(1-Math.sin(phi));
    var ko = (1-Math.sin(phi));
    
    roundoffdigit = Math.pow(10,roundoffdigit);
    ka = Math.round(ka*roundoffdigit)/roundoffdigit;
    kp = Math.round(kp*roundoffdigit)/roundoffdigit;
    ko = Math.round(ko*roundoffdigit)/roundoffdigit;
    document.getElementsByName('BackFillSoil_ka')[0].value =ka;
    document.getElementsByName('BackFillSoil_kp')[0].value =kp;
    document.getElementsByName('BackFillSoil_ko')[0].value =ko;    
}

function fn_Updt_ErtPrCoeffs_BaseSoil(){
    var roundoffdigit = 5;
    var phi = parseFloat(document.getElementsByName('BaseSoil_phi')[0].value);
    phi = DegreesToRadians(phi);
    var ka = (1-Math.sin(phi))/(1+Math.sin(phi));
    var kp = (1+Math.sin(phi))/(1-Math.sin(phi));
    var ko = (1-Math.sin(phi));
    
    roundoffdigit = Math.pow(10,roundoffdigit);
    ka = Math.round(ka*roundoffdigit)/roundoffdigit;
    kp = Math.round(kp*roundoffdigit)/roundoffdigit;
    ko = Math.round(ko*roundoffdigit)/roundoffdigit;
    document.getElementsByName('BaseSoil_ka')[0].value =ka;
    document.getElementsByName('BaseSoil_kp')[0].value =kp;
    document.getElementsByName('BaseSoil_ko')[0].value =ko; 
    
}


function fn_Updt_ErtPrCoeffs_FrontFill(){
    var roundoffdigit = 5;
    var phi = parseFloat(document.getElementsByName('FrontFillSoil_phi')[0].value);
    phi = DegreesToRadians(phi);
    var ka = (1-Math.sin(phi))/(1+Math.sin(phi));
    var kp = (1+Math.sin(phi))/(1-Math.sin(phi));
    var ko = (1-Math.sin(phi));
    
    roundoffdigit = Math.pow(10,roundoffdigit);
    ka = Math.round(ka*roundoffdigit)/roundoffdigit;
    kp = Math.round(kp*roundoffdigit)/roundoffdigit;
    ko = Math.round(ko*roundoffdigit)/roundoffdigit;
    document.getElementsByName('FrontFillSoil_ka')[0].value =ka;
    document.getElementsByName('FrontFillSoil_kp')[0].value =kp;
    document.getElementsByName('FrontFillSoil_ko')[0].value =ko; 
    
}


function DegreesToRadians(Degrees){
    return Degrees * Math.PI / 180;
}


