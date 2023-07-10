import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Login.styles';
import {COMMON_CONSTS, objectToFormData} from '../../shared/constants';
import CheckBox from '@react-native-community/checkbox';
import {SvgBell, SvgBellBlack, SvgUser} from '../../Assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import axios from 'axios';
import {BlurView} from '@react-native-community/blur';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [hotel, setHotel] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showApiError, setShowApiError] = useState(false);

  const makeRequest = async () => {
    const url = 'https://api.tapservice.dk/manager/code';
    const solution = hotel;
    const code = employeeId;
    const apiKey = 'rMDZS9QXZc7byh67vVn7SGYAf9Xq4JBU';
    // const cookie = 'PHPSESSID=1e97c4f234786aefdedc0ed7c01c6648';

    try {
      setLoading(true);
      const response = await axios.post(url, null, {
        params: {solution, code},
        headers: {
          APIKEY: apiKey,
          // Cookie: cookie,
        },
      });
      response?.status === 200
        ? navigation.navigate('Orders', {
            hotel: hotel,
            name: response?.data?.name,
            manager: 2,
          })
        : setShowApiError(true);

      console.log(response, 'this is response brother '); // Handle the response data
    } catch (error) {
      console.error(error);
      setShowApiError(true); // Handle errors
    } finally {
      setLoading(false);
    }

    const apiUrl = 'https://api.tapservice.dk/manager/devicetoken/add';
    const manager = 2;
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
      setShowApiError(true); // Handle errors
    } finally {
      setLoading(false);
    }
  };

  // Call the function to make the API request

  const handleHotelTextChange = value => {
    setHotel(value.trim());
  };
  const handleEmployeeIdChange = value => {
    setEmployeeId(value);
  };
  const handleSignInPress = () => {
    hotel && employeeId
      ? (makeRequest(), setShowError(false))
      : setShowError(true);
  };
  return (
    <KeyboardAwareScrollView
      style={{flex: 1}}
      enableAutomaticScroll={false}
      extraHeight={false}
      extraScrollHeight={false}>
      <View style={{flex: 1}}>
        <View style={styles.headerView}>
          <Text
            onPress={() => console.log('text pressed ')}
            style={styles.headerTextStyle}>
            {COMMON_CONSTS.AT_YOUR}{' '}
          </Text>
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
                  onChangeText={value => handleHotelTextChange(value)}
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
                  onChangeText={value => handleEmployeeIdChange(value)}
                />
              </View>
            </View>
            {showError && (
              <Text style={styles.errorStyle}>
                {COMMON_CONSTS.ENTER_ALL_FIELDS}
              </Text>
            )}
            {showApiError && (
              <Text style={styles.errorStyle}>
                {COMMON_CONSTS.SOMETHING_WENT_WRONG}
              </Text>
            )}
            <View style={styles.rememberMeCheckBoxViewStyle}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
                style={styles.checkBoxStyle}
              />
              <Text style={styles.secondaryTextStyle}>
                {COMMON_CONSTS.REMEMBER_ME}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => handleSignInPress()}>
              <Text style={styles.buttonTextStyle}>
                {COMMON_CONSTS.SIGN_IN}
              </Text>
            </TouchableOpacity>
            <View style={styles.needHelpClickHereStyle}>
              <Text style={styles.secondaryTextStyle}>
                {COMMON_CONSTS.NEED_HELP}
              </Text>
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

        {loading && (
          <BlurView style={styles.blurView} blurType="light" blurAmount={1} />
        )}
        {loading && (
          <View style={styles.loadingView}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
