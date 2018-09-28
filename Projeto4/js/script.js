
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
    $('[data-toggle="popover"]').popover();
});


// O parágrafo com os botões é inserido na div 'aqui'.

$("document").ready(function() {
    $("#aqui").append(
        "<p>" +
        "<button id='btn-1' type='button' class='btn btn-outline-primary btn-lg mr-3'>Botão Large</button>" +
        "<button id='btn-2' type='button' class='btn btn-outline-primary mr-3'>Botão Default</button>" +
        "<button id='btn-3' type='button' class='btn btn-outline-primary btn-sm mr-3'>Botão Small</button>" +
        "<button id='btn-4' type='button' class='btn btn-outline-primary btn-sm mr-3'>Botão Small</button>" +
        "<button id='btn-5' type='button' class='btn btn-outline-primary btn-sm mr-3'>Adicionar</button>" +
        "<button id='btn-6' type='button' class='btn btn-outline-primary btn-sm mr-3'>Rodar</button>" +
        "</p>"
    );
});

//
// Exercício 1
//
//
// $("document").ready(function() {
//
//     $("#btn-1").html('Envolver elementos h4 com um jumbotron');
//     $("#btn-2").html('Envolver todos as tabelas com uma div');
//     $("#btn-3").html('Limpar o conteúdo da segunda tabela');
//     $("#btn-4").html('Remover a primeira linha da primeira tabela (tab1)');
//     $("#btn-5").html('Substituir todos os TRs da primeira tabela');
//     $("#btn-6").html('Mudar emails de hotmail.com para gmail.com');
//
//     // Envolver elementos h4 com um jumbotron
//     $("#btn-1").click(function(evt) {
//         $("h4").wrap("<div class='jumbotron'>")
//     });
//
//     // Envolver todos as tabelas de uma só vez. Isto é, aqui temos apenas uma div
//     // envolvendo todas as tabelas html. Esta div deve definir uma borda na cor
//     // azul.
//     $("#btn-2").click(function(evt) {
//         $("table").wrapAll("<div style='border: 3px solid blue'>")
//     });
//
//     // Limpar o conteúdo da segunda tabela html.
//     $("#btn-3").click(function(evt) {
//         $("#tab2 tbody").empty()
//     });
//
//     // Remover a primeira linha da primeira tabela (tab1)
//     $("#btn-4").click(function(evt) {
//         $("#tab1 tbody tr:first").remove()
//     });
//
//     // Substituir todos os TRs da primeira tabela pelo TR abaixo:
//     // <tr><td colspan='6'>Linha substituído por este conteúdo</td></tr>
//     $("#btn-5").click(function(evt) {
//         $("#tab1 tbody tr").replaceWith("<tr><td colspan='6'>Linha substituído por este conteúdo</td></tr>")
//     });
//
//     // Para cada empregado que possui um e-mail do hotmail mudar o 'hotmail.com' para
//     // 'gmail.com'.
//     $("#btn-6").click(function(evt) {
//         $("#tab1 tbody td.email").replaceWith(function() {
//             let ind = $(this).text().indexOf("hotmail")
//             if (ind != -1) {
//                 $(this).text($(this).text().substring(0,ind) + "gmail.com")
//                 return this
//             }
//             else {
//                 return this
//             }
//         })
//     });
// });

