import { Image, ScrollView, Text, View } from 'react-native'
import { styles } from './styles'

const RulesScreen = () => {

    const dicesUrl = '../../assets/images/'

    const dicesImages = [
        require(dicesUrl + '1.png'),
        require(dicesUrl + '2.png'),
        require(dicesUrl + '3.png'),
        require(dicesUrl + '4.png'),
        require(dicesUrl + '5.png'),
        require(dicesUrl + '6.png')
    ]

    const rules = [
        'El primero en llegar a 10.000 puntos exactos gana.',
        'Para "ingresar" al juego necesitas sacar 750 puntos en una ronda.',
        'Después de ingresar al juego, al hacer una tirada y que hagas más de 0 puntos podés elegir si querés continuar tirando los dados o plantarte y sumar los puntos obtenidos.',
        'Si elegiste seguir tirando los dados y no conseguís sumar puntos, los puntos que tenias pasan a ser 0 y tu turno termina.',
        'Los dados que contribuyeron a sumar puntos son separados en cada tirada hasta que se separen los cinco dados, en ese caso se vuelven a lanzar todos.'
    ]

    const cases = [
        {
            case: 'Cinco unos',
            dados: [1, 1, 1, 1, 1],
            puntos: 'Ganás Automaticamente'
        },
        {
            case: 'Cuatro unos',
            dados: [1, 1, 1, 1],
            puntos: '400'
        },
        {
            case: 'Tres unos',
            dados: [1, 1, 1],
            puntos: '1.000'
        },
        {
            case: 'Dos unos',
            dados: [1, 1],
            puntos: '200'
        },
        {
            case: 'Un uno',
            dados: [1],
            puntos: '100'
        },
        {
            case: 'Cinco cincos',
            dados: [5, 5, 5, 5, 5],
            puntos: '250'
        },
        {
            case: 'Cuatro cincos',
            dados: [5, 5, 5, 5],
            puntos: '200'
        },
        {
            case: 'Dos cincos',
            dados: [5, 5],
            puntos: '100'
        },
        {
            case: 'Un cinco',
            dados: [5],
            puntos: '50'
        },
        {
            case: 'Tres de cualquier numero',
            dados: [2, 2, 2],
            puntos: 'Numero del dado * 100'
        },
        {
            case: 'Escalera ( 1 al 5 | 2 al 6 )',
            dados: [1, 2, 3, 4, 5],
            puntos: '750'
        },
    ]

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.sectionObj}>
                    <Text style={styles.sectionTitle}>Objetivo:</Text>
                    <View style={styles.sectionContent}>
                        <Text style={styles.sectionText}>Llegar a los 10.000 puntos exactos</Text>
                    </View>
                </View>
                <View style={styles.sectionRules}>
                    <Text style={styles.sectionTitle}>Reglas:</Text>
                    <View style={styles.sectionContent}>
                        {
                            rules.map((item, id) => <Text key={id} style={styles.sectionText}> {id + 1} - {item}</Text >)
                        }
                    </View>
                </View>
                <View style={styles.sectionTable}>
                    <Text style={styles.sectionTitle}>Tabla de Puntos:</Text>
                    <View style={styles.sectionContent}>
                        <View style={styles.row}>
                            <View style={styles.col}>
                                <Text style={styles.tableTitle}>Caso</Text>
                            </View>
                            <View style={styles.col}>
                                <Text style={styles.tableTitle}>Dados</Text>
                            </View>
                            <View style={styles.col}>
                                <Text style={styles.tableTitle}>Puntos</Text>
                            </View>
                        </View>
                        {
                            cases.map((item, id) => (
                                <View key={id} style={styles.row}>
                                    <View style={styles.col}>
                                        <Text style={styles.tableText}>{item.case}</Text>
                                    </View>
                                    <View style={styles.col}>
                                        {
                                            item.dados.map((dado, id) => <Image key={id} source={dicesImages[dado - 1]} style={{ width: 25, height: 25, margin: 5 }} />)
                                        }
                                    </View>
                                    <View style={styles.col}>
                                        <Text style={styles.tableText}>{item.puntos}</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default RulesScreen