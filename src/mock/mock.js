
export const clientes = [
    {
      id: 1,
      nome: "João Silva",
      // QRCode: "clu6if8f4xq44g03s7o0zj",
      email: "joao.silva@teste.com",
      telefone: "(11) 1111-1111",
    },
    {
      id: 2,
      // QR Code:
      nome: "Joana Souza",
      email: "maria.souza@teste.com",
      telefone: "(11) 2222-2222",
    },
  ];
  
  export const veiculos = [
    {
      id: 1,
      clienteId: 1,
      marca: "Fiat",
      modelo: "Palio",
      placa: "ABC-1234",
      ano: 2010,
    },
    {
      id: 2,
      clienteId: 1,
      marca: "Chevrolet",
      modelo: "Celta",
      placa: "DEF-5678",
      ano: 2012,
    },
  ];
  
  export const servicos = [
    {
      id: 1,
      veiculoId: 1,
      tecnico: "José da Silva",
      pecas: ["Pastilha de freio", "Filtro de óleo"],
      dataInicio: new Date(2023, 3, 16, 8, 0),
      dataFim: new Date(2023, 3, 16, 12, 0),
    },
    {
      id: 2,
      veiculoId: 2,
      tecnico: "Maria Souza",
      pecas: ["Bateria"],
      dataInicio: new Date(2023, 3, 15, 10, 0),
      dataFim: new Date(2023, 3, 15, 12, 0),
    },
  ];
  
  export const produtos = [
    {
      nome: "Pneu",
      preco: 299.99,
    },
    {
      nome: "Óleo",
      preco: 39.99,
    },
    {
      nome: "Pastilha de Freio",
      preco: 50,
    },
    {
      nome: "Amortecedor",
      preco: 499.99,
    },
    {
      nome: "Bateria",
      preco: 399.99,
    },
    {
      nome: "Filtro de óleo",
      preco: 50,
    },
  ];
  