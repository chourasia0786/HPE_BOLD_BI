import { Box, ResponsiveContext, Button, Text } from 'grommet';
import LeftSideBarElement from './LeftSideBarElement';
import { useContext, useState, React } from 'react';
import { dept } from '../Config/values';
import { SearchBox } from './Searchbox';
import { Navigate, useNavigate } from 'react-router-dom';
const LeftSideBar = (props) => {
  const Navigate = useNavigate();
  const size = useContext(ResponsiveContext);
  const searchSuggestions = dept;
  const [suggestions, setSuggestions] = useState(searchSuggestions);
  const navigateFunction = () => {
    props.setSelected(dept[0]);
    props.onExit(false);
    Navigate(`/dashboard/Solution/${dept[0]}`);
  };
  return (
    <Box
      align='start'
      round='none'
      width={!['xsmall', 'small', 'medium'].includes(size) ? '20vw' : '200px'}
      border='right'
      height='100%'
    >
      <Box pad={{ horizontal: '6%', vertical: '6%' }}>
        <Box
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
            width={
              !['xsmall', 'small', 'medium'].includes(size) ? '20vw' : '200px'
            }
            height='30px'
            justify='center'
            alignSelf='center'
            onClick={() => {
              navigateFunction();
            }}
            label='Solution'
            style={{
              borderRadius: '4px',
              backgroundColor: '#0000000A',
            }}
          ></Button>
          {props.collapsible && (
            <Button
              height='30px'
              onClick={() => {
                props.onExit(false);
              }}
              label='X'
              style={{
                borderRadius: '4px',
              }}
            ></Button>
          )}
        </Box>
        <Box width='100%' height='30px' pad={{ top: '10px', bottom: '30px' }}>
          <SearchBox
            suggestions={dept}
            setSuggestions={setSuggestions}
          ></SearchBox>
        </Box>
      </Box>
      {suggestions.map((element) => {
        // console.log(suggestions);
        return (
          <Box width='100%' height='40px'>
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
          </Box>
          // <LeftSideBarElement dept={element} selected={false} />
        );
      })}
    </Box>
  );
};

export default LeftSideBar;
