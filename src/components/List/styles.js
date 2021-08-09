import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px', height: '85vh', overflow: 'hidden', display: 'flex', flexDirection: 'column'
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    flex: '1', overflow: 'auto',
  },
}));