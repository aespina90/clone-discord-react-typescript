import React from 'react';
import ChannelMessage from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage 
          author="Andre Espina"
          date="15/04/2022"
          content="Hoje é meu aniversário!"
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
