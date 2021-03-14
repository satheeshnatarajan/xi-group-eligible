import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from '../MyDocument/MyDocument';

import PersonalDetail from '../PersonalDetail/PersonalDetail';
import Marks from '../Marks/Marks';
import Remarks from '../Remarks/Remarks';

const styles = (theme) => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
      textDecoration: 'none',
    },
  },
});

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      download: false,
      data: {},
      // "download":true,"data":{"studentName":"Satheesh","fatherName":"Natarajan","motherName":"Kamala","mobileNo":"+919698480404","address":"Plot no 123 Nizam colony","whatsAppNo":"+919698480404","previousSchool":"Sri Bharathi","applicationDate":"2021-03-14T20:26","applicationNo":"12345","entranceDate":"2021-03-21T20:26","marks":{"concession":25,"language":5,"maths":5,"science":10,"total":20,"courses":[{"code":"MPCB","rule":{"maths":10,"science":15},"eligible":true},{"code":"MPCCS","rule":{"maths":8,"science":12}}]},"remarks":"Test"}    },
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ download: false });
    this.validation();
  };

  validation() {
    const { data } = this.state;
    if (
      data &&
      data.studentName &&
      data.fatherName &&
      data.motherName &&
      data.mobileNo &&
      data.previousSchool &&
      data.applicationDate &&
      data.applicationNo &&
      data.entranceDate &&
      data.marks
    ) {
      this.setState({ download: true });
    }
  }

  onChange = (key, value) => {
    const data = { ...this.state.data, [key]: value };
    this.setState({ data });
  };

  render() {
    const { classes } = this.props;
    return (
      <main>
        <Container>
          <Paper>
            <Box p={3} m={2}>
              <Typography variant="h4" align="center">
                XI Registration Particulars
              </Typography>
            </Box>
          </Paper>
          <form className={classes.form} onSubmit={this.onSubmit}>
            <PersonalDetail onChange={this.onChange} />

            <Marks onChange={this.onChange} />

            <Remarks onChange={this.onChange} />

            <Grid container spacing={4} justify="flex-end">
              <Grid item className={classes.buttons}>
                {this.state.download && (
                  <PDFDownloadLink
                    document={<MyDocument data={this.state.data} />}
                    fileName={`${this.state.data.studentName}.pdf`}
                  >
                    {({ blob, url, loading, error }) => {                    
                      return (
                        loading ? (
                          <Button variant="contained" color="default" disabled>
                            Loading document...
                          </Button>
                        ) : (
                          <Button variant="contained" color="primary">
                            Download
                          </Button>
                        )
                      )
                    }}                      
                  </PDFDownloadLink>
                )}
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </main>
    );
  }
}

RegistrationForm.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(RegistrationForm);
