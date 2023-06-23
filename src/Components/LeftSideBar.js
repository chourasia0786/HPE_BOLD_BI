import { Box, ResponsiveContext, Button, Text } from 'grommet';
import LeftSideBarElement from './LeftSideBarElement';
import { useContext, useState, React } from 'react';
import { dept } from '../Config/values';
import { SearchBox } from './Searchbox';
const LeftSideBar = (props) => {
  const size = useContext(ResponsiveContext);
  const searchSuggestions = dept;
  const [suggestions, setSuggestions] = useState(searchSuggestions);
  return (
    <Box
      align='center'
      round='none'
      width={!['xsmall', 'small', 'medium'].includes(size) ? '20vw' : '200px'}
      border='right'
      height='100%'
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
        <SearchBox
          suggestions={dept}
          setSuggestions={setSuggestions}
        ></SearchBox>
      </Box>
      {suggestions.map((element) => {
        // console.log(suggestions);
        return (
          <>
            {element == props.selected ? (
              <Button
                fill='horizontal'
                onClick={() => {
                  {
                    props.collapsible && props.onExit(false);
                  }
                }}
              >
                <LeftSideBarElement
                  dept={element}
                  selected={true}
                  setSelected={props.setSelected}
                />
              </Button>
            ) : (
              <Button
                fill='horizontal'
                onClick={() => {
                  props.collapsible && props.onExit(false);
                }}
              >
                <LeftSideBarElement
                  dept={element}
                  selected={false}
                  setSelected={props.setSelected}
                />
              </Button>
            )}
          </>
          // <LeftSideBarElement dept={element} selected={false} />
        );
      })}
    </Box>
  );
};

export default LeftSideBar;
