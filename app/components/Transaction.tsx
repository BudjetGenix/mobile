import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface TransactionProps {
  type?: 'add' | 'remove';
  amount?: string;
  name?: string;
  id?: string;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  location?: {
    longitude?: number;
    latitude?: number;
  };
}

const Transaction: FC<TransactionProps> = ({
  amount,
  name,
  type,
  icon,
  location,
}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <View style={styles.leftContainer}>
          <MaterialCommunityIcons name={icon} color="#000" size={24} />
        </View>
      )}
      <View style={styles.rightContainer}>
        <View style={styles.amount}>
          {type === 'add' ? <Text>+</Text> : <Text>-</Text>}
          {amount && <Text>{amount}€</Text>}
        </View>
        {name && <Text style={styles.textWhite}>{name}</Text>}
        {location && <View />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 112,
    width: 330,
    left: 0,
    display: 'flex',
    backgroundColor: '#5C5F7C',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    borderRadius: 24,
    borderColor: '#51546F',
    borderWidth: 1,
    marginRight: 15,
    marginLeft: 15,
  },
  rightContainer: {
    display: 'flex',
  },
  amount: {
    display: 'flex',
    flexDirection: 'row',
  },
  textRed: {},
  textGreen: {},
  textWhite: {
    color: '#fff',
  },
});

export default Transaction;
