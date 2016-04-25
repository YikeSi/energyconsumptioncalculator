var data = [];
var Pos = [];
//var mouseWasDragged = false;
var valueN = "rgb(96,125,139)";
var valueP = 'rgb(96,125,139)';
var valueC = 'rgb(96,125,139)';
var valueW = 'rgb(96,125,139)';

function preload() {
    table = loadTable('textile industrial data/table-cauculator.csv', 'csv', 'header');
    fontLight = loadFont("font/Roboto-Light.ttf");
    fontMedium = loadFont("font/Roboto-Regular.ttf")
    fontThin = loadFont("font/Roboto-Thin.ttf")
};

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    frameRate(30);

    table.getRows().forEach(function (rows) {
        var textile = rows.getString("Fibre");
        var energy = int(rows.getString("Energy use in MJ per kg of fibre"));
        var water = int(rows.getString("Water requirement per kg of fibre"));
        var cauculator = new Cauculator(textile, energy, water);
        data.push(cauculator);
    })

    var MyPos = new Rectagular();
    Pos.push(MyPos);
    Pos.forEach(function (rr) {
        rr.sq1();
        rr.sq2();
        rr.sq3();
        rr.sq4();
    })
    console.log(MyPos);
    console.log(data);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

var Rectagular = function () {
    this.nylon = [];
    this.polyester = [];
    this.cotton = [];
    this.wool = [];
    var borderX0 = width / 21;
    var borderX1 = width * (6 / 21);
    var borderX2 = width * (11 / 21);
    var borderX3 = width * (16 / 21);
    var borderY0 = height / 20;
    var borderY1 = height * (3 / 4);

    this.sq1 = function () {
        var x1 = borderX0;
        var y1 = borderY0;

        for (var i = 0; i < 169; i++) {
            var myRects1 = createVector(x1, y1)
            x1 = x1 + 20;
            if (x1 >= width * (5 / 21)) {
                x1 = borderX0;
                y1 = y1 + 20;
            }
            this.nylon.push(myRects1);
        }
    }

    this.sq2 = function () {
        var x2 = borderX1;
        var y2 = borderY0;

        for (var j = 0; j < 169; j++) {
            var myRects2 = createVector(x2, y2);
            x2 = x2 + 20;
            if (x2 >= width * (10 / 21)) {
                x2 = borderX1;
                y2 = y2 + 20;;
            }
            this.polyester.push(myRects2);
        }
    }

    this.sq3 = function () {
        var x3 = borderX2;
        var y3 = borderY0;

        for (var h = 0; h < 169; h++) {
            var myRects3 = createVector(x3, y3);
            x3 = x3 + 20;
            if (x3 >= width * (15 / 21)) {
                x3 = borderX2;
                y3 = y3 + 20;
            }
            this.cotton.push(myRects3);
        }
    }

    this.sq4 = function () {
        var x4 = borderX3;
        var y4 = borderY0;

        for (var k = 0; k < 169; k++) {
            var myRects4 = createVector(x4, y4);
            x4 = x4 + 20;
            if (x4 >= width * (24 / 25)) {
                x4 = borderX3;
                y4 = y4 + 20;
            }
            this.wool.push(myRects4);
        }
    }

    this.draw = function () {
        fill("rgb(96,125,139)")
        if (mouseX > width / 21 && mouseX < width * (5.5 / 21) && mouseY < height/20 + 260) {
            var xx1 = pmouseX;
            var yy1 = pmouseY;
            var xx2 = width * (5 / 21) + pmouseX;
            var yy2 = pmouseY;
            var xx3 = width * (10 / 21) + pmouseX;
            var yy3 = pmouseY;
            var xx4 = width * (15 / 21) + pmouseX;
            var yy4 = pmouseY;
            noStroke();
            fill('rgb(158, 158, 158)');
            textFont(fontMedium);
            textSize(100);
            var number = Math.round(((mouseX - borderX0 + 19) / 20) * ((mouseY - borderY0 + 19) / 20));
            text(number, width / 25, height * (6 / 20));
            text(number, width * (7 / 25), height * (6 / 20));
            text(number, width * (13 / 25), height * (6 / 20));
            text(number, width * (19 / 25), height * (6 / 20));
            textSize(20);
            text("Energy: " + number * data[1].energy + "MJ", width * (1 / 21), height * (14 / 25));
            text("Water: " + number * data[1].water + "KG", width * (1 / 21), height * (16 / 25));
            text("Energy: " + number * data[4].energy + "MJ", width * (6 / 21), height * (14 / 25));
            text("Water: " + number * data[4].water + "KG", width * (6 / 21), height * (16 / 25));
            text("Energy: " + number * data[5].energy + "MJ", width * (11 / 21), height * (14 / 25));
            text("Water: " + number * data[5].water + "KG", width * (11 / 21), height * (16 / 25));
            text("Energy: " + number * data[6].energy + "MJ", width * (16 / 21), height * (14 / 25));
            text("Water: " + number * data[6].water + "KG", width * (16 / 21), height * (16 / 25));

        } else if (mouseX > width * (5.5 / 21) && mouseX < width * (10.5 / 21) && mouseY < height/20 + 260) {
            var xx1 = pmouseX - width * (5 / 21);
            var yy1 = pmouseY;
            var xx2 = pmouseX;
            var yy2 = pmouseY;
            var xx3 = width * (5 / 21) + pmouseX;
            var yy3 = pmouseY;
            var xx4 = width * (10 / 21) + pmouseX;
            var yy4 = pmouseY;
            noStroke();
            fill('rgb(158, 158, 158)');
            textFont(fontMedium);
            textSize(100);
            var number = Math.round(((mouseX - borderX1 + 19) / 20) * ((mouseY - borderY0 + 19) / 20));
            text(number, width / 25, height * (6 / 20));
            text(number, width * (7 / 25), height * (6 / 20));
            text(number, width * (13 / 25), height * (6 / 20));
            text(number, width * (19 / 25), height * (6 / 20));
            textSize(20);
            text("Energy: " + number * data[1].energy + "MJ", width * (1 / 21), height * (14 / 25));
            text("Water: " + number * data[1].water + "KG", width * (1 / 21), height * (16 / 25));
            text("Energy: " + number * data[4].energy + "MJ", width * (6 / 21), height * (14 / 25));
            text("Water: " + number * data[4].water + "KG", width * (6 / 21), height * (16 / 25));
            text("Energy: " + number * data[5].energy + "MJ", width * (11 / 21), height * (14 / 25));
            text("Water: " + number * data[5].water + "KG", width * (11 / 21), height * (16 / 25));
            text("Energy: " + number * data[6].energy + "MJ", width * (16 / 21), height * (14 / 25));
            text("Water: " + number * data[6].water + "KG", width * (16 / 21), height * (16 / 25));

        }else if (mouseX > width * (10.5/21) && mouseX < width * (15.5/21) && mouseY < height/20 + 260) {
            var xx1 = pmouseX - width * (10 / 21);
            var yy1 = pmouseY;
            var xx2 = pmouseX - width * (5/21);
            var yy2 = pmouseY;
            var xx3 = pmouseX;
            var yy3 = pmouseY;
            var xx4 = width * (5 / 21) + pmouseX;
            var yy4 = pmouseY;
            noStroke();
            fill('rgb(158, 158, 158)');
            textFont(fontMedium);
            textSize(100);
            var number = Math.round(((mouseX - borderX2 + 19) / 20) * ((mouseY - borderY0 + 19) / 20));
            text(number, width / 25, height * (6 / 20));
            text(number, width * (7 / 25), height * (6 / 20));
            text(number, width * (13 / 25), height * (6 / 20));
            text(number, width * (19 / 25), height * (6 / 20));
            textSize(20);
            text("Energy: " + number * data[1].energy + "MJ", width * (1 / 21), height * (14 / 25));
            text("Water: " + number * data[1].water + "KG", width * (1 / 21), height * (16 / 25));
            text("Energy: " + number * data[4].energy + "MJ", width * (6 / 21), height * (14 / 25));
            text("Water: " + number * data[4].water + "KG", width * (6 / 21), height * (16 / 25));
            text("Energy: " + number * data[5].energy + "MJ", width * (11 / 21), height * (14 / 25));
            text("Water: " + number * data[5].water + "KG", width * (11 / 21), height * (16 / 25));
            text("Energy: " + number * data[6].energy + "MJ", width * (16 / 21), height * (14 / 25));
            text("Water: " + number * data[6].water + "KG", width * (16 / 21), height * (16 / 25));
            print('5th'+ number);

        }else if (mouseX > width * (15.5/21) && mouseX < width * (20.5/21) && mouseY < height/20 + 260) {
            var xx1 = pmouseX - width * (15 / 21);
            var yy1 = pmouseY;
            var xx2 = pmouseX - width * (10/21);
            var yy2 = pmouseY;
            var xx3 = pmouseX - width * (5/21);
            var yy3 = pmouseY;
            var xx4 = pmouseX;
            var yy4 = pmouseY;
            noStroke();
            fill('rgb(158, 158, 158)');
            textFont(fontMedium);
            textSize(100);
            var number = Math.round(((mouseX - borderX3 + 19) / 20) * ((mouseY - borderY0 + 19) / 20));
            text(number, width / 25, height * (6 / 20));
            text(number, width * (7 / 25), height * (6 / 20));
            text(number, width * (13 / 25), height * (6 / 20));
            text(number, width * (19 / 25), height * (6 / 20));
            textSize(20);
            text("Energy: " + number * data[1].energy + "MJ", width * (1 / 21), height * (14 / 25));
            text("Water: " + number * data[1].water + "KG", width * (1 / 21), height * (16 / 25));
            text("Energy: " + number * data[4].energy + "MJ", width * (6 / 21), height * (14 / 25));
            text("Water: " + number * data[4].water + "KG", width * (6 / 21), height * (16 / 25));
            text("Energy: " + number * data[5].energy + "MJ", width * (11 / 21), height * (14 / 25));
            text("Water: " + number * data[5].water + "KG", width * (11 / 21), height * (16 / 25));
            text("Energy: " + number * data[6].energy + "MJ", width * (16 / 21), height * (14 / 25));
            text("Water: " + number * data[6].water + "KG", width * (16 / 21), height * (16 / 25));
            print('4th' + number);
        }
        fill('rgb(224, 224, 224)');
        text("KG", width * (1 / 24), height * (1 / 30));
        stroke('rgb(224, 224, 224)');
        this.nylon.forEach(function (n) {
            if (xx1 >= n.x && yy1 >= n.y) {
                valueN = "rgb(191, 99, 12)";
                var energyMap = map(data[1].energy * number, 0, 112047, 0, 300);
                var waterMap = map(data[1].water * number, 0, 112047, 0, 300);
                fill("rgb(191, 99, 12)");
                rect(borderX0, height / 2, energyMap, width / 80);
                rect(borderX0, height / 2 + 50, waterMap, width / 80);
            } else {
                valueN = 'rgb(96,125,139)';
            }
            fill(valueN);
            ellipse(n.x, n.y, width / 100, width / 100);
        })

        this.polyester.forEach(function (p) {
            if (xx2 >= p.x && yy2 >= p.y) {
                valueP = "rgb(179, 0, 0)";
                var energyMap = map(data[4].energy * number, 0, 112047, 0, 300);
                var waterMap = map(data[4].water * number, 0, 112047, 0, 300);
                fill("rgb(179, 0, 0)");
                rect(borderX1, height / 2, energyMap, width / 80);
                rect(borderX1, height / 2 + 50, waterMap, width / 80);
            } else {
                valueP = 'rgb(96,125,139)';
            }
            fill(valueP);
            ellipse(p.x, p.y, width / 100, width / 100);
        })

        this.cotton.forEach(function (c) {
            if (xx3 >= c.x && yy3 >= c.y) {
                valueC = "rgb(27, 94, 32)";
                var energyMap = map(data[5].energy * number, 0, 112047, 0, 300);
                var waterMap = map(data[5].water * number, 0, 112047, 0, 300);
                fill("rgb(27, 94, 32)");
                rect(borderX2, height / 2, energyMap, width / 80);
                rect(borderX2, height / 2 + 60, waterMap, width / 80);
            } else {
                valueC = 'rgb(96,125,139)';
            }
            fill(valueC);
            ellipse(c.x, c.y, width / 100, width / 100);
        })

        this.wool.forEach(function (w) {
            if (xx4 >= w.x && yy4 >= w.y) {
                valueW = "rgb(121,134,203)";
                var energyMap = map(data[6].energy * number, 0, 112047, 0, 300);
                var waterMap = map(data[6].water * number, 0, 112047, 0, 300);
                fill("rgb(121,134,203)");
                rect(borderX3, height / 2, energyMap, width / 80);
                rect(borderX3, height / 2 + 60, waterMap, width / 80);
            } else {
                valueW = 'rgb(96,125,139)';
            }
            fill(valueW);
            ellipse(w.x, w.y, width / 100, width / 100);
        })
    }

}

var Cauculator = function (textile, energy, water) {
    this.textile = textile;
    this.energy = energy;
    this.water = water;
}

function draw() {

    background("rgb(96,125,139)");

    Pos.forEach(function (rr) {
        rr.draw();
    })

}