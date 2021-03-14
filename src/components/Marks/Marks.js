import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { CONCESSION, COURSES } from '../../constant/constant';

const useStyles = makeStyles((theme) => ({
  courses: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  concession: {
    marginBottom: theme.spacing(6),
  },
  eligibility: {
    paddingLeft: theme.spacing(2),
  },
}));

const Marks = ({ onChange }) => {
  const classes = useStyles();

  const [mark, setMark] = useState({
    language: '',
    maths: '',
    science: '',
  });
  const [total, setTotal] = useState(0);
  const [concession, setConcession] = useState(0);

  const isEligible = (rule) => {
    return mark.maths >= rule.maths && mark.science >= rule.science;
  };

  const calculateConcession = (subMark, total = 0) => {
    const eligibleConcession = CONCESSION.find((x) => total >= x.total);
    setConcession(eligibleConcession.percent);
    onChange('marks', {
      ...subMark,
      total,
      concession: eligibleConcession.percent,
      courses: COURSES.map((course) => ({ ...course, eligible: isEligible(course.rule) })),
    });
  };

  const calculateTotal = (subMark) => {
    const total = Object.values(subMark).reduce((a, b) => a + b, 0);
    setTotal(total);
    calculateConcession(subMark, total);
  };

  const onMarkChange = (value, subject) => {
    const markValue = parseInt(value, 10);
    const subMark = { ...mark, [subject]: !isNaN(markValue) ? markValue : 0 };
    setMark(subMark);
    calculateTotal(subMark);
  };

  return (
    <Paper>
      <Box p={3} m={2}>
        <Typography variant="h4" align="center">
          Marks
        </Typography>

        <Grid container spacing={8}>
          <Grid item xs={12} sm={4}>
            <div>
              <TextField
                id="language"
                label="Language"
                type="number"
                value={mark.language}
                onChange={(e) => onMarkChange(e.target.value, 'language')}
                variant="outlined"
                InputProps={{
                  inputProps: {
                    max: 50,
                    min: 0,
                  },
                }}
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                id="maths"
                label="Maths"
                type="number"
                value={mark.maths}
                onChange={(e) => onMarkChange(e.target.value, 'maths')}
                variant="outlined"
                InputProps={{
                  inputProps: {
                    max: 50,
                    min: 0,
                  },
                }}
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                id="science"
                label="Science"
                type="number"
                value={mark.science}
                onChange={(e) => onMarkChange(e.target.value, 'science')}
                variant="outlined"
                InputProps={{
                  inputProps: {
                    max: 50,
                    min: 0,
                  },
                }}
                fullWidth
                required
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className={classes.concession}>
              <TextField
                id="total"
                label="Total"
                type="number"
                value={total}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                disabled
              />
              <TextField
                id="concession"
                label="Concession %"
                value={concession}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                disabled
              />
            </div>
            <div className={classes.eligibility}>
              <Typography variant="h5" gutterBottom>
                Group Eligibility
              </Typography>
              <div className={classes.courses}>
                {COURSES.map((course) => {
                  const { code, rule } = course;
                  const color = isEligible(rule) ? 'primary' : 'default';
                  return <Chip key={code} label={code} color={color} />;
                })}
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

Marks.propTypes = {
  onChange: PropTypes.func,
};

export default Marks;
