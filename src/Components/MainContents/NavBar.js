import {
  Box,
  Button,
  Header,
  ResponsiveContext,
  Text,
  Menu,
  Avatar,
  Nav,
} from 'grommet';

import {
  Hpe,
  Notification,
  HelpOption,
  Projects,
  Search,
  Language,
} from 'grommet-icons';

import { Link, useNavigate } from 'react-router-dom';

import { useContext } from 'react';

const NavBar = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Header
      fill='horizontal'
      pad={{ horizontal: 'medium', vertical: 'small' }}
      style={{
        borderBottom: '1px solid gray',
      }}
    >
      <Box direction='row' gap='medium' align='center' flex>
        <Box direction='row' gap='small' align='center' margin='auto'>
          <Hpe size='medium' color='plain' />
          <Box>
            <Text color='text-strong' size='medium' weight='bold'>
              HPE Bold BI
            </Text>
          </Box>
        </Box>
        <Box flex></Box>
        {/* <Box direction='row' gap='medium' align='center' justify='center' flex>
          {!['xsmall', 'small'].includes(size) ? (
            <Nav direction='row' gap='small'>
              {headerLinks.map((item) => (
                <Button
                  label={item.label}
                  key={item.label}
                  href={item.path}
                  style={{ borderRadius: '0' }}
                />
              ))}
            </Nav>
          ) : (
            <Menu label='Menu' items={headerLinks} />
          )}
        </Box> */}
        <Box
          direction='row'
          gap='medium'
          align='end'
          justify='end'
          margin='auto'
        >
          <Button href='/notifications'>
            <Notification style={{ width: '100%', height: 20 }}></Notification>
          </Button>
          <Button href='/help'>
            <HelpOption style={{ width: '100%', height: 20 }}></HelpOption>
          </Button>
          <Button href='/dashboard'>
            <Projects style={{ width: '100%', height: 20 }}></Projects>
          </Button>
          <Button>
            <Avatar style={{ backgroundColor: 'cyan' }} size='42px'>
              {/* {getInitials()} */}
            </Avatar>
          </Button>
        </Box>
      </Box>
    </Header>
  );
};

export default NavBar;
