import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    marginVertical: hp(0.5),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusView: index => ({
    width: wp(18),
    justifyContent: 'center',
    paddingHorizontal: wp(1.5),
    paddingVertical: wp(0.8),
    alignSelf: 'center',
    borderWidth: wp(0.5),
    borderColor: '#728c98',
    borderRadius: wp(3),
    backgroundColor: index === 2 ? '#a9132a' : '#5fa841',
  }),
  guestRoomLocationView: {
    width: wp(70),
    flexDirection: 'row',
    borderWidth: wp(0.56),
    borderColor: '#728c98',
    borderRadius: wp(4),
    paddingHorizontal: wp(1.5),
    paddingVertical: wp(0.8),
  },
  textGuestRoomLocationView: {
    marginHorizontal: wp(1),
    color: '#fff',
    flexWrap: 'wrap',
    fontSize: RFValue(11),
    fontFamily: 'Oswald-Light',
  },
  textStatus: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: RFValue(12),
    fontWeight: '500',
    fontFamily: 'Oswald-Light',
  },
  locationView: {
    width: wp(24),
  },
  roomView: {
    width: wp(13),
    borderLeftWidth: wp(0.6),
    borderRightWidth: wp(0.6),
    borderLeftColor: '#6c8590',
    borderRightColor: '#6c8590',
  },
  guestView: {
    width: wp(29),
  },
});

export default styles;
