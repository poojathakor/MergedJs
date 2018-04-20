/* ###################################################################################################
Extra Function
 ###################################################################################################*/
 function validateEmail(email) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(email)) {
        return true;
    }else{
        return false;
    }
}
 function dynamicFileUpload(n){
    var ext = $('#img_doc_upload' +n).val().split('.').pop().toLowerCase();
    if($.inArray(ext, ['png','doc','jpg','gif','jpeg','docx']) == -1) {
        $("#file_upload_error" +n).text('please select png/ doc/ jpg/ jpeg/ gif/ docx file');
        $("#img_doc_upload" +n).val("");
    }
    if($.inArray(ext, ['png','doc','jpg','gif','jpeg','docx']) != -1){
        $("#file_upload_error" +n).text('');
    }
}

/* ###################################################################################################
Slider Module js
 ###################################################################################################*/
 if($(".body_cls").find(".slider-main").length !=0){
    
    $( document ).ready(function() {

    $('.active').siblings("img").hide();
    $('.wrap_show.active').show().next().show().next().show();

    $('.mySlides').hover(function(){
        clearInterval(interval);
    },startSlideInterval);
    startSlideInterval(); 

});
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    function plusSlides_thumb(n){
        showSlides(slideIndex += n);
    }
    function showSlides(n) {
        var i;
        var slides = $(".mySlides");
        var dots = $(".demo");
          var captionText = $("#caption");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) 
        {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
             dots[i].style.display="none";
            // slides[i].id.addClass("dis_none");
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        // alert(slideIndex);
        $('.wrap_show.active').show().next().show().next().show();

        // var maxlength=3;
        // if(slides.length > maxlength){
            if(slideIndex==slides.length-2){
                $('.wrap_show.active').show().next().show().prev().show().show().prev();
            }
            else if(slideIndex==slides.length-1){
                $('.wrap_show.active').show().next().show().prev().show().prev().show().prev();
            }
            else if(slideIndex==slides.length){
                $('.wrap_show.active').show().prev().show().prev().show();
            }   
        // }
    }
    var interval;
    function startSlideInterval(){
        interval = setInterval(function(){$(".next").click();},5000);
    }

}
/* ###################################################################################################
Slider Module Completed
 ###################################################################################################*/


