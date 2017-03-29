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
            'content': 'xxx'
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

        },
        cover: {
            'subtitle': 'Brazilian indie game studio. Simple and different games ❤'
        },
    }
}

window.activeLanguage = getLanguage();

function getLanguage() {
    var mLanguage = getCookie("language");
    var mActiveLanguage = language.ptbr;

    if (!mLanguage) {
        setCookie("language", 1, 99);
        mLanguage = 1;
    }

    if (mLanguage == 1) {
        mActiveLanguage = language.ptbr;
    } else if (mLanguage == 2) {
        mActiveLanguage = language.en;
    }

    return mActiveLanguage;
}

function setLanguage() {
    if (activeLanguage == language.ptbr) {
        setCookie("language", 2, 99);
    } else {
        setCookie("language", 1, 99);
    }

    location.reload();
}