import styled from 'styled-components';
import { Tabs } from '../components';

const CartScreen = () => {
  return (
    <>
    <View>
      <Text>CartScreen</Text>
    </View>
    <Tabs active="Cart" />
    </>
  );
}

export default CartScreen;

const View = styled.View`
  flex-grow: 1;
`;
const Text = styled.Text`

`;