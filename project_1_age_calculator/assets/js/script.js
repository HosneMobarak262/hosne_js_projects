

function calculateAge(e){
    document.getElementById("nameOutput").innerHTML = "Name: ";
    document.getElementById("ageOutput").innerHTML = "Age: ";

    const d = new Date();

    let currentDateFormatted = "";
    let currentMonth = d.getMonth();
    const currentDay = d.getDate();

    currentMonth = parseInt(currentMonth);
    ++ currentMonth;

    if(currentMonth < 10){
        currentDateFormatted += "0" + currentMonth;
    } else {
        currentDateFormatted += "" + currentMonth;
    }

    if(parseInt(currentDay) < 10) {
        currentDateFormatted += "-0" + currentDay;
    } else {
        currentDateFormatted += "-" + currentDay;
    }

    currentDateFormatted += "-" + d.getFullYear();

    const name = document.getElementById("name").value;
    const dob  = document.getElementById("dob").value;

    console.log("dob: " + dob == "");

    // name output
    if (name != null){
        document.getElementById("nameOutput").innerHTML += name;
    }

    // age calculation
    if (dob != null) {
        const dobArray = dob.split("-");

        dobArray.push(dobArray.shift());

        let dobFormatted = dobArray.join("-");

        //new date instance
        const dt_date1 = new Date(currentDateFormatted);
        const dt_date2 = new Date(dobFormatted);

        //Get the Timestamp
        const date1_time_stamp = dt_date1.getTime();
        const date2_time_stamp = dt_date2.getTime();

        let calc;

        //Check which timestamp is greater
        if (date1_time_stamp > date2_time_stamp) {
            calc = new Date(date1_time_stamp - date2_time_stamp);
        } else {
            calc = new Date(date2_time_stamp - date1_time_stamp);
        }
        let year    = Math.floor(calc / 1000 / 3600 / 24 / 30 / 12);
        let month   = Math.floor(calc / 1000 / 3600 / 24 / 30) % 12;
        let day     = Math.floor(calc / 1000 / 3600 / 24) % 30 ;

        const calcFormat = ( isNaN(year) ? 0 : year ) + " Year " + ( isNaN(month) ? 0 : month ) + " Month " + ( isNaN(day) ? 0 : day ) + " Day";

        // output age
        document.getElementById("ageOutput").innerHTML += calcFormat;

    }
}

function reset(){
    document.getElementById("name").value = null;
    document.getElementById("dob").value = null;

    document.getElementById("nameOutput").innerHTML = "Name: ";
    document.getElementById("ageOutput").innerHTML = "Age: ";
}