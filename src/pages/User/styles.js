import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  background-color: #eee;
  border-radius: 50px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const Bio = styled.Text`
  color: #999;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-top: 5px;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#7159c1',
  size: 50,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Starred = styled(RectButton)`
  align-items: center;
  flex-direction: row;
  background-color: #f5f5f5;
  padding: 10px 15px;
  margin-bottom: 20px;
  border-radius: 4px;
`;
export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  background-color: #eee;
  border-radius: 21px;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #333;
  font-size: 15px;
  font-weight: 700;
`;

export const Author = styled.Text`
  color: #555;
  font-size: 13px;
  margin-top: 2px;
`;
