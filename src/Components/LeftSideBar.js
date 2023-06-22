import { Box, ResponsiveContext } from 'grommet';
import { Text } from 'grommet';
import LeftSideBarElement from './LeftSideBarElement';
import { useContext } from 'react';
import { dept } from '../Config/values';
import { SearchBox } from './Searchbox';
import { Button } from 'grommet';
const LeftSideBar = (props) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      align='center'
      round='none'
      width={!['xsmall', 'small', 'medium'].includes(size) ? '20vw' : '200px'}
      border='right'
    >
      <Box
        pad={{ top: '6%' }}
        fill='horizontal'
        // margin={{
        //   bottom: props.collapsible
        //     ? !['xsmall', 'small', 'medium'].includes(size)
        //       ? '0%'
        //       : '0%'
        //     : !['xsmall', 'small', 'medium'].includes(size)
        //     ? '0%'
        //     : '0%',
        // }}
        style={{ justifyContent: 'space-between' }}
        direction='row'
        // height='200px'
      >
        <Button
          label='Solution'
          style={{
            borderRadius: '4px',
            backgroundColor: '#0000000A',
            width: '50%',
            marginLeft: '5%',
            height: '40px',
          }}
        ></Button>
        {props.collapsible && (
          <Button
            onClick={() => {
              props.onExit(false);
            }}
            label='X'
            style={{
              borderRadius: '4px',
              // width: '10%',
              marginRight: '5%',
              height: '40px',
            }}
          ></Button>
        )}
      </Box>
      <Box pad={{ top: '6%', bottom: '6%' }} width='90%'>
        <SearchBox></SearchBox>
      </Box>
      {dept.map((element) => {
        return <LeftSideBarElement dept={element} />;
      })}
    </Box>
  );
};

export default LeftSideBar;
