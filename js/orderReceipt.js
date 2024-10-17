document.addEventListener("DOMContentLoaded",()=>{
    const tbody = document.querySelector("#tbody");
    const subtotal = document.querySelector("#sub-total");
    const deliveryfee = document.querySelector("#delivery-fee");
    const taxtotal = document.querySelector("#tax-total");
    const overaltotal = document.querySelector("#overal-total");
        $.ajax({
           url:"../php/insertData.php",
           method:"POST",
           data:{getReceipt:true},
           success:function(data){
            let jsondata = JSON.parse(data);
             //get cart
              let cartData = jsondata['cartData'].map((cart)=>{
                return `
                       <tr>
                          <td><img src="../${cart.image}" width="50px" height="50px"/></td>
                          <td>${cart.description}</td>
                          <td>${cart.qnty}</td>
                          <td>${cart. price}</td>
                          <td>${cart.TotalPrice}</td>
                       </tr>
                `;

              }).join(" ");
               console.log(jsondata);
             //get sums otherData
             tbody.innerHTML = cartData;
             deliveryfee.innerHTML = jsondata['otherData'].delivery_fee;
             taxtotal.innerHTML=jsondata['otherData'].tax;
             subtotal.innerHTML =jsondata['otherData'].total_price;
             overaltotal.innerHTML = jsondata['otherData'].overal_total;
             
           }
       });
     
});
/*
<tr>
<td>image</td>
<td>vanila</td>
<td>10</td>
<td>20</td>
<td>200</td>
</tr>*/