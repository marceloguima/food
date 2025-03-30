const btnMostraCart = document.getElementById("mostra-cart");
const divCart = document.querySelector(".cart");
const ulcart = document.getElementById("cart-lista");
const Total = document.getElementById("total");
const QuantidadeCart = document.getElementById("quantidade");

let itensCart = [];

function mostrarCart() {
    if (divCart.style.display === "flex") {
        divCart.style.display = "none";
    } else {
        divCart.style.display = "flex";
    }
}

function adicionarNoCarrinho(codigo, nome, preco, imagem) {
    let itemExiste = itensCart.find((item) => item.codigo === codigo);

    if (itemExiste) {
        itemExiste.quantidade++;
    } else {
        itensCart.push({
            codigo: codigo,
            nome: nome,
            preco: preco,
            quantidade: 1,
            imagem: imagem,
        });
    }

    atualizarCart();
}

function atualizarCart() {
    ulcart.innerHTML = "";
    spanTotal = document.getElementById("total");
    let total = 0;
    let quantidadeTotal = 0;

    itensCart.forEach((item) => {
        let itensCarrinho = document.createElement("li");
        itensCarrinho.classList.add("item");
        itensCarrinho.innerHTML = `<img src="${item.imagem}" alt="${
            item.nome
        }" />
                           <p>${item.nome}</p>
                              <div class="caixa-botao">
                            <button onclick="aumentarQuantidade('${
                                item.codigo
                            }')"><i class="fa-solid fa-plus"></i></button>
                               <p><span id="quant-do-item">${
                                   item.quantidade
                               }</span></p>
                            <button onclick="diminuirQuantidade('${
                                item.codigo
                            }')"><i class="fa-solid fa-minus"></i></button>
                             </div>
                            <p>R$ <span>${(
                                item.preco * item.quantidade
                            ).toFixed(2)}</span></p>`;

        ulcart.append(itensCarrinho);
        total += item.preco * item.quantidade;
        quantidadeTotal += item.quantidade;
    });

    spanTotal.textContent = `${total.toFixed(2)}`;
    QuantidadeCart.textContent = quantidadeTotal;
}

function aumentarQuantidade(codigo) {
    let item = itensCart.find((item) => item.codigo === codigo);
    if (item) {
        item.quantidade++;
        atualizarCart();
    }
}

function diminuirQuantidade(codigo) {
    let item = itensCart.find((item) => item.codigo === codigo);
    if (item && item.quantidade > 1) {
        item.quantidade--;
        atualizarCart();
    }
}
