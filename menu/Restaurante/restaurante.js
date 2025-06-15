const buttonVegano = document.getElementById("button-vegano");
const buttonNaoVegano = document.getElementById("button-nao-vegano")
const buttonTodos = document.getElementById("button-todos")
const todosRestaurantesDom = document.getElementById("todosRestaurantes")

const restaurantes = [
  {
    nome: "Verd & Co",
    imagem: "imagemVerdCo.jpg",
    descricao: [
      "Destaques: frango grelhado com quinoa, omeletes proteicos, salmão, arroz negro, sucos detox",
      "Ambiente: moderno e funcional, ideal para refeições leves com proteína animal",
      "Extras: pratos montáveis (você escolhe a proteína, carbo e salada)"
    ],
    endereco: "Rua Lamenha Lins, 800",
    telefone: "(41) 99204-8304",
    horario: "10:30‑22:00h",
    apenasDelivery: true,
    vegano: false,
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Verd+%26+Co+Curitiba"
  },
  {
    nome: "Quitana Gastronomia",
    imagem: "imagemQuitana.jpg",
    descricao: [
      "Destaques: ingredientes sazonais, sabores do mundo",
      "Ambiente: atual, saudável, com foco em comida orgânica sustentável",
      "Extras: cardápio à la carte disponível diariamente"
    ],
    endereco: "Av. do Batel, 1440",
    telefone: "(41) 99235-6044",
    horario: "Seg‑Sex 11:30‑14:30; Sáb‑Dom e feriados 11:30‑15:30",
    apenasDelivery: false,
    vegano: false,
    googleMaps: "https://www.google.com/maps/place/Quintana+Gastronomia/@-25.441833,-49.287054,17z"
  },
  {
    nome: "All Natural",
    imagem: "imgAllNatural.jpg",
    descricao: [
      "Destaques: pratos frescos, saborosos e saudáveis",
      "Ambiente: descontraído com ênfase em fornecedores locais",
      "Extras: variedade de refeições para todos os momentos do dia"
    ],
    endereco: "R. Bento Viana, 912 – Água Verde",
    telefone: "(41) 99256-8999",
    horario: "Seg‑Sex 9:00‑22:00; Sáb 9:00‑17:00",
    apenasDelivery: false,
    vegano: false,
    googleMaps: "https://www.google.com/maps/place/all+natural+batel/data=!4m2!3m1!1s0x94dce578cc3cb939:0x84e37c51748cbf5a"
  },
  {
    nome: "Mezmiz",
    imagem: "mezmizimgoficial.jpg",
    descricao: [
      "Destaques: metade do cardápio sem carne, opções veganas/liberais",
      "Ambiente: redução significativa de resíduos",
      "Extras: culinária libanesa com toque sustentável"
    ],
    endereco: "R. Brasílio Itiberê, 4412 – Água Verde",
    telefone: "(41) 3343‑2007",
    horario: "Seg‑Sáb 11:00‑22:30; Dom 11:00‑15:30",
    apenasDelivery: false,
    vegano: false,
    googleMaps: "https://www.google.com/maps/place/Mezmiz/@-25.4533801,-49.2862265,17z"
  },
  {
    nome: "General Gastronomia",
    imagem: "generalkrupa.JPG",
    descricao: [
      "Destaques: técnicas refinadas e receitas elaboradas",
      "Ambiente: aproveitamento integral de ingredientes",
      "Extras: foco em ingredientes locais e sazonais"
    ],
    endereco: "Rua Guilherme Pugsley, 1483 – Água Verde",
    telefone: "(41) 98851-6493",
    horario: "Seg‑Sáb 11:15‑15:00 & 18:30‑23:30",
    apenasDelivery: false,
    vegano: false,
    googleMaps: "https://www.google.com/maps/place/General+Gastronomia/data=!4m2!3m1!1s0x0:0x8bcaebbf2275f662"
  },
  {
    nome: "GreenGo",
    imagem: "imgGreenGo.jpg",
    descricao: [
      "Destaques: grande variedade de opções saudáveis e veganas",
      "Ambiente: ideal para eventos sociais e networking",
      "Extras: cardápio sazonal e renovado"
    ],
    endereco: "Alameda Dr. Carlos de Carvalho, 1282 – Bigorrilho",
    telefone: "(41) 3347‑4957",
    horario: "Seg‑Sex 11:00‑15:00 / 18:00‑22:00; Sáb 11:00‑22:00; Dom 12:00‑16:00",
    apenasDelivery: false,
    vegano: true,
    googleMaps: "https://www.google.com/maps/place/greengo/data=!4m2!3m1!1s0x94dce3f4d3b04831:0x1f26fa83996f1338"
  },
  {
    nome: "Viva la Vegan",
    imagem: "vivalaveganimg.JPG",
    descricao: [
      "Destaques: amplo cardápio com boas opções veganas",
      "Ambiente: descontraído, boa relação custo‑benefício",
      "Extras: porções generosas e bem servidas"
    ],
    endereco: "R. Presidente Carlos Cavalcanti, 566 – Centro",
    telefone: "(41) 3149‑3939",
    horario: "Seg‑Sáb 11:00‑22:00",
    apenasDelivery: false,
    vegano: true,
    googleMaps: "https://www.google.com/maps/place/Viva+la+Vegan/data=!4m2!3m1!1s0x0:0xa259c8ab5b3ac7e1"
  },
  {
    nome: "Semente de girassol",
    imagem: "girassolimg.JPG",
    descricao: [
      "Destaques: buffet livre vegano com empório de produtos",
      "Ambiente: descontraído, ótimo custo‑benefício",
      "Extras: temperos saborosos e caseiros"
    ],
    endereco: "R. Mateus Leme, 115 – São Francisco",
    telefone: "(41) 3203‑5955",
    horario: "Seg‑Sáb 11:00‑20:00; Dom 11:00‑17:00",
    apenasDelivery: false,
    vegano: true,
    googleMaps: "https://www.google.com/maps/place/semente+de+girassol+restaurante+curitiba/data=!4m2!3m1!1s0x94dce413c9f3bd29:0xc592c4718ab25748"
  },
  {
    nome: "Mada Pizza e Vinho",
    imagem: "madapizzaevinhoimg.JPG",
    descricao: [
      "Destaques: pizzas artesanais com forte compromisso sustentável",
      "Ambiente: acolhedor, ideal para grupos e jantares informais",
      "Extras: excelente carta de vinhos"
    ],
    endereco: "R. Saldanha Marinho, 1230 – Centro",
    telefone: "(41) 99561-7213",
    horario: "Dom‑Qua 18:30‑23:00; Qui 18:00‑00:00; Sex‑Sáb 18:30‑00:00",
    apenasDelivery: false,
    vegano: false,
    googleMaps: "https://www.google.com/maps/place/Mad%C3%A1+Pizza+e+Vinho/@-25.4329134,-49.283369,17z"
  },
  {
    nome: "Maria Eugênia",
    imagem: "mariaeugeniapng.JPG",
    descricao: [
      "Destaques: carta de vinhos e drinks sofisticados",
      "Ambiente: imersivo, em meio à natureza em Santa Felicidade",
      "Extras: gastronomia de excelência"
    ],
    endereco: "R. Cap. Antônio Pedri, 408 – Santa Felicidade",
    telefone: "(41) 99788-0080",
    horario: "Dom 12:30‑17:00; Qua‑Qui 19:00‑23:30; Sex‑Sáb 12:00‑16:00 & 19:00‑23:30",
    apenasDelivery: false,
    vegano: false,
    googleMaps: "https://www.google.com/maps/place/maria+eugenia+restaurante/data=!4m2!3m1!1s0x94dce119df0d6889:0x7fc3dfc1e1c72688"
  }
];


