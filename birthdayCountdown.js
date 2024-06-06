//set current year
let currentYear = new Date().getFullYear();

// Set the date we're counting down to
let birthday = new Date("Dec 9, " + currentYear + " 00:00:00").getTime();

function countdown(){
    //today's date
    let now = new Date().getTime();

    let distance = birthday - now;

    //if today is birthday say "it's my birthday!", else display countdown to next birthday
    if(distance < 0){
      let date = new Date().getDate();
      if(date == 9){
        document.getElementById("countdown").innerHTML = "It's my birthday!";
      }
      //after birthday but before the end of the year
      else{
        //set birthday to next year
        birthday = new Date("Dec 9, " + (currentYear + 1) + " 00:00:00").getTime();
        //set distance to birthday next year
        distance = birthday - now;
        // calculate days to next year's birthday using distance
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerHTML = "It is <br>" + days + " days<br> until my birthday";
      }
    }
    else{
      // calculate days to birthday using distance
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));

      document.getElementById("countdown").innerHTML = "It is <br>" + days + " days<br> until my birthday";
    }
}

countdown();