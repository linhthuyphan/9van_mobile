import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  StyleVariable,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const SaveSuccess = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.saveSuccess}>
      <View style={[styles.profile, styles.tiuPosition]}>
        <View style={[styles.ccChcNngKhc, styles.tiuPosition]}>
          <View style={[styles.tabs, styles.tabsPosition]}>
            <View style={[styles.border, styles.lineLayout1]} />
            <View style={styles.children}>
              <View style={styles.tabSpaceBlock}>
                <Text style={[styles.label, styles.labelTypo1]}>Tab</Text>
                <View style={[styles.line, styles.lineLayout]} />
              </View>
              <View style={styles.tabSpaceBlock}>
                <Text style={[styles.label1, styles.labelTypo2]}>Tab</Text>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Text style={[styles.label2, styles.labelTypo]}>Tab</Text>
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
          <View style={[styles.button, styles.buttonFlexBox]}>
            <View style={styles.container}>
              <Image
                style={[styles.iconBefore, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/icon-before2.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo]}>
                Tạo lớp học
              </Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/icon-after.png")}
              />
            </View>
          </View>
          <View style={[styles.tiu, styles.tiuPosition]}>
            <Text style={[styles.headingH600, styles.gioVinTypo]}>
              Hồ sơ cá nhân
            </Text>
          </View>
          <View style={[styles.dropdownMenu, styles.buttonPosition]}>
            <View style={[styles.dropdownMenu1, styles.flagShadowBox]}>
              <View style={styles.dropdownItemLight}>
                <View style={styles.minheightController40px} />
                <View style={styles.container1}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.labelTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
                      Description goes here
                    </Text>
                  </View>
                  <Image
                    style={[styles.elemafterIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
              <View style={styles.dropdownItemLight}>
                <View style={styles.minheightController40px} />
                <View style={styles.container1}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.labelTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
                      Description goes here
                    </Text>
                  </View>
                  <Image
                    style={[styles.elemafterIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
              <View style={styles.dropdownItemLight}>
                <View style={styles.minheightController40px} />
                <View style={styles.container1}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.labelTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
                      Description goes here
                    </Text>
                  </View>
                  <Image
                    style={[styles.elemafterIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
              <View style={styles.dropdownItemLight}>
                <View style={styles.minheightController40px} />
                <View style={styles.container1}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.labelTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
                      Description goes here
                    </Text>
                  </View>
                  <Image
                    style={[styles.elemafterIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
              <View style={styles.dropdownItemLight}>
                <View style={styles.minheightController40px} />
                <View style={styles.container1}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.labelTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
                      Description goes here
                    </Text>
                  </View>
                  <Image
                    style={[styles.elemafterIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
              <View style={styles.dropdownItemLight}>
                <View style={styles.minheightController40px} />
                <View style={styles.container1}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.labelTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
                      Description goes here
                    </Text>
                  </View>
                  <Image
                    style={[styles.elemafterIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
              <View style={styles.dropdownItemLight}>
                <View style={styles.minheightController40px} />
                <View style={styles.container1}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.labelTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
                      Description goes here
                    </Text>
                  </View>
                  <Image
                    style={[styles.elemafterIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
              <View style={styles.dropdownItemLight}>
                <View style={styles.minheightController40px} />
                <View style={styles.container1}>
                  <Image
                    style={[styles.iconBefore, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <View style={styles.titleDescription}>
                    <Text style={[styles.title, styles.labelTypo]}>Option</Text>
                    <Text style={[styles.description, styles.descriptionTypo]}>
                      Description goes here
                    </Text>
                  </View>
                  <Image
                    style={[styles.elemafterIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
              <View style={styles.slotContentMenuRadios}>
                <View>
                  <View style={styles.dropdownItemRadio}>
                    <View style={styles.button3FlexBox}>
                      <View
                        style={[styles.container10, styles.containerFlexBox]}
                      >
                        <Image
                          style={[styles.iconBefore1, styles.iconLayout2]}
                          resizeMode="cover"
                          source={require("../assets/icon-before5.png")}
                        />
                        <View style={styles.content}>
                          <Text
                            style={[styles.children2, styles.trangChLayout]}
                          >
                            Khối 12
                          </Text>
                          <Text
                            style={[styles.description8, styles.sitetitleClr]}
                          >
                            Description
                          </Text>
                        </View>
                        <Image
                          style={[styles.iconAfter1, styles.iconLayout2]}
                          resizeMode="cover"
                          source={require("../assets/icon-before1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.dropdownItemRadio}>
                    <View style={styles.buttonFlexBox}>
                      <View
                        style={[styles.container11, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore2, styles.iconLayout2]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text
                            style={[styles.children2, styles.trangChLayout]}
                          >
                            Khối 11
                          </Text>
                          <Text
                            style={[styles.description8, styles.sitetitleClr]}
                          >
                            Description
                          </Text>
                        </View>
                        <Image
                          style={[styles.iconAfter1, styles.iconLayout2]}
                          resizeMode="cover"
                          source={require("../assets/icon-before1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.dropdownItemRadio}>
                    <View style={styles.buttonFlexBox}>
                      <View
                        style={[styles.container11, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore2, styles.iconLayout2]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text
                            style={[styles.children2, styles.trangChLayout]}
                          >
                            Khối 10
                          </Text>
                          <Text
                            style={[styles.description8, styles.sitetitleClr]}
                          >
                            Description
                          </Text>
                        </View>
                        <Image
                          style={[styles.iconAfter1, styles.iconLayout2]}
                          resizeMode="cover"
                          source={require("../assets/icon-before1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.dropdownItemRadio}>
                    <View style={styles.buttonFlexBox}>
                      <View
                        style={[styles.container11, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore2, styles.iconLayout2]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text
                            style={[styles.children2, styles.trangChLayout]}
                          >
                            Khối 9
                          </Text>
                          <Text
                            style={[styles.description8, styles.sitetitleClr]}
                          >
                            Description
                          </Text>
                        </View>
                        <Image
                          style={[styles.iconAfter1, styles.iconLayout2]}
                          resizeMode="cover"
                          source={require("../assets/icon-before1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.dropdownItemRadio}>
                    <View style={styles.buttonFlexBox}>
                      <View
                        style={[styles.container11, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore2, styles.iconLayout2]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text
                            style={[styles.children2, styles.trangChLayout]}
                          >
                            Khối 8
                          </Text>
                          <Text
                            style={[styles.description8, styles.sitetitleClr]}
                          >
                            Description
                          </Text>
                        </View>
                        <Image
                          style={[styles.iconAfter1, styles.iconLayout2]}
                          resizeMode="cover"
                          source={require("../assets/icon-before1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.dropdownItemRadio}>
                    <View style={styles.buttonFlexBox}>
                      <View
                        style={[styles.container11, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore2, styles.iconLayout2]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text
                            style={[styles.children2, styles.trangChLayout]}
                          >
                            Khối 7
                          </Text>
                          <Text
                            style={[styles.description8, styles.sitetitleClr]}
                          >
                            Description
                          </Text>
                        </View>
                        <Image
                          style={[styles.iconAfter1, styles.iconLayout2]}
                          resizeMode="cover"
                          source={require("../assets/icon-before1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.dropdownItemRadio}>
                    <View style={styles.buttonFlexBox}>
                      <View
                        style={[styles.container11, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore2, styles.iconLayout2]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text
                            style={[styles.children2, styles.trangChLayout]}
                          >
                            Khối 6
                          </Text>
                          <Text
                            style={[styles.description8, styles.sitetitleClr]}
                          >
                            Description
                          </Text>
                        </View>
                        <Image
                          style={[styles.iconAfter1, styles.iconLayout2]}
                          resizeMode="cover"
                          source={require("../assets/icon-before1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.dropdownItemRadio7}>
                    <View style={styles.buttonFlexBox}>
                      <View
                        style={[styles.container11, styles.containerFlexBox]}
                      >
                        <View style={[styles.iconBefore2, styles.iconLayout2]}>
                          <View
                            style={[styles.radioicon, styles.searchBorder]}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text
                            style={[styles.children2, styles.trangChLayout]}
                          >
                            Option
                          </Text>
                          <Text
                            style={[styles.description8, styles.sitetitleClr]}
                          >
                            Description
                          </Text>
                        </View>
                        <Image
                          style={[styles.iconAfter1, styles.iconLayout2]}
                          resizeMode="cover"
                          source={require("../assets/icon-before1.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before3.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo]}>
                  Tất cả các khối
                </Text>
                <Image
                  style={[styles.iconAfter9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-after5.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.search, styles.searchSpaceBlock]}>
            <Text style={styles.search1}>Search</Text>
            <Image
              style={styles.iconSearchicon}
              resizeMode="cover"
              source={require("../assets/icon--searchicon.png")}
            />
          </View>
        </View>
        <View style={styles.thanhIuHng}>
          <View style={[styles.navigator, styles.navigatorLayout]}>
            <View style={[styles.button2, styles.buttonFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
          <View style={styles.page}>
            <View style={[styles.button3, styles.button3FlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before.png")}
                />
                <Text style={[styles.children11, styles.labelTypo1]}>1</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.ellipsis, styles.ellipsisFlexBox]}>
            <Text style={[styles.ellipsesLabel, styles.labelTypo]}>...</Text>
          </View>
          <View style={styles.page}>
            <View style={[styles.button4, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children12, styles.labelTypo2]}>2</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={[styles.button4, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children13, styles.childrenTypo]}>3</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={[styles.button4, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children13, styles.childrenTypo]}>4</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={[styles.button4, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children13, styles.childrenTypo]}>5</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={[styles.button4, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children13, styles.childrenTypo]}>6</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={[styles.button4, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children13, styles.childrenTypo]}>7</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={[styles.button4, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children13, styles.childrenTypo]}>8</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={[styles.button4, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children13, styles.childrenTypo]}>9</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={[styles.button4, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children13, styles.childrenTypo]}>10</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={[styles.button4, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children13, styles.childrenTypo]}>11</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={[styles.button4, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children13, styles.childrenTypo]}>12</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.ellipsis1, styles.ellipsisFlexBox]}>
            <Text style={[styles.ellipsesLabel, styles.labelTypo]}>...</Text>
          </View>
          <View style={styles.page2}>
            <View style={[styles.button4, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children13, styles.childrenTypo]}>20</Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.navigator, styles.navigatorLayout]}>
            <View style={[styles.button2, styles.buttonFlexBox]}>
              <Image
                style={[styles.iconBefore, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/icon--chevronrightlargeicon.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.vaiTrHinTi, styles.gioIconPosition]}>
          <View style={[styles.main, styles.hSPosition]}>
            <View style={[styles.button17, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before10.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo]}>
                  Đổi vai trò
                </Text>
                <Image
                  style={[styles.iconAfter9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/iconafter1.png")}
                />
              </View>
            </View>
            <Image
              style={[styles.gioVinIcon, styles.gioIconPosition]}
              resizeMode="cover"
              source={require("../assets/gio-vin.png")}
            />
          </View>
          <Text style={[styles.title8, styles.titleTypo]}>
            Vai trò hiện tại
          </Text>
        </View>
        <View style={[styles.vaiTrHinTi1, styles.main1Layout]}>
          <View style={[styles.main1, styles.hSLayout]}>
            <View style={[styles.button18, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo]}>
                  Đổi vai trò
                </Text>
                <Image
                  style={[styles.iconAfter9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/iconafter2.png")}
                />
              </View>
            </View>
            <Text style={[styles.gioVin, styles.gioIconPosition]}>
              Giáo viên
            </Text>
            <Image
              style={[styles.gioVinIcon1, styles.gioIconPosition]}
              resizeMode="cover"
              source={require("../assets/gio-vin1.png")}
            />
          </View>
        </View>
        <View style={[styles.thngTinCNhn, styles.flagPosition]}>
          <View style={[styles.hS, styles.hSLayout]}>
            <View style={[styles.button19, styles.buttonFlexBox]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before3.png")}
                />
                <Text style={[styles.children1, styles.childrenTypo]}>Lưu</Text>
                <Image
                  style={[styles.iconAfter9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/iconafter3.png")}
                />
              </View>
            </View>
            <View style={[styles.codePartsField, styles.codePosition]}>
              <View style={styles.container35}>
                <View style={styles.label8}>
                  <Text style={[styles.label9, styles.label9Layout]}>
                    Số điện thoại
                  </Text>
                  <Text style={[styles.required, styles.requiredTypo]}>*</Text>
                </View>
                <View style={[styles.slotAny, styles.slotBorder]}>
                  <View style={[styles.iconBefore9, styles.iconLayout2]}>
                    <View style={[styles.slot, styles.slotPosition]} />
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/vector.png")}
                    />
                  </View>
                  <Text style={[styles.children27, styles.sitetitleClr]}>
                    0934221088
                  </Text>
                  <View style={[styles.component1, styles.iconLayout2]}>
                    <View style={[styles.slot, styles.slotPosition]} />
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/vector.png")}
                    />
                  </View>
                </View>
                <View style={[styles.message, styles.messageSpaceBlock]}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/-icon1.png")}
                  />
                  <Text style={[styles.children28, styles.label9Layout]}>
                    Valid message content
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.container36, styles.codePosition]}>
              <View style={styles.label8}>
                <Text style={[styles.label9, styles.label9Layout]}>Email</Text>
                <Text style={[styles.required, styles.requiredTypo]}>*</Text>
              </View>
              <View style={[styles.slotAny1, styles.slotBorder]}>
                <View style={[styles.iconBefore9, styles.iconLayout2]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text style={styles.children29}>linh.pthth@gmail.com</Text>
                <View style={[styles.component1, styles.iconLayout2]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.codePartsField1, styles.codePosition]}>
              <View style={styles.container35}>
                <View style={styles.label8}>
                  <Text style={[styles.label9, styles.label9Layout]}>
                    Họ và tên
                  </Text>
                  <Text style={[styles.required, styles.requiredTypo]}>*</Text>
                </View>
                <View style={[styles.slotAny, styles.slotBorder]}>
                  <View style={[styles.iconBefore9, styles.iconLayout2]}>
                    <View style={[styles.slot, styles.slotPosition]} />
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/vector.png")}
                    />
                  </View>
                  <Text style={[styles.children27, styles.sitetitleClr]}>
                    Phan Thị Thùy Linh
                  </Text>
                  <View style={[styles.component1, styles.iconLayout2]}>
                    <View style={[styles.slot, styles.slotPosition]} />
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/vector.png")}
                    />
                  </View>
                </View>
                <View style={[styles.message, styles.messageSpaceBlock]}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/-icon.png")}
                  />
                  <Text style={[styles.children31, styles.requiredTypo]}>
                    Invalid message content
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.mainContent}>
            <Text style={[styles.title9, styles.titleTypo]}>
              Thông tin cá nhân
            </Text>
            <View style={[styles.actions, styles.borderPosition]} />
          </View>
        </View>
        <View style={[styles.button20, styles.buttonFlexBox]}>
          <View style={styles.container}>
            <Image
              style={[styles.iconBefore, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/icon-before11.png")}
            />
            <Text style={[styles.children1, styles.childrenTypo]}>
              Đăng xuất
            </Text>
            <Image
              style={[styles.iconAfter, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/icon-after6.png")}
            />
          </View>
        </View>
        <View style={[styles.menu, styles.tiuPosition]}>
          <Pressable
            style={styles.newIcon}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.navigatorLayout}
              resizeMode="cover"
              source={require("../assets/trang-ch-icon.png")}
            />
            <Text style={[styles.trangCh, styles.trangChLayout]}>
              Trang chủ
            </Text>
          </Pressable>
          <Pressable
            style={styles.newIcon}
            onPress={() => navigation.navigate("ClassActive")}
          >
            <Image
              style={styles.navigatorLayout}
              resizeMode="cover"
              source={require("../assets/lp-hc-icon.png")}
            />
            <Text style={[styles.trangCh, styles.trangChLayout]}>Lớp học</Text>
          </Pressable>
          <Pressable
            style={styles.newIcon}
            onPress={() => navigation.navigate("Topic")}
          >
            <Image
              style={styles.navigatorLayout}
              resizeMode="cover"
              source={require("../assets/trang-ch-icon2.png")}
            />
            <Text style={[styles.trangCh, styles.trangChLayout]}>Đề bài</Text>
          </Pressable>
          <Pressable
            style={styles.newIcon}
            onPress={() => navigation.navigate("AssignmentWait")}
          >
            <Image
              style={styles.navigatorLayout}
              resizeMode="cover"
              source={require("../assets/bi-tp-icon.png")}
            />
            <Text style={[styles.trangCh, styles.trangChLayout]}>Bài tập</Text>
          </Pressable>
        </View>
        <View style={[styles.mtMo, styles.tiuPosition]}>
          <Image
            style={styles.iconNotificationicon}
            resizeMode="cover"
            source={require("../assets/icon--notificationicon1.png")}
          />
          <Image
            style={[styles.avatarImageIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/avatar-image.png")}
          />
          <View style={[styles.producthome, styles.flagPosition]}>
            <View style={styles.logo}>
              <View style={styles.logoLight}>
                <View style={styles.container39}>
                  <Text style={styles.vn}>9Văn</Text>
                  <Image
                    style={[styles.isolationModeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/isolation-mode.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.container40}>
              <Text style={[styles.sitetitle, styles.sitetitleClr]}>
                siteTitle
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.flag, styles.flagPosition]}>
        <View style={styles.dropdownItemRadio}>
          <View style={[styles.containerIconTitle, styles.messageSpaceBlock]}>
            <Image
              style={[styles.partsIconSuccessCheckc, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/parts--icon--success-checkcircleicon.png")}
            />
            <View style={styles.containerTitle}>
              <Text style={styles.title10}>Lưu thông tin thành công</Text>
            </View>
          </View>
          <View style={styles.containerCustomIconButton}>
            <View style={[styles.dismissbutton, styles.navigatorLayout]}>
              <Image
                style={[styles.icon3, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon7.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.collapsableContent, styles.searchSpaceBlock]}>
          <Text style={[styles.description16, styles.labelTypo]}>
            Additional information that will help users understand the flag
          </Text>
          <View style={styles.actions1}>
            <View style={[styles.button21, styles.buttonSpaceBlock]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before.png")}
                />
                <Text style={[styles.children11, styles.labelTypo1]}>
                  Understood
                </Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before.png")}
                />
              </View>
            </View>
            <Text style={styles.text}>·</Text>
            <View style={[styles.button21, styles.buttonSpaceBlock]}>
              <View style={styles.container}>
                <Image
                  style={[styles.iconBefore9, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/icon-before.png")}
                />
                <Text style={[styles.children11, styles.labelTypo1]}>
                  No thanks
                </Text>
                <Image
                  style={[styles.iconAfter, styles.iconLayout2]}
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
  tiuPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  tabsPosition: {
    left: 22,
    position: "absolute",
  },
  lineLayout1: {
    height: 2,
    bottom: 0,
    borderStyle: "solid",
  },
  labelTypo1: {
    color: Color.colorBackgroundBrandBoldDefault,
    textAlign: "center",
    fontFamily: FontFamily.update,
    fontWeight: "500",
  },
  lineLayout: {
    borderWidth: 1,
    position: "absolute",
  },
  labelTypo2: {
    fontFamily: FontFamily.update,
    fontWeight: "500",
  },
  tabSpaceBlock: {
    paddingVertical: StyleVariable.space050,
    paddingHorizontal: StyleVariable.space100,
    alignItems: "center",
    overflow: "hidden",
  },
  labelTypo: {
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    fontSize: FontSize.update_size,
  },
  buttonFlexBox: {
    minHeight: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout2: {
    width: 24,
    height: 24,
  },
  childrenTypo: {
    lineHeight: 17,
    marginLeft: 4,
    fontSize: FontSize.update_size,
    textAlign: "center",
    fontFamily: FontFamily.update,
    fontWeight: "500",
  },
  gioVinTypo: {
    fontFamily: FontFamily.menu,
    fontWeight: "600",
  },
  buttonPosition: {
    top: 8,
    display: "none",
    position: "absolute",
  },
  flagShadowBox: {
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(9, 30, 66, 0.31)",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
  },
  descriptionTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
  },
  containerFlexBox: {
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  trangChLayout: {
    lineHeight: 18,
    textAlign: "left",
  },
  sitetitleClr: {
    color: Color.colorTextSubtlest,
    textAlign: "left",
  },
  searchBorder: {
    borderWidth: 2,
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
    backgroundColor: Color.colorTextInverse,
  },
  searchSpaceBlock: {
    paddingLeft: StyleVariable.space500,
    display: "none",
  },
  navigatorLayout: {
    width: 32,
    height: 32,
  },
  button3FlexBox: {
    backgroundColor: Color.active,
    minHeight: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  ellipsisFlexBox: {
    paddingHorizontal: StyleVariable.space100,
    height: 32,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  gioIconPosition: {
    left: "50%",
    position: "absolute",
  },
  hSPosition: {
    top: 32,
    width: 382,
  },
  titleTypo: {
    fontSize: FontSize.titleField_size,
    lineHeight: 32,
    textAlign: "left",
    color: Color.colorTextDefault,
    fontFamily: FontFamily.update,
    fontWeight: "500",
  },
  main1Layout: {
    height: 264,
    width: 381,
    left: "50%",
  },
  hSLayout: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTextInverse,
    position: "absolute",
  },
  flagPosition: {
    left: 24,
    position: "absolute",
  },
  codePosition: {
    width: 333,
    left: 24,
    position: "absolute",
  },
  label9Layout: {
    lineHeight: 16,
    textAlign: "left",
  },
  requiredTypo: {
    color: Color.colorTextDanger,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
  },
  slotBorder: {
    padding: StyleVariable.space100,
    borderWidth: 2,
    alignSelf: "stretch",
    borderRadius: Border.br_10xs,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
  },
  slotPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  messageSpaceBlock: {
    paddingTop: StyleVariable.space050,
    flexDirection: "row",
  },
  borderPosition: {
    right: 0,
    display: "none",
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  buttonSpaceBlock: {
    paddingHorizontal: StyleVariable.space150,
    paddingVertical: 0,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
  },
  border: {
    borderRadius: Border.br_12xs,
    borderBottomWidth: 1,
    borderColor: Color.colorBorderInput,
    right: 0,
    display: "none",
    position: "absolute",
    left: 0,
  },
  label: {
    zIndex: 0,
    textAlign: "center",
    lineHeight: 25,
    fontSize: FontSize.tabs_size,
  },
  line: {
    right: 8,
    left: 8,
    borderRadius: Border.br_11xs,
    borderColor: Color.colorBackgroundBrandBoldDefault,
    zIndex: 1,
    height: 2,
    bottom: 0,
    borderStyle: "solid",
  },
  label1: {
    color: Color.colorTextSubtle,
    textAlign: "center",
    lineHeight: 25,
    fontSize: FontSize.tabs_size,
  },
  label2: {
    fontWeight: "600",
    color: Color.colorTextSubtle,
    textAlign: "center",
    lineHeight: 25,
  },
  tab: {
    display: "none",
  },
  label3: {
    fontFamily: FontFamily.input,
    fontSize: FontSize.update_size,
    color: Color.colorTextSubtle,
    textAlign: "center",
    lineHeight: 25,
  },
  children: {
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
    display: "none",
  },
  iconBefore: {
    height: 24,
    overflow: "hidden",
  },
  children1: {
    color: Color.colorTextInverse,
    marginLeft: 4,
  },
  iconAfter: {
    marginLeft: 4,
    height: 24,
    display: "none",
    overflow: "hidden",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    left: 280,
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.space150,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorBackgroundBrandBoldDefault,
    minHeight: 32,
    top: 8,
    display: "none",
    position: "absolute",
  },
  headingH600: {
    fontSize: FontSize.title_size,
    lineHeight: 24,
    textAlign: "left",
    color: Color.colorTextDefault,
    flex: 1,
  },
  tiu: {
    top: -1,
    height: 49,
    justifyContent: "space-between",
    paddingHorizontal: StyleVariable.space300,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  minheightController40px: {
    height: 40,
    alignItems: "center",
  },
  title: {
    lineHeight: 17,
    textAlign: "left",
    color: Color.colorTextDefault,
  },
  description: {
    lineHeight: 15,
    marginTop: 2,
    textAlign: "left",
    color: Color.colorTextSubtle,
    display: "none",
  },
  titleDescription: {
    marginLeft: 12,
  },
  elemafterIcon: {
    marginLeft: 12,
    height: 24,
    overflow: "hidden",
  },
  container1: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  dropdownItemLight: {
    backgroundColor: Color.lightColorbackgroundneutralsubtle,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    display: "none",
  },
  iconBefore1: {
    height: 24,
  },
  children2: {
    color: Color.colorTextDefault,
    fontFamily: FontFamily.input,
    fontSize: FontSize.update_size,
  },
  description8: {
    lineHeight: 12,
    marginTop: 4,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    display: "none",
  },
  content: {
    marginLeft: 12,
    justifyContent: "center",
  },
  iconAfter1: {
    marginLeft: 12,
    height: 24,
    display: "none",
    overflow: "hidden",
  },
  container10: {
    paddingVertical: Padding.p_9xs,
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
  iconBefore2: {
    padding: Padding.p_8xs,
    height: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  container11: {
    paddingVertical: StyleVariable.space0501,
  },
  dropdownItemRadio7: {
    alignSelf: "stretch",
    flexDirection: "row",
    display: "none",
  },
  slotContentMenuRadios: {
    width: 204,
  },
  dropdownMenu1: {
    top: 40,
    width: 360,
    paddingVertical: StyleVariable.space075,
    paddingHorizontal: 0,
    zIndex: 0,
    display: "none",
    left: 0,
    position: "absolute",
  },
  iconBefore9: {
    height: 24,
    display: "none",
    overflow: "hidden",
  },
  iconAfter9: {
    marginLeft: 4,
    height: 24,
    overflow: "hidden",
  },
  button1: {
    marginTop: 8,
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.space150,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorBackgroundBrandBoldDefault,
    minHeight: 32,
    zIndex: 1,
  },
  dropdownMenu: {
    left: 259,
    borderRadius: Border.br_10xs,
  },
  search1: {
    lineHeight: 32,
    color: Color.colorTextSubtlest,
    textAlign: "left",
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    fontSize: FontSize.update_size,
    zIndex: 0,
    flex: 1,
  },
  iconSearchicon: {
    top: 6,
    left: 10,
    width: 20,
    height: 20,
    zIndex: 1,
    overflow: "hidden",
    position: "absolute",
  },
  search: {
    top: "50%",
    borderRadius: Border.br_8xs,
    width: 383,
    paddingRight: StyleVariable.space100,
    height: 32,
    borderWidth: 2,
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
    backgroundColor: Color.colorTextInverse,
    marginTop: 4,
    alignItems: "center",
    flexDirection: "row",
    left: 22,
    position: "absolute",
  },
  ccChcNngKhc: {
    top: 112,
    height: 48,
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
  },
  button2: {
    paddingHorizontal: StyleVariable.space050,
    paddingVertical: 0,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  navigator: {
    overflow: "hidden",
  },
  children11: {
    lineHeight: 20,
    marginLeft: 4,
    fontSize: FontSize.update_size,
    textAlign: "center",
  },
  button3: {
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.space150,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
  },
  page: {
    flexDirection: "row",
  },
  ellipsesLabel: {
    lineHeight: 20,
    color: Color.colorTextDefault,
    textAlign: "center",
  },
  ellipsis: {
    height: 32,
    paddingVertical: 0,
    justifyContent: "center",
    display: "none",
  },
  children12: {
    lineHeight: 20,
    color: Color.colorTextDefault,
    marginLeft: 4,
    fontSize: FontSize.update_size,
    textAlign: "center",
  },
  button4: {
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.space150,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
  },
  children13: {
    color: Color.colorTextDefault,
    marginLeft: 4,
  },
  page2: {
    flexDirection: "row",
    display: "none",
  },
  ellipsis1: {
    height: 32,
    paddingVertical: 0,
    justifyContent: "center",
  },
  thanhIuHng: {
    top: 885,
    left: 250,
    alignItems: "center",
    flexDirection: "row",
    display: "none",
    position: "absolute",
  },
  button17: {
    top: 214,
    right: 15,
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.space150,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorBackgroundBrandBoldDefault,
    minHeight: 32,
    position: "absolute",
  },
  gioVinIcon: {
    marginLeft: -59,
    top: 28,
    width: 118,
    height: 128,
  },
  main: {
    marginLeft: -191,
    borderRadius: Border.br_mini,
    height: 265,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorTextInverse,
  },
  title8: {
    left: 2,
    width: 213,
    height: 32,
    top: 0,
    position: "absolute",
  },
  vaiTrHinTi: {
    top: 509,
    height: 297,
    width: 382,
    marginLeft: -190,
  },
  button18: {
    top: 208,
    right: 24,
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.space150,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorBackgroundBrandBoldDefault,
    minHeight: 32,
    position: "absolute",
  },
  gioVin: {
    marginLeft: -30.5,
    top: 163,
    letterSpacing: 0.3,
    lineHeight: 14,
    color: Color.colorTextSuccess,
    fontFamily: FontFamily.menu,
    fontWeight: "600",
    fontSize: FontSize.update_size,
    textAlign: "center",
  },
  gioVinIcon1: {
    marginLeft: -58.5,
    width: 119,
    height: 129,
    top: 24,
  },
  main1: {
    marginLeft: -190.5,
    height: 264,
    width: 381,
    left: "50%",
    top: 0,
  },
  vaiTrHinTi1: {
    top: 539,
    marginLeft: -190,
    position: "absolute",
  },
  button19: {
    top: 236,
    left: 281,
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.space150,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorBackgroundBrandBoldDefault,
    minHeight: 32,
    zIndex: 0,
    position: "absolute",
  },
  label9: {
    fontSize: FontSize.update_size,
    color: Color.colorTextSubtle,
    fontFamily: FontFamily.update,
    fontWeight: "500",
  },
  required: {
    fontWeight: "600",
    display: "none",
  },
  label8: {
    paddingBottom: StyleVariable.space050,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  slot: {
    right: "0%",
    left: "0%",
    backgroundColor: Color.colorBackgroundAccentMagentaSubtlestDefault,
    borderStyle: "dashed",
    borderColor: Color.colorBorderAccentMagenta,
    borderRadius: 0.001,
    borderWidth: 1,
    position: "absolute",
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
  },
  children27: {
    marginLeft: 6,
    lineHeight: 20,
    height: 20,
    fontFamily: FontFamily.input,
    fontSize: FontSize.update_size,
    flex: 1,
  },
  component1: {
    marginLeft: 6,
    height: 24,
    display: "none",
    overflow: "hidden",
  },
  slotAny: {
    borderColor: Color.colorBorderInput,
    backgroundColor: Color.colorTextInverse,
  },
  children28: {
    color: Color.colorTextSuccess,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    marginLeft: 4,
    flex: 1,
  },
  message: {
    alignSelf: "stretch",
    display: "none",
  },
  container35: {
    flex: 1,
  },
  codePartsField: {
    top: 156,
    zIndex: 1,
    flexDirection: "row",
  },
  children29: {
    color: Color.colorIconDisabled,
    marginLeft: 6,
    lineHeight: 20,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.input,
    fontSize: FontSize.update_size,
    flex: 1,
  },
  slotAny1: {
    backgroundColor: Color.colorBackgroundDisabled,
    borderColor: Color.colorBackgroundNeutralDefault,
  },
  container36: {
    top: 90,
    height: 56,
    zIndex: 2,
  },
  children31: {
    marginLeft: 4,
    flex: 1,
  },
  codePartsField1: {
    zIndex: 3,
    top: 24,
    flexDirection: "row",
  },
  hS: {
    height: 292,
    padding: StyleVariable.space300,
    top: 32,
    width: 382,
    left: 0,
  },
  title9: {
    zIndex: 0,
  },
  actions: {
    bottom: 8,
    zIndex: 1,
  },
  mainContent: {
    left: 1,
    width: 214,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  thngTinCNhn: {
    top: 170,
    height: 324,
    width: 382,
  },
  button20: {
    top: 869,
    left: 290,
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.space150,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorBackgroundBrandBoldDefault,
    minHeight: 32,
    position: "absolute",
  },
  trangCh: {
    fontSize: FontSize.menu_size,
    fontFamily: FontFamily.menu,
    fontWeight: "600",
    color: Color.colorTextSubtle,
  },
  newIcon: {
    paddingVertical: Padding.p_4xs,
    height: 60,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  menu: {
    top: 51,
    height: 60,
    flexDirection: "row",
    backgroundColor: Color.colorTextInverse,
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
    right: "5.58%",
    bottom: "8%",
    left: "85.12%",
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
    bottom: "0%",
    top: "0%",
    height: "100%",
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
    lineHeight: 20,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    fontSize: FontSize.update_size,
  },
  container40: {
    borderRightWidth: 1,
    paddingRight: StyleVariable.space200,
    marginLeft: 16,
    flexDirection: "row",
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
    display: "none",
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
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
    top: 0,
  },
  profile: {
    backgroundColor: Color.background,
    overflow: "hidden",
    top: 0,
    height: 932,
  },
  partsIconSuccessCheckc: {
    height: 24,
  },
  title10: {
    fontSize: FontSize.contentNotifi_size,
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorTextDefault,
    fontFamily: FontFamily.input,
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
    flex: 1,
  },
  icon3: {
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
  description16: {
    lineHeight: 20,
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.colorTextSubtle,
    display: "none",
  },
  button21: {
    minHeight: 24,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontFamily: FontFamily.sFProText,
    display: "flex",
    width: 16,
    lineHeight: 20,
    justifyContent: "center",
    fontSize: FontSize.update_size,
    color: Color.colorTextSubtle,
    textAlign: "center",
    alignItems: "center",
  },
  actions1: {
    paddingTop: StyleVariable.space100,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  collapsableContent: {
    alignSelf: "stretch",
  },
  flag: {
    top: 818,
    width: 346,
    padding: StyleVariable.space200,
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(9, 30, 66, 0.31)",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
  },
  saveSuccess: {
    height: 932,
    width: "100%",
    flex: 1,
  },
});

export default SaveSuccess;