function Restaurante({ imagem, nome, descricao, endereco, telefone, horario, googleMaps }) {
  return `
    <div class="restaurante">
      <img src="${imagem}" alt="${nome}" width="400px">
      <div class="textoRests">
        <h1>${nome}</h1>
        <ul>
          ${descricao.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <p><strong>Endereço:</strong> <a href="${googleMaps}" target="_blank">${endereco}</a></p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Funcionamento:</strong> ${horario}</p>
      </div>
    </div>
  `;
}

buttonVegano.addEventListener("click", () => {
    buttonVegano.classList.add("check2")
    buttonVegano.classList.remove("check1")
    buttonNaoVegano.classList.add("check1")
    buttonNaoVegano.classList.remove("check2")
    buttonTodos.classList.add("check1")
    buttonTodos.classList.remove("check2")
    todosRestaurantesDom.innerHTML = ""
    restaurantesVeganos = restaurantes.filter(restaurante => restaurante.vegano)
    restaurantesVeganos.map((restaurante) => {
        todosRestaurantesDom.innerHTML += Restaurante(restaurante)
    })

})

buttonNaoVegano.addEventListener("click", () => {
    buttonNaoVegano.classList.add("check2")
    buttonNaoVegano.classList.remove("check1")
    buttonVegano.classList.add("check1")
    buttonVegano.classList.remove("check2")
    buttonTodos.classList.add("check1")
    buttonTodos.classList.remove("check2")
    todosRestaurantesDom.innerHTML = ""
    restaurantesNaoVeganos = restaurantes.filter(restaurante => !restaurante.vegano)
    restaurantesNaoVeganos.map((restaurante) => {
        todosRestaurantesDom.innerHTML += Restaurante(restaurante)
    })
})

buttonTodos.addEventListener("click", () => {
    buttonTodos.classList.add("check2")
    buttonTodos.classList.remove("check1")
    buttonVegano.classList.add("check1")
    buttonVegano.classList.remove("check2")
    buttonNaoVegano.classList.add("check1")
    buttonNaoVegano.classList.remove("check2")
    todosRestaurantesDom.innerHTML = ""
    restaurantes.map((restaurante) => {
        todosRestaurantesDom.innerHTML += Restaurante(restaurante)
    })
})
