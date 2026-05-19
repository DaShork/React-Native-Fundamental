import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles';

export default function TaskCard({ item, onPress, onEdit, onDelete }) {
  return (
    <TouchableOpacity
      style={[styles.card, item.completed && styles.cardCompleted]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.cardText}>
        <Text style={[styles.cardTitle, item.completed && styles.completedText]}>
          {item.title}
        </Text>
        <Text style={styles.cardDetail}>{item.detail || 'No detail provided'}</Text>
      </View>
      <View style={styles.cardActions}>
        {onEdit && (
          <TouchableOpacity style={styles.iconButton} onPress={onEdit}>
            <Ionicons name="pencil" size={18} color="#5B4EFF" />
          </TouchableOpacity>
        )}
        {onDelete && (
          <TouchableOpacity style={styles.iconButton} onPress={onDelete}>
            <Ionicons name="trash-outline" size={18} color="#FF4D4F" />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}