$(document).ready(function(){
/* ###################################################################################################
Date Module
 ###################################################################################################*/


if($(".body_cls").find(".dt_module").length !=0){
        // $('#start_dt').datetimepicker({
        //     beforeShowDay: $.datepicker.noWeekends,
        //     onSelect: function(selected) {
        //             $("#end_dt").datepicker("option","minDate", selected)
        //         }
        // });
        // $('#end_dt').datetimepicker({
        //     beforeShowDay: $.datepicker.noWeekends,
        //     onSelect: function(selected) {
        //         $("#start_dt").datepicker("option","maxDate", selected)
        //     }
        // });
            $("#start_dt").datetimepicker({
                // numberOfMonths: 2,
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy' ,
                beforeShowDay: nationalDays,
                  onSelect: function(selected) {
                 $("#end_dt").datepicker("option","minDate", selected)
               }
            });
            $("#end_dt").datetimepicker({
                changeMonth: true,
                changeYear: true, 
                dateFormat: 'dd-mm-yy' ,
                beforeShowDay: nationalDays,

            });    

       var  natDays = [
        [1, 26, 'national_holidays'], [8, 15, 'national_holidays'], [3, 7, 'ofc_holiday'], [8, 9, 'ofc_holiday'],[4, 18, 'ofc_holiday'],
        [10, 2, 'national_holidays'],[1, 14, 'national_holidays']];


        function nationalDays(date) {
         for (i = 0; i < natDays.length; i++) {
           if (date.getMonth() == natDays[i][0] - 1  && date.getDate() == natDays[i][1]) {
             return [false, natDays[i][2] + '_day'];
           }
         }
         var day = date.getDay();
              if ((day == 0) || (day == 6)) {
                  return [false] ;
              }
         return [true, ''];
        }

       $("html").on("mouseenter","tr td:nth-child(2) .ui-state-default", function() {
            $(this).attr('title', 'Happy Monday').css({ "color":"red"});
        });
        $("html").on("mouseout","tr td:nth-child(2) .ui-state-default", function() {
            $(this).attr('title', 'Happy Monday').css({ "color":"#004276"});
        });
       
      $( function() {
    $( document ).tooltip();
  } );
      }   
/* ###################################################################################################
Tab Module
 ###################################################################################################*/
if($(".body_cls").find(".tab-info").length !=0){
          $( "#tabs" ).tabs();

                 $( "#accordion" ).accordion({
                    heightStyle: "content",
                    collapsible: true
                });
                 $( "#accordion_another" ).accordion({
                    heightStyle: "content",
                    collapsible: true
                });
                $("#tab_display").change(function(){
                console.log("on change event");
                if ($("#tab_display").is(":checked")){
                     console.log("1");
                       $("#li_tab3").show();
                       $("#li_tab3").css("display","inline");
                }
                if (!($("#tab_display").is(":checked"))){
                     console.log("1");
                       $("#li_tab3").hide();
                }
            });
    }
    // else{

    // }
/* ###################################################################################################
File Upload Module
 ###################################################################################################*/
 if($(".body_cls").find(".file_upload_form").length !=0){
    $("#img_upload").change(function(){
            var ext = $('#img_upload').val().split('.').pop().toLowerCase();
            var imgsize=(this.files[0].size/1024/1024).toFixed(2);
            // alert(imgsize);
            if($.inArray(ext, ['png']) == -1) {
                $("#img_error").text('please select png file');
                $("#img_upload").val("");
            }
            if(imgsize > 5)
            {
                $("#img_error").text('Image size must be less than 5mb');
                 $("#img_upload").val("");
            }
            if($.inArray(ext, ['png']) != -1 && imgsize <= 5){
                $("#img_error").text('');
            }

        });
        $("#doc_upload").change(function(){
            var ext = $('#doc_upload').val().split('.').pop().toLowerCase();
            var file_size=(this.files[0].size/1024/1024).toFixed(2);
            // alert(file_size);
            if($.inArray(ext, ['doc','docx']) == -1) {
                $("#doc_error").text('please select doc/ docx file');
                $("#doc_upload").val("");
            }
            if(file_size > 10){
                $("#doc_error").text('File size must be less than 10MB');
                $("#doc_upload").val("");
            }
            if($.inArray(ext, ['doc','docx']) != -1 && file_size <= 10){
                 $("#doc_error").text('');
            }
        });

        var i = 1;
        $("#add").click(function(){
            // alert($("#img_upload").val());
            if(($("#img_upload").val()=="") || ($("#doc_upload").val()=="") )
            {
                alert("both files are needed");
            }
            else
            {
                var html = '<div class="add_content remove_content'+i+'" ><div class="file_upload extra"><div class="grid"><div class="grid__item one-third"><label>Image/ Doc Upload</label><input type="file" name="img_doc_upload[]" id="img_doc_upload'+i+'" onchange="dynamicFileUpload('+i+');"/><div id="file_upload_error'+i+'"></div></div><div class="grid__item one-third"><label>Delete</label><p><button type="button" id="remove_content'+i+'" class="remove" ><i class="fa fa-trash-o"></i></button></p></div></div></div></div>';
                $(".control").append(html);
                i++;
            }
                
        });
        $(document).ready(function() {
            $("body").on("click",".remove",function(){ 
                var id = $(this).attr("id");
                // alert(id);
                $("."+id).remove();
            });
        });
}
/* ###################################################################################################
Registration Form Module
 ###################################################################################################*/
if($(".body_cls").find(".reg_form_cls").length !=0){
                var $select = $(".age");
                for (i=1;i<=100;i++){
                    $select.append($('<option></option>').val(i).html(i))
                }

                $("#reg_form").validate({
                rules: {
                    name:
                    {
                        required:true,
                        // lettersonly: true
                            pattern: /^[a-zA-Z ]*$/
                    },
                    gender: {
                       required: true
                    },
                    age: {
                       required: true
                    },
                    email: {
                        // email: true,
                        pattern: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                       require_from_group: [1, ".contact-grp"]

                    },
                    mobile: {
                        pattern: /^[0-9 ]*$/,
                        maxlength: 12,
                        minlength: 10,
                        require_from_group: [1, ".contact-grp"]
                    },
                    options: {
                       required: true
                    },
                    hobby:{
                        required: true
                    }
               },
              
                messages: {

                    name:
                    {
                        required:"Please enter your firstname",
                        pattern: "Letters Only Please"   
                    },
                    gender: {
                        required: "Please select your gender"
                    },
                    age: {
                        required: "Please provide your age" 
                    },
                    email: "Please enter a valid email address",
                    mobile: {
                        pattern: "mobile number must be numeric",
                        minlength: "mobile number must contain more than 10 digits",
                        maxlength: "mobile number must not contain less than 12 digits",
                        required: "Please provide your mobile number"
                    },
                    options: "Please select any one technology",
                    hobby: "Please enter your hobby"
               },
                errorPlacement: function(error, element) 
                {
                    if ( element.is(":radio") ) 
                    {
                        error.appendTo( element.parents('#gen_id') );
                    }
                    else 
                    { // This is the default behavior 
                        error.insertAfter( element );
                    }
                 }

            });
            /*jQuery.validator.addMethod("lettersonly", function(value, element) {
                return this.optional(element) || /^[a-zA-Z ]*$/i.test(value);
            }, "Letters only please"); 
            jQuery.validator.addMethod("valiemail", function(value, element) {
                return this.optional(element) || /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i.test(value);
            }, "Please enter Valid Email Address"); 
            jQuery.validator.addMethod("valinum", function(value, element) {
                return this.optional(element) || /^[0-9 ]*$/i.test(value);
            }, "Please enter Valid Email Address"); */
        $( function() {

            var availableTags = [
            "Amateur radio",
            "Audiophilia",
            "Aquarium keeping",
            "Baking",
            "Baton twirling",
            "Bonsai",
            "Computer programming",
            "Cooking",
            "Creative writing",
            "Dance",
            "Drawing",
            "Basketball",
            "Genealogy",
            "Home automation",
            "Home movies",
            "Jewelry making",
            "Knapping",
            "Lapidary",
            "Locksport",
            "Musical instruments",
            "Painting",
            "Knitting",
            "Scrapbooking",
            "Sculpting",
            "Sewing",
            "Singing",
            "Woodworking",
            "Audiophilia",
            "Microscopy",
            "Reading",
            "Shortwave listening"
            ];
            function split( val ) {
                return val.split( /,\s*/ );
            }
            function extractLast( term ) {
                return split( term ).pop();
            }
         
            $( "#hobby" ).on( "keydown", function( event ) {
                if ( event.keyCode === $.ui.keyCode.TAB &&
                    $( this ).autocomplete( "instance" ).menu.active ) {
                  event.preventDefault();
                }
              })
            .autocomplete({
                minLength: 0,
                source: function( request, response ) {
                  // delegate back to autocomplete, but extract the last term
                  response( $.ui.autocomplete.filter(
                    availableTags, extractLast( request.term ) ) );
                },
                focus: function() {
                  // prevent value inserted on focus
                  return false;
                },
                select: function( event, ui ) {
                  var terms = split( this.value );
                  // remove the current input
                  terms.pop();
                  // add the selected item
                  terms.push( ui.item.value );
                  // add placeholder to get the comma-and-space at the end
                  terms.push( "" );
                  this.value = terms.join( ", " );
                  return false;
                }
              });

            /* ###################################################### Dropdown with images ####################################################*/
            jQuery('.drop-down').append('<div class="button"></div>');    
            jQuery('.drop-down').append('<ul class="select-list" style="list-style:none;"></ul>');    
            jQuery('.drop-down select option').each(function() {  
                var bg = jQuery(this).css('background-image');    
                jQuery('.select-list').append('<li class="clsAnchor"><span value="' + jQuery(this).val() + '" class="' + jQuery(this).attr('class') + '" style=background-image:' + bg + '>' + jQuery(this).text() + '</span></li>');   
            });    
            jQuery('.drop-down .button').html('<span >' + jQuery('.drop-down select').find(':selected').text() + '</span>' + '<a href="javascript:void(0);" class="select-list-link"><i class="down"></i></a>').after('<input type="hidden" id="tec_hide">');   
            jQuery('.drop-down ul li').each(function() {   
            if (jQuery(this).find('span').text() == jQuery('.drop-down select').find(':selected').text()) {  
                jQuery(this).addClass('active');       
            }      
            });     
            jQuery('.drop-down .select-list span').on('click', function()
            {          
                var dd_text = jQuery(this).text();  
                var dd_img = jQuery(this).css('background-image'); 
                var dd_val = jQuery(this).attr('value');   
                jQuery('.drop-down .button').html('<span>' + dd_text + '</span>' + '<a href="javascript:void(0);" class="select-list-link"><i class="down"></i></a>');      
                $('#tec_hide').val(dd_text);

                jQuery('.drop-down .select-list span').parent().removeClass('active');    
                jQuery(this).parent().addClass('active');     
                $('.drop-down select[name=options]').val( dd_val ); 
                $('.drop-down .select-list li').slideUp();     
            });       
            jQuery('.drop-down .button').on('click','a.select-list-link', function()
            {      
                jQuery('.drop-down ul li').slideToggle();  
            });     
            /* ################################################################################################################################### */  
            // var i = 0
            // $(document).ready(function(){
            //         $(".hvr_cls"+i).hover(function(){
            //             // alert(".hvr_cls"+i);
            //         $(".error_tooltip"+i).css("display", "block");});
            //     i++;
            // });
           



        });

            function checktechselect()
           {
                    $('.drop-down >.button >a ').on('click',function(){
                        $('.select-error').removeClass("error");
                        $('.select-error').empty();
                    });

                   if($('#tec_hide').val()=='' || $('#tec_hide').val() =='--select--')
                   {
                     
                        $('.select-error').html('Please select technology').addClass("error");
                   }  
                   // else{
                   //      $('.select-error').removeClass("error");
                   // }
           }    
            $('#reg_form').submit(function()
            {
                checktechselect();
            });
        /* ################################################################ Tooltip code ########################################################*/
        // var tooltips = $( "[title]" ).tooltip({
        //      position: {
        //        my: "left top",
        //        at: "right+5 top-5",
        //        collision: "none"
        //     }
        // });
        

        $(".download").click(function(){
            
        window.location.href = 'file/30mb.pdf';

        var data = [];
        for (var i = 0; i < 100000; i++) {
            var tmp = [];
            for (var i = 0; i < 100000; i++) {
                tmp[i] = 'hue';
            }
            data[i] = tmp;
        };
        $.ajax({
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                // xhr.upload.addEventListener("progress", function (evt) {
                //     if (evt.lengthComputable) {
                //         var percentComplete = evt.loaded / evt.total;
                //         //console.log(percentComplete);
                //         $('.progress').css({
                //             width: percentComplete * 100 + '%'
                //         });
                //         if (percentComplete === 1) {
                //             $('.progress').addClass('hide');
                //         }
                //     }
                // }, false);
                xhr.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;

                        console.log(Math.round(percentComplete*100)+"%");
                        var pr = Math.round(percentComplete*100);

                        $(".perc").text(Math.round(percentComplete*100)+"%");
                         $('.progress').show();
                        if(pr==100)
                        {
                            // alert("hi");
                            $(".perc").text("download completed");
                            $('.progress').removeClass('hide');
                            $('.progress').hide();
                        }
                        
                        $('.progress').css({
                            width: percentComplete * 100 + '%'
                        });
                    }
                }, false);
                return xhr;
            },
            type: 'POST',
            url: "file/30mb.pdf",
            success: function (data) {}
        });
    });

    // if($("label.error").css("color","#f00"))
    // {
    //     alert("hi");
    // }

}
/* ###################################################################################################
Pop up Module
###################################################################################################### */
if($(".body_cls").find(".popup_module").length !=0){
    // $coo = $.cookie('emailaddress');
    var mailArr = new Array();
     $( document ).ready(function() {
        var close_coo = $.cookie('close');
        console.log(close_coo);
        if($.cookie('emailaddress') == null && $.cookie('close') != "yes"){
            $('.popup_module').delay(2000).fadeIn(100);
        }
        else{
             $('.popup_module').css("display","none");
        }
    });
    $("#close_popup").click(function(){
        var d = new Date();
        console.log("today "+ d);
        var tomo = new Date(d.getTime() + 24 * 60 * 60 * 1000);
        var tomo_date = tomo.getDate();
        var tomo_month = tomo.getMonth();
        var tomo_year = tomo.getFullYear();
        var tomo_hr = tomo.getHours();
        var tomo_min = tomo.getMinutes();
        var tomo_sec = tomo.getSeconds();
        // console.log(" tomo date:" + tomo_date+" tomo month: "+tomo_month+" tomo year:  "+tomo_year+" tomo hr "+tomo_hr+" tomo min "+tomo_min+" tomo sec: "+tomo_sec);
        $.cookie("close", "yes", {expires: new Date(tomo_year, tomo_month, tomo_date, tomo_hr, tomo_min, tomo_sec)});
        // $.cookie("close", "yes", {expires: new Date(2018, 3, 12, 10, 19, 00)});
        $('.popup_module').css("display","none");
        // var clos_coo = $.cookie("close");
        // console.log(clos_coo);
    });
    $("input[type='submit']").on('click' ,function(event){
        event.preventDefault();
        if (validateEmail($("#email").val()) == "" || ($("#email").val()) == "") {
            $("#email").addClass("error_cls");
            $(".email-error").html("Please enter valid email address");
            // event.preventDefault();
            return false;
        }
        else{
            // event.preventDefault();
                $.ajax({
                url: 'email.json',
                type: 'GET',
                dataType: 'json',
                
                success: function( resp ) {
                    for(var i = 0; i < resp.users.length; i++)
                    {
                       // console.log(resp.users[i].email);
                        if($("#email").val() == resp.users[i].email)
                        {
                            $(".email-error").html("its not a unique email address!");
                            return false;
                        }
                        else
                        {
                            var email = $("#email").val(); 
                            console.log(email);
                        }
                        
                    }
                     $.cookie('emailaddress', email);
                        $(".popup_module").hide();
                    // ANother Option to check Unique Email Address
                    // var email = $("#email").val(); 
                    // for(var i = 0; i < resp.users.length; i++) {
                    //         var getMail = (resp.users[i].email);
                    //         mailArr.push(getMail);
                    //         console.log(mailArr);
                    //     }
                    //     if(jQuery.inArray(email, mailArr)  !== -1 ) {
                    //         $(".email-error").html("its not a unique email address!");
                    //         return false;
                    //     } else {
                    //        var email = $("#email").val(); 
                    //         console.log(email);
                    //         $.cookie('emailaddress', email);
                    //         $(".popup_module").hide();
                    //     }
                  
                },
                error: function( req, status, err ) {
                    alert( 'something went wrong', status, err );
                }
            });
        }
    }); 
    $("#email").on("keydown",function(){
        if (validateEmail($("#email").val()) != ""){
            $("#email").removeClass("error_cls");
            $(".email-error").empty();
        }
    });
}

});

