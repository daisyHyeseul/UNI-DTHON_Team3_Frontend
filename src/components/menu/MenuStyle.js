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
  z-index: 1;
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