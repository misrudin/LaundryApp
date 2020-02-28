import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

const ListLaundry = () => {
  return (
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../Assets/Img/home.png')} />
            <Body>
              <Text>Cuci Gabut</Text>
              <Text note>Jl. Mamak Medoan</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={require('../Assets/Img/1.jpg')}
            style={{height: 250, width: null, flex: 1}}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="star" />
              <Icon active name="star" />
              <Icon active name="star" />
              <Icon active name="star" />
            </Button>
          </Left>
          <Right>
            <Text>Sejak Maret 2010</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default ListLaundry;
