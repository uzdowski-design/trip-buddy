import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles'


// simple header with title and search component
const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng })
  }

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar} >
        <Box display="flex" flexDirection="row" alignItems="center">
          <img src={process.env.PUBLIC_URL + '/trip-buddy-logo.svg'} height="42" style={{ marginRight: '5px' }} alt="trip buddy logo" />
          <Typography variant="h5" className={classes.title}>
            Trip Buddy
          </Typography>
        </Box>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Header;