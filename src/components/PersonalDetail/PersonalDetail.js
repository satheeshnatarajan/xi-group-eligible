import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const PersonalDetail = ({ onChange }) => {
  return (
    <Paper>
      <Box p={3} m={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div>
              <TextField
                id="studentName"
                label="Student Name"
                variant="outlined"
                onChange={(e) => onChange('studentName', e.target.value)}
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                id="fatherName"
                label="Father's Name"
                variant="outlined"
                onChange={(e) => onChange('fatherName', e.target.value)}
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                id="motherName"
                label="Mother's Name"
                variant="outlined"
                onChange={(e) => onChange('motherName', e.target.value)}
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                id="mobileNo"
                type="tel"
                label="Mobile No."
                variant="outlined"
                onChange={(e) => onChange('mobileNo', e.target.value)}
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                id="whatsAppNumber"
                label="WhatsApp Number"
                variant="outlined"
                onChange={(e) => onChange('whatsAppNo', e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <TextField
                id="previousSchool"
                label="Previous School"
                variant="outlined"
                onChange={(e) => onChange('previousSchool', e.target.value)}
                fullWidth
                required
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <TextField
                id="applicationDate"
                label="Application Date"
                type="datetime-local"
                variant="outlined"
                onChange={(e) => onChange('applicationDate', e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                id="applicationNo"
                label="Application No."
                variant="outlined"
                onChange={(e) => onChange('applicationNo', e.target.value)}
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                id="entranceDate"
                label="Entrance Date"
                type="datetime-local"
                variant="outlined"
                onChange={(e) => onChange('entranceDate', e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                onChange={(e) => onChange('address', e.target.value)}
                multiline
                rows={4}
                fullWidth
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

PersonalDetail.propTypes = {
  onChange: PropTypes.func,
};

export default PersonalDetail;
