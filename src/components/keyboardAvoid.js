import React from 'react';
import {
 
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native';

const KeyboardAvoidingComponent = ({children}) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}>
        <ScrollView style={{flex:1}}>
            <TouchableWithoutFeedback style={{flex:1}} onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default KeyboardAvoidingComponent;