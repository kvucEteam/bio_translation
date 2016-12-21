
//===================================================================================
// NOTE: Class names etc has been named by biological naming convensions
//===================================================================================
//
// Biological naming convension:
//
//          5'  ACTGGACTACTGGACTGACT  3'  // Coding stand
//          3'  TGACCTGATGACCTGACTGA  5'  // Template stand
//                   -------->            // RNA polymerase movement on the template strand (aka. "downstream" relative to both DNA and mRNA)
//                        |
//                   starting base in this particular setup (the JSON-data)

//     CODON   |    DNA    | mRNA | 
// --------------------------------
//             | code| tmpl|
// --------------------------------         
// Start codon | ATG | TAC | AUG  |
// Stop codon  | TGA | ACT | UGA  |
// Stop codon  | TAA | ATT | UAA  |
// Stop codon  | TAG | ATC | UAG  |

// var dna = 'ACTGGACTACTGGACTGACT';  // codingStrand

// background-color: #454E4F == 069078079,  #454C4C == 069076076

// Translaton hvor codon og hele tRNA fylder det samme:
// http://hyperphysics.phy-astr.gsu.edu/hbase/Organic/translation.html
// http://classes.midlandstech.edu/carterp/Courses/bio225/chap08/Microbial%20Genetics%203.htm


// Molecular and Cellular Biology Animations: Development and Impact on Student Learning - Phillip McClean
// https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1103718/

// Phillip E. McClean
// https://www.ag.ndsu.edu/plantsciences/people/faculty/mcclean

// Translation - 50 sek:
// https://www.youtube.com/watch?v=5bLEDd-PSTQ
// http://vcell.ndsu.edu/animations/translation/movie-flash.htm







var bioObj = {
        
        dna : { 
            A : {name:"Adenin", class:"adenin DNA", src: {codingStrand: 'ao.png', templateStrand: 'an.png'} },
            C : {name:"Cytosin",class:"cytosin DNA", src: {codingStrand: 'co.png', templateStrand: 'cn.png'} },
            G : {name:"Guanin", class:"guanin DNA", src: {codingStrand: 'go.png', templateStrand: 'gn.png'} },
            T : {name:"Thymin", class:"thymin DNA", src: {codingStrand: 'to.png', templateStrand: 'tn.png'} }
        },
        mRNA : { 
            A : {name:"Adenin", class:"adenin mRNA", src:"am.png"},
            C : {name:"Cytosin",class:"cytosin mRNA", src:"cm.png"},
            G : {name:"Guanin", class:"guanin mRNA", src:"gm.png"},
            U : {name:"Uracil", class:"uracil mRNA", src:"um.png"}
        },
        tRNA : {
            img: { 
                A : {name:"Adenin", class:"adenin mRNA", src: {down: 'ao.png', up: 'an.png'}},
                C : {name:"Cytosin",class:"cytosin mRNA", src: {down: 'co.png', up: 'cn.png'}},
                G : {name:"Guanin", class:"guanin mRNA", src: {down: 'go.png', up: 'gn.png'}},
                U : {name:"Uracil", class:"uracil mRNA", src: {down: 'uo.png', up: 'un.png'}}
            },
            U : {
                U: {
                    U: {name: "Fenylalanin", sym: "Phe", symShort: "F"},
                    C: {name: "Fenylalanin", sym: "Phe", symShort: "F"},
                    A: {name: "Leucin", sym: "Leu", symShort: "L"},
                    G: {name: "Leucin", sym: "Leu", symShort: "L"}
                },
                C: {
                    U: {name: "Serin", sym: "Ser", symShort: "S"},
                    C: {name: "Serin", sym: "Ser", symShort: "S"},
                    A: {name: "Serin", sym: "Ser", symShort: "S"},
                    G: {name: "Serin", sym: "Ser", symShort: "S"}
                },
                A: {
                    U: {name: "Tyrosin", sym: "Tyr", symShort: "Y"},
                    C: {name: "Tyrosin", sym: "Tyr", symShort: "Y"},
                    A: {name: "", codonAction: "STOP"},
                    G: {name: "", codonAction: "STOP"}
                },
                G: {
                    U: {name: "Cystein", sym: "Cys", symShort: "C"},
                    C: {name: "Cystein", sym: "Cys", symShort: "C"},
                    A: {name: "", codonAction: "STOP"},
                    G: {name: "Tryptofan", sym: "Trp", symShort: "W"}
                }
            },
            C : {
                U: {
                    U: {name: "Leucin", sym: "Leu", symShort: "L"},
                    C: {name: "Leucin", sym: "Leu", symShort: "L"},
                    A: {name: "Leucin", sym: "Leu", symShort: "L"},
                    G: {name: "Leucin", sym: "Leu", symShort: "L"}
                },
                C: {
                    U: {name: "Prolin", sym: "Pro", symShort: "P"},
                    C: {name: "Prolin", sym: "Pro", symShort: "P"},
                    A: {name: "Prolin", sym: "Pro", symShort: "P"},
                    G: {name: "Prolin", sym: "Pro", symShort: "P"}
                },
                A: {
                    U: {name: "Histidin", sym: "His", symShort: "H"},
                    C: {name: "Histidin", sym: "His", symShort: "H"},
                    A: {name: "Glutamin", sym: "Gln", symShort: "Q"},
                    G: {name: "Glutamin", sym: "Gln", symShort: "Q"}
                },
                G: {
                    U: {name: "Arginin", sym: "Arg", symShort: "R"},
                    C: {name: "Arginin", sym: "Arg", symShort: "R"},
                    A: {name: "Arginin", sym: "Arg", symShort: "R"},
                    G: {name: "Arginin", sym: "Arg", symShort: "R"}
                }
            },
            A : {
                U: {
                    U: {name: "Isoleucin", sym: "Ile", symShort: "I"},
                    C: {name: "Isoleucin", sym: "Ile", symShort: "I"},
                    A: {name: "Isoleucin", sym: "Ile", symShort: "I"},
                    G: {name: "Methionin", sym: "Met", symShort: "M", codonAction: "START"}
                },
                C: {
                    U: {name: "Threonin", sym: "Thr", symShort: "T"},
                    C: {name: "Threonin", sym: "Thr", symShort: "T"},
                    A: {name: "Threonin", sym: "Thr", symShort: "T"},
                    G: {name: "Threonin", sym: "Thr", symShort: "T"}
                },
                A: {
                    U: {name: "Asparagin", sym: "Asn", symShort: "N"},
                    C: {name: "Asparagin", sym: "Asn", symShort: "N"},
                    A: {name: "Lysin", sym: "Lys", symShort: "K"},
                    G: {name: "Lysin", sym: "Lys", symShort: "K"}
                },
                G: {
                    U: {name: "Serin", sym: "Ser", symShort: "S"},
                    C: {name: "Serin", sym: "Ser", symShort: "S"},
                    A: {name: "Arginin", sym: "Arg", symShort: "R"},
                    G: {name: "Arginin", sym: "Arg", symShort: "R"}
                }
            },
            G : {
                U: {
                    U: {name: "Valin", sym: "Val", symShort: "V"},
                    C: {name: "Valin", sym: "Val", symShort: "V"},
                    A: {name: "Valin", sym: "Val", symShort: "V"},
                    G: {name: "Valin", sym: "Val", symShort: "V"}
                },
                C: {
                    U: {name: "Alanin", sym: "Ala", symShort: "A"},
                    C: {name: "Alanin", sym: "Ala", symShort: "A"},
                    A: {name: "Alanin", sym: "Ala", symShort: "A"},
                    G: {name: "Alanin", sym: "Ala", symShort: "A"}
                },
                A: {
                    U: {name: "Asparaginsyre", sym: "Asp", symShort: "D"},
                    C: {name: "Asparaginsyre", sym: "Asp", symShort: "D"},
                    A: {name: "Glutaminsyre", sym: "Glu", symShort: "E"},
                    G: {name: "Glutaminsyre", sym: "Glu", symShort: "E"}
                },
                G: {
                    U: {name: "Glycin", sym: "Gly", symShort: "G"},
                    C: {name: "Glycin", sym: "Gly", symShort: "G"},
                    A: {name: "Glycin", sym: "Gly", symShort: "G"},
                    G: {name: "Glycin", sym: "Gly", symShort: "G"}
                }
            } 
        }
}

