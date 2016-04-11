$(document).ready(function(){
    console.log('working');

    $('.search-button').click(function(e){
        e.preventDefault();
        var dd1 = $('.dd1 option:selected').text();
        var dd2 = $('.dd2 option:selected').text();
        console.log(dd1);
        console.log(dd2);


    });



});

//pass in an element, check which class it belongs to and build an object
function colorLogoObj(elem){
    //set up possible flags
    var categoryFlag = {
        scholarship: false,
        loanprogram: false,
        highschool: false,
        k12: false
    };
    if ($(elem).hasClass('scholarship')) {
        console.log("Found scholarship");
        categoryFlag.scholarship = true;
    }
    if ($(elem).hasClass('K-12')) {
        console.log("Found K-12");
        categoryFlag.k12 = true;
    }
    if ($(elem).hasClass('highschool')) {
        console.log("Found highschool");
        categoryFlag.highschool = true;
    }
    if ($(elem).hasClass('loanprogram')) {
        console.log("Found loanprogram");
        categoryFlag.loanprogram = true;
    }

    console.log(categoryFlag);
    return categoryFlag;
}

function showColor(id){
    $('li#' + id + ' img.color').css('display', 'inline');
    $('li#'+ id + ' img.bw').css('display', 'none');
}

function showBW(id){
    $('li#'+ id + ' img.bw').css('display', 'inline');
    $('li#' + id + ' img.color').css('display', 'none');

}



//function selectLogos(dd1, dd2){
//    //reset all logos
//    $('.bw').css('display', 'inline');
//    $('.color').css('display', 'none');
//    //logic
//    if (dd1 == 'LOAN PROGRAM' && dd2 == 'SELECT ALL'){
//        $('.loanprogram img.bw').css('display', 'none');
//        $('.loanprogram img.color').css('display', 'inline');
//    }
//    else {
//        $('.loanprogram img.bw').css('display', 'inline');
//        $('.loanprogram img.color').css('display', 'none');
//    }
//
//    if (dd1 == 'SCHOLARSHIP'){
//        $('.scholarship img.bw').css('display', 'none');
//        $('.scholarship img.color').css('display', 'inline');
//    }
//    else {
//        $('.scholarship img.bw').css('display', 'inline');
//        $('.scholarship img.color').css('display', 'none');
//    }
//
//    if (dd1 == 'SELECT ALL'){
//        $('.loanprogram img.bw').css('display', 'none');
//        $('.loanprogram img.color').css('display', 'inline');
//        $('.scholarship img.bw').css('display', 'none');
//        $('.scholarship img.color').css('display', 'inline');
//    }
//
//}




