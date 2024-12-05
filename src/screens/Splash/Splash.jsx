/* eslint-disable react-native/no-inline-styles */
import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import AppWrapper from '../../components/AppWrapper';
import {myColors} from '../../utils/Colors';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('key')
        .then(res => {
          if (res) {
            navigation.replace('Homepage');
          } else {
            navigation.replace('Login');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }, 7000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //   AsyncStorage.getItem('token')
  //     .then(res => {
  //       if (res) {
  //         navigation.navigate('Homepage');
  //       } else {
  //         navigation.navigate('Login');
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  return (
    <AppWrapper>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: myColors?.violet,
        }}>
        <StatusBar hidden />
        <Image
          style={{
            width: responsiveScreenWidth('100'),
            height: '100',
          }}
          source={{
            uri: 'https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2021/12/zepto-1640066094.jpg',
          }}
        />
      </View>
    </AppWrapper>
  );
};

export default Splash;
