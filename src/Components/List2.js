import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';

const List2 = () => {
  return (
    <Content>
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail source={require('../Assets/Img/1.jpg')} />
          </Left>
          <Body>
            <Text>Kumar Pratik</Text>
            <Text note>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
      </List>
    </Content>
  );
};

export default List2;
