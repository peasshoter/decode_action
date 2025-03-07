//Fri Mar 07 2025 08:02:27 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var syncListArray = new Array();
var syncListLength = 0;
var syncedCount = 0;
var syncedErrorArray = [];
var stopedSyncFlag = "0";
var closeSyncWinFlag = "0";
var pmId = getUrlParam("_pmId") == null ? genID("NORMAL") : getUrlParam("_pmId");
var patentData = [];
var syncingPatentNo = "";
var loadingBase64 = "data:image/gif;base64,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";
Date.prototype.format = function (_0x5ecc4d) {
  var _0x59e3dc = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds()
  };
  if (/(y+)/.test(_0x5ecc4d)) {
    _0x5ecc4d = _0x5ecc4d.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var _0x44ff74 in _0x59e3dc) {
    var _0x168dd2 = _0x59e3dc[_0x44ff74];
    if (new RegExp("(" + _0x44ff74 + ")").test(_0x5ecc4d)) {
      _0x5ecc4d = _0x5ecc4d.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x168dd2 : ("00" + _0x168dd2).substr(("" + _0x168dd2).length));
    }
  }
  return _0x5ecc4d;
};
window.addEventListener("message", function (_0x49502c) {
  try {
    var _0x3b080c = _0x49502c.data;
    var _0xc04c30 = _0x49502c.origin;
    var _0x48cb82 = _0x3b080c.to;
    var _0x1e9770 = _0x3b080c.msgtype;
    var _0x53d01b = _0x3b080c.msg;
    var _0x18ed2e = _0x3b080c.msgId;
    var _0x40e285 = {
      msgId: _0x18ed2e,
      from: "SC",
      to: "WEB"
    };
    if (_0x48cb82 == "SC" && _0x1e9770 == "sync_patent") {
      var _0x479175 = _0x53d01b.patentsniffList;
      var _0x373286 = _0x53d01b.types;
      _syncGroupPatentInfo(_0x479175, _0x373286, function (_0xbef2e5, _0x6e749a, _0x6e8366) {
        _0x40e285.msgtype = "sync_patent_cb";
        _0x40e285.msg = {
          cbType: "1",
          syncType: _0xbef2e5,
          successData: _0x6e8366,
          clickPatentNo: _0x6e749a
        };
        _0x49502c.source.postMessage(_0x40e285, _0xc04c30);
      }, function (_0x1a61c8) {
        _0x40e285.msgtype = "sync_patent_cb";
        _0x40e285.msg = {
          cbType: "2",
          syncErrorList: _0x1a61c8
        };
        _0x49502c.source.postMessage(_0x40e285, _0xc04c30);
      });
    } else {
      if (_0x48cb82 == "SC" && _0x1e9770 == "get_finger_print") {
        _0x40e285.msgtype = "get_finger_print_cb";
        _0x40e285.msg = "";
        chrome.storage.local.get("patent_assist_session_id", function (_0x3baf32) {
          _0x3baf32.patent_assist_session_id != undefined && _0x3baf32.patent_assist_session_id != "" && (_0x40e285.msg = _0x3baf32.patent_assist_session_id);
          _0x49502c.source.postMessage(_0x40e285, _0xc04c30);
        });
      } else {
        if (_0x48cb82 == "SC" && _0x1e9770 == "view_patent_detail") {
          var _0x560588 = _0x53d01b.patentNo;
          _viewPatentDetail(_0x560588);
        } else {
          if (_0x48cb82 == "SC" && _0x1e9770 == "view_patent_lsnt") {
            var _0x560588 = _0x53d01b.patentNo;
            _viewLsnt(_0x560588);
          } else {
            if (_0x48cb82 == "SC" && _0x1e9770 == "view_patent_fee") {
              var _0x560588 = _0x53d01b.patentNo;
              _viewFee(_0x560588);
            } else {
              if (_0x48cb82 == "SC" && _0x1e9770 == "patent_data") {
                patentData.push(_0x53d01b);
              } else {
                if (_0x48cb82 == "SC" && _0x1e9770 == "patent_data_parse_sq") {
                  pmId == _0x18ed2e && openAjx("C", server_path + "/api/cp/getPatentInfoByCurDay", {
                    patentNo: formatPatentNo(_0x53d01b.patentNo)
                  }, 60000, "POST", true, function (_0x4703a1) {
                    var _0x2e1c56 = _0x4703a1.currdata;
                    _0x2e1c56 != "yes" && parseData(_0x53d01b.patentNo, _0x53d01b.patentInfo, function (_0x129e93) {
                      _0x129e93.flag == false && writeTip(notEmpty(_0x129e93.msg) ? _0x129e93.msg : "未知的异常信息，无法查看，请刷新页面重试下");
                    }, "SQ");
                  });
                } else {
                  _0x48cb82 == "SC" && _0x1e9770 == "patent_data_parse_fee" && pmId == _0x18ed2e && openAjx("C", server_path + "/api/cp/getPatentFeeByCurDay", {
                    patentNo: formatPatentNo(_0x53d01b.patentNo)
                  }, 60000, "POST", true, function (_0x3abe6d) {
                    var _0x44c18d = _0x3abe6d.currdata;
                    _0x44c18d != "yes" && parseData(_0x53d01b.patentNo, _0x53d01b.feeInfo, function (_0x49c8fa) {
                      _0x49c8fa.flag == false && writeTip(notEmpty(_0x49c8fa.msg) ? _0x49c8fa.msg : "未知的异常信息，无法查看，请刷新页面重试下");
                    }, "FEE");
                  });
                }
              }
            }
          }
        }
      }
    }
  } catch (_0x378b2c) {
    console.log("sync_core 接收postMessage消息的方法出现异常了");
    console.error(_0x378b2c);
    _0x48cb82 == "SC" && _0x1e9770 == "get_finger_print" && (_0x40e285.msgtype = "get_finger_print_cb", _0x40e285.msg = "", _0x49502c.source.postMessage(_0x40e285, _0xc04c30));
  }
}, false);
function _viewPatentDetail(_0x82d835) {
  try {
    layer.load();
    openAjx("C", "http://search.cnipr.com/login!checkLogin.action?randomNum=" + Date.now(), {}, 60000, "GET", true, function (_0x24c480) {
      layer.closeAll("loading");
      if (!_0x24c480.success) {
        var _0x4723d2 = "检测到您还未登录到【知识产权出版社系统】，请您登录后，再进行查看";
        loginAlert(_0x4723d2, "http://search.cnipr.com?__autoLogin=yes");
        return;
      }
      var _0x3c0403 = {
        strWhere: "申请号=(%" + _0x82d835 + "%)",
        start: "1",
        recordCursor: "0",
        limit: "1",
        option: "2",
        iHitPointType: "115",
        strSortMethod: "RELEVANCE",
        strSources: "FMZL,SYXX,WGZL,TWZL,HKPATENT,USPATENT,JPPATENT,EPPATENT,WOPATENT,GBPATENT,DEPATENT,FRPATENT,CHPATENT,KRPATENT,RUPATENT,APPATENT,ATPATENT,AUPATENT,ITPATENT,SEPATENT,CAPATENT,ESPATENT,GCPATENT,ASPATENT,OTHERPATENT,TWPATENT"
      };
      windowOpen2TempPost("http://search.cnipr.com/search!doDetailSearch.action", _0x3c0403, "", "", "no");
    }, function (_0x3e599a) {
      layer.closeAll("loading");
      layer.alert("登录【知识产权出版社系统】失败了，请点击如下链接：<a style='color: green;text-decoration: underline' href='http://search.cnipr.com' target='_blank'>http://search.cnipr.com</a>，确保正常打开并正常登陆", {
        icon: 0
      });
    });
  } catch (_0x297fd1) {
    layer.closeAll("loading");
    layer.msg("小助手异常了，请刷新界面再重试下");
  }
}
function _viewLsnt(_0x2a0421) {
  checkLsntRefVip(function () {
    try {
      _0x2a0421 = transformPatent(_0x2a0421);
      var _0x37df84 = "https://cpquery.cponline.cnipa.gov.cn/chinesepatent/index?_view=yes&_patentNo=" + _0x2a0421 + "&_pmId=" + pmId;
      windowCenterOpen("专利小助手-申请信息查看", _0x37df84);
    } catch (_0x381ee) {
      layer.closeAll("loading");
      layer.msg("小助手异常了，请刷新界面或尝试重新点击查看");
    }
  });
}
function _viewFee(_0x42671e) {
  checkLsntRefVip(function () {
    try {
      _0x42671e = transformPatent(_0x42671e);
      var _0x49bdae = "https://cpquery.cponline.cnipa.gov.cn/chinesepatent/index?_view=yes&_patentNo=" + _0x42671e + "&_pmId=" + pmId;
      windowCenterOpen("专利小助手-费用信息查看", _0x49bdae);
    } catch (_0x2eb468) {
      console.error(_0x2eb468);
      layer.closeAll("loading");
      layer.msg("小助手异常了，请刷新界面再重试下");
    }
  });
}
function _syncGroupPatentInfo(_0x441c64, _0x4ab777, _0x30c49b, _0x35a8f9) {
  checkLsntRefVip(function () {
    syncListArray = _0x441c64;
    syncListLength = _0x441c64.length;
    syncedErrorArray = [];
    syncedCount = 0;
    stopedSyncFlag = "0";
    closeSyncWinFlag = "0";
    syncingPatentNo = "";
    _doSyncGroupPatentInfo(_0x4ab777, _0x30c49b, _0x35a8f9);
    layer.closeAll();
    showSyncWin();
  });
}
async function _doSyncGroupPatentInfo(_0x5edc0d, _0x4c939d, _0x1e7b0d) {
  try {
    if (syncListArray.length <= 0) {
      stopedSyncFlag = "1";
      _0x1e7b0d && _0x1e7b0d(syncedErrorArray);
      if (closeSyncWinFlag == "0") {
        let _0x34d0b4 = syncedCount - syncedErrorArray.length;
        chrome.runtime.sendMessage({
          from: "SC",
          to: "B",
          msgtype: "notify",
          msg: {
            title: "专利小助手通知",
            message: "已完成" + (_0x34d0b4 <= 0 ? 0 : _0x34d0b4) + "条专利的刷新",
            type: "basic"
          }
        });
      }
      return;
    }
    patentData = [];
    let _0xc8d726 = [];
    for (let _0x45c723 = 0; _0x45c723 < 1; _0x45c723++) {
      let _0x1cbe9f = syncListArray.shift();
      if (_0x1cbe9f == undefined) {
        continue;
      }
      _0x1cbe9f = _0x1cbe9f.replace(".", "").replace("CN", "").replace("ZL", "");
      if (_0x5edc0d.indexOf("SQ") > -1) {
        let _0xc3707d = getCurrentData(_0x5edc0d, "SQ", _0x1cbe9f, _0x4c939d, server_path + "/api/cp/getPatentInfoByCurDay");
        let _0x31d922 = await _0xc3707d;
        if (_0x31d922.indexOf("SQ") > -1) {
          _0xc8d726.push(_0x1cbe9f);
          continue;
        }
      }
      if (_0x5edc0d.indexOf("FEE") > -1) {
        let _0x2dd722 = getCurrentData(_0x5edc0d, "FEE", _0x1cbe9f, _0x4c939d, server_path + "/api/cp/getPatentFeeByCurDay");
        let _0x234ad1 = await _0x2dd722;
        if (_0x234ad1.indexOf("FEE") > -1) {
          _0xc8d726.push(_0x1cbe9f);
          continue;
        }
      }
      syncedCount = syncedCount + 1;
    }
    loadPatentDataByIframe(_0x5edc0d, _0xc8d726, _0x4c939d, _0x1e7b0d);
  } catch (_0x22ba2e) {
    console.error(_0x22ba2e);
    layer.msg("小助手异常了，请刷新界面再重试下");
  }
}
function loadPatentDataByIframe(_0x2c5918, _0x33fce3, _0x4ba084, _0x57d1e8) {
  syncingPatentNo = _0x33fce3.join(",");
  if (syncingPatentNo.length <= 0) {
    _doSyncGroupPatentInfo(_0x2c5918, _0x4ba084, _0x57d1e8);
    return;
  }
  let _0x40746d = "https://cpquery.cponline.cnipa.gov.cn/chinesepatent/index?_refresh=yes&_refPatents=" + encodeURIComponent(syncingPatentNo) + "&_types=" + _0x2c5918;
  loadIframe(_0x40746d, function () {
    var _0x2e0ef3 = setInterval(function () {
      var _0x473de9 = patentData[0] || {};
      var _0x54c58d = _0x473de9.patentInfo || {};
      var _0x1746b9 = _0x473de9.feeInfo || {};
      if ((_0x54c58d.code || 200) == 401 || (_0x1746b9.code || 200) == 401) {
        clearInterval(_0x2e0ef3);
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
        var _0x56622b = "https://cpquery.cponline.cnipa.gov.cn/chinesepatent/index?_view=yes&_patentNo=" + _0x33fce3[0] + "&_pmId=" + pmId;
        continueSyncLoginAlert("未获取到正确的数据，可能未登录国知局或者登录国知局已失效，请尝试重新登录后，再次查询", _0x2c5918, _0x4ba084, _0x57d1e8, _0x56622b, _0x33fce3);
        return;
      }
      if (patentData.length == _0x33fce3.length) {
        clearInterval(_0x2e0ef3);
        var _0xff88d4 = [];
        for (var _0x2a4882 of patentData) {
          if (_0x2c5918.indexOf("SQ") > -1 && _0x2c5918.indexOf("FEE") > -1) {
            var _0x5ebb95 = _0x2a4882.patentInfo.patentNo;
            parseData(_0x5ebb95, _0x2a4882.patentInfo.data, function (_0x1bf4db) {
              var _0x34a61f = false;
              _0x1bf4db.flag == false && (_0x34a61f = true);
              _0x4ba084("SQ", _0x5ebb95, _0x1bf4db);
              parseData(_0x5ebb95, _0x2a4882.feeInfo.data, function (_0x4adf1c) {
                (_0x4adf1c.flag == false || _0x34a61f) && (_0x4adf1c.patentNo = _0x5ebb95, syncedErrorArray.push(_0x4adf1c));
                _0xff88d4.push(1);
                _0x4ba084("FEE", _0x5ebb95, _0x4adf1c);
              }, "FEE");
            }, "SQ");
          } else {
            if (_0x2c5918.indexOf("SQ") > -1) {
              var _0x5ebb95 = _0x2a4882.patentInfo.patentNo;
              parseData(_0x5ebb95, _0x2a4882.patentInfo.data, function (_0x507424) {
                _0x507424.flag == false && (_0x507424.patentNo = _0x5ebb95, syncedErrorArray.push(_0x507424));
                _0xff88d4.push(1);
                _0x4ba084("SQ", _0x5ebb95, _0x507424);
              }, "SQ");
            } else {
              if (_0x2c5918.indexOf("FEE") > -1) {
                var _0x5ebb95 = _0x2a4882.feeInfo.patentNo;
                parseData(_0x5ebb95, _0x2a4882.feeInfo.data, function (_0x2ab502) {
                  _0x2ab502.flag == false && (_0x2ab502.patentNo = _0x5ebb95, syncedErrorArray.push(_0x2ab502));
                  _0xff88d4.push(1);
                  _0x4ba084("FEE", _0x5ebb95, _0x2ab502);
                }, "FEE");
              }
            }
          }
        }
        var _0x1ed769 = setInterval(function () {
          _0xff88d4.length == patentData.length && (clearInterval(_0x1ed769), syncedCount = syncedCount + _0xff88d4.length, _0xff88d4 = [], _doSyncGroupPatentInfo(_0x2c5918, _0x4ba084, _0x57d1e8));
        }, 2000);
      }
    }, 500);
  });
}
function getCurrentData(_0x5278d3, _0x48f8cf, _0x34dc66, _0x175479, _0x450e40) {
  return new Promise((_0x117ab7, _0x558496) => {
    let _0x2e7b87 = {
      msg: "",
      msg2: "",
      patentData: {},
      flag: true
    };
    openAjx("C", _0x450e40, {
      patentNo: formatPatentNo(_0x34dc66)
    }, 60000, "POST", true, function (_0x2d2593) {
      var _0x292687 = _0x2d2593.currdata;
      _0x292687 == "yes" && (_0x2e7b87.patentData = _0x2d2593, _0x175479(_0x48f8cf, _0x34dc66, _0x2e7b87), _0x5278d3 = _0x5278d3.replace("," + _0x48f8cf, "").replace(_0x48f8cf + ",", "").replace(_0x48f8cf, ""));
      _0x117ab7(_0x5278d3);
    });
  });
}
function parseData(_0x480701, _0x165748, _0x34b543, _0x2480e8) {
  var _0x2a2787 = {
    msg: "",
    msg2: "",
    patentData: {},
    flag: false,
    writeError: true
  };
  var _0x47656e = "";
  var _0x2bfb38 = "";
  checkLocalSession(function (_0x32fd70) {
    try {
      if (_0x32fd70.valid_flag == undefined || _0x32fd70.valid_flag == false) {
        _0x47656e = "专利助手用户标识解析失败了，请重新安装插件，或者刷新页面多尝试几次";
        _0x2a2787.msg = _0x47656e;
        _0x2a2787.msg2 = _0x47656e;
        _0x34b543(_0x2a2787);
        return;
      }
      if (JSON.stringify(_0x165748) == "{}") {
        _0x47656e = "未获取到正确的数据，可能未登录国知局或者登录国知局已失效，请尝试重新登录后，再次查询";
        _0x2a2787.msg = _0x47656e;
        _0x2a2787.msg2 = _0x47656e;
        _0x34b543(_0x2a2787);
        return;
      }
      var _0xda52ce = {};
      _0xda52ce.sessionId = _0x32fd70.sessionId;
      _0xda52ce.sessionId2 = _0x32fd70.sessionId2;
      _0xda52ce.patentNo = formatPatentNo(_0x480701);
      _0xda52ce.patentNo2 = $.mdf(_0xda52ce.patentNo);
      _0xda52ce.v = version;
      _0xda52ce.oriData = JSON.stringify(_0x165748);
      _0xda52ce.type = _0x2480e8;
      openAjx("C", server_path + "/api/cp/parseData", _0xda52ce, 60000, "POST", true, function (_0x2f207e) {
        var _0x581253 = _0x2f207e.upper_limit;
        var _0x1539e0 = _0x2f207e.service_expires;
        var _0x58861f = _0x2f207e.v_error;
        var _0x3b56ac = _0x2f207e.pData;
        if (_0x58861f != undefined && _0x58861f != "") {
          _0x47656e = "插件版本不是最新的版本，请升级版本后，再尝试进行查询";
          _0x2bfb38 = _0x47656e;
        } else {
          if (_0x581253 != undefined && _0x581253 != "") {
            _0x47656e = "当天查询次数已达上限【" + _0x581253 + "】次，请点击浏览器上的【专利小助手】图标，联系客服购买VIP服务后再使用，如已开通VIP服务，请点此<a style='line-height: 40px;' name='tipConfigBtn' href='javascript:void(0)'>进行设置</a>";
            _0x2bfb38 = "当天查询次数已达上限【" + _0x581253 + "】次，请点击浏览器上的【专利小助手】图标，联系客服购买VIP服务";
          } else {
            _0x1539e0 != undefined && _0x1539e0 != "" && (_0x47656e = "套餐已到期【" + _0x1539e0 + "】，请点击浏览器上的【专利小助手】图标，联系客服购买VIP服务后再使用，如已开通VIP服务，请点此<a style='line-height: 40px;' name='tipConfigBtn' href='javascript:void(0)'>进行设置</a>", _0x2bfb38 = "套餐已到期【" + _0x1539e0 + "】，请点击浏览器上的【专利小助手】图标，联系客服购买VIP服务");
          }
        }
        _0x2a2787.msg = _0x47656e;
        _0x2a2787.msg2 = _0x2bfb38;
        _0x2a2787.patentData = notEmpty(_0x47656e) ? {} : _0x3b56ac;
        _0x2a2787.flag = notEmpty(_0x47656e) ? false : true;
        _0x34b543(_0x2a2787);
        return;
      }, function (_0x5dbf8d) {
        _0x47656e = "与服务器通信出现异常，请检查网络是否断开，重装插件或者刷新页面多尝试几次";
        _0x2a2787.msg = _0x47656e;
        _0x2a2787.msg2 = _0x47656e;
        _0x34b543(_0x2a2787);
        return;
      });
    } catch (_0x30759a) {
      console.error(_0x30759a);
      _0x47656e = "界面解析数据出现异常了，请刷新页面重试下";
      _0x2a2787.msg = _0x47656e;
      _0x2a2787.msg2 = _0x47656e;
      _0x34b543(_0x2a2787);
    }
  });
}
function loadIframe(_0x5df7cb, _0x2177ab, _0x5213b4 = "_loadTempIframe") {
  $("#" + _0x5213b4).length <= 0 ? $("<iframe id=\"" + _0x5213b4 + "\" src=\"" + _0x5df7cb + "\" style=\"width: 100%;height: 500px;display: none;\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>").appendTo(document.body) : $("#" + _0x5213b4).attr("src", _0x5df7cb);
  _0x2177ab();
}
function continueSyncLoginAlert(_0x1e9fd6, _0x347ff5, _0x517931, _0x530ddd, _0x4243c2, _0x3751bc) {
  loginAlert(_0x1e9fd6, _0x4243c2, function () {
    layer.confirm("国知局已经成功登录了吗？", {
      btn: ["是-继续同步", "不同步了"]
    }, function () {
      layer.closeAll();
      var _0x2e82c7 = (_0x3751bc + "").split(",");
      for (var _0x5eebec = 0; _0x5eebec < _0x2e82c7.length; _0x5eebec++) {
        syncListArray.unshift(_0x3751bc[_0x5eebec]);
      }
      _doSyncGroupPatentInfo(_0x347ff5, _0x517931, _0x530ddd);
      showSyncWin();
    }, function () {
      layer.closeAll();
    });
  });
}
function loginAlert(_0x13bb71, _0x125e08, _0x463c9f) {
  layer.alert(_0x13bb71, {
    icon: 0,
    btn: "打开登录",
    cancel: function () {
      layer.closeAll();
    }
  }, function () {
    layer.closeAll();
    (_0x125e08 == undefined || _0x125e08 == "") && (_0x125e08 = "https://cpquery.cponline.cnipa.gov.cn/detail/index?zhuanlisqh=&anjianbh");
    windowCenterOpen("专利小助手-登录", _0x125e08);
    _0x463c9f != undefined && _0x463c9f();
  });
}
function showSyncWin() {
  var _0xbe7908 = "<div id='syncDiv' style='padding: 20px;font-size: 14px;'><div style='display: flex;justify-content: left;line-height: 32px;'><img id='syncLoadingImg' style='margin-right: 20px;' src='" + loadingBase64 + "'><span id='syncStatus' style='color: #ff6600;font-weight: bold;'>正在同步中</span><span id='syncingPatentNo' style='width: 380px;margin-left: 20px;font-weight: 600;white-space: nowrap;overflow: hidden;text-overflow: ellipsis'></span> </div></br>" + "同步说明\u3000：\u3000<span style='font-weight: 300;font-size: 14px;line-height: 32px;'>数据在当天被同步后，再次同步时，将不再去国知局获取最新数据</span>\u3000</br>" + "同步总数\u3000：\u3000<span style='color:#ff6600;font-weight: bold;font-size: 14px;line-height: 32px;' id='syncCountSpan'></span>\u3000</br>" + "同步成功数：\u3000<span  style='color:green;font-weight: bold;font-size: 14px;line-height: 32px;' id='syncedSuccessCountSpan'>0</span>\u3000</br>" + "同步失败数：\u3000<span  style='color:#ff6600;font-weight: bold;font-size: 14px;line-height: 32px;' id='syncedErrorCountSpan'>0</span><span  style='color:cornflowerblue;text-decoration: underline;margin-left:40px;font-size: 14px;cursor: pointer' id='viewSyncErrorBtn'>查看</span> </br>" + "</div>";
  layer.alert(_0xbe7908, {
    title: "同步数据...",
    type: 1,
    area: ["570px", "340px"],
    closeBtn: 0,
    btn: "停止同步（关闭）"
  }, function () {
    if (syncListLength - syncedCount <= 0) {
      clearInterval(_0xd8db95);
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
  var _0xd8db95 = setInterval(function () {
    $("#syncCountSpan").html(syncListLength);
    var _0x200528 = syncedCount - syncedErrorArray.length;
    $("#syncedSuccessCountSpan").html(_0x200528 <= 0 ? 0 : _0x200528);
    $("#syncedErrorCountSpan").html(syncedErrorArray.length);
    $("#syncingPatentNo").html(syncingPatentNo == "" ? "" : "【" + syncingPatentNo + "】");
    if (closeSyncWinFlag == "1" && stopedSyncFlag == "1") {
      clearInterval(_0xd8db95);
      layer.closeAll();
    } else {
      if (syncListLength - syncedCount <= 0) {
        $("#syncStatus").html("同步完成");
        $("#syncLoadingImg").hide();
        $("#syncingPatentNo").hide();
        $("#syncStatus").css("color", "green");
        syncListArray.length = 0;
        clearInterval(_0xd8db95);
      }
    }
  }, 500);
  $("#viewSyncErrorBtn").unbind("click").bind("click", function () {
    if (syncedErrorArray.length > 0) {
      var _0x18f7d0 = "";
      for (let _0x2180f7 = 0; _0x2180f7 < syncedErrorArray.length; _0x2180f7++) {
        var _0x564c0e = syncedErrorArray[_0x2180f7];
        _0x18f7d0 = _0x18f7d0 + "<div>" + _0x564c0e.patentNo + "：" + _0x564c0e.msg2 + "</div>";
      }
      var _0x45e9f1 = layer.open({
        type: 1,
        closeBtn: 0,
        title: "同步失败的专利",
        area: ["900px", "400px"],
        id: "errorWin",
        resize: false,
        btn: ["关闭"],
        btnAlign: "c",
        moveType: 0,
        content: "<div style=\"padding: 10px; line-height: 22px; font-weight: 300;word-break: break-all;\">" + _0x18f7d0 + "</div>"
      });
    }
  });
}
function checkLsntRefVip(_0x3eb2fc) {
  checkLocalSession(function (_0x1ef905) {
    if (_0x1ef905.valid_flag == true) {
      try {
        layer.load();
        openAjx("C", server_path + "/api/cp/validLsntRefVip", _0x1ef905, 60000, "POST", true, function (_0x2dfa19) {
          layer.closeAll("loading");
          var _0x222235 = _0x2dfa19.upper_limit;
          var _0x494004 = _0x2dfa19.service_expires;
          var _0x27350b = _0x2dfa19.user_error;
          var _0x23c2e0 = _0x2dfa19.v_error;
          if (_0x23c2e0 != undefined && _0x23c2e0 + "" != "") {
            layer.alert("插件版本不是最新的版本，请升级版本后，再尝试进行查询或者刷新", {
              icon: 0
            });
          } else {
            if (_0x222235 != undefined && _0x222235 + "" != "") {
              layer.alert("当天查询次数已达上限（" + _0x222235 + "）次，请点击浏览器上的【专利小助手】图标，自助【开通VIP服务】后再进行查看或者刷新", {
                icon: 0
              });
            } else {
              if (_0x494004 != undefined && _0x494004 + "" != "") {
                layer.alert("套餐已到期（" + _0x494004 + "），请点击浏览器上的【专利小助手】图标，自助【开通VIP服务】后再进行查看或者刷新", {
                  icon: 0
                });
              } else {
                _0x27350b != undefined && _0x27350b + "" != "" ? layer.alert("专利助手用户标识解析失败了，请重新安装插件，或者刷新页面多尝试几次", {
                  icon: 0
                }) : _0x3eb2fc();
              }
            }
          }
        }, function (_0x2eafab) {
          layer.closeAll("loading");
          layer.msg("查询失败了，与服务器通信异常，请刷新页面或者尝试重试下");
        });
      } catch (_0x5a3df7) {
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
function writeTip(_0x146c40) {
  var _0x1a3e2c = $("<div>" + _0x146c40 + "</div>");
  _0x1a3e2c.css("line-height", "48px");
  _0x1a3e2c.css("border", "1px solid #dcd6d6");
  _0x1a3e2c.css("border-radius", "5px");
  _0x1a3e2c.css("text-transform", "uppercase");
  _0x1a3e2c.css("background", "#ececec");
  _0x1a3e2c.css("color", "#555");
  _0x1a3e2c.css("font-family", "Impact, sans-serif");
  _0x1a3e2c.css("font-size", "20px");
  _0x1a3e2c.css("padding", "30px 20px");
  _0x1a3e2c.css("position", "absolute");
  _0x1a3e2c.css("left", "50%");
  _0x1a3e2c.css("top", "50%");
  _0x1a3e2c.css("margin-left", "-500px");
  _0x1a3e2c.css("transform", "translateY(-50%)");
  _0x1a3e2c.css("text-align", "center");
  _0x1a3e2c.css("width", "200px");
  _0x1a3e2c.css("width", "1000px");
  $("body").css("background", "none");
  $("body").html(_0x1a3e2c.prop("outerHTML"));
  $("a[name=tipConfigBtn]").on("click", function () {
    var _0x32adba = chrome.extension.getURL("config_account.html");
    chrome.runtime.sendMessage({
      from: "C",
      to: "B",
      msgtype: "update_tab",
      msg: _0x32adba
    });
  });
}