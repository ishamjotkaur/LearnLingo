import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const ConversationSimulator = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiEndpoint = 'https://api.perplexity.ai/chat/completions';
  const apiKey = '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'; 

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    setLoading(true);
    setError(null);

    // Add user message to chat
    const userMessage = { role: 'user', content: inputMessage };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputMessage('');

    try {
      const headers = {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      };

      const data = {
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [
          {
            role: 'system',
            content:
              'You are a casual and friendly chatbot. Your replies should always feel like a relaxed, ongoing conversation. Always give short and friendly responses, and ask a follow-up question to keep the chat going.',
          },
          ...updatedMessages,
        ],
      };

      const response = await axios.post(apiEndpoint, data, { headers });

      if (response.data?.choices?.[0]?.message) {
        const botMessage = {
          role: 'assistant',
          content: response.data.choices[0].message.content,
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error('Invalid response format from API');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setError(
        err.response?.data?.message ||
          err.message ||
          'Failed to get response from the bot.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.role === 'user' ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.content}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.messagesList}
      />

      {loading && <ActivityIndicator style={styles.loading} />}
      {error && <Text style={styles.errorText}>{error}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholder="Ask me anything..."
          editable={!loading}
          multiline
        />
        <Button
          title="Send"
          onPress={sendMessage}
          disabled={loading || !inputMessage.trim()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  messagesList: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    padding: 12,
    borderRadius: 18,
    marginVertical: 5,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
    borderBottomRightRadius: 2,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
    borderBottomLeftRadius: 2,
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    minHeight: 40,
    maxHeight: 100,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  loading: {
    marginVertical: 10,
  },
});

export default ConversationSimulator;
