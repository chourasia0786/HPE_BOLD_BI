import { Box, Button } from 'grommet';
import { View } from 'grommet-icons';
import { useNavigate } from 'react-router-dom';
const HoverButton = (props) => {
  const navigate = useNavigate();
  return (
    <Box
      className='contentclass'
      align='center'
      justify='center'
      height='50px'
      width='50px'
      style={{ backgroundColor: '#01A982', borderRadius: '25px' }}
    >
      <Button
        style={{
          height: '100%',
          width: '100%',
          borderRadius: '25px',
        }}
        onClick={() => {
          navigate(`/dashboard/Solution/${props.selected}/${props.title}`);
        }}
      >
        <Box align='center' justify='center'>
          <View color='white' size='xlarge' />
        </Box>
      </Button>
    </Box>
  );
};

export default HoverButton;
