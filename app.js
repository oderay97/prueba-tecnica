var datos=JSON.stringify();

let url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'
    fetch(url)
    .then(response=> response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))
    const mostrarData = (data) => {
      datos = data;
      console.log(datos)
        let body = ''
        for (let i = 0; i <data.length; i++){
            body += `<tr><td>${data[i].first}</td><td>${data[i].last}</td><td hidden>${data[i].address}</td><td hidden>${data[i].created}</td><td>${data[i].balance}</td><td><input type="checkbox" /> <div class="container"><div class="row"><div class="col"><button  style="background-color: blue; border-radius: 5px;" class=" w100 mb-4 anti" onclick="antiguedad()" data-bs-toggle="modal" data-bs-target="#Antigue-Modal" >Antigüedad </button> 
            <div class="col"><button class=" w100 mb-4 anti" style="background-color: green; border-radius: 5px" onclick="detalle()" data-bs-toggle="modal" data-bs-target="#detalle-Modal" >Ver Detalle </button>
            </div>
            </div>
            </div></td></tr>`
             document.getElementById('data').innerHTML = body
             
        }
       
    }

const btn = document.querySelector("button");

btn.addEventListener("click", function(){

    fetch(url)
           .then(res => res.json())
           .then(data => mostrarData(data))
           const mostrarData = (data) => {
            console.log(data)
            let body = ''
            for (let i = 0; i < data.length; i++){
                    let currentNumber = data[i].balance.replace(/[$,]/g, "");
                    if(currentNumber > 5000){
                      var created= data[i].created;
                      //calcular años
                      var fechaCreated = new Date(created);
                      var fechaHoy = new Date();
                      var edad = fechaHoy.getFullYear() - fechaCreated.getFullYear();
                        body +=`
                        
                        <tr><td>${data[i].first}</td>
                        <td>${data[i].last}</td>
                        <td hidden>${data[i].address}</td>
                        <td hidden>${data[i].created}</td>
                        <td>${data[i].balance}</td>
                        <td><input type="checkbox" />
                        <div class="container"><div class="row"><div class="col"><button  style="background-color: blue; border-radius: 5px;" class=" w100 mb-4 anti" onclick="antiguedad()" data-bs-toggle="modal" data-bs-target="#Antigue-Modal" >Antigüedad </button> 
                        <div class="col"><button class=" w100 mb-4 anti" style="background-color: green; border-radius: 5px" onclick="detalle()" data-bs-toggle="modal" data-bs-target="#detalle-Modal" >Ver Detalle </button>
                        </div>
                        </div>
                        </div>
                        </td>
                        </tr>
                        `
                        document.getElementById('data').innerHTML = body;                     

                    }
                                     
            }

           }
});


 function antiguedad() {
  tab = document.getElementById('data');
  
  console.log(datos)
  for (i=tab.getElementsByTagName('input').length-1; i>=0; i--) {
      
    chk = tab.getElementsByTagName('input')[i];
           if (chk.checked){
              var row2 = tab.getElementsByTagName('tr')[i].innerText;
              //console.log(i);
             

              if (row2!=undefined) {
                  
                   var created = tab.getElementsByTagName('tr')[i].cells[3].innerText;
                //calcular años
                var fechaCreated = new Date(created);
                var fechaHoy = new Date();
                var edad = fechaHoy.getFullYear() - fechaCreated.getFullYear();  
                //console.log(edad+' años');
                 
                var myEdad = document.getElementById("idantigue");
                    myEdad.value = edad+' '+'años'; 

              }
                        
           }
                    

  }
};

function detalle() {
  tab = document.getElementById('data');
  let body = ''
  for (i=tab.getElementsByTagName('input').length-1; i>=0; i--) {
     
    chk = tab.getElementsByTagName('input')[i];
           if (chk.checked){
              var row2 = tab.getElementsByTagName('tr')[i].innerText;
              console.log(i);
              

              if (row2!=undefined) {
                   
                   var nombre = tab.getElementsByTagName('tr')[i].cells[0].innerText;
                   var apellido = tab.getElementsByTagName('tr')[i].cells[1].innerText;
                   var address = tab.getElementsByTagName('tr')[i].cells[2].innerText;
                   var created = tab.getElementsByTagName('tr')[i].cells[3].innerText;
                   var balance = tab.getElementsByTagName('tr')[i].cells[4].innerText;

                   console.log(nombre)
                   console.log(apellido)
                   console.log(address)
                   console.log(created)
                   console.log(balance)

                //calcular años
                var fechaCreated = new Date(created);
                var fechaHoy = new Date();
                var edad = fechaHoy.getFullYear() - fechaCreated.getFullYear();  
                console.log(edad+' años');
                //$('#anti').modal('show');
                var myDireccion = document.getElementById("iddir");
                    myDireccion.value = address; 

                var myFecha = document.getElementById("idfecha");
                myFecha.value = created;  

                var myBalance = document.getElementById("idbalance");
                myBalance.value = balance;
                let currentNumber = balance.replace(/[$,]/g, "");
                if(currentNumber > 1500) {
                  $(myBalance).css("background-color", "green");
                  $(myBalance).css("color", "white");
                  $(myBalance).css("font-weight: bold");
                }
                else{
                  $(myBalance).css("background-color", "blue");
                  $(myBalance).css("color", "white");
                  $(myBalance).css("font-weight: bold");
                }                              

              }
                        
           }
                    

  }
};

