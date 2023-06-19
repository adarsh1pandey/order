import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Login.styles';
import {COMMON_CONSTS} from '../../shared/constants';
import CheckBox from '@react-native-community/checkbox';
import {SvgBell, SvgBellBlack, SvgUser} from '../../Assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Login = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
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
      <View style={styles.mainViewStyle}>
        <Text style={styles.signInTextStyle}>{COMMON_CONSTS.SIGN_IN}</Text>
        <View style={styles.signInModalStyle}>
          <View style={styles.upperTextView}>
            <Text style={styles.employeeSignInText}>
              {COMMON_CONSTS.EMPLOYEE_SIGN_IN}
            </Text>
            <Text style={styles.welcomeAndPleaseTextStyle}>
              {COMMON_CONSTS.WELCOME_TO_THE_EMPLOYEE_SIGN_IN_SITE}
            </Text>
            <Text style={styles.welcomeAndPleaseTextStyle}>
              {COMMON_CONSTS.PLEASE_SIGN_IN_WITH_YOUR_EMPLOYEE_ID}
            </Text>
          </View>
          <View style={styles.textInputView}>
            <View style={styles.svgTextInputViewStyle}>
              <SvgBellBlack
                width={widthPercentageToDP(5)}
                height={heightPercentageToDP(5)}
                style={styles.svgStyle}
              />
              <TextInput
                style={styles.textInputStyle}
                placeholder={COMMON_CONSTS.HOTEL}
              />
            </View>
            <View style={styles.svgTextInputViewStyle}>
              <SvgUser
                width={widthPercentageToDP(5)}
                height={heightPercentageToDP(5)}
                style={styles.svgStyle}
              />
              <TextInput
                style={styles.textInputStyle}
                placeholder={COMMON_CONSTS.EMPLOYEE_ID}
              />
            </View>
          </View>
          <View style={styles.rememberMeCheckBoxViewStyle}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.secondaryTextStyle}>
              {COMMON_CONSTS.REMEMBER_ME}
            </Text>
          </View>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>{COMMON_CONSTS.SIGN_IN}</Text>
          </TouchableOpacity>
          <View style={styles.needHelpClickHereStyle}>
            <Text>{COMMON_CONSTS.NEED_HELP}</Text>
            <Text style={styles.clickHereTextStyle}>
              {COMMON_CONSTS.CLICK_HERE}
            </Text>
          </View>
        </View>
        <View style={styles.footerView}>
          <Text style={styles.costumerServicePlatformTextStyle}>
            {COMMON_CONSTS.CUSTOMER}
          </Text>
          <Text style={styles.costumerServicePlatformTextStyle}>
            {COMMON_CONSTS.SERVICE}
          </Text>
          <Text style={styles.costumerServicePlatformTextStyle}>
            {COMMON_CONSTS.PLATFORM}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