//
// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 2
//
// $("document").ready(function() {
//
//     // http://api.jquery.com/category/attributes/
//     // - Há duas funções: attr() e removeAttr().
//     // A função attr() é usada para operar em atributos. Ela pode ser utilizada para recuperar o valor de um
//     // atributo ou para trocar seu valor.
//
//     $("#btn-1").html('Gerar Lista de Imagens');
//     $("#btn-2").addClass("d-none");
//     $("#btn-3").addClass("d-none");
//     $("#btn-4").addClass("d-none");
//     $("#btn-5").addClass("d-none");
//     $("#btn-6").addClass("d-none");
//
//
//     $("#btn-1").click(function(evt) {
//
//         // Após o elemento, cujo id é aqui, criar um elemento h3 contendo 'Lista de Imagens'. Após este
//         // elemento, criar um  elemento ul  com id='imagens'.  E para  cada  imagem  existente  nas duas
//         // tabelas, acrescentar dentro do elemento ul, um elemento li contendo o valor do atributo title
//         // da imagem.
//
//         $("#aqui").after("<h3>Lista de Imagens</h3><ul id='imagens'></ul>")
//         $("img").each(function() {
//             $("#imagens").append("<li>" + $(this).attr('title') + "</li>")
//         })
//     });
// });

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 3
//
// $("document").ready(function() {
//
//     $("#btn-1").html('Executar hide()');
//     $("#btn-2").html('Executar show()');
//     $("#btn-3").html('Executar toggle()');
//     $("#btn-4").addClass("d-none");
//     $("#btn-5").addClass("d-none");
//     $("#btn-6").addClass("d-none");
//
//     // Executar hide() na primeira tabela html
//     $("#btn-1").click(function(evt) {
//         // $("#tab1").addClass("d-none");          // Acrescenta d-none
//         $("#tab1").hide()                          // Acrescenta display: none
//     });
//
//     // Executar show() na primeira tabela html
//     $("#btn-2").click(function(evt) {
//         // $("#tab1").removeClass("d-none");       // Remove d-none
//         $("#tab1").show()                          // Remove display: none
//     });
//
//     // Executar toggle() na primeira tabela html
//     $("#btn-3").click(function(evt) {
//         // $("#tab1").toggleClass("d-none");       // Alterna d-none
//         $("#tab1").toggle()                        // Alterna display: none
//     });
// });

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 4
//
// Usado quando se deseja associar dados a um elemento de uma página.
//
// $("document").ready(function() {
//
//     $("#btn-1").html('Armazenar');
//     $("#btn-2").html('Exibir');
//     $("#btn-3").html('Remover');
//     $("#btn-4").addClass("d-none");
//     $("#btn-5").addClass("d-none");
//     $("#btn-6").hide();  // Não acrescenta a classe d-none. Acrescenta style="display: none"
//                          // O método show() não remove a classe d-none. Remove "display: none"
//
//     $("#emp2").data("data-nasc", "26/05/1990");
//
//     // Ao se clicar no botão btn-1 adicionar os seguintes dois pares de chave ao elemento emp1:
//     // - "data-nasc" / "12/08/1998"
//     // - "depto" / "Vendas"
//
//     // Adicionar os dois pares de chave/valor definidos acima.
//     $("#btn-1").click(function(evt) {
//         $("#emp1").data("data-nasc", "12/08/1990");
//         $("#emp1").data("depto", "Vendas");
//         // jQuery pode associar dados arbitrários a elementos da página.
//     });
//
//     // Ao se clicar no botão btn-2 recuperar e exibir na console os pares de chave armazenados em emp1.
//     // O atributo se chama data-data-nasc mas a parte real do nome do atributo é data-nasc.
//     $("#btn-2").click(function(evt) {
//         // .data() retorna { data-nasc: 12/08/1998, depto: Vendas }
//         console.log($("#emp1").data())
//         let obj = $("#emp1").data()
//         $.each(obj, function(chave, valor) {
//             console.log(chave, valor)
//         })
//     });
//
//     // Ao se clicar no botão btn-3 remover os dados armazenados no elemento cujo id é emp1.
//     $("#btn-3").click(function(evt) {
//         // $("#emp1").removeData("depto");
//         $("#emp1").removeData();
//     });
// });

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 5
//
// Aqui estamos acessando a jquery function, uma forma mais simples de declarar uma função
// que deve ser executada quando o evento ready ocorre. Basta passar uma função manipuladora
// diretamente para o jquery object.

