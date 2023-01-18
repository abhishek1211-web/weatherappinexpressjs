const submitbtn = document.getElementById('submitbtn');
const temp_status = document.getElementById('temp_status');
const tempval = document.getElementById('tempval');
const cityname = document.getElementById('cityname');
const today_day = document.getElementById('today_day');
const today_date = document.getElementById('today_date');
const datahide = document.querySelector('.middle_layer');

const getinfo = async(event)=>{
    event.preventDefault();
   
    let cityval = cityname.value;
    if(cityval === ""){
        country.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid=35834226cf612076e62d6f0ec2d6f7f5`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            country.innerText = `${arrdata[0].name} ${arrdata[0].sys.country}`;
            tempval.innerText = arrdata[0].main.temp;
            
            
            const tempMod = arrdata[0].weather[0].main;
            if(tempMod=="Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>";
            }else if(tempMod=="Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#dfe4ea'></i>";
            }else if(tempMod=="Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
            }else if(tempMod=="Haze"){
                temp_status.innerHTML = "<i class='fas fa-smog' style='color:#a4b0be'></i>";
            }else if(tempMod=="Sunny"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#a4b0be'></i>";
            }else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#dfe4ea'></i>";
            }

            var weekday = new Array(7);
            weekday[0] = "Sun";
            weekday[1] = "Mon";
            weekday[2] = "Tue";
            weekday[3] = "Wed";
            weekday[4] = "Thu";
            weekday[5] = "Fri";
            weekday[6] = "Sat";

            let curTime = new Date();
            var n = weekday[curTime.getDay()];

            today_day.innerText = n;
            

            var months = ["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"];
            var dateObj = new Date();
            var month = months[dateObj.getUTCMonth()]; //months from 1-12
            var date = dateObj.getUTCDate();

            let hours = dateObj.getHours();
            let mins = dateObj.getMinutes();
            let periods = "AM"

            if(hours >11){
                periods = "PM";
                if(hours >12) hours -=12;
            }

            if(mins <10){
                mins= "0" + mins;
            }
            
            today_date.innerText =  `${month} ${date} | ${hours}:${mins}${periods}`;

            datahide.classList.remove('data_hide');
        }catch{
            country.innerText = `Plz write the city name properly`;
            datahide.classList.add('data_hide');
        }
        
    }
}

submitbtn.addEventListener('click',getinfo);
