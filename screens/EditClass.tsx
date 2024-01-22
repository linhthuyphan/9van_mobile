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

const EditClass = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.editClass}>
      <View style={[styles.classActive, styles.homeLayout]}>
        <View style={[styles.home, styles.homeLayout]}>
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
                <View style={[styles.container, styles.containerFlexBox1]}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before.png")}
                  />
                  <Text style={[styles.children, styles.titleChildrenTypo]}>
                    1
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.ellipsis, styles.ellipsisFlexBox]}>
              <Text style={[styles.ellipsesLabel, styles.labelTypo3]}>...</Text>
            </View>
            <View style={styles.page}>
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={[styles.container, styles.containerFlexBox1]}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children1, styles.titleChildrenTypo]}>
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
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
              <View style={[styles.button2, styles.buttonFlexBox1]}>
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
              <Text style={[styles.ellipsesLabel, styles.labelTypo3]}>...</Text>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonFlexBox1]}>
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
            <View style={[styles.navigator, styles.navigatorLayout]}>
              <View style={[styles.button, styles.buttonFlexBox1]}>
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
                <View style={[styles.codePartsHeader, styles.slotAnyBorder]}>
                  <View style={styles.minheightController40px} />
                  <View style={styles.container13}>
                    <Text style={[styles.headerLabel, styles.labelTypo2]}>
                      Header label
                    </Text>
                  </View>
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo2]}>
                        Lớp
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo2]}>
                        Học sinh
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo2]}>
                        Năm học
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo2]}>
                        Mô tả
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo2]} />
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
              </View>
              <View style={styles.tableTree1}>
                <View style={[styles.codePartsHeader, styles.slotAnyBorder]}>
                  <View style={styles.minheightController40px} />
                  <View style={styles.container13}>
                    <Text style={[styles.headerLabel, styles.labelTypo2]}>
                      Header label
                    </Text>
                  </View>
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
                        9A - Trường THCS Vĩnh Lộc
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
                        -
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
                        -
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
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
                        style={[styles.cellLabel5, styles.cellLabel5Typo]}
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
                <View style={[styles.codePartsHeader, styles.slotAnyBorder]}>
                  <View style={styles.minheightController40px} />
                  <View style={styles.container13}>
                    <Text style={[styles.headerLabel, styles.labelTypo2]}>
                      Header label
                    </Text>
                  </View>
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo2]}>
                        Lớp
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo2]}>
                        Chờ chấm
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo2]}>
                        Đã chấm
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo2]}>
                        Đã giao
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel, styles.labelTypo2]}>
                        Tỷ lệ làm bài
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
              </View>
              <View style={styles.tableTree1}>
                <View style={[styles.codePartsHeader, styles.slotAnyBorder]}>
                  <View style={styles.minheightController40px} />
                  <View style={styles.container13}>
                    <Text style={[styles.headerLabel, styles.labelTypo2]}>
                      Header label
                    </Text>
                  </View>
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
                        9B - Trường THCS Vĩnh Lộc
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
                        4
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
                        2
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
                        1
                      </Text>
                    </View>
                  </View>
                  <View style={styles.minheightController40px} />
                </View>
                <View style={styles.codeFlexBox}>
                  <View style={styles.containerFlexBox}>
                    <View style={styles.box}>
                      <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
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
          <View style={[styles.ccChcNngKhc, styles.homeLayout]}>
            <View style={styles.tabs}>
              <View style={styles.border} />
              <View style={styles.children13}>
                <View style={styles.tabSpaceBlock}>
                  <Text style={[styles.label, styles.labelPosition]}>
                    Hoạt động
                  </Text>
                  <View style={[styles.line, styles.linePosition]} />
                </View>
                <View style={styles.tabSpaceBlock}>
                  <Text style={[styles.label1, styles.labelTypo1]}>
                    Đã kết thúc
                  </Text>
                </View>
                <View style={[styles.tab, styles.tabSpaceBlock]}>
                  <Text style={[styles.label2, styles.labelTypo3]}>Tab</Text>
                </View>
                <View style={[styles.tab, styles.tabSpaceBlock]}>
                  <Text style={styles.label3}>Tab</Text>
                </View>
                <View style={[styles.tab, styles.tabSpaceBlock]}>
                  <Text style={styles.label3}>Tab</Text>
                </View>
                <View style={[styles.tab, styles.tabSpaceBlock]}>
                  <Text style={styles.label3}>Tab</Text>
                </View>
                <View style={[styles.tab, styles.tabSpaceBlock]}>
                  <Text style={styles.label3}>Tab</Text>
                </View>
                <View style={[styles.tab, styles.tabSpaceBlock]}>
                  <Text style={styles.label3}>Tab</Text>
                </View>
              </View>
            </View>
            <View style={[styles.buttonLpHc, styles.buttonFlexBox]}>
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
          <View style={[styles.mtMo, styles.homeLayout]}>
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
            <View style={styles.producthome}>
              <View style={styles.logo}>
                <View style={styles.logoLight}>
                  <View style={styles.container39}>
                    <Text style={styles.vn}>9Văn</Text>
                    <Image
                      style={[styles.isolationModeIcon, styles.slot1Position]}
                      resizeMode="cover"
                      source={require("../assets/isolation-mode.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.container40, styles.slotAnyBorder]}>
                <Text style={[styles.sitetitle, styles.labelTypo3]}>
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
                  source={require("../assets/icon2.png")}
                />
              </View>
              <View style={[styles.share, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon3.png")}
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
                  source={require("../assets/icon2.png")}
                />
              </View>
              <View style={[styles.share, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon3.png")}
                />
              </View>
            </View>
            <View style={styles.tableTree}>
              <View style={[styles.codePartsHeader, styles.slotAnyBorder]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container13}>
                  <Text style={[styles.headerLabel, styles.labelTypo2]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo2]}>
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
                      style={[styles.cellLabel, styles.labelTypo2]}
                    >{`Học sinh
`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo2]}>
                      Năm học
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo2]}>
                      Mô tả
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo2]} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
            </View>
            <View style={styles.tableTree5}>
              <View style={[styles.codePartsHeader, styles.slotAnyBorder]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container13}>
                  <Text style={[styles.headerLabel, styles.labelTypo2]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
                      9A
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>{`5
0 bài tập`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
                      2024
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
                      Đây là lớp có thành tích tốt
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo2]} />
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
                  source={require("../assets/icon2.png")}
                />
              </View>
              <View style={[styles.share, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon3.png")}
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
                  source={require("../assets/icon2.png")}
                />
              </View>
              <View style={[styles.share, styles.buttonFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon3.png")}
                />
              </View>
            </View>
            <View style={styles.tableTree}>
              <View style={[styles.codePartsHeader, styles.slotAnyBorder]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container13}>
                  <Text style={[styles.headerLabel, styles.labelTypo2]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo2]}>
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
                      style={[styles.cellLabel, styles.labelTypo2]}
                    >{`Học sinh
`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo2]}>
                      Năm học
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo2]}>
                      Mô tả
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo2]} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
            </View>
            <View style={styles.tableTree5}>
              <View style={[styles.codePartsHeader, styles.slotAnyBorder]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container13}>
                  <Text style={[styles.headerLabel, styles.labelTypo2]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
                      9A
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>{`5
0 bài tập`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
                      2024
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel5, styles.cellLabel5Typo]}>
                      Đây là lớp có thành tích tốt
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={styles.codeFlexBox}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo2]} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.niDungNhp}>
        <View style={[styles.khung, styles.khungPosition]}>
          <View style={[styles.truyCpLinKtParent, styles.truyLayout]}>
            <View style={[styles.truyCpLinKt, styles.truyLayout]}>
              <Image
                style={[styles.toggleIcon, styles.khungPosition]}
                resizeMode="cover"
                source={require("../assets/-toggle.png")}
              />
              <View style={[styles.label8, styles.labelSpaceBlock]}>
                <Text style={[styles.label9, styles.labelTypo]}>
                  Truy cập lớp thông qua liên kết
                </Text>
                <Text style={[styles.required, styles.requiredTypo]}>*</Text>
              </View>
              <View style={[styles.slotFormheader, styles.truyLayout]}>
                <Text style={[styles.title, styles.titleChildrenTypo]}>
                  Bật quyền truy cập qua mã lớp
                </Text>
                <Text style={[styles.description, styles.slotSpaceBlock]}>
                  Bất kỳ ai có mã lớp này đều có thể gửi yêu cầu tham gia lớp
                  học.
                </Text>
                <View style={[styles.slot, styles.slotBorder]}>
                  <Text style={[styles.addTextTo, styles.labelPosition]}>
                    Add text to provide guidance
                  </Text>
                  <View style={[styles.background, styles.slot1Bg]} />
                </View>
              </View>
            </View>
            <View style={[styles.nhn, styles.nhnLayout]}>
              <View style={[styles.label10, styles.labelSpaceBlock]}>
                <Text style={[styles.label11, styles.labelTypo]}>Tên lớp</Text>
                <Text style={[styles.required, styles.requiredTypo]}>*</Text>
              </View>
              <View style={[styles.slotAny, styles.slotAnyBorder]}>
                <View style={[styles.iconBefore, styles.iconLayout1]}>
                  <View style={[styles.slot1, styles.slot1Bg]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text style={styles.children15}>9A</Text>
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
                <Text style={[styles.children16, styles.requiredTypo]}>
                  Message content
                </Text>
              </View>
            </View>
            <View style={[styles.nhn1, styles.nhnLayout]}>
              <View style={[styles.label10, styles.labelSpaceBlock]}>
                <Text style={[styles.label11, styles.labelTypo]}>Mô tả</Text>
                <Text style={[styles.required, styles.requiredTypo]}>*</Text>
              </View>
              <View style={[styles.slotAny, styles.slotAnyBorder]}>
                <View style={[styles.iconBefore, styles.iconLayout1]}>
                  <View style={[styles.slot1, styles.slot1Bg]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text style={styles.children15}>THCS Chu Văn An</Text>
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
                <Text style={[styles.children16, styles.requiredTypo]}>
                  Message content
                </Text>
              </View>
            </View>
            <View style={[styles.nhn2, styles.nhnLayout]}>
              <View style={[styles.label10, styles.labelSpaceBlock]}>
                <Text style={[styles.label11, styles.labelTypo]}>Năm học</Text>
                <Text style={[styles.required, styles.requiredTypo]}>*</Text>
              </View>
              <View style={[styles.slotAny, styles.slotAnyBorder]}>
                <View style={[styles.iconBefore, styles.iconLayout1]}>
                  <View style={[styles.slot1, styles.slot1Bg]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text style={styles.children15}>20224</Text>
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
                <Text style={[styles.children16, styles.requiredTypo]}>
                  Message content
                </Text>
              </View>
            </View>
            <View style={styles.buttonGroup}>
              <View style={[styles.button2, styles.buttonFlexBox1]}>
                <View style={[styles.container, styles.containerFlexBox1]}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children21, styles.childrenTypo]}>
                    Hủy
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
              <View style={[styles.button16, styles.buttonFlexBox]}>
                <View style={[styles.container, styles.containerFlexBox1]}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before3.png")}
                  />
                  <Text style={[styles.children14, styles.childrenTypo]}>
                    Lưu
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/icon-before3.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.title1, styles.titleChildrenTypo]}>
          Chỉnh sửa lớp học
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: 430,
    position: "absolute",
  },
  navigatorLayout: {
    width: 32,
    height: 32,
  },
  buttonFlexBox1: {
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
  titleChildrenTypo: {
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
  labelTypo3: {
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
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
  slotAnyBorder: {
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
    flexDirection: "row",
  },
  labelTypo2: {
    lineHeight: 14,
    textAlign: "left",
    fontFamily: FontFamily.update,
    fontWeight: "500",
    fontSize: FontSize.update_size,
  },
  cellLabel5Typo: {
    fontFamily: FontFamily.tableRight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorTextDefault,
    lineHeight: 20,
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
  labelPosition: {
    zIndex: 0,
    textAlign: "center",
  },
  linePosition: {
    zIndex: 1,
    bottom: 0,
  },
  labelTypo1: {
    fontSize: FontSize.tabs_size,
    lineHeight: 25,
    fontFamily: FontFamily.update,
    fontWeight: "500",
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  slot1Position: {
    bottom: "0%",
    top: "0%",
    height: "100%",
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
  khungPosition: {
    top: 32,
    position: "absolute",
  },
  truyLayout: {
    width: 334,
    position: "absolute",
  },
  labelSpaceBlock: {
    paddingBottom: StyleVariable.space050,
    flexDirection: "row",
  },
  labelTypo: {
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.update,
    fontWeight: "500",
    fontSize: FontSize.update_size,
  },
  requiredTypo: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
  },
  slotSpaceBlock: {
    marginTop: 4,
    alignSelf: "stretch",
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
  nhnLayout: {
    height: 56,
    width: 334,
    left: 0,
    position: "absolute",
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
    height: 24,
    display: "none",
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
    height: 24,
    display: "none",
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
    lineHeight: 20,
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
    display: "none",
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
    display: "none",
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
    alignSelf: "stretch",
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
    lineHeight: 25,
    fontSize: FontSize.tabs_size,
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
    height: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  label1: {
    lineHeight: 25,
    color: Color.colorTextSubtle,
    textAlign: "center",
  },
  label2: {
    fontWeight: "600",
    lineHeight: 25,
    color: Color.colorTextSubtle,
    textAlign: "center",
  },
  tab: {
    display: "none",
  },
  label3: {
    fontFamily: FontFamily.input,
    lineHeight: 25,
    color: Color.colorTextSubtle,
    textAlign: "center",
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
    display: "none",
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
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
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
    color: Color.colorTextSubtlest,
    textAlign: "left",
    lineHeight: 20,
  },
  container40: {
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
    left: 24,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  mtMo: {
    height: 50,
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
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
    left: 0,
    top: 0,
    height: 932,
  },
  toggleIcon: {
    left: 294,
    borderRadius: Border.br_lgi,
    height: 20,
    width: 40,
  },
  label9: {
    color: Color.colorTextSubtle,
  },
  required: {
    color: Color.colorTextDanger,
    fontWeight: "600",
    display: "none",
  },
  label8: {
    height: 20,
    width: 334,
    position: "absolute",
    left: 0,
    top: 0,
  },
  title: {
    lineHeight: 28,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.colorTextDefault,
    fontSize: FontSize.update_size,
  },
  description: {
    fontFamily: FontFamily.tableRight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorTextDefault,
    lineHeight: 20,
    fontSize: FontSize.update_size,
  },
  addTextTo: {
    fontSize: FontSize.size_5xs,
    lineHeight: 12,
    color: Color.colorTextAccentMagentaDefault,
    fontFamily: FontFamily.input,
    display: "none",
  },
  background: {
    zIndex: 1,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  slot: {
    paddingVertical: StyleVariable.space075,
    marginTop: 4,
    alignSelf: "stretch",
    paddingHorizontal: StyleVariable.space150,
    height: 32,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  slotFormheader: {
    top: 28,
    height: 72,
    left: 0,
  },
  truyCpLinKt: {
    top: 192,
    height: 100,
    left: 0,
  },
  label11: {
    color: Color.black,
  },
  label10: {
    alignSelf: "stretch",
  },
  slot1: {
    borderRadius: 0.001,
    borderColor: Color.colorBorderAccentMagenta,
    borderStyle: "dashed",
    borderWidth: 1,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    backgroundColor: Color.colorBackgroundAccentMagentaSubtlestDefault,
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
  children15: {
    marginLeft: 6,
    height: 20,
    color: Color.colorTextSubtlest,
    fontFamily: FontFamily.input,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.update_size,
    flex: 1,
  },
  component1: {
    marginLeft: 6,
    height: 24,
    display: "none",
  },
  slotAny: {
    borderWidth: 2,
    padding: StyleVariable.space100,
    alignSelf: "stretch",
    backgroundColor: Color.colorTextInverse,
    borderRadius: Border.br_10xs,
    borderStyle: "solid",
    alignItems: "center",
  },
  children16: {
    color: Color.colorTextSubtlest,
    flex: 1,
  },
  message: {
    paddingTop: StyleVariable.space050,
    alignSelf: "stretch",
    display: "none",
    flexDirection: "row",
  },
  nhn: {
    top: 0,
  },
  nhn1: {
    top: 64,
  },
  nhn2: {
    top: 128,
  },
  children21: {
    color: Color.colorTextSubtle,
  },
  button16: {
    marginLeft: 4,
    paddingHorizontal: StyleVariable.space150,
  },
  buttonGroup: {
    top: 315,
    width: 101,
    right: 0,
    height: 32,
    flexDirection: "row",
    position: "absolute",
  },
  truyCpLinKtParent: {
    top: 11,
    height: 347,
    left: 24,
  },
  khung: {
    height: 382,
    width: 382,
    backgroundColor: Color.colorTextInverse,
    borderRadius: Border.br_3xs,
    top: 32,
    overflow: "hidden",
    left: 0,
  },
  title1: {
    fontSize: FontSize.titleField_size,
    lineHeight: 32,
    textAlign: "left",
    color: Color.colorTextDefault,
    left: 0,
    top: 0,
    position: "absolute",
  },
  niDungNhp: {
    top: 170,
    height: 414,
    left: 24,
    width: 382,
    position: "absolute",
  },
  editClass: {
    height: 932,
    width: "100%",
    flex: 1,
  },
});

export default EditClass;