// $(function() {
//     $("#btn-1").html('Adicionar um TR');
//     $("#btn-2").addClass("d-none");
//     $("#btn-3").addClass("d-none");
//     $("#btn-4").addClass("d-none");
//     $("#btn-5").addClass("d-none");
//     $("#btn-6").addClass("d-none");
//
//     // $("#tab1 tbody td.email").mouseover(function() {
//     //     highlight(this);
//     // });
//     // //
//     // $("#tab1 tbody td.email").mouseleave(function() {
//     //     highlight(this);
//     // });
//
//     // Como atachar e remover event handlers de elementos: através das funções on() e off()
//
//     // Vamos utilizar a função on() para atachar event listeners ao elementos td da tabela tab1 que
//     // possuem a classe email de tal forma que esse selector inclua linhas adicionadas à tabela tab1
//     // após a página ter sido carregada.
//
//     $("#tab1 tbody").on("mouseover mouseleave", "td.email", function() {
//         highlight(this)
//     })
//
//     // highlight é o nome de uma event handler function que teremos que escrever.
//     // Utilizando os métodos mouseover(), mouseleave(), etc.
//     // Definindo event listeners desta forma, não teremos como desligá-los.
//
//     let numero = 5;
//
//     // Inserir um novo empregado na tabela de Empregados Disponíveis
//     $("#btn-1").click(function () {
//         numero +=1;
//         let foto = "vinicius.png";
//         let nome = "Vinicius Aguiar Pereira"
//         let email = "viniciuspereira@gmail.com";
//         let faixaEtaria = "Até 30 Anos";
//         let sexo = "Masculino";
//         let salario = "9.800,00";
//
//         let linha = "<tr>" +
//                         "<td width='0%' class='d-none'>" + numero + "</td>" +
//                         "<td width='10%' class='text-center zoom'>" +
//                             "<img class='foto rounded-circle' src='images/pessoal/" + foto + "'>" +
//                         "</td>" +
//                         "<td width='25%' class='text-left'>" + nome + "</td>" +
//                         "<td width='25%' class='text-left email'>" + email + "</td>" +
//                         "<td width='15%' class='text-center'>" + faixaEtaria + "</td>" +
//                         "<td width='12%' class='text-center'>" + sexo + "</td>" +
//                         "<td width='13%' class='text-center'>" + salario + "</td>" +
//                     "</tr>";
//
//         $("#tab1 tbody").append(linha)
//         $("#tab1 tbody tr:hidden").fadeIn(1000)
//     });
// });
//
// // A função highlight deve efetuar alternância da classe highlight no elemento cujo id é tab1.
// // Caso a classe highlight tenha sido adicionada, devemos aumentar o font-size do td com a classe
// // email em 2pt e caso ela tenha sido removida, o font-size deve ser reduzido em 2pt.
//
// function highlight(elemento) {
//     $("#tab1").toggleClass("highlight");
//     if ($("#tab1").hasClass("highlight")) {
//         $(elemento).css("font-size", "+=2pt")
//                    .css("color", "red");
//     }
//     else {
//         $(elemento).css("font-size", "-=2pt")
//                    .css("color", "black");
//     }
// }

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 6
//
// $("document").ready(function() {
//
//     $("#btn-1").html('Adicionar um novo TR');
//     $("#btn-2").addClass("d-none");
//     $("#btn-3").addClass("d-none");
//     $("#btn-4").addClass("d-none");
//     $("#btn-5").addClass("d-none");
//     $("#btn-6").addClass("d-none");
//
//     // Definir um event listener para os TDs relativos aos emails.
//     // Ao clicar em um email a linha deve ser removida.
//     // $("#tab1 tbody td.email").click(function() {
//     //     $(this).parent().remove();
//     // })
//
//     let numero = 5;
//
//     // Inserir um novo empregado na tabela de Empregados Disponíveis
//     $("#btn-1").click(function () {
//         numero +=1;
//         let foto = "vinicius.png";
//         let nome = "Vinicius Aguiar Pereira"
//         let email = "viniciuspereira@gmail.com";
//         let faixaEtaria = "Até 30 Anos";
//         let sexo = "Masculino";
//         let salario = "9.800,00";
//
//         let linha = "<tr>" +
//                         "<td width='0%' class='d-none'>" + numero + "</td>" +
//                         "<td width='10%' class='text-center zoom'>" +
//                             "<img class='foto rounded-circle' src='images/pessoal/" + foto + "'>" +
//                         "</td>" +
//                         "<td width='25%' class='text-left'>" + nome + "</td>" +
//                         "<td width='25%' class='text-left email'>" + email + "</td>" +
//                         "<td width='15%' class='text-center'>" + faixaEtaria + "</td>" +
//                         "<td width='12%' class='text-center'>" + sexo + "</td>" +
//                         "<td width='13%' class='text-center'>" + salario + "</td>" +
//                     "</tr>";
//
//         $("#tab1 tbody").append(linha);
//     });
//
//     // Definir um event listener para os TDs relativos aos emails, incluindo
//     // os  emails  das linhas  inseridas após  a carga  inicial  da  página.
//     // Ao clicar no email do novo empregado a linha correspondente deve ser removida.
//     $("#tab1 tbody").on("click", "td.email", function() {
//         $(this).parent().remove();
//     })
//
// });
//
// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 7
//
// $(function() {
//     $("#btn-1").html('Inserir uma linha com FadeIn em 1s');
//     $("#btn-2").addClass("d-none");
//     $("#btn-3").addClass("d-none");
//     $("#btn-4").addClass("d-none");
//     $("#btn-5").addClass("d-none");
//     $("#btn-6").addClass("d-none");
//
//     let numero = 5;
//
//     // Inserir um novo empregado na tabela de Empregados Disponíveis
//     $("#btn-1").click(function () {
//         numero +=1;
//         let foto = "vinicius.png";
//         let nome = "Vinicius Aguiar Pereira"
//         let email = "viniciuspereira@gmail.com";
//         let faixaEtaria = "Até 30 Anos";
//         let sexo = "Masculino";
//         let salario = "9.800,00";
//
//         let linha = "<tr style='display: none'>" +
//                         "<td width='0%' class='d-none'>" + numero + "</td>" +
//                         "<td width='10%' class='text-center zoom'>" +
//                             "<img class='foto rounded-circle' src='images/pessoal/" + foto + "'>" +
//                         "</td>" +
//                         "<td width='25%' class='text-left'>" + nome + "</td>" +
//                         "<td width='25%' class='text-left email'>" + email + "</td>" +
//                         "<td width='15%' class='text-center'>" + faixaEtaria + "</td>" +
//                         "<td width='12%' class='text-center'>" + sexo + "</td>" +
//                         "<td width='13%' class='text-center'>" + salario + "</td>" +
//                     "</tr>";
//         $("#tab1 tbody").append(linha);
//         $("#tab1 tbody tr:hidden").fadeIn(1000)
//
//     });
//
//     // Definir um event listener para os TDs relativos aos emails, incluindo
//     // os emails  das  linhas  inseridas após  a carga  inicial  da  página.
//     // Ao clicar no email de uma nova linha, a linha deve ser removida.
//     $("#tab1 tbody").on("click", "td.email", function (evt) {
//         //$(this).parent().fadeOut(1000, finalizacao)  // Efetua o fadeOut para 0% ou 0.0
//         $(this).parent().fadeTo(1000, 0.3, finalizacao)  // Efetua o fadeOut para 0% ou 0.0
//     });
//
//     // fadeTo() na velocidade slow e até o nível de opacidade 0.3
//     // $("#tab1 tbody").on("click", "td.email", function (evt) {
//     //
//     // });
// });
// // Essa é a função que deve ser executada quando a animação termina.
// function finalizacao() {
//     // $("#tab1 tbody tr:hidden").remove()
//     $(this).remove()
// }
//
// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 8
//
// $(function() {
//     $("#btn-1").html('Inserir uma linha com SlideDown em 1s');
//     $("#btn-2").html('Efetua slideDown no btn-4')
//     $("#btn-3").html('Efetua slideUp no btn-4')
//     $("#btn-4").hide();
//     $("#btn-5").addClass("d-none");
//     $("#btn-6").addClass("d-none");
//
//     let numero = 5;
//
//     // Inserir um novo empregado na tabela de Empregados Disponíveis
//     $("#btn-1").click(function () {
//         numero +=1;
//         let foto = "vinicius.png";
//         let nome = "Vinicius Aguiar Pereira"
//         let email = "viniciuspereira@gmail.com";
//         let faixaEtaria = "Até 30 Anos";
//         let sexo = "Masculino";
//         let salario = "9.800,00";
//
//         let linha = "<tr style='display: none'>" +
//                         "<td width='0%' class='d-none'>" + numero + "</td>" +
//                         "<td width='10%' class='text-center zoom'>" +
//                             "<img class='foto rounded-circle' src='images/pessoal/" + foto + "'>" +
//                         "</td>" +
//                         "<td width='25%' class='text-left'>" + nome + "</td>" +
//                         "<td width='25%' class='text-left email'>" + email + "</td>" +
//                         "<td width='15%' class='text-center'>" + faixaEtaria + "</td>" +
//                         "<td width='12%' class='text-center'>" + sexo + "</td>" +
//                         "<td width='13%' class='text-center'>" + salario + "</td>" +
//                     "</tr>";
//
//         $("#tab1 tbody").append(linha);
//         $("#tab1 tbody tr:hidden").slideDown(2000);  // Sem animação seria show()
//     });
//
//     // Definir um event listener para os TDs relativos aos emails, incluindo
//     // os emails das linhas inseridas após a carga inicial da página.
//     // Ao clicar no novo parágrafo ele deve ser removido
//     // $("#tab1 tbody").on("click", "td.email", function (evt) {
//     //     $(this).parent().fadeOut(1000);  // Efetua o fadeOut para 0% ou 0.0
//     //     // $(this).parent().fadeOut(1000, finalizacao);
//     // });
//
//     // slideUp na velocidade slow
//     $("#tab1 tbody").on("click", "td.email", function (evt) {
//         $(this).parent().slideUp("slow", finalizacao);
//     });
//
//     $("#btn-2").click(function () {
//         $("#btn-4").slideDown(2000)
//     });
//     $("#btn-3").click(function () {
//         $("#btn-4").slideUp(2000)
//     });
// });
// // Essa é a função que deve ser executada quando a animação termina.
// function finalizacao() {
//     $(this).remove();
// }
//
// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 9
//
// $("document").ready(function() {
//     $("#btn-1").html('Recuperar informação através de requisição ajax');
//     $("#btn-2").addClass("d-none");
//     $("#btn-3").addClass("d-none");
//     $("#btn-4").addClass("d-none");
//     $("#btn-5").addClass("d-none");
//     $("#btn-6").addClass("d-none");
//
//     // Efetuar uma requisição ajax solicitando o conteúdo do arquivo denominado arquivo.txt e armazenar o
//     // conteúdo deste arquivo, retornado pela requisição ajax, dentro do elemento cujo id é conteudo.
//     $("#btn-1").click(function() {
//         recuperarInformacao();
//     });
// });
//
// function recuperarInformacao() {
//     // A função ajax do jQuery recebe como parâmetro um objeto com um conjunto de propriedades:
//     // - o url desejado (no nosso caso, apenas arquivo.txt pois este arquivo encontra-se na mesma pasta do servidor
//     //   onde se encontra a página index.html),
//     // - o tipo do método utilizado para enviar a requisição http,
//     // - o tipo de informação que esperamos receber de volta. No nosso caso, 'text' que é o conteúdo do arquivo
//     //   arquivo.txt,
//     // - o nome da função callback que deve ser executada quando a requisição é bem sucedida (sucesso),
//     // - o nome da função callback que deve ser executada quando a requisição falha (erro)
//     // - e a função que é executada quando a requisição é completada (com sucesso ou não). Essa função
//     //   anônima recebe dois parâmetros: xhr e status. Nenhum dos dois serão utilizados.
//
//     $.ajax({
//         // O URL para a requisição
//         url: "arquivo.html",
//
//         // o tipo da requisição
//         type: "get",
//
//         // o tipo de dado que esperamos receber de volta
//         dataType : "text",
//
//         // a funcão a ser chamada no caso de sucesso
//         success: sucesso,
//
//         // a funcão a ser chamada no caso de falha
//         error: erro,
//
//         // o código a ser executado independentemente de sucesso ou falha. Essa função é executada sempre!
//         complete: function( xhr, status ) {
//             console.log("A requisição foi concluída!");
//         }
//     });
// }
// // No caso de sucesso nós localizamos o parágrafo cujo id é conteudo e colocamos o resultado da busca
// // dentro desta div. O resultado recebido por essa função é o conteúdo do arquivo arquivo.txt que é
// // recuperado através da requisição ajax.
//
// function sucesso(resultado) {
//     $("#tab1 tbody").append(resultado);
//     $("#tab1 tbody tr:hidden").fadeIn(1000);
// }
//
// function erro(xhr, status, strErr) {
//     console.log("Ocorreu um erro!");
//     console.log("xhr = ", xhr);
//     console.log("status = ", status);
//     console.log("strErr = ", strErr);
// }

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 10
//
// Agora vamos ver alguns outros métodos do jquery:
//
// - get() - recupera dados do servidor através de uma requisição HTTP do tipo GET.
// - post() - recupera dados do servidor através de uma requisição HTTP do tipo POST.
// - getJSON() - recupera dados (JSON-encoded) do servidor através de uma requisição HTTP do tipo GET.
// - getScript() - recupera um arquivo javascript do servidor e o executa.
// - load() - recupera conteúdo do servidor e o coloca dentro de uma página.

