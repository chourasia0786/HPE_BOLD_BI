import React from 'react';
import { Box, Button, ResponsiveContext } from 'grommet';
import { Previous, Next } from 'grommet-icons';

export const NavigationButton = (props) => {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box
      direction={!['xsmall', 'small'].includes(size) ? 'column' : 'row'}
      gap={!['xsmall', 'small'].includes(size) ? 'small' : 'medium'}
    >
      <Box
        direction={!['xsmall', 'small'].includes(size) ? 'row' : 'column'}
        gap='medium'
        align='end'
      >
        <Button
          size='small'
          // pad={{ left: 'xsmall', right: 'xsmall' }}
          label={props.name}
          icon={!props.last && <Next />}
          reverse
          onClick={() => {}}
        />
      </Box>
    </Box>
  );
};
