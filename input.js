//Mon Dec 02 2024 08:43:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var syncListArray = new Array();
var syncListLength = 0;
var syncedCount = 0;
var syncedErrorArray = [];
var stopedSyncFlag = "0";
var closeSyncWinFlag = "0";
var pmId = getUrlParam("_pmId") == null ? genID("NORMAL") : getUrlParam("_pmId");
var patentData = {};
var syncingPatentNo = "";
var retryLoginFlag = false;
var loadingBase64 = "data:image/gif;base64,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";
Date.prototype.format = function (_0x3113f6) {
  var _0x6c39a7 = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds()
  };
  if (/(y+)/.test(_0x3113f6)) {
    _0x3113f6 = _0x3113f6.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var _0xbe9cf6 in _0x6c39a7) {
    var _0x4b5960 = _0x6c39a7[_0xbe9cf6];
    if (new RegExp("(" + _0xbe9cf6 + ")").test(_0x3113f6)) {
      _0x3113f6 = _0x3113f6.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x4b5960 : ("00" + _0x4b5960).substr(("" + _0x4b5960).length));
    }
  }
  return _0x3113f6;
};
window.addEventListener("message", function (_0x5cc89c) {
  try {
    var _0x32fbee = _0x5cc89c.data;
    var _0x4ae0f5 = _0x5cc89c.origin;
    var _0x2f1c89 = _0x32fbee.to;
    var _0x45f43c = _0x32fbee.msgtype;
    var _0x1c83a7 = _0x32fbee.msg;
    var _0x1ae49e = _0x32fbee.msgId;
    var _0x138911 = {
      msgId: _0x1ae49e,
      from: "SC",
      to: "WEB"
    };
    if (_0x2f1c89 == "SC" && _0x45f43c == "sync_patent") {
      var _0x51c947 = _0x1c83a7.patentsniffList;
      var _0x56b301 = _0x1c83a7.types;
      _syncGroupPatentInfo(_0x51c947, _0x56b301, function (_0x4ab6ab, _0x15971b, _0x210dbc) {
        _0x138911.msgtype = "sync_patent_cb";
        _0x138911.msg = {
          cbType: "1",
          syncType: _0x4ab6ab,
          successData: _0x210dbc,
          clickPatentNo: _0x15971b
        };
        _0x5cc89c.source.postMessage(_0x138911, _0x4ae0f5);
      }, function (_0x55df29) {
        _0x138911.msgtype = "sync_patent_cb";
        _0x138911.msg = {
          cbType: "2",
          syncErrorList: _0x55df29
        };
        _0x5cc89c.source.postMessage(_0x138911, _0x4ae0f5);
      });
    } else {
      if (_0x2f1c89 == "SC" && _0x45f43c == "get_finger_print") {
        _0x138911.msgtype = "get_finger_print_cb";
        _0x138911.msg = "";
        chrome.storage.local.get("patent_assist_session_id", function (_0x411e61) {
          _0x411e61.patent_assist_session_id != undefined && _0x411e61.patent_assist_session_id != "" && (_0x138911.msg = _0x411e61.patent_assist_session_id);
          _0x5cc89c.source.postMessage(_0x138911, _0x4ae0f5);
        });
      } else {
        if (_0x2f1c89 == "SC" && _0x45f43c == "view_patent_detail") {
          var _0x2c5d5f = _0x1c83a7.patentNo;
          _viewPatentDetail(_0x2c5d5f);
        } else {
          if (_0x2f1c89 == "SC" && _0x45f43c == "view_patent_lsnt") {
            var _0x2c5d5f = _0x1c83a7.patentNo;
            _viewLsnt(_0x2c5d5f);
          } else {
            if (_0x2f1c89 == "SC" && _0x45f43c == "view_patent_fee") {
              var _0x2c5d5f = _0x1c83a7.patentNo;
              _viewFee(_0x2c5d5f);
            } else {
              if (_0x2f1c89 == "SC" && _0x45f43c == "patent_data") {
                patentData = _0x1c83a7;
              } else {
                if (_0x2f1c89 == "SC" && _0x45f43c == "patent_data_parse_sq") {
                  pmId == _0x1ae49e && openAjx("C", server_path + "/api/cp/getPatentInfoByCurDay", {
                    patentNo: formatPatentNo(_0x1c83a7.patentNo)
                  }, 60000, "POST", true, function (_0x216e72) {
                    var _0x547454 = _0x216e72.currdata;
                    _0x547454 != "yes" && parseData(_0x1c83a7.patentNo, _0x1c83a7.patentInfo, function (_0x20d4e2) {
                      _0x20d4e2.flag == false && writeTip(notEmpty(_0x20d4e2.msg) ? _0x20d4e2.msg : "未知的异常信息，无法查看，请刷新页面重试下");
                    }, "SQ");
                  });
                } else {
                  _0x2f1c89 == "SC" && _0x45f43c == "patent_data_parse_fee" && pmId == _0x1ae49e && openAjx("C", server_path + "/api/cp/getPatentFeeByCurDay", {
                    patentNo: formatPatentNo(_0x1c83a7.patentNo)
                  }, 60000, "POST", true, function (_0x31c737) {
                    var _0x85824b = _0x31c737.currdata;
                    _0x85824b != "yes" && parseData(_0x1c83a7.patentNo, _0x1c83a7.feeInfo, function (_0x31bee8) {
                      _0x31bee8.flag == false && writeTip(notEmpty(_0x31bee8.msg) ? _0x31bee8.msg : "未知的异常信息，无法查看，请刷新页面重试下");
                    }, "FEE");
                  });
                }
              }
            }
          }
        }
      }
    }
  } catch (_0x49606f) {
    console.log("sync_core 接收postMessage消息的方法出现异常了");
    console.error(_0x49606f);
    _0x2f1c89 == "SC" && _0x45f43c == "get_finger_print" && (_0x138911.msgtype = "get_finger_print_cb", _0x138911.msg = "", _0x5cc89c.source.postMessage(_0x138911, _0x4ae0f5));
  }
}, false);
function _viewPatentDetail(_0xc4c74f) {
  try {
    layer.load();
    openAjx("C", "http://search.cnipr.com/login!checkLogin.action?randomNum=" + Date.now(), {}, 60000, "GET", true, function (_0x339d89) {
      layer.closeAll("loading");
      if (!_0x339d89.success) {
        var _0x4c4e95 = "检测到您还未登录到【知识产权出版社系统】，请您登录后，再进行查看";
        loginAlert(_0x4c4e95, "http://search.cnipr.com?__autoLogin=yes");
        return;
      }
      var _0x28507a = {
        strWhere: "申请号=(%" + _0xc4c74f + "%)",
        start: "1",
        recordCursor: "0",
        limit: "1",
        option: "2",
        iHitPointType: "115",
        strSortMethod: "RELEVANCE",
        strSources: "FMZL,SYXX,WGZL,TWZL,HKPATENT,USPATENT,JPPATENT,EPPATENT,WOPATENT,GBPATENT,DEPATENT,FRPATENT,CHPATENT,KRPATENT,RUPATENT,APPATENT,ATPATENT,AUPATENT,ITPATENT,SEPATENT,CAPATENT,ESPATENT,GCPATENT,ASPATENT,OTHERPATENT,TWPATENT"
      };
      windowOpen2TempPost("http://search.cnipr.com/search!doDetailSearch.action", _0x28507a, "", "", "no");
    }, function (_0x3e6867) {
      layer.closeAll("loading");
      layer.alert("登录【知识产权出版社系统】失败了，请点击如下链接：<a style='color: green;text-decoration: underline' href='http://search.cnipr.com' target='_blank'>http://search.cnipr.com</a>，确保正常打开并正常登陆", {
        icon: 0
      });
    });
  } catch (_0x5f19fb) {
    layer.closeAll("loading");
    layer.msg("小助手异常了，请刷新界面再重试下");
  }
}
function _viewLsnt(_0x17df05) {
  checkLsntRefVip(function () {
    try {
      _0x17df05 = transformPatent(_0x17df05);
      var _0x4b5d9d = "https://cpquery.cponline.cnipa.gov.cn/chinesepatent/index?_patentNo=" + _0x17df05 + "&_pmId=" + pmId;
      windowCenterOpen("专利小助手-申请信息查看", _0x4b5d9d);
    } catch (_0x3c920e) {
      layer.closeAll("loading");
      layer.msg("小助手异常了，请刷新界面或尝试重新点击查看");
    }
  });
}
function _viewFee(_0x59bc9e) {
  checkLsntRefVip(function () {
    try {
      _0x59bc9e = transformPatent(_0x59bc9e);
      var _0x5466bf = "https://cpquery.cponline.cnipa.gov.cn/chinesepatent/index?_patentNo=" + _0x59bc9e + "&_pmId=" + pmId;
      windowCenterOpen("专利小助手-费用信息查看", _0x5466bf);
    } catch (_0x3fbd36) {
      console.error(_0x3fbd36);
      layer.closeAll("loading");
      layer.msg("小助手异常了，请刷新界面再重试下");
    }
  });
}
function _syncGroupPatentInfo(_0x27c464, _0x31565d, _0x4dfbd1, _0x4dbd91) {
  checkLsntRefVip(function () {
    syncListArray = _0x27c464;
    syncListLength = _0x27c464.length;
    syncedErrorArray = [];
    syncedCount = 0;
    stopedSyncFlag = "0";
    closeSyncWinFlag = "0";
    syncingPatentNo = "";
    _0x31565d == "SQ" ? layer.confirm("快速模式：只同步状态，申请人信息，其他不进行同步<br>普通模式：可以同步状态，专利名称，以及申请人、发明人等申请信息", {
      btn: ["快速模式", "普通模式"],
      area: ["500px", "200px"]
    }, function () {
      _doSyncGroupPatentInfo(_0x31565d, _0x4dfbd1, _0x4dbd91, "yes");
      layer.closeAll();
      showSyncWin();
    }, function () {
      _doSyncGroupPatentInfo(_0x31565d, _0x4dfbd1, _0x4dbd91);
      layer.closeAll();
      showSyncWin();
    }) : (_doSyncGroupPatentInfo(_0x31565d, _0x4dfbd1, _0x4dbd91), layer.closeAll(), showSyncWin());
  });
}
function _doSyncGroupPatentInfo(_0x8a461f, _0x5d23f3, _0x106cd6, _0x2f0f20 = "no") {
  try {
    if (syncListArray.length <= 0) {
      stopedSyncFlag = "1";
      _0x106cd6 && _0x106cd6(syncedErrorArray);
      if (closeSyncWinFlag == "0") {
        let _0x3fdf6a = syncedCount - syncedErrorArray.length;
        chrome.runtime.sendMessage({
          from: "SC",
          to: "B",
          msgtype: "notify",
          msg: {
            title: "专利小助手通知",
            message: "已完成" + (_0x3fdf6a <= 0 ? 0 : _0x3fdf6a) + "条专利的刷新",
            type: "basic"
          }
        });
      }
      return;
    }
    patentData = {};
    var _0x5bebd0 = syncListArray.shift();
    _0x5bebd0 = _0x5bebd0.replace(".", "").replace("CN", "").replace("ZL", "");
    var _0x3492ae = _0x8a461f;
    var _0x2224e8 = {
      patentNo: formatPatentNo(_0x5bebd0)
    };
    var _0x22f8c1 = {
      msg: "",
      msg2: "",
      patentData: {},
      flag: true
    };
    if (_0x3492ae.indexOf("SQ") > -1) {
      openAjx("C", server_path + "/api/cp/getPatentInfoByCurDay", _0x2224e8, 60000, "POST", true, function (_0x47fb61) {
        var _0x563468 = _0x47fb61.currdata;
        _0x563468 == "yes" && (_0x22f8c1.patentData = _0x47fb61, _0x5d23f3("SQ", _0x5bebd0, _0x22f8c1), _0x3492ae = _0x3492ae.replace(",SQ", "").replace("SQ,", "").replace("SQ", ""));
        _0x3492ae.indexOf("FEE") > -1 ? openAjx("C", server_path + "/api/cp/getPatentFeeByCurDay", _0x2224e8, 60000, "POST", true, function (_0x5d63f0) {
          var _0xf3d55e = _0x5d63f0.currdata;
          _0xf3d55e == "yes" && (_0x22f8c1.patentData = _0x5d63f0, _0x5d23f3("FEE", _0x5bebd0, _0x22f8c1), _0x3492ae = _0x3492ae.replace(",FEE", "").replace("FEE,", "").replace("FEE", ""));
          loadPatentDataByIframe(_0x3492ae, _0x8a461f, _0x5bebd0, _0x5d23f3, _0x106cd6, _0x2f0f20);
        }, function (_0x1006a7) {
          loadPatentDataByIframe(_0x3492ae, _0x8a461f, _0x5bebd0, _0x5d23f3, _0x106cd6, _0x2f0f20);
        }) : loadPatentDataByIframe(_0x3492ae, _0x8a461f, _0x5bebd0, _0x5d23f3, _0x106cd6, _0x2f0f20);
      }, function (_0x5ae633) {
        loadPatentDataByIframe(_0x3492ae, _0x8a461f, _0x5bebd0, _0x5d23f3, _0x106cd6, _0x2f0f20);
      });
    } else {
      _0x3492ae.indexOf("FEE") > -1 && openAjx("C", server_path + "/api/cp/getPatentFeeByCurDay", _0x2224e8, 60000, "POST", true, function (_0x4a9afc) {
        var _0x36581d = _0x4a9afc.currdata;
        _0x36581d == "yes" && (_0x22f8c1.patentData = _0x4a9afc, _0x5d23f3("FEE", _0x5bebd0, _0x22f8c1), _0x3492ae = _0x3492ae.replace(",FEE", "").replace("FEE,", "").replace("FEE", ""));
        loadPatentDataByIframe(_0x3492ae, _0x8a461f, _0x5bebd0, _0x5d23f3, _0x106cd6, _0x2f0f20);
      }, function (_0xfac9a9) {
        loadPatentDataByIframe(_0x3492ae, _0x8a461f, _0x5bebd0, _0x5d23f3, _0x106cd6, _0x2f0f20);
      });
    }
  } catch (_0x239a89) {
    console.error(_0x239a89);
    layer.msg("小助手异常了，请刷新界面再重试下");
  }
}
function loadPatentDataByIframe(_0x1d80e1, _0x21986a, _0x431780, _0x24b973, _0x4c72bf, _0x517dc8 = "no") {
  syncingPatentNo = _0x431780;
  if (_0x1d80e1.indexOf("SQ") == -1 && _0x1d80e1.indexOf("FEE") == -1) {
    syncedCount++;
    _doSyncGroupPatentInfo(_0x21986a, _0x24b973, _0x4c72bf, _0x517dc8);
    return;
  }
  let _0x27ea46 = "https://cpquery.cponline.cnipa.gov.cn/chinesepatent/index?_patentNo=" + _0x431780 + "&types=" + _0x1d80e1 + "&_sqFastMode=" + _0x517dc8;
  loadIframe(_0x27ea46, function () {
    var _0x5e6a56 = 1;
    var _0x3c1ba1 = setInterval(function () {
      _0x5e6a56 = _0x5e6a56 + 1;
      if (JSON.stringify(patentData) != "{}" || _0x5e6a56 > (_0x1d80e1.indexOf("FEE") > -1 ? 60 : 45)) {
        clearInterval(_0x3c1ba1);
        if (JSON.stringify(patentData) == "{}" && !retryLoginFlag) {
          retryLoginFlag = true;
          syncListArray.unshift(_0x431780);
          _doSyncGroupPatentInfo(_0x21986a, _0x24b973, _0x4c72bf, _0x517dc8);
          return;
        } else {
          if (JSON.stringify(patentData) == "{}" && retryLoginFlag) {
            chrome.runtime.sendMessage({
              from: "SC",
              to: "B",
              msgtype: "notify",
              msg: {
                title: "专利小助手通知",
                message: "未获取到正确的数据，可能未登录国知局或者登录国知局已失效，请尝试重新登录后，再次查询",
                type: "basic"
              }
            });
            _0x27ea46 = _0x27ea46 + "&_pmId=" + pmId;
            continueSyncLoginAlert("未获取到正确的数据，可能未登录国知局或者登录国知局已失效，请尝试重新登录后，再次查询", _0x431780, _0x21986a, _0x24b973, _0x4c72bf, _0x27ea46, _0x517dc8);
            retryLoginFlag = false;
            return;
          }
        }
        retryLoginFlag = false;
        if (_0x1d80e1.indexOf("SQ") > -1 && _0x1d80e1.indexOf("FEE") > -1) {
          parseData(_0x431780, patentData.patentInfo, function (_0x420b35) {
            var _0x372e0e = false;
            _0x420b35.flag == false && (_0x372e0e = true);
            _0x24b973("SQ", _0x431780, _0x420b35);
            parseData(_0x431780, patentData.feeInfo, function (_0x318430) {
              (_0x318430.flag == false || _0x372e0e) && (_0x318430.patentNo = _0x431780, syncedErrorArray.push(_0x318430));
              _0x24b973("FEE", _0x431780, _0x318430);
              syncedCount++;
              _doSyncGroupPatentInfo(_0x21986a, _0x24b973, _0x4c72bf, _0x517dc8);
            }, "FEE");
          }, "SQ");
        } else {
          if (_0x1d80e1.indexOf("SQ") > -1) {
            parseData(_0x431780, patentData.patentInfo, function (_0x16f696) {
              _0x16f696.flag == false && (_0x16f696.patentNo = _0x431780, syncedErrorArray.push(_0x16f696));
              _0x24b973("SQ", _0x431780, _0x16f696);
              syncedCount++;
              _doSyncGroupPatentInfo(_0x21986a, _0x24b973, _0x4c72bf, _0x517dc8);
            }, "SQ");
          } else {
            _0x1d80e1.indexOf("FEE") > -1 && parseData(_0x431780, patentData.feeInfo, function (_0x5095a0) {
              _0x5095a0.flag == false && (_0x5095a0.patentNo = _0x431780, syncedErrorArray.push(_0x5095a0));
              _0x24b973("FEE", _0x431780, _0x5095a0);
              syncedCount++;
              _doSyncGroupPatentInfo(_0x21986a, _0x24b973, _0x4c72bf, _0x517dc8);
            }, "FEE");
          }
        }
      }
    }, 1000);
  });
}
function parseData(_0x47dee7, _0x4f70c7, _0xc1b3a4, _0x30dc5a) {
  var _0x704c15 = {
    msg: "",
    msg2: "",
    patentData: {},
    flag: false,
    writeError: true
  };
  var _0x3b24cb = "";
  var _0x141c75 = "";
  checkLocalSession(function (_0x183844) {
    try {
      if (_0x183844.valid_flag == undefined || _0x183844.valid_flag == false) {
        _0x3b24cb = "专利助手用户标识解析失败了，请重新安装插件，或者刷新页面多尝试几次";
        _0x704c15.msg = _0x3b24cb;
        _0x704c15.msg2 = _0x3b24cb;
        _0xc1b3a4(_0x704c15);
        return;
      }
      if (JSON.stringify(_0x4f70c7) == "{}") {
        _0x3b24cb = "未获取到正确的数据，可能未登录国知局或者登录国知局已失效，请尝试重新登录后，再次查询";
        _0x704c15.msg = _0x3b24cb;
        _0x704c15.msg2 = _0x3b24cb;
        _0xc1b3a4(_0x704c15);
        return;
      }
      var _0x7ceb69 = {};
      _0x7ceb69.sessionId = _0x183844.sessionId;
      _0x7ceb69.sessionId2 = _0x183844.sessionId2;
      _0x7ceb69.patentNo = formatPatentNo(_0x47dee7);
      _0x7ceb69.patentNo2 = $.mdf(_0x7ceb69.patentNo);
      _0x7ceb69.v = version;
      _0x7ceb69.oriData = JSON.stringify(_0x4f70c7);
      _0x7ceb69.type = _0x30dc5a;
      openAjx("C", server_path + "/api/cp/parseData", _0x7ceb69, 60000, "POST", true, function (_0x1ebca5) {
        var _0x28190e = _0x1ebca5.upper_limit;
        var _0x430c7c = _0x1ebca5.service_expires;
        var _0x1e417a = _0x1ebca5.v_error;
        var _0x57626a = _0x1ebca5.pData;
        if (_0x1e417a != undefined && _0x1e417a != "") {
          _0x3b24cb = "插件版本不是最新的版本，请升级版本后，再尝试进行查询";
          _0x141c75 = _0x3b24cb;
        } else {
          if (_0x28190e != undefined && _0x28190e != "") {
            _0x3b24cb = "当天查询次数已达上限【" + _0x28190e + "】次，请点击浏览器上的【专利小助手】图标，联系客服购买VIP服务后再使用，如已开通VIP服务，请点此<a style='line-height: 40px;' name='tipConfigBtn' href='javascript:void(0)'>进行设置</a>";
            _0x141c75 = "当天查询次数已达上限【" + _0x28190e + "】次，请点击浏览器上的【专利小助手】图标，联系客服购买VIP服务";
          } else {
            _0x430c7c != undefined && _0x430c7c != "" && (_0x3b24cb = "套餐已到期【" + _0x430c7c + "】，请点击浏览器上的【专利小助手】图标，联系客服购买VIP服务后再使用，如已开通VIP服务，请点此<a style='line-height: 40px;' name='tipConfigBtn' href='javascript:void(0)'>进行设置</a>", _0x141c75 = "套餐已到期【" + _0x430c7c + "】，请点击浏览器上的【专利小助手】图标，联系客服购买VIP服务");
          }
        }
        _0x704c15.msg = _0x3b24cb;
        _0x704c15.msg2 = _0x141c75;
        _0x704c15.patentData = notEmpty(_0x3b24cb) ? {} : _0x57626a;
        _0x704c15.flag = notEmpty(_0x3b24cb) ? false : true;
        _0xc1b3a4(_0x704c15);
        return;
      }, function (_0xa7d79c) {
        _0x3b24cb = "与服务器通信出现异常，请检查网络是否断开，重装插件或者刷新页面多尝试几次";
        _0x704c15.msg = _0x3b24cb;
        _0x704c15.msg2 = _0x3b24cb;
        _0xc1b3a4(_0x704c15);
        return;
      });
    } catch (_0x33e0bd) {
      console.error(_0x33e0bd);
      _0x3b24cb = "界面解析数据出现异常了，请刷新页面重试下";
      _0x704c15.msg = _0x3b24cb;
      _0x704c15.msg2 = _0x3b24cb;
      _0xc1b3a4(_0x704c15);
    }
  });
}
function loadIframe(_0x143491, _0x50d7bc, _0x356b76 = "_loadTempIframe") {
  $("#" + _0x356b76).length <= 0 ? $("<iframe id=\"" + _0x356b76 + "\" src=\"" + _0x143491 + "\" style=\"width: 100%;height: 500px;display: none;\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>").appendTo(document.body) : $("#" + _0x356b76).attr("src", _0x143491);
  _0x50d7bc();
}
function continueSyncLoginAlert(_0x8a92e6, _0x880486, _0x294b63, _0x237e73, _0x4aec3a, _0x3eef13, _0x49d991 = "no") {
  loginAlert(_0x8a92e6, _0x3eef13, function () {
    layer.confirm("国知局已经成功登录了吗？", {
      btn: ["是-继续同步", "不同步了"]
    }, function () {
      layer.closeAll();
      syncListArray.unshift(_0x880486);
      _doSyncGroupPatentInfo(_0x294b63, _0x237e73, _0x4aec3a, _0x49d991);
      showSyncWin();
    }, function () {
      layer.closeAll();
    });
  });
}
function loginAlert(_0x4cec15, _0x488443, _0x141a2b) {
  layer.alert(_0x4cec15, {
    icon: 0,
    btn: "打开登录",
    cancel: function () {
      layer.closeAll();
    }
  }, function () {
    layer.closeAll();
    (_0x488443 == undefined || _0x488443 == "") && (_0x488443 = "https://cpquery.cponline.cnipa.gov.cn/detail/index?zhuanlisqh=&anjianbh");
    windowCenterOpen("专利小助手-登录", _0x488443);
    _0x141a2b != undefined && _0x141a2b();
  });
}
function showSyncWin() {
  var _0x8c88b1 = "<div id='syncDiv' style='padding: 20px;font-size: 14px;'><div style='display: flex;justify-content: left;line-height: 32px;'><img id='syncLoadingImg' style='margin-right: 20px;' src='" + loadingBase64 + "'><span id='syncStatus' style='color: #ff6600;font-weight: bold;'>正在同步中</span><span id='syncingPatentNo' style='margin-left: 20px;font-weight: 600;'></span> </div></br>" + "同步说明\u3000：\u3000<span style='font-weight: 300;font-size: 14px;line-height: 32px;'>数据在当天被同步后，再次同步时，将不再去国知局获取最新数据</span>\u3000</br>" + "同步总数\u3000：\u3000<span style='color:#ff6600;font-weight: bold;font-size: 14px;line-height: 32px;' id='syncCountSpan'></span>\u3000</br>" + "同步成功数：\u3000<span  style='color:green;font-weight: bold;font-size: 14px;line-height: 32px;' id='syncedSuccessCountSpan'>0</span>\u3000</br>" + "同步失败数：\u3000<span  style='color:#ff6600;font-weight: bold;font-size: 14px;line-height: 32px;' id='syncedErrorCountSpan'>0</span><span  style='color:cornflowerblue;text-decoration: underline;margin-left:40px;font-size: 14px;cursor: pointer' id='viewSyncErrorBtn'>查看</span> </br>" + "</div>";
  layer.alert(_0x8c88b1, {
    title: "同步数据...",
    type: 1,
    area: ["570px", "340px"],
    closeBtn: 0,
    btn: "停止同步（关闭）"
  }, function () {
    if (syncListLength - syncedCount <= 0) {
      clearInterval(_0x3b53bb);
      layer.closeAll();
    } else {
      syncListArray.length = 0;
      closeSyncWinFlag = "1";
      $("#syncStatus").html("正在停止同步，请稍后...");
      $("#syncStatus").css("color", "#f56c6c");
      $("#syncLoadingImg").hide();
      $("#syncingPatentNo").hide();
    }
  });
  $("#syncCountSpan").html(syncListLength);
  var _0x3b53bb = setInterval(function () {
    $("#syncCountSpan").html(syncListLength);
    var _0xd694df = syncedCount - syncedErrorArray.length;
    $("#syncedSuccessCountSpan").html(_0xd694df <= 0 ? 0 : _0xd694df);
    $("#syncedErrorCountSpan").html(syncedErrorArray.length);
    $("#syncingPatentNo").html(syncingPatentNo == "" ? "" : "【专利号：" + syncingPatentNo + "】");
    if (closeSyncWinFlag == "1" && stopedSyncFlag == "1") {
      clearInterval(_0x3b53bb);
      layer.closeAll();
    } else {
      if (syncListLength - syncedCount <= 0) {
        $("#syncStatus").html("同步完成");
        $("#syncLoadingImg").hide();
        $("#syncingPatentNo").hide();
        $("#syncStatus").css("color", "green");
        syncListArray.length = 0;
        clearInterval(_0x3b53bb);
      }
    }
  }, 500);
  $("#viewSyncErrorBtn").unbind("click").bind("click", function () {
    if (syncedErrorArray.length > 0) {
      var _0x1b9659 = "";
      for (let _0x35962d = 0; _0x35962d < syncedErrorArray.length; _0x35962d++) {
        var _0x18b57e = syncedErrorArray[_0x35962d];
        _0x1b9659 = _0x1b9659 + "<div>" + _0x18b57e.patentNo + "：" + _0x18b57e.msg2 + "</div>";
      }
      var _0x411835 = layer.open({
        type: 1,
        closeBtn: 0,
        title: "同步失败的专利",
        area: ["900px", "400px"],
        id: "errorWin",
        resize: false,
        btn: ["关闭"],
        btnAlign: "c",
        moveType: 0,
        content: "<div style=\"padding: 10px; line-height: 22px; font-weight: 300;word-break: break-all;\">" + _0x1b9659 + "</div>"
      });
    }
  });
}
function checkLsntRefVip(_0x2f536d) {
  checkLocalSession(function (_0x3d2faf) {
    if (_0x3d2faf.valid_flag == true) {
      try {
        layer.load();
        openAjx("C", server_path + "/api/cp/validLsntRefVip", _0x3d2faf, 60000, "POST", true, function (_0x1b20b7) {
          layer.closeAll("loading");
          var _0x4ea67f = _0x1b20b7.upper_limit;
          var _0x36b5c2 = _0x1b20b7.service_expires;
          var _0x1e11c1 = _0x1b20b7.user_error;
          var _0x2d4860 = _0x1b20b7.v_error;
          if (_0x2d4860 != undefined && _0x2d4860 + "" != "") {
            layer.alert("插件版本不是最新的版本，请升级版本后，再尝试进行查询或者刷新", {
              icon: 0
            });
          } else {
            if (_0x4ea67f != undefined && _0x4ea67f + "" != "") {
              layer.alert("当天查询次数已达上限（" + _0x4ea67f + "）次，请点击浏览器上的【专利小助手】图标，自助【开通VIP服务】后再进行查看或者刷新", {
                icon: 0
              });
            } else {
              if (_0x36b5c2 != undefined && _0x36b5c2 + "" != "") {
                layer.alert("套餐已到期（" + _0x36b5c2 + "），请点击浏览器上的【专利小助手】图标，自助【开通VIP服务】后再进行查看或者刷新", {
                  icon: 0
                });
              } else {
                _0x1e11c1 != undefined && _0x1e11c1 + "" != "" ? layer.alert("专利助手用户标识解析失败了，请重新安装插件，或者刷新页面多尝试几次", {
                  icon: 0
                }) : _0x2f536d();
              }
            }
          }
        }, function (_0x103254) {
          layer.closeAll("loading");
          layer.msg("查询失败了，与服务器通信异常，请刷新页面或者尝试重试下");
        });
      } catch (_0x424229) {
        layer.closeAll("loading");
        layer.msg("小助手异常了，请刷新界面再重试下");
      }
    } else {
      layer.alert("专利助手用户标识解析失败了，请重新安装插件，或者刷新页面多尝试几次", {
        icon: 0
      });
    }
  });
}
function writeTip(_0x2d1e05) {
  var _0x30d3d6 = $("<div>" + _0x2d1e05 + "</div>");
  _0x30d3d6.css("line-height", "48px");
  _0x30d3d6.css("border", "1px solid #dcd6d6");
  _0x30d3d6.css("border-radius", "5px");
  _0x30d3d6.css("text-transform", "uppercase");
  _0x30d3d6.css("background", "#ececec");
  _0x30d3d6.css("color", "#555");
  _0x30d3d6.css("font-family", "Impact, sans-serif");
  _0x30d3d6.css("font-size", "20px");
  _0x30d3d6.css("padding", "30px 20px");
  _0x30d3d6.css("position", "absolute");
  _0x30d3d6.css("left", "50%");
  _0x30d3d6.css("top", "50%");
  _0x30d3d6.css("margin-left", "-500px");
  _0x30d3d6.css("transform", "translateY(-50%)");
  _0x30d3d6.css("text-align", "center");
  _0x30d3d6.css("width", "200px");
  _0x30d3d6.css("width", "1000px");
  $("body").css("background", "none");
  $("body").html(_0x30d3d6.prop("outerHTML"));
  $("a[name=tipConfigBtn]").on("click", function () {
    var _0x34dce2 = chrome.extension.getURL("config_account.html");
    chrome.runtime.sendMessage({
      from: "C",
      to: "B",
      msgtype: "update_tab",
      msg: _0x34dce2
    });
  });
}
