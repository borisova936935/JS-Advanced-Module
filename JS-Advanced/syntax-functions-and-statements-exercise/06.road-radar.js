function roadRadar(speed, area) {
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;
    let status = "";

    if (area === "motorway") {
        if (speed <= motorwayLimit) {
            console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
        }
        if (speed > motorwayLimit && speed <= motorwayLimit + 20) {
            status = "speeding";
            let difference = Math.abs(motorwayLimit - speed);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
        } else if (speed > motorwayLimit && speed <= motorwayLimit + 40) {
            status = "excessive speeding";
            let difference = Math.abs(motorwayLimit - speed);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);

        } else if (speed > motorwayLimit + 40) {
            status = "reckless driving";
            let difference = Math.abs(motorwayLimit - speed);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
        }

    } else if (area === "interstate") {
        if (speed <= interstateLimit) {
            console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
        }
        if (speed > interstateLimit && speed <= interstateLimit + 20) {
            status = "speeding";
            let difference = Math.abs(interstateLimit - speed);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
        } else if (speed > interstateLimit && speed <= interstateLimit + 40) {
            status = "excessive speeding";
            let difference = Math.abs(interstateLimit - speed);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);

        } else if (speed > interstateLimit + 40) {
            status = "reckless driving";
            let difference = Math.abs(interstateLimit - speed);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
        }

    } else if (area === "city") {
        if (speed <= cityLimit) {
            console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
        }
        if (speed > cityLimit && speed <= cityLimit + 20) {
            status = "speeding";
            let difference = Math.abs(cityLimit - speed);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
        } else if (speed > cityLimit && speed <= cityLimit + 40) {
            status = "excessive speeding";
            let difference = Math.abs(cityLimit - speed);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`);

        } else if (speed > cityLimit + 40) {
            status = "reckless driving";
            let difference = Math.abs(cityLimit - speed);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
        }

    } else if (area === "residential") {
        if (speed <= residentialLimit) {
            console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
        }
        if (speed > residentialLimit && speed <= residentialLimit + 20) {
            status = "speeding";
            let difference = Math.abs(residentialLimit - speed);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
        } else if (speed > residentialLimit && speed <= residentialLimit + 40) {
            status = "excessive speeding";
            let difference = Math.abs(residentialLimit - speed);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);

        } else if (speed > residentialLimit + 40) {
            status = "reckless driving";
            let difference = Math.abs(residentialLimit - speed);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
        }
    }
}
roadRadar(40, 'city')

roadRadar(21, 'residential')

roadRadar(120, 'interstate')

roadRadar(200, 'motorway')
