import { Text } from 'react-native';
import styled from 'styled-components';
import { Tabs } from '../components';

const WishlistScreen = () => {
  return (
    <>
    <View>
      <Text>WishlistScreen</Text>
    </View>
    <Tabs active="Wishlist" />
    </>
  )
}

export default WishlistScreen;

const View = styled.View`
  flex-grow: 1;
`;