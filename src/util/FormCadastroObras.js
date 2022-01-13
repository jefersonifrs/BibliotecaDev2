module.exports = [
    {
        question: 'Informe o nome do autor?',
        name: 'Nome Autor'
    },
    {
        question: 'Qual o gênero do livro?',
        placeholder: 'Selecione o gênero',
        customId: 'Gênero',
        minValues: 1,
        maxValues: 3,
        options: [
            {
                label: 'Terror',
                value: 'Terror',
                emoji: '👻'
            },
            {
                label: 'Ficção Científica',
                value: 'Ficção Científica',
                emoji: '🚓'
            },
            {
                label: 'Aventura',
                value: 'Aventura',
                emoji: '☺'
            }
        ]
    },
    {
        question: 'Informe o link obras:',
        name: 'Link OBRAS',
        //filter: (m) => !isNaN(m.content)
    },
    {
        question: 'Status',
        name: 'STATUS:',
        placeholder: 'Selecione o status',
        customId: 'status',
        minValues: 1,
        maxValues: 1,
        options: [
            {
                label: 'Ativo',
                value: 'Ativo'
            },
            {
                label: 'Completo',
                value: 'Completo'
            },
            {
                label: 'Cancelado',
                value: 'Cancelado'
            },
            {
                label: 'Pausa',
                value: 'Pausa'
            }
        ]
    },
    {
        question: 'Faixa etária:',
        name: 'IDADE',
        placeholder: 'Selecione:',
        customId: 'Idade:',
        minValues: 1,
        maxValues: 1,
        options: [
            {
                label: 'Livre',
                value: 'Livre'
            },
            {
                label: 'dez',
                value: '10+'
            },
            {
                label: 'doze',
                value: 'doze'
            },
            {
                label: 'quartoze',
                value: 'quartoze'
            },
            {
                label: 'dezseis',
                value: 'dezseis'
            },
            {
                label: 'dezoito',
                value: 'dezoito'
            }
        ]
    },
    {
        question: 'Tipo de obra',
        name: 'TIPO DE OBRA:',
        placeholder: 'Selecione tipo de obra',
        customId: 'Tipo',
        minValues: 1,
        maxValues: 1,
        options: [
            {
                label: 'Romance',
                value: 'Romance'
            },
            {
                label: 'Novel',
                value: 'Novel'
            },
            {
                label: 'Conto',
                value: 'Conto'
            },
            {
                label: 'Webnovel',
                value: 'Webnovel'
            },
            {
                label: 'Novela',
                value: 'Novela'
            },
            {
                label: 'Antologia',
                value: 'Antologia'
            }
        ]
    },
    {
        question: 'Sinopse',
        name: 'Sinopse'
    }
]