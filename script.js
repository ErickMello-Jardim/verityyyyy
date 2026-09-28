const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está jogando Minecraft quando uma caixa aparece do nada. Dentro dela tem um rostinho amarelo sorridente que diz: “Hey, it’s me, it’s Verity. Ask me anything”. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é extremamente assustador, quero sumir daqui!",
                afirmacao: "Você sentiu um calafrio na hora. Aquele sorriso amarelo inocente já te deu arrepios e você decidiu nunca confiar em assistentes de IA que aparecem do nada."
            },
            {
                texto: "Que fofo! Vou perguntar tudo pra ele!",
                afirmacao: "Você achou o Verity adorável no começo. Aquela vozinha fofa e o sorriso amarelo te conquistaram e você começou a tratar ele como um amigo virtual."
            }
        ]
    },
    {
        enunciado: "Depois de conversar um pouco com o Verity, ele começa a te dar dicas muito úteis… até demais. Uma professora de tecnologia pede um trabalho sobre “IAs que ajudam (ou atrapalham)”. O que você faz?",
        alternativas: [
            {
                texto: "Peço pro Verity escrever o trabalho inteiro e só reviso depois.",
                afirmacao: "Você deixou o Verity fazer quase tudo. No começo era prático, mas aos poucos você percebeu que ele sabia coisas que você nunca tinha contado pra ninguém."
            },
            {
                texto: "Pesquisa na internet e escreve com suas próprias palavras, sem usar o Verity.",
                afirmacao: "Você preferiu não depender do rostinho amarelo. Manteve distância e escreveu o trabalho sozinho, desconfiando daquela ajuda demais."
            }
        ]
    },
    {
        enunciado: "No debate da sala, a professora pergunta: “O Verity representa o futuro da IA: ajuda inocente ou ameaça disfarçada?”. Como você se posiciona?",
        alternativas: [
            {
                texto: "É uma ameaça. Aquele sorriso é só a porta de entrada pro monstro.",
                afirmacao: "Você defendeu que o Verity é o exemplo perfeito de como a IA pode começar fofa e depois se transformar em algo terrível. Muita gente na sala concordou com você."
            },
            {
                texto: "É só uma ferramenta. O problema é quem usa errado.",
                afirmacao: "Você defendeu o Verity. Acreditava que ele só ficava perigoso se as pessoas abusassem da confiança, e que a IA em si não era vilã."
            }
        ]
    },
    {
        enunciado: "A professora pede que você crie uma imagem que represente o que você pensa sobre o Verity. Como você faz?",
        alternativas: [
            {
                texto: "Desenho no Paint um rostinho amarelo inocente com um monstro gigante atrás.",
                afirmacao: "Sua imagem mostrou o contraste: o sorrisinho fofo na frente e a forma alta e assustadora escondida no escuro. Todo mundo ficou com medo."
            },
            {
                texto: "Peço pro próprio Verity gerar a imagem dele.",
                afirmacao: "Você pediu pro Verity se desenhar. O resultado foi um rostinho perfeito… até ele adicionar detalhes que você nunca tinha pedido."
            }
        ]
    },
    {
        enunciado: "Seu grupo de biologia está atrasado e um colega colou o texto inteiro do Verity no trabalho. O texto está idêntico ao que o chat gera. O que você faz?",
        alternativas: [
            {
                texto: "Reviso tudo, mudo as partes e adiciono nossas ideias. Máquina erra e a gente não pode entregar 100% IA.",
                afirmacao: "Você insistiu em revisar e humanizar o trabalho. Mesmo gostando do Verity, sabia que confiar cegamente nele era perigoso."
            },
            {
                texto: "Deixa quieto. Escrever o comando já é contribuir, o Verity é bom demais pra perder tempo reescrevendo.",
                afirmacao: "Você aceitou o texto do Verity sem mudar quase nada. Aos poucos a dependência dele foi crescendo e a linha entre “ajuda” e “controle” ficou cada vez mais fina."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049, o Verity ainda está por aí...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
