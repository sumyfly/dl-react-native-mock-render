var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _VirtualizedSectionList=require('./VirtualizedSectionList');var _VirtualizedSectionList2=_interopRequireDefault(_VirtualizedSectionList);
var _ScrollView=require('./ScrollView');var _ScrollView2=_interopRequireDefault(_ScrollView);
var _View=require('./View');var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}





var SCROLLVIEW_REF='sectionlistscroll';

var SectionList=(0,_createReactClass2['default'])({
displayName:'SectionList',
propTypes:_extends({},
_VirtualizedSectionList2['default'].propTypes,{

/**
     * The actual data to render, akin to the `data` prop in [`<FlatList>`](/react-native/docs/flatlist.html).
     *
     * General shape:
     *
     *     sections: $ReadOnlyArray<{
     *       data: $ReadOnlyArray<SectionItem>,
     *       renderItem?: ({item: SectionItem, ...}) => ?React.Element<*>,
     *       ItemSeparatorComponent?: ?ReactClass<{highlighted: boolean, ...}>,
     *     }>
     */
sections:_propTypes2['default'].array.isRequired,

/**
     * Default renderer for every item in every section. Can be over-ridden on a per-section basis.
     */
renderItem:_propTypes2['default'].func,

/**
     * Rendered in between each item, but not at the top or bottom. By default, `highlighted`,
     * `section`, and `[leading/trailing][Item/Separator]` props are provided. `renderItem` provides
     * `separators.highlight`/`unhighlight` which will update the `highlighted` prop, but you can also
     * add custom props with `separators.updateProps`.
     */
ItemSeparatorComponent:_propTypes2['default'].element,

/**
     * Rendered at the very beginning of the list. Can be a React Component Class, a render function, or
     * a rendered element.
     */
ListHeaderComponent:_propTypes2['default'].oneOfType([
_propTypes2['default'].element,
_propTypes2['default'].func]),


/**
     * Rendered when the list is empty. Can be a React Component Class, a render function, or
     * a rendered element.
     */
ListEmptyComponent:_propTypes2['default'].oneOfType([
_propTypes2['default'].element,
_propTypes2['default'].func]),


/**
     * Rendered at the very end of the list. Can be a React Component Class, a render function, or
     * a rendered element.
     */
ListFooterComponent:_propTypes2['default'].oneOfType([
_propTypes2['default'].element,
_propTypes2['default'].func]),


/**
     * Rendered at the top and bottom of each section (note this is different from
     * `ItemSeparatorComponent` which is only rendered between items). These are intended to separate
     * sections from the headers above and below and typically have the same highlight response as
     * `ItemSeparatorComponent`. Also receives `highlighted`, `[leading/trailing][Item/Separator]`,
     * and any custom props from `separators.updateProps`.
     */
SectionSeparatorComponent:_propTypes2['default'].element,

/**
     * A marker property for telling the list to re-render (since it implements `PureComponent`). If
     * any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the
     * `data` prop, stick it here and treat it immutably.
     */
extraData:_propTypes2['default'].any,

/**
     * How many items to render in the initial batch. This should be enough to fill the screen but not
     * much more. Note these items will never be unmounted as part of the windowed rendering in order
     * to improve perceived performance of scroll-to-top actions.
     */
initialNumToRender:_propTypes2['default'].number,

/**
     * Reverses the direction of scroll. Uses scale transforms of -1.
     */
inverted:_propTypes2['default'].bool,

/**
     * Used to extract a unique key for a given item at the specified index. Key is used for caching
     * and as the react key to track item re-ordering. The default extractor checks item.key, then
     * falls back to using the index, like react does. Note that this sets keys for each item, but
     * each overall section still needs its own key.
     */
keyExtractor:_propTypes2['default'].func,

/**
     * Called once when the scroll position gets within `onEndReachedThreshold` of the rendered
     * content.
     */
onEndReached:_propTypes2['default'].func,

/**
     * How far from the end (in units of visible length of the list) the bottom edge of the
     * list must be from the end of the content to trigger the `onEndReached` callback.
     * Thus a value of 0.5 will trigger `onEndReached` when the end of the content is
     * within half the visible length of the list.
     */
onEndReachedThreshold:_propTypes2['default'].number,

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
refreshing:_propTypes2['default'].bool,

/**
     * Note: may have bugs (missing content) in some circumstances - use at your own risk.
     *
     * This may improve scroll performance for large lists.
     */
removeClippedSubviews:_propTypes2['default'].bool,

/**
     * Rendered at the top of each section. These stick to the top of the `ScrollView` by default on
     * iOS. See `stickySectionHeadersEnabled`.
     */
renderSectionHeader:_propTypes2['default'].func,

/**
     * Rendered at the bottom of each section.
     */
renderSectionFooter:_propTypes2['default'].func,

/**
     * Makes section headers stick to the top of the screen until the next one pushes it off. Only
     * enabled by default on iOS because that is the platform standard there.
     */
stickySectionHeadersEnabled:_propTypes2['default'].bool}),


/**
   * Scrolls to the item at the specified `sectionIndex` and `itemIndex` (within the section)
   * positioned in the viewable area such that `viewPosition` 0 places it at the top (and may be
   * covered by a sticky header), 1 at the bottom, and 0.5 centered in the middle. `viewOffset` is a
   * fixed number of pixels to offset the final target position, e.g. to compensate for sticky
   * headers.
   *
   * Note: cannot scroll to locations outside the render window without specifying the
   * `getItemLayout` prop.
   */
scrollToLocation:function(){function scrollToLocation(animated,itemIndex,sectionIndex,viewOffset,viewPosition){
this.getScrollResponder().scrollResponderScrollTo(0,viewPosition||0);
}return scrollToLocation;}(),

/**
   * Tells the list an interaction has occurred, which should trigger viewability calculations, e.g.
   * if `waitForInteractions` is true and the user has not scrolled. This is typically called by
   * taps on items or by navigation actions.
   */
recordInteraction:function(){function recordInteraction(){

}return recordInteraction;}(),

/**
   * Displays the scroll indicators momentarily.
   *
   * @platform ios
   */
flashScrollIndicators:function(){function flashScrollIndicators(){

}return flashScrollIndicators;}(),

/**
   * Provides a handle to the underlying scroll responder to support operations
   * such as scrollTo.
   */
getScrollResponder:function(){function getScrollResponder(){
return this.refs[SCROLLVIEW_REF]&&
this.refs[SCROLLVIEW_REF].getScrollResponder&&
this.refs[SCROLLVIEW_REF].getScrollResponder();
}return getScrollResponder;}(),

getScrollableNode:function(){function getScrollableNode(){

}return getScrollableNode;}(),

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
return(
_react2['default'].createElement(_ScrollView2['default'],null,
this.props.sections.map(function(section,index){
var renderFn=section.renderItem?section.renderItem:_this.props.renderItem;
return(
_react2['default'].createElement(_View2['default'],{key:'section-'+index+'-'+section.title},
_this.props.renderSectionHeader({
section:section}),

section.data.map(function(item,index){
return renderFn({
item:item,
index:index,
separators:{
highlight:function(){function highlight(){}return highlight;}(),
unhighlight:function(){function unhighlight(){}return unhighlight;}(),
updateProps:function(){function updateProps(){}return updateProps;}()}});


})));


})));


}return _renderChildren;}(),

render:function(){function render(){
return _react2['default'].createElement('react-native-mock',null,this._renderChildren());
}return render;}()});


module.exports=SectionList;