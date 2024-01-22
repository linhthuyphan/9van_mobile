import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  Color,
  FontFamily,
  Padding,
  Border,
  FontSize,
  StyleVariable,
} from "../GlobalStyles";

const Role = () => {
  return (
    <View style={styles.role}>
      <View style={[styles.checkbox, styles.checkboxFlexBox]}>
        <View style={styles.checkboxContainer}>
          <View style={[styles.checkboxitem, styles.iconLayout]}>
            <View style={[styles.box, styles.boxBorder]} />
          </View>
        </View>
        <View style={styles.label}>
          <Text style={styles.label1}>
            Nhớ vai trò tôi chọn và không hiển thị lần sau
          </Text>
          <Text style={[styles.required, styles.requiredTypo]}>*</Text>
        </View>
      </View>
      <View style={styles.text03}>
        <Text style={styles.btUVi}>Bắt đầu với vai trò ...</Text>
      </View>
      <View style={[styles.text02, styles.textPosition]}>
        <Text style={[styles.websiteChmBi, styles.buttonFlexBox]}>
          Website chấm bài thông minh và hỗ trợ rèn luyện môn văn hiệu quả
        </Text>
      </View>
      <View style={[styles.text01, styles.textPosition]}>
        <Text style={styles.btUVi}>Chào mừng bạn đến với 9văn.com</Text>
      </View>
      <View style={[styles.producthome, styles.checkboxFlexBox]}>
        <View style={styles.logo}>
          <View style={styles.logoLight}>
            <View style={styles.container}>
              <Text style={styles.vn}>9Văn</Text>
              <Image
                style={styles.isolationModeIcon}
                resizeMode="cover"
                source={require("../assets/isolation-mode4.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.container1, styles.boxBorder]}>
          <Text style={[styles.sitetitle, styles.requiredTypo]}>siteTitle</Text>
        </View>
      </View>
      <View style={styles.vaiTr}>
        <View style={[styles.roleComponent, styles.roleLayout]}>
          <Image
            style={styles.image1Icon}
            resizeMode="cover"
            source={require("../assets/image-1.png")}
          />
          <View style={[styles.button, styles.buttonFlexBox]}>
            <View style={[styles.container2, styles.buttonFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before3.png")}
              />
              <Text style={styles.children}>Học sinh</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-after6.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.roleComponent1, styles.roleLayout]}>
          <Image
            style={styles.image1Icon}
            resizeMode="cover"
            source={require("../assets/image-11.png")}
          />
          <View style={[styles.button, styles.buttonFlexBox]}>
            <View style={[styles.container2, styles.buttonFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before3.png")}
              />
              <Text style={styles.children}>Giáo viên</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-after6.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  boxBorder: {
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
  },
  requiredTypo: {
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    textAlign: "left",
  },
  textPosition: {
    width: 388,
    marginLeft: -194,
    padding: Padding.p_3xs,
    justifyContent: "center",
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  roleLayout: {
    width: 183,
    borderWidth: 4,
    borderColor: Color.role,
    borderRadius: Border.br_mini,
    top: 0,
    height: 215,
    borderStyle: "solid",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorTextInverse,
  },
  box: {
    height: "58.33%",
    width: "58.33%",
    top: "20.83%",
    right: "20.83%",
    bottom: "20.83%",
    left: "20.83%",
    borderRadius: Border.br_11xs,
    borderWidth: 2,
    position: "absolute",
    backgroundColor: Color.colorTextInverse,
  },
  checkboxitem: {
    height: 24,
  },
  checkboxContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
  },
  label1: {
    fontSize: FontSize.contentNotifi_size,
    color: Color.stroke,
    textAlign: "left",
    fontFamily: FontFamily.input,
    lineHeight: 20,
  },
  required: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.colorTextDanger,
    display: "none",
    fontWeight: "600",
  },
  label: {
    marginLeft: 4,
    flexDirection: "row",
  },
  checkbox: {
    top: 775,
    left: 42,
  },
  btUVi: {
    fontSize: FontSize.h1_size,
    lineHeight: 24,
    fontFamily: FontFamily.menu,
    color: Color.black,
    textAlign: "center",
    fontWeight: "600",
  },
  text03: {
    marginLeft: -121,
    top: 346,
    width: 242,
    padding: Padding.p_3xs,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  websiteChmBi: {
    fontSize: FontSize.title_size,
    lineHeight: 20,
    color: Color.role,
    display: "flex",
    width: 367,
    textAlign: "center",
    fontFamily: FontFamily.input,
  },
  text02: {
    top: 261,
  },
  text01: {
    top: 202,
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
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
    fontSize: FontSize.update_size,
    lineHeight: 20,
  },
  container1: {
    borderRightWidth: 1,
    paddingRight: StyleVariable.space200,
    marginLeft: 16,
    display: "none",
    flexDirection: "row",
  },
  producthome: {
    top: 100,
    left: 155,
    width: 120,
    height: 45,
    paddingRight: StyleVariable.space050,
  },
  image1Icon: {
    top: 6,
    left: 22,
    width: 142,
    height: 137,
    zIndex: 0,
    position: "absolute",
  },
  iconBefore: {
    display: "none",
    height: 24,
    overflow: "hidden",
  },
  children: {
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.update,
    color: Color.colorTextInverse,
    fontSize: FontSize.update_size,
    textAlign: "center",
    marginLeft: 4,
  },
  iconAfter: {
    marginLeft: 4,
    height: 24,
    overflow: "hidden",
  },
  container2: {
    flexDirection: "row",
  },
  button: {
    top: 163,
    left: 41,
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorBackgroundBrandBoldDefault,
    paddingHorizontal: StyleVariable.space150,
    paddingVertical: 0,
    minHeight: 32,
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
  },
  roleComponent: {
    left: 0,
  },
  roleComponent1: {
    left: 207,
  },
  vaiTr: {
    top: 475,
    left: 20,
    width: 390,
    height: 215,
    position: "absolute",
  },
  role: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorTextInverse,
  },
});

export default Role;
