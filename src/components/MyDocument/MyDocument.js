import React from 'react';
import PropTypes from 'prop-types';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  page: {
    fontSize: '12',
  },
  table: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    padding: 10,
  },
  section: {
    flexGrow: 1,
  },
  chip: {
    padding: '3',
    borderRadius: '5',
    color: '#e0e0e0',
  },
  eligible: {
    color: '#3f51b5',
  },
  label: {
    padding: '4 2'
  },
});

// Create Document Component
const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        <Text style={styles.center}>XI Registration Particular</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.section}>
          <Text style={styles.label}>Student Name: {data.studentName}</Text>
          <Text style={styles.label}>Father&apos;s Name: {data.fatherName}</Text>
          <Text style={styles.label}>Mother&apos;s Name: {data.motherName}</Text>
          <Text style={styles.label}>Mobile no.: {data.mobileNo}</Text>
          <Text style={styles.label}>Whatsapp no.: {data.whatsAppNo}</Text>
          <Text style={styles.label}>Previous School: {data.previousSchool}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Application Date: {new Date(data.applicationDate).toLocaleString()}</Text>
          <Text style={styles.label}>Application No.: {data.applicationNo}</Text>
          <Text style={styles.label}>Entrance Date: {new Date(data.entranceDate).toLocaleString()}</Text>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.label}>{data.address}</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.section}>
          <Text style={styles.label}>Language: {data.marks.language}</Text>
          <Text style={styles.label}>Maths: {data.marks.maths}</Text>
          <Text style={styles.label}>Science: {data.marks.science}</Text>
          <Text style={styles.label}>Total: {data.marks.total}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Concession: {data.marks.concession}%</Text>
          <Text style={styles.label}>Group Eligible:</Text>
          {data.marks.courses.map((course) => {
            const style = course.eligible ? [styles.chip, styles.eligible] : [styles.chip];
            return (
              <Text key={course.code} style={style}>
                {course.code}
              </Text>
            );
          })}
        </View>
      </View>
      <View style={styles.table}>
        <Text style={styles.label}>Remarks:</Text>
        <Text style={styles.label}>{data.remarks}</Text>
      </View>
    </Page>
  </Document>
);

MyDocument.propTypes = {
  data: PropTypes.object,
};

export default MyDocument;
