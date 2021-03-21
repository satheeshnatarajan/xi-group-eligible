import React from 'react';
import PropTypes from 'prop-types';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    fontSize: '12',
    padding: 40,
  },
  table: {
    display: 'flex',
    flexDirection: 'row',
  },
  tableCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    flexGrow: 1,
  },
  center: {
    textAlign: 'center',
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderWidth: 1,
  },
  chip: {
    padding: '3',
    color: '#e0e0e0',
  },
  eligible: {
    color: '#ffffff',
    backgroundColor: '#3f51b5',
  },
  label: {
    padding: '8 4',
  },
  registration: {
    backgroundColor: '#f8bbd0',
  },
  marks: {
    backgroundColor: '#b3e5fc',
  },
  groupElg: {
    backgroundColor: '#d7ccc8',
  },
  remarks: {
    backgroundColor: '#ffe0b2',
  },
  language: {
    backgroundColor: '#ce93d8',
  },
  maths: {
    backgroundColor: '#a5d6a7',
  },
  science: {
    backgroundColor: '#cfd8dc',
  },
  total: {
    backgroundColor: '#eceff1',
  },
  consess: {
    backgroundColor: '#90caf9',
  },
  remarksContent: {
    minHeight: 100
  }
});

// Create Document Component
const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={[styles.table, styles.border]}>
        <View style={[styles.tableCol]}>
          <Text style={[styles.label, styles.center]}>
            MOUNT ZION MATRICULATION HIGHER SECONDARY SCHOOL
          </Text>
          <Text style={[styles.label, styles.center]}>ACADEMIC YEAR 2021-2022</Text>
        </View>
      </View>
      <View style={[styles.table, styles.border, styles.registration]}>
        <Text style={[styles.label, styles.center]}>XI Registration Particular</Text>
      </View>
      <View style={styles.table}>
        <View style={[styles.table, styles.border]}>
          <View style={styles.section}>
            <Text style={styles.label}>Student Name: </Text>
            <Text style={styles.label}>Father&apos;s Name: </Text>
            <Text style={styles.label}>Mother&apos;s Name: </Text>
            <Text style={styles.label}>Mobile no.: </Text>
            <Text style={styles.label}>Whatsapp no.: </Text>
            <Text style={styles.label}>Previous School: </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>{data.studentName}</Text>
            <Text style={styles.label}>{data.fatherName}</Text>
            <Text style={styles.label}>{data.motherName}</Text>
            <Text style={styles.label}>{data.mobileNo}</Text>
            <Text style={styles.label}>{data.whatsAppNo}</Text>
            <Text style={styles.label}>{data.previousSchool}</Text>
          </View>
        </View>
        <View style={[styles.tableCol, styles.border, styles.section]}>
          <View style={styles.table}>
            <View>
              <Text style={styles.label}>Application Date: </Text>
              <Text style={styles.label}>Application No: </Text>
              <Text style={styles.label}>Entrance Date: </Text>
            </View>
            <View>
              <Text style={styles.label}>{new Date(data.applicationDate).toLocaleString()}</Text>
              <Text style={styles.label}>{data.applicationNo}</Text>
              <Text style={styles.label}>{new Date(data.applicationDate).toLocaleString()}</Text>
            </View>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.label}>{data.address}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.table, styles.border, styles.marks]}>
        <Text style={[styles.label, styles.center]}>Marks</Text>
      </View>
      <View style={styles.table}>
        <View style={[styles.table, styles.border]}>
          <View style={styles.section}>
            <Text style={[styles.label, styles.language]}>Language: </Text>
            <Text style={[styles.label, styles.maths]}>Maths: </Text>
            <Text style={[styles.label, styles.science]}>Science: </Text>
            <Text style={[styles.label, styles.total]}>Total: </Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.label, styles.language]}>{data.marks.language}</Text>
            <Text style={[styles.label, styles.maths]}>{data.marks.maths}</Text>
            <Text style={[styles.label, styles.science]}>{data.marks.science}</Text>
            <Text style={[styles.label, styles.total]}>{data.marks.total}</Text>
          </View>
        </View>
        <View style={[styles.tableCol, styles.section]}>
          <View style={styles.table}>
            <View style={[styles.table, styles.section, styles.border]}>
              <Text style={[styles.label, styles.section]}>Concession:</Text>
              <Text style={[styles.label, styles.section, styles.consess]}>
                {data.marks.concession}%
              </Text>
            </View>
          </View>
          <View style={[styles.table, styles.groupElg, styles.border, styles.flexCenter]}>
            <Text style={[styles.label]}>Group Eligibility</Text>
          </View>
          <View style={[styles.table, styles.border, styles.section]}>
            {data.marks.courses.map((course) => {
              const style = [styles.table, styles.section, styles.flexCenter];
              course.eligible ? style.push(styles.eligible) : '';
              return (
                <View key={course.code} style={style}>
                  <Text key={course.code} style={[styles.chip, styles.label]}>
                    {course.code}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <View style={[styles.table, styles.border, styles.remarks]}>
        <Text style={[styles.label, styles.center]}>Remarks</Text>
      </View>
      <View style={[styles.table, styles.border, styles.remarksContent]}>
        <Text style={styles.label}>{data.remarks}</Text>
      </View>
    </Page>
  </Document>
);

MyDocument.propTypes = {
  data: PropTypes.object,
};

export default MyDocument;
