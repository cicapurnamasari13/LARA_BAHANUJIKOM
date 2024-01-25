/**
 * Highcharts Gantt JS v11.3.0 (2024-01-10)
 *
 * GridAxis
 *
 * (c) 2016-2024 Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */!function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/grid-axis",["highcharts"],function(i){return t(i),t.Highcharts=i,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var i=t?t._modules:{};function e(t,i,e,s){t.hasOwnProperty(i)||(t[i]=s.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:i,module:t[i]}})))}e(i,"Core/Axis/GridAxis.js",[i["Core/Axis/Axis.js"],i["Core/Globals.js"],i["Core/Utilities.js"]],function(t,i,e){var s,o;let{composed:r,dateFormats:n}=i,{addEvent:h,defined:l,erase:a,find:d,isArray:c,isNumber:g,merge:f,pick:u,pushUnique:p,timeUnits:m,wrap:k}=e;function x(t){return e.isObject(t,!0)}function b(t,i){let e={width:0,height:0};if(i.forEach(function(i){let s=t[i],o=0,r=0,n;x(s)&&(o=(n=x(s.label)?s.label:{}).getBBox?n.getBBox().height:0,n.textStr&&!g(n.textPxLength)&&(n.textPxLength=n.getBBox().width),r=g(n.textPxLength)?Math.round(n.textPxLength):0,n.textStr&&(r=Math.round(n.getBBox().width)),e.height=Math.max(o,e.height),e.width=Math.max(r,e.width))}),"treegrid"===this.options.type&&this.treeGrid&&this.treeGrid.mapOfPosToGridNode){let t=this.treeGrid.mapOfPosToGridNode[-1].height||0;e.width+=this.options.labels.indentation*(t-1)}return e}function P(t){let{grid:i}=this,e=3===this.side;if(e||t.apply(this),!i?.isColumn){let t=i?.columns||[];e&&(t=t.slice().reverse()),t.forEach(t=>{t.getOffset()})}e&&t.apply(this)}function y(t){let i=this.options,e=i.grid||{};if(!0===e.enabled){let{axisTitle:i,height:e,horiz:o,left:r,offset:n,opposite:h,options:l,top:a,width:d}=this,c=this.tickSize(),g=i&&i.getBBox().width,f=l.title.x,p=l.title.y,m=u(l.title.margin,o?5:10),k=i?this.chart.renderer.fontMetrics(i).f:0,x=c?c[0]/2:0,b=(o?a+e:r)+(o?1:-1)*(h?-1:1)*x+(this.side===s.bottom?k:0);t.titlePosition.x=o?r-(g||0)/2-m+f:b+(h?d:0)+n+f,t.titlePosition.y=o?b-(h?e:0)+(h?k:-k)/2+n+p:a-m+p}}function w(){let{chart:i,options:{grid:e={}},userOptions:s}=this;if(e.enabled&&function(t){let i=t.options;i.labels.align=u(i.labels.align,"center"),t.categories||(i.showLastLabel=!1),t.labelRotation=0,i.labels.rotation=0,i.minTickInterval=1}(this),e.columns){let o=this.grid.columns=[],r=this.grid.columnIndex=0;for(;++r<e.columns.length;){let n=f(s,e.columns[r],{isInternal:!0,linkedTo:0,scrollbar:{enabled:!1}},{grid:{columns:void 0}}),h=new t(this.chart,n,"yAxis");h.grid.isColumn=!0,h.grid.columnIndex=r,a(i.axes,h),a(i[this.coll]||[],h),o.push(h)}}}function L(){let{axisTitle:t,grid:i,options:e}=this,o=e.grid||{};if(!0===o.enabled){let o=this.min||0,r=this.max||0,n=this.ticks[this.tickPositions[0]];if(t&&!this.chart.styledMode&&n?.slotWidth&&!this.options.title.style.width&&t.css({width:`${n.slotWidth}px`}),this.maxLabelDimensions=this.getMaxLabelDimensions(this.ticks,this.tickPositions),this.rightWall&&this.rightWall.destroy(),this.grid&&this.grid.isOuterAxis()&&this.axisLine){let t=e.lineWidth;if(t){let i=this.getLinePath(t),n=i[0],h=i[1],l=(this.tickSize("tick")||[1])[0],a=(l-1)*(this.side===s.top||this.side===s.left?-1:1);if("M"===n[0]&&"L"===h[0]&&(this.horiz?(n[2]+=a,h[2]+=a):(n[1]+=a,h[1]+=a)),!this.horiz&&this.chart.marginRight){let t=["L",this.left,n[2]||0],i=[n,t],s=["L",this.chart.chartWidth-this.chart.marginRight,this.toPixels(r+this.tickmarkOffset)],l=["M",h[1]||0,this.toPixels(r+this.tickmarkOffset)],a=[l,s];this.grid.upperBorder||o%1==0||(this.grid.upperBorder=this.grid.renderBorder(i)),this.grid.upperBorder&&(this.grid.upperBorder.attr({stroke:e.lineColor,"stroke-width":e.lineWidth}),this.grid.upperBorder.animate({d:i})),this.grid.lowerBorder||r%1==0||(this.grid.lowerBorder=this.grid.renderBorder(a)),this.grid.lowerBorder&&(this.grid.lowerBorder.attr({stroke:e.lineColor,"stroke-width":e.lineWidth}),this.grid.lowerBorder.animate({d:a}))}this.grid.axisLineExtra?(this.grid.axisLineExtra.attr({stroke:e.lineColor,"stroke-width":e.lineWidth}),this.grid.axisLineExtra.animate({d:i})):this.grid.axisLineExtra=this.grid.renderBorder(i),this.axisLine[this.showAxis?"show":"hide"]()}}if((i&&i.columns||[]).forEach(t=>t.render()),!this.horiz&&this.chart.hasRendered&&(this.scrollbar||this.linkedParent&&this.linkedParent.scrollbar)&&this.tickPositions.length){let t,i;let e=this.tickmarkOffset,s=this.tickPositions[this.tickPositions.length-1],n=this.tickPositions[0];for(;(t=this.hiddenLabels.pop())&&t.element;)t.show();for(;(i=this.hiddenMarks.pop())&&i.element;)i.show();(t=this.ticks[n].label)&&(o-n>e?this.hiddenLabels.push(t.hide()):t.show()),(t=this.ticks[s].label)&&(s-r>e?this.hiddenLabels.push(t.hide()):t.show());let h=this.ticks[s].mark;h&&s-r<e&&s-r>0&&this.ticks[s].isLast&&this.hiddenMarks.push(h.hide())}}}function B(){let t=this.tickPositions&&this.tickPositions.info,i=this.options,e=i.grid||{},s=this.userOptions.labels||{};e.enabled&&(this.horiz?(this.series.forEach(t=>{t.options.pointRange=0}),t&&i.dateTimeLabelFormats&&i.labels&&!l(s.align)&&(!1===i.dateTimeLabelFormats[t.unitName].range||t.count>1)&&(i.labels.align="left",l(s.x)||(i.labels.x=3))):"treegrid"!==this.options.type&&this.grid&&this.grid.columns&&(this.minPointOffset=this.tickInterval))}function v(t){let i;let e=this.options,s=t.userOptions,o=e&&x(e.grid)?e.grid:{};!0===o.enabled&&(i=f(!0,{className:"highcharts-grid-axis "+(s.className||""),dateTimeLabelFormats:{hour:{list:["%H:%M","%H"]},day:{list:["%A, %e. %B","%a, %e. %b","%E"]},week:{list:["Week %W","W%W"]},month:{list:["%B","%b","%o"]}},grid:{borderWidth:1},labels:{padding:2,style:{fontSize:"0.9em"}},margin:0,title:{text:null,reserveSpace:!1,rotation:0,style:{textOverflow:"ellipsis"}},units:[["millisecond",[1,10,100]],["second",[1,10]],["minute",[1,5,15]],["hour",[1,6]],["day",[1]],["week",[1]],["month",[1]],["year",null]]},s),"xAxis"!==this.coll||(l(s.linkedTo)&&!l(s.tickPixelInterval)&&(i.tickPixelInterval=350),!(!l(s.tickPixelInterval)&&l(s.linkedTo))||l(s.tickPositioner)||l(s.tickInterval)||l(s.units)||(i.tickPositioner=function(t,e){let s=this.linkedParent&&this.linkedParent.tickPositions&&this.linkedParent.tickPositions.info;if(s){let o=i.units||[],r,n=1,h="year";for(let t=0;t<o.length;t++){let i=o[t];if(i&&i[0]===s.unitName){r=t;break}}let l=g(r)&&o[r+1];if(l){h=l[0]||"year";let t=l[1];n=t&&t[0]||1}else"year"===s.unitName&&(n=10*s.count);let a=m[h];return this.tickInterval=a*n,this.chart.time.getTimeTicks({unitRange:a,count:n,unitName:h},t,e,this.options.startOfWeek)}})),f(!0,this.options,i),this.horiz&&(e.minPadding=u(s.minPadding,0),e.maxPadding=u(s.maxPadding,0)),g(e.grid.borderWidth)&&(e.tickWidth=e.lineWidth=o.borderWidth))}function M(t){let i=t.userOptions,e=i&&i.grid||{},s=e.columns;e.enabled&&s&&f(!0,this.options,s[0])}function O(){(this.grid.columns||[]).forEach(t=>t.setScale())}function W(t){let{horiz:i,maxLabelDimensions:e,options:{grid:s={}}}=this;if(s.enabled&&e){let o=2*this.options.labels.distance,r=i?s.cellHeight||o+e.height:o+e.width;c(t.tickSize)?t.tickSize[0]=r:t.tickSize=[r,0]}}function C(){this.axes.forEach(t=>{(t.grid&&t.grid.columns||[]).forEach(t=>{t.setAxisSize(),t.setAxisTranslation()})})}function S(t){let{grid:i}=this;(i.columns||[]).forEach(i=>i.destroy(t.keepEvents)),i.columns=void 0}function A(t){let i=t.userOptions||{},e=i.grid||{};e.enabled&&l(e.borderColor)&&(i.tickColor=i.lineColor=e.borderColor),this.grid||(this.grid=new G(this)),this.hiddenLabels=[],this.hiddenMarks=[]}function T(t){let i=this.label,e=this.axis,o=e.reversed,r=e.chart,n=e.options,h=n.grid||{},l=e.options.labels,a=l.align,d=s[e.side],c=t.tickmarkOffset,f=e.tickPositions,u=this.pos-c,p=g(f[t.index+1])?f[t.index+1]-c:(e.max||0)+c,m=e.tickSize("tick"),k=m?m[0]:0,x=m?m[1]/2:0;if(!0===h.enabled){let s,n,h,c;if("top"===d?n=(s=e.top+e.offset)-k:"bottom"===d?s=(n=r.chartHeight-e.bottom+e.offset)+k:(s=e.top+e.len-(e.translate(o?p:u)||0),n=e.top+e.len-(e.translate(o?u:p)||0)),"right"===d?c=(h=r.chartWidth-e.right+e.offset)+k:"left"===d?h=(c=e.left+e.offset)-k:(h=Math.round(e.left+(e.translate(o?p:u)||0))-x,c=Math.min(Math.round(e.left+(e.translate(o?u:p)||0))-x,e.left+e.len)),this.slotWidth=c-h,t.pos.x="left"===a?h:"right"===a?c:h+(c-h)/2,t.pos.y=n+(s-n)/2,i){let e=r.renderer.fontMetrics(i),s=i.getBBox().height;if(l.useHTML)t.pos.y+=e.b+-(s/2);else{let i=Math.round(s/e.h);t.pos.y+=(e.b-(e.h-e.f))/2+-((i-1)*e.h/2)}}t.pos.x+=e.horiz&&l.x||0}}function E(t){let{axis:e,value:s}=t;if(e.options.grid&&e.options.grid.enabled){let o;let r=e.tickPositions,n=(e.linkedParent||e).series[0],h=s===r[0],l=s===r[r.length-1],a=n&&d(n.options.data,function(t){return t[e.isXAxis?"x":"y"]===s});a&&n.is("gantt")&&(o=f(a),i.seriesTypes.gantt.prototype.pointClass.setGanttPointAliases(o)),t.isFirst=h,t.isLast=l,t.point=o}}function z(){this.chart;let t=this.options,i=t.grid||{},e=this.categories,s=this.tickPositions,o=s[0],r=s[1],n=s[s.length-1],h=s[s.length-2],l=this.linkedParent&&this.linkedParent.min,a=this.linkedParent&&this.linkedParent.max,d=l||this.min,c=a||this.max,f=this.tickInterval,u=g(d)&&d>=o+f&&d<r,p=g(d)&&o<d&&o+f>d,m=g(c)&&n>c&&n-f<c,k=g(c)&&c<=n-f&&c>h;!0===i.enabled&&!e&&(this.isXAxis||this.isLinked)&&((p||u)&&!t.startOnTick&&(s[0]=d),(m||k)&&!t.endOnTick&&(s[s.length-1]=c))}function I(t){var i;let{options:{grid:e={}}}=this;return!0===e.enabled&&this.categories?this.tickInterval:t.apply(this,(i=arguments,Array.prototype.slice.call(i,1)))}(o=s||(s={}))[o.top=0]="top",o[o.right=1]="right",o[o.bottom=2]="bottom",o[o.left=3]="left";class G{constructor(t){this.axis=t}isOuterAxis(){let t=this.axis,i=t.chart,e=t.grid.columnIndex,s=t.linkedParent?.grid.columns||t.grid.columns||[],o=e?t.linkedParent:t,r=-1,n=0;return 3===t.side&&!i.inverted&&s.length?!t.linkedParent:((i[t.coll]||[]).forEach((i,e)=>{i.side!==t.side||i.options.isInternal||(n=e,i!==o||(r=e))}),n===r&&(!g(e)||s.length===e))}renderBorder(t){let i=this.axis,e=i.chart.renderer,s=i.options,o=e.path(t).addClass("highcharts-axis-line").add(i.axisGroup);return e.styledMode||o.attr({stroke:s.lineColor,"stroke-width":s.lineWidth,zIndex:7}),o}}return n.E=function(t){return this.dateFormat("%a",t,!0).charAt(0)},n.W=function(t){let i=this,e=new this.Date(t);["Hours","Milliseconds","Minutes","Seconds"].forEach(function(t){i.set(t,e,0)});let s=(this.get("Day",e)+6)%7,o=new this.Date(e.valueOf());this.set("Date",o,this.get("Date",e)-s+3);let r=new this.Date(this.get("FullYear",o),0,1);return 4!==this.get("Day",r)&&(this.set("Month",e,0),this.set("Date",e,1+(11-this.get("Day",r))%7)),(1+Math.floor((o.valueOf()-r.valueOf())/6048e5)).toString()},{compose:function t(i,e,s){return p(r,t)&&(i.keepProps.push("grid"),i.prototype.getMaxLabelDimensions=b,k(i.prototype,"unsquish",I),k(i.prototype,"getOffset",P),h(i,"init",A),h(i,"afterGetTitlePosition",y),h(i,"afterInit",w),h(i,"afterRender",L),h(i,"afterSetAxisTranslation",B),h(i,"afterSetOptions",v),h(i,"afterSetOptions",M),h(i,"afterSetScale",O),h(i,"afterTickSize",W),h(i,"trimTicks",z),h(i,"destroy",S),h(e,"afterSetChartSize",C),h(s,"afterGetLabelPosition",T),h(s,"labelFormat",E)),i}}}),e(i,"masters/modules/grid-axis.src.js",[i["Core/Globals.js"],i["Core/Axis/GridAxis.js"]],function(t,i){i.compose(t.Axis,t.Chart,t.Tick)})});