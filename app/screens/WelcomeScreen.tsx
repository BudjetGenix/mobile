/* eslint-disable global-require */
import React, { FC } from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';

import Text from '@components/Text';
import Button from '@components/Button';
import colors from '@config/colors';
import { useAuth } from '@auth/context';

interface WelcomeScreenProps {}

const WelcomeScreen: FC<WelcomeScreenProps> = () => {
  const { login, user } = useAuth();
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require('@assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image
          source={user ? { uri: user.picture } : require('@assets/icon.png')}
          style={styles.logo}
        />
        <Text style={styles.tagLine}>{user ? user.name : 'Tag Line'}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" color={colors.primary} onPress={login} />
        <Button
          title="Register"
          color={colors.secondary}
          onPress={() => console.log('Register')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 75,
    alignItems: 'center',
  },
  tagLine: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