/*#########################################################################################################################################
Data table
#########################################################################################################################################*/
if($(".body_cls").find("#wrapper").length !=0){
    $(document).ready(function(){
        var ckbox = $('#check_id');
        $('#check_id').on('click',function () {
            if (ckbox.is(':checked')) {
                $('.check_cls').prop('checked', true);
            } else {
                 $('.check_cls').prop('checked', false);
            }
        });

        $("#close_popup").click(function(){
            $(".info_popup").hide();
            $(".body_cls").css("opacity","1");
        });

        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
                $("#myTable tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
        });
        $('#data_table tfoot th').not("th:first-child,th:last-child").each( function () {
             var title = $(this).text();
             $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
         } );

        // DataTable
         var otable = $('#data_table').DataTable({
             "pagingType": "full_numbers",

             'columnDefs': [
             {
                'targets': 0,
                'checkboxes': {
                   'selectRow': true
                }
             }
          ],
          'select': {
             'style': 'multi'
          },
          'order': [[1, 'asc']]
         });

         // Apply the search
         otable.columns().every( function () {
         
             var that = this;
             $( 'input', this.footer()).on( 'keyup change', function () {
                 if ( that.search() !== this.value ) {
                     that
                        .search( this.value )
                        .draw();
                 }
             } );
        });

        // inside POPUP
        var close_coo = $.cookie('close_datatbl');
        console.log(close_coo);
        if($.cookie('email_datatbl') == null && $.cookie('close_datatbl') != "yes"){
            $('.popup_module').delay(2000).fadeIn(100);
        }
        else{
             $('.popup_module').css("display","none");
        }

    });
    $.ajax({
        url: 'users.json',
        dataType: 'json',
        success: function( resp ) {
            console.log(resp);
            var html = "";
            html +='<table align="center" cellspacing=2 cellpadding=5 id="data_table" border=1>';
            html +='<thead>';
            html +='<tr>';
            html += '<th> ';
            // html += '<input id="check_id" type="checkbox" style="display: block;" />';
            html += '</th>';
            html +='<th>Name</th>';
            html +='<th>Country</th>';
            html +='<th>Age</th>';
            html +='<th>Opertion</th>';
            html +='</tr>';
            html +='</thead>';
            html +='<tfoot>';
            html +='    <tr>';
            html +='    <th>';
            html +='    </th>';
            html +='    <th>Name</th>';
            html +='    <th>Country</th>';
            html +='    <th>Age</th>';
            html +='    <th></th>';
            html +='    </tr>';
            html +='</tfoot>';
            html +='<tbody>';
             for(var i = 0; i < resp.users.length; i++){
                // html += '<td id="name_row'+i+'">'+resp.users[i].name+'</td><td id="country_row'+i+'">'+resp.users[i].country+'</td><td id="age_row'+i+'">'+resp.users[i].age+'</td>';

                html +='    <tr id="row'+i+'">';
                html += '   <td></td>';
                html +='    <td id="name_row'+i+'">'+resp.users[i].name+'</td>';
                html +='    <td id="country_row'+i+'">'+resp.users[i].country+'</td>';
                html +='    <td id="age_row'+i+'">'+resp.users[i].age+'</td>';
                html +='    <td>';
                html +='    <input type="button" id="info_button'+i+'" value="info" class="info" onclick="info_row('+i+')">';
                html +='    <input type="button" id="edit_button'+i+'" value="Edit" class="edit" onclick="edit_row('+i+')">';
                html +='    <input type="button" id="save_button'+i+'" value="Save" class="save" onclick="save_row('+i+')">';
                html +='    <input type="button" value="Delete" class="delete" onclick="delete_row('+i+')">';
                html +='    </td>';
                html +='    </tr>';

            }
            html +='</tbody>';
            html += '<tr>';
            html += '<td></td>';
            html += '<td><input type="text" id="new_name"></td>';
            html += '<td><input type="text" id="new_country"></td>';
            html += '<td><input type="text" id="new_age"></td>';
            html += '<td><input type="button" class="add" onclick="add_row();" value="Add Row"></td>';
            html += '</tr>';
            html += '</table>';
            $( '#wrapper').html( html );
        },
        error: function( req, status, err ) {
            console.log( 'something went wrong', status, err );
        }
    });
    function edit_row(no)
    {
     document.getElementById("edit_button"+no).style.display="none";
     document.getElementById("save_button"+no).style.display="inline";
        
     var name=document.getElementById("name_row"+no);
     var country=document.getElementById("country_row"+no);
     var age=document.getElementById("age_row"+no);
        
     var name_data=name.innerHTML;
     var country_data=country.innerHTML;
     var age_data=age.innerHTML;
        
     name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
     country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
     age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
    }

    function save_row(no)
    {
        var name_val=document.getElementById("name_text"+no).value;
        var country_val=document.getElementById("country_text"+no).value;
        var age_val=document.getElementById("age_text"+no).value;

        document.getElementById("name_row"+no).innerHTML=name_val;
        document.getElementById("country_row"+no).innerHTML=country_val;
        document.getElementById("age_row"+no).innerHTML=age_val;

        document.getElementById("edit_button"+no).style.display="inline";
        document.getElementById("save_button"+no).style.display="none";
    }

    function delete_row(no)
    {
        document.getElementById("row"+no+"").outerHTML="";
    }

    function info_row(no)
    {
        $(".info_popup").show();
        $(".body_cls").css("opacity","0.2");
        var name=$("#name_row"+no).html();
        var country=$("#country_row"+no).html();
        var age=$("#age_row"+no).html();
        $(".info_name").html(name);
        $(".info_country").html(country);
        $(".info_age").html(age);
    }
    function add_row()
    {
        var new_name=document.getElementById("new_name").value;
        var new_country=document.getElementById("new_country").value;
        var new_age=document.getElementById("new_age").value;
        if(new_name == "" || new_name == "" || new_country == "")
        {
            alert("Please enter all values");
            return false;
        }
        var table=document.getElementById("data_table");
        // var table_len=(table.rows.length)-2;
        var table_len=(table.rows.length);
        var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td></td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='info_button"+table_len+"' value='Info' class='info' onclick='info_row("+table_len+")'><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

        document.getElementById("new_name").value="";
        document.getElementById("new_country").value="";
        document.getElementById("new_age").value="";
    }
