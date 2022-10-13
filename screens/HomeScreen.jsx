import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { bgColor, hPadding, mainColor, textColor } from '../utils/constants';
import { Search, Categories, Tabs, Product, TabsPlaceholder } from '../components';
import { products } from '../utils/data';

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [data, setData] = useState([]);
  useEffect(() => {
    if(activeCategory !== 'All'){
      setData([...products.filter(item => item.category.includes(activeCategory))]);
    }else{
      setData(products);
    }
  }, [activeCategory]);
  return (
    <>
    <Screen>
      <Header>Grocery <Text style={{color: mainColor}}>App</Text></Header>
      <Search />
      <Scroll showsVerticalScrollIndicator={false} contentContainerStyle={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Categories active={activeCategory} setActive={setActiveCategory} />
        {data.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </Scroll>
    </Screen>
    <TabsPlaceholder />
    <Tabs active="Home" />
    </>
  );
}

export default HomeScreen;

const Screen = styled.View`
  flex: 1;
  background-color: ${bgColor};
  padding: 0 ${hPadding};
`;
const Header = styled.Text`
  font-family: Poppins-SemiBold;
  font-size: 32px;
  text-align: center;
  color: ${textColor};
  margin: 10px 0;
`;
const Scroll = styled.ScrollView`
`;