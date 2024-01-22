import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Padding,
  StyleVariable,
  Border,
  Color,
} from "../GlobalStyles";

const EditStudent = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.editStudent}>
      <View style={[styles.listStudent, styles.mtMoPosition]}>
        <View style={[styles.mtMo, styles.mtMoPosition]}>
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
                    style={[styles.isolationModeIcon, styles.slotPosition]}
                    resizeMode="cover"
                    source={require("../assets/isolation-mode1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.container1, styles.codeBorder]}>
              <Text style={[styles.sitetitle, styles.label2Typo]}>
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
              source={require("../assets/trang-ch-icon1.png")}
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
        <View style={[styles.header, styles.mtMoPosition]}>
          <View style={[styles.buttomHcSinh, styles.buttonLayout]}>
            <View style={[styles.container2, styles.containerFlexBox]}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/icon-before2.png")}
              />
              <Text style={[styles.children, styles.childrenTypo1]}>
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
            <Text style={[styles.headingH600, styles.trangTypo]}>
              Chỉnh sửa thông tin học sinh
            </Text>
          </View>
          <View style={[styles.tabsWrapper, styles.mtMoPosition]}>
            <View style={[styles.tabs, styles.tabsPosition]}>
              <View style={[styles.border, styles.lineLayout]} />
              <View style={styles.children1}>
                <View style={styles.tabSpaceBlock}>
                  <Text style={[styles.label, styles.labelTypo1]}>
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
          </View>
        </View>
        <View style={[styles.bngHcSinh, styles.bngLayout]}>
          <View style={styles.niDungBngHcSinh}>
            <View style={[styles.thamGia, styles.thamBg]}>
              <View style={[styles.button, styles.buttonLayout]}>
                <View style={[styles.container2, styles.containerFlexBox]}>
                  <Image
                    style={[styles.iconBefore1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
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
              <View style={[styles.button, styles.buttonLayout]}>
                <View style={[styles.container2, styles.containerFlexBox]}>
                  <Image
                    style={[styles.iconBefore1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children3, styles.childrenTypo1]}>
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
                    <Text style={[styles.children4, styles.childrenTypo1]}>
                      Sửa
                    </Text>
                    <Image
                      style={[styles.iconAfter3, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-after2.png")}
                    />
                  </View>
                </View>
                <View style={[styles.xa, styles.buttonLayout]}>
                  <View style={[styles.container2, styles.containerFlexBox]}>
                    <Image
                      style={[styles.iconBefore1, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before3.png")}
                    />
                    <Text style={[styles.children, styles.childrenTypo1]}>
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
            <View style={[styles.tableTree, styles.borderPosition]}>
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
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      STT
                    </Text>
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
                    <Text style={styles.cellLabel5} />
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
                    <Text style={styles.cellLabel5}>1</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.borderBorder]}>
                <View style={[styles.container8, styles.containerSpaceBlock]}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5}>Phan Thị Thùy Linh</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.borderBorder]}>
                <View style={[styles.container8, styles.containerSpaceBlock]}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5}>abcd1234@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.borderBorder]}>
                <View style={[styles.container8, styles.containerSpaceBlock]}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.borderBorder]}>
                <View style={[styles.container8, styles.containerSpaceBlock]}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.borderBorder]}>
                <View style={[styles.container8, styles.containerSpaceBlock]}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5} />
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
              <View style={[styles.button, styles.buttonLayout]}>
                <View style={[styles.container2, styles.containerFlexBox]}>
                  <Image
                    style={[styles.iconBefore1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children3, styles.childrenTypo1]}>
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
              <View style={[styles.button, styles.buttonLayout]}>
                <View style={[styles.container2, styles.containerFlexBox]}>
                  <Image
                    style={[styles.iconBefore1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children2, styles.childrenTypo1]}>
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
                    <Text style={[styles.children4, styles.childrenTypo1]}>
                      Sửa
                    </Text>
                    <Image
                      style={[styles.iconAfter3, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-after2.png")}
                    />
                  </View>
                </View>
                <View style={[styles.xa, styles.buttonLayout]}>
                  <View style={[styles.container2, styles.containerFlexBox]}>
                    <Image
                      style={[styles.iconBefore1, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-before3.png")}
                    />
                    <Text style={[styles.children, styles.childrenTypo1]}>
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
            <View style={[styles.tableTree, styles.borderPosition]}>
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
                    <Text style={[styles.cellLabel, styles.labelTypo]}>
                      STT
                    </Text>
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
                    <Text style={styles.cellLabel5} />
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
                    <Text style={styles.cellLabel5}>2</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.borderBorder]}>
                <View style={[styles.container8, styles.containerSpaceBlock]}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5}>Trịnh Hồng Nhung</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.borderBorder]}>
                <View style={[styles.container8, styles.containerSpaceBlock]}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5}>abcd1234@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.borderBorder]}>
                <View style={[styles.container8, styles.containerSpaceBlock]}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.borderBorder]}>
                <View style={[styles.container8, styles.containerSpaceBlock]}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
              <View style={[styles.codePartsCell, styles.borderBorder]}>
                <View style={[styles.container8, styles.containerSpaceBlock]}>
                  <View style={styles.box}>
                    <Text style={styles.cellLabel5} />
                  </View>
                </View>
                <View style={styles.minheightController40px} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.niDungNhp, styles.tabsPosition]}>
        <View style={[styles.mainContent, styles.borderPosition]}>
          <Text style={[styles.title, styles.labelTypo1]}>
            Chỉnh sửa thông tin học sinh
          </Text>
          <View style={[styles.actions, styles.linePosition]} />
        </View>
        <View style={styles.khung}>
          <View style={styles.buttonGroupParent}>
            <View style={styles.buttonGroup2}>
              <View style={[styles.button4, styles.buttonLayout]}>
                <View style={[styles.container2, styles.containerFlexBox]}>
                  <Image
                    style={[styles.iconBefore1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                  <Text style={[styles.children10, styles.childrenTypo1]}>
                    Hủy
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before1.png")}
                  />
                </View>
              </View>
              <View style={[styles.button5, styles.buttonLayout]}>
                <View style={[styles.container2, styles.containerFlexBox]}>
                  <Image
                    style={[styles.iconBefore1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before3.png")}
                  />
                  <Text style={[styles.children, styles.childrenTypo1]}>
                    Lưu
                  </Text>
                  <Image
                    style={[styles.iconAfter, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-before3.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.nhn, styles.nhnLayout]}>
              <View style={styles.label8}>
                <Text style={styles.label9}>Số điện thoại học sinh</Text>
                <Text style={[styles.required, styles.requiredTypo]}>*</Text>
              </View>
              <View style={[styles.slotAny, styles.slotBorder]}>
                <View style={[styles.iconBefore1, styles.iconLayout]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text style={[styles.children12, styles.childrenTypo]}>-</Text>
                <View style={[styles.component1, styles.iconLayout]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
              <View style={styles.message}>
                <Text style={styles.children13}>Message content</Text>
              </View>
            </View>
            <View style={[styles.nhn1, styles.nhnLayout]}>
              <View style={styles.codePartsField}>
                <View style={styles.container41}>
                  <View style={styles.label8}>
                    <Text style={styles.label9}>Tên khác</Text>
                    <Text style={[styles.required, styles.requiredTypo]}>
                      *
                    </Text>
                  </View>
                  <View style={[styles.slotAny1, styles.slotBorder]}>
                    <View style={[styles.iconBefore1, styles.iconLayout]}>
                      <View style={[styles.slot, styles.slotPosition]} />
                      <Image
                        style={[styles.vectorIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                    </View>
                    <Text style={[styles.children14, styles.childrenTypo]} />
                    <View style={[styles.component1, styles.iconLayout]}>
                      <View style={[styles.slot, styles.slotPosition]} />
                      <Image
                        style={[styles.vectorIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.message}>
                    <Image
                      style={styles.icon1}
                      resizeMode="cover"
                      source={require("../assets/-icon.png")}
                    />
                    <Text style={[styles.children15, styles.requiredTypo]}>
                      Invalid message content
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.message}>
                <Text style={styles.children13}>Message content</Text>
              </View>
            </View>
            <View style={[styles.nhn2, styles.nhnLayout]}>
              <View style={styles.label8}>
                <Text style={styles.label9}>Email học sinh</Text>
                <Text style={[styles.required, styles.requiredTypo]}>*</Text>
              </View>
              <View style={[styles.slotAny, styles.slotBorder]}>
                <View style={[styles.iconBefore1, styles.iconLayout]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text style={[styles.children12, styles.childrenTypo]}>
                  abc123@gmail.com
                </Text>
                <View style={[styles.component1, styles.iconLayout]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
              <View style={styles.message}>
                <Text style={styles.children13}>Message content</Text>
              </View>
            </View>
            <View style={[styles.nhn3, styles.nhnLayout]}>
              <View style={styles.label8}>
                <Text style={styles.label9}>Họ và tên</Text>
                <Text style={[styles.required, styles.requiredTypo]}>*</Text>
              </View>
              <View style={[styles.slotAny, styles.slotBorder]}>
                <View style={[styles.iconBefore1, styles.iconLayout]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text style={[styles.children12, styles.childrenTypo]}>
                  Trịnh Hồng Nhung
                </Text>
                <View style={[styles.component1, styles.iconLayout]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
              <View style={styles.message}>
                <Text style={styles.children13}>Message content</Text>
              </View>
            </View>
            <View style={[styles.nhn4, styles.nhnLayout]}>
              <View style={styles.label8}>
                <Text style={styles.label9}>Email phụ huynh</Text>
                <Text style={[styles.required, styles.requiredTypo]}>*</Text>
              </View>
              <View style={[styles.slotAny, styles.slotBorder]}>
                <View style={[styles.iconBefore1, styles.iconLayout]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text style={[styles.children12, styles.childrenTypo]} />
                <View style={[styles.component1, styles.iconLayout]}>
                  <View style={[styles.slot, styles.slotPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
              <View style={styles.message}>
                <Text style={styles.children13}>Message content</Text>
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
    width: 430,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  slotPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  codeBorder: {
    borderStyle: "solid",
    flexDirection: "row",
  },
  label2Typo: {
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    fontSize: FontSize.update_size,
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
  buttonLayout: {
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
  childrenTypo1: {
    textAlign: "center",
    marginLeft: 4,
    fontFamily: FontFamily.update,
    fontWeight: "500",
    fontSize: FontSize.update_size,
  },
  iconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  tabsPosition: {
    width: 382,
    left: 24,
    position: "absolute",
  },
  lineLayout: {
    height: 2,
    bottom: 0,
    borderStyle: "solid",
  },
  labelTypo1: {
    zIndex: 0,
    fontFamily: FontFamily.update,
    fontWeight: "500",
  },
  linePosition: {
    zIndex: 1,
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
    display: "none",
    left: 24,
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
    position: "absolute",
  },
  thamBg: {
    backgroundColor: Color.eE2B8,
    flexDirection: "row",
  },
  borderPosition: {
    left: 0,
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
  borderBorder: {
    borderBottomWidth: 1,
    borderColor: Color.colorBorderInput,
  },
  thamPosition: {
    left: 108,
    position: "absolute",
  },
  nhnLayout: {
    height: 56,
    width: 334,
    left: 0,
    position: "absolute",
  },
  requiredTypo: {
    color: Color.colorTextDanger,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    textAlign: "left",
  },
  slotBorder: {
    padding: StyleVariable.space100,
    borderWidth: 2,
    alignSelf: "stretch",
    borderRadius: Border.br_10xs,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  childrenTypo: {
    height: 20,
    marginLeft: 6,
    fontFamily: FontFamily.input,
    lineHeight: 20,
    fontSize: FontSize.update_size,
    textAlign: "left",
    flex: 1,
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
    lineHeight: 20,
    textAlign: "left",
  },
  container1: {
    borderRightWidth: 1,
    paddingRight: StyleVariable.space200,
    marginLeft: 16,
    display: "none",
    borderColor: Color.colorBorderInput,
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
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
    top: 0,
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
    width: 430,
    left: 0,
    position: "absolute",
  },
  children: {
    color: Color.colorTextInverse,
    marginLeft: 4,
    lineHeight: 17,
    textAlign: "center",
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
    paddingHorizontal: StyleVariable.space150,
    borderRadius: Border.br_10xs,
    flexDirection: "row",
    top: 53,
    display: "none",
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
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  border: {
    borderRadius: Border.br_12xs,
    borderBottomWidth: 1,
    borderColor: Color.colorBorderInput,
    right: 0,
    display: "none",
    left: 0,
    position: "absolute",
  },
  label: {
    lineHeight: 25,
    textAlign: "center",
    fontSize: FontSize.tabs_size,
    color: Color.colorBackgroundBrandBoldDefault,
  },
  line: {
    right: 8,
    left: 8,
    borderRadius: Border.br_11xs,
    borderColor: Color.colorBackgroundBrandBoldDefault,
    borderWidth: 1,
    height: 2,
    bottom: 0,
    borderStyle: "solid",
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
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    fontSize: FontSize.update_size,
  },
  tab: {
    display: "none",
  },
  label3: {
    fontFamily: FontFamily.input,
    lineHeight: 25,
    textAlign: "center",
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
  },
  tabsWrapper: {
    height: 48,
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
    top: 0,
  },
  header: {
    top: 112,
    height: 85,
  },
  iconBefore1: {
    display: "none",
  },
  children2: {
    color: Color.colorTextDefault,
    marginLeft: 4,
    lineHeight: 17,
    textAlign: "center",
  },
  button: {
    backgroundColor: Color.colorBackgroundNeutralDefault,
    paddingHorizontal: StyleVariable.space150,
    borderRadius: Border.br_10xs,
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
    paddingHorizontal: StyleVariable.space150,
    borderRadius: Border.br_10xs,
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
    flexDirection: "row",
  },
  cellLabel5: {
    fontWeight: "300",
    fontFamily: FontFamily.tableRight,
    alignSelf: "stretch",
    color: Color.colorTextDefault,
    lineHeight: 20,
    fontSize: FontSize.update_size,
    textAlign: "left",
  },
  tableTree: {
    width: 108,
    top: 0,
  },
  tableTree1: {
    width: 234,
    top: 0,
  },
  niDungBngHcSinh: {
    left: 20,
    width: 342,
    height: 246,
    top: 10,
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
    overflow: "hidden",
    top: 0,
    height: 923,
  },
  title: {
    fontSize: FontSize.titleField_size,
    lineHeight: 32,
    color: Color.colorTextDefault,
    textAlign: "left",
  },
  actions: {
    bottom: 8,
    right: 0,
    display: "none",
  },
  mainContent: {
    width: 256,
    flexDirection: "row",
    top: 0,
  },
  children10: {
    marginLeft: 4,
    lineHeight: 17,
    textAlign: "center",
    color: Color.colorTextSubtle,
  },
  button4: {
    paddingHorizontal: StyleVariable.space150,
    borderRadius: Border.br_10xs,
    flexDirection: "row",
  },
  button5: {
    marginLeft: 4,
    backgroundColor: Color.colorBackgroundBrandBoldDefault,
    paddingHorizontal: StyleVariable.space150,
    borderRadius: Border.br_10xs,
    flexDirection: "row",
  },
  buttonGroup2: {
    top: 302,
    right: 0,
    flexDirection: "row",
    position: "absolute",
  },
  label9: {
    lineHeight: 16,
    fontFamily: FontFamily.update,
    fontWeight: "500",
    color: Color.colorTextSubtle,
    fontSize: FontSize.update_size,
    textAlign: "left",
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
  children12: {
    color: Color.colorIconDisabled,
    marginLeft: 6,
  },
  component1: {
    marginLeft: 6,
    display: "none",
  },
  slotAny: {
    backgroundColor: Color.colorBackgroundDisabled,
    borderColor: Color.colorBackgroundNeutralDefault,
  },
  children13: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.colorTextSubtlest,
    fontFamily: FontFamily.internalAtlassianNavigationSearchText,
    textAlign: "left",
    flex: 1,
  },
  message: {
    paddingTop: StyleVariable.space050,
    alignSelf: "stretch",
    display: "none",
    flexDirection: "row",
  },
  nhn: {
    top: 166,
  },
  children14: {
    marginLeft: 6,
    color: Color.colorTextSubtlest,
  },
  slotAny1: {
    borderColor: Color.colorBorderInput,
    backgroundColor: Color.colorTextInverse,
  },
  icon1: {
    width: 16,
    height: 16,
  },
  children15: {
    marginLeft: 4,
    flex: 1,
  },
  container41: {
    flex: 1,
  },
  codePartsField: {
    width: 333,
    flexDirection: "row",
  },
  nhn1: {
    top: 55,
  },
  nhn2: {
    top: 111,
  },
  nhn3: {
    top: 0,
  },
  nhn4: {
    top: 222,
  },
  buttonGroupParent: {
    right: 24,
    height: 334,
    width: 334,
    top: 10,
    position: "absolute",
  },
  khung: {
    top: 32,
    height: 368,
    borderRadius: Border.br_3xs,
    width: 382,
    backgroundColor: Color.colorTextInverse,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  niDungNhp: {
    top: 170,
    height: 400,
  },
  editStudent: {
    height: 923,
    width: "100%",
    flex: 1,
  },
});

export default EditStudent;
