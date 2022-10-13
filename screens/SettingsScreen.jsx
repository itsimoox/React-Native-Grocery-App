import { Text } from 'react-native';
import styled from 'styled-components';
import { Tabs } from '../components';

const SettingsScreen = () => {
  return (
    <>
    <View>
      <Text>SettingsScreen</Text>
    </View>
    <Tabs active="Settings" />
    </>
  )
}

export default SettingsScreen;

const View = styled.View`
  flex-grow: 1;
`;