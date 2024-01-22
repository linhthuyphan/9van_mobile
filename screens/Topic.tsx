import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
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

const Topic = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.topic}>
      <View style={[styles.trangChComponent, styles.tiuPosition]}>
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
              <Text style={[styles.sitetitle, styles.cellTypo]}>siteTitle</Text>
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
              source={require("../assets/trang-ch-icon.png")}
            />
            <Text style={[styles.trangCh, styles.biTypo]}>Trang chủ</Text>
          </Pressable>
          <Pressable
            style={styles.newIconFlexBox}
            onPress={() => navigation.navigate("ClassActive")}
          >
            <Image
              style={[styles.trangChIcon, styles.navigatorLayout]}
              resizeMode="cover"
              source={require("../assets/lp-hc-icon1.png")}
            />
            <Text style={[styles.trangCh, styles.biTypo]}>Lớp học</Text>
          </Pressable>
          <View style={[styles.newIcon2, styles.newIconFlexBox]}>
            <Image
              style={[styles.trangChIcon, styles.navigatorLayout]}
              resizeMode="cover"
              source={require("../assets/-bi-icon.png")}
            />
            <Text style={[styles.bi, styles.biTypo]}>Đề bài</Text>
          </View>
          <Pressable
            style={styles.newIconFlexBox}
            onPress={() => navigation.navigate("AssignmentWait")}
          >
            <Image
              style={[styles.trangChIcon, styles.navigatorLayout]}
              resizeMode="cover"
              source={require("../assets/bi-tp-icon.png")}
            />
            <Text style={[styles.trangCh, styles.biTypo]}>Bài tập</Text>
          </Pressable>
        </View>
        <View style={[styles.thanhIuHng, styles.thanhPosition]}>
          <View style={[styles.navigator, styles.navigatorLayout]}>
            <View style={[styles.button, styles.buttonitemFlexBox]}>
              <Image
                style={[styles.icon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
          <View style={styles.page}>
            <View style={[styles.button1, styles.buttonFlexBox1]}>
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
            <View style={styles.buttonFlexBox1}>
              <View style={styles.container2}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo1]}>2</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={styles.buttonFlexBox1}>
              <View style={styles.container2}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo1]}>3</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={styles.buttonFlexBox1}>
              <View style={styles.container2}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo1]}>4</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={styles.buttonFlexBox1}>
              <View style={styles.container2}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo1]}>5</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={styles.buttonFlexBox1}>
              <View style={styles.container2}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo1]}>6</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={styles.buttonFlexBox1}>
              <View style={styles.container2}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo1]}>7</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={styles.buttonFlexBox1}>
              <View style={styles.container2}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo1]}>8</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={styles.buttonFlexBox1}>
              <View style={styles.container2}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo1]}>9</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={styles.buttonFlexBox1}>
              <View style={styles.container2}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo1]}>10</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={styles.buttonFlexBox1}>
              <View style={styles.container2}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo1]}>11</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={styles.buttonFlexBox1}>
              <View style={styles.container2}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo1]}>12</Text>
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
            <View style={styles.buttonFlexBox1}>
              <View style={styles.container2}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo1]}>20</Text>
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
                style={[styles.icon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon--chevronrightlargeicon2.png")}
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
                  Kho đề bài chung
                </Text>
                <View style={[styles.line, styles.linePosition]} />
              </View>
              <View style={styles.tabSpaceBlock}>
                <Text style={[styles.label1, styles.labelLayout]}>
                  Kho đề bài của tôi
                </Text>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Text style={[styles.label2, styles.labelLayout]}>Tab</Text>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Text style={[styles.label3, styles.label3Typo]}>Tab</Text>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Text style={[styles.label3, styles.label3Typo]}>Tab</Text>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Text style={[styles.label3, styles.label3Typo]}>Tab</Text>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Text style={[styles.label3, styles.label3Typo]}>Tab</Text>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Text style={[styles.label3, styles.label3Typo]}>Tab</Text>
              </View>
            </View>
          </View>
          <View style={[styles.button15, styles.buttonFlexBox]}>
            <View style={styles.container2}>
              <Image
                style={[styles.icon1, styles.iconLayout]}
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
          <View style={[styles.tiu, styles.tiuPosition]}>
            <Text style={[styles.headingH600, styles.biTypo]}>
              Tổng quan bài tập các lớp đang hoạt động
            </Text>
          </View>
          <View style={[styles.search, styles.searchBorder]}>
            <Text style={[styles.search1, styles.label3Typo]}>Tìm kiếm</Text>
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
                    style={[styles.icon1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.cellTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
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
                    style={[styles.icon1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.cellTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
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
                    style={[styles.icon1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.cellTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
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
                    style={[styles.icon1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.cellTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
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
                    style={[styles.icon1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.cellTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
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
                    style={[styles.icon1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.cellTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
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
                    style={[styles.icon1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.cellTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
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
                    style={[styles.icon1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.cellTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
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
                    <View style={[styles.buttonitem, styles.buttonitemFlexBox]}>
                      <View
                        style={[styles.container25, styles.containerFlexBox]}
                      >
                        <Image
                          style={styles.iconLayout}
                          resizeMode="cover"
                          source={require("../assets/icon-before5.png")}
                        />
                        <View style={styles.content}>
                          <Text style={[styles.children15, styles.label3Typo]}>
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
                      <View
                        style={[styles.container26, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore15, styles.iconLayout]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text style={[styles.children15, styles.label3Typo]}>
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
                      <View
                        style={[styles.container26, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore15, styles.iconLayout]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text style={[styles.children15, styles.label3Typo]}>
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
                      <View
                        style={[styles.container26, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore15, styles.iconLayout]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text style={[styles.children15, styles.label3Typo]}>
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
                      <View
                        style={[styles.container26, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore15, styles.iconLayout]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text style={[styles.children15, styles.label3Typo]}>
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
                      <View
                        style={[styles.container26, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore15, styles.iconLayout]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text style={[styles.children15, styles.label3Typo]}>
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
                      <View
                        style={[styles.container26, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore15, styles.iconLayout]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text style={[styles.children15, styles.label3Typo]}>
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
                      <View
                        style={[styles.container26, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore15, styles.iconLayout]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text style={[styles.children15, styles.label3Typo]}>
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
      <View style={[styles.thanhIuHng1, styles.thanhPosition]}>
        <View style={[styles.navigator, styles.navigatorLayout]}>
          <View style={[styles.button, styles.buttonitemFlexBox]}>
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon.png")}
            />
          </View>
        </View>
        <View style={styles.page}>
          <View style={[styles.button1, styles.buttonFlexBox1]}>
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
          <Text style={[styles.ellipsesLabel, styles.childrenTypo1]}>...</Text>
        </View>
        <View style={styles.page}>
          <View style={styles.buttonFlexBox1}>
            <View style={styles.container2}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children25, styles.childrenTypo1]}>2</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox1}>
            <View style={styles.container2}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo1]}>3</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox1}>
            <View style={styles.container2}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo1]}>4</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox1}>
            <View style={styles.container2}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo1]}>5</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox1}>
            <View style={styles.container2}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo1]}>6</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox1}>
            <View style={styles.container2}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo1]}>7</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox1}>
            <View style={styles.container2}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo1]}>8</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox1}>
            <View style={styles.container2}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo1]}>9</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox1}>
            <View style={styles.container2}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo1]}>10</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox1}>
            <View style={styles.container2}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo1]}>11</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox1}>
            <View style={styles.container2}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo1]}>12</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.ellipsisFlexBox}>
          <Text style={[styles.ellipsesLabel, styles.childrenTypo1]}>...</Text>
        </View>
        <View style={styles.page2}>
          <View style={styles.buttonFlexBox1}>
            <View style={styles.container2}>
              <Image
                style={[styles.iconBefore, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo1]}>20</Text>
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
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon--chevronrightlargeicon2.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.niDungBng, styles.dungLayout]}>
        <View style={styles.niDungBng1}>
          <View style={styles.cngC2}>
            <View style={styles.buttonGroup}>
              <View style={styles.buttonFlexBox}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before3.png")}
                  />
                  <Text style={[styles.children23, styles.childrenTypo]}>
                    Sửa
                  </Text>
                  <Image
                    style={[styles.iconAfter22, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-after8.png")}
                  />
                </View>
              </View>
              <View style={[styles.button33, styles.buttonFlexBox1]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before3.png")}
                  />
                  <Text style={[styles.children38, styles.childrenTypo1]}>
                    Giao bài
                  </Text>
                  <Image
                    style={[styles.iconAfter22, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-after9.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tableTree}>
            <View style={[styles.codePartsHeader, styles.container1Border]}>
              <View style={styles.minheightController40px} />
              <View style={[styles.container49, styles.containerSpaceBlock]}>
                <Text style={[styles.headerLabel, styles.labelTypo]}>
                  Header label
                </Text>
              </View>
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>Khối</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell1, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>
                    Đề bài
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell2, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>
                    Câu hỏi
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell3, styles.box10SpaceBlock]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>{`Bộ sách 
- Bài`}</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>{`Đã giao 
cho`}</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.childrenTypo2]} />
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
          </View>
          <View style={styles.tableTree1}>
            <View style={[styles.codePartsHeader, styles.container1Border]}>
              <View style={styles.minheightController40px} />
              <View style={[styles.container49, styles.containerSpaceBlock]}>
                <Text style={[styles.headerLabel, styles.labelTypo]}>
                  Header label
                </Text>
              </View>
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel6, styles.cellTypo]}>7</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel6, styles.cellTypo]}>
                    Bàn luận về hiện tượng học vẹt, học tủ trong học sinh
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text
                    style={[styles.cellLabel6, styles.cellTypo]}
                  >{`Phần mở bài, học sinh đã giới thiệu được vấn đề cần bàn luận và đưa ra ý kiến cá nhân chưa?
Phần thân bài, học sinh đã nêu được định nghĩa học vẹt, học tủ chưa?
Phần thân bài, học sinh đã nêu được biểu hiện của học vẹt, học tủ chưa?
Phần thân bài, học sinh đã nêu được nguyên nhân của hiện tượng học vẹt, học tủ chưa?
Phần thân bài, học sinh đã nêu được hậu quả của hiện tượng học vẹt, học tủ chưa?`}</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text
                    style={[styles.cellLabel6, styles.cellTypo]}
                  >{`KNTT Bài 8: Khác biệt và gần gũi
CD       Bài 8: Văn bản nghị luận`}</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={[styles.box10, styles.box10SpaceBlock]}>
                  <Text style={[styles.cellLabel6, styles.cellTypo]}>9A</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.childrenTypo2]} />
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.niDungBng2, styles.dungLayout]}>
        <View style={styles.niDungBng1}>
          <View style={styles.cngC2}>
            <View style={styles.buttonGroup}>
              <View style={styles.buttonFlexBox}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before3.png")}
                  />
                  <Text style={[styles.children23, styles.childrenTypo]}>
                    Sửa
                  </Text>
                  <Image
                    style={[styles.iconAfter22, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-after8.png")}
                  />
                </View>
              </View>
              <View style={[styles.button33, styles.buttonFlexBox1]}>
                <View style={styles.container2}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before3.png")}
                  />
                  <Text style={[styles.children38, styles.childrenTypo1]}>
                    Giao bài
                  </Text>
                  <Image
                    style={[styles.iconAfter22, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-after9.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tableTree}>
            <View style={[styles.codePartsHeader, styles.container1Border]}>
              <View style={styles.minheightController40px} />
              <View style={[styles.container49, styles.containerSpaceBlock]}>
                <Text style={[styles.headerLabel, styles.labelTypo]}>
                  Header label
                </Text>
              </View>
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>Khối</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell1, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>
                    Đề bài
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell2, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>
                    Câu hỏi
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell3, styles.box10SpaceBlock]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>{`Bộ sách 
- Bài`}</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel, styles.labelTypo]}>{`Đã giao 
cho`}</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.childrenTypo2]} />
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
          </View>
          <View style={styles.tableTree1}>
            <View style={[styles.codePartsHeader, styles.container1Border]}>
              <View style={styles.minheightController40px} />
              <View style={[styles.container49, styles.containerSpaceBlock]}>
                <Text style={[styles.headerLabel, styles.labelTypo]}>
                  Header label
                </Text>
              </View>
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel6, styles.cellTypo]}>7</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel6, styles.cellTypo]}>
                    Bàn luận về hiện tượng học vẹt, học tủ trong học sinh
                  </Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text
                    style={[styles.cellLabel6, styles.cellTypo]}
                  >{`Phần mở bài, học sinh đã giới thiệu được vấn đề cần bàn luận và đưa ra ý kiến cá nhân chưa?
Phần thân bài, học sinh đã nêu được định nghĩa học vẹt, học tủ chưa?
Phần thân bài, học sinh đã nêu được biểu hiện của học vẹt, học tủ chưa?
Phần thân bài, học sinh đã nêu được nguyên nhân của hiện tượng học vẹt, học tủ chưa?
Phần thân bài, học sinh đã nêu được hậu quả của hiện tượng học vẹt, học tủ chưa?`}</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text
                    style={[styles.cellLabel6, styles.cellTypo]}
                  >{`KNTT Bài 8: Khác biệt và gần gũi
CD       Bài 8: Văn bản nghị luận`}</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={[styles.box10, styles.box10SpaceBlock]}>
                  <Text style={[styles.cellLabel6, styles.cellTypo]}>9A</Text>
                </View>
              </View>
              <View style={styles.minheightController40px} />
            </View>
            <View style={[styles.codePartsCell, styles.codeBorder]}>
              <View style={[styles.container50, styles.containerSpaceBlock]}>
                <View style={styles.box}>
                  <Text style={[styles.cellLabel5, styles.childrenTypo2]} />
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
  tiuPosition: {
    top: -1,
    width: 430,
    left: 0,
    position: "absolute",
  },
  mtMoPosition: {
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
    left: 0,
    position: "absolute",
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
  cellTypo: {
    fontSize: FontSize.update_size,
    textAlign: "left",
  },
  navigatorLayout: {
    width: 32,
    height: 32,
  },
  biTypo: {
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
  thanhPosition: {
    left: 249,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
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
  buttonFlexBox1: {
    paddingHorizontal: StyleVariable.space150,
    minHeight: 32,
    paddingVertical: 0,
    borderRadius: Border.br_10xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  containerFlexBox: {
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  dungLayout: {
    height: 519,
    width: 382,
    left: 24,
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
    position: "absolute",
  },
  containerSpaceBlock: {
    paddingVertical: StyleVariable.space100,
    paddingHorizontal: 0,
    flexDirection: "row",
    flex: 1,
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
  box10SpaceBlock: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: 0,
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
  icon: {
    width: "100%",
  },
  avatarImage: {
    left: "85.35%",
    top: "12%",
    right: "5.35%",
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
    top: 0,
    width: 430,
  },
  trangChIcon: {
    height: 32,
  },
  trangCh: {
    color: Color.colorTextSubtle,
    lineHeight: 18,
    fontSize: FontSize.menu_size,
    fontFamily: FontFamily.menu,
  },
  bi: {
    color: Color.colorBackgroundBrandBoldDefault,
    lineHeight: 18,
    fontSize: FontSize.menu_size,
    fontFamily: FontFamily.menu,
  },
  newIcon2: {
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
  icon1: {
    overflow: "hidden",
  },
  button: {
    paddingHorizontal: StyleVariable.space050,
    paddingVertical: 0,
    minHeight: 32,
    borderRadius: Border.br_10xs,
    justifyContent: "center",
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
    justifyContent: "center",
    display: "none",
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
    lineHeight: 25,
    textAlign: "center",
    color: Color.colorTextSubtle,
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
  },
  search1: {
    zIndex: 0,
    color: Color.colorTextSubtlest,
    lineHeight: 20,
    textAlign: "left",
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
    paddingVertical: Padding.p_9xs,
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
    height: 1497,
    overflow: "hidden",
    width: 430,
    left: 0,
    backgroundColor: Color.background,
  },
  children25: {
    color: Color.colorTextDefault,
    marginLeft: 4,
    fontFamily: FontFamily.update,
    fontWeight: "500",
    lineHeight: 20,
  },
  thanhIuHng1: {
    top: 1447,
  },
  children38: {
    color: Color.colorTextSuccess,
    lineHeight: 17,
    marginLeft: 4,
    fontFamily: FontFamily.update,
    fontWeight: "500",
  },
  button33: {
    backgroundColor: Color.eE2B8,
    marginLeft: 4,
  },
  buttonGroup: {
    width: 159,
    flexDirection: "row",
  },
  cngC2: {
    top: 457,
    left: 157,
    width: 185,
    flexDirection: "row",
    position: "absolute",
  },
  headerLabel: {
    color: Color.colorTextSubtle,
    flex: 1,
  },
  container49: {
    justifyContent: "center",
    alignItems: "center",
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
  container50: {
    justifyContent: "space-between",
  },
  codePartsCell: {
    alignSelf: "stretch",
    justifyContent: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  codePartsCell1: {
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    paddingHorizontal: 0,
    justifyContent: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  codePartsCell2: {
    paddingVertical: Padding.p_81xl,
    alignSelf: "stretch",
    paddingHorizontal: 0,
    justifyContent: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  codePartsCell3: {
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderColor: Color.colorBorderInput,
    justifyContent: "center",
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  cellLabel5: {
    alignSelf: "stretch",
    lineHeight: 17,
    color: Color.colorTextDefault,
    fontSize: FontSize.update_size,
    textAlign: "left",
  },
  tableTree: {
    width: 69,
    top: 0,
    left: 0,
    position: "absolute",
  },
  cellLabel6: {
    fontWeight: "300",
    fontFamily: FontFamily.tableRight,
    alignSelf: "stretch",
    color: Color.colorTextDefault,
    lineHeight: 20,
  },
  box10: {
    flex: 1,
  },
  tableTree1: {
    left: 69,
    width: 273,
    top: 0,
    position: "absolute",
  },
  niDungBng1: {
    top: 10,
    left: 20,
    width: 342,
    height: 494,
    position: "absolute",
  },
  niDungBng: {
    top: 762,
  },
  niDungBng2: {
    top: 223,
  },
  topic: {
    height: 932,
    width: "100%",
    flex: 1,
    backgroundColor: Color.background,
  },
});

export default Topic;
