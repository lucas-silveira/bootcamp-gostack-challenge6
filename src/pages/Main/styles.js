import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background-color: #eee;
  padding: 0 15px;
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: #7159c1;
  padding: 0 12px;
  margin-left: 10px;
  border-radius: 4px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  background-color: #eee;
  border-radius: 32px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-top: 4px;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #999;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  margin-top: 5px;
`;

export const ProfileButton = styled(RectButton)`
  height: 36px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background-color: #7159c1;
  margin-top: 10px;
  border-radius: 4px;
`;

export const ProfileButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;