function init_dObj(){
    window.dObj = {
        duration: 1000,  // Average animation time in Brownian motion
        length: 2,        // Average length in percent relative to screen height or width in Brownian motion animation.
        wrongFeedbackTriggered: false,
        idOfWronglyMovedNeucleotide: null,
        idOfLastMoved_tRNA: null
    };
}


function basicPosCalc(){

    window.translationContainer_pos = $('#translationContainer').position();
    $('#xPos').html(translationContainer_pos.left);
    $('#yPos').html(translationContainer_pos.top);

    window.translationContainer_offset = $('#translationContainer').offset();
    $('#xOffset').html(translationContainer_offset.left);
    $('#yOffset').html(translationContainer_offset.top);
}


function randVec(length){
    return {x: length*(Math.random()-0.5), y: length*(Math.random()-0.5)};
}


// IMPORTANT: Class "draggable" (and NOT clases: "ui-draggable", "ui-draggable-handle" and "ui-draggable-dragging") makes all the problems of cloning from ouside and into a droppable.
function SimpleClone(TargetSelector) {
    var Clone = $(TargetSelector).clone().removeClass("draggable").css({
        'position': 'absolute',
        // 'height': $(TargetSelector).parent().height()*0.60+'px', // <---- NEW  Set the height to 60% of its parent, unit in px
        // 'width': $(TargetSelector).parent().width()*0.20+'px'    // <---- NEW  Set the width to 20% of its parent, unit in px
    }); // This is necessary for cloning inside the droppable to work properly!!!
    Clone = Clone.removeClass("ui-draggable ui-draggable-handle ui-draggable-dragging draggable_neucleotide").addClass('draggable_tRNA_clone'); // This just cleans the attributes so the DOM-element looks nicer.
    return Clone;
}


function setDimensions(TargetSelector, widthPercent, heightPercent) {
    $(TargetSelector).parent().height()*heightPercent
}


function brownianMotionInit(){
    window.counter = 0;
    // var duration = dObj;
    // // var length = 6;
    // var length = 2;
    for (var n in dObj.moveObjArr){

        brownianMotion3(n, dObj.duration, dObj.length); // UNCOMMENT 24-10-2016

    }
}


// dObj.moveObjArr.push({neucleotideNo:i, x:x, y:y, brownianMotion:true, animationInfo: {x:x, y:y, angel:null, duration:null}});
function brownianMotion3(n, duration, length){

    // if (!detectmob()){  // This solves the scroll-to-top problem of JQuery animate.

    //     if (dObj.moveObjArr[n].brownianMotion){

    //         // console.log('brownianMotion3 - counter: ' + counter);
    //         // ++counter;

    //         dObj.moveObjArr[n].animationInfo.duration = duration*Math.random() + 300;  // <------ Random instad?

    //         var vec = randVec(length);
    //         dObj.moveObjArr[n].animationInfo.x = String(vec.x + dObj.moveObjArr[n].x)+'%';
    //         dObj.moveObjArr[n].animationInfo.y = String(vec.y + dObj.moveObjArr[n].y)+'%';
    //         console.log('brownianMotion3 - dObj.moveObjArr[n].x: ' + dObj.moveObjArr[n].x + ', dObj.moveObjArr[n].y: '+dObj.moveObjArr[n].y);

    //         var randDeg = Math.round(180*(Math.random()-0.5));

    //         $( '#draggable_tRNA_'+n ).animate({
    //                 left: dObj.moveObjArr[n].animationInfo.x,
    //                 top: dObj.moveObjArr[n].animationInfo.y,
    //                 // step: function(now) {  // http://stackoverflow.com/questions/15191058/css-rotation-cross-browser-with-jquery-animate
    //                 //     console.log('brownianMotion2 - STEP');
    //                 //     $(this).css({
    //                 //         transform: 'rotate(' + String(now + 180*(Math.random()-0.5)) + 'deg)'
    //                 //     });
    //                 // }

    //                 // rotate: String(Math.round(180*(Math.random()-0.5)))+'deg'

    //                 duration: dObj.moveObjArr[n].animationInfo.duration

                    
    //                 // step: function(){
    //                 //     var randDeg = Math.round(180*(Math.random()-0.5));
    //                 //     $('#draggable_tRNA_'+n).animate(
    //                 //         {rotation: 360},
    //                 //         {
    //                 //             // duration: 'slow',
    //                 //             duration: 2*dObj.moveObjArr[n].animationInfo.duration,
    //                 //             step: function(now, fx) {
    //                 //                 $('#draggable_tRNA_'+n).css({"transform": "rotate("+randDeg+"deg)"});
    //                 //             }
    //                 //         }
    //                 //     );
    //                 // }

    //             },
    //             function() {  // Animation complete.
    //                 dObj.moveObjArr[n].animationInfo.angel += 5*((Math.random()-0.5)>0)?1:-1;

    //                 $( this ).css({                                         // <---- Virker godt med animate i x og y, men er ser ud som det hakker
    //                         '-moz-transform': 'rotate('+dObj.moveObjArr[n].animationInfo.angel+'deg)',
    //                         '-webkit-transform': 'rotate('+dObj.moveObjArr[n].animationInfo.angel+'deg)',
    //                         'transform': 'rotate('+dObj.moveObjArr[n].animationInfo.angel+'deg)' 
    //                 });

    //                 // $('#draggable_tRNA_'+n).animate(                // <---- Virker godt knap så godt med animate i x og y
    //                 //     {rotation: 360},
    //                 //     {
    //                 //         // duration: 'slow',
    //                 //         duration: 2*dObj.moveObjArr[n].animationInfo.duration,
    //                 //         step: function(now, fx) {
    //                 //             $('#draggable_tRNA_'+n).css({"transform": "rotate("+randDeg+"deg)"});
    //                 //         }
    //                 //     }
    //                 // );
    //                 console.log('brownianMotion3 - ANIMATION COMPLETE');
    //                 brownianMotion3(n, duration, length);  // UNCOMMENT 24-10-2016
    //             }
    //         );

    //         // setInterval(function(){ 
    //         //     var randDeg = Math.round(180*(Math.random()-0.5));
    //         //     $('#draggable_tRNA_'+n).css({                                         
    //         //             '-moz-transform': 'rotate('+randDeg+'deg)',
    //         //             '-webkit-transform': 'rotate('+randDeg+'deg)',
    //         //             'transform': 'rotate('+randDeg+'deg)' 
    //         //     });
    //         // }, 1000);

    //         // $('#draggable_tRNA_'+n).animate(              
    //         //     {rotation: 360},
    //         //     {
    //         //         // duration: 'slow',
    //         //         duration: 2*dObj.moveObjArr[n].animationInfo.duration,
    //         //         step: function(now, fx) {
    //         //             $('#draggable_tRNA_'+n).css({"transform": "rotate("+randDeg+"deg)"});
    //         //         }
    //         //     }
    //         // );
    //     }
    // }
}





function giveFeedback(valid, id, callBack){
    
    // var id = $(this).prop('id').replace('draggable_tRNA_','');


    dObj.moveObjArr[id].brownianMotion = false;

    $('#draggable_tRNA_'+id).animate({
            left: dObj.xPos,
            top: dObj.yPos,
            duration: 0
    }, function(){
        
    });

    // $('#draggable_tRNA_'+id).css({left: dObj.xPos, top: dObj.yPos});
    console.log('giveFeedback - id: ' + id);

    var HTML = 'Du skal anvende baseparringsprincippet kendt fra DNA replikation, men med den undtagelse at uracil erstatter thymin i mRNA. Dvs: cytosin (C) parres med guanin (G) og uracil (U) parres med thymin (T).';

    UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'</p>');

    if (!valid) {  // IMPORTANT: valid = "false" if it is the wrong draggable!
        console.log('giveFeedback - WRONG');
       
    } else {
        console.log('giveFeedback - CORRECT');

    }

    dObj.wrongFeedbackTriggered = true;
    dObj.idOfWronglyMovedNeucleotide = id;

    // dObj.userMsgBox_click = false;

    callBack();

}


