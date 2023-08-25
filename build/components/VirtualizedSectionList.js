var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _View=require('./View');var _View2=_interopRequireDefault(_View);
var _ScrollView=require('./ScrollView');var _ScrollView2=_interopRequireDefault(_ScrollView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var SCROLLVIEW_REF='virtualizedsectionviewscroll';

var VirtualizedSectionList=(0,_createReactClass2['default'])({
displayName:'VirtualizedSectionList',
propTypes:_extends({},
_View2['default'].propTypes,{

/**
     * The data for rendering items in this section.
     */
data:_propTypes2['default'].array,

/**
     * Optional key to keep track of section re-ordering. If you don't plan on re-ordering sections,
     * the array index will be used by default.
     */
key:_propTypes2['default'].string,

// Optional props will override list-wide props just for this section.
renderItem:_propTypes2['default'].func,

ItemSeparatorComponent:_propTypes2['default'].oneOfType([
_propTypes2['default'].element,
_propTypes2['default'].func]),


keyExtractor:_propTypes2['default'].func,

sections:_propTypes2['default'].array.isRequired,

/**
     * Rendered after the last item in the last section.
     */
ListFooterComponent:_propTypes2['default'].oneOfType([
_propTypes2['default'].element,
_propTypes2['default'].func]),


/**
     * Rendered at the very beginning of the list.
     */
ListHeaderComponent:_propTypes2['default'].oneOfType([
_propTypes2['default'].element,
_propTypes2['default'].func]),


/**
     * Rendered at the top of each section.
     */
renderSectionHeader:_propTypes2['default'].func,

/**
     * Rendered at the bottom of each section.
     */
renderSectionFooter:_propTypes2['default'].func,

/**
     * Rendered at the bottom of every Section, except the very last one, in place of the normal
     * ItemSeparatorComponent.
     */
SectionSeparatorComponent:_propTypes2['default'].element,


onEndReached:_propTypes2['default'].func,

/**
     * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make
     * sure to also set the `refreshing` prop correctly.
     */
onRefresh:_propTypes2['default'].func,

/**
     * Called when the viewability of rows changes, as defined by the
     * `viewabilityConfig` prop.
     */
onViewableItemsChanged:_propTypes2['default'].func,

/**
     * Set this true while waiting for new data from a refresh.
     */
refreshing:_propTypes2['default'].bool}),


scrollToLocation:function(){function scrollToLocation(animated,itemIndex,sectionIndex,viewPosition){
this.getScrollResponder().scrollResponderScrollTo(0,viewPosition||0);
}return scrollToLocation;}(),

/**
   * Provides a handle to the underlying scroll responder to support operations
   * such as scrollTo.
   */
getScrollResponder:function(){function getScrollResponder(){
return this.refs[SCROLLVIEW_REF]&&
this.refs[SCROLLVIEW_REF].getScrollResponder&&
this.refs[SCROLLVIEW_REF].getScrollResponder();
}return getScrollResponder;}(),

setNativeProps:function(){function setNativeProps(props){
this.refs[SCROLLVIEW_REF].setNativeProps(props);
}return setNativeProps;}(),

getDefaultProps:function(){function getDefaultProps(){
return{
renderScrollComponent:function(){function renderScrollComponent(props){return _react2['default'].createElement(_ScrollView2['default'],props);}return renderScrollComponent;}()};

}return getDefaultProps;}(),

getInnerViewNode:function(){function getInnerViewNode(){
return this.refs[SCROLLVIEW_REF].getInnerViewNode();
}return getInnerViewNode;}(),

_renderChildren:function(){function _renderChildren(){var _this=this;
return this.props.data.map(function(item,index){return(
_this.props.renderItem({
item:item,
index:index,
separators:{
highlight:function(){function highlight(){}return highlight;}(),
unhighlight:function(){function unhighlight(){}return unhighlight;}(),
updateProps:function(){function updateProps(){}return updateProps;}()}}));});



}return _renderChildren;}(),

render:function(){function render(){
return _react2['default'].createElement('react-native-mock',null,this._renderChildren());
}return render;}()});


module.exports=VirtualizedSectionList;