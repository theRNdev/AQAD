import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComp from '../../../Components/HeaderComp';
import LogoutModal from '../../../Components/LogoutModal';
import RenderUserItem from '../../../Components/RenderUserItem';
import WrapperContainer from '../../../Components/WrapperContainer';
import langConstants from '../../../constants/langConstants';
import { reauthenticateAndDeleteUser } from '../../../Firebase/FirebaseActions';
import { daleteUserData } from '../../../redux/slices/userDataSlice';
import { deleteUser, getData } from '../../../SQLite/SQLiteDB';
import colors from '../../../styles/colors';
import { width } from '../../../styles/responsiveSize';
import {
  getMonthlyUserCounts,
  getUniqID,
  showError,
  showInfo,
} from '../../../utils/helperFunctions';
import { styles } from './styles';
export default function Dashboard() {
  const {t} = useTranslation();
  const [isLoading, setisLoading] = useState(false);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const {userData} = useSelector(state => state.userData);
  const [userList, setUserList] = useState([]);
  const [isVisible, setisVisible] = useState(false);
  const [SelectedItem, setSelectedItem] = useState({})
  useEffect(() => {
    getData(userData?.uid)
      .then(data => {
        setUserList(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [isFocused]);

  const onDeleteUser = async item => {
    if (userData?.uid == item?.uid) {
      try {
        setisLoading(true);
        let res = await reauthenticateAndDeleteUser(
          item.email,
          item.password,
          dispatch,
        );
        if (res?.success) {
          await deleteUser(item?.uid);
          dispatch(daleteUserData());
          setisLoading(false);
        } else {
          await deleteUser(item?.uid);
          setisLoading(false);
        }
      } catch (error) {
        showError(error);
        setisLoading(false);
      }
    } else {
      showInfo(t(langConstants?.YOU_CANNOT_DELETE));
    }
  };
  return (
    <WrapperContainer isLoading={isLoading}>
      <HeaderComp />
      <View style={styles.barView}>
        <View>
          <Text style={styles.matrixText}>
            {t(langConstants?.USERS_MATRIX)}
          </Text>
        </View>
        <BarChart
          data={getMonthlyUserCounts(userList)}
          dashWidth={5}
          width={width - 80}
          yAxisExtraHeight={34}
          onStartReached={() => {}}
          spacing={16}
          initialSpacing={0}
          yAxisLabelSuffix=" U"
          barWidth={38}
          yAxisThickness={0}
          xAxisThickness={1}
          barBorderRadius={2.76}
          backgroundColor={'#fff'}
          frontColor={colors.theme}
          isAnimated
          animationDuration={500}
          endSpacing={0}
          stepHeight={28}
          yAxisTextStyle={styles.yLabelStyle}
          xAxisLabelTextStyle={styles.xLabelStyle}
        />
      </View>
      <View style={styles.userCount}>
        <Text style={styles.userText}>
          {t(langConstants?.USER_SIGN_UP)} ({userList?.length})
        </Text>
      </View>
      <FlatList
        data={userList}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => getUniqID()}
        contentContainerStyle={{paddingHorizontal: 24}}
        renderItem={({item, index}) => {
          return (
            <RenderUserItem
            index={index}
              item={item}
              onPress={() => {
                setisVisible(true)
                setSelectedItem(item)
                
              }}
            />
          );
        }}
      />
      <LogoutModal
        isVisible={isVisible}
        isDelete
        onCancle={() => {
          setisVisible(false);
        }}
        onPress={() => {
          setisVisible(false);
          setTimeout(() => {
            onDeleteUser(SelectedItem);
          }, 500);
        }}
      />
    </WrapperContainer>
  );
}
