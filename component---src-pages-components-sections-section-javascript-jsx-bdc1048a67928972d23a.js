(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{ctk7:function(e,t,o){"use strict";var n=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(o("pVnL")),a=n(o("QILm")),i=n(o("lwsE")),l=n(o("W8MJ")),s=n(o("a1gu")),u=n(o("Nsbk")),p=n(o("7W2i")),c=n(o("lSNA")),d=n(o("q1tI")),h=(n(o("17x9")),n(o("2W6z")),n(o("TSYQ"))),m=(o("j4Xf"),n(o("yqKb"))),f=n(o("Hk+Y")),T=o("gasH"),v=n(o("dfx+")),y=n(o("0cs1")),g=function(e){return{popper:{zIndex:e.zIndex.tooltip,opacity:.9,pointerEvents:"none"},popperInteractive:{pointerEvents:"auto"},tooltip:{backgroundColor:e.palette.grey[700],borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(e.typography.round(1.4),"em"),maxWidth:300},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(e.typography.round(16/14),"em")},tooltipPlacementLeft:(0,c.default)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:(0,c.default)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:(0,c.default)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:(0,c.default)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}};t.styles=g;var b=function(e){function t(e){var o;return(0,i.default)(this,t),(o=(0,s.default)(this,(0,u.default)(t).call(this))).ignoreNonTouchEvents=!1,o.onRootRef=function(e){o.childrenRef=e},o.handleFocus=function(e){o.childrenRef||(o.childrenRef=e.currentTarget),o.handleEnter(e);var t=o.props.children.props;t.onFocus&&t.onFocus(e)},o.handleEnter=function(e){var t=o.props,n=t.children,r=t.enterDelay,a=n.props;"mouseover"===e.type&&a.onMouseOver&&a.onMouseOver(e),o.ignoreNonTouchEvents&&"touchstart"!==e.type||(o.childrenRef.setAttribute("title",""),clearTimeout(o.enterTimer),clearTimeout(o.leaveTimer),r?(e.persist(),o.enterTimer=setTimeout((function(){o.handleOpen(e)}),r)):o.handleOpen(e))},o.handleOpen=function(e){o.isControlled||o.state.open||o.setState({open:!0}),o.props.onOpen&&o.props.onOpen(e)},o.handleLeave=function(e){var t=o.props,n=t.children,r=t.leaveDelay,a=n.props;"blur"===e.type&&a.onBlur&&a.onBlur(e),"mouseleave"===e.type&&a.onMouseLeave&&a.onMouseLeave(e),clearTimeout(o.enterTimer),clearTimeout(o.leaveTimer),r?(e.persist(),o.leaveTimer=setTimeout((function(){o.handleClose(e)}),r)):o.handleClose(e)},o.handleClose=function(e){o.isControlled||o.setState({open:!1}),o.props.onClose&&o.props.onClose(e),clearTimeout(o.closeTimer),o.closeTimer=setTimeout((function(){o.ignoreNonTouchEvents=!1}),o.props.theme.transitions.duration.shortest)},o.handleTouchStart=function(e){o.ignoreNonTouchEvents=!0;var t=o.props,n=t.children,r=t.enterTouchDelay;n.props.onTouchStart&&n.props.onTouchStart(e),clearTimeout(o.leaveTimer),clearTimeout(o.closeTimer),clearTimeout(o.touchTimer),e.persist(),o.touchTimer=setTimeout((function(){o.handleEnter(e)}),r)},o.handleTouchEnd=function(e){var t=o.props,n=t.children,r=t.leaveTouchDelay;n.props.onTouchEnd&&n.props.onTouchEnd(e),clearTimeout(o.touchTimer),clearTimeout(o.leaveTimer),e.persist(),o.leaveTimer=setTimeout((function(){o.handleClose(e)}),r)},o.isControlled=null!=e.open,o.state={open:null},o.isControlled||(o.state.open=!1),o}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.defaultId="mui-tooltip-".concat(Math.round(1e5*Math.random())),this.props.open&&this.forceUpdate()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.closeTimer),clearTimeout(this.enterTimer),clearTimeout(this.focusTimer),clearTimeout(this.leaveTimer),clearTimeout(this.touchTimer)}},{key:"render",value:function(){var e=this,t=this.props,o=t.children,n=t.classes,i=t.disableFocusListener,l=t.disableHoverListener,s=t.disableTouchListener,u=(t.enterDelay,t.enterTouchDelay,t.id),p=t.interactive,f=(t.leaveDelay,t.leaveTouchDelay,t.onClose,t.onOpen,t.open),v=t.placement,g=t.PopperProps,b=t.theme,E=t.title,L=t.TransitionComponent,O=t.TransitionProps,x=(0,a.default)(t,["children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperProps","theme","title","TransitionComponent","TransitionProps"]),C=this.isControlled?f:this.state.open;""===E&&(C=!1);var D=!C&&!l,M=(0,r.default)({"aria-describedby":C?u||this.defaultId:null,title:D&&"string"==typeof E?E:null},x,o.props,{className:(0,h.default)(x.className,o.props.className)});s||(M.onTouchStart=this.handleTouchStart,M.onTouchEnd=this.handleTouchEnd),l||(M.onMouseOver=this.handleEnter,M.onMouseLeave=this.handleLeave),i||(M.onFocus=this.handleFocus,M.onBlur=this.handleLeave);var R=p?{onMouseOver:M.onMouseOver,onMouseLeave:M.onMouseLeave,onFocus:M.onFocus,onBlur:M.onBlur}:{};return d.default.createElement(d.default.Fragment,null,d.default.createElement(m.default,{rootRef:this.onRootRef},d.default.cloneElement(o,M)),d.default.createElement(y.default,(0,r.default)({className:(0,h.default)(n.popper,(0,c.default)({},n.popperInteractive,p)),placement:v,anchorEl:this.childrenRef,open:C,id:M["aria-describedby"],transition:!0},R,g),(function(t){var o=t.placement,a=t.TransitionProps;return d.default.createElement(L,(0,r.default)({timeout:b.transitions.duration.shorter},a,O),d.default.createElement("div",{className:(0,h.default)(n.tooltip,(0,c.default)({},n.touch,e.ignoreNonTouchEvents),n["tooltipPlacement".concat((0,T.capitalize)(o.split("-")[0]))])},E))})))}}]),t}(d.default.Component);b.defaultProps={disableFocusListener:!1,disableHoverListener:!1,disableTouchListener:!1,enterDelay:0,enterTouchDelay:1e3,interactive:!1,leaveDelay:0,leaveTouchDelay:1500,placement:"bottom",TransitionComponent:v.default};var E=(0,f.default)(g,{name:"MuiTooltip",withTheme:!0})(b);t.default=E},nwgO:function(e,t,o){"use strict";var n=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(o("ctk7"))}}]);
//# sourceMappingURL=component---src-pages-components-sections-section-javascript-jsx-bdc1048a67928972d23a.js.map