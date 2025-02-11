import styled from 'styled-components/native';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

export const BackgroundWrapper = styled.View`
  flex: 1;
  background-color: #f9f7f4;
  align-items: center;
`;

export const HeaderSection = styled.View`
  /* border: 1px solid black; */
  height: ${responsiveScreenHeight(11.8)}px;
  width: ${responsiveScreenWidth(88.2)}px;
  justify-content: center;
`;

export const BodySection = styled.View`
  flex: 1;
  margin-top: ${responsiveScreenHeight(0.8)}px;
`;

export const PageHeader = styled.Text`
  font-family: Medium;
  font-size: ${responsiveScreenFontSize(2.51)}px;
  margin-top: ${responsiveScreenHeight(6.9)}px;
  color: #000000;
`;

export const BasketButton = styled.Pressable`
  width: ${responsiveScreenWidth(15)}px;
  height: ${responsiveScreenWidth(15)}px;
  border-radius: ${responsiveScreenWidth(7.5)}px;
  z-index: 1;
  position: absolute;
  right: 10px;
  bottom: 15px;
  box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.value ? 'white' : '#877160')};
`;

export const SubmitButton = styled.Pressable`
  width: ${responsiveScreenWidth(15)}px;
  height: ${responsiveScreenWidth(15)}px;
  border-radius: ${responsiveScreenWidth(7.5)}px;
  background-color: #ffffff;
  z-index: 2;
  position: absolute;
  right: 10px;
  bottom: 80px;
  box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  padding-left: 3px;
`;

export const ListNumContainer = styled.View`
  width: ${responsiveScreenWidth(4.2)}px;
  height: ${responsiveScreenWidth(4.2)}px;
  border-radius: ${responsiveScreenWidth(2.1)}px;
  z-index: 2;
  position: absolute;
  right: 0px;
  top: 0px;
  background-color: #f2c47f;
  justify-content: center;
  align-items: center;
  display: ${(props) => (!props.isVisible ? 'flex' : 'none')};
`;

export const ListNum = styled.Text`
  font-family: Regular;
  font-size: 8px;
  color: white;
`;

export const SaveBtn = styled.Pressable`
  width: ${responsiveScreenWidth(88.2)}px;
  height: ${responsiveScreenHeight(5.685)}px;
  background-color: rgba(242, 196, 127, 0.27);
  border-radius: 13px;
  margin-top: ${responsiveScreenHeight(1.79)}px;
  align-items: center;
  justify-content: center;
  background-color: #877160;
`;

export const BackBtn = styled.Pressable`
  width: ${responsiveScreenWidth(88.2)}px;
  height: ${responsiveScreenHeight(5.685)}px;
  border-radius: 13px;
  margin-top: ${responsiveScreenHeight(1)}px;
  align-items: center;
  background-color: #ffffff;
  padding: 15px 110px;
`;

export const DateWrapper = styled.View`
  width: ${responsiveScreenWidth(86)}px;
  flex-direction: row-reverse;
`;

export const FoodWrapper = styled.View`
  width: ${responsiveScreenWidth(88.2)}px;
  border-radius: 13px;
  background-color: #ffffff;
  height: auto;
  padding: 16px 25px;
  margin-top: 8px;
`;

export const MenuBottomList = styled.View`
  width: ${responsiveScreenWidth(86.6)}px;
  height: ${responsiveScreenWidth(15)}px;
  background-color: rgba(255, 255, 255, 0.91);
  z-index: 1;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  position: absolute;
  bottom: 15px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-top-left-radius: 11px;
  border-bottom-left-radius: 11px;
`;

export const MiniMenu = styled.View`
  width: ${responsiveScreenWidth(25)}px;
  height: ${responsiveScreenHeight(4.73)}px;
  background-color: #eeeeee;
  justify-content: center;
  border-radius: 11px;
  margin-left: 10px;
  padding-left: 10px;
  display: ${(props) => (props.isVisible > 0 ? 'flex' : 'none')};
`;

export const Revoke = styled.Pressable`
  width: ${responsiveScreenWidth(4.2)}px;
  height: ${responsiveScreenWidth(4.2)}px;
  border-radius: ${responsiveScreenWidth(2.1)}px;
  z-index: 2;
  position: absolute;
  left: -4px;
  top: -6px;
  background-color: #a5a5a5;
  justify-content: center;
  align-items: center;
`;

export const CountContainer = styled.Pressable`
  width: ${responsiveScreenWidth(4.2)}px;
  height: ${responsiveScreenWidth(4.2)}px;
  border-radius: ${responsiveScreenWidth(2.1)}px;
  z-index: 2;
  position: absolute;
  right: -3px;
  bottom: -6px;
  background-color: #f2c47f;
  justify-content: center;
  align-items: center;
`;
