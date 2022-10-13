import { useNavigation } from '@react-navigation/native';
import { Image, Text } from 'react-native';
import styled from 'styled-components';
import { mainColor, textColor } from '../utils/constants';
import { Shadow } from 'react-native-shadow-2';
import { Icon } from '.';
import { SharedElement } from 'react-navigation-shared-element';
import { Dimensions } from 'react-native';

const Product = ({product}) => {
  const {navigate} = useNavigation();
  return (
    <Shadow distance={7} startColor="#7771" style={{borderRadius: 25, marginBottom: 10}}>
      <Card onPress={() => navigate("Product", {product})}>
        <SharedElement id={`product.image.${product.id}`}>
          <Image source={product.image} style={{width: 100, height: 100}} />
        </SharedElement>
        <Details>
          <SharedElement id={`product.name.${product.id}`}>
            <Title>{product.name}</Title>
          </SharedElement>
          <InStock>{product.countInStock}kg</InStock>
          <Action>
            <Price>${product.price}<Text style={{fontSize: 12, color: '#C2C3C9'}}>/kg</Text></Price>
            <Add onPress={() => console.log('Add to Cart')}>
              <Icon name="plus" />
            </Add>
          </Action>
        </Details>
      </Card>
    </Shadow>
  )
}

export default Product;

const Card = styled.Pressable`
  width: ${Dimensions.get('window').width / 2 - 20}px;
  background-color: #fff;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;
const Details = styled.View`
  width: 100%;
  margin-top: 20px;
`;
const Title = styled.Text`
  font-size: 16px;
  font-family: Poppins-SemiBold;
  color: ${textColor};
  position: absolute;
`;
const InStock = styled.Text`
  color: #C2C3C9;
  font-size: 12px;
  font-family: Poppins-SemiBold;
  margin-top: 25px;
`;
const Action = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled.Text`
  font-size: 16px;
  font-family: Poppins-SemiBold;
  color: ${mainColor};
`;
const Add = styled.Pressable`
  background-color: ${mainColor};
  padding: 5px;
  border-radius: 20px;
`;