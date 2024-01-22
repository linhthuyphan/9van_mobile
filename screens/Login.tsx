import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Padding,
  Color,
  Border,
  FontFamily,
  FontSize,
  StyleVariable,
} from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <View style={styles.producthome}>
        <View style={styles.logo}>
          <View style={styles.logoLight}>
            <View style={styles.container}>
              <Text style={styles.vn}>9Văn</Text>
              <Image
                style={[styles.isolationModeIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/isolation-mode4.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.container1}>
          <Text style={styles.sitetitle}>siteTitle</Text>
        </View>
      </View>
      <View style={styles.ngNhp}>
        <Pressable
          style={[styles.apple, styles.appleLayout]}
          onPress={() => navigation.navigate("Role")}
        >
          <View style={[styles.apple1, styles.apple1FlexBox]}>
            <Image
              style={styles.icons8AppleLogo1}
              resizeMode="cover"
              source={require("../assets/icons8applelogo-11.png")}
            />
            <Text style={[styles.ngNhpVi, styles.nhpTypo]}>
              Đăng nhập với Apple
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.google, styles.appleLayout]}
          onPress={() => navigation.navigate("Role")}
        >
          <View style={[styles.google1, styles.apple1FlexBox]}>
            <Image
              style={styles.icons8AppleLogo1}
              resizeMode="cover"
              source={require("../assets/icons8google-1.png")}
            />
            <View style={[styles.ngNhpViGoogleWrapper, styles.appleFlexBox]}>
              <Text style={[styles.ngNhpVi1, styles.nhpTypo]}>
                Đăng nhập với Google
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={[styles.text02, styles.textFlexBox]}>
        <Text style={styles.hyNgNhp}>Hãy đăng nhập để truy cập tài khoản</Text>
      </View>
      <View style={[styles.text01, styles.textFlexBox]}>
        <Text style={styles.choMngBn}>Chào mừng bạn đến với 9văn.com</Text>
      </View>
      <Image
        style={[styles.nhBaIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/nh-ba.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  appleLayout: {
    paddingVertical: Padding.p_9xs,
    height: 41,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    width: 210,
    marginLeft: -105,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  apple1FlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  nhpTypo: {
    fontFamily: FontFamily.update,
    fontWeight: "500",
    lineHeight: 17,
    color: Color.black,
    fontSize: FontSize.update_size,
    textAlign: "left",
  },
  appleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  vn: {
    bottom: 11,
    left: 49,
    fontSize: FontSize.vanWeb_size,
    fontWeight: "700",
    fontFamily: FontFamily.vanWeb,
    textAlign: "left",
    position: "absolute",
  },
  isolationModeIcon: {
    height: "100%",
    width: "23.13%",
    top: "0%",
    right: "74.83%",
    bottom: "0%",
    left: "2.04%",
  },
  container: {
    width: 147,
    height: 24,
  },
  logoLight: {
    width: 106,
    overflow: "hidden",
  },
  logo: {
    width: 115,
    padding: StyleVariable.space050,
  },
  sitetitle: {
    lineHeight: 20,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    color: Color.colorTextSubtlest,
    fontSize: FontSize.update_size,
    textAlign: "left",
  },
  container1: {
    borderColor: Color.colorBorderInput,
    borderRightWidth: 1,
    paddingRight: StyleVariable.space200,
    display: "none",
    marginLeft: 16,
    borderStyle: "solid",
    flexDirection: "row",
  },
  producthome: {
    marginLeft: -60,
    top: 818,
    width: 120,
    height: 45,
    paddingRight: StyleVariable.space050,
    alignItems: "center",
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  icons8AppleLogo1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  ngNhpVi: {
    marginLeft: 10,
    color: Color.black,
  },
  apple1: {
    paddingHorizontal: Padding.p_8xs,
  },
  apple: {
    top: 68,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
  },
  ngNhpVi1: {
    color: Color.black,
  },
  ngNhpViGoogleWrapper: {
    marginLeft: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  google1: {
    width: 200,
    height: 33,
    paddingHorizontal: Padding.p_23xl,
    backgroundColor: Color.colorTextInverse,
  },
  google: {
    top: 0,
    paddingHorizontal: Padding.p_7xs,
  },
  ngNhp: {
    top: 654,
    height: 109,
    width: 210,
    marginLeft: -105,
    left: "50%",
    position: "absolute",
  },
  hyNgNhp: {
    fontSize: FontSize.title_size,
    lineHeight: 20,
    fontFamily: FontFamily.input,
    color: Color.role,
    textAlign: "left",
  },
  text02: {
    marginLeft: -158,
    top: 546,
    width: 316,
  },
  choMngBn: {
    fontSize: FontSize.h1_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.menu,
    textAlign: "center",
    color: Color.black,
  },
  text01: {
    marginLeft: -190,
    top: 458,
    width: 380,
  },
  nhBaIcon: {
    height: "41.85%",
    width: "91.63%",
    top: "5.15%",
    right: "4.19%",
    bottom: "53%",
    left: "4.19%",
  },
  login: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorTextInverse,
  },
});

export default Login;
