import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
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
  svgTextInputViewStyle: {
    flexDirection: 'row',
  },
  headerTextStyle: {
    alignSelf: 'flex-end',
    fontSize: RFValue(23),
    fontWeight: '600',
    color: '#fff',
    paddingBottom: hp(1),
    fontFamily: 'Oswald-Bold',
  },
  mainViewStyle: {
    backgroundColor: '#3c4f59',
    height: hp(95),
  },
  signInModalStyle: {
    backgroundColor: '#fff',
    width: wp(95),
    alignSelf: 'center',
    borderRadius: wp(6),
  },
  signInTextStyle: {
    fontSize: RFValue(20),
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: hp(3),
    fontFamily: 'Oswald-SemiBold',
  },
  employeeSignInText: {
    textAlign: 'center',
    fontSize: RFValue(30),
    color: '#3c4f59',
    fontWeight: '400',
  },
  welcomeAndPleaseTextStyle: {
    fontSize: RFValue(12),
    textAlign: 'center',
    color: '#606974',
  },
  upperTextView: {
    marginVertical: hp(5),
  },
  textInputStyle: {
    width: wp(70),
    borderBottomWidth: 1,
    paddingLeft: wp(9),
    color: '#000',
  },
  textInputView: {
    alignSelf: 'center',
  },
  secondaryTextStyle: {
    color: '#939393',
    textAlign: 'center',
    alignSelf: 'center',
  },
  footerView: {
    marginTop: hp(4),
    paddingBottom: 0,
  },
  costumerServicePlatformTextStyle: {
    color: '#a5c5d2',
    fontSize: RFValue(24),
    fontWeight: '900',
    textAlign: 'center',
  },

  buttonStyle: {
    backgroundColor: '#3c4f59',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: wp(2),
    marginVertical: hp(1.5),
  },
  buttonTextStyle: {
    color: '#fff',
    fontSize: RFValue(15),
    fontWeight: '600',
    paddingVertical: hp(1),
    paddingHorizontal: hp(5),
  },
  rememberMeCheckBoxViewStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: hp(4),
    color: '#f00',
  },
  needHelpClickHereStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: hp(4),
  },
  svgStyle: {
    position: 'absolute',
    alignSelf: 'center',
  },
  clickHereTextStyle: {
    borderBottomWidth: 0.5,
    color: '#000',
  },
  errorStyle: {
    marginLeft: wp(12.5),
    color: '#f00',
  },
  blurView: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  loadingView: {
    height: heightPercentageToDP(100),
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  checkBoxStyle: {
    color: '#000',
  },
});

export default styles;
