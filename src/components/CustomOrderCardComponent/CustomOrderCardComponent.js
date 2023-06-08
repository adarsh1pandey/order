import {View, Text} from 'react-native';
import React from 'react';
import styles from './CustomOrderCardComponent.styles';

const CustomOrderCardComponent = ({
  status,
  guest,
  room,
  location,
  guestRoomLocationView,
  statusView,
  roomView,
  textStyle,
  index,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.statusView(index), statusView]}>
        <Text style={[styles.textStatus, textStyle]}>{status}</Text>
      </View>
      <View style={[styles.guestRoomLocationView, guestRoomLocationView]}>
        <View style={styles.guestView}>
          <Text style={[styles.textGuestRoomLocationView, textStyle]}>
            {guest}
          </Text>
        </View>
        <View style={[styles.roomView, roomView]}>
          <Text style={[styles.textGuestRoomLocationView, textStyle]}>
            {room}
          </Text>
        </View>
        <View style={styles.locationView}>
          <Text style={[styles.textGuestRoomLocationView, textStyle]}>
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomOrderCardComponent;
