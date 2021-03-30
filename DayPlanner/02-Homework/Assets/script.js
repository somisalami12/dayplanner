$(document).ready(function(){
    var hour = moment().hours();
    //Gets Current Date Information
    function CurrentDate(){
        $("#currentDay").text(moment().format('dddd, MMMM do YYYY'));   
    
    };
    //Past, Present, and Future Color Code
    function Schedule(){
        $("input").each(function(){
            var CurrentHour = $(this).attr("id");
            var Number = parseInt(CurrentHour);
            if (Number === hour){
                $(this).addClass("present");
            } else if (Number < hour){
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            };
        });
    };

    function renderStoredInputs(){
        $(".event").each(function(){
            var inputId = $(this).attr("id");
            $(this).val(localStorage.getItem(inputId));
        });
    };

    $(".saveBtn").click(function(){
        var scheduleInputs = $(this).siblings(".event").val();
        var inputsLocation = $(this).siblings(".event").attr("id");
        localStorage.setItem(inputsLocation,scheduleInputs);
    });

  
    setInterval(CurrentDate,1000);

    Schedule();

    renderStoredInputs();
    
    setInterval(Schedule,1000);
    

});
