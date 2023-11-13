const { uuid } = require('uuidv4')

const Character = require('../models/CharacterModel');

module.exports = [
    new Character(
        uuid(),
        "Alleria Windrunner",
        "https://lendasdeazeroth.com.br/wp-content/uploads/2016/07/Alleria-Correventos-02.jpg",
        "BAlleria Windrunner ganhou notoriedade devido ao grande número de trolls que abateu para defender sua terra, Quel'Thalas, durante as Guerras dos Trolls. Com a ajuda da raça dos humanos, os High Elves finalmente prevaleceram contra os trolls."
    ),
    new Character(
        uuid(),
        "Elune",
        "https://images.nightcafe.studio/jobs/3Nx88ugLHBDBhJ3Ea3zl/3Nx88ugLHBDBhJ3Ea3zl--1--mkz55.jpg?tr=w-1600,c-at_max",
        "Fortemente associada com a cura, a paz e a tolerância, Elune tem sido reverenciada pelos Elfos da Noite e outras raças desde os tempos antigos. No entanto, a Mother Moon não é uma deusa que defende a paz a todo custo. Aliás, um dos aspectos Elune desde os tempos antigos é que quando um elfo Noturno morre em batalha, ele é colocado junto as estrelas. Muito antes do Great Sundering, uma ordem de pirests tinham se colocaram a serviço de Elune. A ordem é conhecida como Sisters of Elune, e como o nome indica, a participação nesta ordem está aberto apenas para mulheres. Seus cânticos de batalha podem chamar a ira Elune para ferir um inimigo, e suas orações podem curar até as feridas mais graves."
    ),
    new Character(
        uuid(),
        "Cairne Bloodhoof",
        "https://static.wikia.nocookie.net/wowpedia/images/d/dc/Cairne_Mercenaries_3.jpg",
        "Cairne Bloodhoof é um bravo guerreiro e inteligente líder de seu antigo povo. Um poderoso guerreiro, Cairne é considerado como uma das criaturas vivas mais perigosas do mundo. Apesar de seu aspecto bruto ele tem uma alma gentil e bondosa que pede apenas por paz e tranquilidade.Apesar de estar enfraquecido pela força do tempo, Cairne ainda possui grande força e valor. Esse gigante de grande coração sabe que seu povo está em grande perigo de exterminação pelos centauros. No entanto, ele nunca perdeu as esperanças de um dia encontrar um caminho que lidere seu povo para uma nova terra onde eles possam construir suas casas e viverem em paz. Antes de fundar Thunderbluff, Cairne vivia perto das divisas do Great Sea em Barrens."
    ),
    new Character(
        uuid(),
        "Lich King",
        "https://cdn.tecmasters.com.br/wp-content/uploads/2022/09/wow-lich-king-classic-1024x576.jpg",
        "O primeiro Lich King foi Ner'zhul, um orc shamanico que primeiramente iria servir a Burning Legion, fez um pacto com Kil'jaeden, mas previu que seu povo seria escravizado e recusou servir Kil'jaeden seguida. Comandou os orcs atrávez do Dark Portal na Segunda Guerra contra os humanos e foi responsavel pela ruína de Draenor. O Segundo Lich King foi Arthas Menethil, filho do rei de Lordaeron. Sua obsessão em salvar seu povo acabou por corrompe-lo, se tornando um Death Knight. Buscando por poder se dirigiu ao Frozen Throne onde estava o espírito de Ner'zhul congelado. o terceiro e atual Lich King é Bolvar Fordragon, ex-regente de Stormwind. Bolvar optou por manter a Scourge silenciosa e sem causar danos a Azeroth."
    ),
    new Character(
        uuid(),
        "Magtheridon",
        "https://static.wikia.nocookie.net/wowpedia/images/e/ed/Magtheridon_unleashed_TCG.jpg",
        "Magtheridon está sendo aprisionado em Hellfire Keep, localizado em Outland. Antes disso era normalmente aceito que ele tinha sido assassinado por Illidan e suas forças. \n No entanto, recentemente foi descoberto que após sua destruição, Magtheridon foi preso em um local criado para ele em Hellfire Citadel. Seu sangue está sendo usado na criação de Fel Orcs para Illidan Stormrage. Seus carcereiros são principalmente Orcs. Mesmo que ele não seja um aliado de Illidan, ele ainda é um membro da Burning Legion, e precisa ser destruído!"
    ),
    new Character(
        uuid(),
        "Thrall",
        "https://criticalhits.com.br/wp-content/uploads/2019/05/Thrall.jpg",
        "Escravo. Gladiador. Shaman. Warchief. O enigmático orc conhecido como Thrall foi todos estes. Criado desde a infância por cruéis mestres humanos que queriam moldá-lo no peão perfeito, Thrall foi guiado pela selvageria em seu coração e pelo intelecto para procurar o destino que ele apenas estava começando a entender - ao quebrar seus laços e redescobrir as antigas tradições de seu povo. Agora o tumultuoso conto da jornada de sua vida - uma saga de honra, raiva e esperança - pode finalmente ser contada."
    ),
    new Character(
        uuid(),
        "Fandral Staghelm",
        "https://static.wikia.nocookie.net/wowpedia/images/5/50/Fandral_Staghelm_HS.jpg",
        "Quando o Arquidruida Malfurion Stormrage entrou em um misterioso coma, o Arquidruida Fandral Staghelm se tornou o líder de todos os druidas em Azeroth. Seu primeiro ato foi convencer o resto do Círculo Cenariano a plantar a segunda World Tree, Teldrassil. Ele argumentou que Teldrassil restabeleceria a imortalidade dos elfos noturnos que foi perdida durante a Terceira Guerra. Mas não adiantou, pois esta árvore não teve a bênção dos grandes aspectos."
    ),
    new Character(
        uuid(),
        "Anasterian Sunstrider",
        "https://i.imgur.com/71nTXsW.jpg",
        "Um descendente de Dath'Remar Sunstrider, o Rei Anasterian comandou os High Elves durante o fim da Troll Wars , quando a derrota parecia inevitável. Em grande desvantagem numérica, os elfos estavam perdendo terreno, e as perspectivas pioravam a cada dia com cada vez mais vítimas. Mesmo as suas magias mais poderosas eram de pouca utilidade."
    ),
    new Character(
        uuid(),
        "Anduin Lothar",
        "https://static.wikia.nocookie.net/wowpedia/images/6/62/Lothar_HS.jpg",
        "Sir Anduin Lothar, o leão de Azeroth, foi o último remanescente da linhagem dos Arathi, um cavaleiro do reino de Azeroth(Que mais tarde se chamaria Reino de Stormwind) durante a Primeira Guerra, e supremo comandando do exército da Aliança de Lordaeron durante a Segunda Guerra. Morreu em combate em Blackrock Mountain contra o Warchief Orgrim Domhammer pouco antes do final da Segunda Guerra e o fechamendo do Dark Portal. Considerado um dos maiores guerreiros de todos os tempos. King Varian Wrynn nomeou seu filho em sua homenagem"
    ),
]