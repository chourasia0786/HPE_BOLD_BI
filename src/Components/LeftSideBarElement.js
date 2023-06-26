import { Box, Button } from 'grommet';
import { useLocation, useNavigate } from 'react-router-dom';
const LeftSideBarElement = (props) => {
  const Navigate = useNavigate();

  return (
    <Box
      border='bottom'
      pad='0px'
      height='100%'
      justify='center'
      style={{
        border: props.selected && 'bottom',
        borderColor: props.selected && '#01A982',
      }}
    >
      <Button
        pad={{ vertical: '8px' }}
        onClick={() => {
          props.collapsible && props.onExit(false);
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
      />
    </Box>
  );
};

export default LeftSideBarElement;
