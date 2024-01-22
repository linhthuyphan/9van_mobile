import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Border,
  FontFamily,
  StyleVariable,
  FontSize,
  Color,
  Padding,
} from "../GlobalStyles";

const NewwClass = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.newwClass}>
      <View style={styles.classActive}>
        <View style={styles.home}>
          <View style={styles.thanhIuHng}>
            <View style={[styles.navigator, styles.navigatorLayout]}>
              <View style={[styles.button, styles.buttonFlexBox1]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon.png")}
                />
              </View>
            </View>
            <View style={styles.page}>
              <View style={[styles.button1, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before.png")}
                  />
                  <Text style={[styles.children, styles.childrenTypo2]}>1</Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.ellipsis, styles.ellipsisFlexBox]}>
              <Text style={[styles.ellipsesLabel, styles.childrenLayout]}>
                ...
              </Text>
            </View>
            <View style={styles.page}>
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children1, styles.childrenTypo2]}>
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    3
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    4
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    5
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    6
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    7
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    8
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    9
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
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
              <Text style={[styles.ellipsesLabel, styles.childrenLayout]}>
                ...
              </Text>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
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
              <View style={[styles.button, styles.buttonFlexBox1]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon--chevronrightlargeicon2.png")}
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
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Lớp
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Học sinh
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Năm học
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Mô tả
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
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
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                        9A - Trường THCS Vĩnh Lộc
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                        -
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                        -
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                        Trường THCS Vĩnh Phúc
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text
                        style={[styles.cellLabel5, styles.childrenLayout]}
                      />
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
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Lớp
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Chờ chấm
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Đã chấm
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo1]}>
                        Đã giao
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
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
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                        9B - Trường THCS Vĩnh Lộc
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                        4
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                        2
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                        1
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                        {" "}
                        40%
                      </Text>
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
          <View style={[styles.ccChcNngKhc, styles.actionsPosition]}>
            <View style={styles.tabs}>
              <View style={styles.border} />
              <View style={styles.children13}>
                <View style={styles.tabSpaceBlock}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    Hoạt động
                  </Text>
                  <View style={styles.line} />
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
            <View style={[styles.buttonLpHc, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before2.png")}
                />
                <Text style={[styles.children14, styles.childrenTypo1]}>
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
            <Pressable
              style={styles.newIconFlexBox}
              onPress={() => navigation.navigate("Home")}
            >
              <Image
                style={[styles.trangChIcon, styles.navigatorLayout]}
                resizeMode="cover"
                source={require("../assets/trang-ch-icon.png")}
              />
              <Text style={[styles.trangCh, styles.trangTypo]}>Trang chủ</Text>
            </Pressable>
            <View style={[styles.newIcon1, styles.newIconFlexBox]}>
              <Image
                style={[styles.trangChIcon, styles.navigatorLayout]}
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
                style={[styles.trangChIcon, styles.navigatorLayout]}
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
                style={[styles.trangChIcon, styles.navigatorLayout]}
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
            <View style={[styles.producthome, styles.niDungNhpPosition]}>
              <View style={styles.logo}>
                <View style={styles.logoLight}>
                  <View style={styles.container39}>
                    <Text style={styles.vn}>9Văn</Text>
                    <Image
                      style={[styles.isolationModeIcon, styles.slot1Position]}
                      resizeMode="cover"
                      source={require("../assets/isolation-mode1.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.container40, styles.container40Border]}>
                <Text style={[styles.sitetitle, styles.childrenTypo]}>
                  siteTitle
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.danhSchLpHc, styles.danhLayout]}>
          <View style={[styles.niDungBng, styles.dungPosition]}>
            <View style={[styles.cngC3, styles.cngPosition1]}>
              <View style={[styles.ktThc, styles.buttonFlexBox1]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={[styles.sa, styles.buttonFlexBox1]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-after2.png")}
                />
              </View>
              <View style={[styles.share, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon8.png")}
                />
              </View>
            </View>
            <View style={styles.cngPosition}>
              <View style={[styles.ktThc, styles.buttonFlexBox1]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={[styles.xa, styles.buttonFlexBox1]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon4.png")}
                />
              </View>
              <View style={[styles.sa, styles.buttonFlexBox1]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-after2.png")}
                />
              </View>
              <View style={[styles.share, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon8.png")}
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
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]}>
                      Lớp
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell21, styles.codeFlexBox]}>
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
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]}>
                      Năm học
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]}>
                      Mô tả
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
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
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                      9A
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.childrenLayout]}>{`5
0 bài tập`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                      2024
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                      Đây là lớp có thành tích tốt
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
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
              <View style={[styles.ktThc, styles.buttonFlexBox1]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={[styles.sa, styles.buttonFlexBox1]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-after2.png")}
                />
              </View>
              <View style={[styles.share, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon8.png")}
                />
              </View>
            </View>
            <View style={[styles.cngC41, styles.cngPosition]}>
              <View style={[styles.ktThc, styles.buttonFlexBox1]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={[styles.xa, styles.buttonFlexBox1]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon4.png")}
                />
              </View>
              <View style={[styles.sa, styles.buttonFlexBox1]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-after2.png")}
                />
              </View>
              <View style={[styles.share, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon8.png")}
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
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]}>
                      Lớp
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell21, styles.codeFlexBox]}>
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
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]}>
                      Năm học
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo1]}>
                      Mô tả
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
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
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                      9A
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.childrenLayout]}>{`5
0 bài tập`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                      2024
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.childrenLayout]}>
                      Đây là lớp có thành tích tốt
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
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
      <View style={[styles.niDungNhp, styles.niDungNhpPosition]}>
        <View style={[styles.khung, styles.mtMoBg]}>
          <View style={styles.nhnParent}>
            <View style={[styles.nhn, styles.nhnLayout]}>
              <View style={[styles.textArea, styles.slotAnyBorder]}>
                <View style={styles.minheightController56px} />
                <View style={[styles.container65, styles.slotAnySpaceBlock]}>
                  <Text style={[styles.children15, styles.childrenTypo]}>
                    Email học sinh
                  </Text>
                </View>
              </View>
              <View style={[styles.codePartsFormheader, styles.nhnLayout]}>
                <Text style={[styles.title, styles.titleTypo]}>
                  Danh sách học sinh
                </Text>
                <Text style={[styles.description, styles.childrenLayout]}>
                  Gõ hoặc dán email học sinh, phân cách nhiều email bằng dấu
                  phẩy và ấn enter.
                </Text>
                <View style={[styles.slot, styles.slotBorder]}>
                  <Text style={styles.addTextTo}>
                    Add text to provide guidance
                  </Text>
                  <View style={[styles.background, styles.slot1Bg]} />
                </View>
              </View>
            </View>
            <View style={[styles.nhn1, styles.nhnLayout]}>
              <View style={styles.label8}>
                <Text style={[styles.label9, styles.titleTypo]}>Mô tả</Text>
                <Text style={[styles.required, styles.requiredTypo]}>*</Text>
              </View>
              <View style={[styles.slotAny, styles.slotAnySpaceBlock]}>
                <View style={[styles.iconBefore, styles.iconLayout1]}>
                  <View style={[styles.slot1, styles.slot1Bg]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text style={[styles.children16, styles.childrenTypo]}>
                  Nhập mô tả lớp học
                </Text>
                <View style={[styles.component1, styles.iconLayout1]}>
                  <View style={[styles.slot1, styles.slot1Bg]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
              <View style={styles.message}>
                <Text style={styles.children17}>Message content</Text>
              </View>
            </View>
            <View style={[styles.nhn2, styles.nhnLayout]}>
              <View style={styles.label8}>
                <Text style={[styles.label9, styles.titleTypo]}>Năm học</Text>
                <Text style={styles.requiredTypo}>*</Text>
              </View>
              <View style={[styles.slotAny, styles.slotAnySpaceBlock]}>
                <View style={[styles.iconBefore, styles.iconLayout1]}>
                  <View style={[styles.slot1, styles.slot1Bg]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text style={[styles.children16, styles.childrenTypo]}>
                  2024
                </Text>
                <View style={[styles.component1, styles.iconLayout1]}>
                  <View style={[styles.slot1, styles.slot1Bg]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
              <View style={styles.message}>
                <Text style={styles.children17}>Message content</Text>
              </View>
            </View>
            <View style={[styles.nhn3, styles.nhnLayout]}>
              <View style={styles.label8}>
                <Text style={[styles.label9, styles.titleTypo]}>Tên lớp</Text>
                <Text style={styles.requiredTypo}>*</Text>
              </View>
              <View style={[styles.slotAny, styles.slotAnySpaceBlock]}>
                <View style={[styles.iconBefore, styles.iconLayout1]}>
                  <View style={[styles.slot1, styles.slot1Bg]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text
                  style={[styles.children16, styles.childrenTypo]}
                >{`Lớp 7A1 - Văn giáo viên Trinh Hong Nhung

`}</Text>
                <View style={[styles.component1, styles.iconLayout1]}>
                  <View style={[styles.slot1, styles.slot1Bg]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
              <View style={styles.message}>
                <Text style={styles.children17}>Message content</Text>
              </View>
            </View>
            <View style={styles.buttonGroup}>
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before6.png")}
                  />
                  <Text style={[styles.children22, styles.childrenTypo1]}>
                    Hủy
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before6.png")}
                  />
                </View>
              </View>
              <View style={[styles.button16, styles.buttonFlexBox]}>
                <View style={styles.container}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before7.png")}
                  />
                  <Text style={[styles.children14, styles.childrenTypo1]}>
                    Tạo lớp học
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before7.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.mainContent}>
          <Text style={[styles.title1, styles.childrenTypo2]}>Tạo lớp học</Text>
          <View style={[styles.actions, styles.actionsPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigatorLayout: {
    width: 32,
    height: 32,
  },
  buttonFlexBox1: {
    minHeight: 32,
    borderRadius: Border.br_10xs,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  childrenTypo2: {
    fontFamily: FontFamily.update,
    fontWeight: "500",
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
  childrenLayout: {
    lineHeight: 20,
    fontSize: FontSize.update_size,
  },
  childrenTypo1: {
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
    backgroundColor: Color.colorTextInverse,
    borderRadius: Border.br_3xs,
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
  barPosition: {
    height: 6,
    top: "50%",
    marginTop: -3,
    left: "0%",
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  actionsPosition: {
    right: 0,
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
  buttonFlexBox: {
    backgroundColor: Color.colorBackgroundBrandBoldDefault,
    minHeight: 32,
    paddingVertical: 0,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
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
  mtMoBg: {
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  niDungNhpPosition: {
    left: 24,
    position: "absolute",
  },
  slot1Position: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  childrenTypo: {
    color: Color.colorTextSubtlest,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.update_size,
  },
  danhLayout: {
    height: 250,
    left: 24,
    width: 382,
    backgroundColor: Color.colorTextInverse,
    borderRadius: Border.br_3xs,
    display: "none",
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
  codeFlexBox: {
    borderBottomWidth: 1,
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  nhnLayout: {
    width: 334,
    position: "absolute",
  },
  slotAnyBorder: {
    borderWidth: 2,
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
    backgroundColor: Color.colorTextInverse,
    borderRadius: Border.br_10xs,
  },
  slotAnySpaceBlock: {
    padding: StyleVariable.space100,
    flexDirection: "row",
  },
  titleTypo: {
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.update,
    fontWeight: "500",
    fontSize: FontSize.update_size,
  },
  slotBorder: {
    borderRadius: 0.001,
    borderColor: Color.colorBorderAccentMagenta,
    borderStyle: "dashed",
    borderWidth: 1,
  },
  slot1Bg: {
    backgroundColor: Color.colorBackgroundAccentMagentaSubtlestDefault,
    position: "absolute",
  },
  requiredTypo: {
    color: Color.colorTextDanger,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
  },
  icon: {
    height: 24,
  },
  button: {
    paddingHorizontal: StyleVariable.space050,
    top: 0,
    position: "absolute",
    left: 0,
  },
  navigator: {
    height: 32,
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
    fontSize: FontSize.update_size,
  },
  iconAfter: {
    marginLeft: 4,
    display: "none",
    height: 24,
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
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
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
    fontSize: FontSize.update_size,
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
    height: 6,
    top: "50%",
    marginTop: -3,
    backgroundColor: Color.colorBackgroundNeutralDefault,
    width: "100%",
  },
  bar: {
    width: "55.9%",
    right: "44.1%",
    backgroundColor: Color.colorTextSubtle,
    height: 6,
    top: "50%",
    marginTop: -3,
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
    height: 2,
    bottom: 0,
    right: 0,
    borderBottomWidth: 1,
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
    display: "none",
    left: 0,
    position: "absolute",
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
    zIndex: 1,
    borderWidth: 1,
    height: 2,
    bottom: 0,
    borderStyle: "solid",
    position: "absolute",
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
    lineHeight: 25,
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
    display: "none",
    paddingHorizontal: StyleVariable.space150,
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
    display: "none",
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ccChcNngKhc: {
    top: 112,
    height: 48,
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
    width: 430,
  },
  trangChIcon: {
    height: 32,
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
    height: "100%",
    maxWidth: "100%",
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
    right: "74.83%",
    left: "2.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  home: {
    backgroundColor: Color.background,
    overflow: "hidden",
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
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
    position: "absolute",
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
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  minheightController56px: {
    height: 56,
  },
  children15: {
    opacity: 0.8,
    fontFamily: FontFamily.input,
    flex: 1,
  },
  container65: {
    flex: 1,
  },
  textArea: {
    top: 61,
    height: 90,
    width: 334,
    position: "absolute",
    flexDirection: "row",
    left: 0,
  },
  title: {
    alignSelf: "stretch",
    color: Color.colorTextDefault,
  },
  description: {
    fontFamily: FontFamily.input,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.colorTextDefault,
  },
  addTextTo: {
    fontSize: FontSize.size_5xs,
    lineHeight: 12,
    color: Color.colorTextAccentMagentaDefault,
    fontFamily: FontFamily.input,
    zIndex: 0,
    textAlign: "center",
    display: "none",
  },
  background: {
    zIndex: 1,
    bottom: 0,
    backgroundColor: Color.colorBackgroundAccentMagentaSubtlestDefault,
    right: 0,
    left: 0,
    top: 0,
  },
  slot: {
    paddingVertical: StyleVariable.space075,
    alignSelf: "stretch",
    display: "none",
    paddingHorizontal: StyleVariable.space150,
    height: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  codePartsFormheader: {
    height: 61,
    justifyContent: "center",
    left: 0,
    top: 0,
  },
  nhn: {
    top: 167,
    left: 1,
    height: 151,
  },
  label9: {
    color: Color.colorTextSubtle,
  },
  required: {
    display: "none",
  },
  label8: {
    paddingBottom: StyleVariable.space050,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  slot1: {
    borderRadius: 0.001,
    borderColor: Color.colorBorderAccentMagenta,
    borderStyle: "dashed",
    borderWidth: 1,
    bottom: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.colorBackgroundAccentMagentaSubtlestDefault,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  vectorIcon: {
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    opacity: 0,
    position: "absolute",
  },
  children16: {
    height: 20,
    marginLeft: 6,
    fontFamily: FontFamily.input,
    flex: 1,
  },
  component1: {
    marginLeft: 6,
    display: "none",
    height: 24,
  },
  slotAny: {
    borderWidth: 2,
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
    backgroundColor: Color.colorTextInverse,
    borderRadius: Border.br_10xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  children17: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.colorTextSubtlest,
    textAlign: "left",
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    flex: 1,
  },
  message: {
    paddingTop: StyleVariable.space050,
    alignSelf: "stretch",
    display: "none",
    flexDirection: "row",
  },
  nhn1: {
    top: 56,
    height: 56,
    left: 0,
  },
  nhn2: {
    top: 111,
    height: 56,
    left: 0,
  },
  nhn3: {
    height: 56,
    left: 0,
    top: 0,
  },
  children22: {
    color: Color.colorTextSubtle,
  },
  button16: {
    marginLeft: 4,
    paddingHorizontal: StyleVariable.space150,
  },
  buttonGroup: {
    top: 342,
    left: 186,
    width: 149,
    flexDirection: "row",
    position: "absolute",
  },
  nhnParent: {
    left: 23,
    width: 335,
    height: 374,
    top: 10,
    position: "absolute",
  },
  khung: {
    top: 32,
    height: 408,
    width: 382,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTextInverse,
    left: 0,
    position: "absolute",
  },
  title1: {
    fontSize: FontSize.titleField_size,
    lineHeight: 32,
    zIndex: 0,
    textAlign: "left",
    color: Color.colorTextDefault,
  },
  actions: {
    bottom: 8,
    zIndex: 1,
    display: "none",
  },
  mainContent: {
    width: 214,
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  niDungNhp: {
    top: 170,
    height: 440,
    width: 382,
  },
  newwClass: {
    height: 932,
    width: "100%",
    flex: 1,
  },
});

export default NewwClass;
