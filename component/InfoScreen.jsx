import React from 'react';
import { View, Text } from 'react-native';

function InfoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Это страница с информацией.</Text>
      {/* Добавьте сюда свою информацию, например, текст, списки или другие компоненты */}
    </View>
  );
}

export default InfoScreen;