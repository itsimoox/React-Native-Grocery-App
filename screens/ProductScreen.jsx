import { useNavigation, useRoute } from "@react-navigation/native";
import { Pressable, Image as Img, ScrollView } from "react-native";
import styled from "styled-components";
import { bgColor, hPadding, mainColor, textColor } from "../utils/constants";
import { Icon } from '../components'
import { products } from "../utils/data";
import { SharedElement } from "react-navigation-shared-element";

const ProductScreen = () => {
  const {product} = useRoute().params;
  const {goBack} = useNavigation();
  // const product = products[0];
  return (
    <Screen>
      <Header>
        <Pressable onPress={() => goBack()}>
          <Icon name="arrow" />
        </Pressable>
        <Pressable onPress={() => console.log('<3')}>
          <Icon name="heart" color="#F25353" />
        </Pressable>
      </Header>
      <SharedElement id={`product.image.${product.id}`}>
        <Img source={product.image} style={{aspectRatio: 1, height: 250, marginVertical: 20, alignSelf: 'center'}} />
      </SharedElement>
      <Details>
        <Info>
          <Prop>
            <Icon name="star" />
            <InfoText>{product.rating}(133)</InfoText>
          </Prop>
          <Prop>
            <Icon name="box" />
            <InfoText>{product.countInStock}kg</InfoText>
          </Prop>
        </Info>
        <SharedElement id={`product.name.${product.id}`}>
          <Title>{product.name}</Title>
        </SharedElement>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Description>{product.description}</Description>
        </ScrollView>
        <Action>
          <Price>${product.price}</Price>
          <AddBtn onPress={() => console.log('Add to Cart')}>
            <AddText>Add to Cart</AddText>
          </AddBtn>
        </Action>
      </Details>
    </Screen>
  );
}

ProductScreen.sharedElements = (route) => {
  const {product} = route.params;
  return [
    {
      id: `product.image.${product.id}`,
    },
    {
      id: `product.name.${product.id}`,
    },
    {
      id: `product.image.${product.id}`,
    },
  ]
}

// ProductScreen.sh

export default ProductScreen;

const Screen = styled.View`
  flex: 1;
  background-color: ${bgColor};
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px ${hPadding};
`;
const Details = styled.View`
  width: 102%;
  padding: 20px ${hPadding};
  flex: 1;
  align-self: center;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  shadow-color: #3337;
  elevation: 5;
`;
const Info = styled.View`
  flex-direction: row;
`;
const Prop = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
`;
const InfoText = styled.Text`
  font-size: 16px;
  font-family: Poppins-SemiBold;
  margin-top: 2px;
  margin-left: 10px;
  color: ${textColor};
`;
const Title = styled.Text`
  font-size: 36px;
  font-family: Poppins-SemiBold;
  color: ${textColor};
  position: absolute;
`;
const Description = styled.Text`
  font-size: 18px;
  font-family: Poppins-Regular;
  color: #C2C3C9;
  margin-top: 55px;
`;
const Action = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled.Text`
  font-family: Poppins-SemiBold;
  font-size: 36px;
  color: ${textColor};
`;
const AddBtn = styled.Pressable`
  background-color: ${mainColor};
  align-items: center;
  justify-content: center;
  border-radius: 200px;
  padding: 10px 20px;
`;
const AddText = styled.Text`
  color: #fff;
  font-family: Poppins-Medium;
  font-size: 24px;
`;