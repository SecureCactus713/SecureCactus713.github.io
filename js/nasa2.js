// I repurposed my count down code and worked in audio files playing due to given parameters. I was also able to work some basic counter functions and imputs to simulate incoming data readings triggered at a certain time 
function theLaunch() {
    var currTime=25
    var audio1 = document.getElementById("liftoff")
    var audio2 = document.getElementById("rocket")
    var audio3 = document.getElementById("count")
    var sec = 0;
    var meter = 0
    for (var i=1; i<=27; i++) {
        if (i == 27) {
            setTimeout(function() {
                document.getElementById("countDown").innerHTML= "<span style='color:white;'>Blastoff!!!</span>"; audio1.play(); audio2.play();
                document.getElementById("latitude").innerHTML= "33.448376°";
                document.getElementById("longitude").innerHTML= "-112.074036°";
                function pad (val) { return val > 9 ? val : "0" + val; }
                    setInterval( function(){
                        document.getElementById("seconds").innerHTML=pad(++sec%60) + " sec";
                    }, 1000);
                function pad (val) { return val > 9 ? val : "0" + val; }
                    setInterval( function(){
                        document.getElementById("gps_altitude").innerHTML=pad(++meter) + " m";
                }, 100);
            }, 1000 * i);
        }
        else if (i > 15) {
            setTimeout(function() {
                document.getElementById("countDown").innerHTML= "<span style='color:rgb(175, 0, 0);'>WARNING</span>" + " - Launch imminent, time remaining is " + currTime; audio3.play();
                currTime = currTime - 1;
            }, 1000 * i);
        }
        else {
            setTimeout(function() {
                document.getElementById("countDown").innerHTML= "Time remaining is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}
// This is the code for my Arm button disabling after being clicked and enabling the Abort button
function arm() {
    document.getElementById("launchButton").disabled = true;
    document.getElementById("abortButton").disabled = false;
}
// This is the code for my Abort button disabling after being clicked and enabling the Arm button
function abort() {
    document.getElementById("launchButton").disabled = false;
    document.getElementById("abortButton").disabled = true;
}
// This is a secondary function for the Abort button to reload the page to simulate resetting the launch on a delayed timer
function reload() {
    setTimeout(function() {
        window.location.reload(1);
    }, 1000)
}
// This is a secondary function for the Arm button that will play an audio file when the button is pushed
function playControl() {
    var audio = document.getElementById("control");
    audio.play();
}

alert("\nAccess Granted, Welcome to UAT Space Program\n\n" + "Please play the audio marked 'Immersion' before arming the launch.")