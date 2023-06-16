// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function esconderflexInnerListProdutos(){
    let elemento = document.getElementById("flexInnerListProdutos");
    if (elemento.style.display == "none"){
        elemento.style.display = "flex";
        let elemento2 = document.getElementById("botaoPaiProdutos");
        elemento2.textContent= "Produtos ᐁ";
    }else{
        elemento.style.display = "none";
        let elemento2 = document.getElementById("botaoPaiProdutos");
        elemento2.textContent= "Produtos ᐅ";
    }
}

function esconderflexInnerListUsuarios(){
    let elemento = document.getElementById("flexInnerListUsuarios");
    if (elemento.style.display == "none"){
        elemento.style.display = "flex";
        let elemento2 = document.getElementById("botaoPaiUsuarios");
        elemento2.textContent= "Usuários ᐁ";
    }else{
        elemento.style.display = "none";
        let elemento2 = document.getElementById("botaoPaiUsuarios");
        elemento2.textContent= "Usuários ᐅ";
    }
}

function esconderflexInnerListRelatorios(){
    let elemento = document.getElementById("flexInnerListRelatorios");
    if (elemento.style.display == "none"){
        elemento.style.display = "flex";
        let elemento2 = document.getElementById("botaoPaiRelatorios");
        elemento2.textContent= "Relatórios ᐁ";
    }else{
        elemento.style.display = "none";
        let elemento2 = document.getElementById("botaoPaiRelatorios");
        elemento2.textContent = "Relatórios ᐅ";
    }
}