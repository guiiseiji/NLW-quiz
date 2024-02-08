const perguntas = [
    {
        pergunta: 'O que é identidade de gênero?',
        respostas: [
            'O sexo biológico atribuído no nascimento.',
            'A expressão de gênero de uma pessoa.',
            'A orientação sexual de uma pessoa.',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual das seguintes opções é uma forma de identidade de gênero?',
        respostas: [
            'Cisgênero.',
            'Homossexual.',
            'Assexual.',
        ],
        correta: 0
    },
    {
        pergunta: 'O que é transexualidade?',
        respostas: [
            'Atração sexual por pessoas do mesmo sexo.',
            'Identidade de gênero que difere do sexo atribuído no nascimento.',
            'A expressão de gênero de uma pessoa.',
        ],
        correta: 1
    },
    {
        pergunta: 'Quem é uma pessoa cisgênero?',
        respostas: [
            'Uma pessoa cuja identidade de gênero corresponde ao sexo atribuído no nascimento.',
            'Uma pessoa que não tem orientação sexual definida.',
            'Uma pessoa que se identifica como andrógina.',
        ],
        corretas: 0
    },
    {
        pergunta: 'O que é orientação sexual?',
        respostas: [
            'A expressão de gênero de uma pessoa.',
            'Atração emocional, romântica ou sexual por outras pessoas.',
            'A identidade de gênero de uma pessoa.',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual termo descreve a falta de atração sexual por qualquer pessoa?',
        respostas: [
            'Homossexualidade.',
            'Bissexualidade.',
            'Assexualidade.',
        ],
        correta: 2
    },
    {
        pergunta: 'O que é pansexualidade?',
        respostas: [
            'A atração por pessoas de qualquer gênero.',
            'A atração apenas por pessoas do mesmo gênero.',
            'A atração apenas por pessoas de gêneros diferentes.',
        ],
        correta: 0
    },
    {
        pergunta: 'O que é a expressão de gênero?',
        respostas: [
            'A identidade de gênero de uma pessoa.',
            'O sexo biológico atribuído no nascimento.',
            'A maneira como uma pessoa expressa sua identidade de gênero.',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual das seguintes opções é uma identidade de gênero não binária?',
        respostas: [
            'Transgênero.',
            'Agênero.',
            'Cisgênero.',
        ],
        correta: 1
    },
    {
        pergunta: 'O que é heterossexualidade?',
        respostas: [
            'A atração por pessoas de gêneros diferentes.',
            'A atração por pessoas do mesmo gênero.',
            'A falta de atração sexual por qualquer pessoa.',
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

//loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.resposta.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
        }
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}

