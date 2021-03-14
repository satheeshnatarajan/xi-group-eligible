import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const Remarks = ({ onChange }) => {
  return (
    <Paper>
      <Box p={3} m={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div>
              <TextField
                id="remarks"
                label="Remarks"
                variant="outlined"
                onChange={(e) => onChange('remarks', e.target.value)}
                multiline
                rows={4}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

Remarks.propTypes = {
  onChange: PropTypes.func,
};

export default Remarks;
