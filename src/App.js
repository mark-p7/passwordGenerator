import { useState } from 'react';
import './App.css';
import { Button, FormGroup, FormControlLabel, Checkbox, ThemeProvider, createTheme } from '@mui/material';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#ffffff',
      },
    },
  });


  const [password, setPassword] = useState('password');
  const [passwordLength, setPasswordLength] = useState(7);
  const [passwordCharacters, setPasswordCharacters] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_');

  const handleUppercaseChange = () => {

    if (passwordCharacters.includes('A')) {
      var newPasswordCharacters = passwordCharacters.replace(/[A-Z ]/g, "");
      setPasswordCharacters(newPasswordCharacters);
    } else {
      var newPasswordCharacters = passwordCharacters.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      setPasswordCharacters(newPasswordCharacters);
    }

  };

  const handleLowercaseChange = () => {

    if (passwordCharacters.includes('a')) {
      var newPasswordCharacters = passwordCharacters.replace(/[a-z ]/g, "");
      setPasswordCharacters(newPasswordCharacters);
    } else {
      var newPasswordCharacters = passwordCharacters.concat('abcdefghijklmnopqrstuvwxyz');
      setPasswordCharacters(newPasswordCharacters);
    }

  };

  const handleNumberChange = () => {

    if (passwordCharacters.includes('1')) {
      var newPasswordCharacters = passwordCharacters.replace(/[0-9 ]/g, "");
      setPasswordCharacters(newPasswordCharacters);
    } else {
      var newPasswordCharacters = passwordCharacters.concat('0123456789');
      setPasswordCharacters(newPasswordCharacters);
    }

  };

  const handleSpecialCharacterChange = () => {

    if (passwordCharacters.includes('@')) {
      var newPasswordCharacters = passwordCharacters.replace(/[^a-zA-Z0-9 ]/g, "");
      setPasswordCharacters(newPasswordCharacters);
    } else {
      var newPasswordCharacters = passwordCharacters.concat('!@#$%^&*()-_');
      setPasswordCharacters(newPasswordCharacters);
    }

  };

  function getRandomPassword() {

    if (passwordLength < 5 || passwordLength > 100) {
      alert('Password length can only be between 5-100')
    } else {
      var length = passwordLength;
      var result = '';
      var characters = passwordCharacters;
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
      }

      console.log(password)
      setPassword(result);
    }
  }

  return (
    <div id='wrapper' style={{ textAlign: 'center', width: '100%', margin: 'auto' }}>
      <h1>
        Password Generator
      </h1>
      <p style={{ fontSize: '25px' }}>
        {password}
      </p>
      <ThemeProvider theme={theme}>
        <Button onClick={() => getRandomPassword()} variant='outlined'>
          Generate Password
        </Button>
      </ThemeProvider>

      <h3>
        Length (5-100)
      </h3>
      <input type='text' placeholder='7' onChange={e => setPasswordLength(e.target.value)} />
      <br />
      <br />
      <br />
      <FormGroup sx={{ margin: '0', width: 'auto', display: 'inline' }}>
        <FormControlLabel control={<Checkbox onClick={handleUppercaseChange} />} label="No Uppercase letters" />
        <FormControlLabel control={<Checkbox onClick={handleLowercaseChange} />} label="No Lowercase letters" />
        <FormControlLabel control={<Checkbox onClick={handleNumberChange} />} label="No Numbers" />
        <FormControlLabel control={<Checkbox onClick={handleSpecialCharacterChange} />} label="No Special Characters" />
      </FormGroup>
    </div>
  );
}

export default App;
