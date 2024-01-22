import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontFamily,
  Padding,
  Color,
  Border,
  FontSize,
  StyleVariable,
} from "../GlobalStyles";

const Logout = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.logout}>
      <View style={[styles.producthome, styles.actionsFlexBox]}>
        <View style={styles.logo}>
          <View style={styles.logoLight}>
            <View style={styles.container}>
              <Text style={styles.vn}>9Văn</Text>
              <Image
                style={[styles.isolationModeIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/isolation-mode.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.container1}>
          <Text style={[styles.sitetitle, styles.sitetitleTypo]}>
            siteTitle
          </Text>
        </View>
      </View>
      <View style={styles.ngNhp}>
        <Pressable
          style={[styles.apple, styles.appleLayout]}
          onPress={() => navigation.navigate("Role")}
        >
          <View style={[styles.apple1, styles.apple1FlexBox]}>
            <Image
              style={[styles.icons8AppleLogo1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icons8applelogo-1.png")}
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
              style={[styles.icons8AppleLogo1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icons8google-1.png")}
            />
            <View style={[styles.ngNhpViGoogleWrapper, styles.textFlexBox1]}>
              <Text style={[styles.ngNhpVi1, styles.nhpTypo]}>
                Đăng nhập với Google
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={[styles.text02, styles.textFlexBox]}>
        <Text style={[styles.hyNgNhp, styles.titleTypo]}>
          Hãy đăng nhập để truy cập tài khoản
        </Text>
      </View>
      <View style={[styles.text01, styles.textFlexBox]}>
        <Text style={styles.choMngBn}>Chào mừng bạn đến với 9văn.com</Text>
      </View>
      <Image
        style={[styles.nhBaIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/nh-ba.png")}
      />
      <View style={styles.flag}>
        <View style={styles.containerIconTitleDism}>
          <View style={styles.containerIconTitle}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/parts--icon--success-checkcircleicon.png")}
            />
            <View style={styles.containerTitle}>
              <Text style={[styles.title, styles.titleTypo]}>
                Đăng xuất thành công
              </Text>
            </View>
          </View>
          <View style={styles.containerCustomIconButton}>
            <View style={[styles.dismissbutton, styles.textFlexBox1]}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon7.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.collapsableContent}>
          <Text style={[styles.description, styles.textClr]}>
            Additional information that will help users understand the flag
          </Text>
          <View style={[styles.actions, styles.actionsFlexBox]}>
            <View style={[styles.button, styles.apple1FlexBox]}>
              <View style={[styles.container2, styles.textFlexBox1]}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before.png")}
                />
                <Text style={[styles.children, styles.nhpTypo]}>
                  Understood
                </Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before.png")}
                />
              </View>
            </View>
            <Text style={[styles.text, styles.textClr]}>·</Text>
            <View style={[styles.button, styles.apple1FlexBox]}>
              <View style={[styles.container2, styles.textFlexBox1]}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before.png")}
                />
                <Text style={[styles.children, styles.nhpTypo]}>No thanks</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sitetitleTypo: {
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    textAlign: "left",
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
  iconLayout: {
    width: 24,
    height: 24,
  },
  nhpTypo: {
    fontFamily: FontFamily.update,
    fontWeight: "500",
    fontSize: FontSize.update_size,
  },
  textFlexBox1: {
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
  titleTypo: {
    fontFamily: FontFamily.input,
    textAlign: "left",
  },
  textClr: {
    color: Color.colorTextSubtle,
    lineHeight: 20,
    fontSize: FontSize.update_size,
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
    color: Color.colorTextSubtlest,
    lineHeight: 20,
    fontSize: FontSize.update_size,
  },
  container1: {
    borderColor: Color.colorBorderInput,
    borderRightWidth: 1,
    paddingRight: StyleVariable.space200,
    marginLeft: 16,
    display: "none",
    borderStyle: "solid",
    flexDirection: "row",
  },
  producthome: {
    marginLeft: -58,
    top: 818,
    width: 117,
    height: 42,
    paddingRight: StyleVariable.space050,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  icons8AppleLogo1: {
    overflow: "hidden",
  },
  ngNhpVi: {
    marginLeft: 10,
    color: Color.black,
    lineHeight: 17,
    fontFamily: FontFamily.update,
    fontWeight: "500",
    textAlign: "left",
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
    lineHeight: 17,
    fontFamily: FontFamily.update,
    fontWeight: "500",
    textAlign: "left",
  },
  ngNhpViGoogleWrapper: {
    marginLeft: 8,
    flexDirection: "row",
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
    color: Color.role,
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
  title: {
    color: Color.colorTextDefault,
    lineHeight: 20,
    fontSize: FontSize.update_size,
    flex: 1,
  },
  containerTitle: {
    paddingLeft: StyleVariable.space200,
    paddingTop: StyleVariable.space025,
    paddingBottom: StyleVariable.space075,
    flexDirection: "row",
    flex: 1,
  },
  containerIconTitle: {
    paddingTop: StyleVariable.space050,
    flexDirection: "row",
    flex: 1,
  },
  icon: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  dismissbutton: {
    width: 32,
    height: 32,
    padding: Padding.p_9xs,
    borderRadius: Border.br_10xs,
    flexDirection: "row",
  },
  containerCustomIconButton: {
    paddingLeft: StyleVariable.space100,
    flexDirection: "row",
  },
  containerIconTitleDism: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  description: {
    alignSelf: "stretch",
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    textAlign: "left",
    display: "none",
  },
  iconBefore: {
    display: "none",
    overflow: "hidden",
  },
  children: {
    color: Color.colorBackgroundBrandBoldDefault,
    marginLeft: 4,
    textAlign: "center",
    lineHeight: 20,
  },
  iconAfter: {
    marginLeft: 4,
    display: "none",
    overflow: "hidden",
  },
  container2: {
    flexDirection: "row",
  },
  button: {
    paddingHorizontal: StyleVariable.space150,
    minHeight: 24,
    borderRadius: Border.br_10xs,
  },
  text: {
    fontFamily: FontFamily.sFProText,
    display: "flex",
    width: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  actions: {
    paddingTop: StyleVariable.space100,
    alignSelf: "stretch",
  },
  collapsableContent: {
    paddingLeft: StyleVariable.space500,
    alignSelf: "stretch",
    display: "none",
  },
  flag: {
    top: 48,
    left: 18,
    shadowColor: "rgba(9, 30, 66, 0.31)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    width: 346,
    padding: StyleVariable.space200,
    borderRadius: Border.br_10xs,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorTextInverse,
  },
  logout: {
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorTextInverse,
  },
});

export default Logout;
