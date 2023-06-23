import { Box, Button } from 'grommet';
import { useLocation, useNavigate } from 'react-router-dom';
const LeftSideBarElement = (props) => {
  const Navigate = useNavigate();

  return (
    <Box
      width='100%'
      border='bottom'
      justify='center'
      style={{
        border: props.selected && 'bottom',
        borderColor: props.selected && '#01A982',
      }}
    >
      <Button
        onClick={() => {
          props.setSelected(props.dept);
          Navigate(`/dashboard/Solution/${props.dept}`);
        }}
        active={props.selected}
        style={{
          fontWeight: 'bold',
          borderRadius: '0px',
          textAlign: 'start',
        }}
        label={props.dept}
      ></Button>
    </Box>
  );
};

export default LeftSideBarElement;