function getHeightOfDnaNucleotides(){
    window.heigtObj = {};
    heigtObj.adenin = $(".codonAntiCodonWrap .adenin img").height();
    heigtObj.cytosin = $(".codonAntiCodonWrap .cytosin img").height();
    heigtObj.guanin = $(".codonAntiCodonWrap .guanin img").height();
    heigtObj.thymin = $(".codonAntiCodonWrap .thymin img").height();
    console.log('getHeightOfDraggableNucleotides - adenin: ' + heigtObj.adenin + ', cytosin: ' + heigtObj.cytosin + ', guanin: ' + heigtObj.guanin + ', thymin: ' + heigtObj.thymin);   
}



function modifyUserMsgBox_removeWhenClicked(selector, removeCloseClass) {
    $('#UserMsgBox').unbind('click');
    $('.MsgBox_bgr').unbind('click');

    if (removeCloseClass) {
        $('.CloseClass').remove();
    } else {
        $(document).on('click', '.CloseClass', function(event) {
            $(".MsgBox_bgr").fadeOut(200, function() {
                $(this).remove();
            });
        });
    }

    $(document).on('click', selector, function(event) {
        $(".MsgBox_bgr").fadeOut(200, function() {
            $(this).remove();
        });
    });
}



/**
 * DESCRIPTION: 
 * 
 */  
function UserMsgBox_mod(msg, showStandardYesNoBtns, callbackIf_yes, callbackIf_no){
    console.log('UserMsgBox_mod - CALLED');
    var yesNoBtns = '<div><div class="btn btn-success" id="userMsgBox_yes">Ja</div><div class="btn btn-danger" id="userMsgBox_no">Nej</div></div>';
    UserMsgBox("body", msg+((showStandardYesNoBtns)?yesNoBtns:''));

    $('#UserMsgBox').unbind('click');
    $('.MsgBox_bgr').unbind('click');

    if (showStandardYesNoBtns) {
        $('.CloseClass').remove();

    } else {
        $(document).on('click', '.CloseClass', function(event) {
            $(".MsgBox_bgr").fadeOut(200, function() {
                $(this).remove();
            });
        });
    }

    $(document).on('click', '#userMsgBox_yes', function(event) {
        console.log('.userMsgBox_yes - CLICKED');
        $(".MsgBox_bgr").fadeOut(200, function() {
            $(this).remove();

            callbackIf_yes();
        });
    });


    $(document).on('click', '#userMsgBox_no', function(event) {
        console.log('.userMsgBox_no - CLICKED');
        $(".MsgBox_bgr").fadeOut(200, function() {
            $(this).remove();

            callbackIf_no();
        });
    });
}


callbackIf_yes = function(){
     main();
}


callbackIf_no = function(){

    var HTML = '';
    HTML += '<div class="col-sm-12 col-md-12 video_container">';
    HTML +=     '<div class="embed-responsive embed-responsive-16by9 col-xs-12 col-md-12 vid_container">';
    HTML +=         '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P51rweOU9kg?rel=0" allowfullscreen="1"></iframe>';
    HTML +=     '</div>';
    HTML += '</div>';

    UserMsgBox("body", HTML);
}


function anmateDnaMovement(){

    ++dObj.currentCodon;
    console.log('anmateDnaMovement - dObj.currentCodon: ' + dObj.currentCodon + '\ndObj.codonArr: ' + JSON.stringify(dObj.codonArr));;

    // Only if the student is NOT finished with the execise, then...
    // if (dObj.currentNucleotide < dObj.mRnaArr.length){ // Only if currentNucleotide < dnaArr.length  <===> the student is NOT finished with the execise, then...   
    if (dObj.currentCodon < dObj.numOfCodons){

        // var TemplateNucleotide = bioObj.dna[complementaryDnaBase(dObj.mRnaArr[dObj.currentNucleotide])].name.toLowerCase();
        // console.log('anmateDnaMovement - TemplateNucleotide: ' + TemplateNucleotide);

        // var TemplateNucleotide = bioObj.dna[complementaryDnaBase(dObj.mRnaArr[dObj.currentNucleotide])].name.toLowerCase();
        // console.log('anmateDnaMovement - TemplateNucleotide: ' + TemplateNucleotide);

        // var ImgHeight_tmplStrand = heigtObj.TemplateNucleotide;
        // var ImgHeight_tmplStrand
        // console.log('anmateDnaMovement - height: ' + height);

        // $('#translationContainer').append(returnDnaBasePair(dObj.currentNucleotide));  // <----- Append the new basepair - then set the width to 0%!!!
        console.log('anmateDnaMovement - dObj.currentCodon: ' + dObj.currentCodon + '\ndObj.codonArr[dObj.currentCodon]): ' + dObj.codonArr[dObj.currentCodon] + '\ndObj.codonArr: ' + JSON.stringify(dObj.codonArr[dObj.currentCodon]));
        $('#translationContainer').append(returnCodonAntiCodonWrap(dObj.codonArr[dObj.currentCodon]));  // <----- Append the new basepair - then set the width to 0%!!!
        $(".codonAntiCodonWrap:last").css({width: '0%'});

        $(".codonAntiCodonWrap:last").animate({
            width: '7.72%',
            height: '40%'
            // backgroundColor: '#F00',
            // duration: 400
        }, 400, function(){
            
        });

        var height1 = $(".codonAntiCodonWrap .neucleotide img").eq(0).height();
        console.log('anmateDnaMovement - height1: ' + height1);

        $(".codonAntiCodonWrap:first .neucleotide img").height(height1+'px');

        $(".codonAntiCodonWrap:first").eq(0).animate({
            width: '0%'
            // duration: 400
        }, 400, function(){

            $(this).remove();      // Removes the first .codonAntiCodonWrap

            // $('.draggable_neucleotide').fadeOut(function(){                                      // Commented out 30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).
                
            // });

            // addDraggableNeucleotides();                                                         // Commented out 30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).
            addDraggable_tRNA(); 
            setEventhandlers();   // Reset all eventhandlers - the line above is NOT enough!    // Commented out 30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).

            // movePriviousCorrectNeucleotideBackToOriginalPosition();   // Added 30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).

            // insertCorrectDraggableClasses();  // Added 30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).

            // brownianMotion3(dObj.idOfLastMoved_tRNA, dObj.duration, dObj.length);  // This is needed to make the correctly dropped neucleotide move again AFTER is has been added by the lines above. 
            
        });

        // movePriviousCorrectNeucleotideBackToOriginalPosition();   // Added 30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).

        // insertCorrectDraggableClasses();  // Added 30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).

        // brownianMotion3(dObj.idOfLastMoved_tRNA, dObj.duration, dObj.length);  // This is needed to make the correctly dropped neucleotide move again AFTER is has been added by the lines above. 


        // $(".codonAntiCodonWrap").eq(0).animate({
        //     marginLeft: '-5%',
        //     opacity: '0',
        //     duration: 5000
        // });

    } else {

        // UserMsgBox("body", 'Tillykke du er færdig med øvelsen! (kursist ser video af mRNA forlade cellekærnen)');
        
        var msg = '<h3>Du har løst opgaven<span class="label label-success">korrekt!</span> </h3> Ønsker du at prøve igen? <br><br> Tryk "Ja" hvis du ønsker at prøve igen, ellers tryk "Nej" for at gå videre og se den afsluttede video.';
        UserMsgBox_mod(msg, true, callbackIf_yes, callbackIf_no);

    }
    
    
}


