import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  StyleVariable,
  Border,
  FontFamily,
  FontSize,
  Color,
  Padding,
} from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.home}>
      <View style={styles.thanhIuHng}>
        <View style={[styles.navigator, styles.navigatorLayout]}>
          <View style={styles.button}>
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/icon.png")}
            />
          </View>
        </View>
        <View style={styles.page}>
          <View style={[styles.button1, styles.buttonFlexBox]}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before.png")}
              />
              <Text style={[styles.children, styles.childrenTypo]}>1</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.ellipsis, styles.ellipsisFlexBox]}>
          <Text style={[styles.ellipsesLabel, styles.sitetitleTypo]}>...</Text>
        </View>
        <View style={styles.page}>
          <View style={styles.buttonFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo]}>2</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children2, styles.childrenTypo]}>3</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children2, styles.childrenTypo]}>4</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children2, styles.childrenTypo]}>5</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children2, styles.childrenTypo]}>6</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children2, styles.childrenTypo]}>7</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children2, styles.childrenTypo]}>8</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children2, styles.childrenTypo]}>9</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children2, styles.childrenTypo]}>10</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children2, styles.childrenTypo]}>11</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children2, styles.childrenTypo]}>12</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.ellipsisFlexBox}>
          <Text style={[styles.ellipsesLabel, styles.sitetitleTypo]}>...</Text>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children2, styles.childrenTypo]}>20</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.navigator, styles.navigatorLayout]}>
          <View style={styles.button}>
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/icon--chevronrightlargeicon.png")}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.niDungCaBng, styles.dungLayout]}
        onPress={() => navigation.navigate("AssignmentWait")}
      >
        <View style={styles.niDungLpHc}>
          <View style={styles.tableTree}>
            <View style={[styles.codePartsHeader, styles.container40Border]}>
              <View style={styles.minheightController40px} />
              <View style={[styles.container13, styles.containerSpaceBlock]}>
                <Text style={[styles.headerLabel, styles.labelTypo1]}>
                  Header label
                </Text>
              </View>
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo1]}>Lớp</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo1]}>
                    Chờ chấm
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo1]}>
                    Đã chấm
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo1]}>
                    Đã giao
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo1]}>
                    Tỷ lệ làm bài
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
          </View>
          <View style={[styles.tableTree1, styles.tableTree1Position]}>
            <View style={[styles.codePartsHeader, styles.container40Border]}>
              <View style={styles.minheightController40px} />
              <View style={[styles.container13, styles.containerSpaceBlock]}>
                <Text style={[styles.headerLabel, styles.labelTypo1]}>
                  Header label
                </Text>
              </View>
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={styles.cellLabel5}>
                    9A - Trường THCS Vĩnh Lộc
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={styles.cellLabel5}>-</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={styles.cellLabel5}>-</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={styles.cellLabel5}>-</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={styles.cellLabel5}>Chưa bài nào được giao</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.niDungCaBng1, styles.dungLayout]}
        onPress={() => navigation.navigate("AssignmentWait")}
      >
        <View style={styles.niDungLpHc}>
          <View style={styles.tableTree2}>
            <View style={[styles.codePartsHeader, styles.container40Border]}>
              <View style={styles.minheightController40px} />
              <View style={[styles.container13, styles.containerSpaceBlock]}>
                <Text style={[styles.headerLabel, styles.labelTypo1]}>
                  Header label
                </Text>
              </View>
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo1]}>Lớp</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo1]}>
                    Chờ chấm
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo1]}>
                    Đã chấm
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo1]}>
                    Đã giao
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo1]}>
                    Tỷ lệ làm bài
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
          </View>
          <View style={[styles.tableTree1, styles.tableTree1Position]}>
            <View style={[styles.codePartsHeader, styles.container40Border]}>
              <View style={styles.minheightController40px} />
              <View style={[styles.container13, styles.containerSpaceBlock]}>
                <Text style={[styles.headerLabel, styles.labelTypo1]}>
                  Header label
                </Text>
              </View>
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={styles.cellLabel5}>
                    9B - Trường THCS Vĩnh Lộc
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={styles.cellLabel5}>4</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={styles.cellLabel5}>2</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={styles.cellLabel5}>1</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.borderBorder]}>
              <View style={[styles.container14, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={styles.cellLabel5}> 40%</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
          </View>
          <View style={[styles.progressBar, styles.tableTree1Position]}>
            <View style={[styles.container37, styles.barPosition]} />
            <View style={[styles.bar, styles.barPosition]} />
          </View>
        </View>
      </Pressable>
      <View style={[styles.ccChcNngKhc, styles.mtMoBg]}>
        <View style={styles.tabs}>
          <View style={[styles.border, styles.linePosition]} />
          <View style={styles.children13}>
            <View style={styles.tabSpaceBlock}>
              <Text style={[styles.label, styles.labelLayout]}>Tab</Text>
              <View style={[styles.line, styles.linePosition]} />
            </View>
            <View style={styles.tabSpaceBlock}>
              <Text style={[styles.label1, styles.labelLayout]}>Tab</Text>
            </View>
            <View style={[styles.tab, styles.tabSpaceBlock]}>
              <Text style={styles.label2}>Tab</Text>
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
        <View style={[styles.buttonLpHc, styles.buttonFlexBox]}>
          <View style={[styles.container, styles.containerFlexBox]}>
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/icon-before2.png")}
            />
            <Text style={[styles.children14, styles.childrenTypo]}>
              Tạo lớp học
            </Text>
            <Image
              style={[styles.iconAfter, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/icon-after.png")}
            />
          </View>
        </View>
        <View style={styles.tiu}>
          <Text style={styles.headingH600}>
            Tổng quan bài tập các lớp đang hoạt động
          </Text>
        </View>
      </View>
      <View style={styles.menu}>
        <View style={[styles.newIcon, styles.newIconFlexBox]}>
          <Image
            style={styles.navigatorLayout}
            resizeMode="cover"
            source={require("../assets/trang-ch-icon8.png")}
          />
          <Text style={[styles.trangCh, styles.lpHcTypo]}>Trang chủ</Text>
        </View>
        <Pressable
          style={styles.newIconFlexBox}
          onPress={() => navigation.navigate("ClassActive")}
        >
          <Image
            style={styles.navigatorLayout}
            resizeMode="cover"
            source={require("../assets/lp-hc-icon1.png")}
          />
          <Text style={[styles.lpHc, styles.lpHcTypo]}>Lớp học</Text>
        </Pressable>
        <Pressable
          style={styles.newIconFlexBox}
          onPress={() => navigation.navigate("Topic")}
        >
          <Image
            style={styles.navigatorLayout}
            resizeMode="cover"
            source={require("../assets/trang-ch-icon2.png")}
          />
          <Text style={[styles.lpHc, styles.lpHcTypo]}>Đề bài</Text>
        </Pressable>
        <Pressable
          style={styles.newIconFlexBox}
          onPress={() => navigation.navigate("AssignmentWait")}
        >
          <Image
            style={styles.navigatorLayout}
            resizeMode="cover"
            source={require("../assets/bi-tp-icon.png")}
          />
          <Text style={[styles.lpHc, styles.lpHcTypo]}>Bài tập</Text>
        </Pressable>
      </View>
      <View style={[styles.mtMo, styles.mtMoBg]}>
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
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/avatar-image.png")}
          />
        </Pressable>
        <View style={styles.producthome}>
          <View style={styles.logo}>
            <View style={styles.logoLight}>
              <View style={styles.container39}>
                <Text style={styles.vn}>9Văn</Text>
                <Image
                  style={[styles.isolationModeIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/isolation-mode.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.container40, styles.container40Border]}>
            <Text style={[styles.sitetitle, styles.sitetitleTypo]}>
              siteTitle
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigatorLayout: {
    height: 32,
    width: 32,
  },
  iconLayout1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  buttonFlexBox: {
    paddingHorizontal: StyleVariable.space150,
    minHeight: 32,
    paddingVertical: 0,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    alignItems: "center",
    flexDirection: "row",
  },
  containerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  childrenTypo: {
    fontFamily: FontFamily.update,
    fontWeight: "500",
    marginLeft: 4,
    textAlign: "center",
    fontSize: FontSize.update_size,
  },
  ellipsisFlexBox: {
    paddingHorizontal: StyleVariable.space100,
    paddingVertical: 0,
    justifyContent: "center",
    height: 32,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  sitetitleTypo: {
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    lineHeight: 20,
    fontSize: FontSize.update_size,
  },
  dungLayout: {
    height: 230,
    width: 382,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTextInverse,
    left: 25,
    position: "absolute",
    overflow: "hidden",
  },
  container40Border: {
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
    display: "none",
    flexDirection: "row",
  },
  containerSpaceBlock: {
    paddingVertical: StyleVariable.space100,
    paddingHorizontal: 0,
    flex: 1,
    flexDirection: "row",
  },
  labelTypo1: {
    lineHeight: 14,
    textAlign: "left",
    fontFamily: FontFamily.update,
    fontWeight: "500",
    fontSize: FontSize.update_size,
  },
  borderBorder: {
    borderBottomWidth: 1,
    borderColor: Color.colorBorderInput,
  },
  tableTree1Position: {
    left: 108,
    position: "absolute",
  },
  barPosition: {
    height: 6,
    left: "0%",
    top: "50%",
    marginTop: -3,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  mtMoBg: {
    backgroundColor: Color.colorTextInverse,
    position: "absolute",
    overflow: "hidden",
    width: 430,
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
  newIconFlexBox: {
    paddingVertical: Padding.p_4xs,
    height: 60,
    paddingHorizontal: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lpHcTypo: {
    lineHeight: 18,
    fontSize: FontSize.menu_size,
    fontFamily: FontFamily.menu,
    fontWeight: "600",
    textAlign: "left",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  icon: {
    height: 24,
  },
  button: {
    paddingHorizontal: StyleVariable.space050,
    minHeight: 32,
    paddingVertical: 0,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    left: 0,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  navigator: {
    overflow: "hidden",
  },
  iconBefore: {
    display: "none",
    height: 24,
  },
  children: {
    marginLeft: 4,
    textAlign: "center",
    color: Color.colorBackgroundBrandBoldDefault,
    lineHeight: 20,
  },
  iconAfter: {
    marginLeft: 4,
    display: "none",
    height: 24,
  },
  container: {
    flexDirection: "row",
  },
  button1: {
    backgroundColor: Color.active,
  },
  page: {
    flexDirection: "row",
  },
  ellipsesLabel: {
    color: Color.colorTextDefault,
    textAlign: "center",
  },
  ellipsis: {
    display: "none",
  },
  children1: {
    color: Color.colorTextDefault,
    marginLeft: 4,
    textAlign: "center",
    lineHeight: 20,
  },
  children2: {
    lineHeight: 17,
    color: Color.colorTextDefault,
    marginLeft: 4,
    textAlign: "center",
  },
  page2: {
    display: "none",
    flexDirection: "row",
  },
  thanhIuHng: {
    top: 876,
    left: 249,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  minheightController40px: {
    height: 40,
    alignItems: "center",
  },
  headerLabel: {
    textAlign: "left",
    color: Color.colorTextSubtle,
    flex: 1,
    lineHeight: 14,
  },
  container13: {
    justifyContent: "center",
    alignItems: "center",
  },
  codePartsHeader: {
    borderBottomWidth: 2,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  cellLabel: {
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.colorTextDefault,
  },
  box: {
    paddingVertical: StyleVariable.space025,
    paddingHorizontal: 0,
    flex: 1,
  },
  container14: {
    justifyContent: "space-between",
  },
  codePartsCell: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tableTree: {
    width: 100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  cellLabel5: {
    fontWeight: "300",
    fontFamily: FontFamily.tableRight,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.colorTextDefault,
    lineHeight: 20,
    fontSize: FontSize.update_size,
  },
  tableTree1: {
    width: 233,
    top: 0,
  },
  niDungLpHc: {
    top: 10,
    left: 20,
    width: 342,
    height: 205,
    position: "absolute",
  },
  niDungCaBng: {
    top: 180,
  },
  tableTree2: {
    width: 108,
    left: 0,
    top: 0,
    position: "absolute",
  },
  container37: {
    right: "0%",
    width: "100%",
    backgroundColor: Color.colorBackgroundNeutralDefault,
  },
  bar: {
    width: "55.9%",
    right: "44.1%",
    backgroundColor: Color.colorTextSubtle,
  },
  progressBar: {
    top: 188,
    width: 161,
    height: 8,
    backgroundColor: Color.colorBackgroundNeutralDefault,
    borderRadius: Border.br_10xs,
    left: 108,
    overflow: "hidden",
  },
  niDungCaBng1: {
    top: 430,
  },
  border: {
    borderRadius: Border.br_12xs,
    right: 0,
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
    fontWeight: "600",
    lineHeight: 25,
    color: Color.colorTextSubtle,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    textAlign: "center",
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
  children13: {
    left: -8,
    height: 33,
    top: 0,
    flexDirection: "row",
    position: "absolute",
  },
  tabs: {
    top: 7,
    width: 192,
    height: 34,
    left: 25,
    display: "none",
    position: "absolute",
  },
  children14: {
    color: Color.colorTextInverse,
    marginLeft: 4,
    textAlign: "center",
    lineHeight: 20,
  },
  buttonLpHc: {
    top: 8,
    left: 281,
    backgroundColor: Color.colorBackgroundBrandBoldDefault,
    display: "none",
    position: "absolute",
  },
  headingH600: {
    fontSize: FontSize.title_size,
    lineHeight: 24,
    fontFamily: FontFamily.menu,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorTextDefault,
  },
  tiu: {
    height: 49,
    paddingHorizontal: StyleVariable.space300,
    paddingVertical: 0,
    left: 0,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    width: 430,
  },
  ccChcNngKhc: {
    top: 112,
    height: 48,
    right: 0,
  },
  trangCh: {
    color: Color.colorBackgroundBrandBoldDefault,
  },
  newIcon: {
    backgroundColor: Color.active,
  },
  lpHc: {
    color: Color.colorTextSubtle,
  },
  menu: {
    top: 51,
    height: 60,
    backgroundColor: Color.colorTextInverse,
    left: 0,
    flexDirection: "row",
    position: "absolute",
    width: 430,
  },
  iconNotificationicon: {
    top: 5,
    left: 312,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  icon1: {
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
  container39: {
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
    textAlign: "left",
  },
  container40: {
    borderRightWidth: 1,
    paddingRight: StyleVariable.space200,
    marginLeft: 16,
  },
  producthome: {
    top: 4,
    left: 24,
    width: 164,
    height: 42,
    paddingRight: StyleVariable.space050,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  mtMo: {
    height: 50,
    left: 0,
    top: 0,
  },
  home: {
    backgroundColor: Color.background,
    height: 932,
    overflow: "hidden",
    width: 430,
  },
});

export default Home;