//############################################################################ Inside POPUP ############################################################################
//############################################################################ Inside POPUP ############################################################################

    $("#close_popup_dt").click(function(){
        // alert("hi");
        var d = new Date();
        console.log("today "+ d);
        var tomo = new Date(d.getTime() + 24 * 60 * 60 * 1000);
        var tomo_date = tomo.getDate();
        var tomo_month = tomo.getMonth();
        var tomo_year = tomo.getFullYear();
        var tomo_hr = tomo.getHours();
        var tomo_min = tomo.getMinutes();
        var tomo_sec = tomo.getSeconds();
        // console.log(" tomo date:" + tomo_date+" tomo month: "+tomo_month+" tomo year:  "+tomo_year+" tomo hr "+tomo_hr+" tomo min "+tomo_min+" tomo sec: "+tomo_sec);
        $.cookie("close_datatbl", "yes", {expires: new Date(tomo_year, tomo_month, tomo_date, tomo_hr, tomo_min, tomo_sec)});
        // $.cookie("close", "yes", {expires: new Date(2018, 3, 12, 10, 19, 00)});
        $('.popup_module').css("display","none");
        // var clos_coo = $.cookie("close");
        // console.log(clos_coo);
    });
    $('#bulkdel').on('click',function(){
       var numItems = $('.dt-checkboxes').length;
       alert(numItems);
       for(var i=0 ; i<numItems ; i++){
           if($('.dt-checkboxes').prop('checked')== true){
               $('.dt-checkboxes').prop('checked',true).parent().parent().hide();
           }
       }  
   });
    $("input[type='submit']").on('click' ,function(event){
        event.preventDefault();
        if (validateEmail($("#email").val()) == "" || ($("#email").val()) == "") {
            $("#email").addClass("error_cls");
            $(".email-error").html("Please enter valid email address");
            // event.preventDefault();
            return false;
        }
        else{
                $.ajax({
                url: 'email.json',
                type: 'GET',
                dataType: 'json',
                
                success: function( resp ) {
                    for(var i = 0; i < resp.users.length; i++)
                    {
                       // console.log(resp.users[i].email);
                        if($("#email").val() == resp.users[i].email)
                        {
                            $(".email-error").html("its not an unique email address!");
                            return false;
                        }
                        else
                        {
                            var email = $("#email").val(); 
                            console.log(email);
                            $.cookie('email_datatbl', email);
                            $(".popup_module").hide();
                        }
                    }
                   
                },
                error: function( req, status, err ) {
                    alert( 'something went wrong', status, err );
                }
            });
        }
    }); 
    $("#email").on("keydown",function(){
        if (validateEmail($("#email").val()) != ""){
            $("#email").removeClass("error_cls");
            $(".email-error").empty();
        }
    });
}
    