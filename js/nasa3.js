// This is to reload the page on the Stop button
function reload() {
    setTimeout(function() {
        window.location.reload(1);
    }, 500)
}

    // Global variables
    var theTime = new Date();
    var tempTime = new Date();
    var time_interval = 5000;
    var last_iteration = 0;
    var running = true;
    var index = 0;
    var timer;

    // Loading the data into our array
    var data = getData();

    // This is the main function
    function updateDisplay() {
        theTime = new Date();
        // Debugging
        console.log(
        "Display : " +
        (theTime.getHours() < 10 ? "0" + theTime.getHours() : theTime.getHours()) +
        ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) +
        ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds())
        );

        // Updating the document
        var timeRead = data[index].time_seconds;
        if (timeRead >= 10) {
            document.getElementById("data1").rows["seconds"].innerHTML = dataRow("Time elapsed", data[index].time_seconds, "sec");
            document.getElementById("data1").rows["latitude"].innerHTML = dataRow("Latitud", data[index].latitude, "°");
            document.getElementById("data1").rows["longitude"].innerHTML = dataRow("Longltude", data[index].longitude,"°");
            document.getElementById("data1").rows["gps_altitude"].innerHTML = dataRow("GPS Altitude", data[index].gps_altitude, "m");
            document.getElementById("data1").rows["bmpSensor_altitude"].innerHTML = dataRow("BMP Sensor Altitude", data[index].bmpSensor_altitude, "m");
            document.getElementById("data1").rows["bmpSensor_pressure"].innerHTML = dataRow("BMP Sensor Pressure", data[index].bmpSensor_pressure, "hPa");
            document.getElementById("data1").rows["bmpSensor_temp"].innerHTML = dataRow("BMP Sensor Temperature", data[index].bmpSensor_temp, "°");
            document.getElementById("data2").rows["digSensor_temp"].innerHTML = dataRow("Digital Sensor Temperature",data[index].digSensor_temp, "°");
            document.getElementById("data2").rows["cssSensor_temp"].innerHTML = dataRow("CSS Sensor Temperature", data[index].cssSensor_temp, "°");
            document.getElementById("data2").rows["cssSensor_eCO2"].innerHTML = dataRow("CSS Sensor eCO2", data[index].cssSensor_eCO2, "ppm");
            document.getElementById("data2").rows["cssSensor_TVOC"].innerHTML = dataRow("CSS Sensor TVOC", data[index].cssSensor_TVOC, "ppm");
            document.getElementById("data2").rows["UV"].innerHTML = dataRow("UV", data[index].UV, "mW/cm2");
            document.getElementById("data2").rows["accelX"].innerHTML = dataRow("Accel X", data[index].accelX, "m/s");
            document.getElementById("data2").rows["accelY"].innerHTML = dataRow("Accel Y", data[index].accelY, "m/s");
            document.getElementById("data3").rows["accelZ"].innerHTML = dataRow("Accel Z", data[index].accelZ, "m/s");
            document.getElementById("data3").rows["magneticX"].innerHTML = dataRow("Magnetic X", data[index].magneticX," ");
            document.getElementById("data3").rows["magneticY"].innerHTML = dataRow("Magnetic Y", data[index].magneticY," ");
            document.getElementById("data3").rows["magneticZ"].innerHTML = dataRow("Magnetic Z", data[index].magneticZ," ");
            document.getElementById("data3").rows["gyroX"].innerHTML = dataRow("Gyro X", data[index].gyroX, "°/s");
            document.getElementById("data3").rows["gyroY"].innerHTML = dataRow("Gyro Y", data[index].gyroY, "°/s");
            document.getElementById("data3").rows["gyroZ"].innerHTML = dataRow("Gyro Z", data[index].gyroZ, "°/s");

            if (index < 499) {
            index++;
            } else {
            index = 0;
            }
        }

        document.getElementById("time").innerHTML =
        (theTime.getHours() < 10 ? "0" + theTime.getHours() : theTime.getHours()) +
        ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) +
        ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());
    }

    // Stop the timer
    function stop() {
        clearInterval(timer);
        document.getElementById("startButton").disabled = false;
        document.getElementById("stopButton").disabled = true;
    }

    // Start the timer
    function start() {
        document.getElementById("data1").rows["seconds"].innerHTML = "Processing...";
        document.getElementById("data2").rows["digSensor_temp"].innerHTML = "Processing...";
        document.getElementById("data3").rows["accelZ"].innerHTML = "Processing...";
        index = 0;
        timer = setInterval(updateDisplay, time_interval);
        document.getElementById("startButton").disabled = true;
        document.getElementById("stopButton").disabled = false;
    }