function isDraggableValid(){
    // dObj.currentDraggableNeucleotide
}


function setEventhandlers(){

    $(document).on('mousemove', "#translationContainer", function(event) {
        console.log('mousemove - CALLED');
        $('#xCord_abs').html(event.pageX);
        $('#yCord_abs').html(event.pageY);

        $('#xCord_rel').html(event.pageX - translationContainer_pos.left);
        $('#yCord_rel').html(event.pageY - translationContainer_pos.top);
    });


    // $( ".draggable_tRNA" ).draggable({

    // });


    $( ".draggable_tRNA" ).draggable({

        revert: function(valid) {
            console.log('card - REVERT');

            var id = $(this).prop('id').replace('draggable_tRNA_','');   // <------- MARK (#3a#) - IMPORTANT: This is beter than (#3b#)
            console.log('draggable_neucleotide - mousedown - id: ' + id);

            dObj.idOfLastMoved_tRNA = id;

            // ATO found the following if-else construct, that solves the error-sound issue. It is a good (but undocumented) way of triggering "events" on drop / not-drop.
            // SEE:   http://jamesallardice.com/run-a-callback-function-when-a-jquery-ui-draggable-widget-reverts/
            if(valid) {
                console.log("Dropped in a valid location - SUCCESS");
                // console.log("Dropped in a valid location - valid: " + JSON.stringify(valid));
                // correct_sound();

                // dObj.moveObjArr[id].brownianMotion = false;   // Commented out 30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).

                // TEST TIL KOPIERING:
                // <div class="neucleotide correct_tRNA adenin mRNA mRNA_string"><img class="img-responsive" src="img/am.png"></div>
                // <div class="neucleotide correct_tRNA cytosin mRNA mRNA_string"><img class="img-responsive" src="img/cm.png"></div>
                // <div class="neucleotide correct_tRNA guanin mRNA mRNA_string"><img class="img-responsive" src="img/gm.png"></div>
                // <div class="neucleotide correct_tRNA uracil mRNA mRNA_string"><img class="img-responsive" src="img/um.png"></div>

                // if (dObj.isCurrentDraggableCorrect){    // <---------  THIS DOES NOT WORK!!!!
                //     console.log('isCurrentDraggableCorrect: '+dObj.isCurrentDraggableCorrect+' - HIDE');
                //     $('#draggable_tRNA_'+id).hide();
                // }


                $(".codonAntiCodonWrap").eq(9).append(SimpleClone($(this)).addClass("tRNA_complex"));   // Append the cloned draggable to dropzone
                // $(this).remove();        // Remove the original draggable.  // Commented out 30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).
                $(this).hide();             // Hides the original draggable, which is shown again in MARK (#5#)   // Added 30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).

                $(".codonAntiCodonWrap:eq(9) .tRNA_complex").removeAttr('style id');  // Remove all inline style AND the id!!!

                anmateDnaMovement();
                
            } else {
                console.log("Dropped in a invalid location - FALIURE");
                // console.log("Dropped in a invalid location - valid: " + JSON.stringify(valid));
                // error_sound();

                if (!dObj.isCurrentDraggableCorrect) {

                    giveFeedback(valid, id, function(valid){  // <------ VIRKER IKKE! Funktionen "delay()" i "giveFeedback()" returnere rigtig nok sit callback når userMsgBox er lukket, men console.log() i MARK (#1#) exekveres med det samme! LØSNING: animer at nukleotiderne flyver tilbage på plads manuelt! ()
                        console.log('revert - valid - giveFeedback');

                        // This makes the neucleotide move again:
                        // dObj.moveObjArr[id].brownianMotion = true;
                        // brownianMotion3(id, dObj.duration, dObj.length);  // UNCOMMENT 24-10-2016
                        
                    });

                


                    //////////////////////////////////////////////////////////////////////////////////
                    //
                    //  FORHINDRE "REVERT" - se: http://stackoverflow.com/questions/7056520/with-jquery-uis-draggable-how-do-you-change-the-revert-on-stop
                    //
                    //  (efter at "revert" er forhindret efter ovenstående metode, så skal draggable animeres tilbage på plads!)
                    //
                    //  HUSK AT UKOMMENTERE (forneden):
                    //  dObj.moveObjArr[id].brownianMotion = true;
                    //  brownianMotion3(id, dObj.duration, dObj.length);  // UNCOMMENT 24-10-2016
                    //
                    ////////////////////////////////////////////////////////////////////////////////// 


                    // alert("Reverting!");  // <----- EN HELT ALMINDELIG ALERT VIRKER!!!


                    var id = $(this).prop('id').replace('draggable_tRNA_','');
                    console.log('card - REVERT - id: ' + id);
                    dObj.moveObjArr[id].brownianMotion = true;
                    $(this).width(dObj.moveObjArr[id].width);    // Re-ajust the width, since JQuery wants to set a new width
                    $(this).height(dObj.moveObjArr[id].height);  // Re-ajust the height, since JQuery wants to set a new height
                    
                    // This makes the neucleotide move again:
                    // dObj.moveObjArr[id].brownianMotion = true;
                    // brownianMotion3(id, dObj.duration, dObj.length);  // UNCOMMENT 24-10-2016
                } else {

                    // This makes the correct neucleotide move again:
                    dObj.moveObjArr[id].brownianMotion = true;
                    brownianMotion3(id, dObj.duration, dObj.length);  // added 04-11-2016

                }
            }
            console.log('valid - giveFeedback - END');  // MARK (#1#)
            
            // return !valid;
            return false;  // returning "false" prevents revert from happening (eventhough the "revert"-event is called).  // Commented out 30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).

            // return true; // Added  30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).
        },
        start: function(event, ui) {
            console.log('card - START');

            // var id = $(this).prop('id').replace('draggable_tRNA_','');
            // $('#draggable_tRNA_'+id).draggable( "option", "revert", false );   // <--- 28-10-2016: Dette virker (dvs "revert" slås fra), men det er så ikke muligt at tjekke svar!

            var baseClass = $(this).attr('class');
            console.log('start - baseClass: ' + baseClass);

            dObj.isCurrentDraggableCorrect = (baseClass.indexOf('correct_tRNA') !== -1)? true : false;
            console.log('start - dObj: ' + JSON.stringify(dObj));

            for (var n in bioObj.mRNA){
                if (baseClass.indexOf(bioObj.mRNA[n].name.toLowerCase()) !== -1){
                    dObj.currentDraggableNeucleotide = bioObj.mRNA[n].name.toLowerCase();
                } 
            }
            console.log('start - currentDraggableNeucleotide: ' + dObj.currentDraggableNeucleotide);
        },
        stop: function(event, ui) {
            console.log('card - STOP');

            var id = $(this).prop('id').replace('draggable_tRNA_','');  
            console.log('card - DRAG - id: ' + id);

            // $('#draggable_tRNA_'+id).draggable( "option", "revert", true );

            
            // dObj.moveObjArr[id].animationInfo.drag = false;


            // if (dropZoneObj !== null){ // If student answer is correct...
            //     var dropId = $(dropZoneObj).prop('id');
            //     console.log('card - dropId: ' + dropId);

            //     $(dropZoneObj).append(SimpleClone($(this)).addClass("Clone"));  // Append the cloned card to dropzone
            //     $(this).remove();                                               // Remove the original card
            //     organizeCardPile('#'+dropId, 5, 0);
                
            //     // if (dropId == 'wasteBin') {
            //     //  $('.glyphicons-bin').css({'opacity':'0'});
            //     //  $( '.glyphicons-bin' ).animate({ opacity: 1}, 1000);
            //     //  $( '#'+dropId+' .card' ).last().animate({ opacity: 0.40}, 1000);
            //     // } 

            //     dropZoneObj = null;  // Reset dropZoneObj...

            //     // console.log('card - CORRECT ');
            //     // correct_sound();                        
            // } 
            // else {  // If student answer is wrong...

            //     console.log('card - ERROR ');
            //     // error_sound();               // <------ Does not work on mobile devices - see the solution ATO found above. 
            //     $(this).css({'top': topPos});   // This is done to make Internet Explore 11 understand that it needs på place the card back to its original position.
            // }

            // if ($('#cardPile .card').length == 0) {
            //     console.log('step_2_template - INIT');
            //     step_2_template();
            // }

            // if (dObj.isCurrentDraggableCorrect){   // <---------  THIS DOES NOT WORK!!!!
            //     console.log('isCurrentDraggableCorrect: '+dObj.isCurrentDraggableCorrect+' - SHOW');
            //     $('#draggable_tRNA_'+id).show();
            // }

        },
        drag: function(event, ui) {
            console.log('card - DRAG');

            var id = $(this).prop('id').replace('draggable_tRNA_','');  
            console.log('card - DRAG - id: ' + id);

            var offset = $(this).position();
            dObj.xPos = offset.left;
            dObj.yPos = offset.top;


            // dObj.moveObjArr[id].animationInfo.drag = true;


            // var id = $(this).prop('id').replace('draggable_tRNA_','');  // <------- MARK (#3b#) - IMPORTANT: This is not good - (#3a#) is better. The reason is that if the user 
            // console.log('card - DRAG - id: ' + id);
            // dObj.moveObjArr[id].brownianMotion = false;
            
            // dObj.moveObjArr[id].animationInfo.angel = 0;
            // $( this ).css({                                         // <---- Virker godt med animate i x og y, men er ser ud som det hakker
            //     '-moz-transform': 'rotate('+dObj.moveObjArr[id].animationInfo.angel+'deg)',
            //     '-webkit-transform': 'rotate('+dObj.moveObjArr[id].animationInfo.angel+'deg)',
            //     'transform': 'rotate('+dObj.moveObjArr[id].animationInfo.angel+'deg)' 
            // });
        }
    });


    $( "#dropZone" ).droppable({
        accept: ".correct_tRNA",

        drop: function(event, ui) {
            console.log('card - DROP');
            // window.dropZoneObj = $(this);
        } 
    });


    // WORKAROUND - PART 1/2 - see: MARK (#3a#) and MARK (#3b#):
    // If the following action is placed inside the "drag" property of "$('.draggable_neucleotide').draggable()" above, then the following problems occur:
    //      (1)  If you only perform a mousedown action (but not a drag), then the animate() still makes the neucleotide move.
    //      (2)  If you only perform a mousedown action (but not a drag), then the size (width and height) of the neucleotide may be altered due to the movement.
    $(document).on('mousedown', ".draggable_tRNA", function(event) {
        console.log('draggable_neucleotide - mousedown - CALLED');
        var id = $(this).prop('id').replace('draggable_tRNA_','');   // <------- MARK (#3a#) - IMPORTANT: This is beter than (#3b#)
        console.log('draggable_neucleotide - mousedown - id: ' + id);
        dObj.moveObjArr[id].brownianMotion = false;
        dObj.moveObjArr[id].animationInfo.mousedown = true;
        console.log('draggable_neucleotide - mousedown - dObj.moveObjArr['+id+'].animationInfo: ' + JSON.stringify(dObj.moveObjArr[id].animationInfo));

        // $( this ).stop( true, true );  // This is an attempt to stop the animation of the neucleotide when it gets mousedown 
        
        dObj.moveObjArr[id].animationInfo.angel = 0;
        $( this ).css({                                         // <---- Virker godt med animate i x og y, men er ser ud som det hakker
            '-moz-transform': 'rotate('+dObj.moveObjArr[id].animationInfo.angel+'deg)',
            '-webkit-transform': 'rotate('+dObj.moveObjArr[id].animationInfo.angel+'deg)',
            'transform': 'rotate('+dObj.moveObjArr[id].animationInfo.angel+'deg)' 
        });
    });

    // WORKAROUND - PART 2/2 - see: MARK (#3a#) and MARK (#3b#):
    // This is set in place so that the neucleotide will return to its origanel state, in the event that you only perform a mousedown action (but not a drag):
    // $(document).on('mouseup', ".draggable_neucleotide", function(event) {  // translationContainer
    $(document).on('mouseup', ".draggable_tRNA", function(event) {
        console.log('draggable_neucleotide - mouseup - CALLED');
        var id = $(this).prop('id').replace('draggable_tRNA_','');   // <------- MARK (#3a#) - IMPORTANT: This is beter than (#3b#)
        console.log('draggable_neucleotide - mouseup - id: ' + id);

        // dObj.moveObjArr[id].brownianMotion = true;  // 24-10-2016 - This causes a problem if the it is the correct neucleotide!

        if ((typeof(dObj.moveObjArr[id].animationInfo.mousedown)!=='undefined') && (dObj.moveObjArr[id].animationInfo.mousedown)) {  // If "drag" is defined AND false (false because the user has not dragged the nucleotide (only mousedown) )
            console.log('draggable_neucleotide - mouseup - RETURN TO STATE');
            dObj.moveObjArr[id].brownianMotion = true;
            $(this).width(dObj.moveObjArr[id].width);    // Re-ajust the width, since JQuery wants to set a new width
            $(this).height(dObj.moveObjArr[id].height);  // Re-ajust the height, since JQuery wants to set a new height
            // brownianMotion3(id, dObj.duration, dObj.length);  // UNCOMMENT 24-10-2016
            // dObj.moveObjArr[id].animationInfo.mousedown = false;
        }
        console.log('draggable_neucleotide - mouseup - dObj.moveObjArr['+id+'].animationInfo: ' + JSON.stringify(dObj.moveObjArr[id].animationInfo));
    });


    $(document).on('click', ".MsgBox_bgr", function(event) {

        if (dObj.wrongFeedbackTriggered){

            console.log('.MsgBox_bgr - CLICKED - wrongFeedbackTriggered');

            // This makes the neucleotide move again after failed attempt to drag:
            dObj.moveObjArr[dObj.idOfWronglyMovedNeucleotide].brownianMotion = true;
            brownianMotion3(dObj.idOfWronglyMovedNeucleotide, dObj.duration, dObj.length);  // UNCOMMENT 24-10-2016

            dObj.wrongFeedbackTriggered = false;
        }
    });

    $(document).on('click', "#UserMsgBox", function(event) {
        if (dObj.wrongFeedbackTriggered){

            // This makes the neucleotide move again after failed attempt to drag:
            dObj.moveObjArr[dObj.idOfWronglyMovedNeucleotide].brownianMotion = true;
            brownianMotion3(dObj.idOfWronglyMovedNeucleotide, dObj.duration, dObj.length);  // UNCOMMENT 24-10-2016

            dObj.wrongFeedbackTriggered = false;
        }
    });

}


