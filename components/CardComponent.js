import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'

export default class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const images = {
      "1": require('../assets/feed_images/1.jpg'),
      "2": require('../assets/feed_images/2.jpg'),
      "3": require('../assets/feed_images/3.png')
    }

    return (
      <Card>
        <CardItem> 
          <Left>
            <Thumbnail source={require('../assets/babu.jpg')}/>
            <Body>
              <Text>Kazi Rahamatullah</Text>
              <Text note>Jan 15, 2018</Text>
            </Body>
          </Left>  
        </CardItem>

        <CardItem cardBody>
          <Image source={images[this.props.imageSource]} 
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>

        <CardItem style={{height: 45}}>
          <Left>
            <Button transparent>
              <Icon name='ios-heart-outline' style={{color: 'black'}}/>
            </Button>
            <Button transparent>
              <Icon name='ios-chatbubbles-outline' style={{color: 'black'}}/>
            </Button>
            <Button transparent>
              <Icon name='ios-send-outline' style={{color: 'black'}}/>
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{height: 20}}>
          <Text>{this.props.likes} Likes</Text>
        </CardItem>

        <CardItem>
          <Body>
            <Text>
              <Text style={{fontWeight: '900'}}>rahmat - </Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
