import {StyleSheet} from "@react-pdf/renderer"


 const styles = StyleSheet.create({
      heading: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottom: '1px solid #000',
        width: '100%',
        marginTop: "40px"
      },
      fieldContainer: {
        display: 'flex',
        flexDirection:'row',
        with: "100%",
      },
      fieldLabel: {
        fontWeight: 'bold',
        fontSize: '14px',
        padding: 5,
        textAlign: 'left',
        width: '200px',
        borderTop: '1px solid #000',
        borderLeft: '1px solid #000',
        borderRight: '1px solid #000',
      },
      fieldValue: {
        flex: 1,
        fontSize: '14px',
        padding: 5,
        textAlign: 'left',
        borderTop: '1px solid #000',
        borderRight: '1px solid #000',
        width: '100%',
      },
      lastLabel:{
        fontWeight: 'bold',
        fontSize: '14px',
        padding: 5,
        textAlign: 'left',
        width: '200px',
        borderTop: '1px solid #000',
        borderLeft: '1px solid #000',
        borderRight: '1px solid #000',
        borderBottom: '1px solid #000',
      },
      lastValue:{
        flex: 1,
        fontSize: '14px',
        padding: 5,
        textAlign: 'left',
        borderTop: '1px solid #000',
        borderRight: '1px solid #000',
        borderBottom: '1px solid #000',
        width: '100%',
      },
    page:{
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 20,
    },
    section_1:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: '10px',
        marginBottom: '10px',
    },
    section_2:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    title:{
        fontSize: 20,
        textAlign: 'center',
    },
    image:{
        height: "150px",
        width: "110px",
    },
    infoCard:{
        flex: 1,
        padding: "10px",
    },
    info:{
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoPatient: {
        marginLeft: "15px",
        fontSize: "14px",
        with: "100%"
    }

})

export default styles