// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function esconderflexInnerListProdutos(){
    let elementoLista = document.getElementById("flexInnerListProdutos");
    if (elementoLista.style.display == "none"){
        elementoLista.style.display = "flex";
        let elementoBotao = document.getElementById("botaoPaiProdutos");
        elementoBotao.textContent= "Produtos ᐁ";
    }else{
        elementoLista.style.display = "none";
        let elementoBotao = document.getElementById("botaoPaiProdutos");
        elementoBotao.textContent= "Produtos ᐅ";
    }
}

function esconderflexInnerListUsuarios(){
    let elementoLista = document.getElementById("flexInnerListUsuarios");
    if (elementoLista.style.display == "none"){
        elementoLista.style.display = "flex";
        let elementoBotao = document.getElementById("botaoPaiUsuarios");
        elementoBotao.textContent= "Usuários ᐁ";
    }else{
        elementoLista.style.display = "none";
        let elementoBotao = document.getElementById("botaoPaiUsuarios");
        elementoBotao.textContent= "Usuários ᐅ";
    }
}

function esconderflexInnerListRelatorios(){
    let elementoLista = document.getElementById("flexInnerListRelatorios");
    if (elementoLista.style.display == "none"){
        elementoLista.style.display = "flex";
        let elementoBotao = document.getElementById("botaoPaiRelatorios");
        elementoBotao.textContent= "Relatórios ᐁ";
    }else{
        elementoLista.style.display = "none";
        let elementoBotao = document.getElementById("botaoPaiRelatorios");
        elementoBotao.textContent = "Relatórios ᐅ";
    }
}

function atualizarCampos(){

    if(document.getElementById("opcoesCategoriaCadastro").value == "vazio"){
        document.getElementById("formProdutosCadastrar").style.visibility = "hidden";
        document.getElementById("formProdutosCadastrar").style.height = "0";
        document.getElementById("botaoCancelarCadastroProduto").style.display = "none";
    }else{
        document.getElementById("formProdutosCadastrar").style.visibility = "visible";
        document.getElementById("formProdutosCadastrar").style.height = "fit-content";
        document.getElementById("botaoCancelarCadastroProduto").style.display = "block";
    }

    if(document.getElementById("opcoesCategoriaCadastro").value == "vestuario"){

        document.getElementById("containerOpcoesCadastrar").style.display = "flex";
        document.getElementById("containerOpcoesCadastrar").setAttribute("class", "d-flex flex-column flex-justify-center flex-items-center");
       
        document.getElementById("tableCadastrarValidade").style.display = "none";
       
    }

    if(document.getElementById("opcoesCategoriaCadastro").value == "consumivel"){

        document.getElementById("tableCadastrarValidade").style.display = "table";

        document.getElementById("containerOpcoesCadastrar").removeAttribute("class");
        document.getElementById("containerOpcoesCadastrar").style.display = "none";

    }

    if(document.getElementById("opcoesCategoriaCadastro").value == "outros"){

        document.getElementById("containerOpcoesCadastrar").style.display = "flex";
        document.getElementById("containerOpcoesCadastrar").setAttribute("class", "d-flex flex-column flex-justify-center flex-items-center");

        document.getElementById("containerOpcoesCadastrar").style.display = "flex";
    
        document.getElementById("tableCadastrarValidade").style.display = "table";

    }

}

let contagemOpcoesProdutoCadastrar = 0;

function adicionarOpcaoProduto(){

    if(contagemOpcoesProdutoCadastrar == 0){

        let elementoBotao = document.createElement("button");

        elementoBotao.setAttribute("type", "button");
        elementoBotao.innerHTML="Salvar";
        elementoBotao.setAttribute("onClick", "salvarOpcoesCadastrar()");
        elementoBotao.setAttribute("class", "botaoPreto");

        elementoBotao.setAttribute("id", "botaoSalvarOpcoesCadastrar");

        elementoBotao.style.padding = "5px";
        elementoBotao.style.margin = "5px";

        let elementoContainer = document.getElementById("containerOpcoesCadastrar");
        elementoContainer.appendChild(elementoBotao);

    }

    let elementoInput = document.createElement("input");

    elementoInput.setAttribute("type", "text");
    elementoInput.setAttribute("class", "inputDiscreto");
    elementoInput.setAttribute("placeholder", "Digite o nome da opção");

    elementoInput.setAttribute("id", "opcaoProduto" + contagemOpcoesProdutoCadastrar);

    elementoInput.style.padding = "2px";
    elementoInput.style.margin = "5px";

    let elementoContainer = document.getElementById("containerOpcoesCadastrar");
    elementoContainer.insertBefore(elementoInput, document.getElementById("botaoSalvarOpcoesCadastrar"));

    contagemOpcoesProdutoCadastrar++;

}

let contagemSalvarOpcoesCampoResultado = 0;

function salvarOpcoesCadastrar(){

    if(contagemSalvarOpcoesCampoResultado == 0){

        let elementoResultado = document.createElement("input");

        elementoResultado.setAttribute("type", "text");
        elementoResultado.setAttribute("placeholder", "O resultado aparece aqui");
        elementoResultado.setAttribute("id", "resultadoOpcoesProdutoCadastrar");
        elementoResultado.setAttribute("name", "resultadoOpcoesProdutoCadastrar");

        elementoResultado.style.padding = "2px";
        elementoResultado.style.margin = "5px";
        elementoResultado.style.display = "none";

        let elementoContainer = document.getElementById("containerOpcoesCadastrar");
        elementoContainer.appendChild(elementoResultado);

        contagemSalvarOpcoesCampoResultado++;

    }

    document.getElementById("resultadoOpcoesProdutoCadastrar").value = ".";

    let elementoResultado = document.getElementById("resultadoOpcoesProdutoCadastrar");
    let contagemSalvarOpcoesCalculoResultado = 0;
    let contagemInternaOpcoesProduto = contagemOpcoesProdutoCadastrar;

    while(contagemSalvarOpcoesCalculoResultado < contagemOpcoesProdutoCadastrar){

        let textoResultadoOpcoes = document.getElementById("opcaoProduto"+(contagemInternaOpcoesProduto-1)).value;

        elementoResultado.value = elementoResultado.value + textoResultadoOpcoes + ".";

        contagemSalvarOpcoesCalculoResultado++;
        contagemInternaOpcoesProduto--;

    }

}