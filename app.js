/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    word_en : "Apple",  // word in english
 *    word_de : "Apfel"   // word in german
 *  }
 */ 
var yes=0;
var no=0;

var tmpl = " <li id='ID'>" +
           "  <h3 id='inga'>WORD</h3>" +
           "  <h3 class='solution'>SOLUTION</h3>"+
           " </li> ";
 
var i=0;

function next(index) {
      $('.options').hide();
    $('.final').hide();  
   
            if (i==(data.length)) {
                //$('.final').show();
                $('final').text().replace('XXX',yes).replace('YYY',yes+no)
                $('.final').show();     
            }
    else {
        $('.jumbotron').append(tmpl.replace('WORD',data[i].word_en).replace('SOLUTION',data[i].word_de));
    $('.solution').hide();
    $('#inga').click(function() {
        $('#inga').remove();
        $('.solution').show();
        $('.options').show();
        i++;
        $('.btnNO').click(function() {
            no++;
            $('#ID').remove();
            next(i);
        });
        $('.btnYES').click(function() {
            yes++;
            $('#ID').remove();
            next(i);
        });

    });

    }    
}



$(document).ready(function(){
    $('.options').hide();
    $('.final').hide();     $('.jumbotron').append(tmpl.replace('WORD',data[i].word_en).replace('SOLUTION',data[i].word_de));
    $('.solution').hide();
    $('#inga').click(function() {
        $('#inga').remove();
        $('.solution').show();
        $('.options').show();
            i++;
        $('.btnNO').click(function() {
            no++;
            $('#ID').remove();
            next(i);
            
        });
        $('.btnYES').click(function() {
            yes++;
            $('#ID').remove();
            next(i);
        });
    });
});







