import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedButton: 'rev', selectedTab: 'home'};
        this.selectionOnPress = this.selectionOnPress.bind(this);
        this.selectionTabOnPress = this.selectionTabOnPress.bind(this);
    }
    selectionOnPress(userType) {
        this.setState({ selectedButton: userType });
    }
    selectionTabOnPress(userType) {
        this.setState({ selectedTab: userType });
    }
    render() {
        let data1 = [{
            value: 'week 1'
        }, {
            value: 'week 2'
        }];
        let data = [{
            value: 'Jan',
        }, {
            value: 'Feb',
        }, {
            value: 'Mar',
        },
            , {
            value: 'Apr',
        },
            , {
            value: 'May',
        },
            , {
            value: 'Jun',
        },
            , {
            value: 'Jul',
        },
            , {
            value: 'Aug',
        },
            , {
            value: 'Sept',
        }];
        return (
            <View style={styles.container1}>
                <ScrollView style={{ marginBottom: wp('6%') }}>
                    <View style={{ width: wp('100%'), height: hp('40%'), }}>
                        <Image source={require('./img/background.png')} style={styles.imageS} resizeMode="cover" />
                    </View>
                    <View style={{ position: 'absolute', top: hp('5%'), right: wp('6%') }}>
                        <View style={{ width: wp('8.5%'), height: wp('9%') }}>
                            <Image source={require('./img/share.png')} style={styles.imageS} resizeMode="cover" />
                        </View>
                    </View>
                    <View style={{ position: 'absolute', top: hp('5%'), left: wp('6%') }}>
                        <View style={{ width: wp('8.5%'), height: wp('8.5%') }}>
                            <Image source={require('./img/barcode.png')} style={styles.imageS} resizeMode="cover" />
                        </View>
                    </View>
                    <View style={{ position: 'absolute', top: hp('28%'), alignSelf: 'center' }}>
                        <View style={{ width: wp('40%'), height: wp('40%') }}>
                            <Image source={require('./img/user.png')} style={styles.imageS} resizeMode="cover" />
                        </View>
                    </View>
                    <View style={{ position: 'absolute', top: hp('42%'), right: wp('31%') }}>
                        <View style={{ width: wp('12%'), height: wp('12%'), backgroundColor: '#fff', borderRadius: wp('6%'), alignSelf: 'center', flex: 1, justifyContent: 'center' }}>
                            <View style={{ width: wp('8%'), height: wp('8%'), alignSelf: 'center' }}>
                                <Image source={require('./img/insta.png')} style={[styles.imageS,]} resizeMode="cover" />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: hp('10%') }}>
                        <Text style={{ fontSize: wp('6%'), color: '#fff', fontWeight: '700', alignSelf: 'center', marginTop: wp('2%') }}>Anthony Martial</Text>
                        <Text style={[styles.headerText, { marginTop: wp('1.5%'), color: '#AEAEAE' }]}>Barber with 9 Years of Experience</Text>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: wp('1.5%') }}>
                            <View style={{ width: wp('4%'), height: wp('4%'), marginLeft: wp('1%') }}>
                                <Image source={require('./img/star1.png')} style={styles.imageS} resizeMode="cover" />
                            </View>
                            <View style={{ width: wp('4%'), height: wp('4%'), marginLeft: wp('1%') }}>
                                <Image source={require('./img/star1.png')} style={styles.imageS} resizeMode="cover" />
                            </View>
                            <View style={{ width: wp('4%'), height: wp('4%'), marginLeft: wp('1%') }}>
                                <Image source={require('./img/star1.png')} style={styles.imageS} resizeMode="cover" />
                            </View>
                            <View style={{ width: wp('4%'), height: wp('4%'), marginLeft: wp('1%') }}>
                                <Image source={require('./img/star1.png')} style={styles.imageS} resizeMode="cover" />
                            </View>
                            <View style={{ width: wp('4%'), height: wp('4%'), marginLeft: wp('1%') }}>
                                <Image source={require('./img/star-final.png')} style={styles.imageS} resizeMode="cover" />
                            </View>
                            <Text style={[styles.headerText, { marginLeft: wp('1%'), color: '#AEAEAE' }]}>(17 Reviews)</Text>
                        </View>
                        <Button
                            buttonStyle={[styles.buttonstyle,]}
                            title="View Profile"
                            titleStyle={{ fontWeight: 'bold' }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 3, borderBottomWidth: 3, borderColor: '#3D3E4D', margin: wp('2%'), marginTop: wp('4%'), marginBottom: 0 }}>
                        <TouchableOpacity style={{ flexDirection: 'column',borderBottomWidth:this.state.selectedButton === "rev"?2:0, borderColor:'#71cb30', paddingBottom:hp('1%') }}
                            onPress={() => this.selectionOnPress("rev")}>
                            <View style={{ width: wp('12%'), height: wp('12%'), backgroundColor: this.state.selectedButton === "rev"
                                    ? "#304032"
                                    : "#343746", borderRadius: wp('6%'), alignSelf: 'center', flex: 1, justifyContent: 'center' }}>
                                <View style={{ width: wp('6%'), height: wp('6%'), alignSelf: 'center' }}>
                                    <Image source={this.state.selectedButton === "rev"
                                        ? require("./img/cashgreen.png")
                                        : require("./img/cash.png")} style={[styles.imageS,]} resizeMode="cover" />
                                </View>
                            </View>
                            <Text style={[styles.container2text, {
                                color: this.state.selectedButton === "rev"
                                    ? "#71cb30"
                                    : "#AEAEAE"
                            }]}>Revenue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'column' ,borderBottomWidth:this.state.selectedButton === "client"?2:0, borderColor:'#71cb30', paddingBottom:hp('1%')}}
                            onPress={() => this.selectionOnPress("client")}>
                            <View style={{ width: wp('12%'), height: wp('12%'), backgroundColor: this.state.selectedButton === "client"
                                    ? "#304032"
                                    : "#343746", borderRadius: wp('6%'), alignSelf: 'center', flex: 1, justifyContent: 'center' }}>
                                <View style={{ width: wp('7.5%'), height: wp('6%'), alignSelf: 'center' }}>
                                    <Image source={this.state.selectedButton === "client"
                                        ? require("./img/clientgreen.png")
                                        : require("./img/client.png")} style={[styles.imageS,]} resizeMode="cover" />
                                </View>
                            </View>
                            <Text style={[styles.container2text, {
                                color: this.state.selectedButton === "client"
                                    ? "#71cb30"
                                    : "#AEAEAE"
                            }]} >Clients</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'column',borderBottomWidth:this.state.selectedButton === "noti"?2:0, borderColor:'#71cb30', paddingBottom:hp('1%') }}
                            onPress={() => this.selectionOnPress("noti")}>
                            <View style={{ width: wp('12%'), height: wp('12%'),backgroundColor: this.state.selectedButton === "noti"
                                    ? "#304032"
                                    : "#343746", borderRadius: wp('6%'), alignSelf: 'center', flex: 1, justifyContent: 'center' }}>
                                <View style={{ width: wp('6%'), height: wp('6%'), alignSelf: 'center' }}>
                                    <Image source={this.state.selectedButton === "noti"
                                        ? require("./img/notificationgreen.png")
                                        : require("./img/notification.png")} style={[styles.imageS,]} resizeMode="cover" />
                                </View>
                            </View>
                            <Text style={[styles.container2text, {
                                color: this.state.selectedButton === "noti"
                                    ? "#71cb30"
                                    : "#AEAEAE"
                            }]} >Notification</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: hp('1.5%'), marginLeft: wp('10%'), }}>
                        <View style={{ width: wp('17%'), marginRight: wp('3%') }}>
                            <Dropdown
                                textColor="#FFF"
                                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                dropdownPosition={0}
                                label=''
                                data={data}
                                value={data[0].value}
                                baseColor={'#fff'}
                            />
                        </View>
                        <View style={{ width: wp('20%') }}>
                            <Dropdown
                                textColor="#FFF"
                                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                dropdownPosition={0}
                                label=''
                                data={data1}
                                value={data1[0].value}
                                baseColor={'#fff'}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: hp('50%'), justifyContent: 'space-around', backgroundColor: '#3d3e4d' }}>
                        <WebView
                            originWhitelist={['*']}
                            useWebKit={true}
                            style={{ backgroundColor: 'rgba (0,0,0,0)' }}
                            //contentInset={{top: 30, left: 0, bottom: 0, right: 0}}
                            source={{ html: '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" /><style media="screen" type="text/css">#graph {width:100%;height:100%;top:0;left:0;right:0;bottom:0;position:absolute;user-select: none;-webkit-user-select: none;background-color: "#3d3e4d"}</style><script src="https://code.highcharts.com/highcharts.js"></script></head><div id="graph" style="height: 300px"></div><script> const color = { Mon : "#fff",Tue : "#fff",	Wed : "#fff",Thu : "#fff",Fri : "#fff",Sat : "red",Sun : "#fff", };const colorNew = { 0 : "#fff",200 : "#fff",400 : "#fff",600 : "#fff",800 : "red",1000 : "#fff",};Highcharts.chart("graph", {chart: { type: "areaspline",backgroundColor: "#3d3e4d",className: "charts" },title: { text: ""},xAxis: {categories: ["Mon","Tue","Wed","Thu","Fri", "Sat","Sun"],gridLineWidth: 0,gridLineColor: "#000", gridZIndex: 0,showLastLabel: true,labels: {formatter() {return `<span style="color: ${color[this.value]}">${this.value}</span>`;}},endOnTick: true,minRange: 1, maxRange: 1,maxPadding: 0.10},yAxis: {title: {text: ""},gridLineWidth: 0,gridLineColor: "#000", gridZIndex: 0,showLastLabel: true,labels: {formatter() {return `<span style="color: ${colorNew[this.value]}">${this.value}</span>`;}}},annotations: [{labelOptions: {crop: true,style: {fontSize: "0.8em", textOutline: "1px white"}},labels: [ {point: {xAxis: 0,yAxis: 0,x: 2,y: 925},text: "bngfnf"}]}],credits: {enabled: false},legend: {enabled: false},plotOptions: {series: {color: "red",},line: {dataLabels: {filter: {value: 2100}}},areaspline: {fillColor: {linearGradient: {x1: 0,y1: 0,x2: 0,y2: 1},stops: [[0, "rgba(235,7,38,0.4)"],[1, "rgba(0,0,0,0)"],]},marker: {radius: 2},lineWidth: 1,states: {hover: {lineWidth: 1}},threshold: 0}},series: [{lineColor: "#f70323",lineWidth: 1.5,marker: {enabled: false},type: "areaspline",data: [20, 550, 510, 800, 720,600,""]}],});</script></html>' }}
                        />
                    </View>
                    <View style={styles.container2}>
                        <View style={[styles.container2a, { marginRight: wp('12%') }]}>
                            <View style={styles.container2a1}>
                                <Image source={require('./img/client2.png')} style={styles.imageS} resizeMode="cover" />
                            </View>
                            <View style={styles.container2b}>
                                <Text style={[styles.container2text, { fontSize: wp('3%'), marginBottom: wp('1%'), color: '#AEAEAE' }]}>CLIENTS</Text>
                                <Text style={[styles.container2textA, { color: '#fff' }]}>245</Text>
                            </View>
                        </View>
                        <View style={[styles.container2a, { marginRight: wp('12%') }]}>
                            <View style={styles.container2a1}>
                                <Image source={require('./img/cancel.png')} style={styles.imageS} resizeMode="cover" />
                            </View>
                            <View style={styles.container2b}>
                                <Text style={[styles.container2text, { fontSize: wp('3%'), color: '#AEAEAE' }]}>CANCEL</Text>
                                <Text style={[styles.container2textA, { fontWeight: '900', color: '#fff' }]}>11</Text>
                            </View>
                        </View>
                        <View style={styles.container2a}>
                            <View style={styles.container2a1}>
                                <Image source={require('./img/total-tip.png')} style={styles.imageS} resizeMode="cover" />
                            </View>
                            <View style={styles.container2b}>
                                <Text style={[styles.container2text, { fontSize: wp('3%'), color: '#AEAEAE' }]}>TOTAL TIPS</Text>
                                <Text style={[styles.container2textA, { fontWeight: '900', color: '#fff' }]}>$400.00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.container2,]}>
                        <View style={[styles.container2a, { marginRight: wp('33%') }]}>
                            <View style={styles.container2a1}>
                                <Image source={require('./img/money.png')} style={styles.imageS} resizeMode="cover" />
                            </View>
                            <View style={styles.container2b}>
                                <Text style={[styles.container2text, { fontSize: wp('3%'), color: '#AEAEAE' }]}>TOTAL REVENUE</Text>
                                <Text style={[styles.container2textA, { fontWeight: '900', color: '#fff' }]}>$2650.00</Text>
                            </View>
                        </View>
                        <View style={{alignSelf:'flex-end'}}>
                        <Button
                            buttonStyle={[styles.buttonstyle1,]}
                            title="Cashout"
                            titleStyle={{ color: '#71cb30', fontSize: wp('3.5%') }}
                        />
                        </View>
                    </View>
                </ScrollView>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#3D3E4D', padding: wp('4%'), }}>
                    <TouchableOpacity style={styles.container}
                    onPress={() => this.selectionTabOnPress("cal") } >
                        <View style={styles.Bcontainer}>
                            <Image source={require('./img/calender.png')} style={styles.imageS} resizeMode="cover" />
                        </View>
                        <Text style={{ fontSize: wp('2.5%'), color: this.state.selectedTab === "cal"
                                    ? "red"
                                    : "#AEAEAE" }}>Calendar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container}
                    onPress={() => this.selectionTabOnPress("home") }>
                        <View style={styles.Bcontainer}>
                            <Image source={require('./img/home.png')} style={styles.imageS} resizeMode="cover" />
                        </View>
                        <Text style={{ fontSize: wp('2.5%'), color: this.state.selectedTab === "home"
                                    ? "red"
                                    : "#AEAEAE" }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container}
                    onPress={() => this.selectionTabOnPress("review") }>
                        <View style={styles.Bcontainer}>
                            <Image source={require('./img/review.png')} style={styles.imageS} resizeMode="cover" />
                        </View>
                        <Text style={{ fontSize: wp('2.5%'), color: this.state.selectedTab === "review"
                                    ? "red"
                                    : "#AEAEAE"}}>Review</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container}
                    onPress={() => this.selectionTabOnPress("sett") }>
                        <View style={styles.Bcontainer}>
                            <Image source={require('./img/setting.png')} style={styles.imageS} resizeMode="cover" />
                        </View>
                        <Text style={{ fontSize: wp('2.5%'), color: this.state.selectedTab === "sett"
                                    ? "red"
                                    : "#AEAEAE" }}>Setting</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#272839'
    },
    container: {
        flexDirection: 'column'
    },
    container2: {
        flexDirection: 'row',
        width: wp('90%'),
        //justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: wp('6%'),
        // marginLeft: wp('2%'),
        // marginRight: wp('2%'),
       // backgroundColor:'pink'
    },
    container2a: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    container2a1: {
        width: wp('6%'), height: wp('6%')
    },
    container2b: {
        flexDirection: 'column',
        marginLeft: wp('2%'),
    },
    container2text: {
        color: '#3D3E4D'
    },
    container2textA: {
        color: '#fff'
    },
    imageS: {
        flex: 1, height: undefined,
        width: undefined,
    },
    headerText: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: wp('4%')
    },
    buttonstyle: {
        margin: hp('3%'),
        width: wp('40%'),
        height: hp('5.5%'),
        backgroundColor: 'red',
        borderRadius: 24,
        alignSelf: 'center',
    },
    buttonstyle1: {
        width: wp('25%'),
        height: hp('4.5%'),
        backgroundColor: '#272839',
        borderRadius: 24,
        borderWidth: wp('0.2'),
        borderColor: '#71cb30',
        alignSelf: 'center',
    },
    Bcontainer: {
        width: wp('6%'), height: wp('6%'), alignSelf: 'center'
    },
})