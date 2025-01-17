import React, {useEffect, useState, useRef} from 'react';
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../../components/Header/CustomHeader';
import CustomButtonhere from '../../../components/Button/CustomButton';
import CustomTopTabs from '../../../components/TopTabs/CustomTopTabs';
import AccountDetail from '../../../components/CreateAcount/AcountDetail';
import VehicleDetail from '../../../components/CreateAcount/VehicleDetail';
import PaymentDetail from '../../../components/CreateAcount/PaymentDetail';
import DocumentsDetail from '../../../components/CreateAcount/DocumentsDetail';

////////////////////redux////////////
import {useSelector, useDispatch} from 'react-redux';
import { setNavPlace,setTopTabDocument,setTopTabDriver,setTopTabPayment,setTopTabVehicle } from '../../../redux/actions';

////////////////api////////////////
import axios from 'axios';
import {BASE_URL} from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob';

/////////////////////height width pakage/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';
import Colors from '../../../utills/Colors';
import Inputstyles from '../../../styles/GlobalStyles/Inputstyles';
import TopTabstyles from '../../../styles/GlobalStyles/TopTabstyles';

/////////////////app images///////////
import {appImages} from '../../../constant/images';

const CreateAccount = ({navigation, route}) => {
  console.log('previous data:', route.params);

  ////////////prevous data States///////////////
  const [predata] = useState(route.params);

  /////////////////////////redux///////////////////

  const {hoteltype, phone_no,top_tab_driver,top_tab_document,top_tab_payment,top_tab_vehicle } =
    useSelector(state => state.userReducer);
  const dispatch = useDispatch();


  /////////////top tab status states/////////////
  const [Driver, setDriver] = useState(true);
  const [Vehicle, setVehicle] = useState(false);
  const [Payment, setPayment] = useState(false);
  const [Documents, setDocuments] = useState(false);

  //Modal States
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {}, []);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'black'} barStyle="light-content" />
        <CustomHeader
          headerlabel={'Create Account'}
          iconPress={() => {
            navigation.goBack();
          }}
          icon={'chevron-back'}
          // searchicon={'search'}
          //type={'crypto'}
          onpresseacrh={() => onSearch()}
        />
        <View style={[TopTabstyles.TopTabView,{paddingHorizontal:wp(12)}]}>
            <CustomTopTabs title={'Transport Detail'} width={'30%'} state={!top_tab_driver} />
            <CustomTopTabs title={'Payment Details'} width={'30%'} state={!top_tab_vehicle} />
        </View>
        {top_tab_driver  ? (
 <AccountDetail/>
        ) : top_tab_payment ? (
    <PaymentDetail
    nav={navigation}
    />
        ) 
        : null}


      </SafeAreaView>
    </ScrollView>
  );
};

export default CreateAccount;
