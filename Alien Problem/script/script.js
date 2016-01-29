var button = $('#submit').on('click', function() {
    var noOfAliens = $('#num').val();
    console.log(noOfAliens);
    var display;
    for (var i = 1; i <= noOfAliens; i++) {
        display = "<label>Point" + i + ": </label><input type='number' placeholder='X co-ordinate' id='x" + i + "' max='1'><input type='text' placeholder='Y co-ordinate' id='y" + i + "'maxLength='1'><br/>";
        $('.wrap').append(display);
        if (i == noOfAliens) {
            var butt = "<button id='calc'>Calculate</button>";
            $('.wrap').append(butt);
        }
    }
    var coOrdinate = [];
    var calculate = $('#calc').on('click', function() {
        for (var i = 1; i <= noOfAliens; i++) {
            coOrdinate.push([Number($('#x' + i).val()), Number($('#y' + i).val())]);
        }

        var x_coOrdinate = [];
        var y_coOrdinate = [];

        for (var i = 0; i < coOrdinate.length; i++) {
            x_coOrdinate[i] = coOrdinate[i][0];
            // console.log(x_coOrdinate[i]);
            y_coOrdinate[i] = coOrdinate[i][1];
            // console.log(y_coOrdinate[i]);
        }

        var max = 0;
        var result = 0;

        for (var i = x_coOrdinate.length - 1; i >= 0; --i) {
            if (x_coOrdinate[i] > max)
                max = x_coOrdinate[i];

            var tmpResult = max - x_coOrdinate[i];
            if (tmpResult > result)
                result = tmpResult;
        }

        var maxy = 0;
        var resulty = 0;

        for (var i = y_coOrdinate.length - 1; i >= 0; --i) {
            if (y_coOrdinate[i] > maxy)
                maxy = y_coOrdinate[i];

            var tmpResulty = maxy - y_coOrdinate[i];
            if (tmpResulty > resulty)
                resulty = tmpResulty;
        }

        var radius, midPoint;
        var deployPointX = [];
        var deployPointY = [];

        deployX(result);
        deployY(resulty);
        var maxDiff;
        if (result >= resulty) {
            radius = result / 2;
        } else {
            radius = resulty / 2;
        }

        if (radius % 1 != 1) {
            radius = Math.ceil(radius);
            radius += 1;
            console.log("radius = " + radius);
        } else {
            console.log("radius = " + radius);
        }

        function deployX(maxDiff) {
            midPoint = maxDiff / 2;
            if (midPoint % 1 == 1) {
                deployPointX[0] = (midPoint);
                console.log("X : " + deployPointX[0]);
            } else {
                deployPointX[0] = Math.floor(midPoint);
                deployPointX[1] = Math.ceil(midPoint);
                console.log("X : " + deployPointX[0]);
                console.log("X : " + deployPointX[1]);
            }
        }

        function deployY(maxDiff) {
            midPoint = maxDiff / 2;
            if (midPoint % 1 == 1) {
                deployPointY[0] = (midPoint);
                console.log("Y : " + deployPointY[0]);
            } else {
                deployPointY[0] = Math.floor(midPoint);
                deployPointY[1] = Math.ceil(midPoint);
                console.log("Y : " + deployPointY[0]);
                console.log("Y : " + deployPointY[1]);
            }
        }
        var res = "<h3>Result<h3><p>Radius : " + radius + "</p> ";
        $('.result').append(res);

        var minX = Math.min.apply(null, x_coOrdinate);
        console.log(minX);
        var minY = Math.min.apply(null, y_coOrdinate);
        console.log(minY);
        var points = [];

        var x1 = minX + deployPointX[0];
        var y1 = minY + deployPointY[0];
        var x2 = minX + deployPointX[1];
        var y2 = minY + deployPointY[1];
        // console.log(points);
        if (x1 != x2 && y1 != y2) {
            points.push([x1, y1]);
            points.push([x1, y2]);
            points.push([x2, y1]);
            points.push([x2, y2]);
        } else if (x1 == x2 && y1 != y2) {
            points.push([x1, y1]);
            points.push([x1, y2]);
        } else if (x1 != x2 && y1 == y2) {
            points.push([x1, y1]);
            points.push([x2, y1]);
        } else {
            points.push([x1, y1]);
        }
        var deployPoints = "<p>";
        for (var i = 0; i < points.length; i++) {
            var deployPoints = "<p>Point : " + points[i];
            $('.result').append(deployPoints);
        }
    })

});
