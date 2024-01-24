const themeColors = {
  // Primary
  purple1: '#C01048',
  purple2: '#3861fb',
  purple3: '#B0D85A',
  purple4: '#D8ECAC',
  purple5: '#FCFFF6',

  // Secondary
  blue1: '#153a5b',
  blue2: '#153a5b',
  blue3: '#5547FF',
  blue4: '#695EFF',

  // Tertiary
  yelow1: '#FFD006',
  yelow2: '#FFD72E',
  yelow3: '#FFDF58',
  yelow4: '#FFE57C',

  // Text
  text1: '#19171A',
  text2: '#7B7583',
  text3: '#B9B5C2',
  text4: '#000000',
  text5: '#FFFFFF',

  //Background
  background1: '#E2E1E6',
  background2: '#F8F7FA',
  background3: '#FFFFFF',
  background4: '#F9F6FB',
  background5: '#E8DF6A',

  // Notification
  green1: '#07D95A',
  green2: '#9CF0BD',
  red1: '#F8183E',
  red2: '#FCA3B2',

  //Gradient
  gradient1: '#D469C9',
  gradient2: '#A040CC',
  gradient3: '#7F26CD',
  gradient4: '#6A15CE',

  //Base
  gray: '#B9B5C2',
  grayDark: '#5A5C63',
  grayLight: '#D9D9D9',

  //Error
  red: '#B50000',
};

const colors = {
  // color main
  primaryColor: themeColors.purple2,
  secondaryColor: themeColors.blue2,
  tertiaryColor: themeColors.yelow2,
  textColor: themeColors.text2,
  textBoldColor: themeColors.text1,
  backgroundColor: themeColors.background3,
  shadowColor: themeColors.purple5,
  notificationSuccess: themeColors.green1,
  notificationError: themeColors.red1,
  buttonGradient: `linear-gradient(97.71deg, ${themeColors.purple2} 13.18%, ${themeColors.purple2} 42.81%, ${themeColors.purple2} 76.14%, ${themeColors.purple2} 97.53%)`,
  buttonActive: themeColors.purple1,
  buttonDisable: themeColors.gray,
  overlay: themeColors.grayLight,

  //
  other: themeColors,
};

export default colors;
