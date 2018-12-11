import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CardComponent from '../CardComponent'
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name='ios-home' style={{color: tintColor}}/>
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header transparent>
            <Left><Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} /></Left>
            <Body><Text style={{ fontSize: 20 }}>Instagram</Text></Body>
            <Right><Icon style={{ paddingRight: 10 }} name="ios-send-outline" /></Right>
        </Header>

        <Content>
          <View style={{height: 100}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7}}>
              <Text style={{fontWeight: 'bold'}}>Stories</Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name='md-play' style={{fontSize: 14}}/>
                <Text style={{fontWeight: 'bold'}}>Watch All</Text>
              </View>
            </View>

            <View style={{flex: 3}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail 
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2
                  }}
                  source={require('../../assets/StoriesHeaderThumbnail/1.png')}
                />
                <Thumbnail 
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2
                  }}
                  source={require('../../assets/StoriesHeaderThumbnail/2.png')}
                />
                <Thumbnail 
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2
                  }}
                  source={require('../../assets/StoriesHeaderThumbnail/3.jpg')}
                />
                <Thumbnail 
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2
                  }}
                  source={require('../../assets/StoriesHeaderThumbnail/4.jpg')}
                />
                <Thumbnail 
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2
                  }}
                  source={require('../../assets/StoriesHeaderThumbnail/5.png')}
                />
                <Thumbnail 
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2
                  }}
                  source={require('../../assets/StoriesHeaderThumbnail/6.png')}
                />
                <Thumbnail 
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2
                  }}
                  source={require('../../assets/StoriesHeaderThumbnail/7.jpg')}
                />
                <Thumbnail 
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2
                  }}
                  source={require('../../assets/StoriesHeaderThumbnail/1.png')}
                />
                <Thumbnail 
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2
                  }}
                  source={require('../../assets/StoriesHeaderThumbnail/2.png')}
                />
              </ScrollView>
            </View>
          </View>

          <CardComponent imageSource='1' likes='101'/>
          <CardComponent imageSource='2' likes='201'/>
          <CardComponent imageSource='3' likes='301'/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})

