import React from 'react';
import { Modal, View } from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';
import colors from '../styles/colors';

const Loader = ({isLoading = false}) => {
  if (isLoading) {
    return (
      <Modal transparent visible={isLoading}>
        <View
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 0,
            top: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <UIActivityIndicator size={80} color={colors.theme} />
        </View>
      </Modal>
    );
  }
  return null;
};

export default Loader;
