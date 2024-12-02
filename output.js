//Mon Dec 02 2024 08:48:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var __syncGroupPatentInfo;
var __viewPatentDetail;
var __viewPatentLsnt;
var __viewPatentFee;
var __getFingerPrint;
(function () {
  if (window.location.href.indexOf("://cpquery.cponline.cnipa.gov.cn/detail/index") > -1 || window.location.href.indexOf("://cpquery.cponline.cnipa.gov.cn/chinesepatent/index") > -1) {
    var _0x24846d = window.XMLHttpRequest;
    window.XMLHttpRequest = _0x4c1639;
    let _0x24e961 = getQueryString("types");
    let _0x544da4 = getQueryString("_pmId");
    let _0x295a79 = getQueryString("_patentNo");
    let _0x46bf1d = getQueryString("queryFeeFlag");
    let _0x5a1690 = getQueryString("_sqFastMode");
    let _0x190e8c = getQueryString("_queryData");
    let _0x3ad11c = false;
    let _0x1db9c9 = window.open;
    window.open = function (_0x13104d, _0x4a5451, _0xac1682) {
      _0x190e8c = window.btoa(encodeURIComponent(_0x190e8c));
      _0x13104d = _0x13104d + (_0x13104d.indexOf("?") > -1 ? "&" : "?") + "types=" + _0x24e961 + "&_pmId=" + _0x544da4 + "&_patentNo=" + _0x295a79 + "&_queryData=" + _0x190e8c;
      if (self != top) {
        window.location.href = _0x13104d;
        return;
      }
      return _0x1db9c9(_0x13104d, _0x4a5451, _0xac1682);
    };
    let _0xa1b57f = {
      msgId: "-1",
      from: "WEB",
      to: "SC",
      msgtype: "patent_data",
      msg: {}
    };
    let _0x4568d5 = {
      msgId: _0x544da4,
      from: "WEB",
      to: "SC",
      msg: {
        patentNo: _0x295a79
      }
    };
    window.addEventListener("ajaxLoadEnd", function (_0x3696db) {
      if (self != top) {
        if (_0x3696db.detail != null && _0x3696db.detail.responseURL.indexOf("api/view/gn/sqxx") > -1) {
          _0x3ad11c = true;
          _0xa1b57f.msg.patentInfo = JSON.parse(_0x3696db.detail.responseText);
          _0x24e961 != "" && _0x24e961.indexOf("FEE") <= -1 && window.parent.postMessage(_0xa1b57f, "*");
        } else {
          if (_0x3696db.detail != null && _0x3696db.detail.responseURL.indexOf("/api/view/gn/fyxx") > -1) {
            _0xa1b57f.msg.feeInfo = JSON.parse(_0x3696db.detail.responseText);
            window.parent.postMessage(_0xa1b57f, "*");
          } else {
            if (_0x3696db.detail != null && _0x3696db.detail.responseURL.indexOf("/api/search/undomestic/publicSearch") > -1) {
              let _0x297764 = changeSqFastData(JSON.parse(_0x3696db.detail.responseText));
              _0x190e8c = JSON.stringify(_0x297764);
              _0x5a1690 == "yes" ? _0x24e961 != "" && _0x24e961.indexOf("FEE") <= -1 && (_0xa1b57f.msg.patentInfo = _0x297764, window.parent.postMessage(_0xa1b57f, "*")) : setTimeout(function () {
                document.querySelector("#q-app > div > div > div.q-page-container > main > div.search-area > div:nth-child(2) > div > div.tableList > div.table > div > div.row > div > div > div.row > div.table_top1.col-11 > div > span.title.hover_active").click();
              }, 1000);
            }
          }
        }
      } else {
        if (_0x3696db.detail != null && _0x3696db.detail.responseURL.indexOf("/api/search/undomestic/publicSearch") > -1) {
          _0x3ad11c = true;
          _0x544da4 != "" && _0x295a79 != "" && (_0x4568d5.msgtype = "patent_data_parse_sq", _0x4568d5.msg.patentInfo = changeSqFastData(JSON.parse(_0x3696db.detail.responseText)), window.postMessage(_0x4568d5, "*"));
        } else {
          if (_0x3696db.detail != null && _0x3696db.detail.responseURL.indexOf("api/view/gn/sqxx") > -1) {
            _0x3ad11c = true;
            _0x544da4 != "" && _0x295a79 != "" && (_0x4568d5.msgtype = "patent_data_parse_sq", _0x4568d5.msg.patentInfo = JSON.parse(_0x3696db.detail.responseText), window.postMessage(_0x4568d5, "*"));
          } else {
            _0x3696db.detail != null && _0x3696db.detail.responseURL.indexOf("/api/view/gn/fyxx") > -1 && _0x544da4 != "" && _0x295a79 != "" && (_0x4568d5.msgtype = "patent_data_parse_fee", _0x4568d5.msg.feeInfo = JSON.parse(_0x3696db.detail.responseText), window.postMessage(_0x4568d5, "*"));
          }
        }
      }
    });
    window.location.href.indexOf("://cpquery.cponline.cnipa.gov.cn/chinesepatent/index") > -1 && _0x295a79 != "" && setTimeout(function () {
      var _0x5e2cd6 = document.querySelector("#q-app > div > div > div.q-page-container > main > div > div.q-card.q-card--bordered.q-card--flat.no-shadow > div > div.no-padding.col-10.q-tab-panels.q-panel-parent > div > div > div > form > div:nth-child(2) > div:nth-child(1) > div > label > div > div > div > input");
      if (_0x5e2cd6 != null) {
        var _0x50fea0 = document.createEvent("HTMLEvents");
        _0x50fea0.initEvent("input", false, true);
        _0x5e2cd6.value = _0x295a79;
        _0x5e2cd6.dispatchEvent(_0x50fea0);
        document.querySelector("#q-app > div > div > div.q-page-container > main > div > div.q-card.q-card--bordered.q-card--flat.no-shadow > div > div.no-padding.col-10.q-tab-panels.q-panel-parent > div > div > div > form > div.text-center.q-my-md > button.q-btn.q-btn-item.non-selectable.no-outline.q-mx-xs.q-btn--standard.q-btn--rectangle.bg-primary.text-white.q-btn--actionable.q-focusable.q-hoverable.q-btn--wrap > span.q-btn__wrapper.col.row.q-anchor--skip").click();
      }
    }, 1000);
    if (window.location.href.indexOf("://cpquery.cponline.cnipa.gov.cn/detail/index") > -1) {
      setTimeout(function () {
        if (_0x3ad11c == false && self != top) {
          var _0x58878b = document.querySelector("#q-app > div > div > div.q-page-container > main > div > div.content > div.row.boxRow > div.tree > div.el-tree.el-tree--highlight-current > div:nth-child(1) > div");
          var _0x3c2769 = document.querySelector("#q-app > div > div > div.q-page-container > main > div > div.content > div.row.boxRow > div.table > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div.col-4.col1");
          if (_0x58878b != null && _0x3c2769 != null) {
            try {
              _0x3ad11c = true;
              _0xa1b57f.msg.patentInfo = JSON.parse(window.decodeURIComponent(window.atob(_0x190e8c)));
              _0x24e961 != "" && _0x24e961.indexOf("FEE") <= -1 && window.parent.postMessage(_0xa1b57f, "*");
            } catch (_0x1677d6) {
              _0x3ad11c = true;
              _0xa1b57f.msg.patentInfo = {};
              console.warn("解析传递过来的状态信息出现异常了");
            }
          }
        }
      }, 5000);
      if (_0x24e961 != "" && _0x24e961.indexOf("FEE") > -1 || _0x46bf1d == "yes") {
        let _0x1bd5f1 = setInterval(function () {
          if (_0x3ad11c == true) {
            clearInterval(_0x1bd5f1);
            var _0x2cd1a5 = document.querySelector("#q-app > div > div > div.q-page-container > main > div > div.content > div.row.boxRow > div.tree > div.el-tree.el-tree--highlight-current > div:nth-child(3) > div");
            _0x2cd1a5 == null && (_0x2cd1a5 = document.querySelector("#q-app > div > div > div.q-page-container > main > div > div.content > div.row.boxRow > div.tree > div.el-tree.el-tree--highlight-current > div:nth-child(2) > div"));
            _0x2cd1a5.click();
          }
        }, 1000);
      }
    }
  }
  function _0x52e9c9(_0x13378c) {
    var _0x55e529 = new CustomEvent(_0x13378c, {
      detail: this
    });
    window.dispatchEvent(_0x55e529);
  }
  function _0x4c1639() {
    var _0x3bd663 = new _0x24846d();
    _0x3bd663.addEventListener("abort", function () {
      _0x52e9c9.call(this, "ajaxAbort");
    }, false);
    _0x3bd663.addEventListener("error", function () {
      _0x52e9c9.call(this, "ajaxError");
    }, false);
    _0x3bd663.addEventListener("load", function () {
      _0x52e9c9.call(this, "ajaxLoad");
    }, false);
    _0x3bd663.addEventListener("loadstart", function () {
      _0x52e9c9.call(this, "ajaxLoadStart");
    }, false);
    _0x3bd663.addEventListener("progress", function () {
      _0x52e9c9.call(this, "ajaxProgress");
    }, false);
    _0x3bd663.addEventListener("timeout", function () {
      _0x52e9c9.call(this, "ajaxTimeout");
    }, false);
    _0x3bd663.addEventListener("loadend", function () {
      _0x52e9c9.call(this, "ajaxLoadEnd");
    }, false);
    _0x3bd663.addEventListener("readystatechange", function () {
      _0x52e9c9.call(this, "ajaxReadyStateChange");
    }, false);
    return _0x3bd663;
  }
})();
if (typeof _usePatentAssistNewPlugin !== "undefined") {
  if (_usePatentAssistNewPlugin == true) {
    var __genID = function (_0x48169f, _0x56610c) {
      return _0x48169f + "_" + Number(Math.random().toString().substr(3, _0x56610c) + Date.now()).toString(36);
    };
    var _msgId = __genID("WEB2C");
    var _cb;
    var _cb2;
    var _sendMsg = {
      msgId: _msgId,
      from: "WEB",
      to: "SC"
    };
    window.addEventListener("message", function (_0x4dafc2) {
      var _0x2b64c6 = _0x4dafc2.data;
      var _0x4ca63e = _0x2b64c6.to;
      var _0x475c00 = _0x2b64c6.msgtype;
      var _0x29b808 = _0x2b64c6.msgId;
      var _0x4645db = _0x2b64c6.msg;
      var _0x3b12ea = _0x4645db.cbType;
      var _0x50d545 = _0x4645db.syncType;
      var _0x3f509d = _0x4645db.successData;
      var _0x2f61f0 = _0x4645db.clickPatentNo;
      var _0x39e214 = _0x4645db.syncErrorList;
      if (_0x4ca63e == "WEB" && _0x475c00 == "sync_patent_cb") {
        if (_0x29b808 == _msgId) {
          if (_0x3b12ea == "1") {
            _cb(_0x50d545, _0x2f61f0, _0x3f509d);
          } else {
            _0x3b12ea == "2" && _cb2(_0x39e214);
          }
        }
      } else {
        _0x4ca63e == "WEB" && _0x475c00 == "get_finger_print_cb" && _cb && _cb(_0x4645db);
      }
    }, false);
    __syncGroupPatentInfo = function (_0x19e9ed, _0x41b74, _0x1611d6, _0x108347) {
      _cb = _0x1611d6;
      _cb2 = _0x108347;
      _sendMsg.msgtype = "sync_patent";
      _sendMsg.msg = {
        patentsniffList: _0x19e9ed,
        types: _0x41b74
      };
      window.postMessage(_sendMsg, "*");
    };
    __viewPatentDetail = function (_0x579d78) {
      _sendMsg.msgtype = "view_patent_detail";
      _sendMsg.msg = {
        patentNo: _0x579d78
      };
      window.postMessage(_sendMsg, "*");
    };
    __viewPatentLsnt = function (_0x5d6ab4) {
      _sendMsg.msgtype = "view_patent_lsnt";
      _sendMsg.msg = {
        patentNo: _0x5d6ab4
      };
      window.postMessage(_sendMsg, "*");
    };
    __viewPatentFee = function (_0x1f205e) {
      _sendMsg.msgtype = "view_patent_fee";
      _sendMsg.msg = {
        patentNo: _0x1f205e
      };
      window.postMessage(_sendMsg, "*");
    };
    __getFingerPrint = function (_0x40cf48) {
      _cb = _0x40cf48;
      _sendMsg.msgtype = "get_finger_print";
      _sendMsg.msg = {};
      window.postMessage(_sendMsg, "*");
    };
  }
}
function getQueryString(_0xb5a388) {
  var _0x41cd5a = new RegExp("(^|&)" + _0xb5a388 + "=([^&]*)(&|$)");
  var _0x3fbada = window.location.search.substr(1).match(_0x41cd5a);
  if (_0x3fbada != null) {
    return decodeURIComponent(_0x3fbada[2]);
  }
  return "";
}
function changeSqFastData(_0x39017a) {
  if (_0x39017a.data.records) {
    let _0x4ddc79 = _0x39017a.data.records[0];
    if (_0x4ddc79) {
      let _0x4a648d = JSON.parse(JSON.stringify(_0x4ddc79));
      _0x4a648d.fenantjr = "";
      _0x39017a.data.zhuluxmxx = {
        zhuluxmxx: _0x4a648d
      };
      _0x39017a.data.dailijg = {
        dailijgList: []
      };
      _0x39017a.data.famingren = {
        famingrenList: []
      };
      _0x39017a.data.shenqingren = {
        shenqingrenList: [{
          shenqingrxm: _0x4a648d.shenqingrxm
        }]
      };
      _0x39017a.data.records = [];
    }
  }
  return _0x39017a;
}