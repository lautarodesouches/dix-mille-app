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
            case: '',
            dados: [],
            puntos: ''
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
                        <View style={styles.row}>
                            <View style={styles.col}>
                                <Text style={styles.tableText}>Cinco unos</Text>
                            </View>
                            <View style={styles.col}>
                                <Image source={dicesImages[0]} style={{ width: 20, height: 20, margin: 5 }} />
                                <Image source={dicesImages[0]} style={{ width: 20, height: 20, margin: 5 }} />
                                <Image source={dicesImages[0]} style={{ width: 20, height: 20, margin: 5 }} />
                                <Image source={dicesImages[0]} style={{ width: 20, height: 20, margin: 5 }} />
                                <Image source={dicesImages[0]} style={{ width: 20, height: 20, margin: 5 }} />
                            </View>
                            <View style={styles.col}>
                                <Text style={styles.tableText}>Ganás Automaticamente</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default RulesScreen