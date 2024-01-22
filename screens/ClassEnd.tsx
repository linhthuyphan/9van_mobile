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

const ClassEnd = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.classEnd}>
      <View style={styles.homePosition}>
        <View style={[styles.home, styles.homePosition]}>
          <View style={styles.thanhIuHng}>
            <View style={[styles.navigator, styles.cngC4Layout]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
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
            <View style={[styles.navigator, styles.cngC4Layout]}>
              <View style={[styles.button, styles.buttonFlexBox]}>
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
              <View style={[styles.progressBar, styles.cngPosition1]}>
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
                </View>
                <View style={styles.tabSpaceBlock}>
                  <Text style={[styles.label1, styles.labelLayout]}>
                    Đã kết thúc
                  </Text>
                  <View style={[styles.line, styles.linePosition]} />
                </View>
                <View style={[styles.tab2, styles.tabSpaceBlock]}>
                  <Text style={styles.label2}>Tab</Text>
                </View>
                <View style={[styles.tab2, styles.tabSpaceBlock]}>
                  <Text style={[styles.label3, styles.labelLayout]}>Tab</Text>
                </View>
                <View style={[styles.tab2, styles.tabSpaceBlock]}>
                  <Text style={[styles.label3, styles.labelLayout]}>Tab</Text>
                </View>
                <View style={[styles.tab2, styles.tabSpaceBlock]}>
                  <Text style={[styles.label3, styles.labelLayout]}>Tab</Text>
                </View>
                <View style={[styles.tab2, styles.tabSpaceBlock]}>
                  <Text style={[styles.label3, styles.labelLayout]}>Tab</Text>
                </View>
                <View style={[styles.tab2, styles.tabSpaceBlock]}>
                  <Text style={[styles.label3, styles.labelLayout]}>Tab</Text>
                </View>
              </View>
            </View>
            <View style={[styles.buttonLpHc, styles.shareFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox1]}>
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
            <Pressable
              style={styles.newIconFlexBox}
              onPress={() => navigation.navigate("Home")}
            >
              <Image
                style={[styles.trangChIcon, styles.cngC4Layout]}
                resizeMode="cover"
                source={require("../assets/trang-ch-icon.png")}
              />
              <Text style={[styles.trangCh, styles.trangTypo]}>Trang chủ</Text>
            </Pressable>
            <View style={[styles.newIcon1, styles.newIconFlexBox]}>
              <Image
                style={[styles.trangChIcon, styles.cngC4Layout]}
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
                style={[styles.trangChIcon, styles.cngC4Layout]}
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
                style={[styles.trangChIcon, styles.cngC4Layout]}
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
        <View style={[styles.danhSchLpHc, styles.danhLayout]}>
          <View style={[styles.niDungBng, styles.dungPosition]}>
            <View style={[styles.cngC3, styles.cngPosition]}>
              <View style={[styles.ktThc, styles.thcFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={[styles.sa, styles.saFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-after2.png")}
                />
              </View>
              <View style={[styles.share, styles.shareFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon8.png")}
                />
              </View>
            </View>
            <View style={[styles.cngC4, styles.cngPosition1]}>
              <View style={[styles.ktThc1, styles.thcFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={[styles.xa, styles.xaFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon4.png")}
                />
              </View>
              <View style={[styles.sa1, styles.saFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-after2.png")}
                />
              </View>
              <View style={[styles.share1, styles.shareFlexBox]}>
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
            <View style={styles.cngPosition}>
              <View style={[styles.ktThc, styles.thcFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={[styles.sa, styles.saFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-after2.png")}
                />
              </View>
              <View style={[styles.share, styles.shareFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon8.png")}
                />
              </View>
            </View>
            <View style={[styles.cngC41, styles.cngPosition1]}>
              <View style={[styles.ktThc, styles.thcFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={[styles.xa1, styles.xaFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon4.png")}
                />
              </View>
              <View style={[styles.sa, styles.saFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-after2.png")}
                />
              </View>
              <View style={[styles.share, styles.shareFlexBox]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  cngC4Layout: {
    width: 32,
    height: 32,
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
    overflow: "hidden",
  },
  containerFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
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
  cngPosition1: {
    top: 188,
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
    overflow: "hidden",
    width: 430,
    position: "absolute",
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
  danhLayout: {
    height: 250,
    left: 24,
    width: 382,
    backgroundColor: Color.colorTextInverse,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    position: "absolute",
  },
  cngPosition: {
    width: 126,
    left: 216,
    top: 188,
    height: 32,
    position: "absolute",
  },
  thcFlexBox: {
    backgroundColor: Color.colorBackgroundWarningBoldDefault,
    minHeight: 32,
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.space050,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  saFlexBox: {
    backgroundColor: Color.eE2B8,
    minHeight: 32,
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.space050,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  xaFlexBox: {
    backgroundColor: Color.colorBackgroundDangerBoldDefault,
    minHeight: 32,
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.space050,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  containerFlexBox: {
    justifyContent: "space-between",
    paddingVertical: StyleVariable.space100,
    paddingHorizontal: 0,
    flexDirection: "row",
    flex: 1,
  },
  icon: {
    height: 24,
  },
  button: {
    paddingHorizontal: StyleVariable.space050,
    top: 0,
    left: 0,
    position: "absolute",
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
    left: 108,
    borderRadius: Border.br_10xs,
    top: 188,
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
    fontSize: FontSize.tabs_size,
    lineHeight: 25,
    fontFamily: FontFamily.update,
    fontWeight: "500",
    color: Color.colorTextSubtle,
  },
  label1: {
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
  label2: {
    fontWeight: "600",
    lineHeight: 25,
    color: Color.colorTextSubtle,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    textAlign: "center",
    fontSize: FontSize.update_size,
  },
  tab2: {
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
    right: 0,
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
    left: 24,
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
    overflow: "hidden",
  },
  ktThc: {
    left: 94,
  },
  sa: {
    left: 47,
  },
  share: {
    paddingHorizontal: StyleVariable.space050,
    top: 0,
    left: 0,
  },
  cngC3: {
    display: "none",
  },
  ktThc1: {
    left: -47,
    display: "none",
  },
  xa: {
    left: 0,
  },
  sa1: {
    left: -94,
    display: "none",
  },
  share1: {
    left: -141,
    display: "none",
    paddingHorizontal: StyleVariable.space050,
    top: 0,
  },
  cngC4: {
    left: 310,
    height: 32,
    width: 32,
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
  xa1: {
    left: 141,
  },
  cngC41: {
    left: 169,
    width: 173,
    display: "none",
    height: 32,
  },
  niDungBng1: {
    height: 225,
  },
  danhSchLpHc1: {
    top: 450,
    display: "none",
  },
  classEnd: {
    height: 932,
    width: "100%",
    flex: 1,
  },
});

export default ClassEnd;
