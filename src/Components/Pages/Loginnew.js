import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Form,
  FormField,
  Header,
  Heading,
  ResponsiveContext,
  Text,
  TextInput,
} from 'grommet';
import NavBar from '../MainContents/NavBar';
import Footer from '../MainContents/Footer';

const Loginnew = () => {
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const size = useContext(ResponsiveContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (
      (username === 'hpadmin@fgi.com' && password === 'hpeworld') ||
      (username === 'hpe@fgi.com' && password === 'hpe')
    ) {
      // set login state to local storage
      sessionStorage.setItem('user', username); // store the user in seesion storage.
      // navigate to another page
      navigate('/Mainpage');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };
  return (
    <Box>
      <NavBar />
      <Box
        align='center'
        border={{ color: 'background', size: 'full' }}
        pad='small'
        round='none'
        width='full'
        height='medium'
      >
        <Box gap='medium' width='medium'>
          <Header
            direction='column'
            align='start'
            gap='xxsmall'
            pad={{ horizontal: 'xxsmall' }}
          >
            <Heading level={2} margin='none'>
              Sign In
            </Heading>
            <Text>to Bold BI Account</Text>
          </Header>
          <Box
            // Padding used to prevent focus from being cutoff
            pad={{ horizontal: 'xxsmall' }}
          >
            <Form
              validate='blur'
              value={formValues}
              onChange={setFormValues}
              messages={{
                required: 'This is a required field.',
              }}
              onSubmit={handleLogin}
            >
              <FormField
                label='Email'
                name='email'
                htmlFor='email-sign-in'
                // validate={emailValidation}
                required={{ indicator: false }}
              >
                <TextInput
                  id='email-sign-in'
                  name='email'
                  placeholder='james@hpe.com'
                  type='email'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormField>
              <FormField
                label='Password'
                htmlFor='password-sign-in'
                name='password'
                required={{ indicator: false }}
              >
                <TextInput
                  id='password-sign-in'
                  name='password'
                  placeholder='Enter your password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormField>
              {errorMessage && <Text color='status-error'>{errorMessage}</Text>}
              <Box
                align={
                  !['xsmall', 'small'].includes(size) ? 'start' : undefined
                }
                margin={{ top: 'medium', bottom: 'small' }}
              >
                <Button primary type='submit' label='Sign In' />
              </Box>
            </Form>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
export default Loginnew;
