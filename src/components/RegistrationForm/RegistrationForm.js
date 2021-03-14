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
});

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      download: false,
      data: {},
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
  };

  validation(data) {
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
    this.validation(data);
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
              <Grid item lg={12}>
                {this.state.download && (
                  <PDFDownloadLink
                    document={<MyDocument data={this.state.data} />}
                    fileName={`${this.state.data.studentName}-${new Date().toLocaleDateString()}`}
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? (
                        'Loading document...'
                      ) : (
                        <Button type="submit" variant="contained" color="primary">
                          Download
                        </Button>
                      )
                    }
                  </PDFDownloadLink>
                )}
                {!this.state.download && (
                  <Button type="submit" variant="contained" color="primary">
                    Download
                  </Button>
                )}
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
