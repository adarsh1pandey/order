import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    // height: hp(7),
    paddingTop: hp(2),
    width: wp(100),
    backgroundColor: '#a5c5d2',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerTextStyle: {
    alignSelf: 'flex-end',
    fontSize: RFValue(23),
    fontWeight: '600',
    color: '#fff',
    paddingBottom: hp(1),
    fontFamily: 'Oswald-Bold',
  },
  mainView: {
    backgroundColor: '#3c4f59',
    // height: hp(94),
  },
  titleMainViewText: {
    fontSize: RFValue(22),
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    marginVertical: hp(1.5),
    fontFamily: 'Oswald-SemiBold',
  },
  cardView: {
    paddingVertical: hp(1),
    width: wp(94),
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: wp(0.5),
    borderColor: '#9ebdca',
    borderRadius: wp(3),
  },
  guestRoomViewStyle: {
    borderWidth: 0,
  },
  statusViewStyle: {
    borderWidth: 0,
    backgroundColor: '#3c4f59',
  },
  roomViewStyle: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  employeeInfoSignOutView: {
    marginTop: hp(6),
    backgroundColor: '#d2e2e9',
    height: hp(20),
    justifyContent: 'center',
  },
  curveView: {
    backgroundColor: '#3c4f59',
    height: wp(50),
    width: wp(50),
    borderRadius: wp(40),
    zIndex: 1,
    position: 'absolute',
    top: hp(17),
    left: wp(25),
  },
  signedInAsStyle: {
    alignSelf: 'center',
    color: '#3c4f59',
    fontWeight: '500',
  },
  nameStyle: {
    color: '#3c4f59',
    fontWeight: '600',
    alignSelf: 'center',
    fontSize: RFValue(16),
    paddingVertical: hp(0.5),
  },
  buttonStyle: {
    backgroundColor: '#3c4f59',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: wp(3),
  },
  buttonTextStyle: {
    fontSize: RFValue(16),
    color: '#fff',
    paddingVertical: wp(3),
    paddingHorizontal: wp(8),
    fontWeight: '700',
    fontFamily: 'Oswald-Bold',
  },
  completedOrderStatusView: {
    backgroundColor: '#606971',
  },
  textStyle: {
    color: '#a19f95',
  },
  footerView: {
    height: hp(7),
    backgroundColor: '#3c4f59',
  },
});

export default styles;
