const prompt = require('prompt-sync')({sigint:true});



/* Criar um sistema de delivery de um supermercado. Sabemos que hoje em dia é bastante comum o
uso de deliverys para comodidade do usuário. Nesse trabalho você será responsável por criar um
sistema em JS (com uso do node) para gestão dos pedidos de um supermercado. Assim é preciso
que o sistema tenha o controle de clientes, funcionários, e estoque de produtos, bem como a gestão
dos pedidos. */

let Listafuncionarios = [];
let ListaProdutos = [];
let ListaCliente = [];
let ListaPedidos = [];



let opcoes = [
  "Sair", //feito
  "Cadastro de produtos",//feito
  "Atualizar produto",//feito
  "Listar estoque",//feito
  "Produtos a vencer",//feito
  "Reposição de produtos", //feito
  "Cadastro de funcionários", //Feito
  "Listar funcionários", // Feito
  "Cadastro de clientes",//feito
  "Listar clientes", //feito
  "Abrir novo pedido", //feito
  "Consultar pedidos", //Feito
  "Consultar um pedido", //Feito
  "Relatório de funcionários por tipo de funcionário", //feito
  "Folha de pagamento", // feito
  "Cliente com mais pedidos no mês",
  "Clientes com mais pedidos no mês",
  "Cliente com mais pedidos em um mês específico",
  "Calcular bônus cliente", //feito
  "Funcionário com maior número de vendas no mês",
  "Entregador com maior número de entregas no mês"
  ];
  
  let op;
  do {
    console.log("");
    console.log("*********Sistema de Delivery****************");
    console.log("Opções disponíveis: ");
  
    for (let i = 0; i < opcoes.length; i++) {
      console.log(`${i} - ${opcoes[i]}`);
    }
    
    console.log("");
    op = parseInt(prompt("Digite o número da opção desejada: "));

    switch (op) {
      case 0:
        break;
      case 1:
        cadastrarProduto();
        break;
      case 2:
        atualizarProduto();
        break;
      case 3:
        listarEstoque();
        break;  
      case 4:
        mostrarProdutosAVencer();
        break;  
      case 5:
          reposicaoProdutos();
          break;    
      case 6:
        CadastrodeFuncionarios();
        break;  
      case 7:
        Listagemfuncionarios();
        break;
      case 8:
        CadastrarCliente();
        break;
      case 9:
        ListagemCliente();
        break;  
      case 10:
        AbrirNovoPedido();
        break;
      case 11:
        ConsultarPedidos();
        break;      
      case 12:
         ConsultarUmPedido();
         break
      case 13:
        FuncionariosPorTipo();
        break; 
      case 14:
        folhaDePagamento()
        break;

      case 18:
        calcularBonusCliente()
        break;  
      case 19:
        funcionarioMaiorNumeroVendasMes();
        break;
      case 20:
        entregadorMaiorNumeroEntregasMes();
        break;
    
      default:
        console.log("opção invalida, verifique sua opção. Por favor");
        break;
}




} while (op !== 0);

function gerarCodigoColoborador() {
    return 1000 + Listafuncionarios.length;
}