function complementaryDnaBase(base){
    // var compBase = {"A":"T", "T":"A", "G":"C", "C":"G" };
    var compBase = {"A":"U", "U":"A", "G":"C", "C":"G" };
    return compBase[base];
}

function makeAntiCodon(codon){
    // var compBase = {"A":"T", "T":"A", "G":"C", "C":"G" };
    var compBase = {"A":"U", "U":"A", "G":"C", "C":"G" };
    return compBase[base];
}


function returnDnaBasePair(n){
    console.log('returnDnaBasePair - n: ' + n + ', dnaArr['+n+']' + dObj.mRnaArr[n] + ', bioObj.dna[dObj.mRnaArr['+n+']].name: ' + bioObj.tRNA.img[dObj.mRnaArr[n]].name + ', dna[complementaryDnaBase(dObj.mRnaArr['+n+'])].name: ' + bioObj.tRNA.img[complementaryDnaBase(dObj.mRnaArr[n])].name);
    return '<div class="codonAntiCodonWrap"><div class="neucleotide '+bioObj.tRNA.img[dObj.mRnaArr[n]].class+'"><img class="img-responsive" src="img/'+bioObj.tRNA.img[dObj.mRnaArr[n]].src.down+'"></div>  <div class="templateStrandWrap"><div class="neucleotide templateStrand '+bioObj.tRNA.img[complementaryDnaBase(dObj.mRnaArr[n])].class+'"><img class="img-responsive" src="img/'+bioObj.tRNA.img[complementaryDnaBase(dObj.mRnaArr[n])].src.up+'"></div></div></div>';    
}


