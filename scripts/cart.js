const  btnMostraCart = document.getElementById("mostra-cart")
const cart = document.getElementById("cart")

function mostrarCart(){
    if(cart.style.display === "flex"){
        cart.style.display = "none"
    }else{
        cart.style.display = "flex"
    }
}