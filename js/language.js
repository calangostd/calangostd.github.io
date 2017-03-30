var language = {
    ptbr: {
        general: {
            'release-date': 'Lançamento',
            'download': 'Download'
        },
        cover: {
            'subtitle': 'Estúdio indie brasileiro. Jogos simples e diferentes ❤'
        },
        games: {
            'title': 'Jogos',
            'subtitle': 'nossos exclusivos'
        },
        rupert: {
            'title': 'Rupert',
            'content-1': 'Guie Rupert até sua missão de recuperar um misterioso objeto roubado de seu amigo.',
            'content-2': 'Controlar Rupert é simples e diferente de outras experiências mobile, não existe ataques ou armas, utilize apenas sua habilidade e raciocínio para completar os cenários.',
            'content-3': 'Inspirado em jogos da era do 16bits, toda sua simplicidade faz qualquer tipo de jogador se encantar e se sentir desafiado.',
            'content-4': 'Com um sistema de Placar online você pode disputar com seus amigos e tentar ser o melhor entre eles.'
        },
        spacejay: {
            'title': 'Space Jay',
            'release-date': '2014',
            'content-1': 'Space Jay é um jogo casual extremamente desafiador proposto para os jogadores casuais até os mais hardcores.',
            'content-2': 'Possuindo um sistema de Placar online você pode disputar com seus amigos e ser o melhor.',
            'content-3': 'Não basta apenas atirar em Space Jay, trabalhe sua memória para acertar os oponentes certos e aumentar rapidamente seus pontos.',
            'content-4': 'Em contrapartida com o visual Retro, Space Jay possui músicas incríveis, coloque o seu melhor fone de ouvido e sinta a energia do jogo.'
        },
        about: {
            'title': 'Sobre nós',
            'content-1': 'Somos uma pequena desenvolvedora de jogos localizada no Brasil, cidade de Campinas(SP), sendo oficialmente fundada em 2017',
            'content-2': 'Buscamos criar experiências divertidas aos jogadores, de forma simples e contagiante',
            'content-3': 'Atualmente com o jogo Rupert para Android, queremos mostrar nossa identidade com desenvolvimento de jogos e conseguir novas parcerias.',
            'content-4': '',
            'presskit': 'Baixe nosso presskit'
        },
        contact: {
            'title': 'Contato',
            'content-1': 'Dúvidas, sugestões ou quer só conversar conosco? Mande uma mensagem para nós =)'
        },
    },
    en: {
        general: {
            'release-date': 'Lançamento',
            'download': 'Download'
        },
        cover: {
            'subtitle': 'Brazilian indie game studio. Simple and different games ❤'
        },
        games: {
            'title': 'Jogos',
            'subtitle': 'nossos exclusivos'
        },
        rupert: {
            'title': 'Rupert',
            'content-1': 'Guie Rupert até sua missão de recuperar um misterioso objeto roubado de seu amigo.',
            'content-2': 'Controlar Rupert é simples e diferente de outras experiências mobile, não existe ataques ou armas, utilize apenas sua habilidade e raciocínio para completar os cenários.',
            'content-3': 'Inspirado em jogos da era do 16bits, toda sua simplicidade faz qualquer tipo de jogador se encantar e se sentir desafiado.',
            'content-4': 'Com um sistema de Placar online você pode disputar com seus amigos e tentar ser o melhor entre eles.'
        },
        spacejay: {
            'title': 'Space Jay',
            'release-date': '2014',
            'content-1': 'Space Jay é um jogo casual extremamente desafiador proposto para os jogadores casuais até os mais hardcores.',
            'content-2': 'Possuindo um sistema de Placar online você pode disputar com seus amigos e ser o melhor.',
            'content-3': 'Não basta apenas atirar em Space Jay, trabalhe sua memória para acertar os oponentes certos e aumentar rapidamente seus pontos.',
            'content-4': 'Em contrapartida com o visual Retro, Space Jay possui músicas incríveis, coloque o seu melhor fone de ouvido e sinta a energia do jogo.'
        },
        about: {
            'title': 'Sobre nós',
            'content-1': 'Somos uma pequena desenvolvedora de jogos localizada no Brasil, cidade de Campinas(SP), sendo oficialmente fundada em 2017',
            'content-2': 'Buscamos criar experiências divertidas aos jogadores, de forma simples e contagiante',
            'content-3': 'Atualmente com o jogo Rupert para Android, queremos mostrar nossa identidade com desenvolvimento de jogos e conseguir novas parcerias.',
            'content-4': '',
            'presskit': 'Baixe nosso presskit'
        },
        contact: {
            'title': 'Contato',
            'content-1': 'Dúvidas, sugestões ou quer só conversar conosco? Mande uma mensagem para nós =)'
        },
    }
}

function getLanguage() {
    var mLanguage = getCookie("language");
    var mActiveLanguage = language.ptbr;

    if (!mLanguage) {
        //Set English if no have set language
        setCookie("language", 2, 99);
        mLanguage = 1;
    }

    if (mLanguage == 1) {
        mActiveLanguage = language.ptbr;
    } else if (mLanguage == 2) {
        mActiveLanguage = language.en;
    }

    return mActiveLanguage;
}

function setLanguage(language) {
    if (language == "ptbr") {
        setCookie("language", 1, 99);
    } else if (language == "eng") {
        setCookie("language", 2, 99);
    }

    location.reload();
}

window.activeLanguage = getLanguage();