function returnCodonAntiCodonWrap(codon){
    var HTML = '';
    HTML += '<div class="codonAntiCodonWrap">';    
    HTML +=     '<div class="neucleotide '+bioObj.tRNA.img[codon[0]].class+'"><img class="img-responsive" src="img/'+bioObj.tRNA.img[codon[0]].src.down+'"></div>';
    HTML +=     '<div class="neucleotide '+bioObj.tRNA.img[codon[1]].class+'"><img class="img-responsive" src="img/'+bioObj.tRNA.img[codon[1]].src.down+'"></div>';
    HTML +=     '<div class="neucleotide '+bioObj.tRNA.img[codon[2]].class+'"><img class="img-responsive" src="img/'+bioObj.tRNA.img[codon[2]].src.down+'"></div>';
    HTML += '</div>'; 
    return HTML;
}


function initTranslation(){

    // dObj.mRnaArr = dna.split('');  
    dObj.mRnaArr = jsonData.mRNA.split('');
    console.log('initTranslation - dnaArr: ' + dObj.mRnaArr);

    $('#translationContainer').html('');  // Clear all content in the event the user wants to try again.

    var HTML = '';
    HTML += '<img class="backgroundImg img-responsive" src="img/BG_translation.jpg">';
    HTML += '<div class="fadeOut fadeOut_left"></div>';
    HTML += '<div id="dropZone"></div>';
    // for (var n in dObj.mRnaArr){
    
    // for (var n = 0; n < 20; n++) {
        
    //     HTML += returnDnaBasePair(n);

    //     dObj.currentNucleotide = n;
    // }

    dObj.codonArr = [];
    var count = 0;
    dObj.numOfCodons = Math.floor(dObj.mRnaArr.length/3);
    console.log('initTranslation - dObj.numOfCodons: ' + dObj.numOfCodons);
    // for (var i = 0; i < 14; i++) {
    for (var i = 0; i < dObj.numOfCodons; i++) {
        var codon = [];
        for (var k = 0; k < 3; k++) {
            codon.push(dObj.mRnaArr[count]);
            ++count;
            
            // dObj.currentNucleotide = count;
            // dObj.currentCodon = i;
        }
        
        dObj.codonArr.push(codon);
    };
    dObj.currentCodon = 14; // <---- This is the the number of codons across the viewport, the rest will be added one-by-one as a correct tRNA is placed in the dropzone.
    console.log('initTranslation - dObj.codonArr: ' + JSON.stringify(dObj.codonArr) + ', dObj.currentCodon: ' + dObj.currentCodon);

    for (var i = 0; i < dObj.currentCodon; i++) {
        var codon = dObj.codonArr[i];
        HTML += returnCodonAntiCodonWrap(codon);
    };

    HTML += '<div class="fadeOut fadeOut_right"></div>';
    // HTML += '<div class="Clear"></div>';
    return HTML;
}


function correctmRnaNucleotide(){
    // $('#dropZone').css({position: 'absolute', left: '50%'});  // <----- NOTE: not needed since this is set in CSS, but is added here for clarity...

    // var startNeucleotideNo = Math.round(20 * 50/100); // <---- 20 neucleotide in the x-direction times 50% = 50/100, because this is the position of the dropZone i the x-direction.
    var startNeucleotideNo = dObj.currentNucleotide-9;  // <--- IPORTANT NOTE: "dObj.currentNucleotide" is always the right-most visible nucleotide (seen relative to the "dnaArr"), whereas startNeucleotideNo is almost in the center for the frame - therefore the "-9" ajustment is needed!
    var neucleotideInDna = complementaryDnaBase(dObj.mRnaArr[startNeucleotideNo]);
    console.log('correctmRnaNucleotide - neucleotideInDna: ' + neucleotideInDna);

    var compBase = {"A":"U", "T":"A", "G":"C", "C":"G" };

    return compBase[neucleotideInDna];
}


function shuffelArray(ItemArray) {
    var NumOfItems = ItemArray.length;
    var NewArray = ItemArray.slice(); // Copy the array...
    var Item2;
    var TempItem1;
    var TempItem2;
    for (var Item1 = 0; Item1 < NumOfItems; Item1++) {
        Item2 = Math.floor(Math.random() * NumOfItems);
        TempItem1 = NewArray[Item1];
        TempItem2 = NewArray[Item2];
        NewArray[Item2] = TempItem1;
        NewArray[Item1] = TempItem2;
    }
    return NewArray;
}


function randomlySpacedVec(){

    // This is what this function is trying to acchive (in array-form):
    // var x = Math.round(Math.random()*90 + 5);
    // var y = Math.round(Math.random()*10 + 5);

    if ((typeof(dObj.vecObj)==='undefined') || ((typeof(dObj.moveObjArr)!=='undefined') && (dObj.moveObjArr.length == 0))) {
        var xArr = [];
        var yArr = [];

        for (var i = 1; 5*i < 90; i++) { xArr.push(5*i+5); }
        for (var i = 1; i < 10; i++) { yArr.push(i+5); }

        dObj.vecObj = {xArr: shuffelArray(xArr), yArr: shuffelArray(yArr), x: null, y: null};
    }

    dObj.vecObj.x = dObj.vecObj.xArr.splice(0, 1)[0];

    dObj.vecObj.y = dObj.vecObj.yArr.splice(0, 1)[0];

    console.log('randomlySpacedVec - vecObj: ' + JSON.stringify(dObj.vecObj));
    // console.log('randomlySpacedVec - yArr: ' + dObj.vecObj.yArr);
    
    return {x:dObj.vecObj.x, y:dObj.vecObj.y};
}
// console.log('randomlySpacedVec 1: ' + randomlySpacedVec());
// console.log('randomlySpacedVec 2: ' + randomlySpacedVec());
// console.log('randomlySpacedVec 3: ' + randomlySpacedVec());



