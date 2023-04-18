export const clientes = [
    {
      id: 1,
      nome: "João Silva",
      email: "joao.silva@teste.com",
      telefone: "(11) 1111-1111",
    },
    {
      id: 2,
      nome: "Maria Souza",
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
  