import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as SMS from 'expo-sms';

const SendSMS = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendSMS = async () => {
    if (!phoneNumber || !message) {
      Alert.alert('Error', 'Please provide both a phone number and a message.');
      return;
    }

    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = await SMS.sendSMSAsync([phoneNumber], message);
      if (result === 'sent') {
        Alert.alert('Success', 'Message sent successfully!');
      } else {
        Alert.alert('Error', 'Failed to send the message.');
      }
    } else {
      Alert.alert('Error', 'SMS is not available on this device.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Text style={styles.label}>Message:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter your message"
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send SMS" onPress={sendSMS} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default SendSMS;
