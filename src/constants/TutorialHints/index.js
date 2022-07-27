import { TutorialHint } from '../../models/TutorialHint'

const tutorialHints = []

tutorialHints.push(
    new TutorialHint(
        'Bienvenido al tutorial!',
        `Acá aprenderás como jugar Dix Mille.\nTen en cuenta que no se te permitirá tocar los botones del juego.\nPuedes salir del tutorial en cualquier momento tocando la cruz roja arriba a la izquierda.`,
        '50%',
        '2.5%',
    )
)
tutorialHints.push(
    new TutorialHint(
        `Puntuación: `,
        `Acá se mostrará tu puntuación total.\nSi hay mas de un jugador el jugador actual se mostrará más grande y en un azul mas oscuro.`,
        '30%',
        null,
    )
)
tutorialHints.push(
    new TutorialHint(
        'Puntuación tirada:',
        'Esta será tu puntuación de la tirada actual.',
        '5%',
        null,
    )
)
tutorialHints.push(
    new TutorialHint(
        `Tirar dados`,
        `Con este botón tiraras los dados.`,
        null,
        '15%',
    )
)
tutorialHints.push(
    new TutorialHint(
        `Dados`,
        `Empezarás con 6 dados y acá aparecerán los dados que sacaste en tu tirada.`,
        '13%',
        null,
    )
)
tutorialHints.push(
    new TutorialHint(
        `Separados`,
        `Acá se verán los dados que suman puntos.\nEstos serán separados de los 6 dados y no los podrás tirar de nuevo hasta que no tengas más dados que tirar.`,
        '30%',
        null,
    )
)
tutorialHints.push(
    new TutorialHint(
        `Tabla de puntos`,
        `No sabes cuantos puntos sacaste? No hay problema, el juego los sumara por ti y los acumulará en la puntuación de la tirada. Si tienes dudas también puedes consultar la tabla de puntos en "Reglas"`,
        '30%',
        null,
    )
)
tutorialHints.push(
    new TutorialHint(
        '"Entrar al juego"',
        'Para "entrar al juego" y desbloquear la opción de pasar de turno necesitas obtener al menos 750 puntos en un turno.',
        '30%',
        null,
    )
)
tutorialHints.push(
    new TutorialHint(
        'Pasar',
        'Al obtener 750 puntos o más o estar en el juego se habilitará la opción de "Pasar" junto a la de "Tirar dados".\nEsta opción sumará los puntos que acumulaste en la tirada a los totales y finalizara tu turno.',
        null,
        '15%',
    )
)
tutorialHints.push(
    new TutorialHint(
        'Cuidado!',
        'Si acabás de sacar 750 puntos o mas en tu turno y decidís tirar de nuevo puede que no saques nada y termine tu turno sin haber entrado al juego. Lo mas seguro es pasar!',
        '5%',
        null,
    )
)
tutorialHints.push(
    new TutorialHint(
        'Objetivo',
        'El objetivo es llegar a los 10.000 puntos exactos.\nSi te pasas de los 10.000 puntos no se sumara nada a tu puntuación total y tendrás que intentarlo de nuevo.',
        '30%',
        '30%',
    )
)
tutorialHints.push(
    new TutorialHint(
        'Si hay mas de un jugador',
        'Todos los jugadores tendrán la posibilidad de llegar a 10.000 para aparecer en el tablero final.',
        '30%',
        '30%',
    )
)
tutorialHints.push(
    new TutorialHint(
        'Felicitaciones!',
        'Eso es todo! Puedes volver a la página principal o jugar la partida.',
        '30%',
        '30%',
    )
)

export default tutorialHints