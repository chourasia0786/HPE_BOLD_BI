import { Box, Button } from 'grommet';
const LeftSideBarElement = (props) => {
  return (
    <Box width='100%' border='bottom' justify='center'>
      <Button
        style={{
          fontWeight: 'normal',
          borderRadius: '0px',
          textAlign: 'start',
        }}
        label={props.dept}
      ></Button>
    </Box>
  );
};

export default LeftSideBarElement;
