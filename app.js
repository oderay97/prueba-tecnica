let url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'
    fetch(url)
    .then(response=> response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))
    const mostrarData = (data) => {
        console.log(data)
        let body = ''
        for (let i = 0; i <data.length; i++){
            body += `<tr><td>${data[i].first}</td><td>${data[i].last}</td><td>${data[i].email}</td><td>${data[i].balance}<td><button style="color:red" click="showmodal();">
            Ver antigüedad
            </button> <button  style="color:red" click="showmodal();">
            Ver detalles
            </button></td></tr>`
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
                        body +=`
                        <tr></tr><td>${data[i].first}</td>
                        <td>${data[i].last}</td>
                        <td>${data[i].email}</td>
                        <td>${currentNumber}</td>
                        <td><button  style="color:red" click="showmodal();">
                        Ver antigüedad
                        </button> <button  style="color:red" click="showmodal();">
                        Ver detalles
                        </button></td>
                        </tr>
                        `
                        document.getElementById('data').innerHTML = body
                    }
                                     
            }

           }
});

const modal = document.querySelector("button");

modal.addEventListener("click", function(){
         
  fetch(url)
           .then(res => res.json())
           .then(data => mostrarData(data))
           const mostrarData = (data) => {
var modalwrap = null;
const showmodal = () => {
  if(modalwrap !== null){
    modalwrap.remove();
  }
    modalwrap = document.createElementById('div');
 modalwrap.innerHTML = `
  <div class="modal" tabindex="-1">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h5 class="modal-title">Modal title</h5>
       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div class="modal-body">
       <p>Modal body text goes here.</p>
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       <button type="button" class="btn btn-primary">Save changes</button>
     </div>
   </div>
 </div>
</div> `;
}  
document.body.append(modalwrap);
var modal = new bootstrap.modal(modalwrap.querySelector('.modal'));
modal.showmodal();
}
})