$(document).ready(function(){
    console.log('working');

    $('.search-button').click(function(e){
        e.preventDefault();
        var dd1 = $('.dd1 option:selected').text();
        var dd2 = $('.dd2 option:selected').text();
        console.log(dd1);
        console.log(dd2);

        //iterate through all logos on page and display according to drop-down logic
        iterateLogos(dd1, dd2);


    });



});

function reset(id){
    $('li#' + id + ' img.color', 'li#'+ id + ' img.bw').fadeIn(200).css('display', 'none');
}

function showColor(id){
    $('li#' + id + ' img.color').fadeIn(200).css('display', 'inline');
    $('li#'+ id + ' img.bw').css('display', 'none');
}

function showBW(id){
    $('li#'+ id + ' img.bw').fadeIn(200).css('display', 'inline');
    $('li#' + id + ' img.color').css('display', 'none');

}

function iterateLogos(dd1, dd2) {
    var idNum=0;
    for(var i=0; i<9; i++) {
        var currentId="img" + idNum;
        console.log(currentId);
        reset(currentId);
        checkDisplayLogic(dd1, dd2, currentId);
        idNum++;
    }
}

function checkDisplayLogic(dd1, dd2, currentId){
    console.log(dd1);
    console.log(dd2);
    if (dd1 == 'PROGRAM TYPE' && dd2 == 'EDUCATION LEVEL'){
        showColor(currentId);
    }
    if (dd1 == 'SCHOLARSHIP' && dd2 == 'EDUCATION LEVEL'){
        if ($('li#' + currentId).hasClass('scholarship')){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == 'LOAN PROGRAM' && dd2 == 'EDUCATION LEVEL'){
        if ($('li#' + currentId).hasClass('loanprogram')){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == "SELECT ALL" && dd2 == 'EDUCATION LEVEL'){
        if (($('li#' + currentId).hasClass('loanprogram')) || ($('li#' + currentId).hasClass('scholarship'))){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == "PROGRAM TYPE" && dd2 == 'HIGH SCHOOL'){
        if ($('li#' + currentId).hasClass('highschool')){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == "PROGRAM TYPE" && dd2 == 'K-12'){
        if ($('li#' + currentId).hasClass('K-12')){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == "PROGRAM TYPE" && dd2 == 'SELECT ALL'){
        if (($('li#' + currentId).hasClass('highschool')) || ($('li#' + currentId).hasClass('K-12'))){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == "SELECT ALL" && dd2 == 'SELECT ALL'){
        if (($('li#' + currentId).hasClass('highschool')) || ($('li#' + currentId).hasClass('K-12')) || ($('li#' + currentId).hasClass('loanprogram')) || ($('li#' + currentId).hasClass('scholarship'))){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == "SCHOLARSHIP" && dd2 == 'SELECT ALL'){
        if ((($('li#' + currentId).hasClass('highschool')) || ($('li#' + currentId).hasClass('K-12'))) && ($('li#' + currentId).hasClass('scholarship'))){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == "SCHOLARSHIP" && dd2 == 'HIGH SCHOOL'){
        if (($('li#' + currentId).hasClass('highschool')) && ($('li#' + currentId).hasClass('scholarship'))){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == "SCHOLARSHIP" && dd2 == 'K-12'){
        if (($('li#' + currentId).hasClass('K-12')) && ($('li#' + currentId).hasClass('scholarship'))){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == "LOAN PROGRAM" && dd2 == 'SELECT ALL'){
        if ((($('li#' + currentId).hasClass('highschool')) || ($('li#' + currentId).hasClass('K-12'))) && ($('li#' + currentId).hasClass('loanprogram'))){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == "LOAN PROGRAM" && dd2 == 'HIGH SCHOOL'){
        if (($('li#' + currentId).hasClass('highschool')) && ($('li#' + currentId).hasClass('loanprogram'))){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == "LOAN PROGRAM" && dd2 == 'K-12'){
        if (($('li#' + currentId).hasClass('K-12')) && ($('li#' + currentId).hasClass('loanprogram'))){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == "SELECT ALL" && dd2 == 'HIGH SCHOOL'){
        if (($('li#' + currentId).hasClass('highschool')) && (($('li#' + currentId).hasClass('loanprogram')) || ($('li#' + currentId).hasClass('scholarship')))){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }
    if (dd1 == "SELECT ALL" && dd2 == 'K-12'){
        if (($('li#' + currentId).hasClass('K-12')) && (($('li#' + currentId).hasClass('loanprogram')) || ($('li#' + currentId).hasClass('scholarship')))){
            showColor(currentId);
        }
        else {
            showBW(currentId);
        }
    }

}






