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
    padding: 30,
  },
  table: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  section: {
    flexGrow: 1,
  },
  chip: {
    padding: '3',
    color: '#e0e0e0',
  },
  eligible: {
    color: '#3f51b5',
  },
  formControl: {
    display: 'flex',
    flexDirection: 'row',
  },
  label: {
    padding: '8 4',
    // borderWidth: '1',
  },
  span2: {
    flexGrow: 4,
  },
});

// Create Document Component
const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        <Text style={[styles.label, styles.center]}>XI Registration Particular</Text>
      </View>
      <View style={styles.table}>
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
        <View style={styles.section}>
          <Text style={styles.label}>Application Date: </Text>
          <Text style={styles.label}>Application No: </Text>
          <Text style={styles.label}>Entrance Date: </Text>
          <Text style={styles.label}>Address:</Text>
          <Text style={[styles.label, styles.span2]}>{data.address}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>{new Date(data.applicationDate).toLocaleString()}</Text>
          <Text style={styles.label}>{data.applicationNo}</Text>
          <Text style={styles.label}>{new Date(data.applicationDate).toLocaleString()}</Text>
        </View>
      </View>

      <View style={styles.table}>
        <Text style={[styles.label, styles.center]}>Marks</Text>
      </View>

      <View style={styles.table}>
        <View style={styles.section}>
          <Text style={styles.label}>Language: </Text>
          <Text style={styles.label}>Maths: </Text>
          <Text style={styles.label}>Science: </Text>
          <Text style={styles.label}>Total: </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>{data.marks.language}</Text>
          <Text style={styles.label}>{data.marks.maths}</Text>
          <Text style={styles.label}>{data.marks.science}</Text>
          <Text style={styles.label}>{data.marks.total}</Text>
        </View>
        <View style={[styles.section, styles.span2]}>
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
        <View style={styles.section}>
          <Text style={[styles.label]}>Remarks:</Text>
          <Text style={styles.label}>{data.remarks}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

MyDocument.propTypes = {
  data: PropTypes.object,
};

export default MyDocument;
