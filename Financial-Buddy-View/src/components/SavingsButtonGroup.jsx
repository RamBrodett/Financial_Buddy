import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SavingsIcon from '@mui/icons-material/Savings';
import AddCardIcon from '@mui/icons-material/AddCard';
import PropTypes from 'prop-types';

BasicButtonGroup.propTypes ={
  showForms: PropTypes.func
}

export default function BasicButtonGroup({showForms}) {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group"
    sx={{
      height: '6.5vh',
      borderRadius: '20px',
      '& .MuiButtonGroup-grouped:not(:last-of-type)': {
        borderRight: '1px solid #334257',
      },
      '& .MuiButtonGroup-grouped':{
        fontWeight: 'Bold',
        fontSize:'1.2vw'
      }
    }}>
      <Button startIcon={<AddCardIcon style={{fontSize:'1.5vw'}}/>} 
        style={{ 
          backgroundColor:'#f8fafc',
          color:'#334257', 
          width:'20vw',
          borderTopLeftRadius:'20px',
          borderBottomLeftRadius:'20px'}}
          onClick={() => showForms(1)}>
          Add Savings
          </Button>
      <Button startIcon={<SavingsIcon style={{fontSize:'1.5vw'}}/>} 
        style={{ 
          backgroundColor:'#f8fafc', 
          color:'#334257', 
          width:'20vw',
          borderTopRightRadius:'20px',
          borderBottomRightRadius:'20px' }}
          onClick={() => showForms(2)}>
          Add Goals
          </Button>
    </ButtonGroup>
  );
}

