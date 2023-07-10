import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COMMON_CONSTS} from '../../shared/constants';
import styles from './Orders.styles';
import CustomOrderCardComponent from '../../components/CustomOrderCardComponent/CustomOrderCardComponent';
import {SvgBell} from '../../Assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import axios from 'axios';

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

const Orders = ({navigation, route}) => {
  const hotel = route?.params?.hotel;
  const name = route?.params?.name;
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const makeRequest = async () => {
    const url = 'https://api.tapservice.dk/query/order';
    const solution = hotel;
    const manager = 1;
    const archive = 90000;
    const apiKey = 'rMDZS9QXZc7byh67vVn7SGYAf9Xq4JBU';
    // const cookie = 'PHPSESSID=1e97c4f234786aefdedc0ed7c01c6648';

    try {
      setLoading(true);
      const response = await axios.post(url, null, {
        params: {solution, manager, archive},
        headers: {
          APIKEY: apiKey,
          // Cookie: cookie,
        },
      });
      response?.status === 200 ? setResult(response?.data) : null;

      console.log(response, 'this is response brother '); // Handle the response data
    } catch (error) {
      console.error(error); // Handle errors
    } finally {
      setLoading(false);
    }

    const apiUrl = 'https://api.tapservice.dk/manager/devicetoken/delete';
    // const formData = objectToFormData(data);
    try {
      setLoading(true);
      const response = await axios.post(
        apiUrl,
        {
          solution: solution,
          manager: manager,
          // devicetoken: deviceToken,
        },
        {
          headers: {
            APIKEY: apiKey,
          },
        },
      );
      // response?.status === 200
      //   ? navigation.navigate('Orders', {
      //       hotel: hotel,
      //       name: response?.data?.name,
      //     })
      //   : setShowApiError(true);

      console.log(response, 'this is response brother '); // Handle the response data
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOutButtonPress = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
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
          {result?.map((value, index) => (
            <CustomOrderCardComponent
              key={index}
              status={COMMON_CONSTS.NEW}
              guest={value?.guest}
              room={value?.room}
              location={value?.location}
              index={index}
              statusView={
                value.status === 'red' ? {backgroundColor: '#a9132a'} : null
              }
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
          <Text style={styles.nameStyle}>{name}</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleSignOutButtonPress()}>
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
