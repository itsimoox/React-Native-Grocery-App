import styled from 'styled-components';
import Svg, { Path } from 'react-native-svg';
import { Pressable } from 'react-native';
import { hPadding, mainColor } from '../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';

const Tabs = ({active}) => {
  const {navigate} = useNavigation();
  return (
    <Shadow distance={23} startColor="#0001" offset={[0, -80]} style={{borderRadius: 20, bottom: 0}}>
      <View>
        <Pressable onPress={() => navigate('Home')}>
          <Svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8.38077 25.344V21.2161C8.38077 20.1623 9.1859 19.3081 10.1791 19.3081H13.8096C14.2866 19.3081 14.744 19.5091 15.0812 19.8669C15.4185 20.2247 15.6079 20.71 15.6079 21.2161V25.344C15.6049 25.7821 15.7668 26.2033 16.0577 26.5142C16.3486 26.8251 16.7445 27 17.1574 27H19.6343C20.7911 27.0032 21.9016 26.5178 22.7206 25.6511C23.5397 24.7843 24 23.6074 24 22.38V10.6203C24 9.62882 23.5858 8.68838 22.869 8.0523L14.443 0.912423C12.9773 -0.339442 10.8772 -0.299022 9.45523 1.00842L1.22149 8.0523C0.47083 8.66963 0.0221713 9.61285 0 10.6203V22.368C0 24.9262 1.95459 27 4.36569 27H6.78605C7.64365 27 8.34063 26.2659 8.34684 25.356L8.38077 25.344Z" fill={active === 'Home' ? mainColor : '#DDD'}/>
          </Svg>
        </Pressable>
        <Pressable onPress={() => navigate('Wishlist')}>
          <Svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8.16394 0.000187223C8.98293 0.0233801 9.77592 0.156536 10.5442 0.399848H10.6209C10.6729 0.422847 10.7119 0.448268 10.7379 0.471267C11.0252 0.557213 11.2969 0.654054 11.5569 0.78721L12.0509 0.992996C12.2459 1.08984 12.4799 1.2702 12.6099 1.34404C12.7399 1.41546 12.8829 1.4893 12.9999 1.57283C14.4442 0.545108 16.1979 -0.0117246 18.0048 0.000187223C18.8251 0.000187223 19.6441 0.108116 20.4228 0.351427C25.2211 1.80403 26.95 6.70659 25.5058 10.9918C24.6868 13.1816 23.3478 15.1801 21.5941 16.8131C19.0838 19.0767 16.3292 21.0862 13.3639 22.8172L13.0389 23L12.7009 22.8051C9.72522 21.0862 6.95495 19.0767 4.42128 16.801C2.67929 15.168 1.33901 13.1816 0.507016 10.9918C-0.961968 6.70659 0.767014 1.80403 5.61726 0.326007C5.99426 0.204956 6.38295 0.120221 6.77295 0.0730109H6.92895C7.29425 0.0233801 7.65694 0.000187223 8.02094 0.000187223H8.16394ZM19.7468 3.82558C19.2138 3.6549 18.6288 3.92242 18.4338 4.43083C18.2518 4.93925 18.5378 5.49608 19.0838 5.67644C19.9171 5.96697 20.4748 6.7308 20.4748 7.57694V7.61447C20.4501 7.89167 20.5398 8.15919 20.7218 8.36498C20.9038 8.57076 21.1768 8.69061 21.4628 8.71603C21.9958 8.70271 22.4508 8.30445 22.4898 7.79483V7.65078C22.5288 5.95486 21.4251 4.41873 19.7468 3.82558Z" fill={active === 'Wishlist' ? mainColor : '#DDD'}/>
          </Svg>
        </Pressable>
        <Pressable onPress={() => navigate('Cart')}>
          <Svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M11.5063 0C14.9307 0 17.746 2.84298 17.8889 6.44534H17.8555C17.8595 6.55005 17.8405 6.65432 17.7999 6.75H17.9994C19.5544 6.75 21.1828 7.88874 21.8357 10.6377L21.9067 10.9621L22.8892 19.3249C23.5962 24.6588 20.8341 26.9018 17.0663 26.9968L16.8136 27H6.2209C2.39171 27 -0.558971 25.5258 0.0898033 19.6878L0.134045 19.3249L1.12782 10.9621C1.61785 8.0017 3.26295 6.83403 4.84804 6.75441L5.02386 6.75H5.12375C5.1069 6.64922 5.1069 6.54612 5.12375 6.44534C5.26664 2.84298 8.08194 0 11.5063 0ZM7.79061 11.2445C7.16692 11.2445 6.66132 11.7943 6.66132 12.4726C6.66132 13.1508 7.16692 13.7006 7.79061 13.7006C8.4143 13.7006 8.91989 13.1508 8.91989 12.4726L8.91109 12.3185C8.84141 11.713 8.36632 11.2445 7.79061 11.2445ZM15.1874 11.2445C14.5637 11.2445 14.0581 11.7943 14.0581 12.4726C14.0581 13.1508 14.5637 13.7006 15.1874 13.7006C15.8111 13.7006 16.3167 13.1508 16.3167 12.4726C16.3167 11.7943 15.8111 11.2445 15.1874 11.2445ZM11.4562 1.75822C8.99765 1.75822 7.00457 3.85671 7.00457 6.44534C7.02142 6.54612 7.02142 6.64922 7.00457 6.75H15.9635C15.928 6.65272 15.9091 6.54956 15.9079 6.44534C15.9079 3.85671 13.9148 1.75822 11.4562 1.75822Z" fill={active === 'Cart' ? mainColor : '#DDD'}/>
          </Svg>
        </Pressable>
        <Pressable onPress={() => navigate('Settings')}>
          <Svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12.906 0C13.8612 0 14.7261 0.567 15.2038 1.404C15.4361 1.809 15.591 2.3085 15.5523 2.835C15.5265 3.24 15.6427 3.645 15.8492 4.023C16.5076 5.1705 17.9663 5.6025 19.1023 4.9545C20.3802 4.1715 21.9939 4.644 22.7297 5.9805L23.5946 7.5735C24.3433 8.91 23.9302 10.6245 22.6393 11.394C21.542 12.0825 21.1548 13.608 21.8131 14.769C22.0197 15.1335 22.252 15.444 22.6135 15.633C23.0653 15.8895 23.4138 16.2945 23.6591 16.6995C24.1367 17.5365 24.098 18.5625 23.6333 19.467L22.7297 21.087C22.252 21.951 21.3613 22.491 20.4448 22.491C19.993 22.491 19.4895 22.356 19.0764 22.086C18.7408 21.8565 18.3535 21.7755 17.9405 21.7755C16.6625 21.7755 15.591 22.896 15.5523 24.2325C15.5523 25.785 14.3647 27 12.8802 27H11.1245C9.6271 27 8.43948 25.785 8.43948 24.2325C8.41366 22.896 7.34222 21.7755 6.06423 21.7755C5.63824 21.7755 5.25097 21.8565 4.92825 22.086C4.51516 22.356 3.9988 22.491 3.5599 22.491C2.63046 22.491 1.73974 21.951 1.26211 21.087L0.371393 19.467C-0.106237 18.5895 -0.132055 17.5365 0.345576 16.6995C0.552119 16.2945 0.939387 15.8895 1.37829 15.633C1.73974 15.444 1.9721 15.1335 2.19155 14.769C2.837 13.608 2.44973 12.0825 1.35247 11.394C0.0744879 10.6245 -0.338598 8.91 0.397211 7.5735L1.26211 5.9805C2.01083 4.644 3.61154 4.1715 4.90243 4.9545C6.02551 5.6025 7.48422 5.1705 8.14257 4.023C8.34912 3.645 8.4653 3.24 8.43948 2.835C8.41366 2.3085 8.55566 1.809 8.80093 1.404C9.27856 0.567 10.1435 0.027 11.0858 0H12.906ZM12.0153 9.693C9.98855 9.693 8.34912 11.394 8.34912 13.5135C8.34912 15.633 9.98855 17.3205 12.0153 17.3205C14.042 17.3205 15.6427 15.633 15.6427 13.5135C15.6427 11.394 14.042 9.693 12.0153 9.693Z" fill={active === 'Settings' ? mainColor : '#DDD'}/>
          </Svg>
        </Pressable>
      </View>
    </Shadow>
  );
}

export default Tabs;

const View = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0px;
  height: 75px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${hPadding};
  opacity: 1;
`;