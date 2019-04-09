
import React, { Component, PropTypes, } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    
    Image,
    Dimensions
} from 'react-native';
import {WebView} from 'react-native-webview';

const win = Dimensions.get('window');
class ChartWeb extends Component {
    constructor(props){
        super(props);

        
}
render() {
  return (
    <View style={{flex:1}}>
    <WebView
      originWhitelist={['*']}
      useWebKit={true}
      source={{html: '<html><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" /><style media="screen" type="text/css">#container {width:100%;height:100%;top:0;left:0;right:0;bottom:0;position:absolute;user-select: none;-webkit-user-select: none;}</style><head></head><script src="https://code.highcharts.com/highcharts.js"></script><div id="container" style="height: 400px"></div><script>const color = { Mon : "black",Tue : "black",	Wed : "black",Thu : "black",Fri : "black",Sat : "red",Sun : "black", };const colorNew = { 0 : "black",200 : "black",400 : "black",600 : "black",800 : "red",1000 : "black",};Highcharts.chart("container", {chart: {type: "areaspline"},xAxis: {categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],labels: {formatter () {return `<span style="color: ${color[this.value]}">${this.value}</span>`}}},yAxis: {labels: {formatter () {return `<span style="color: ${colorNew[this.value]}">${this.value}</span>`}}},plotOptions: {series: {color: "rgba(225,10,40,1)",fillColor: {linearGradient:[0, 100, 50, 500],stops: [[0, "rgba(235,7,38,0.4)"],[1, "rgba(0,0,0,0)"]]}}},series: [{data: [20, 550, 510, 800, 720,600,""] }]});</script></html>'}}
    />
    </View>
  );
}
}

var styles = StyleSheet.create({
    full: {
        flex:1,
        backgroundColor:'transparent'
    }
});

module.exports = ChartWeb;

endOnTick: true,minRange: 1,maxRange: 1,maxPadding: 0.10
source={{ html: '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" /><style media="screen" type="text/css">#container {width:100%;height:100%;top:0;left:0;right:0;bottom:0;position:absolute;user-select: none;-webkit-user-select: none;}</style><script src="https://code.highcharts.com/highcharts.js"></script></head><div id="graph" style="height: 400px"></div><script> const color = { Mon : "#fff",Tue : "#fff",	Wed : "#fff",Thu : "#fff",Fri : "#fff",Sat : "red",Sun : "#fff", };const colorNew = { 0 : "#fff",200 : "#fff",400 : "#fff",600 : "#fff",800 : "red",1000 : "#fff",};Highcharts.chart("graph", {chart: { type: "areaspline",backgroundColor: "#3d3e4d",className: "charts" },title: { text: ""},xAxis: {categories: ["Mon","Tue","Wed","Thu","Fri", "Sat","Sun"],gridLineWidth: 0,gridLineColor: "#000", gridZIndex: 0,showLastLabel: true,labels: {formatter() {return `<span style="color: ${color[this.value]}">${this.value}</span>`;}},endOnTick: true,minRange: 1, maxRange: 1,maxPadding: 0.10},yAxis: {title: {text: ""},labels: {formatter() {return `<span style="color: ${colorNew[this.value]}">${this.value}</span>`;}}},annotations: [{labelOptions: {crop: true,style: {fontSize: "0.8em", textOutline: "1px white"}},labels: [ {point: {xAxis: 0,yAxis: 0,x: 2,y: 925},text: "bngfnf"}]}],credits: {enabled: false},legend: {enabled: false},plotOptions: {series: {color: "red",},line: {dataLabels: {filter: {value: 2100}}},areaspline: {fillColor: {linearGradient: {x1: 0,y1: 0,x2: 0,y2: 1},stops: [[0, "rgba(235,7,38,0.4)"],[1, "rgba(0,0,0,0)"],]},marker: {radius: 2},lineWidth: 1,states: {hover: {lineWidth: 1}},threshold: 0}},series: [{lineColor: "#f70323",lineWidth: 1.5,marker: {enabled: false},type: "areaspline",data: [20, 550, 510, 800, 720,600,""]}],});</script></html>' }}