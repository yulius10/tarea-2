var ball = new Image,
    shadow = new Image,
    shading = new Image;
window.onload = function() {
    var c = document.getElementsByTagName('canvas')[0];
    var w = c.width = 200;
    var h = c.height = 100;
    var ctx = c.getContext('2d');
    var dx = 5,
        dy = -2;
    var x = 50,
        y = 50,
        a = 0;
    var deg2rad = Math.PI / 180;
    var da = 10 * deg2rad;

    var bw = ball.width / 2;
    var bh = ball.height / 2;

    setInterval(function() {
        ctx.clearRect(0, 0, w, h);

        ctx.translate(x, y);
        ctx.drawImage(shadow, -bw + 10, -bh + 10);
        //ctx.rotate(a);
        ctx.drawImage(ball, -bw, -bh);
        //ctx.rotate(-a);                      // The shading shouldn't be rotated
        ctx.drawImage(shading, -bw, -bh);
        ctx.translate(-x, -y);

        x += dx;
        a += da;
        y += dy;

        if ((x - bw < 0) || (x + bw > w)) {
            dx *= -1;
            da *= -1;
        }

        if ((y - bh < 0) || (y + bh > h)) {
            dy *= -1;
            da *= -1;
        }

    }, 30);
}
ball.src = 'images/images.png';