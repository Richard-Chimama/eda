import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import styles from "./styled";
import placeHolderImg from "../../assets/user-img.png";
import API from "../../API";
import { useQuery } from "@apollo/client";

interface Props {
  data: any;
  hospital: any;
}

const PrintableFiche: React.FC<Props> = ({ data, hospital }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <View style={styles.heading}>
            <Text>FICHE DE CONSULTATION</Text>
            <Text style={{ fontSize: "14px", marginTop:"8px" }}>
              {hospital.name.toUpperCase()}/{hospital.address},{hospital.city}
            </Text>
          </View>
        </View>
        <View style={styles.section_1}>
          <View>
            <Image
              style={styles.image}
              src={
                data.patient.avatar !== null
                  ? data.patient.avatar
                  : placeHolderImg
              }
            />
          </View>

          <View style={styles.infoPatient}>
            <View style={styles.info}>
              <Text>Nom:</Text>
              <Text>
                {data.patient.first_name} {data.patient.middle_name}{" "}
                {data.patient.lastname_name}
              </Text>
            </View>
            <View style={styles.info}>
              <Text>Date de naissance:</Text>
              <Text>
                {new Date(data.patient.date_of_birth).toLocaleDateString()}
              </Text>
            </View>
            <View style={styles.info}>
              <Text>ID card:</Text>
              <Text>{data.patient.id_card}</Text>
            </View>
            <View style={styles.info}>
              <Text>Sexe:</Text>
              <Text>{data.patient.gender}</Text>
            </View>
            <View style={styles.info}>
              <Text>Contact:</Text>
              <Text>{data.patient.patient_phone_number}</Text>
            </View>
            <View style={styles.info}>
              <Text>Adress:</Text>
              <Text>{data.patient.street_address}</Text>
            </View>
            <View style={styles.info}>
              <Text>Commune:</Text>
              <Text>{data.patient.area}</Text>
            </View>
          </View>
        </View>
        <View style={styles.section_2}>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Allergie:</Text>
            <Text style={styles.fieldValue}>{data.allergie}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Atcd_chirurgicaux:</Text>
            <Text style={styles.fieldValue}>{data.atcd_chirurgicaux}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Atcd_medicaux:</Text>
            <Text style={styles.fieldValue}>{data.atcd_medicaux}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>gs:</Text>
            <Text style={styles.fieldValue}>{data.gs}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>intoxication:</Text>
            <Text style={styles.fieldValue}>{data.intoxication}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>poids:</Text>
            <Text style={styles.fieldValue}>{data.poids}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>pouls:</Text>
            <Text style={styles.fieldValue}>{data.pouls}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>rh:</Text>
            <Text style={styles.fieldValue}>{data.rh}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>ta:</Text>
            <Text style={styles.fieldValue}>{data.ta}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>taille:</Text>
            <Text style={styles.fieldValue}>{data.taille}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>temperature:</Text>
            <Text style={styles.fieldValue}>{data.temperature}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>observations:</Text>
            <Text style={styles.fieldValue}>{data.observations}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.lastLabel}>prescription:</Text>
            <Text style={styles.lastValue}>{data.prescription}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PrintableFiche;