function addDraggableNeucleotides(){
    $('.draggable_neucleotide').remove(); // Remove previous neucleotides...

    var count = 0;
    var HTML = '';

    for (var n in bioObj.mRNA){
        console.log('addDraggableNeucleotides - n: ' + n);
        // HTML += '<div id="draggable_tRNA_'+count+'" class="neucleotide draggable_neucleotide '+((n==correctmRnaNucleotide())?'correct_tRNA':'')+' '+bioObj.mRNA[n].class+'">'+n+'</div>';
        HTML += '<div id="draggable_tRNA_'+count+'" class="neucleotide draggable_neucleotide '+((n==correctmRnaNucleotide())?'correct_tRNA':'')+' '+bioObj.mRNA[n].class+'"><img class="img-responsive" src="img/'+bioObj.mRNA[n].src+'"></div>';
        ++count;
    }
    for (var n in bioObj.mRNA){
        console.log('addDraggableNeucleotides - n: ' + n);
        // HTML += '<div id="draggable_tRNA_'+count+'" class="neucleotide draggable_neucleotide '+((n==correctmRnaNucleotide())?'correct_tRNA':'')+' '+bioObj.mRNA[n].class+'">'+n+'</div>';
        HTML += '<div id="draggable_tRNA_'+count+'" class="neucleotide draggable_neucleotide '+((n==correctmRnaNucleotide())?'correct_tRNA':'')+' '+bioObj.mRNA[n].class+'"><img class="img-responsive" src="img/'+bioObj.mRNA[n].src+'"></div>';
        ++count;
    }

    $('#translationContainer').append(HTML);

    console.log('addDraggableNeucleotides - count: ' + count);

    dObj.moveObjArr = [];
    for (var i = 0; i < count; i++) {
        // var x = Math.round(Math.random()*90 + 5);
        // var y = Math.round(Math.random()*15);

        // var x = Math.round(Math.random()*90 + 5);  // <----- OK! 28-10-2016
        // var y = Math.round(Math.random()*10 + 5);  // <----- OK! 28-10-2016

        var Tvec = randomlySpacedVec();
        var x = Tvec.x;
        var y = Tvec.y;
        if (Math.random() <= 0.5){
            $('#draggable_tRNA_'+i).css({position: 'absolute',top: String(y)+'%', left: String(x)+'%'});
        } else {
            y = y + 70;
            $('#draggable_tRNA_'+i).css({position: 'absolute',top: String(y)+'%', left: String(x)+'%'});
        }
    
        // var width = $('#draggable_tRNA_'+i).width();
        // var height = $('#draggable_tRNA_'+i).height();

        // dObj.moveObjArr.push({neucleotideNo:i, x:x, y:y, angle:0, brownianMotion:true});
        // dObj.moveObjArr.push({neucleotideNo:i, x:x, y:y, width:'5%', height:'10%', brownianMotion:true, animationInfo: {x:x, y:y, angel:null, duration:null}});
        dObj.moveObjArr.push({neucleotideNo:i, x:x, y:y, width:'2.5%', height:'10%', brownianMotion:true, animationInfo: {x:x, y:y, angel:null, duration:null}});


        dObj.moveObjArr[i].animationInfo.angel += 45*(Math.random()-0.5);

        $('#draggable_tRNA_'+i).css({                                       
            '-moz-transform': 'rotate('+dObj.moveObjArr[i].animationInfo.angel+'deg)',
            '-webkit-transform': 'rotate('+dObj.moveObjArr[i].animationInfo.angel+'deg)',
            'transform': 'rotate('+dObj.moveObjArr[i].animationInfo.angel+'deg)' 
        });
    };

    console.log('addDraggableNeucleotides - dObj.moveObjArr: ' + JSON.stringify(dObj.moveObjArr));
}


// NOTE: 
function movePriviousCorrectNeucleotideBackToOriginalPosition(){

    console.log('movePriviousCorrectNeucleotideBackToOriginalPosition - CALLED');

    var id = dObj.idOfLastMoved_tRNA;

    // $('#draggable_tRNA_'+id).remove(); // Remove the original 

    console.log('movePriviousCorrectNeucleotideBackToOriginalPosition - dObj.isCurrentDraggableCorrect: ' + dObj.isCurrentDraggableCorrect);

    if (dObj.isCurrentDraggableCorrect){
        // var HTML = '';
        // var nClass = $('#draggable_tRNA_'+dObj.idOfLastMoved_tRNA).prop('class');
        // for (var n in bioObj.mRNA){
        //     if (nClass.indexOf(bioObj.mRNA[n].class)!==-1) {
        //         HTML += '<div id="draggable_tRNA_'+id+'" class="neucleotide draggable_neucleotide '+bioObj.mRNA[n].class+'"><img class="img-responsive" src="img/'+bioObj.mRNA[n].src+'"></div>';
        //         break;
        //     }
        // }
    

        // $('#translationContainer').append(HTML);

        dObj.moveObjArr[id].brownianMotion = true;

        $('#draggable_tRNA_'+id).css({position: 'absolute',top: String(dObj.moveObjArr[id].y)+'%', left: String(dObj.moveObjArr[id].x)+'%'});

        $('#draggable_tRNA_'+id).css({                                         
            '-moz-transform': 'rotate('+dObj.moveObjArr[id].animationInfo.angel+'deg)',
            '-webkit-transform': 'rotate('+dObj.moveObjArr[id].animationInfo.angel+'deg)',
            'transform': 'rotate('+dObj.moveObjArr[id].animationInfo.angel+'deg)' 
        });

        $('#draggable_tRNA_'+id).fadeIn();  // FadeIn the draggable neucleotide, which were hidden in MARK (#5#)
    }
}


function insertCorrectDraggableClasses(){

    var lookUp = {"U":"Uracil", "T":"Thymin", "G":"Guanin", "C":"Cytosin", "A":"Adenin" };

    // console.log('insertCorrectDraggableClasses - correctmRnaNucleotide(): ' + correctmRnaNucleotide() + ', lookUp[correctmRnaNucleotide()]: ' + lookUp[correctmRnaNucleotide()].toLowerCase());

    $( ".draggable_neucleotide" ).each(function( index, element ) {
        if ($(element).prop('class').indexOf(lookUp[correctmRnaNucleotide()].toLowerCase())!==-1){
            console.log('insertCorrectDraggableClasses - TRUE 1 - class: ' + $(element).prop('class'));
            $(element).addClass('correct_tRNA');
            console.log('insertCorrectDraggableClasses - TRUE 2 - class: ' + $(element).prop('class'));
        } else {
            console.log('insertCorrectDraggableClasses - FALSE - class: ' + $(element).prop('class'));
            $(element).removeClass('correct_tRNA');
        }
    });
}


function ajustScreenHight(){
    var width = $('#translationContainer').width();
    $('#translationContainer').height(Math.round(768/1170*width));
}


function ajust_tRNA_dimensions(){
    var width = $('.draggable_tRNA').width();
    $('.draggable_tRNA').height(Math.round(268/223*width));
}


//############################################################################################################################################################
//                                                           TRANSLATION  CODE
//############################################################################################################################################################



function tRNA_template(antiCodon, id, correct_tRNA){
    var HTML = '';

    HTML += '<div id="draggable_tRNA_'+id+'" class="draggable_tRNA'+((correct_tRNA)?' correct_tRNA':'')+'">';

    HTML +=     '<div class="tRNA_antiCodon_Wrap">';
    HTML +=         '<div class="antiCodon antiCodonBase1 '+bioObj.tRNA.img[antiCodon[0]].class+'"><img class="img-responsive" src="img/'+bioObj.tRNA.img[antiCodon[0]].src.up+'"></div>';
    HTML +=         '<div class="antiCodon antiCodonBase2 '+bioObj.tRNA.img[antiCodon[1]].class+'"><img class="img-responsive" src="img/'+bioObj.tRNA.img[antiCodon[1]].src.up+'"></div>';
    HTML +=         '<div class="antiCodon antiCodonBase3 '+bioObj.tRNA.img[antiCodon[2]].class+'"><img class="img-responsive" src="img/'+bioObj.tRNA.img[antiCodon[2]].src.up+'"></div>';
    HTML +=     '</div>';

    HTML +=     '<div class="tRNA_img_wrap">';
    HTML +=         '<img class="img-responsive tRNA_img" src="img/tRNA.png">';
    HTML +=     '</div>';

    var compBase = {"A":"U", "U":"A", "G":"C", "C":"G" };
    var codon = [compBase[antiCodon[0]], compBase[antiCodon[1]], compBase[antiCodon[2]]];
    
    HTML +=     '<div class="aminoAcid '+bioObj.tRNA[codon[0]][codon[1]][codon[2]].name.toLowerCase()+'">'+bioObj.tRNA[codon[0]][codon[1]][codon[2]].sym+'</div>';
    HTML += '</div>';
    
    return HTML;
}

