const dateFinal= document.querySelector("#dateFinal") 
const result = document.querySelector("#result")
const inputInitial = document.querySelector("#inputInitial")
const labelInitial = document.querySelector("#labelInitial")
const inputFinal = document.querySelector("#inputFinal")
const labelFinal = document.querySelector("#labelFinal")
const calendar = document.querySelector("#calendar")
const btCalc = document.querySelector("#btCalc")

document.querySelector('form').addEventListener('submit', (event) => event.preventDefault())
document.querySelector('#btInitial').addEventListener('click', () =>{

    document.querySelector("#initialAlert").classList.toggle('hidden')
    setTimeout( () =>   document.querySelector("#initialAlert").classList.toggle('hidden'), 2000)
})


function Calc(){
    let dateI = new Date(inputInitial.value)
 
    if(isNaN(dateI)){
         dateI = new Date()
         
    } 
    let dateF = new Date(inputFinal.value)
    dateFinal.innerHTML = `${dateF.getUTCDate()}/${dateF.getUTCMonth() + 1}/${dateF.getUTCFullYear()} `

    function Update() {  
                dateI = dateI.getTime()
                dateF = dateF.getTime()
                const diference = dateF - dateI
                
                if(diference > 0){
                    const day = parseInt(diference / (1000 * 3600 * 24))
                    const hr = parseInt(diference % (1000 * 3600 * 24) / (1000 * 3600) )
                    const minutes = parseInt((diference % (1000 * 3600 )) / (1000 * 60 ));
                    result.innerHTML = `${day}d / ${hr + 3}hr / ${minutes + 1}min`
                }else{
                     result.innerHTML = "Invalid"
                }
    }   
    Update()
    setInterval(Update, 10000)
    highlightDate(dateI)
}



function Calendario(year, month){
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const firstDay = new Date(year, month, 1 )
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate()
    document.querySelector("#dateCalendar").innerHTML = `${months[month]} - ${year}`
    const headerHTML = `
    <div class="grid grid-cols-7 gap-2 bg-gray-200 px-2">
      ${daysOfWeek.map(day => `<div class="weekday">${day}</div>`).join('')}
    </div>
    <div class="grid grid-cols-7 gap-2">
  `;

  let calendarHTML = headerHTML;

  for (let i = 0; i < firstDay.getDay(); i++) {
    calendarHTML += `<div></div>`;
  }


  for (let day = 1; day <= totalDays; day++) {
    calendarHTML += `<div class="day">${day}</div>`;
  }

  const lastDayOfWeek = lastDay.getDay();
  const remainingDays = (7 - lastDayOfWeek - 1 + 7) % 7; 
  for (let i = 0; i < remainingDays; i++) {
    calendarHTML += `<div></div>`;
  }

  calendarHTML += `</div>`;
  calendar.innerHTML = calendarHTML;
}

function previousMonth() {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    Calendario(year, month);
}
  
function nextMonth() {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    Calendario(year, month);
}

function highlightDate(dataI, dataF) {
    const selectedDate = new Date(dataI);
    const selectedDay = (selectedDate.getDate() +1);
    const selectedMonth = selectedDate.getMonth();
    const selectedYear = selectedDate.getFullYear();
  
    currentMonth = selectedMonth;
    currentYear = selectedYear;

    Calendario(currentYear, currentMonth);
  
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
      if (parseInt(day.innerText) === selectedDay && currentMonth === selectedMonth && currentYear === selectedYear) {
        day.classList.add('text-purple-500');
      } else {
        day.classList.remove('text-purple-500');
      }
    // const days = document.querySelectorAll('.day');
    // days.forEach(day => {
    //   if (parseInt(day.innerText) === selectedDay && currentMonth === selectedMonth && currentYear === selectedYear) {
    //     day.classList.add('text-purple-500');
    //   } else {
    //     day.classList.remove('text-purple-500');
    //   }
    // const days = document.querySelectorAll('.day');
    // days.forEach(day => {
    //   if (parseInt(day.innerText) === selectedDay && currentMonth === selectedMonth && currentYear === selectedYear) {
    //     day.classList.add('text-purple-500');
    //   } else {
    //     day.classList.remove('text-purple-500');
    //   }
    });
  }



