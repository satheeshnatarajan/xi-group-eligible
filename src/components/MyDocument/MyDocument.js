import React from 'react';
import PropTypes from 'prop-types';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Chip from '@material-ui/core/Chip';

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
          <Text>Student Name: {data.studentName}</Text>
          <Text>Father&apos;s Name: {data.fatherName}</Text>
          <Text>Mother&apos;s Name: {data.motherName}</Text>
          <Text>Mobile no.: {data.mobileNo}</Text>
          <Text>Whatsapp no.: {data.whatsAppNo}</Text>
          <Text>Previous School: {data.previousSchool}</Text>
        </View>
        <View style={styles.section}>
          <Text>Application Date: {new Date(data.applicationDate).toLocaleString()}</Text>
          <Text>Application No.: {data.applicationNo}</Text>
          <Text>Entrance Date: {new Date(data.entranceDate).toLocaleString()}</Text>
          <Text>Address:</Text>
          <Text>{data.address}</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.section}>
          <Text>Language: {data.marks.language}</Text>
          <Text>Maths: {data.marks.maths}</Text>
          <Text>Science: {data.marks.science}</Text>
          <Text>Total: {data.marks.total}</Text>
        </View>
        <View style={styles.section}>
          <Text>Concession: {data.marks.concession}</Text>
          <Text>Group Eligible:</Text>
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
      <View>
        <Text>Remarks:</Text>
        <Text>{data.remarks}</Text>
      </View>
    </Page>
  </Document>
);

MyDocument.propTypes = {
  data: PropTypes.object,
};

export default MyDocument;
