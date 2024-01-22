import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  StyleVariable,
  Border,
} from "../GlobalStyles";

const AssignmentScored = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.assignmentScored}>
      <View style={styles.assignmentWait}>
        <View style={styles.trangChComponent}>
          <View style={[styles.mtMo, styles.mtMoPosition]}>
            <Image
              style={styles.iconNotificationicon}
              resizeMode="cover"
              source={require("../assets/icon--notificationicon2.png")}
            />
            <Image
              style={[styles.avatarImageIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/avatar-image.png")}
            />
            <View style={styles.producthome}>
              <View style={styles.logo}>
                <View style={styles.logoLight}>
                  <View style={styles.container}>
                    <Text style={styles.vn}>9Văn</Text>
                    <Image
                      style={[styles.isolationModeIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/isolation-mode3.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.container1, styles.container1Border]}>
                <Text style={[styles.sitetitle, styles.cellTypo]}>
                  siteTitle
                </Text>
              </View>
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
                source={require("../assets/trang-ch-icon6.png")}
              />
              <Text style={[styles.trangCh, styles.trangTypo]}>Trang chủ</Text>
            </Pressable>
            <Pressable
              style={styles.newIconFlexBox}
              onPress={() => navigation.navigate("ClassActive")}
            >
              <Image
                style={[styles.trangChIcon, styles.navigatorLayout]}
                resizeMode="cover"
                source={require("../assets/lp-hc-icon.png")}
              />
              <Text style={[styles.trangCh, styles.trangTypo]}>Lớp học</Text>
            </Pressable>
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
            <View style={[styles.newIcon3, styles.newIconFlexBox]}>
              <Image
                style={[styles.trangChIcon, styles.navigatorLayout]}
                resizeMode="cover"
                source={require("../assets/trang-ch-icon7.png")}
              />
              <Text style={[styles.trangCh2, styles.trangTypo]}>Bài tập</Text>
            </View>
          </View>
          <View style={styles.thanhIuHng}>
            <View style={[styles.navigator, styles.navigatorLayout]}>
              <View style={[styles.button, styles.buttonitemFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon.png")}
                />
              </View>
            </View>
            <View style={styles.page}>
              <View style={[styles.button1, styles.buttonSpaceBlock]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before.png")}
                  />
                  <Text style={[styles.children, styles.childrenTypo1]}>1</Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.ellipsis, styles.ellipsisFlexBox]}>
              <Text style={[styles.ellipsesLabel, styles.childrenTypo1]}>
                ...
              </Text>
            </View>
            <View style={styles.page}>
              <View style={[styles.button2, styles.buttonSpaceBlock]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children1, styles.childrenTypo1]}>
                    2
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonSpaceBlock]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    3
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonSpaceBlock]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    4
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonSpaceBlock]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    5
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonSpaceBlock]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    6
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonSpaceBlock]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    7
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonSpaceBlock]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    8
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonSpaceBlock]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    9
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonSpaceBlock]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    10
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonSpaceBlock]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    11
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonSpaceBlock]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    12
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.ellipsisFlexBox}>
              <Text style={[styles.ellipsesLabel, styles.childrenTypo1]}>
                ...
              </Text>
            </View>
            <View style={styles.page2}>
              <View style={[styles.button2, styles.buttonSpaceBlock]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
                    20
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.navigator, styles.navigatorLayout]}>
              <View style={[styles.button, styles.buttonitemFlexBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon--chevronrightlargeicon.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.ccChcNngKhc, styles.mtMoPosition]}>
            <View style={[styles.tabs, styles.tabsPosition]}>
              <View style={[styles.border, styles.linePosition]} />
              <View style={styles.children13}>
                <View style={styles.tabSpaceBlock}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    Bài chờ chấm
                  </Text>
                </View>
                <View style={styles.tabSpaceBlock}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    Bài đã giao
                  </Text>
                </View>
                <View style={styles.tabSpaceBlock}>
                  <Text style={[styles.label2, styles.labelLayout]}>
                    Bài đã chấm
                  </Text>
                  <View style={[styles.line, styles.linePosition]} />
                </View>
                <View style={[styles.tab3, styles.tabSpaceBlock]}>
                  <Text style={[styles.label3, styles.label3Typo]}>Tab</Text>
                </View>
                <View style={[styles.tab3, styles.tabSpaceBlock]}>
                  <Text style={[styles.label3, styles.label3Typo]}>Tab</Text>
                </View>
                <View style={[styles.tab3, styles.tabSpaceBlock]}>
                  <Text style={[styles.label3, styles.label3Typo]}>Tab</Text>
                </View>
                <View style={[styles.tab3, styles.tabSpaceBlock]}>
                  <Text style={[styles.label3, styles.label3Typo]}>Tab</Text>
                </View>
                <View style={[styles.tab3, styles.tabSpaceBlock]}>
                  <Text style={[styles.label3, styles.label3Typo]}>Tab</Text>
                </View>
              </View>
            </View>
            <View style={[styles.button15, styles.buttonFlexBox]}>
              <View style={styles.container2}>
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before2.png")}
                />
                <Text style={[styles.children14, styles.childrenTypo]}>
                  Tạo lớp học
                </Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-after.png")}
                />
              </View>
            </View>
            <View style={styles.tiu}>
              <Text style={[styles.headingH600, styles.trangTypo]}>
                Tổng quan bài tập các lớp đang hoạt động
              </Text>
            </View>
            <View style={[styles.search, styles.searchBorder]}>
              <Text style={[styles.search1, styles.cellTypo]}>Search</Text>
              <Image
                style={[styles.iconSearchicon, styles.tabsPosition]}
                resizeMode="cover"
                source={require("../assets/icon--searchicon1.png")}
              />
            </View>
            <View style={[styles.dropdownMenu, styles.searchPosition]}>
              <View style={[styles.dropdownMenu1, styles.mtMoPosition]}>
                <View style={styles.dropdownItemLight}>
                  <View style={styles.minheightController40px} />
                  <View style={styles.container16}>
                    <Image
                      style={[styles.icon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                    <View style={styles.titleDescription}>
                      <Text style={[styles.title, styles.cellTypo]}>
                        Option
                      </Text>
                      <Text
                        style={[styles.description, styles.descriptionTypo]}
                      >
                        Description goes here
                      </Text>
                    </View>
                    <Image
                      style={[styles.elemafterIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                  </View>
                </View>
                <View style={styles.dropdownItemLight}>
                  <View style={styles.minheightController40px} />
                  <View style={styles.container16}>
                    <Image
                      style={[styles.icon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                    <View style={styles.titleDescription}>
                      <Text style={[styles.title, styles.cellTypo]}>
                        Option
                      </Text>
                      <Text
                        style={[styles.description, styles.descriptionTypo]}
                      >
                        Description goes here
                      </Text>
                    </View>
                    <Image
                      style={[styles.elemafterIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                  </View>
                </View>
                <View style={styles.dropdownItemLight}>
                  <View style={styles.minheightController40px} />
                  <View style={styles.container16}>
                    <Image
                      style={[styles.icon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                    <View style={styles.titleDescription}>
                      <Text style={[styles.title, styles.cellTypo]}>
                        Option
                      </Text>
                      <Text
                        style={[styles.description, styles.descriptionTypo]}
                      >
                        Description goes here
                      </Text>
                    </View>
                    <Image
                      style={[styles.elemafterIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                  </View>
                </View>
                <View style={styles.dropdownItemLight}>
                  <View style={styles.minheightController40px} />
                  <View style={styles.container16}>
                    <Image
                      style={[styles.icon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                    <View style={styles.titleDescription}>
                      <Text style={[styles.title, styles.cellTypo]}>
                        Option
                      </Text>
                      <Text
                        style={[styles.description, styles.descriptionTypo]}
                      >
                        Description goes here
                      </Text>
                    </View>
                    <Image
                      style={[styles.elemafterIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                  </View>
                </View>
                <View style={styles.dropdownItemLight}>
                  <View style={styles.minheightController40px} />
                  <View style={styles.container16}>
                    <Image
                      style={[styles.icon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                    <View style={styles.titleDescription}>
                      <Text style={[styles.title, styles.cellTypo]}>
                        Option
                      </Text>
                      <Text
                        style={[styles.description, styles.descriptionTypo]}
                      >
                        Description goes here
                      </Text>
                    </View>
                    <Image
                      style={[styles.elemafterIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                  </View>
                </View>
                <View style={styles.dropdownItemLight}>
                  <View style={styles.minheightController40px} />
                  <View style={styles.container16}>
                    <Image
                      style={[styles.icon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                    <View style={styles.titleDescription}>
                      <Text style={[styles.title, styles.cellTypo]}>
                        Option
                      </Text>
                      <Text
                        style={[styles.description, styles.descriptionTypo]}
                      >
                        Description goes here
                      </Text>
                    </View>
                    <Image
                      style={[styles.elemafterIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                  </View>
                </View>
                <View style={styles.dropdownItemLight}>
                  <View style={styles.minheightController40px} />
                  <View style={styles.container16}>
                    <Image
                      style={[styles.icon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                    <View style={styles.titleDescription}>
                      <Text style={[styles.title, styles.cellTypo]}>
                        Option
                      </Text>
                      <Text
                        style={[styles.description, styles.descriptionTypo]}
                      >
                        Description goes here
                      </Text>
                    </View>
                    <Image
                      style={[styles.elemafterIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                  </View>
                </View>
                <View style={styles.dropdownItemLight}>
                  <View style={styles.minheightController40px} />
                  <View style={styles.container16}>
                    <Image
                      style={[styles.icon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                    <View style={styles.titleDescription}>
                      <Text style={[styles.title, styles.cellTypo]}>
                        Option
                      </Text>
                      <Text
                        style={[styles.description, styles.descriptionTypo]}
                      >
                        Description goes here
                      </Text>
                    </View>
                    <Image
                      style={[styles.elemafterIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before1.png")}
                    />
                  </View>
                </View>
                <View style={styles.slotContentMenuRadios}>
                  <View>
                    <View style={styles.dropdownItemRadio}>
                      <View
                        style={[styles.buttonitem, styles.buttonitemFlexBox]}
                      >
                        <View
                          style={[
                            styles.container25,
                            styles.container25FlexBox,
                          ]}
                        >
                          <Image
                            style={styles.iconLayout}
                            resizeMode="cover"
                            source={require("../assets/icon-before5.png")}
                          />
                          <View style={styles.content}>
                            <Text
                              style={[styles.children15, styles.label3Typo]}
                            >
                              Khối 12
                            </Text>
                            <Text
                              style={[
                                styles.description8,
                                styles.descriptionTypo,
                              ]}
                            >
                              Description
                            </Text>
                          </View>
                          <Image
                            style={[styles.iconAfter14, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/icon-before1.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.dropdownItemRadio}>
                      <View style={styles.buttonitemFlexBox}>
                        <View style={styles.container26}>
                          <View
                            style={[styles.iconBefore15, styles.iconLayout]}
                          >
                            <View
                              style={[styles.radioicon, styles.searchBorder]}
                            />
                          </View>
                          <View style={styles.content}>
                            <Text
                              style={[styles.children15, styles.label3Typo]}
                            >
                              Khối 11
                            </Text>
                            <Text
                              style={[
                                styles.description8,
                                styles.descriptionTypo,
                              ]}
                            >
                              Description
                            </Text>
                          </View>
                          <Image
                            style={[styles.iconAfter14, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/icon-before1.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.dropdownItemRadio}>
                      <View style={styles.buttonitemFlexBox}>
                        <View style={styles.container26}>
                          <View
                            style={[styles.iconBefore15, styles.iconLayout]}
                          >
                            <View
                              style={[styles.radioicon, styles.searchBorder]}
                            />
                          </View>
                          <View style={styles.content}>
                            <Text
                              style={[styles.children15, styles.label3Typo]}
                            >
                              Khối 10
                            </Text>
                            <Text
                              style={[
                                styles.description8,
                                styles.descriptionTypo,
                              ]}
                            >
                              Description
                            </Text>
                          </View>
                          <Image
                            style={[styles.iconAfter14, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/icon-before1.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.dropdownItemRadio}>
                      <View style={styles.buttonitemFlexBox}>
                        <View style={styles.container26}>
                          <View
                            style={[styles.iconBefore15, styles.iconLayout]}
                          >
                            <View
                              style={[styles.radioicon, styles.searchBorder]}
                            />
                          </View>
                          <View style={styles.content}>
                            <Text
                              style={[styles.children15, styles.label3Typo]}
                            >
                              Khối 9
                            </Text>
                            <Text
                              style={[
                                styles.description8,
                                styles.descriptionTypo,
                              ]}
                            >
                              Description
                            </Text>
                          </View>
                          <Image
                            style={[styles.iconAfter14, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/icon-before1.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.dropdownItemRadio}>
                      <View style={styles.buttonitemFlexBox}>
                        <View style={styles.container26}>
                          <View
                            style={[styles.iconBefore15, styles.iconLayout]}
                          >
                            <View
                              style={[styles.radioicon, styles.searchBorder]}
                            />
                          </View>
                          <View style={styles.content}>
                            <Text
                              style={[styles.children15, styles.label3Typo]}
                            >
                              Khối 8
                            </Text>
                            <Text
                              style={[
                                styles.description8,
                                styles.descriptionTypo,
                              ]}
                            >
                              Description
                            </Text>
                          </View>
                          <Image
                            style={[styles.iconAfter14, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/icon-before1.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.dropdownItemRadio}>
                      <View style={styles.buttonitemFlexBox}>
                        <View style={styles.container26}>
                          <View
                            style={[styles.iconBefore15, styles.iconLayout]}
                          >
                            <View
                              style={[styles.radioicon, styles.searchBorder]}
                            />
                          </View>
                          <View style={styles.content}>
                            <Text
                              style={[styles.children15, styles.label3Typo]}
                            >
                              Khối 7
                            </Text>
                            <Text
                              style={[
                                styles.description8,
                                styles.descriptionTypo,
                              ]}
                            >
                              Description
                            </Text>
                          </View>
                          <Image
                            style={[styles.iconAfter14, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/icon-before1.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.dropdownItemRadio}>
                      <View style={styles.buttonitemFlexBox}>
                        <View style={styles.container26}>
                          <View
                            style={[styles.iconBefore15, styles.iconLayout]}
                          >
                            <View
                              style={[styles.radioicon, styles.searchBorder]}
                            />
                          </View>
                          <View style={styles.content}>
                            <Text
                              style={[styles.children15, styles.label3Typo]}
                            >
                              Khối 6
                            </Text>
                            <Text
                              style={[
                                styles.description8,
                                styles.descriptionTypo,
                              ]}
                            >
                              Description
                            </Text>
                          </View>
                          <Image
                            style={[styles.iconAfter14, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/icon-before1.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.dropdownItemRadio7}>
                      <View style={styles.buttonitemFlexBox}>
                        <View style={styles.container26}>
                          <View
                            style={[styles.iconBefore15, styles.iconLayout]}
                          >
                            <View
                              style={[styles.radioicon, styles.searchBorder]}
                            />
                          </View>
                          <View style={styles.content}>
                            <Text
                              style={[styles.children15, styles.label3Typo]}
                            >
                              Option
                            </Text>
                            <Text
                              style={[
                                styles.description8,
                                styles.descriptionTypo,
                              ]}
                            >
                              Description
                            </Text>
                          </View>
                          <Image
                            style={[styles.iconAfter14, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/icon-before1.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.button16, styles.buttonFlexBox]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before3.png")}
                  />
                  <Text style={[styles.children23, styles.childrenTypo]}>
                    Tất cả các khối
                  </Text>
                  <Image
                    style={[styles.iconAfter22, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-after5.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.niDungBiChChm, styles.dungPosition]}>
          <View style={[styles.bngBiGiao, styles.bngPosition]}>
            <View style={[styles.chaThamGia, styles.button17Bg]}>
              <View style={[styles.button17, styles.button17Bg]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.icon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before8.png")}
                  />
                  <Text style={[styles.children24, styles.childrenTypo1]}>
                    Đã chấm bởi AI
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-after7.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.tableTree}>
              <View style={[styles.codePartsHeader, styles.container1Border]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container35}>
                  <Text style={[styles.headerLabel, styles.labelTypo]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      STT
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell1, styles.codeBorder]}>
                <View style={[styles.container37, styles.containerFlexBox]}>
                  <View style={styles.box}>
                    <Text
                      style={[styles.cellLabel, styles.labelTypo]}
                    >{`Học sinh
`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell2, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Đề bài
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell3, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Bài làm
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell1, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Thời gian nộp bài
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Trạng thái AI chấm
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
            </View>
            <View style={[styles.tableTree1, styles.chaThamGiaPosition]}>
              <View style={[styles.codePartsHeader, styles.container1Border]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container35}>
                  <Text style={[styles.headerLabel, styles.labelTypo]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]}>1</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text
                      style={[styles.cellLabel7, styles.cellTypo]}
                    >{`Phan Thị Thùy Linh
9A`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]}>
                      Bàn luận về hiện tượng bạo lực học đường
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]}>
                      Bạo lực học đường là những lời nói, hành vi thô bạo, bất
                      chấp đạo lý, xúc phạm trấn áp người khác gây nên những tổn
                      thương về tinh thần và thể xác diễn ra trong phạm vi
                      trường học.
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text
                      style={[styles.cellLabel7, styles.cellTypo]}
                    >{`09/01/2024
07:1410 ngày 15 giờ 45 phút sớm`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell12, styles.container25FlexBox]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
            </View>
            <View style={[styles.button18, styles.buttonFlexBox]}>
              <View style={styles.container2}>
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before9.png")}
                />
                <Text style={[styles.children23, styles.childrenTypo]}>
                  Chấm bài
                </Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-after6.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.niDungBngGiao, styles.khungLayout]}>
          <View style={[styles.khung, styles.khungLayout]} />
          <View style={[styles.bngBiGiao1, styles.bngPosition]}>
            <View style={styles.tableTree2}>
              <View style={[styles.codePartsHeader, styles.container1Border]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container35}>
                  <Text style={[styles.headerLabel, styles.labelTypo]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      STT
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={[styles.container37, styles.containerFlexBox]}>
                  <View style={styles.box}>
                    <Text
                      style={[styles.cellLabel, styles.labelTypo]}
                    >{`Học sinh đã nộp
`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell2, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Đề bài
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell17, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Bài làm
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell18, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Nội dung chấm
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Điểm
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell1, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Thời gian nộp bài
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
            </View>
            <View style={styles.tableTree3}>
              <View style={[styles.codePartsHeader, styles.container1Border]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container35}>
                  <Text style={[styles.headerLabel, styles.labelTypo]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]}>1</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell22, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text
                      style={[styles.cellLabel7, styles.cellTypo]}
                    >{`Bài giao cho lớp
09/01/2024 07:13`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]}>
                      Bàn luận về hiện tượng bạo lực học đường
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]}>
                      Học tủ, học vẹt là những hiện tượng tiêu cực, gây ảnh
                      hưởng xấu tới sự phát triển của cộng đồng. Hình thức học
                      tập này thực chất chỉ là sự qua loa, chống đối khi gần tới
                      ngày kiểm tra. Người học không thực sự hiểu và nắm bắt
                      được kiến thức
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]}>
                      Bài viết của học sinh rất ngắn gọn và thiếu thông tin cần
                      thiết để bàn luận về hiện tượng hút thuốc lá điện tử trong
                      học đường. Bài viết cũng thiếu cấu trúc và sự logic trong
                      việc trình bày ý kiến và lập luận.
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]}>3</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text
                      style={[styles.cellLabel7, styles.cellTypo]}
                    >{`19/01/2024 23:00
4 ngày 21 giờ 26 phút sớm`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.niDungBngChm, styles.dungPosition]}>
          <View style={[styles.bngBiGiao2, styles.bngPosition]}>
            <View style={[styles.button19, styles.buttonSpaceBlock]}>
              <View style={styles.container2}>
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon4.png")}
                />
                <Text style={[styles.children23, styles.childrenTypo]}>
                  Thu hồi
                </Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-after6.png")}
                />
              </View>
            </View>
            <View style={styles.tableTree4}>
              <View style={[styles.codePartsHeader, styles.container1Border]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container35}>
                  <Text style={[styles.headerLabel, styles.labelTypo]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      STT
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell1, styles.codeBorder]}>
                <View style={[styles.container37, styles.containerFlexBox]}>
                  <View style={styles.box}>
                    <Text
                      style={[styles.cellLabel, styles.labelTypo]}
                    >{`Thông tin
`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell2, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Đề bài
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Lớp
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Đã nộp
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Bài đã chấm
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell2, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      Hạn nộp bài
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel35, styles.childrenTypo2]} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
            </View>
            <View style={styles.tableTree5}>
              <View style={[styles.codePartsHeader, styles.container1Border]}>
                <View style={styles.minheightController40px} />
                <View style={styles.container35}>
                  <Text style={[styles.headerLabel, styles.labelTypo]}>
                    Header label
                  </Text>
                </View>
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]}>9A</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text
                      style={[styles.cellLabel7, styles.cellTypo]}
                    >{`Bài giao cho lớp
09/01/2024 07:13`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]}>
                      Bàn luận về hiện tượng bạo lực học đường
                    </Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]}>9A</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]}>1</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel7, styles.cellTypo]}>0</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text
                      style={[styles.cellLabel7, styles.cellTypo]}
                    >{`19/01/2024 23:00
Còn 4 ngày 21 giờ 26 phút`}</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.codeBorder]}>
                <View style={styles.containerFlexBox}>
                  <View style={styles.box}>
                    <Text style={[styles.cellLabel35, styles.childrenTypo2]} />
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
  mtMoPosition: {
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  container1Border: {
    borderColor: Color.colorBorderInput,
    display: "none",
    borderStyle: "solid",
    flexDirection: "row",
  },
  cellTypo: {
    fontSize: FontSize.update_size,
    textAlign: "left",
  },
  navigatorLayout: {
    width: 32,
    height: 32,
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
    height: 60,
    alignItems: "center",
    flex: 1,
  },
  buttonitemFlexBox: {
    minHeight: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  buttonSpaceBlock: {
    paddingHorizontal: StyleVariable.space150,
    minHeight: 32,
    paddingVertical: 0,
    borderRadius: Border.br_10xs,
    justifyContent: "center",
    alignItems: "center",
  },
  childrenTypo1: {
    textAlign: "center",
    fontSize: FontSize.update_size,
  },
  ellipsisFlexBox: {
    paddingHorizontal: StyleVariable.space100,
    paddingVertical: 0,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  tabsPosition: {
    top: 6,
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
  label3Typo: {
    fontFamily: FontFamily.input,
    fontSize: FontSize.update_size,
  },
  buttonFlexBox: {
    backgroundColor: Color.colorBackgroundBrandBoldDefault,
    paddingHorizontal: StyleVariable.space150,
    minHeight: 32,
    paddingVertical: 0,
    borderRadius: Border.br_10xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  childrenTypo: {
    color: Color.colorTextInverse,
    marginLeft: 4,
    textAlign: "center",
    fontFamily: FontFamily.update,
    fontWeight: "500",
    fontSize: FontSize.update_size,
  },
  searchBorder: {
    borderWidth: 2,
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
    backgroundColor: Color.colorTextInverse,
  },
  searchPosition: {
    top: 50,
    position: "absolute",
  },
  descriptionTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    display: "none",
    textAlign: "left",
  },
  container25FlexBox: {
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
  },
  dungPosition: {
    width: 382,
    borderRadius: Border.br_3xs,
    top: 224,
    left: 24,
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
    position: "absolute",
  },
  bngPosition: {
    width: 342,
    left: 20,
    top: 10,
    position: "absolute",
  },
  button17Bg: {
    backgroundColor: Color.eE2B8,
    flexDirection: "row",
  },
  labelTypo: {
    lineHeight: 14,
    fontFamily: FontFamily.update,
    fontWeight: "500",
    fontSize: FontSize.update_size,
    textAlign: "left",
  },
  codeBorder: {
    borderBottomWidth: 1,
    borderColor: Color.colorBorderInput,
  },
  containerFlexBox: {
    justifyContent: "space-between",
    paddingVertical: StyleVariable.space100,
    paddingHorizontal: 0,
    flexDirection: "row",
    flex: 1,
  },
  chaThamGiaPosition: {
    left: 94,
    position: "absolute",
  },
  khungLayout: {
    height: 573,
    width: 382,
    position: "absolute",
  },
  childrenTypo2: {
    fontFamily: FontFamily.update,
    fontWeight: "500",
  },
  iconNotificationicon: {
    top: 5,
    left: 312,
    width: 40,
    height: 40,
    overflow: "hidden",
    position: "absolute",
  },
  avatarImageIcon: {
    height: "80%",
    width: "9.3%",
    top: "12%",
    right: "5.35%",
    bottom: "8%",
    left: "85.35%",
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
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    lineHeight: 20,
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
    width: 430,
    top: 0,
  },
  trangChIcon: {
    height: 32,
  },
  trangCh: {
    color: Color.colorTextSubtle,
    lineHeight: 18,
    fontSize: FontSize.menu_size,
    fontFamily: FontFamily.menu,
    fontWeight: "600",
  },
  trangCh2: {
    color: Color.colorBackgroundBrandBoldDefault,
    lineHeight: 18,
    fontSize: FontSize.menu_size,
    fontFamily: FontFamily.menu,
    fontWeight: "600",
  },
  newIcon3: {
    backgroundColor: Color.active,
  },
  menu: {
    top: 51,
    height: 60,
    flexDirection: "row",
    backgroundColor: Color.colorTextInverse,
    width: 430,
    left: 0,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  button: {
    paddingHorizontal: StyleVariable.space050,
    paddingVertical: 0,
    minHeight: 32,
    borderRadius: Border.br_10xs,
    justifyContent: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  navigator: {
    height: 32,
    overflow: "hidden",
  },
  iconBefore: {
    display: "none",
    overflow: "hidden",
  },
  children: {
    marginLeft: 4,
    fontFamily: FontFamily.update,
    fontWeight: "500",
    color: Color.colorBackgroundBrandBoldDefault,
    lineHeight: 20,
  },
  iconAfter: {
    marginLeft: 4,
    display: "none",
    overflow: "hidden",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button1: {
    backgroundColor: Color.active,
    flexDirection: "row",
  },
  page: {
    flexDirection: "row",
  },
  ellipsesLabel: {
    color: Color.colorTextDefault,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    lineHeight: 20,
  },
  ellipsis: {
    display: "none",
  },
  children1: {
    color: Color.colorTextDefault,
    marginLeft: 4,
    fontFamily: FontFamily.update,
    fontWeight: "500",
    lineHeight: 20,
  },
  button2: {
    flexDirection: "row",
  },
  children2: {
    lineHeight: 17,
    color: Color.colorTextDefault,
    marginLeft: 4,
    fontFamily: FontFamily.update,
    fontWeight: "500",
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
  border: {
    right: 0,
    borderRadius: Border.br_12xs,
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
  label2: {
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
  label3: {
    lineHeight: 25,
    textAlign: "center",
    color: Color.colorTextSubtle,
  },
  tab3: {
    display: "none",
  },
  children13: {
    left: -8,
    height: 33,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  tabs: {
    width: 192,
    height: 34,
    left: 24,
  },
  children14: {
    lineHeight: 20,
  },
  button15: {
    top: 8,
    left: 280,
    display: "none",
    position: "absolute",
  },
  headingH600: {
    fontSize: FontSize.title_size,
    lineHeight: 24,
    color: Color.colorTextDefault,
  },
  tiu: {
    top: -1,
    height: 49,
    paddingHorizontal: StyleVariable.space300,
    paddingTop: StyleVariable.space300,
    paddingBottom: StyleVariable.space200,
    justifyContent: "center",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    width: 430,
    left: 0,
    position: "absolute",
  },
  search1: {
    lineHeight: 32,
    zIndex: 0,
    color: Color.colorTextSubtlest,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    flex: 1,
  },
  iconSearchicon: {
    left: 10,
    width: 20,
    height: 20,
    zIndex: 1,
    overflow: "hidden",
  },
  search: {
    right: 179,
    borderRadius: Border.br_8xs,
    width: 227,
    paddingLeft: StyleVariable.space500,
    paddingRight: StyleVariable.space100,
    top: 50,
    position: "absolute",
    height: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  minheightController40px: {
    alignItems: "center",
    height: 40,
  },
  title: {
    lineHeight: 17,
    color: Color.colorTextDefault,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
  },
  description: {
    lineHeight: 15,
    marginTop: 2,
    color: Color.colorTextSubtle,
  },
  titleDescription: {
    marginLeft: 12,
  },
  elemafterIcon: {
    marginLeft: 12,
    overflow: "hidden",
  },
  container16: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  dropdownItemLight: {
    backgroundColor: Color.lightColorbackgroundneutralsubtle,
    alignSelf: "stretch",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  children15: {
    color: Color.colorTextDefault,
    lineHeight: 18,
    textAlign: "left",
  },
  description8: {
    lineHeight: 12,
    marginTop: 4,
    color: Color.colorTextSubtlest,
  },
  content: {
    marginLeft: 12,
    justifyContent: "center",
  },
  iconAfter14: {
    marginLeft: 12,
    display: "none",
    overflow: "hidden",
  },
  container25: {
    paddingHorizontal: Padding.p_xs,
  },
  buttonitem: {
    backgroundColor: Color.active,
  },
  dropdownItemRadio: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  radioicon: {
    borderRadius: Border.br_xl,
    width: 14,
    height: 14,
  },
  iconBefore15: {
    padding: Padding.p_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  container26: {
    paddingVertical: StyleVariable.space0501,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  dropdownItemRadio7: {
    alignSelf: "stretch",
    display: "none",
    flexDirection: "row",
  },
  slotContentMenuRadios: {
    width: 204,
  },
  dropdownMenu1: {
    top: 40,
    shadowColor: "rgba(9, 30, 66, 0.31)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    width: 360,
    paddingVertical: StyleVariable.space075,
    zIndex: 0,
    borderRadius: Border.br_10xs,
    paddingHorizontal: 0,
    display: "none",
  },
  children23: {
    lineHeight: 17,
  },
  iconAfter22: {
    marginLeft: 4,
    overflow: "hidden",
  },
  button16: {
    marginTop: 8,
    zIndex: 1,
  },
  dropdownMenu: {
    left: 260,
    width: 146,
    borderRadius: Border.br_10xs,
  },
  ccChcNngKhc: {
    top: 112,
    height: 92,
    width: 430,
  },
  trangChComponent: {
    backgroundColor: Color.background,
    overflow: "hidden",
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  children24: {
    color: Color.colorTextSuccess,
    lineHeight: 17,
    marginLeft: 4,
    fontFamily: FontFamily.update,
    fontWeight: "500",
  },
  button17: {
    paddingHorizontal: StyleVariable.space150,
    minHeight: 32,
    paddingVertical: 0,
    borderRadius: Border.br_10xs,
    justifyContent: "center",
    alignItems: "center",
  },
  chaThamGia: {
    top: 353,
    left: 94,
    position: "absolute",
    height: 32,
  },
  headerLabel: {
    color: Color.colorTextSubtle,
    flex: 1,
  },
  container35: {
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
    display: "none",
    alignItems: "center",
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
  codePartsCell: {
    alignSelf: "stretch",
    justifyContent: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  container37: {
    alignItems: "center",
  },
  codePartsCell1: {
    paddingVertical: Padding.p_7xs,
    alignSelf: "stretch",
    paddingHorizontal: 0,
    justifyContent: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  codePartsCell2: {
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    paddingHorizontal: 0,
    justifyContent: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  codePartsCell3: {
    paddingVertical: Padding.p_21xl,
    alignSelf: "stretch",
    paddingHorizontal: 0,
    justifyContent: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  tableTree: {
    width: 94,
    left: 0,
    top: 0,
    position: "absolute",
  },
  cellLabel7: {
    fontWeight: "300",
    fontFamily: FontFamily.tableRight,
    alignSelf: "stretch",
    color: Color.colorTextDefault,
    lineHeight: 20,
  },
  codePartsCell12: {
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderColor: Color.colorBorderInput,
    paddingHorizontal: 0,
    justifyContent: "center",
    borderStyle: "solid",
  },
  tableTree1: {
    width: 248,
    top: 0,
  },
  button18: {
    top: 398,
    left: 230,
    position: "absolute",
  },
  bngBiGiao: {
    height: 435,
  },
  niDungBiChChm: {
    height: 460,
    display: "none",
  },
  khung: {
    borderRadius: Border.br_3xs,
    height: 573,
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  codePartsCell17: {
    paddingVertical: Padding.p_31xl,
    alignSelf: "stretch",
    paddingHorizontal: 0,
    justifyContent: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  codePartsCell18: {
    paddingVertical: Padding.p_27xl,
    alignSelf: "stretch",
    paddingHorizontal: 0,
    justifyContent: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  tableTree2: {
    width: 91,
    left: 0,
    top: 0,
    position: "absolute",
  },
  codePartsCell22: {
    paddingVertical: Padding.p_12xs,
    alignSelf: "stretch",
    paddingHorizontal: 0,
    justifyContent: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  tableTree3: {
    left: 91,
    width: 251,
    top: 0,
    position: "absolute",
  },
  bngBiGiao1: {
    height: 548,
  },
  niDungBngGiao: {
    height: 573,
    top: 224,
    display: "none",
    left: 24,
  },
  button19: {
    top: 351,
    left: 243,
    backgroundColor: Color.colorBackgroundDangerBoldDefault,
    flexDirection: "row",
    position: "absolute",
  },
  cellLabel35: {
    alignSelf: "stretch",
    lineHeight: 17,
    color: Color.colorTextDefault,
    fontSize: FontSize.update_size,
    textAlign: "left",
  },
  tableTree4: {
    width: 100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tableTree5: {
    left: 100,
    width: 242,
    top: 0,
    position: "absolute",
  },
  bngBiGiao2: {
    height: 388,
  },
  niDungBngChm: {
    height: 413,
  },
  assignmentWait: {
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  assignmentScored: {
    width: "100%",
    height: 932,
    flex: 1,
  },
});

export default AssignmentScored;
