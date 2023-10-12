function countdown() {
    let now = new Date();

    let currentYear = now.getFullYear();
    let currentDate = now.getDate();
    let currentMonth = now.getMonth();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();

    let targetYear = 2024
    let targetMonth = 4;
    let targetDate = 20;
    let targetHour = 16;
    let targetMinute = 60;
    let targetSecond = 60;
    
    let countYear = 0;
    let countMonth = 0;
    let countDate = 0;
    let countHour = 0;
    let countMinute = 0;
    let countSecond = 0;

    let passed = 0;

    //countdown day
    let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    countMonth = targetMonth - (currentMonth+1);
    countYear = targetYear - currentYear;
    if (countMonth == 0) {
        countDate = targetDate - currentDate
    }
    else if (countMonth < 0) {
         if (countYear > 0) {
            let temp = monthDay[currentMonth] - currentDate;
            for(let i=currentMonth+1; i<12; i++) {
                temp += monthDay[i];
            }
            
            for(let j=0; j<targetMonth; j++) {
                temp += monthDay[j];
            }

            countDate = temp;
         }
         else {
            countDate = 0;
            passed = 1;
         }
    }
    else {
        let temp = monthDay[currentMonth] - currentDate;
        if (countMonth > 1) {
            for(let i=currentMonth+1; i <targetMonth-1; i++){
                temp += monthDay[i];
            }
        }        
        temp += targetDate;

        countDate = temp;
    }


    if (passed == 1) {
        countHour = 0;
        countMinute = 0;
        countSecond = 0;
    }
    else {
        //countdown hour
        countHour = targetHour - currentHour - 1;
        if(countHour < 0) {
            countHour = 24 + (targetHour - currentHour - 1);
        }

        //countdown minute
        countMinute = targetMinute - currentMinute;

        //countdown second
        countSecond = targetSecond - currentSecond;

        document.querySelector(".num-day").innerText = countDate;
        document.querySelector(".num-hour").innerText = countHour;
        document.querySelector(".num-minute").innerText = countMinute;
        document.querySelector(".num-second").innerText = countSecond;
    }
    
    /*
    if(countDate <= 0) {
        document.querySelector(".num-day").innerText = 0;
        document.querySelector(".num-hour").innerText = 0;
        document.querySelector(".num-minute").innerText = 0;
        document.querySelector(".num-second").innerText = 0;
    }
    */
}

countdown()
setInterval(countdown, 1000);

//call menu
document.querySelector("#call").addEventListener("click", function() {
    let menu = document.querySelector("#call-menu");
    
    menu.style.bottom = "0px"
})

document.querySelector("#close-call").addEventListener("click", function() {
    let menu = document.querySelector("#call-menu");
    
    menu.style.bottom = "-300px"
})

//location menu
document.querySelector("#location").addEventListener("click", function() {
    let menu = document.querySelector("#location-menu");
    
    menu.style.bottom = "0px"
})

document.querySelector("#close-location").addEventListener("click", function() {
    let menu = document.querySelector("#location-menu");
    
    menu.style.bottom = "-300px"
})
