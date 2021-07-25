 window.onload=() =>{
      select1 = document.getElementById("select1")
      select2 = document.getElementById("select2")
      resultado = document.getElementById("resultado")
      addvalues()
    }
    function addvalues(){

        fetch("https://v6.exchangerate-api.com/v6/36661222e39d847792391c2d/codes")
        .then(response => response.json())
        .then(data=>{
            for (let i=0; data.supported_codes.length > i; i++){
            let option = document.createElement("option")
            option.value = data.supported_codes[i][0]
            option.innerHTML = data.supported_codes[i][1]
            select1.appendChild(option)
            select2.appendChild(option.cloneNode(true))
            }   
        })  
    }
    function transformacion(){
        if(select1.value != "Currency" && select2.value != "Currency"){
            fetch("https://v6.exchangerate-api.com/v6/36661222e39d847792391c2d/latest/" + select1.value)
            .then(response => response.json())
            .then(data=>{
                resultado.innerHTML = data.conversion_rates[select2.value]
            })
        } else{
           alert("Debe seleccionar una moneda en cada seccion")
        }
    }



/*     supported_codes */