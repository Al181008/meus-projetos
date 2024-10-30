let campoOrcamento;
let campoPraia;
let campoCidadeGrande;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de lugares para conhecer");
  createSpan("Quanto você pode gastar R$");
  campoOrcamento = createInput("1000");
  campoPraia = createCheckbox("Gosta de Praia?");
  campoCidadeGrande = createCheckbox("Gosta de cidades grandes?");
}

function draw() {
  background("white");
  let orcamento = parseFloat(campoOrcamento.value());
  let gostaDePraia = campoPraia.checked();
  let gostaDeCidadesGrandes = campoCidadeGrande.checked();
  let recomendacao = geraRecomendacao(orcamento, gostaDePraia, gostaDeCidadesGrandes);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(orcamento, gostaDePraia, gostaDeCidadesGrandes) {
  if (orcamento >= 1000) {
    if (gostaDePraia) {
      return "bhaia - ótimo para quem gosta de praias e cidade grande.";
    } else if (gostaDeCidadesGrandes) {
      return "vinhedo- ideal para quem gosta do agito das grandes cidades.";
    } else {
      return "jundiaí - perfeito para quem busca um lugar tranquilo e charmoso.";
    }
  } else if (orcamento >= 500) {
    if (gostaDePraia) {
      return "guaruja - excelente para quem quer praias lindas com orçamento moderado.";
    } else if (gostaDeCidadesGrandes) {
      return "itu - uma grande cidade com muitos parques e um custo de vida razoável.";
    } else {
      return "campinas- cidade histórica com muita cultura e beleza.";
    }
  } else {
    if (gostaDePraia) {
      return "arujá- é um município que apresenta uma preservação ambiental bastante visível, sendo considerada um dos pulmoes de área verde no estado e na Região Metropolitana de São Paulo..";
    } else if (gostaDeCidadesGrandes) {
      return "Abadia dos Dourados	 - cidade grande com muita cultura e opções de lazer econômicas.";
    } else {
      return "valinhos- cidade com clima de montanha e muita história.";
    }
  }
}
