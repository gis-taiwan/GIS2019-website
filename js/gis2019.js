jQuery(document).ready(function($) {
    /* academic structure*/

    function connect() {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = $(".structure").width();
        canvas.height = $(".structure").height();
        //console.log(canvas.width,canvas.width);
        ctx.lineWidth = 2;

        var $canvas = $("#canvas");
        var canvasOffset = $canvas.offset();
        var offsetX = canvasOffset.left;
        var offsetY = canvasOffset.top;
        //console.log(offsetX,offsetY);


        var l11 = $("#l11");
        var l21 = $("#l21");
        var l22 = $("#l22");
        var l23 = $("#l23");
        var l24 = $("#l24");
        var l31 = $("#l31");
        var l32 = $("#l32");
        var l33 = $("#l33");
        var l34 = $("#l34");

        var connectors = [];
        connectors.push({
            from: l11,
            to: l21
        });
        connectors.push({
            from: l11,
            to: l22 
        });
        connectors.push({
            from: l11,
            to: l23
        });
        connectors.push({
            from: l11,
            to: l24
        });
        connectors.push({
            from: l21,
            to: l31
        });
        connectors.push({
            from: l22,
            to: l32 
        });
        connectors.push({
            from: l23,
            to: l33
        });
        connectors.push({
            from: l24,
            to: l34
        });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < connectors.length; i++) {
            var c = connectors[i];
            var eFrom = c.from;
            var eTo = c.to;
            var pos1 = eFrom.offset();
            //console.log(pos1);
            var pos2 = eTo.offset();
            ctx.beginPath();
            //console.log(pos1.left + eFrom.width() / 2 - offsetX, pos1.top + eFrom.height() - offsetY);
            ctx.moveTo(pos1.left + eFrom.innerWidth() / 2  - offsetX, pos1.top + eFrom.innerHeight() - offsetY);
            ctx.lineTo(pos2.left + eTo.innerWidth() / 2  - offsetX, pos2.top - offsetY);
            ctx.strokeStyle = "rgba(88,88,88,0.3)";
            ctx.stroke();

        }
        ctx.beginPath();
    }       
    connect();
    $(window).resize(function(){
        connect();
    });


});

