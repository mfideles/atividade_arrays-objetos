// Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.

const data = [
    {
      nome: "Roger Medeiros",
      sexo: "M",
      salario: 3250,
    },
    {
      nome: "Carolina Silva",
      sexo: "F",
      salario: 1200,
    },
    {
      nome: "Cristina Avila",
      sexo: "F",
      salario: 8100,
    },
    {
      nome: "Gustavo Hoffman",
      sexo: "M",
      salario: 5200.35,
    },
    {
      nome: "Eva Trindade",
      sexo: "F",
      salario: 2501,
    },
    {
      nome: "Andre Mathias",
      sexo: "M",
      salario: 1750,
    },
    {
      nome: "Joice Castro da Silva",
      sexo: "F",
      salario: 3350.25,
    },
    ];
  
    let acima7k = data.some((valor) => 
    {
    if (valor.salario > 7000) 
    {
        return true;
    }
    else
    {
        return false;
    }
    }
    );
    console.log(acima7k)