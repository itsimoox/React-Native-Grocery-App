import { Pressable, View } from 'react-native';
import styled from 'styled-components';
import { mainColor, textColor } from '../utils/constants';
import { categories } from '../utils/data';

const Categories = ({active, setActive}) => {
  return (
    <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
      {categories.map((category, idx) => (
        <Pressable key={idx} style={{alignItems: 'center'}} onPress={() => setActive(category)}>
          <Category style={active === category ? {color: textColor} : {}}>{category}</Category>
          {category === active && (
            <View style={{
              backgroundColor: mainColor,
              width: 5,
              aspectRatio: 1,
              borderRadius: 5,
            }}></View>
          )}
        </Pressable>
      ))}
    </Scroll>
  );
}

export default Categories;

const Scroll = styled.ScrollView`
  /* background-color: red; */
  width: 100%;
  margin: 20px 0;
  flex-grow: 0;
  column-gap: 30px;
`;
const Category = styled.Text`
  font-size: 16px;
  font-family: Poppins-Regular;
  color: #C2C3C9;
  margin: 0 10px;
`;