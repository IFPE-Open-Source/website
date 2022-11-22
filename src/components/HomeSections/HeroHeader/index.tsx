/* eslint-disable indent */
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

// eslint-disable-next-line object-curly-newline
import { Button, Container, Content, Text } from './styles';

const HeroHeader: React.FC = () => {
  const actualTheme = useContext(ThemeContext);

  return (
    <Container theme={actualTheme}>
      <Content>
        <Text>
          Comunidade de tecnologia e computação do Instituto Federal de
          Pernambuco
        </Text>

        <Button href="https://github.com/ifpeopensource/">
          Veja no GitHub
        </Button>
      </Content>
    </Container>
  );
};

export default HeroHeader;
