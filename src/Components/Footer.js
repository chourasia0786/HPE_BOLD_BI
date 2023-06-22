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

const Footer = () => {
  const size = useContext(ResponsiveContext);
  const year = new Date().getFullYear();
  return (
    <Header
      fill='horizontal'
      pad={{ horizontal: 'medium', vertical: 'small' }}
      style={{
        borderTop: '1px solid',
        borderColor: 'gray',
      }}
    >
      <Box direction='row' gap='medium' align='center' flex>
        <Box direction='row' gap='small' align='center' margin='auto'>
          {/* <Hpe size='medium' color='plain' /> */}
          <Box>
            <Text color='text-strong' size='10px' weight='normal'>
              &copy; {year} Hewlett Packard Enterprise Deployment LP
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
          <Box direction='row' gap='small' align='center' margin='auto'>
            {/* <Hpe size='medium' color='plain' /> */}
            <Box>
              <Text color='text-strong' size='15px' weight='bold'>
                Terms
              </Text>
            </Box>
          </Box>
          <Box direction='row' gap='small' align='center' margin='auto'>
            {/* <Hpe size='medium' color='plain' /> */}
            <Box>
              <Text color='text-strong' size='15px' weight='bold'>
                Privacy
              </Text>
            </Box>
          </Box>

          <Box direction='row' gap='small' align='center' margin='auto'>
            {/* <Hpe size='medium' color='plain' /> */}
            <Box>
              <Text color='text-strong' size='15px' weight='bold'>
                Security
              </Text>
            </Box>
          </Box>

          <Box direction='row' gap='small' align='center' margin='auto'>
            {/* <Hpe size='medium' color='plain' /> */}
            <Box>
              <Text color='text-strong' size='15px' weight='bold'>
                Feedback
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Header>
  );
};

export default Footer;
