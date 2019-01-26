var showindex = '1';
$( document ).ready(function() {
    var parser = document.createElement('a');
    parser.href = location.href;
    var ori = parser.hash;
    if(ori.includes("#tab")){
        var idx = ori.substr(4);
        if(((idx - '1') <= 4) && ((idx - '1') >= 0)){
            //console.log(idx - '1');
            show(idx);
        }
    }
    else{
        //console.log( "Nothing" );
        show('1');
    }
}); 

$('input[id^="tab"]').click(function(event) {
    var ori = event.target.id;
    var idx = ori.substr(3);
    //console.log(idx);
    show(idx);
});

function show(index){
    var newtabid = "#tab" + index;
    var oldtabid = "#tab" + showindex;
    //console.log(oldtabid);
    //console.log(newtabid);
    //console.log(oldtabid + " + label");
    $(oldtabid + " + label").removeClass("mylabel");
    $(oldtabid + " + label .fas").removeClass("myfas");
    $("#content" + showindex).removeClass("mycontent");
    $(newtabid + "+ label").addClass("mylabel");
    $(newtabid + "+ label .fas").addClass("myfas");
    $("#content"+index).addClass("mycontent");
    showindex = index;
}