// Esses métodos permitem a execução de diversas tarefas através de um código bastante simplificado.

// $("document").ready(function() {
//     $("#btn-1").html('Recuperar informação através de requisição ajax');
//     $("#btn-2").addClass("d-none");
//     $("#btn-3").addClass("d-none");
//     $("#btn-4").addClass("d-none");
//     $("#btn-5").addClass("d-none");
//     $("#btn-6").addClass("d-none");
//
//     $("#btn-1").click(function() {
//         // Efetuar uma requisição ajax solicitando o conteúdo do arquivo denominado
//         // arquivo.txt  e  armazenar  o  conteúdo  deste  arquivo,  retornado  pela
//         // requisição ajax, dentro do elemento cujo id é conteudo.
//         recuperarInformacao();
//     });
// });
//
// function recuperarInformacao() {
//
//     // A função get é chamada em cima do jquery object da mesma forma que a função
//     // ajax de mais baixo nível. Passamos no URL o dado que desejamos recuperar (e
//     // como  arquivo.txt  encontra-se  na  mesma  pasta  desta  página  html,  não
//     // precisamos passar nenhuma outra informação)  e em seguida  vem a função  de
//     // sucesso.
//
//     // Recuperar  dados  através de  uma  requisição  do  tipo  GET para o arquivo
//     // denominado arquivo.txt e definir uma função callback denominada sucesso que
//     // será executada no caso de sucesso da requisição ajax.
//
//     $.get("arquivo.html", sucesso);
// }
//
// // O parâmetro recebido  pela função de sucesso é o dado recuperado do servidor (o
// // conteúdo do  arquivo  denominado  arquivo.txt).  Na função  sucesso() deve  ser
// // utilizado um selector  do jquery  para  localizar  o  local  onde  o  resultado
// // retornado deve ser carregado, isto é, dentro do elemento tbody da tabela tab1.
//
// function sucesso(resultado) {
//     $("#tab1 tbody").append(resultado);
//     $("#tab1 tbody tr:hidden").fadeIn(1000);
// }
//
//
// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 11
//
// $("document").ready(function() {
//     $("#btn-1").html('Recuperar informação através de requisição ajax');
//     $("#btn-2").addClass("d-none");
//     $("#btn-3").addClass("d-none");
//     $("#btn-4").addClass("d-none");
//     $("#btn-5").addClass("d-none");
//     $("#btn-6").addClass("d-none");
//
//     $("#btn-1").click(function() {
//         getJSONData();
//     });
// });
//
// // A função abaixo emite uma requisição do  tipo get para  recuperar o conteúdo
// // do arquivo denominado arquivo.json. E a função callback anônima é executada
// // quando a requisição é concluída.
// //
// // A variável resultado irá conter o conteúdo do arquivo denominado arquivo.json.
// //
// // Esse é o conteúdo do arquivo denominado arquivo.json:
// //
// // "info":
// // {   "numero": "6",
// //     "foto": "vinicius.png",
// //     "nome": "Vinicius Aguiar Pereira",
// //     "email": "viniciuspereira@gmail.com",
// //     "faixaEtaria": "Até 30 Anos",
// //     "sexo": "Masculino",
// //     "salario": "9.999,00"
// // }
// //
//
// function getJSONData() {
//
//     $.get("arquivo.json", function(resultado) {
//         var obj = jQuery.parseJSON(JSON.stringify(resultado));
//
//         let linha =
//             "<tr style='display: none'>" +
//                 "<td width='0%' class='d-none'>" + obj.info.numero + "</td>" +
//                 "<td width='10%' class='text-center zoom'>" +
//                     "<img class='foto rounded-circle' src='images/pessoal/" + obj.info.foto + "'>" +
//                 "</td>" +
//                 "<td width='25%' class='text-left'>" + obj.info.nome + "</td>" +
//                 "<td width='25%' class='text-left email'>" + obj.info.email + "</td>" +
//                 "<td width='15%' class='text-center'>" + obj.info.faixaEtaria + "</td>" +
//                 "<td width='12%' class='text-center'>" + obj.info.sexo + "</td>" +
//                 "<td width='13%' class='text-center'>" + obj.info.salario + "</td>" +
//             "</tr>";
//
//         $("#tab1 tbody").append(linha);
//         $("#tab1 tbody tr:hidden").fadeIn(1000)
//     });
// }
