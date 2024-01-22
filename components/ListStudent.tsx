import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  Padding,
  StyleVariable,
  Border,
  FontSize,
} from "../GlobalStyles";

const ListStudent = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.listStudent}>
      <View style={[styles.mtMo, styles.mtMoPosition]}>
        <Image
          style={styles.iconNotificationicon}
          resizeMode="cover"
          source={require("../assets/icon--notificationicon1.png")}
        />
        <Pressable
          style={styles.avatarImage}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/avatar-image.png")}
          />
        </Pressable>
        <View style={styles.producthome}>
          <View style={styles.logo}>
            <View style={styles.logoLight}>
              <View style={styles.container}>
                <Text style={styles.vn}>9Văn</Text>
                <Image
                  style={[styles.isolationModeIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/isolation-mode1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.container1, styles.container1Border]}>
            <Text style={styles.sitetitle}>siteTitle</Text>
          </View>
        </View>
      </View>
      <View style={styles.menu}>
        <Pressable
          style={styles.newIconFlexBox}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.trangChIcon}
            resizeMode="cover"
            source={require("../assets/trang-ch-icon.png")}
          />
          <Text style={[styles.trangCh, styles.trangTypo]}>Trang chủ</Text>
        </Pressable>
        <View style={[styles.newIcon1, styles.newIconFlexBox]}>
          <Image
            style={styles.trangChIcon}
            resizeMode="cover"
            source={require("../assets/trang-ch-icon5.png")}
          />
          <Text style={[styles.trangCh1, styles.trangTypo]}>Lớp học</Text>
        </View>
        <Pressable
          style={styles.newIconFlexBox}
          onPress={() => navigation.navigate("Topic")}
        >
          <Image
            style={styles.trangChIcon}
            resizeMode="cover"
            source={require("../assets/trang-ch-icon2.png")}
          />
          <Text style={[styles.trangCh, styles.trangTypo]}>Đề bài</Text>
        </Pressable>
        <Pressable
          style={styles.newIconFlexBox}
          onPress={() => navigation.navigate("AssignmentWait")}
        >
          <Image
            style={styles.trangChIcon}
            resizeMode="cover"
            source={require("../assets/bi-tp-icon.png")}
          />
          <Text style={[styles.trangCh, styles.trangTypo]}>Bài tập</Text>
        </Pressable>
      </View>
      <View style={styles.header}>
        <View style={[styles.buttomHcSinh, styles.saLayout]}>
          <View style={[styles.container2, styles.containerFlexBox]}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/icon-before2.png")}
            />
            <Text style={[styles.children, styles.childrenTypo]}>
              Thêm học sinh
            </Text>
            <Image
              style={[styles.iconAfter, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon-after.png")}
            />
          </View>
        </View>
        <View style={styles.tiu}>
          <Text style={[styles.headingH600, styles.trangTypo]}>Lớp 9A</Text>
        </View>
        <View style={[styles.tabsWrapper, styles.mtMoPosition]}>
          <View style={styles.tabs}>
            <View style={[styles.border, styles.linePosition]} />
            <View style={styles.children1}>
              <View style={styles.tabSpaceBlock}>
                <Text style={[styles.label, styles.labelLayout]}>
                  Danh sách học sinh
                </Text>
                <View style={[styles.line, styles.linePosition]} />
              </View>
              <View style={styles.tabSpaceBlock}>
                <Text style={[styles.label1, styles.labelLayout]}>
                  Bài đã giao
                </Text>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Text style={[styles.label2, styles.labelLayout]}>Tab</Text>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Text style={[styles.label3, styles.labelLayout]}>Tab</Text>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Text style={[styles.label3, styles.labelLayout]}>Tab</Text>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Text style={[styles.label3, styles.labelLayout]}>Tab</Text>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Text style={[styles.label3, styles.labelLayout]}>Tab</Text>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Text style={[styles.label3, styles.labelLayout]}>Tab</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bngHcSinh, styles.bngLayout]}>
        <View style={styles.niDungBngHcSinh}>
          <View style={[styles.thamGia, styles.thamBg]}>
            <View style={[styles.button, styles.saLayout]}>
              <View style={[styles.container2, styles.containerFlexBox]}>
                <Image
                  style={[styles.iconBefore1, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children2, styles.childrenTypo]}>
                  Đã tham gia
                </Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-after1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.chaThamGia, styles.thamBg]}>
            <View style={[styles.button, styles.saLayout]}>
              <View style={[styles.container2, styles.containerFlexBox]}>
                <Image
                  style={[styles.iconBefore1, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children3, styles.childrenTypo]}>
                  Chưa tham gia
                </Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-after1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.cngC2}>
            <View style={styles.buttonGroup}>
              <View style={[styles.sa, styles.thamBg]}>
                <View style={[styles.container2, styles.containerFlexBox]}>
                  <Image
                    style={[styles.iconBefore1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children4, styles.childrenTypo]}>
                    Sửa
                  </Text>
                  <Image
                    style={[styles.iconAfter3, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-after2.png")}
                  />
                </View>
              </View>
              <View style={[styles.xa, styles.saLayout]}>
                <View style={[styles.container2, styles.containerFlexBox]}>
                  <Image
                    style={[styles.iconBefore1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before3.png")}
                  />
                  <Text style={[styles.children, styles.childrenTypo]}>
                    Xóa
                  </Text>
                  <Image
                    style={[styles.iconAfter3, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon4.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tableTree}>
            <View style={[styles.codePartsHeader, styles.containerFlexBox]}>
              <View style={styles.minheightController40px} />
              <View style={[styles.container7, styles.containerSpaceBlock]}>
                <Text style={[styles.headerLabel, styles.labelTypo]}>
                  Header label
                </Text>
              </View>
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>STT</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>
                    Họ và tên
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>
                    Email học sinh
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>
                    Email phụ huynh
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>
                    Trạng thái
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]} />
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
          </View>
          <View style={[styles.tableTree1, styles.thamPosition]}>
            <View style={[styles.codePartsHeader, styles.containerFlexBox]}>
              <View style={styles.minheightController40px} />
              <View style={[styles.container7, styles.containerSpaceBlock]}>
                <Text style={[styles.headerLabel, styles.labelTypo]}>
                  Header label
                </Text>
              </View>
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]}>
                    1
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]}>
                    Phan Thị Thùy Linh
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]}>
                    abcd1234@gmail.com
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]} />
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]} />
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]} />
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bngHcSinh1, styles.bngLayout]}>
        <View style={styles.niDungBngHcSinh}>
          <View style={[styles.chaThamGia, styles.thamBg]}>
            <View style={[styles.button, styles.saLayout]}>
              <View style={[styles.container2, styles.containerFlexBox]}>
                <Image
                  style={[styles.iconBefore1, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children3, styles.childrenTypo]}>
                  Đã tham gia
                </Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-after1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.thamGia, styles.thamBg]}>
            <View style={[styles.button, styles.saLayout]}>
              <View style={[styles.container2, styles.containerFlexBox]}>
                <Image
                  style={[styles.iconBefore1, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children2, styles.childrenTypo]}>
                  Chưa tham gia
                </Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-after1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.cngC2}>
            <View style={styles.buttonGroup}>
              <View style={[styles.sa, styles.thamBg]}>
                <View style={[styles.container2, styles.containerFlexBox]}>
                  <Image
                    style={[styles.iconBefore1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children4, styles.childrenTypo]}>
                    Sửa
                  </Text>
                  <Image
                    style={[styles.iconAfter3, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-after2.png")}
                  />
                </View>
              </View>
              <View style={[styles.xa, styles.saLayout]}>
                <View style={[styles.container2, styles.containerFlexBox]}>
                  <Image
                    style={[styles.iconBefore1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before3.png")}
                  />
                  <Text style={[styles.children, styles.childrenTypo]}>
                    Xóa
                  </Text>
                  <Image
                    style={[styles.iconAfter3, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon4.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tableTree}>
            <View style={[styles.codePartsHeader, styles.containerFlexBox]}>
              <View style={styles.minheightController40px} />
              <View style={[styles.container7, styles.containerSpaceBlock]}>
                <Text style={[styles.headerLabel, styles.labelTypo]}>
                  Header label
                </Text>
              </View>
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>STT</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>
                    Họ và tên
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>
                    Email học sinh
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>
                    Email phụ huynh
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>
                    Trạng thái
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]} />
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
          </View>
          <View style={[styles.tableTree1, styles.thamPosition]}>
            <View style={[styles.codePartsHeader, styles.containerFlexBox]}>
              <View style={styles.minheightController40px} />
              <View style={[styles.container7, styles.containerSpaceBlock]}>
                <Text style={[styles.headerLabel, styles.labelTypo]}>
                  Header label
                </Text>
              </View>
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]}>
                    2
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]}>
                    Trịnh Hồng Nhung
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]}>
                    abcd1234@gmail.com
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]} />
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]} />
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container8, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.children3Layout]} />
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mtMoPosition: {
    backgroundColor: Color.colorTextInverse,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    width: 430,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  container1Border: {
    borderColor: Color.colorBorderInput,
    display: "none",
    borderStyle: "solid",
    flexDirection: "row",
  },
  trangTypo: {
    fontFamily: FontFamily.menu,
    fontWeight: "600",
    textAlign: "left",
  },
  newIconFlexBox: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    flex: 1,
    height: 60,
    alignItems: "center",
  },
  saLayout: {
    minHeight: 32,
    paddingHorizontal: StyleVariable.space150,
    borderRadius: Border.br_10xs,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  containerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  childrenTypo: {
    textAlign: "center",
    fontFamily: FontFamily.update,
    fontWeight: "500",
    marginLeft: 4,
    fontSize: FontSize.update_size,
  },
  iconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  linePosition: {
    height: 2,
    bottom: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  labelLayout: {
    lineHeight: 25,
    textAlign: "center",
  },
  tabSpaceBlock: {
    paddingVertical: StyleVariable.space050,
    paddingHorizontal: StyleVariable.space100,
    alignItems: "center",
    overflow: "hidden",
  },
  bngLayout: {
    height: 271,
    borderRadius: Border.br_3xs,
    width: 382,
    left: 24,
    backgroundColor: Color.colorTextInverse,
    position: "absolute",
    overflow: "hidden",
  },
  thamBg: {
    backgroundColor: Color.eE2B8,
    flexDirection: "row",
  },
  containerSpaceBlock: {
    paddingVertical: StyleVariable.space100,
    paddingHorizontal: 0,
    flex: 1,
    flexDirection: "row",
  },
  labelTypo: {
    lineHeight: 14,
    fontFamily: FontFamily.update,
    fontWeight: "500",
    fontSize: FontSize.update_size,
    textAlign: "left",
  },
  borderBorder: {
    borderBottomWidth: 1,
    borderColor: Color.colorBorderInput,
  },
  children3Layout: {
    lineHeight: 20,
    color: Color.colorTextDefault,
  },
  thamPosition: {
    left: 108,
    position: "absolute",
  },
  iconNotificationicon: {
    top: 5,
    left: 312,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    width: "100%",
  },
  avatarImage: {
    left: "85.12%",
    top: "12%",
    right: "5.58%",
    bottom: "8%",
    width: "9.3%",
    height: "80%",
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
    width: "23.13%",
    top: "0%",
    right: "74.83%",
    bottom: "0%",
    left: "2.04%",
    position: "absolute",
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
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    lineHeight: 20,
    fontSize: FontSize.update_size,
    textAlign: "left",
  },
  container1: {
    borderRightWidth: 1,
    paddingRight: StyleVariable.space200,
    marginLeft: 16,
    display: "none",
  },
  producthome: {
    top: 4,
    width: 164,
    height: 42,
    paddingRight: StyleVariable.space050,
    alignItems: "center",
    flexDirection: "row",
    left: 24,
    position: "absolute",
  },
  mtMo: {
    height: 50,
  },
  trangChIcon: {
    width: 32,
    height: 32,
  },
  trangCh: {
    color: Color.colorTextSubtle,
    lineHeight: 18,
    fontSize: FontSize.menu_size,
    fontFamily: FontFamily.menu,
  },
  trangCh1: {
    color: Color.colorBackgroundBrandBoldDefault,
    lineHeight: 18,
    fontSize: FontSize.menu_size,
    fontFamily: FontFamily.menu,
  },
  newIcon1: {
    backgroundColor: Color.active,
  },
  menu: {
    top: 51,
    height: 60,
    flexDirection: "row",
    backgroundColor: Color.colorTextInverse,
    left: 0,
    position: "absolute",
    width: 430,
  },
  children: {
    color: Color.colorTextInverse,
    marginLeft: 4,
    lineHeight: 17,
    textAlign: "center",
    fontFamily: FontFamily.update,
    fontWeight: "500",
  },
  iconAfter: {
    marginLeft: 4,
    display: "none",
  },
  container2: {
    flexDirection: "row",
  },
  buttomHcSinh: {
    left: 261,
    backgroundColor: Color.colorBackgroundBrandBoldDefault,
    top: 53,
    paddingHorizontal: StyleVariable.space150,
    borderRadius: Border.br_10xs,
    flexDirection: "row",
    position: "absolute",
  },
  headingH600: {
    fontSize: FontSize.title_size,
    lineHeight: 24,
    color: Color.colorTextDefault,
  },
  tiu: {
    width: 261,
    paddingHorizontal: StyleVariable.space300,
    paddingVertical: 0,
    top: 53,
    height: 32,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  border: {
    right: 0,
    borderRadius: Border.br_12xs,
    borderBottomWidth: 1,
    borderColor: Color.colorBorderInput,
    display: "none",
    left: 0,
  },
  label: {
    zIndex: 0,
    fontSize: FontSize.tabs_size,
    lineHeight: 25,
    fontFamily: FontFamily.update,
    fontWeight: "500",
    color: Color.colorBackgroundBrandBoldDefault,
  },
  line: {
    right: 8,
    left: 8,
    borderRadius: Border.br_11xs,
    borderColor: Color.colorBackgroundBrandBoldDefault,
    borderWidth: 1,
    zIndex: 1,
  },
  label1: {
    fontSize: FontSize.tabs_size,
    lineHeight: 25,
    fontFamily: FontFamily.update,
    fontWeight: "500",
    color: Color.colorTextSubtle,
  },
  label2: {
    color: Color.colorTextSubtle,
    fontWeight: "600",
    lineHeight: 25,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    fontSize: FontSize.update_size,
  },
  tab: {
    display: "none",
  },
  label3: {
    fontFamily: FontFamily.input,
    color: Color.colorTextSubtle,
    fontSize: FontSize.update_size,
  },
  children1: {
    left: -8,
    height: 33,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  tabs: {
    top: 7,
    height: 34,
    width: 382,
    left: 24,
    position: "absolute",
  },
  tabsWrapper: {
    height: 48,
  },
  header: {
    top: 112,
    height: 85,
    left: 0,
    position: "absolute",
    width: 430,
  },
  iconBefore1: {
    display: "none",
  },
  children2: {
    color: Color.colorTextDefault,
    marginLeft: 4,
    lineHeight: 17,
    textAlign: "center",
    fontFamily: FontFamily.update,
    fontWeight: "500",
  },
  button: {
    backgroundColor: Color.colorBackgroundNeutralDefault,
    flexDirection: "row",
  },
  thamGia: {
    left: 108,
    position: "absolute",
    top: 168,
    backgroundColor: Color.eE2B8,
    height: 32,
  },
  children3: {
    color: Color.colorTextDefault,
    marginLeft: 4,
    lineHeight: 20,
  },
  chaThamGia: {
    left: 108,
    position: "absolute",
    top: 168,
    backgroundColor: Color.eE2B8,
    height: 32,
    display: "none",
  },
  children4: {
    color: Color.colorTextSuccess,
    marginLeft: 4,
    lineHeight: 17,
    textAlign: "center",
    fontFamily: FontFamily.update,
    fontWeight: "500",
  },
  iconAfter3: {
    marginLeft: 4,
  },
  sa: {
    minHeight: 32,
    paddingHorizontal: StyleVariable.space150,
    borderRadius: Border.br_10xs,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  xa: {
    backgroundColor: Color.colorBackgroundDangerBoldDefault,
    marginLeft: 4,
    flexDirection: "row",
  },
  buttonGroup: {
    width: 159,
    flexDirection: "row",
  },
  cngC2: {
    top: 209,
    left: 184,
    width: 158,
    flexDirection: "row",
    position: "absolute",
  },
  minheightController40px: {
    alignItems: "center",
    height: 40,
  },
  headerLabel: {
    color: Color.colorTextSubtle,
    flex: 1,
    lineHeight: 14,
  },
  container7: {
    justifyContent: "center",
    alignItems: "center",
  },
  codePartsHeader: {
    borderBottomWidth: 2,
    alignSelf: "stretch",
    display: "none",
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
    flexDirection: "row",
  },
  cellLabel: {
    alignSelf: "stretch",
    color: Color.colorTextDefault,
  },
  box: {
    paddingVertical: StyleVariable.space025,
    paddingHorizontal: 0,
    flex: 1,
  },
  container8: {
    justifyContent: "space-between",
  },
  codePartsCell: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  cellLabel5: {
    fontWeight: "300",
    fontFamily: FontFamily.tableRight,
    alignSelf: "stretch",
    color: Color.colorTextDefault,
    fontSize: FontSize.update_size,
    textAlign: "left",
  },
  tableTree: {
    width: 108,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tableTree1: {
    width: 234,
    top: 0,
  },
  niDungBngHcSinh: {
    top: 10,
    left: 20,
    width: 342,
    height: 246,
    position: "absolute",
  },
  bngHcSinh: {
    top: 217,
  },
  bngHcSinh1: {
    top: 508,
  },
  listStudent: {
    backgroundColor: Color.background,
    height: 923,
    overflow: "hidden",
    width: 430,
  },
});

export default ListStudent;
