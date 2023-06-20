import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {COMMON_CONSTS} from '../../shared/constants';
import styles from './Orders.styles';
import CustomOrderCardComponent from '../../components/CustomOrderCardComponent/CustomOrderCardComponent';
import {SvgBell} from '../../Assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const orderInProgress = [
  {status: 'NEW', guest: 'MALIK SMITH', room: '215', location: 'MY ROOM'},
  {
    status: 'NEW',
    guest: 'JONAS MIDGAARD',
    room: '465',
    location: 'ROOMSERVICE',
  },
  {
    status: 'NEW',
    guest: 'CLAUDIA JOHNES',
    room: '233',
    location: 'SPA',
  },
];

const completedOrders = [
  {
    status: 'CLOSED',
    guest: 'CLAUDIA JOHNES',
    room: '233',
    location: 'SPA',
  },
  {
    status: 'CLOSED',
    guest: 'GITTE PETERSEN',
    room: '142',
    location: 'SPA',
  },
  {
    status: 'CLOSED',
    guest: 'CLAUS MOGENSEN',
    room: '445',
    location: 'MY ROOM',
  },
  {
    status: 'CLOSED',
    guest: 'YSEPH RAWEN',
    room: '355',
    location: 'ROOMSERVICE',
  },
];

const Orders = () => {
  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerTextStyle}>{COMMON_CONSTS.AT_YOUR} </Text>
        <SvgBell
          width={widthPercentageToDP(8)}
          height={heightPercentageToDP(5.5)}
        />
        <Text style={styles.headerTextStyle}> {COMMON_CONSTS.SERVICE}</Text>
      </View>

      <ScrollView style={styles.mainView}>
        <Text style={styles.titleMainViewText}>
          {COMMON_CONSTS.ORDER_IN_PROGRESS}
        </Text>
        <View style={styles.cardView}>
          <CustomOrderCardComponent
            guestRoomLocationView={styles.guestRoomViewStyle}
            statusView={styles.statusViewStyle}
            roomView={styles.roomViewStyle}
            status={COMMON_CONSTS.STATUS}
            guest={COMMON_CONSTS.GUEST}
            room={COMMON_CONSTS.ROOM}
            location={COMMON_CONSTS.LOCATION}
          />
          {orderInProgress?.map((value, index) => (
            <CustomOrderCardComponent
              key={index}
              status={value?.status}
              guest={value?.guest}
              room={value?.room}
              location={value?.location}
              index={index}
            />
          ))}
        </View>
        <Text style={styles.titleMainViewText}>
          {COMMON_CONSTS.COMPLETED_ORDERS}
        </Text>
        <View style={styles.cardView}>
          {completedOrders?.map((value, index) => (
            <CustomOrderCardComponent
              key={index}
              textStyle={styles.textStyle}
              statusView={styles.completedOrderStatusView}
              status={value?.status}
              guest={value?.guest}
              room={value?.room}
              location={value?.location}
            />
          ))}
        </View>
        <View style={styles.employeeInfoSignOutView}>
          <Text style={styles.signedInAsStyle}>
            {COMMON_CONSTS.SIGNED_IN_AS}
          </Text>
          <Text style={styles.nameStyle}>{COMMON_CONSTS.MARK_TAPPERT}</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => console.log('button pressend')}>
            <Text style={styles.buttonTextStyle}>{COMMON_CONSTS.SIGN_OUT}</Text>
          </TouchableOpacity>
          <View style={styles.curveView} />
        </View>
        <View style={styles.footerView} />
      </ScrollView>
    </View>
  );
};

export default Orders;
