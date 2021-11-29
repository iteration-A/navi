import React, { FC, useEffect } from 'react';
import { Box, Text } from 'ink';

const WhoIsTheUser: FC<{ onSuccess: React.Dispatch<React.SetStateAction<boolean>> }> = ({ onSuccess }) => {
  useEffect(() => {
    setTimeout(() => onSuccess(true), 3000);
  }, [])

  return (
    <Box width="100%" alignItems="center" flexDirection="column">
      <Text>{NAVI_LOGO}</Text>
      <Box flexDirection="column" alignItems="center">
        <Box flexDirection="column" alignItems="center">
          <Text>Username</Text>
          <Text>lain</Text>
        </Box>
        <Box borderColor="white" borderStyle="single" flexDirection="column" alignItems="center">
          <Text>Password</Text>
          <Text>***********</Text>
        </Box>
      </Box>
    </Box>
  );
}

const NAVI_LOGO = `
       ▗▖               █                 ▗▖                                  ▄▄▖ 
     ▐▌               ▀             ▐▌  ▐▌                                 ▐▀▀█ 
█   █▐▙██▖ ▟█▙       ██  ▗▟██▖     ▐███ ▐▙██▖ ▟█▙      ▐▌ ▐▌▗▟██▖ ▟█▙  █▟█▌  ▗▛ 
▜ █ ▛▐▛ ▐▌▐▛ ▜▌       █  ▐▙▄▖▘      ▐▌  ▐▛ ▐▌▐▙▄▟▌     ▐▌ ▐▌▐▙▄▖▘▐▙▄▟▌ █▘   ▗█▘ 
▐▙█▟▌▐▌ ▐▌▐▌ ▐▌       █   ▀▀█▖      ▐▌  ▐▌ ▐▌▐▛▀▀▘     ▐▌ ▐▌ ▀▀█▖▐▛▀▀▘ █    ▐▌  
▝█ █▘▐▌ ▐▌▝█▄█▘     ▗▄█▄▖▐▄▄▟▌      ▐▙▄ ▐▌ ▐▌▝█▄▄▌     ▐▙▄█▌▐▄▄▟▌▝█▄▄▌ █    ▗▖  
 ▀ ▀ ▝▘ ▝▘ ▝▀▘      ▝▀▀▀▘ ▀▀▀        ▀▀ ▝▘ ▝▘ ▝▀▀       ▀▀▝▘ ▀▀▀  ▝▀▀  ▀    ▝▘  
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
