const  btnMostraCart = document.getElementById("mostra-cart")
const cart = document.getElementById("cart")

function mostrarCart(){
    if(cart.style.display === "block"){
        cart.style.display = "none"
    }else{
        cart.style.display = "block"
    }
}