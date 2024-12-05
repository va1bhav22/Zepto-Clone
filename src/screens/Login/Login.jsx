import {
  View,
  Text,
  StatusBar,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppWrapper from '../../components/AppWrapper';
import {myColors} from '../../utils/Colors';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = () => {
  return (
    <AppWrapper>
      <StatusBar backgroundColor={myColors?.violet} />
      <View
        style={{
          flex: 1,
          backgroundColor: myColors?.violet,
          paddingHorizontal: 20,
        }}>
        <Image
          style={{
            width: responsiveScreenWidth(70), // Correct usage without quotes
            height: 100, // Height should be a number
            alignSelf: 'center',
          }}
          source={{
            uri: 'https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2021/12/zepto-1640066094.jpg',
          }}
          resizeMode="cover" // Optional: Set how the image should be resized
        />
        <View style={{flex: 0.6}}>
          <Text
            style={{
              color: myColors?.white,
              fontSize: responsiveFontSize(2),

              top: -20,
              textAlign: 'center',
              letterSpacing: 1.5,
            }}>
            10 Minutes Delivery!
          </Text>
          <Image
            style={{
              width: responsiveScreenWidth(90),
              height: responsiveScreenWidth(90),
            }}
            source={require('../../../assets/Images/food-delivery.png')}
          />
          <Text
            style={{
              color: myColors?.white,
              fontSize: responsiveFontSize(2.5),
              top: -20,

              textAlign: 'center',
              letterSpacing: 1.5,
            }}>
            Meals in Minutes, Happiness Delivered!{' '}
          </Text>
        </View>
        <View style={{flex: 0.4, justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: myColors?.white,
              padding: 15,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
            }}>
            <Image
              style={{
                width: responsiveScreenWidth(8),
                height: responsiveScreenWidth(8),
              }}
              source={require('../../../assets/Images/google.png')}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2.7),
                color: myColors?.gray,
                fontWeight: 600,
                letterSpacing: 1.5,
              }}>
              SignIn With Google
            </Text>
            <AntDesign name="arrowright" size={30} color={myColors?.gray} />
          </TouchableOpacity>
        </View>
      </View>
    </AppWrapper>
  );
};

export default Login;
