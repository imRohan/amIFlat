// Acceleration
var ax = 0;
var ay = 0;
var az = 0;



if (window.DeviceMotionEvent == undefined) {
    document.getElementById("no").style.display = "block";
    document.getElementById("yes").style.display = "none";
} else {
    window.ondevicemotion = function (event) {
        ax = Math.round(Math.abs(event.accelerationIncludingGravity.x * 1));
        ay = Math.round(Math.abs(event.accelerationIncludingGravity.y * 1));
        az = Math.round(Math.abs(event.accelerationIncludingGravity.z * 1));
        ai = Math.round(event.interval * 100) / 100;

        if (ax !== 0 | ay !== 0) {

            document.getElementById("leveled").style.display = "none";
            document.getElementById("notLeveled").style.display = "block";
            document.body.style.background = "#e74c3c";
            
        } else {
            document.getElementById("notLeveled").style.display = "none";
            document.getElementById("leveled").style.display = "block";
            document.body.style.background = "#2ecc71";
            
            
        }

    }

    setInterval(function () {
        document.getElementById("xlabel").innerHTML = "X: " + ax;
        document.getElementById("ylabel").innerHTML = "Y: " + ay;
        document.getElementById("zlabel").innerHTML = "Z: " + az;

    }, delay);
}