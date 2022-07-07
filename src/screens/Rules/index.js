import { Image, ScrollView, Text, View } from 'react-native'
import { BackButton, PrimaryButton } from '../../components'
import { CASE_TALBE, DICES_IMAGES, RULES } from '../../constants'
import { styles } from './styles'

const RulesScreen = ({ navigation }) => {

    const handleExit = () => navigation.goBack()

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <BackButton goBack={navigation.goBack} />
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Objetivo:</Text>
                    <View style={styles.sectionContent}>
                        <Text style={styles.sectionText}>Llegar a los 10.000 puntos exactos</Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Reglas:</Text>
                    <View style={styles.sectionContent}>
                        {
                            RULES.map((item, id) => <Text key={id} style={styles.sectionText}> {id + 1} - {item}</Text >)
                        }
                    </View>
                </View>
                <View style={styles.section}>
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
                            CASE_TALBE.map((item, id) => (
                                <View key={id} style={[styles.row, { backgroundColor: id % 2 !== 0 ? '#f1f1f1' : '#e1e1e1' }]}>
                                    <View style={styles.col}>
                                        <Text style={styles.tableText}>{item.case}</Text>
                                    </View>
                                    <View style={styles.col}>
                                        {
                                            item.dados.map((dado, id) => <Image key={id} source={DICES_IMAGES[dado - 1]} style={{ width: 25, height: 25, margin: 5 }} />)
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
                <View style={styles.section}>
                    <PrimaryButton
                        handlePress={handleExit}
                        textStyle={{ fontSize: 20 }}
                    >
                        Volver
                    </PrimaryButton>
                </View>
            </ScrollView>
        </View>
    )
}
export default RulesScreen