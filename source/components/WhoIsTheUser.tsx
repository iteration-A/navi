import React, { FC, useState } from 'react';
import { Box, Text } from 'ink';
import Input from '@components/Input';
import Button from '@components/Button';
import * as LocalStorage from '@services/local-storage';

const WhoIsTheUser: FC<{ onSuccess: React.Dispatch<React.SetStateAction<boolean>> }> = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string|null>(null);

  const logInHandler = async () => {
    try {
      await LocalStorage.readUser({ username, password });
      onSuccess(true);
    } catch (error) {
      setErrorMessage(String(error) || 'An error ocurred! D:');
    }
  };

  return (
    <Box width="100%" alignItems="center" flexDirection="column">
      <Box justifyContent="center" width="100%">
        <Text>{GREETINGS}</Text>
      </Box>
      <Box justifyContent="center" width="100%">
        <Text>{NAVI_LOGO}</Text>
      </Box>
      {errorMessage && <Text>{errorMessage}</Text>}
      <Box flexDirection="column">
        <Input value={username} onChange={setUsername} />
        <Input value={password} onChange={setPassword} password />
        <Button onPress={logInHandler}>Log in</Button>
      </Box>
    </Box>
  );
}

const GREETINGS = `
     ▐▌               ▀             ▐▌  ▐▌                                 ▐▀▀█ 
█   █▐▙██▖ ▟█▙       ██  ▗▟██▖     ▐███ ▐▙██▖ ▟█▙      ▐▌ ▐▌▗▟██▖ ▟█▙  █▟█▌  ▗▛ 
▜ █ ▛▐▛ ▐▌▐▛ ▜▌       █  ▐▙▄▖▘      ▐▌  ▐▛ ▐▌▐▙▄▟▌     ▐▌ ▐▌▐▙▄▖▘▐▙▄▟▌ █▘   ▗█▘ 
▐▙█▟▌▐▌ ▐▌▐▌ ▐▌       █   ▀▀█▖      ▐▌  ▐▌ ▐▌▐▛▀▀▘     ▐▌ ▐▌ ▀▀█▖▐▛▀▀▘ █    ▐▌  
▝█ █▘▐▌ ▐▌▝█▄█▘     ▗▄█▄▖▐▄▄▟▌      ▐▙▄ ▐▌ ▐▌▝█▄▄▌     ▐▙▄█▌▐▄▄▟▌▝█▄▄▌ █    ▗▖  
 ▀ ▀ ▝▘ ▝▘ ▝▀▘      ▝▀▀▀▘ ▀▀▀        ▀▀ ▝▘ ▝▘ ▝▀▀       ▀▀▝▘ ▀▀▀  ▝▀▀  ▀    ▝▘  
`;
const NAVI_LOGO = `
                        ⢀⣀⣀⣀⡀                         
                       ⢠⣿⣿⣿⣿⣿⡆                        
                       ⠘⣿⣿⣿⣿⣿⠇                        
                        ⠈⠛⠛⠛⠉                         
                      ⢀⣀⣀⣀⣀⣀⣀⣀⡀                       
        ⢀⣠⣴⣶⣶⡄    ⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀     ⣴⣶⣶⣦⣄         
     ⢀⣠⣾⣿⣿⣿⣿⣿⠇  ⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄  ⠘⣿⣿⣿⣿⣿⣿⣦⣀      
   ⢀⣴⣿⣿⣿⣿⣿⠿⠋⠁ ⢀⣾⣿⣿⣿⣿⣿⣿⡿⠟⠛⠉⠉⠉⠛⠛⠿⣿⣿⣿⣿⣿⣿⣷⣄ ⠈⠙⠻⢿⣿⣿⣿⣿⣷⣄    
  ⣰⣿⣿⣿⣿⡿⠛⠁   ⢠⣿⣿⣿⣿⣿⣿⠟⠁          ⠙⢿⣿⣿⣿⣿⣿⣆    ⠙⠻⣿⣿⣿⣿⣷⣄  
⢀⣾⣿⣿⣿⡿⠋      ⣿⣿⣿⣿⣿⡿⠁  ⢀⣴⣾⣿⣿⣿⣷⣦⡀   ⢻⣿⣿⣿⣿⣿⡄     ⠈⠻⣿⣿⣿⣿⣆ 
⢸⣿⣿⣿⡟       ⢸⣿⣿⣿⣿⣿⠁  ⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄   ⣿⣿⣿⣿⣿⣧       ⠙⣿⣿⣿⣿⡆
⢸⣿⣿⣿⣧⡀      ⢸⣿⣿⣿⣿⣿   ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿   ⣿⣿⣿⣿⣿⣿       ⣰⣿⣿⣿⣿⠇
 ⢻⣿⣿⣿⣷⣄     ⢸⣿⣿⣿⣿⣿⡄  ⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃   ⣿⣿⣿⣿⣿⡟     ⣠⣾⣿⣿⣿⣿⠏ 
  ⠙⢿⣿⣿⣿⣷⣦⡀   ⢿⣿⣿⣿⣿⣷⡀  ⠈⠻⠿⣿⣿⣿⠿⠛⠁   ⣼⣿⣿⣿⣿⣿⠃  ⢀⣠⣾⣿⣿⣿⣿⡿⠃  
    ⠙⢿⣿⣿⣿⣿⣶⣤⣀⠘⣿⣿⣿⣿⣿⣿⣦⡀         ⢀⣠⣾⣿⣿⣿⣿⣿⠏⢀⣠⣶⣿⣿⣿⣿⣿⡿⠋    
      ⠙⠻⣿⣿⣿⣿⣿⡇⠈⢻⣿⣿⣿⣿⣿⣿⣷⣦⣄   ⢠⣴⣾⣿⣿⣿⣿⣿⣿⡿⠃⢰⣿⣿⣿⣿⣿⣿⠟⠉      
 ⣀⣤⣤⣄⡀   ⠙⠛⠿⠟⠃  ⠙⠿⣿⣿⣿⣿⣿⣿⣿⡆ ⢀⣿⣿⣿⣿⣿⣿⣿⡿⠋   ⠛⠿⠿⠛⠉  ⢀⣤⣤⣤⡀  
⢰⣿⣿⣿⣿⣿⡄           ⠈⠙⠻⣿⣿⣿⣿⡇ ⢰⣿⣿⣿⣿⡿⠛⠁           ⢰⣿⣿⣿⣿⣿⡆ 
⠸⣿⣿⣿⣿⣿⠃              ⣿⣿⣿⣿⡇ ⢸⣿⣿⣿⣿⡇             ⠸⣿⣿⣿⣿⣿⠃ 
 ⠈⠙⠛⠉                ⣿⣿⣿⣿⡇ ⠘⣿⣿⣿⣿⡇              ⠈⠙⠛⠉⠁  
            ⣀⣤⣤⡀     ⣿⣿⣿⣿⡇  ⣿⣿⣿⣿⡄    ⢀⣤⣤⣄             
           ⢸⣿⣿⣿⣿⡄   ⢠⣿⣿⣿⣿⡇  ⣿⣿⣿⣿⣇   ⢀⣿⣿⣿⣿⣧            
           ⠈⣿⣿⣿⣿⣿⣶⣶⣶⣿⣿⣿⣿⡿⠁  ⢻⣿⣿⣿⣿⣷⣦⣶⣿⣿⣿⣿⣿⠇            
            ⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁    ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋             
               ⠉⠛⠛⠛⠛⠛⠉         ⠉⠛⠛⠛⠛⠛⠋⠁               
`;

export default WhoIsTheUser;
