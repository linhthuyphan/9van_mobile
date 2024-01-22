import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Border,
  FontFamily,
  FontSize,
  StyleVariable,
  Color,
  Padding,
} from "../GlobalStyles";

const ShareClass = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.shareClass}>
      <View style={[styles.classActive, styles.tiuLayout]}>
        <View style={[styles.home, styles.tiuLayout]}>
          <View style={styles.thanhIuHng}>
            <View style={[styles.navigator, styles.navigatorLayout]}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon.png")}
                />
              </View>
            </View>
            <View style={styles.page}>
              <View style={[styles.button1, styles.buttonFlexBox]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before.png")}
                  />
                  <Text style={[styles.children, styles.childrenTypo1]}>1</Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.ellipsis, styles.ellipsisFlexBox]}>
              <Text style={[styles.ellipsesLabel, styles.sitetitleTypo]}>
                ...
              </Text>
            </View>
            <View style={styles.page}>
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children1, styles.childrenTypo1]}>
                    2
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <View style={styles.container}>
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
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <View style={styles.container}>
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
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <View style={styles.container}>
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
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <View style={styles.container}>
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
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <View style={styles.container}>
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
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <View style={styles.container}>
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
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <View style={styles.container}>
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
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo]}>
                    10
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo]}>
                    11
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo]}>
                    12
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.ellipsisFlexBox}>
              <Text style={[styles.ellipsesLabel, styles.sitetitleTypo]}>
                ...
              </Text>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo]}>
                    20
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.navigator, styles.navigatorLayout]}>
              <View style={[styles.button, styles.buttonFlexBox]}>
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
            <View style={[styles.niDungLpHc, styles.dungPosition]}>
              <View style={styles.tableTree}>
                <View
                  style={[styles.codePartsHeader, styles.container40Border]}
                >
                  <View style={styles.minheightController40px} />
                  <View style={styles.container13}>
                    <Text style={[styles.headerLabel, styles.labelTypo1]}>
                      Header label
                    </Text>
                  </View>
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Lớp
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Học sinh
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Năm học
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Mô tả
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]} />
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
              </View>
              <View style={styles.tableTree1}>
                <View
                  style={[styles.codePartsHeader, styles.container40Border]}
                >
                  <View style={styles.minheightController40px} />
                  <View style={styles.container13}>
                    <Text style={[styles.headerLabel, styles.labelTypo1]}>
                      Header label
                    </Text>
                  </View>
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={styles.cellLabel5}>
                        9A - Trường THCS Vĩnh Lộc
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={styles.cellLabel5}>-</Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={styles.cellLabel5}>-</Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={styles.cellLabel5}>
                        Trường THCS Vĩnh Phúc
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={styles.cellLabel5} />
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
            <View style={[styles.niDungLpHc, styles.dungPosition]}>
              <View style={styles.tableTree2}>
                <View
                  style={[styles.codePartsHeader, styles.container40Border]}
                >
                  <View style={styles.minheightController40px} />
                  <View style={styles.container13}>
                    <Text style={[styles.headerLabel, styles.labelTypo1]}>
                      Header label
                    </Text>
                  </View>
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Lớp
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Chờ chấm
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Đã chấm
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Đã giao
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Tỷ lệ làm bài
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
              </View>
              <View style={styles.tableTree1}>
                <View
                  style={[styles.codePartsHeader, styles.container40Border]}
                >
                  <View style={styles.minheightController40px} />
                  <View style={styles.container13}>
                    <Text style={[styles.headerLabel, styles.labelTypo1]}>
                      Header label
                    </Text>
                  </View>
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={styles.cellLabel5}>
                        9B - Trường THCS Vĩnh Lộc
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={styles.cellLabel5}>4</Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={styles.cellLabel5}>2</Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={styles.cellLabel5}>1</Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={[styles.codePartsCell, styles.codeBorder]}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={styles.cellLabel5}> 40%</Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
              </View>
              <View style={styles.progressBar}>
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
                  <Text style={[styles.label, styles.labelLayout]}>
                    Hoạt động
                  </Text>
                  <View style={[styles.line, styles.linePosition]} />
                </View>
                <View style={styles.tabSpaceBlock}>
                  <Text style={[styles.label1, styles.labelLayout]}>
                    Đã kết thúc
                  </Text>
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
            <View style={[styles.buttonLpHc, styles.shareFlexBox]}>
              <View style={styles.container}>
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
            <View style={[styles.tiu, styles.tiuFlexBox]}>
              <Text style={styles.headingH600}>
                Tổng quan bài tập các lớp đang hoạt động
              </Text>
            </View>
          </View>
          <View style={styles.menu}>
            <Pressable
              style={styles.newIconFlexBox}
              onPress={() => navigation.navigate("Home")}
            >
              <Image
                style={styles.navigatorLayout}
                resizeMode="cover"
                source={require("../assets/trang-ch-icon.png")}
              />
              <Text style={[styles.trangCh, styles.trangTypo]}>Trang chủ</Text>
            </Pressable>
            <View style={[styles.newIcon1, styles.newIconFlexBox]}>
              <Image
                style={styles.navigatorLayout}
                resizeMode="cover"
                source={require("../assets/trang-ch-icon1.png")}
              />
              <Text style={[styles.trangCh1, styles.trangTypo]}>Lớp học</Text>
            </View>
            <Pressable
              style={styles.newIconFlexBox}
              onPress={() => navigation.navigate("Topic")}
            >
              <Image
                style={styles.navigatorLayout}
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
                style={styles.navigatorLayout}
                resizeMode="cover"
                source={require("../assets/bi-tp-icon.png")}
              />
              <Text style={[styles.trangCh, styles.trangTypo]}>Bài tập</Text>
            </Pressable>
          </View>
          <View style={[styles.mtMo, styles.mtMoBg]}>
            <Image
              style={styles.iconNotificationicon}
              resizeMode="cover"
              source={require("../assets/icon--notificationicon.png")}
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
            <View style={[styles.producthome, styles.flagPosition]}>
              <View style={styles.logo}>
                <View style={styles.logoLight}>
                  <View style={styles.container39}>
                    <Text style={styles.vn}>9Văn</Text>
                    <Image
                      style={[styles.isolationModeIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/isolation-mode2.png")}
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
        <View style={[styles.danhSchLpHc, styles.danhLayout]}>
          <View style={[styles.niDungBng, styles.dungPosition]}>
            <View style={[styles.cngC3, styles.cngPosition1]}>
              <View style={[styles.ktThc, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={[styles.sa, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon2.png")}
                />
              </View>
              <View style={[styles.share, styles.shareFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon3.png")}
                />
              </View>
            </View>
            <View style={styles.cngPosition}>
              <View style={[styles.ktThc, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={[styles.xa, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon4.png")}
                />
              </View>
              <View style={[styles.sa, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon2.png")}
                />
              </View>
              <View style={[styles.share, styles.shareFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon3.png")}
                />
              </View>
            </View>
            <View style={styles.tableTree}>
              <View style={[styles.codePartsHeader, styles.container40Border]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container13}>
                  <Text style={[styles.headerLabel, styles.labelTypo1]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]}>
                      Lớp
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell21, styles.codeBorder]}>
                <View style={[styles.container43, styles.containerFlexBox]}>
                  <View style={styles.box}>
                    <Text
                      style={[styles.cellLabel, styles.labelTypo1]}
                    >{`Học sinh
`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]}>
                      Năm học
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]}>
                      Mô tả
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
            </View>
            <View style={styles.tableTree5}>
              <View style={[styles.codePartsHeader, styles.container40Border]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container13}>
                  <Text style={[styles.headerLabel, styles.labelTypo1]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5}>9A</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5}>{`5
0 bài tập`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5}>2024</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5}>
                      Đây là lớp có thành tích tốt
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.danhSchLpHc1, styles.danhLayout]}>
          <View style={[styles.niDungBng1, styles.dungPosition]}>
            <View style={styles.cngPosition1}>
              <View style={[styles.ktThc, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={[styles.sa, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon2.png")}
                />
              </View>
              <View style={[styles.share, styles.shareFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon3.png")}
                />
              </View>
            </View>
            <View style={[styles.cngC41, styles.cngPosition]}>
              <View style={[styles.ktThc, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={[styles.xa, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon4.png")}
                />
              </View>
              <View style={[styles.sa, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon2.png")}
                />
              </View>
              <View style={[styles.share, styles.shareFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon3.png")}
                />
              </View>
            </View>
            <View style={styles.tableTree}>
              <View style={[styles.codePartsHeader, styles.container40Border]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container13}>
                  <Text style={[styles.headerLabel, styles.labelTypo1]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]}>
                      Lớp
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell21, styles.codeBorder]}>
                <View style={[styles.container43, styles.containerFlexBox]}>
                  <View style={styles.box}>
                    <Text
                      style={[styles.cellLabel, styles.labelTypo1]}
                    >{`Học sinh
`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]}>
                      Năm học
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]}>
                      Mô tả
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
            </View>
            <View style={styles.tableTree5}>
              <View style={[styles.codePartsHeader, styles.container40Border]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container13}>
                  <Text style={[styles.headerLabel, styles.labelTypo1]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5}>9A</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5}>{`5
0 bài tập`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5}>2024</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5}>
                      Đây là lớp có thành tích tốt
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.flag, styles.flagPosition]}>
        <View style={styles.containerIconTitleDism}>
          <View style={styles.containerIconTitle}>
            <Image
              style={[styles.partsIconSuccessCheckc, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/parts--icon--success-checkcircleicon.png")}
            />
            <View style={styles.containerTitle}>
              <Text style={styles.title}>
                Đã sao chép liên kết tham gia lớp học
              </Text>
            </View>
          </View>
          <View style={styles.containerCustomIconButton}>
            <View style={[styles.dismissbutton, styles.navigatorLayout]}>
              <Image
                style={styles.icon16}
                resizeMode="cover"
                source={require("../assets/icon7.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.collapsableContent}>
          <Text style={[styles.description, styles.sitetitleTypo]}>
            Additional information that will help users understand the flag
          </Text>
          <View style={styles.actions}>
            <View style={[styles.button15, styles.tiuFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before.png")}
                />
                <Text style={[styles.children, styles.childrenTypo1]}>
                  Understood
                </Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before.png")}
                />
              </View>
            </View>
            <Text style={styles.text}>·</Text>
            <View style={[styles.button15, styles.tiuFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before.png")}
                />
                <Text style={[styles.children, styles.childrenTypo1]}>
                  No thanks
                </Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout1]}
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
  tiuLayout: {
    width: 430,
    position: "absolute",
  },
  navigatorLayout: {
    height: 32,
    width: 32,
  },
  buttonFlexBox: {
    minHeight: 32,
    paddingVertical: 0,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  childrenTypo1: {
    fontFamily: FontFamily.update,
    fontWeight: "500",
    marginLeft: 4,
    textAlign: "center",
    lineHeight: 20,
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
  childrenTypo: {
    lineHeight: 17,
    marginLeft: 4,
    textAlign: "center",
    fontFamily: FontFamily.update,
    fontWeight: "500",
    fontSize: FontSize.update_size,
  },
  dungLayout: {
    height: 230,
    width: 382,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTextInverse,
    left: 25,
    display: "none",
    overflow: "hidden",
    position: "absolute",
  },
  dungPosition: {
    width: 342,
    left: 20,
    top: 10,
    position: "absolute",
  },
  container40Border: {
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
    display: "none",
    flexDirection: "row",
  },
  labelTypo1: {
    lineHeight: 14,
    textAlign: "left",
    fontFamily: FontFamily.update,
    fontWeight: "500",
    fontSize: FontSize.update_size,
  },
  codeBorder: {
    borderBottomWidth: 1,
    borderColor: Color.colorBorderInput,
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
  shareFlexBox: {
    backgroundColor: Color.colorBackgroundBrandBoldDefault,
    minHeight: 32,
    paddingVertical: 0,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  tiuFlexBox: {
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  trangTypo: {
    lineHeight: 18,
    fontSize: FontSize.menu_size,
    fontFamily: FontFamily.menu,
    fontWeight: "600",
    textAlign: "left",
  },
  newIconFlexBox: {
    paddingVertical: Padding.p_4xs,
    height: 60,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  flagPosition: {
    left: 24,
    position: "absolute",
  },
  danhLayout: {
    height: 250,
    left: 24,
    width: 382,
    backgroundColor: Color.colorTextInverse,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    position: "absolute",
  },
  cngPosition1: {
    width: 126,
    left: 216,
    top: 188,
    height: 32,
    position: "absolute",
  },
  containerFlexBox: {
    justifyContent: "space-between",
    paddingVertical: StyleVariable.space100,
    paddingHorizontal: 0,
    flexDirection: "row",
    flex: 1,
  },
  cngPosition: {
    width: 173,
    left: 169,
    top: 188,
    height: 32,
    position: "absolute",
  },
  icon: {
    height: 24,
    overflow: "hidden",
  },
  button: {
    paddingHorizontal: StyleVariable.space050,
    top: 0,
    left: 0,
    position: "absolute",
  },
  navigator: {
    overflow: "hidden",
  },
  iconBefore: {
    display: "none",
    height: 24,
    overflow: "hidden",
  },
  children: {
    marginLeft: 4,
    textAlign: "center",
    color: Color.colorBackgroundBrandBoldDefault,
  },
  iconAfter: {
    marginLeft: 4,
    display: "none",
    height: 24,
    overflow: "hidden",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button1: {
    paddingHorizontal: StyleVariable.space150,
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
  },
  button2: {
    paddingHorizontal: StyleVariable.space150,
  },
  children2: {
    color: Color.colorTextDefault,
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
  },
  container13: {
    paddingVertical: StyleVariable.space100,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
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
    left: 108,
    top: 0,
    position: "absolute",
  },
  niDungLpHc: {
    height: 205,
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
    backgroundColor: Color.colorBackgroundNeutralDefault,
    width: "100%",
  },
  bar: {
    width: "55.9%",
    right: "44.1%",
    backgroundColor: Color.colorTextSubtle,
  },
  progressBar: {
    width: 161,
    height: 8,
    backgroundColor: Color.colorBackgroundNeutralDefault,
    top: 188,
    left: 108,
    borderRadius: Border.br_10xs,
    overflow: "hidden",
    position: "absolute",
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
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  tabs: {
    top: 7,
    width: 192,
    height: 34,
    left: 25,
    position: "absolute",
  },
  children14: {
    color: Color.colorTextInverse,
  },
  buttonLpHc: {
    top: 8,
    left: 281,
    paddingHorizontal: StyleVariable.space150,
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
    display: "none",
    width: 430,
    position: "absolute",
    left: 0,
    top: 0,
  },
  ccChcNngKhc: {
    top: 112,
    height: 48,
    right: 0,
    width: 430,
    position: "absolute",
  },
  trangCh: {
    color: Color.colorTextSubtle,
  },
  trangCh1: {
    color: Color.colorBackgroundBrandBoldDefault,
  },
  newIcon1: {
    backgroundColor: Color.active,
  },
  menu: {
    top: 51,
    height: 60,
    backgroundColor: Color.colorTextInverse,
    flexDirection: "row",
    width: 430,
    left: 0,
    position: "absolute",
  },
  iconNotificationicon: {
    top: 5,
    left: 312,
    width: 40,
    height: 40,
    overflow: "hidden",
    position: "absolute",
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
    width: 164,
    height: 42,
    paddingRight: StyleVariable.space050,
    alignItems: "center",
    flexDirection: "row",
  },
  mtMo: {
    height: 50,
    width: 430,
    position: "absolute",
    left: 0,
    top: 0,
  },
  home: {
    backgroundColor: Color.background,
    overflow: "hidden",
    left: 0,
    top: 0,
    height: 932,
  },
  ktThc: {
    left: 94,
    backgroundColor: Color.colorBackgroundWarningBoldDefault,
    paddingHorizontal: StyleVariable.space050,
    top: 0,
    position: "absolute",
  },
  sa: {
    left: 47,
    backgroundColor: Color.eE2B8,
    paddingHorizontal: StyleVariable.space050,
    top: 0,
    position: "absolute",
  },
  share: {
    paddingHorizontal: StyleVariable.space050,
    top: 0,
    left: 0,
  },
  cngC3: {
    display: "none",
  },
  xa: {
    left: 141,
    backgroundColor: Color.colorBackgroundDangerBoldDefault,
    paddingHorizontal: StyleVariable.space050,
    top: 0,
    position: "absolute",
  },
  container43: {
    alignItems: "center",
  },
  codePartsCell21: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: 0,
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tableTree5: {
    left: 100,
    width: 242,
    top: 0,
    position: "absolute",
  },
  niDungBng: {
    height: 224,
  },
  danhSchLpHc: {
    top: 180,
  },
  cngC41: {
    display: "none",
  },
  niDungBng1: {
    height: 225,
  },
  danhSchLpHc1: {
    top: 450,
  },
  classActive: {
    left: 0,
    top: 0,
    height: 932,
  },
  partsIconSuccessCheckc: {
    height: 24,
  },
  title: {
    fontSize: FontSize.contentNotifi_size,
    fontFamily: FontFamily.input,
    textAlign: "left",
    color: Color.colorTextDefault,
    lineHeight: 20,
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
  icon16: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  dismissbutton: {
    padding: Padding.p_9xs,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    alignItems: "center",
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
    textAlign: "left",
    color: Color.colorTextSubtle,
    alignSelf: "stretch",
    display: "none",
  },
  button15: {
    minHeight: 24,
    paddingHorizontal: StyleVariable.space150,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
  },
  text: {
    fontFamily: FontFamily.sFProText,
    display: "flex",
    width: 16,
    color: Color.colorTextSubtle,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.update_size,
    justifyContent: "center",
    alignItems: "center",
  },
  actions: {
    paddingTop: StyleVariable.space100,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  collapsableContent: {
    paddingLeft: StyleVariable.space500,
    alignSelf: "stretch",
    display: "none",
  },
  flag: {
    top: 777,
    shadowColor: "rgba(9, 30, 66, 0.31)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    width: 321,
    padding: StyleVariable.space200,
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
    borderRadius: Border.br_10xs,
  },
  shareClass: {
    height: 932,
    width: "100%",
    flex: 1,
  },
});

export default ShareClass;
