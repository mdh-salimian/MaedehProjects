const nodes=document.querySelectorAll('.form-control');
const btn=document.querySelector('#sum');
const MassegePlace = document.querySelector("#MassegePlace");
let html = '';

btn.addEventListener('click', () => {
    if(nodes[0].value.length == 0 || nodes[1].value.length == 0){
     //   html +=  `<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center" style="min-height: 200px;">
      //  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
     //     <div class="toast-header">            
      //      <strong class="mr-auto">Warning!</strong>
      //      <small id="currentTime"></small>
      //      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      //        <span aria-hidden="true">&times;</span>
     //       </button>
       //   </div>
      //    <div class="toast-body">
     //       <p id="Massege">Please enter number in both inputs.</p>
      //    </div>
     //   </div>
     // </div>
      //<script>
     //     var today = new Date();
      //    var time = today.getHours() + ":" + today.getMinutes() ;
      //    document.getElementById("currentTime").value = time;
     // </script>`;
     // MassegePlace.innerHTML = html;


        alert("Please enter number in both inputs.");
    } else {
      //  html +=  `<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center" style="min-height: 200px;">
      //  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      //    <div class="toast-header">          
        //    <strong class="mr-auto">Warning!</strong>
        //    <small id="currentTime"></small>
       //     <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
       //       <span aria-hidden="true">&times;</span>
        //    </button>
        //  </div>
        //  <div class="toast-body">
         //   <p id="Massege">Your result is: ${parseInt(nodes[0].value)+parseInt(nodes[1].value)}</p>
      //    </div>
      //  </div>
     // </div>
     // <script>
        //  var today = new Date();
       //   var time = today.getHours() + ":" + today.getMinutes() ;
      //    document.getElementById("currentTime").value = time;
     // </script>`;
     // MassegePlace.innerHTML = html;
    

        alert(parseInt(nodes[0].value)+parseInt(nodes[1].value));  
        nodes[0].value = nodes[1].value = {};
    }

    //MassegePlace.innerHTML = html;
})

