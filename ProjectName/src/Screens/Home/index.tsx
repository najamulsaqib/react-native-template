import React from 'react';
import {Animated, Easing} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import Header from 'src/Components/Header';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {THomeScreen} from 'src/Navigation/types';
import {LOGOUT} from 'src/Redux/Reducers/Auth/actions';
import globalStyles from 'src/config/globalStyles';
const Home: THomeScreen<'Home'> = () => {
  const fadeValue = React.useRef(new Animated.Value(0)).current;
  const slideValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeValue, {
        toValue: 1,
        duration: 1000, // Adjust the duration as needed
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(slideValue, {
        toValue: 1,
        duration: 1000, // Adjust the duration as needed
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeValue, slideValue]);

  const opacity = fadeValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateY = slideValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50], // Adjust the slide distance as needed
  });
  return (
    <View flexLayout={['flexBase', 'flexCenter']}>
      <Header />
      <Animated.View
        style={{
          opacity,
          transform: [{translateY}],
        }}>
        <Icon
          name="frown"
          type={IconType.AntDesign}
          color={globalStyles.Theme.rippleColor}
          size={50}
        />
      </Animated.View>
      <Text onPress={LOGOUT} typography={'bold'} color="AccentPrimaryColor">
        HOME SCREEN
      </Text>
    </View>
  );
};

export default Home;