function gerarCPF() {
    var cpf = '';
    for (var i = 0; i < 9; i++) {
      cpf += Math.floor(Math.random() * 10);
    }
  
    var soma1 = 0;
    var soma2 = 0;
  
    for (var j = 0; j < 9; j++) {
      soma1 += parseInt(cpf[j]) * (10 - j);
      soma2 += parseInt(cpf[j]) * (11 - j);
    }
  
    var digito1 = (soma1 % 11 < 2) ? 0 : 11 - (soma1 % 11);
    var digito2 = (soma2 % 11 < 2) ? 0 : 11 - (soma2 % 11);
  
    cpf += digito1 + '' + digito2;
  
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function CadastrodeFuncionarios()
{
    let nom = prompt("Qual nome do funcionario? ");
    let tip = prompt("Qual é a função do funcionario? Indique 1 - vendedor ou 2 - entegador ");
    let sal = parseFloat(prompt("qual é o salario do funcionario? "));
    let rua1=  prompt("qual é o nome da rua do funcionario? ");
    let bairro1= prompt("qual é o nome do bairro do funcionario? ");
    let numero1= prompt("qual é o numero da casa do funcionario? ");
    let set = prompt("qual é o setor do funcionario? Indique 1 - Comercial ou 2 - Logistica ");

    let codigo2=Number(set);
    let tiposetor ="";
    if (codigo2 ===1)
    {
        tiposetor = "Comercial"
    }
     else if (codigo2 === 2)
    {
      tiposetor = 'Logistica'
    }
    else {
            tipoFuncionario = 'Tipo de funcionário desconhecido';
    }


    let codigo = Number(tip);
    let tipoFuncionario = "";
    if (codigo === 1) {
      tipoFuncionario = 'Vendedor';
    } else if (codigo === 2) {
      tipoFuncionario = 'Entregador';
    } else {
      tipoFuncionario = 'Tipo de funcionário desconhecido';
    }

    let novoFuncionario = {
        cod_funcionario:gerarCodigoColoborador(),
        nome_funcionario:nom.toLocaleUpperCase(),
        cpf_funcionario:gerarCPF(),
        tipo_funcionario: tipoFuncionario,
        salario:sal,
        endereco: {
            rua: rua1.toLocaleLowerCase(),
            bairro: bairro1.toLocaleLowerCase(),
            numero: numero1.toLocaleLowerCase(),
        }, 
        setor: tiposetor.toLocaleUpperCase(),
    }

    Listafuncionarios.push(novoFuncionario);
    console.log("");
    console.log(`O funcioario ${novoFuncionario.nome_funcionario} do cargo: ${novoFuncionario.tipo_funcionario} e do setor: ${novoFuncionario.setor} foi cadastrado com sucesso!`);
}

function Listagemfuncionarios(){

    console.log("*********Lista de Funciorario****************");

    if (Listafuncionarios.length === 0) {
        console.log("Não há funcionários cadastrados.");
        return;
    }else{
        for(let i = 0; i<Listafuncionarios.length;i++)
        {   
          console.log("");
            console.log(`Codigo do Funcionario: ${Listafuncionarios[i].cod_funcionario}`);
            console.log(`Setor: ${Listafuncionarios[i].setor}`);
            console.log(`Nome: ${Listafuncionarios[i].nome_funcionario}`);
            console.log(`CPF: ${Listafuncionarios[i].cpf_funcionario}`);
            console.log(`Função: ${Listafuncionarios[i].tipo_funcionario}`);
            console.log(`Salario: ${Listafuncionarios[i].salario}`);
            console.log(`Endereço: ${Listafuncionarios[i].endereco.rua}, ${Listafuncionarios[i].endereco.numero} - ${Listafuncionarios[i].endereco.bairro}`);
            console.log('-----------------------');
        }

    }   

}

function folhaDePagamento() {
    console.log("*************** FOLHA DE PAGAMENTO ***************");
    console.log(`Total de colaboradores: ${Listafuncionarios.length}`);

  
    let totalSalarios = 0;
    let colaboradoresPorSetor = {};
  
    Listafuncionarios.forEach((colaborador) => {
      totalSalarios += colaborador.salario;
  
      if (!colaboradoresPorSetor[colaborador.setor]) {
        colaboradoresPorSetor[colaborador.setor] = {
          salarioTotal: 0,
          colaboradores: [],
        };
      }
  
      colaboradoresPorSetor[colaborador.setor].colaboradores.push(colaborador);
      colaboradoresPorSetor[colaborador.setor].salarioTotal += colaborador.salario;
    });
  
    console.log(`Total de salários a serem pagos: R$ ${totalSalarios.toFixed(2)}`);
    console.log(" ");
  
    console.log("Quantidade de funcionários por setor:");
    for (let setor in colaboradoresPorSetor) {
        console.log("---------------------------------------------------------");
      console.log(`Setor: ${setor}`);
      console.log(`Quantidade de colaboradores: ${colaboradoresPorSetor[setor].colaboradores.length}`);
      console.log(`Salário total do setor: R$ ${colaboradoresPorSetor[setor].salarioTotal.toFixed(2)}`);
      console.log("---------------------------------------------------------");
    }
}

function FuncionariosPorTipo(){
    console.log("*********** Relatório de funcionários por tipo de funcionário *************");
    let tiposFuncionario = {};

    Listafuncionarios.forEach((funcionario) => {
      if (!tiposFuncionario[funcionario.tipo_funcionario]) {
        tiposFuncionario[funcionario.tipo_funcionario] = [];
      }
  
      tiposFuncionario[funcionario.tipo_funcionario].push(funcionario);
    });
    for (let tipo in tiposFuncionario) {
        console.log(`Tipo de Funcionário: ${tipo}`);
        console.log(`Quantidade de Funcionários: ${tiposFuncionario[tipo].length}`);
        console.log("Lista de Funcionários:");
    
        tiposFuncionario[tipo].forEach((funcionario) => {
          console.log(`- ${funcionario.nome_funcionario}`);
        });
    
        console.log(" ");
      }
}

function funcionarioMaiorNumeroVendasMes() {
    let maiorNumeroVendas = 0;
    let funcionarioMaiorVendas = null;
  
    for (let i = 0; i < Listafuncionarios.length; i++) {
      const funcionario = Listafuncionarios[i];
  
      if (funcionario.tipo_funcionario === 'Vendedor' && funcionario.vendasMes > maiorNumeroVendas) {
        maiorNumeroVendas = funcionario.vendasMes;
        funcionarioMaiorVendas = funcionario;
      }
    }
  
    if (funcionarioMaiorVendas !== null) {
      console.log("Funcionário com maior número de vendas no mês:");
      console.log(`Nome: ${funcionarioMaiorVendas.nome_funcionario}`);
      console.log(`Número de vendas: ${maiorNumeroVendas}`);
    } else {
      console.log("Não há vendedores cadastrados ou nenhum vendedor registrou vendas no mês.");
    }
  }

function entregadorMaiorNumeroEntregasMes() {
    let maiorNumeroEntregas = 0;
    let entregadorMaiorEntregas = null;
  
    for (let i = 0; i < Listafuncionarios.length; i++) {
      const funcionario = Listafuncionarios[i];
  
      if (funcionario.tipo_funcionario === 'Entregador' && funcionario.entregasMes > maiorNumeroEntregas) {
        maiorNumeroEntregas = funcionario.entregasMes;
        entregadorMaiorEntregas = funcionario;
      }
    }
  
    if (entregadorMaiorEntregas !== null) {
      console.log("Entregador com maior número de entregas no mês:");
      console.log(`Nome: ${entregadorMaiorEntregas.nome_funcionario}`);
      console.log(`Número de entregas: ${maiorNumeroEntregas}`);
    } else {
      console.log("Não há entregadores cadastrados ou nenhum entregador realizou entregas no mês.");
    }
  }

function gerarCodigoProduto() {
    return 1000 + ListaProdutos.length;
}  

function cadastrarProduto(){
    console.log("");
    const cod_produto = gerarCodigoProduto();
    const nome_produto = prompt("Digite o nome do produto: ");
    const preco_produto = parseFloat(prompt("Digite o preço do produto: "));
    const qtd_produto = parseInt(prompt("Digite a quantidade do produto: "));
    const validade_produto = prompt("Digite a validade do produto: ");
    
    const novoProduto = {
        cod_produto,
        nome_produto,
        preco_produto,
        qtd_produto,
        validade_produto
      };

    ListaProdutos.push(novoProduto);
    console.log("");
    console.log(`Produto ${novoProduto.nome_produto} cadastrado com sucesso!`);
  
}

function listarEstoque() {
    console.log("********* Estoque de Produtos *********");
  
    if (ListaProdutos.length === 0) {
      console.log("Estoque vazio. Nenhum produto cadastrado.");
      return;
    }
  
    for (let i = 0; i < ListaProdutos.length; i++) {
      const produto = ListaProdutos[i];
      console.log("");
      console.log(`Código: ${produto.cod_produto}`);
      console.log(`Nome: ${produto.nome_produto}`);
      console.log(`Preço: R$ ${produto.preco_produto.toFixed(2)}`);
      console.log(`Quantidade: ${produto.qtd_produto}`);
      console.log(`Validade: ${produto.validade_produto}`);
      console.log("------------------------------------");
    }
}

function atualizarProduto() {
    const cod_produto = parseInt(prompt("Digite o código do produto que deseja atualizar: "));
  
    const produto = ListaProdutos.find(produto => produto.cod_produto === cod_produto);
  
    if (!produto) {
      console.log("Produto não encontrado. Verifique o código digitado.");
      return;
    }
    console.log(`Produto ${ListaProdutos.nome_produto} encontrado. Informe os novos dados: `)
      
    const preco_produto = parseFloat(prompt("Digite o novo preço do produto: "));
    const qtd_produto = parseInt(prompt("Digite a nova quantidade do produto: "));
    const validade_produto = prompt("Digite a nova validade do produto: ");
  
    produto.preco_produto = preco_produto;
    produto.qtd_produto = qtd_produto;
    produto.validade_produto = validade_produto;
  
    console.log("Produto atualizado com sucesso!");
    console.log(`Código: ${produto.cod_produto}`);
    console.log(`Nome: ${produto.nome_produto}`);
    console.log(`Preço: R$ ${produto.preco_produto.toFixed(2)}`);
    console.log(`Quantidade: ${produto.qtd_produto}`);
    console.log(`Validade: ${produto.validade_produto}`);
    console.log("------------------------------------");
};

function mostrarProdutosAVencer() {
    const hoje = new Date(); // Obtém a data atual
    
    // Filtra os produtos cuja validade está a 1 mês ou menos de vencer
    const produtosAVencer = ListaProdutos.filter(produto => {
      const partesData = produto.validade_produto.split('/'); // Divide a string da data em dia, mês e ano
      const dataValidade = new Date(`${partesData[2]}-${partesData[1]}-${partesData[0]}`); // Cria o objeto Date no formato correto
      
      // Calcula a diferença em meses entre a data de validade e a data atual
      const diffMeses = (dataValidade.getMonth() + 1) - (hoje.getMonth() + 1);
      
      return diffMeses <= 1; // Retorna true se a diferença for de 1 mês ou menos
    });
    
    if (produtosAVencer.length === 0) {
      console.log("Não há produtos próximos da data de validade.");
      return;
    }
    
    console.log("Produtos Próximos da Data de Validade:");
    
    produtosAVencer.forEach(produto => {
      console.log(`Código: ${produto.cod_produto}`);
      console.log(`Nome: ${produto.nome_produto}`);
      console.log(`Preço: R$ ${produto.preco_produto.toFixed(2)}`);
      console.log(`Quantidade: ${produto.qtd_produto}`);
      console.log(`Validade: ${produto.validade_produto}`);
      console.log("------------------------------------");
    });
  }

function reposicaoProdutos() {
    console.log("********* Reposição de Produtos *********");
  
    if (ListaProdutos.length === 0) {
      console.log("Estoque vazio. Nenhum produto cadastrado.");
      return;
    }
  
    const cod_produto = parseInt(prompt("Digite o código do produto que deseja repor: "));
    const quantidade = parseInt(prompt("Digite a quantidade a ser adicionada ao estoque: "));
  
    const produto = ListaProdutos.find(produto => produto.cod_produto === cod_produto);
  
    if (!produto) {
      console.log("Produto não encontrado. Verifique o código digitado.");
      return;
    }
  
    produto.qtd_produto += quantidade;
  
    console.log(`Produto ${produto.nome_produto} - Quantidade atualizada: ${produto.qtd_produto}`);
}
  
function CadastrarCliente(){
  let nom = prompt("Qual nome do Cliente? ");
  let bon = parseFloat(prompt("Qual é o Bonus deste cliente?  "));
  let rua1=  prompt("Qual é o nome da rua do Cliente? ");
  let bairro1= prompt("Qual é o nome do bairro do Cliente? ");
  let numero1= prompt("Qual é o numero da casa do Cliente? ");
  

  let novoCliente = {
    cod_cliente: gerarCodigoCliente(),
    nome_cliente: nom.toUpperCase(),
    cpf_cliente: gerarCPF(),
    telefone_cliente: gerarNumeroCelular(),
    bonus_cliente: bon/100,
    endereco: {
      rua: rua1.toLocaleLowerCase(),
      bairro: bairro1.toLocaleLowerCase(),
      numero: numero1.toLocaleLowerCase(),
  }, 

  }

  ListaCliente.push(novoCliente);
  console.log("");
    console.log(`O Cliente ${novoCliente.nome_cliente} foi cadastrado com sucesso!`)
  
}  

function gerarNumeroCelular() {
  var ddd = '85';
  var numero = '';
  
  for (var i = 0; i < 8; i++) {
    numero += Math.floor(Math.random() * 10);
  }
  
  return '(' + ddd + ') 9' + numero.substring(0, 4) + '-' + numero.substring(4);
}
  
function gerarCodigoCliente() {
  return 1000 + ListaCliente.length;
}

function ListagemCliente(){

  console.log("*********Lista de Cliente****************");

  if (ListaCliente.length === 0) {
      console.log("Não há Cliente cadastrados.");
      return;
  }else{
      for(let i = 0; i<ListaCliente.length;i++)
      {   
        console.log("");
          console.log(`Codigo do Cliente: ${ListaCliente[i].cod_cliente}`);
          console.log(`Nome: ${ListaCliente[i].nome_cliente}`);
          console.log(`CPF: ${ListaCliente[i].cpf_cliente}`);
          console.log(`Telefone: ${ListaCliente[i].telefone_cliente}`);
          console.log(`Bonus: ${ListaCliente[i].bonus_cliente}`);
          console.log(`Endereço: ${ListaCliente[i].endereco.rua}, ${ListaCliente[i].endereco.numero} - ${ListaCliente[i].endereco.bairro}`);
          console.log('-----------------------');
      }

  }   

}

function AbrirNovoPedido() {
  let clienteCadastrado = false;
  let cliente = {};
  let cpfCliente = prompt("Digite o CPF do cliente:");

  // Remover formatação do CPF (manter apenas os números)
  cpfCliente = cpfCliente.replace(/\D/g, '');

  // Verificar se o cliente já está cadastrado
  for (let i = 0; i < ListaCliente.length; i++) {
    if (ListaCliente[i].cpf === cpfCliente) {
      clienteCadastrado = true;
      cliente = ListaCliente[i];
      break;
    }
  }

  // Se o cliente não estiver cadastrado, solicitar o cadastro
  if (!clienteCadastrado) {
    console.log("Cliente não cadastrado. Por favor, realize o cadastro do cliente.");

    const nomeCliente = prompt("Digite o nome do cliente:");
    const enderecoCliente = prompt("Digite o endereço do cliente:");

    cliente = {
      cpf: cpfCliente,
      nome: nomeCliente,
      endereco: enderecoCliente,
      bonus: 0
    };

    ListaCliente.push(cliente);
  }

  const codigoFuncionario = parseInt(prompt("Digite o código do funcionário que está realizando o atendimento:"));

  let pedido = {
    cliente: cliente,
    codigoFuncionario: codigoFuncionario,
    produtos: [],
    total: 0,
    bonusAplicado: false
  };

  let encerrarPedido = false;

  while (!encerrarPedido) {
    console.log("Selecione uma opção:\n1. Inserir novo item\n2. Remover item\n3. Encerrar pedido")
    const opc = prompt(" ");
    let opca = Number(opc);

    switch (opca) {
      case 1:
        const novoItem = prompt("Digite o código do novo item:");
        pedido.produtos.push(novoItem);
        pedido.total += calcularValorItem(novoItem);
        break;
      case 2:
        const itemRemovido = prompt("Digite o código do item que deseja remover:");
        const indexItem = pedido.produtos.indexOf(itemRemovido);
        if (indexItem !== -1) {
          pedido.produtos.splice(indexItem, 1);
          pedido.total -= calcularValorItem(itemRemovido);
        }
        break;
      case 3:
        encerrarPedido = true;
        break;
      default:
        console.log("Opção inválida. Por favor, selecione uma opção válida.");
        break;
    }

    console.log("Total do pedido: R$" + pedido.total.toFixed(2));
  }

  // Aplicar bônus ao total do pedido, se houver
  if (cliente.bonus > 0 && !pedido.bonusAplicado) {
    pedido.total -= cliente.bonus;
    cliente.bonus = 0;
    pedido.bonusAplicado = true;
    console.log("Bônus aplicado. Total a pagar: R$" + pedido.total.toFixed(2));
  }

  const codigoEntregador = parseInt(prompt("Digite o código do entregador que realizará a entrega:"));
  const tipoPagamento = prompt("Digite o tipo de pagamento:");
  const opcaoFinal = prompt("Selecione uma opção:\n1. Concluir pedido\n2. Cancelar pedido");

  if (opcaoFinal === "1") {
    pedido.codigo = gerarCodigoPedido();
    pedido.data = obterDataAtual();
    pedido.entregador = codigoEntregador;
    pedido.pagamento = tipoPagamento;
    ListaPedidos.push(pedido);
    console.log("Pedido concluído com sucesso!");
  } else {
    console.log("Pedido cancelado.");
  }

  function calcularValorItem(codigoItem) {
    // Lógica para calcular o valor do item com base no código do item
    // Substitua este trecho de código pela sua lógica de cálculo do valor do item
    return 0; // Retornando 0 para fins de exemplo
  }
  
  function gerarCodigoPedido() {
    // Lógica para gerar um código único para o pedido
    // Substitua este trecho de código pela sua lógica de geração do código do pedido
    const codigo = Math.floor(Math.random() * 1000); // Exemplo: código aleatório entre 0 e 999
    return codigo;
  }
  
  function obterDataAtual() {
    // Lógica para obter a data atual
    // Substitua este trecho de código pela sua lógica de obtenção da data atual
    const data = new Date().toLocaleDateString(); // Exemplo: data atual no formato DD/MM/AAAA
    return data;
  }
}


function ConsultarPedidos() {
  
  if (ListaPedidos.length === 0) {
    console.log("Não há pedidos cadastrados.");
    return;}
  else{
    console.log("Pedidos registrados:");
    for (let i = 0; i < ListaPedidos.length; i++) {
    console.log(`Código: ${ListaPedidos[i].codigo}`);
    console.log(`Cliente: ${ListaPedidos[i].cliente}`);
    console.log(`Produto: ${ListaPedidos[i].produto}`);
    console.log(`Quantidade: ${ListaPedidos[i].quantidade}`);
    console.log(`Data: ${ListaPedidos[i].data}`);
    console.log("---------------------------------");
    }
  }
}

function ConsultarUmPedido() {
  let codigo = parseInt(prompt("Digite o código do pedido a ser consultado:"));
  let pedidoEncontrado = false;

  for (let i = 0; i < ListaPedidos.length; i++) {
    if (ListaPedidos[i].codigo === codigo) {
      pedidoEncontrado = true;
      console.log(`Código: ${ListaPedidos[i].codigo}`);
      console.log(`Cliente: ${ListaPedidos[i].cliente}`);
      console.log(`Produto: ${ListaPedidos[i].produto}`);
      console.log(`Quantidade: ${ListaPedidos[i].quantidade}`);
      console.log(`Data: ${ListaPedidos[i].data}`);
      console.log("---------------------------------");
      break;
    }
  }

  if (!pedidoEncontrado) {
    console.log("Pedido não encontrado. Verifique o código digitado, por favor.");
  }
}

function calcularBonusCliente() {
  let cliente = prompt("Digite o nome do cliente:");
  let totalGasto = 0;

  for (let i = 0; i < ListaPedidos.length; i++) {
    if (ListaPedidos[i].cliente === cliente) {
      totalGasto += ListaPedidos[i].quantidade * ListaPedidos[i].preco;
    }
  }

  let bonus = totalGasto * 0.05;

  console.log(`O cliente ${cliente} possui um bônus de R$ ${bonus.toFixed(2)}`);
}