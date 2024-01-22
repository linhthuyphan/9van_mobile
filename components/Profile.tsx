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

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <View style={styles.ccChcNngKhc}>
        <View style={[styles.tabs, styles.tabsPosition]}>
          <View style={[styles.border, styles.lineLayout1]} />
          <View style={styles.children}>
            <View style={styles.tabSpaceBlock}>
              <Text style={[styles.label, styles.labelTypo]}>Tab</Text>
              <View style={[styles.line, styles.lineLayout]} />
            </View>
            <View style={styles.tabSpaceBlock}>
              <Text style={[styles.label1, styles.labelTypo1]}>Tab</Text>
            </View>
            <View style={[styles.tab, styles.tabSpaceBlock]}>
              <Text style={styles.label2}>Tab</Text>
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
              style={[styles.iconBefore, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/icon-before2.png")}
            />
            <Text style={[styles.children1, styles.childrenTypo]}>
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
          <Text style={[styles.headingH600, styles.gioVinTypo]}>
            Hồ sơ cá nhân
          </Text>
        </View>
        <View style={[styles.dropdownMenu, styles.dropdownLayout]}>
          <View style={[styles.dropdownMenu1, styles.dropdownLayout]}>
            <View
              style={[styles.dropdownItemLight, styles.dropdownItemFlexBox]}
            >
              <View style={styles.minheightController40px} />
              <View style={styles.container1}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <View style={styles.titleDescription}>
                  <Text style={styles.title}>Option</Text>
                  <Text style={[styles.description, styles.descriptionTypo]}>
                    Description goes here
                  </Text>
                </View>
                <Image
                  style={[styles.elemafterIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
            <View
              style={[styles.dropdownItemLight, styles.dropdownItemFlexBox]}
            >
              <View style={styles.minheightController40px} />
              <View style={styles.container1}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <View style={styles.titleDescription}>
                  <Text style={styles.title}>Option</Text>
                  <Text style={[styles.description, styles.descriptionTypo]}>
                    Description goes here
                  </Text>
                </View>
                <Image
                  style={[styles.elemafterIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
            <View
              style={[styles.dropdownItemLight, styles.dropdownItemFlexBox]}
            >
              <View style={styles.minheightController40px} />
              <View style={styles.container1}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <View style={styles.titleDescription}>
                  <Text style={styles.title}>Option</Text>
                  <Text style={[styles.description, styles.descriptionTypo]}>
                    Description goes here
                  </Text>
                </View>
                <Image
                  style={[styles.elemafterIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
            <View
              style={[styles.dropdownItemLight, styles.dropdownItemFlexBox]}
            >
              <View style={styles.minheightController40px} />
              <View style={styles.container1}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <View style={styles.titleDescription}>
                  <Text style={styles.title}>Option</Text>
                  <Text style={[styles.description, styles.descriptionTypo]}>
                    Description goes here
                  </Text>
                </View>
                <Image
                  style={[styles.elemafterIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
            <View
              style={[styles.dropdownItemLight, styles.dropdownItemFlexBox]}
            >
              <View style={styles.minheightController40px} />
              <View style={styles.container1}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <View style={styles.titleDescription}>
                  <Text style={styles.title}>Option</Text>
                  <Text style={[styles.description, styles.descriptionTypo]}>
                    Description goes here
                  </Text>
                </View>
                <Image
                  style={[styles.elemafterIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
            <View
              style={[styles.dropdownItemLight, styles.dropdownItemFlexBox]}
            >
              <View style={styles.minheightController40px} />
              <View style={styles.container1}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <View style={styles.titleDescription}>
                  <Text style={styles.title}>Option</Text>
                  <Text style={[styles.description, styles.descriptionTypo]}>
                    Description goes here
                  </Text>
                </View>
                <Image
                  style={[styles.elemafterIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
            <View
              style={[styles.dropdownItemLight, styles.dropdownItemFlexBox]}
            >
              <View style={styles.minheightController40px} />
              <View style={styles.container1}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <View style={styles.titleDescription}>
                  <Text style={styles.title}>Option</Text>
                  <Text style={[styles.description, styles.descriptionTypo]}>
                    Description goes here
                  </Text>
                </View>
                <Image
                  style={[styles.elemafterIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
            <View
              style={[styles.dropdownItemLight, styles.dropdownItemFlexBox]}
            >
              <View style={styles.minheightController40px} />
              <View style={styles.container1}>
                <Image
                  style={[styles.iconBefore, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
                <View style={styles.titleDescription}>
                  <Text style={styles.title}>Option</Text>
                  <Text style={[styles.description, styles.descriptionTypo]}>
                    Description goes here
                  </Text>
                </View>
                <Image
                  style={[styles.elemafterIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon-before1.png")}
                />
              </View>
            </View>
            <View style={styles.slotContentMenuRadios}>
              <View>
                <View style={styles.dropdownItemFlexBox}>
                  <View style={styles.button3FlexBox}>
                    <View style={[styles.container10, styles.containerFlexBox]}>
                      <Image
                        style={[styles.iconBefore1, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../assets/icon-before5.png")}
                      />
                      <View style={styles.content}>
                        <Text style={[styles.children2, styles.trangChLayout]}>
                          Khối 12
                        </Text>
                        <Text
                          style={[styles.description8, styles.searchSpaceBlock]}
                        >
                          Description
                        </Text>
                      </View>
                      <Image
                        style={[styles.iconAfter1, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../assets/icon-before1.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.dropdownItemFlexBox}>
                  <View style={styles.buttonFlexBox}>
                    <View style={[styles.container11, styles.containerFlexBox]}>
                      <View style={[styles.iconBefore2, styles.iconLayout1]}>
                        <View style={[styles.radioicon, styles.searchBorder]} />
                      </View>
                      <View style={styles.content}>
                        <Text style={[styles.children2, styles.trangChLayout]}>
                          Khối 11
                        </Text>
                        <Text
                          style={[styles.description8, styles.searchSpaceBlock]}
                        >
                          Description
                        </Text>
                      </View>
                      <Image
                        style={[styles.iconAfter1, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../assets/icon-before1.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.dropdownItemFlexBox}>
                  <View style={styles.buttonFlexBox}>
                    <View style={[styles.container11, styles.containerFlexBox]}>
                      <View style={[styles.iconBefore2, styles.iconLayout1]}>
                        <View style={[styles.radioicon, styles.searchBorder]} />
                      </View>
                      <View style={styles.content}>
                        <Text style={[styles.children2, styles.trangChLayout]}>
                          Khối 10
                        </Text>
                        <Text
                          style={[styles.description8, styles.searchSpaceBlock]}
                        >
                          Description
                        </Text>
                      </View>
                      <Image
                        style={[styles.iconAfter1, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../assets/icon-before1.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.dropdownItemFlexBox}>
                  <View style={styles.buttonFlexBox}>
                    <View style={[styles.container11, styles.containerFlexBox]}>
                      <View style={[styles.iconBefore2, styles.iconLayout1]}>
                        <View style={[styles.radioicon, styles.searchBorder]} />
                      </View>
                      <View style={styles.content}>
                        <Text style={[styles.children2, styles.trangChLayout]}>
                          Khối 9
                        </Text>
                        <Text
                          style={[styles.description8, styles.searchSpaceBlock]}
                        >
                          Description
                        </Text>
                      </View>
                      <Image
                        style={[styles.iconAfter1, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../assets/icon-before1.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.dropdownItemFlexBox}>
                  <View style={styles.buttonFlexBox}>
                    <View style={[styles.container11, styles.containerFlexBox]}>
                      <View style={[styles.iconBefore2, styles.iconLayout1]}>
                        <View style={[styles.radioicon, styles.searchBorder]} />
                      </View>
                      <View style={styles.content}>
                        <Text style={[styles.children2, styles.trangChLayout]}>
                          Khối 8
                        </Text>
                        <Text
                          style={[styles.description8, styles.searchSpaceBlock]}
                        >
                          Description
                        </Text>
                      </View>
                      <Image
                        style={[styles.iconAfter1, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../assets/icon-before1.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.dropdownItemFlexBox}>
                  <View style={styles.buttonFlexBox}>
                    <View style={[styles.container11, styles.containerFlexBox]}>
                      <View style={[styles.iconBefore2, styles.iconLayout1]}>
                        <View style={[styles.radioicon, styles.searchBorder]} />
                      </View>
                      <View style={styles.content}>
                        <Text style={[styles.children2, styles.trangChLayout]}>
                          Khối 7
                        </Text>
                        <Text
                          style={[styles.description8, styles.searchSpaceBlock]}
                        >
                          Description
                        </Text>
                      </View>
                      <Image
                        style={[styles.iconAfter1, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../assets/icon-before1.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.dropdownItemFlexBox}>
                  <View style={styles.buttonFlexBox}>
                    <View style={[styles.container11, styles.containerFlexBox]}>
                      <View style={[styles.iconBefore2, styles.iconLayout1]}>
                        <View style={[styles.radioicon, styles.searchBorder]} />
                      </View>
                      <View style={styles.content}>
                        <Text style={[styles.children2, styles.trangChLayout]}>
                          Khối 6
                        </Text>
                        <Text
                          style={[styles.description8, styles.searchSpaceBlock]}
                        >
                          Description
                        </Text>
                      </View>
                      <Image
                        style={[styles.iconAfter1, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../assets/icon-before1.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.dropdownItemRadio7,
                    styles.dropdownItemFlexBox,
                  ]}
                >
                  <View style={styles.buttonFlexBox}>
                    <View style={[styles.container11, styles.containerFlexBox]}>
                      <View style={[styles.iconBefore2, styles.iconLayout1]}>
                        <View style={[styles.radioicon, styles.searchBorder]} />
                      </View>
                      <View style={styles.content}>
                        <Text style={[styles.children2, styles.trangChLayout]}>
                          Option
                        </Text>
                        <Text
                          style={[styles.description8, styles.searchSpaceBlock]}
                        >
                          Description
                        </Text>
                      </View>
                      <Image
                        style={[styles.iconAfter1, styles.iconLayout1]}
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
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before3.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo]}>
                Tất cả các khối
              </Text>
              <Image
                style={[styles.iconAfter9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-after5.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.search, styles.searchBorder]}>
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
              style={[styles.iconBefore, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/icon.png")}
            />
          </View>
        </View>
        <View style={styles.page}>
          <View style={[styles.button3, styles.button3FlexBox]}>
            <View style={styles.container}>
              <Image
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before.png")}
              />
              <Text style={[styles.children11, styles.childrenLayout]}>1</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.ellipsis, styles.ellipsisFlexBox]}>
          <Text style={[styles.ellipsesLabel, styles.childrenLayout]}>...</Text>
        </View>
        <View style={styles.page}>
          <View style={[styles.button4, styles.buttonFlexBox]}>
            <View style={styles.container}>
              <Image
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children12, styles.childrenLayout]}>2</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
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
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children13, styles.childrenTypo]}>3</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
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
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children13, styles.childrenTypo]}>4</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
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
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children13, styles.childrenTypo]}>5</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
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
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children13, styles.childrenTypo]}>6</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
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
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children13, styles.childrenTypo]}>7</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
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
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children13, styles.childrenTypo]}>8</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
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
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children13, styles.childrenTypo]}>9</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
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
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children13, styles.childrenTypo]}>10</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
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
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children13, styles.childrenTypo]}>11</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
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
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children13, styles.childrenTypo]}>12</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.ellipsis1, styles.ellipsisFlexBox]}>
          <Text style={[styles.ellipsesLabel, styles.childrenLayout]}>...</Text>
        </View>
        <View style={styles.page2}>
          <View style={[styles.button4, styles.buttonFlexBox]}>
            <View style={styles.container}>
              <Image
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children13, styles.childrenTypo]}>20</Text>
              <Image
                style={[styles.iconAfter, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.navigator, styles.navigatorLayout]}>
          <View style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={[styles.iconBefore, styles.iconLayout1]}
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
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before10.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo]}>
                Đổi vai trò
              </Text>
              <Image
                style={[styles.iconAfter9, styles.iconLayout1]}
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
        <Text style={[styles.title8, styles.titleTypo]}>Vai trò hiện tại</Text>
      </View>
      <View style={[styles.vaiTrHinTi1, styles.main1Layout]}>
        <View style={[styles.main1, styles.hSLayout]}>
          <View style={[styles.button18, styles.buttonFlexBox]}>
            <View style={styles.container}>
              <Image
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before1.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo]}>
                Đổi vai trò
              </Text>
              <Image
                style={[styles.iconAfter9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/iconafter2.png")}
              />
            </View>
          </View>
          <Text style={[styles.gioVin, styles.gioIconPosition]}>Giáo viên</Text>
          <Image
            style={[styles.gioVinIcon1, styles.gioIconPosition]}
            resizeMode="cover"
            source={require("../assets/gio-vin1.png")}
          />
        </View>
      </View>
      <View style={[styles.thngTinCNhn, styles.thngTinCNhnPosition]}>
        <View style={[styles.hS, styles.hSLayout]}>
          <View style={[styles.button19, styles.buttonFlexBox]}>
            <View style={styles.container}>
              <Image
                style={[styles.iconBefore9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon-before3.png")}
              />
              <Text style={[styles.children1, styles.childrenTypo]}>Lưu</Text>
              <Image
                style={[styles.iconAfter9, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/iconafter3.png")}
              />
            </View>
          </View>
          <View style={[styles.codePartsField, styles.codePosition]}>
            <View style={styles.container35}>
              <View style={[styles.label8, styles.dropdownItemFlexBox]}>
                <Text style={[styles.label9, styles.label9Layout]}>
                  Số điện thoại
                </Text>
                <Text style={[styles.required, styles.requiredTypo]}>*</Text>
              </View>
              <View style={[styles.slotAny, styles.slotBorder]}>
                <View style={[styles.iconBefore9, styles.iconLayout1]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text style={[styles.children27, styles.childrenLayout]}>
                  0934221088
                </Text>
                <View style={[styles.component1, styles.iconLayout1]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
              <View style={[styles.message, styles.dropdownItemFlexBox]}>
                <Image
                  style={styles.icon1}
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
            <View style={[styles.label8, styles.dropdownItemFlexBox]}>
              <Text style={[styles.label9, styles.label9Layout]}>Email</Text>
              <Text style={[styles.required, styles.requiredTypo]}>*</Text>
            </View>
            <View style={[styles.slotAny1, styles.slotBorder]}>
              <View style={[styles.iconBefore9, styles.iconLayout1]}>
                <View style={[styles.slot, styles.slotPosition]} />
                <Image
                  style={[styles.vectorIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
              <Text style={[styles.children29, styles.childrenLayout]}>
                linh.pthth@gmail.com
              </Text>
              <View style={[styles.component1, styles.iconLayout1]}>
                <View style={[styles.slot, styles.slotPosition]} />
                <Image
                  style={[styles.vectorIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.codePartsField1, styles.codePosition]}>
            <View style={styles.container35}>
              <View style={[styles.label8, styles.dropdownItemFlexBox]}>
                <Text style={[styles.label9, styles.label9Layout]}>
                  Họ và tên
                </Text>
                <Text style={[styles.required, styles.requiredTypo]}>*</Text>
              </View>
              <View style={[styles.slotAny, styles.slotBorder]}>
                <View style={[styles.iconBefore9, styles.iconLayout1]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text style={[styles.children27, styles.childrenLayout]}>
                  Phan Thị Thùy Linh
                </Text>
                <View style={[styles.component1, styles.iconLayout1]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
              <View style={[styles.message, styles.dropdownItemFlexBox]}>
                <Image
                  style={styles.icon1}
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
            style={[styles.iconBefore, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/icon-before11.png")}
          />
          <Text style={[styles.children1, styles.childrenTypo]}>Đăng xuất</Text>
          <Image
            style={[styles.iconAfter, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/icon-after6.png")}
          />
        </View>
      </View>
      <View style={styles.menu}>
        <Pressable
          style={styles.newIcon}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.navigatorLayout}
            resizeMode="cover"
            source={require("../assets/trang-ch-icon.png")}
          />
          <Text style={[styles.trangCh, styles.trangChLayout]}>Trang chủ</Text>
        </Pressable>
        <Pressable
          style={styles.newIcon}
          onPress={() => navigation.navigate("ClassActive")}
        >
          <Image
            style={styles.navigatorLayout}
            resizeMode="cover"
            source={require("../assets/lp-hc-icon1.png")}
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
      <View style={styles.mtMo}>
        <Image
          style={styles.iconNotificationicon}
          resizeMode="cover"
          source={require("../assets/icon--notificationicon1.png")}
        />
        <Image
          style={[styles.avatarImageIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/avatar-image.png")}
        />
        <View style={[styles.producthome, styles.thngTinCNhnPosition]}>
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
          <View style={styles.container40}>
            <Text style={[styles.sitetitle, styles.childrenLayout]}>
              siteTitle
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsPosition: {
    left: 22,
    position: "absolute",
  },
  lineLayout1: {
    height: 2,
    bottom: 0,
    borderStyle: "solid",
  },
  labelTypo: {
    color: Color.colorBackgroundBrandBoldDefault,
    textAlign: "center",
    fontFamily: FontFamily.update,
    fontWeight: "500",
  },
  lineLayout: {
    borderWidth: 1,
    position: "absolute",
  },
  labelTypo1: {
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
    minHeight: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout1: {
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
  dropdownLayout: {
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  dropdownItemFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
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
  searchSpaceBlock: {
    marginTop: 4,
    display: "none",
  },
  searchBorder: {
    borderWidth: 2,
    borderColor: Color.colorBorderInput,
    borderStyle: "solid",
    backgroundColor: Color.colorTextInverse,
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
  childrenLayout: {
    lineHeight: 20,
    fontSize: FontSize.update_size,
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
  thngTinCNhnPosition: {
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  borderPosition: {
    right: 0,
    display: "none",
    position: "absolute",
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
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    fontWeight: "600",
    fontSize: FontSize.update_size,
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
    left: 0,
    position: "absolute",
    width: 430,
  },
  minheightController40px: {
    height: 40,
    alignItems: "center",
  },
  title: {
    lineHeight: 17,
    textAlign: "left",
    color: Color.colorTextDefault,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    fontSize: FontSize.update_size,
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
    alignItems: "center",
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
    color: Color.colorTextSubtlest,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
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
    display: "none",
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
    paddingHorizontal: 0,
    zIndex: 0,
    display: "none",
    backgroundColor: Color.colorTextInverse,
    left: 0,
    overflow: "hidden",
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
    top: 8,
    display: "none",
  },
  search1: {
    lineHeight: 32,
    color: Color.colorTextSubtlest,
    textAlign: "left",
    flex: 1,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    fontSize: FontSize.update_size,
    zIndex: 0,
  },
  iconSearchicon: {
    top: 6,
    left: 10,
    width: 20,
    height: 20,
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    top: "50%",
    borderRadius: Border.br_8xs,
    width: 383,
    paddingLeft: StyleVariable.space500,
    paddingRight: StyleVariable.space100,
    height: 32,
    marginTop: 4,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    left: 22,
    position: "absolute",
  },
  ccChcNngKhc: {
    top: 112,
    height: 48,
    backgroundColor: Color.colorTextInverse,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 430,
  },
  button2: {
    paddingHorizontal: StyleVariable.space050,
    paddingVertical: 0,
    justifyContent: "center",
    borderRadius: Border.br_10xs,
    position: "absolute",
    top: 0,
    left: 0,
  },
  navigator: {
    overflow: "hidden",
  },
  children11: {
    marginLeft: 4,
    textAlign: "center",
    color: Color.colorBackgroundBrandBoldDefault,
    fontFamily: FontFamily.update,
    fontWeight: "500",
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
    color: Color.colorTextDefault,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    textAlign: "center",
  },
  ellipsis: {
    height: 32,
    paddingVertical: 0,
    justifyContent: "center",
    display: "none",
  },
  children12: {
    color: Color.colorTextDefault,
    marginLeft: 4,
    textAlign: "center",
    fontFamily: FontFamily.update,
    fontWeight: "500",
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
  },
  slot: {
    width: "100%",
    right: "0%",
    left: "0%",
    backgroundColor: Color.colorBackgroundAccentMagentaSubtlestDefault,
    borderStyle: "dashed",
    borderColor: Color.colorBorderAccentMagenta,
    borderRadius: 0.001,
    borderWidth: 1,
    position: "absolute",
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
    height: 20,
    color: Color.colorTextSubtlest,
    textAlign: "left",
    flex: 1,
    fontFamily: FontFamily.input,
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
  icon1: {
    width: 16,
    height: 16,
  },
  children28: {
    color: Color.colorTextSuccess,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    flex: 1,
    marginLeft: 4,
  },
  message: {
    paddingTop: StyleVariable.space050,
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
    height: 20,
    textAlign: "left",
    flex: 1,
    fontFamily: FontFamily.input,
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
    flex: 1,
    marginLeft: 4,
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  iconNotificationicon: {
    top: 5,
    left: 312,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
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
    color: Color.colorTextSubtlest,
    textAlign: "left",
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
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
    top: 0,
    backgroundColor: Color.colorTextInverse,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 430,
  },
  profile: {
    backgroundColor: Color.background,
    height: 932,
    overflow: "hidden",
    width: 430,
  },
});

export default Profile;