function addDraggable_tRNA(){

    // $('.draggable_tRNA').remove(); // Remove previous neucleotides...

    var count = 0;
    var HTML = '';

    var antiCodon = correctAntiCodon();

    HTML += tRNA_template(antiCodon, count, true);
    ++count;

    // var antiCodonArr = makeWrongAntiCodonArr(5);
    // console.log('addDraggableNeucleotides - antiCodonArr: ' + JSON.stringify(antiCodonArr));

    // for (var n in antiCodonArr){
    //     HTML += tRNA_template(antiCodonArr[n], count, false);
    //     ++count;
    // }

    $('#translationContainer').append(HTML);

    console.log('addDraggable_tRNA - count: ' + count);

    dObj.moveObjArr = [];
    for (var i = 0; i < count; i++) {
        // var x = Math.round(Math.random()*90 + 5);
        // var y = Math.round(Math.random()*15);

        // var x = Math.round(Math.random()*90 + 5);  // <----- OK! 28-10-2016
        // var y = Math.round(Math.random()*10 + 5);  // <----- OK! 28-10-2016

        var Tvec = randomlySpacedVec();
        var x = Tvec.x;
        var y = Tvec.y;
        // if (Math.random() <= 0.5){
        //     $('#draggable_tRNA_'+i).css({position: 'absolute',top: String(y)+'%', left: String(x)+'%'});
        // } else {
            y = y + 30;
            $('#draggable_tRNA_'+i).css({position: 'absolute',top: String(y)+'%', left: String(x)+'%'});
        // }
    
        // var width = $('#draggable_tRNA_'+i).width();
        // var height = $('#draggable_tRNA_'+i).height();

    
        // dObj.moveObjArr.push({neucleotideNo:i, x:x, y:y, width:'20%', height:'60%', brownianMotion:true, animationInfo: {x:x, y:y, angel:null, duration:null}});
        dObj.moveObjArr.push({neucleotideNo:i, x:x, y:y, brownianMotion:true, animationInfo: {x:x, y:y, angel:null, duration:null}});


        dObj.moveObjArr[i].animationInfo.angel += 45*(Math.random()-0.5);

        $('#draggable_tRNA_'+i).css({                                       
            '-moz-transform': 'rotate('+dObj.moveObjArr[i].animationInfo.angel+'deg)',
            '-webkit-transform': 'rotate('+dObj.moveObjArr[i].animationInfo.angel+'deg)',
            'transform': 'rotate('+dObj.moveObjArr[i].animationInfo.angel+'deg)' 
        });
    };

    console.log('addDraggable_tRNA - dObj.moveObjArr: ' + JSON.stringify(dObj.moveObjArr));
}


function makeWrongAntiCodonArr(numOfWrong_tRNA){
    var wrong_antiCodon_arr = [];

    var antiCodon = correctAntiCodon();
    for (var i = 0; i < numOfWrong_tRNA; i++) {
        wrong_antiCodon_arr.push(pointMutation(antiCodon, wrong_antiCodon_arr));
    };
    console.log('makeWrongAntiCodonArr - wrong_antiCodon_arr: ' + JSON.stringify(wrong_antiCodon_arr));

    return wrong_antiCodon_arr;
}


function pointMutation(codon, memCodonArr){
    var base = ['A','C','G','U']; 
    var c1 = codon;
    var count = 0;
    do {
        var c2 = c1.slice(); // Copy the array...
        var ni = Math.round(Math.random()*2); // Nucleotide index number
        var nt = Math.round(Math.random()*3); // Nucleotide base
        c2[ni] = base[nt];
        console.log('pointMutation - count: ' + count + ', c1: ' + c1 + ', c2: ' + c2);
        if (count > 50) {
            break;
        }
        ++count;
        // console.log('pointMutation - count: ' + count + ',bioObj.tRNA[c1[0]][c1[1]][c1[2]].name: ' + bioObj.tRNA[c1[0]][c1[1]][c1[2]].name + ', bioObj.tRNA[c2[0]][c2[1]][c2[2]].name: ' + bioObj.tRNA[c2[0]][c2[1]][c2[2]].name);
    } while((c2[0]+c2[1]+c2[2] == c1[0]+c1[1]+c1[2]) || (arrayElementInArray( memCodonArr, [c2[0],c2[1],c2[2]] ) ) );
    console.log('pointMutation - count: ' + count + ', c1[0]+c1[1]+c1[2]: ' + c1[0]+c1[1]+c1[2] + ', c2[0]+c2[1]+c2[2]: ' + c2[0]+c2[1]+c2[2]);
    
    return c2;
}


function removeElementIfExist(Tarray, element){
    console.log('removeElementIfExist - Tarray 1: ' + JSON.stringify(Tarray));
    for (var i in Tarray){
        if (Tarray[i] === element) {
            Tarray.splice(i, 1);
        }
    }
    console.log('removeElementIfExist - Tarray 2: ' + JSON.stringify(Tarray));
    return Tarray;
}


function arrayElementInArray(tArray, element){
    for (x in tArray){
        if (tArray[x].join() == element.join()) {
            return true;
        } 
    }
    return false;
}
console.log("arrayElementInArray([[1,2,3], ['A','C','G','U'], [1,'a',2,'b']], [1,'a',2,'b']): " + arrayElementInArray([[1,2,3], ['A','C','G','U'], [1,'a',2,'b']], [1,'a',2,'b']));


function correctAntiCodon(){
    // $('#dropZone').css({position: 'absolute', left: '50%'});  // <----- NOTE: not needed since this is set in CSS, but is added here for clarity...

    // var startNeucleotideNo = Math.round(20 * 50/100); // <---- 20 neucleotide in the x-direction times 50% = 50/100, because this is the position of the dropZone i the x-direction.
    var startCodoneNo = dObj.currentCodon-5;  // <--- IPORTANT NOTE: "dObj.currentNucleotide" is always the right-most visible nucleotide (seen relative to the "dnaArr"), whereas startNeucleotideNo is almost in the center for the frame - therefore the "-9" ajustment is needed!
    var codon = dObj.codonArr[startCodoneNo];
    console.log('correctmRnaNucleotide - startCodoneNo: ' + startCodoneNo + ', codon: ' + codon);

    var compBase = {"A":"U", "U":"A", "G":"C", "C":"G" };
    var antiCodon = [compBase[codon[0]], compBase[codon[1]], compBase[codon[2]]];
    console.log('correct_tRNA - antiCodon: ' + antiCodon);

    return antiCodon;
}


function main(){

    init_dObj();

    // getAjaxData("GET", "json/quizData.json", false, "json"); 
    // console.log("jsonData: " + JSON.stringify(jsonData));

    $('#header').html(jsonData.header);
    $('#instruction').html(instruction(jsonData.instruction));  
    $('#explanation').html(explanation(jsonData.explanation));

    basicPosCalc();

    $('#translationContainer').append(initTranslation());
    // ajustScreenHight();

    // addDraggableNeucleotides();
    addDraggable_tRNA();
    // correctAntiCodon();
    // makeWrongAntiCodonArr(5);

    // tRNA_template(['U','U','G'], 0, false);

    setEventhandlers();

    ajustScreenHight();

    // getHeightOfDnaNucleotides();

    // brownianMotionInit();   // if (!detectmob()){ 


    // =============  TEST  ====================

    
    // var antiCodon = correctAntiCodon();
    // $('.codonAntiCodonWrap').eq(9).append(SimpleClone(tRNA_template(antiCodon, 0, true)));

    // $('.codonAntiCodonWrap').eq(6).append(SimpleClone(tRNA_template(['U','U','A'], 10, true)));
    // $('.codonAntiCodonWrap').eq(7).append(SimpleClone(tRNA_template(['C','A','C'], 11, true)));
    // $('.codonAntiCodonWrap').eq(8).append(SimpleClone(tRNA_template(['G','C','U'], 12, true)));
    

}



//=======================================================================================
//                  Run code
//=======================================================================================


$(window).on('resize', function() {
    ajustScreenHight();

    // getHeightOfDnaNucleotides();
});

$(document).ready(function() {

    main();
    
    // var msg = '<h3>Du har løst opgaven<span class="label label-success">korrekt!</span> </h3> Ønsker du at prøve igen? <br><br> Tryk "Ja" hvis du ønsker at prøve igen, ellers tryk "Nej" for at gå videre og se den afsluttede video.';
    // UserMsgBox_mod(msg, true, callbackIf_yes, callbackIf_no);
});

