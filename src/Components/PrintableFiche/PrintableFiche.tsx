import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    page:{
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    section:{
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    title:{
        fontSize: 20,
        textAlign: 'center',
    }
})

interface Props{
    data: any
}

const PrintableFiche: React.FC<Props> = ({data}) => {
  return (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <View>
                    <Image src={data.patient.avatar} />
                </View>

                <View>
                    <View>
                        <Text>Nom:</Text> 
                        <Text>{data.patient.first_name} {data.patient.middle_name} {data.patient.lastname_name}</Text>
                    </View>
                    <View>
                        <Text>Date de naissance:</Text>
                        <Text>{data.patient.date_of_birth}</Text>
                    </View>
                    <View>
                        <Text>ID card:</Text>
                        <Text>{data.patient.id_card}</Text>
                    </View>
                    <View>
                        <Text>Sexe:</Text>
                        <Text>{data.patient.gender}</Text>
                    </View>
                    

                </View>
            </View>
        </Page>
    </Document>
  )
}

export default PrintableFiche