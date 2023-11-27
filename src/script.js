const dateFinal= document.querySelector("#dateFinal") 
const result = document.querySelector("#result")
const inputInitial = document.querySelector("#inputInitial")
const labelInitial = document.querySelector("#labelInitial")
const inputFinal = document.querySelector("#inputFinal")
const labelFinal = document.querySelector("#labelFinal")
const btCalc = document.querySelector("#btCalc")

document.querySelector('form').addEventListener('submit', (event) => event.preventDefault())
btCalc.addEventListener("click",  Calc)


function Calc(){
    let dateI
    if(isNaN(dateI)){
         dateI = new Date()
    }else{ 
         dateI =  new Date(inputInitial.value) 
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
                    result.innerHTML = `${day}d / ${hr + 2}hr / ${minutes + 1}min`
                }else{
            result.innerHTML = "Invalid"
        }
    }   
    Update()
    setInterval(Calc, 10000)
}

