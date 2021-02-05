// 查找元素	getElementsByTagName
// 查找id	getElementById
// 查找类名	getElementsByClassName
// 查找所有元素	querySelectorAll()
// 写
// document.write(Date());
// // 输出内容	.innerHTML
// // 改变id为p1的元素的内容
// document.getElementById("p1").innerHTML = "Hello Kitty！";
// // 更改元素id为myImage的src属性的值
// document.getElementById("myImage").src = "landscape.jpg";
$(function () {

	//客户端初始化调用（V4.0新增）
	leadeon.init = function () {
		$("#init_success").html("客户端初始化调用成功");
	}
	//是否开启调试模式
	var debugMode = false;
	//点击按钮改变debugMode
	$("input:radio[name='shareradio']").on("click", function () {
		if ($(this).val() == 0) {
			debugMode = true;
		}
		else {
			debugMode = false;
		}
	});
	//获取用户基础信息
	$("#getUserInfo").fastClick(function () {
		leadeon.getUserInfo({
			debug: debugMode,//调试模式
			success: function (datas) {
				$("#getUserInfo_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getUserInfo_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//H5页面打开小程序-V5.6 新增
	$("#openMiniProgram").fastClick(function () {
		var userName = $("#openMiniProgram_userName").val();
		var path = $("#openMiniProgram_path").val();
		var miniProgramType = $("#openMiniProgram_miniProgramType").val();
		leadeon.openMiniProgram({
			debug: debugMode, //调试模式
			wx: {
				"userName": userName, //小程序的username
				"path": path, //打开小程序指定页面路径
				"miniProgramType": miniProgramType, //0 正式版 1 开发板 2体验版
			},
			success: function (datas) {
				$("#openMiniProgram_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#openMiniProgram_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//支付宝授权登录 -V5.6 新增
	$("#alipaySDKauthV2").fastClick(function () {
		var alipaySDKauthV2_input = $("#alipaySDKauthV2_input").val();
		leadeon.alipaySDKauthV2({
			debug: debugMode, //调试模式
			infoStr: alipaySDKauthV2_input,
			success: function (datas) {
				$("#alipaySDKauthV2_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#alipaySDKauthV2_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//智能语义理解 -V5.7 新增
	$("#AISpeechUnderStander").fastClick(function () {
		var AISpeechUnderStander_text = $("#AISpeechUnderStander_text").val();
		leadeon.AISpeechUnderStander({
			debug: debugMode, //调试模式
			text: AISpeechUnderStander_text,
			success: function (datas) {
				$("#AISpeechUnderStander_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#AISpeechUnderStander_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//本地录音 -V5.7 新增
	$("#audioRecord").fastClick(function () {
		var isStop = $("#audioRecord_isStop").val();
		leadeon.audioRecord({
			debug: debugMode, //调试模式
			isStop: isStop, //是否立即停止录音，false为录音，true 为停止
			success: function (res) {
				$("#audioRecord_success").html('<div class="pre"><pre>' + JSON.stringify(
					res, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#audioRecord_success").html('<div class="pre"><pre>' + JSON.stringify(
					res, null, 2) + '</pre></div>');
			}
		});
	});

	//判断应用是否安装 -V5.8 新增
	$("#openHeBaoURL").fastClick(function () {
		leadeon.openHeBaoURL({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#openHeBaoURL_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#openHeBaoURL_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			}
		});
	});

	//禁止webview滑动返回效果-V5.8.2 新增,只iOS可用
	$("#forbiddenWebviewScrollBack").fastClick(function () {
		leadeon.forbiddenWebviewScrollBack({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#forbiddenWebviewScrollBack_success").html('<div class="pre"><pre>' +
					JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#forbiddenWebviewScrollBack_success").html('<div class="pre"><pre>' +
					JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//获取客户端图像识别支持的识别种类 -V6.0新增
	$("#imageRecognition").fastClick(function () {
		leadeon.imageRecognition({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#imageRecognition_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#imageRecognition_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//AR垃圾分类-V6.0新增
	$("#trashRecognition").fastClick(function () {
		var uploadURL = $("#trashRecognition_uploadURL").val();
		leadeon.trashRecognition({
			debug: debugMode, //调试模式
			uploadURL: uploadURL,
			success: function (datas) {
				$("#trashRecognition_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#trashRecognition_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//宽带视频客服sdk 调用(6.2新增)
	$("#startVoipVoiceOrVideo").fastClick(function () {
		var type = $("#startVoipVoiceOrVideo_type").val();
		var useOneScreen = $("#startVoipVoiceOrVideo_useOneScreen").val();
		var useGonetoneUserFlag = $("#startVoipVoiceOrVideo_useGonetoneUserFlag").val();
		var voiceCallUseOnline = $("#startVoipVoiceOrVideo_voiceCallUseOnline").val();
		var appKey = $("#startVoipVoiceOrVideo_appKey").val();
		var companyId = $("#startVoipVoiceOrVideo_companyId").val();
		var phoneNum = $("#startVoipVoiceOrVideo_phoneNum").val();
		var userName = $("#startVoipVoiceOrVideo_userName").val();
		var nickName = $("#startVoipVoiceOrVideo_nickName").val();
		var provinceCode = $("#startVoipVoiceOrVideo_provinceCode").val();
		leadeon.startVoipVoiceOrVideo({
			debug: debugMode, //调试模式
			type: type,
			useOneScreen: useOneScreen,
			useGonetoneUserFlag: useGonetoneUserFlag,
			voiceCallUseOnline: voiceCallUseOnline,
			appKey: appKey,
			companyId: companyId,
			phoneNum: phoneNum,
			userName: userName,
			nickName: nickName,
			provinceCode: provinceCode,
			success: function (datas) {
				$("#startVoipVoiceOrVideo_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#startVoipVoiceOrVideo_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//ios禁止webphttps及webphttp拦截 调用(6.1.5新增)
	$("#forbiddenWebp").fastClick(function () {
		leadeon.forbiddenWebp({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#forbiddenWebp_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#forbiddenWebp_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});



	//通知客户端本次识别目标 -V6.2新增
	$("#imageRecognitionConfig").fastClick(function () {
		var title = $("#imageRecognitionConfig_title").val();
		// var labelCode = $("#imageRecognitionConfig_labelCode").val();
		// var confidence = $("#imageRecognitionConfig_confidence").val();
		// var redirectURL = $("#imageRecognitionConfig_redirectURL").val();
		// var markId = $("#imageRecognitionConfig_markId").val();
		// var isShareConfig = $("#imageRecognitionConfig_isShareConfig").val();
		// var showType = $("#imageRecognitionConfig_showType").val();
		// var showValue = $("#imageRecognitionConfig_showValue").val();
		// var totalTime = $("#imageRecognitionConfig_totalTime").val();
		var imageRecognitionConfig_info = $("#imageRecognitionConfig_info").val();
		imageRecognitionConfig_info = JSON.parse(imageRecognitionConfig_info);
		leadeon.imageRecognitionConfig({
			debug: debugMode,
			title: title,
			info: imageRecognitionConfig_info.info,
			success: function (datas) {
				$("#imageRecognitionConfig_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas) + '</pre></div>');
			},
			error: function (datas) {
				$("#imageRecognitionConfig_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas) + '</pre></div>');
			}
		});
	});

	//问卷调查调用与展示 (6.3新增)
	$("#showQuestionnaire").fastClick(function () {
		var pageFlag = $("#showQuestionnaire_pageFlag").val();
		leadeon.showQuestionnaire({
			debug: debugMode, //调试模式
			pageFlag: pageFlag,
			success: function (datas) {
				$("#showQuestionnaire_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#showQuestionnaire_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//问卷调查提交成功反馈 (6.3新增)
	$("#replyAfterQuestionnaireSummit").fastClick(function () {
		leadeon.replyAfterQuestionnaireSummit({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#replyAfterQuestionnaireSummit_success").html(
					'<div class="pre"><pre>' + JSON.stringify(datas, null, 2) +
					'</pre></div>');
			},
			error: function (datas) {
				$("#replyAfterQuestionnaireSummit_success").html(
					'<div class="pre"><pre>' + JSON.stringify(datas, null, 2) +
					'</pre></div>');
			}
		});
	});

	//设备登录风控分析-6.3新增
	$("#deviceLoginAnalyse").fastClick(function () {
		leadeon.deviceLoginAnalyse({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#deviceLoginAnalyse_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#deviceLoginAnalyse_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//用户标签风控分析-6.3新增
	$("#userLoginAnalyse").fastClick(function () {
		leadeon.userLoginAnalyse({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#userLoginAnalyse_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#userLoginAnalyse_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//获取网络及运营商信息-6.3新增
	$("#getNetInfo").fastClick(function () {
		leadeon.getNetInfo({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#getNetInfo_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getNetInfo_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			}
		});
	});

	//获取页面标题栏加状态栏高度-6.4新增
	$("#getTitleHeight").fastClick(function () {
		leadeon.getTitleHeight({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#getTitleHeight_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getTitleHeight_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//打开指定的移动直播间-6.4新增
	$("#openLiveRoom").fastClick(function () {
		var anchorId = $("#openLiveRoom_anchorId").val();
		var shareNumber = $("#openLiveRoom_shareNumber").val();
		var channelId = $("#openLiveRoom_channelId").val();
		var isClose = $("#openLiveRoom_isClose").val();
		leadeon.openLiveRoom({
			debug: debugMode, //调试模式
			anchorId: anchorId,
			shareNumber: shareNumber,
			channelId: channelId,
			isClose: isClose,
			success: function (datas) {
				$("#openLiveRoom_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#openLiveRoom_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			}
		});
	});

	$("#getFloatWindowStatus_currentUrl").val(window.location.href);
	//获取浮窗任务完成情况 -V6.4 新增
	$("#getFloatWindowStatus").fastClick(function () {
		var currentUrl = $("#getFloatWindowStatus_currentUrl").val();
		var code = $("#getFloatWindowStatus_code").val();
		leadeon.getFloatWindowStatus({
			debug: debugMode, //调试模式
			currentUrl: currentUrl,
			code: code,
			success: function (datas) {
				$("#getFloatWindowStatus_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getFloatWindowStatus_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//导航栏定制指定的功能-V6.5新增
	$("#setNavigationFuncAtSecRightBtn").fastClick(function () {
		var funcName = $("#setNavigationFuncAtSecRightBtn_funcName").val();
		leadeon.setNavigationFuncAtSecRightBtn({
			debug: debugMode, //调试模式
			funcName: funcName,
			success: function (datas) {
				$("#setNavigationFuncAtSecRightBtn_success").html(
					'<div class="pre"><pre>' + JSON.stringify(datas, null, 2) +
					'</pre></div>');
			},
			error: function (datas) {
				$("#setNavigationFuncAtSecRightBtn_success").html(
					'<div class="pre"><pre>' + JSON.stringify(datas, null, 2) +
					'</pre></div>');
			}
		});
	});

	//和彩云SDK获取用户权益 -V6.6 新增
	$("#queryUserBenefits").fastClick(function () {
		leadeon.queryUserBenefits({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#queryUserBenefits_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#queryUserBenefits_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			}
		});
	});

	//调用二次鉴权
	$("#showAuthentication").fastClick(function () {
		leadeon.showAuthentication({
			debug: debugMode,//调试模式
			success: function (datas) {
				$("#showAuthentication_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#showAuthentication_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//和彩云SDK获取个人云空间 -V6.6 新增
	$("#getFileDiskInfo").fastClick(function () {
		leadeon.getFileDiskInfo({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#getFileDiskInfo_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getFileDiskInfo_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			}
		});
	});

	//和彩云SDK获取家庭云空间 -V6.6 新增
	$("#getFamilyDiskInfo").fastClick(function () {
		leadeon.getFamilyDiskInfo({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#getFamilyDiskInfo_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getFamilyDiskInfo_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			}
		});
	});

	//获取用户登录状态
	$("#userStatus").fastClick(function () {
		leadeon.userStatus({
			debug: debugMode,//调试模式
			success: function (datas) {
				$("#userStatus_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#userStatus_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//新登录状态接口（会话校验）--V4.0新增
	$("#checkSessionIsvalid").fastClick(function () {
		leadeon.checkSessionIsvalid({
			debug: debugMode,//调试模式
			success: function (datas) {
				$("#checkSessionIsvalid_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#checkSessionIsvalid_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//直播回放-V6.5新增
	$("#openLivePlayback").fastClick(function () {
		var anchorMobile = $("#openLivePlayback_anchorMobile").val();
		var liveUrl = $("#openLivePlayback_liveUrl").val();
		var videoType = $("#openLivePlayback_videoType").val();
		leadeon.openLivePlayback({
			debug: debugMode, //调试模式
			anchorMobile: anchorMobile,
			liveUrl: liveUrl,
			videoType: videoType,
			success: function (datas) {
				$("#openLivePlayback_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#openLivePlayback_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//拉起用户登录界面
	// $("#showLoginc").fastClick(function(){
	// 	leadeon.showLogin();
	// });

	//获取详单数据
	//	$("#getCallDetail").fastClick(function(){
	//		leadeon.getCallDetail({
	//			debug:debugMode,//调试模式
	//			success:function(datas){
	//				$("#getCallDetail_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
	//			},
	//			error:function(datas){
	//				$("#getCallDetail_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
	//			}
	//		});
	//	});

	/**
	 * 终端能力调用
	 */
	//直接进入扫一扫功能
	$("#qrScan").fastClick(function () {
		leadeon.qrScan({
			debug: debugMode,
			success: function (datas) {
				$("#qrScan_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#qrScan_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//调用手机通信录
	//显示待修改
	$("#getContacts").fastClick(function () {
		leadeon.getContacts({
			debug: debugMode,
			success: function (datas) {
				$("#getContacts_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getContacts_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//调用系统发短信功能
	$("#sendSMS").fastClick(function () {
		var num = $("#sendSMS_num").val();
		var content = $("#sendSMS_content").val();
		leadeon.sendSMS({
			debug: debugMode,
			smsContent: content,
			phoneNum: num,
			success: function (datas) {
				$("#sendSMS_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#sendSMS_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//获取通信录联系人姓名
	$("#getContactName").fastClick(function () {
		var num = $("#getContactName_num").val();
		leadeon.getContactName({
			debug: debugMode,
			phoneNum: num,
			success: function (datas) {
				$("#getContactName_success").text(JSON.stringify(datas, null, 2));
			},
			error: function (datas) {
				$("#getContactName_success").text(JSON.stringify(datas, null, 2));
			}
		});
	});

	//获取通讯录信息
	$("#getContactAll").fastClick(function () {
		leadeon.getContactAll({
			debug: debugMode,
			success: function (datas) {
				$("#getContactAll_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getContactAll_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//打开新页面
	$("#newWebview").fastClick(function () {
		var id = $("#newWebview_id").val();
		var url = $("#newWebview_url").val();
		var type = $("#newWebview_type").val();
		var funCode = $("#newWebview_funCode").val();
		var bizCode = $("#newWebview_bizCode").val();
		var updateRadio1 = $("input[name='isHiddenNavigationBar_radio']:checked").val();
		var shibie = updateRadio1 == "1" ? true : false;
		leadeon.newWebview({
			debug: debugMode,
			markID: id,                  //活动 ID
			type: type,
			funCode: funCode,
			bizCode: bizCode,
			isHiddenNavigationBar: shibie,
			url: url //需要打开的 url
		});
	});

	//手机振动
	$("#playSound").fastClick(function () {
		leadeon.playSound({});
	});

	//获取网络状态
	$("#getNetStatus").fastClick(function () {
		var msg = "当前网络状态为:";
		leadeon.getNetStatus({
			debug: debugMode,
			success: function (datas) {
				//-1: 未知网络 0 : 没有网络 1 : WIFI 2 : 2G 3 : 3G 4 : 4G
				$("#getNetStatus_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getNetStatus_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//调用照相机
	$("#pickPhoto").fastClick(function () {
		leadeon.pickPhoto({
			debug: debugMode,
			success: function (datas) {
				//				alert(22222);
				$("#pickPhoto_success").attr("src", datas.image);
			},
			error: function (datas) {
				//				$("#pickPhoto_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//拨打手机电话
	$("#callPhone").fastClick(function () {
		var num = $("#callPhone_num").val();
		leadeon.callPhone({
			phoneNum: num,
			success: function (datas) {
				$("#callPhone_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#callPhone_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		})
	});

	//H5调用native功能页面
	$("#goNativePage").fastClick(function () {
		var page = $("#goNativePage_page").val();
		var biz = $("#goNativePage_biz").val();
		leadeon.goNativePage({
			debug: debugMode,
			pageCode: page,  //页面编码
			bizCode: biz //功能编码，详见“客户端功能编码”
		});
	});

	//查询用户营销活动信息
	$("#getUserMarketInfo").fastClick(function () {
		var id = $("#getUserMarketInfo_id").val();
		var sTime = $("#getUserMarketInfo_sTime").val();
		var eTime = $("#getUserMarketInfo_eTime").val();
		var num = $("#getUserMarketInfo_num").val();
		leadeon.getUserMarketInfo({
			debug: debugMode,
			markID: id,              //活动 ID
			startDateTime: sTime,    //活动开始时间
			endDateTime: eTime,      //活动结束时间
			phoneNum: num, //用户号码
			success: function (datas) {
				$("#getUserMarketInfo_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getUserMarketInfo_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//获取 IMEI
	$("#getImei").fastClick(function () {
		leadeon.getImei({
			debug: debugMode,
			success: function (datas) {
				$("#getImei_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getImei_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//是否显示分享按钮
	$("#enableShared").fastClick(function () {
		var title = $("#enableShared_tit").val();
		var link = $("#enableShared_url").val();
		var imgUrl = $("#enableShared_imgUrl").val();
		var content = $("#enableShared_content").val();
		var type = $("#enableShared_type").val();
		var dataUrl = $("#enableShared_dataUrl").val();
		var sharedRadio = $("input[name='sharedRadio']:checked").val();
		var isShared = sharedRadio === "0" ? true : false;
		var qrCodeUrl = $("#enableShared_qrCodeUrl").val();
		var arr = new Array();
		$("input[name='enableShared_shareChannelArray']:checked").each(function (i) {
			arr[i] = $(this).val();
		});
		leadeon.enableShared({
			debug: false,
			enable: isShared,
			shareObj: {
				title: title,
				link: link,
				imgUrl: imgUrl,
				content: content,
				type: type,
				shareChannelArray: arr,
				qrCodeUrl: qrCodeUrl,
				dataUrl: dataUrl
			},      //分享内容
			success: function (datas) {
				$("#enableShared_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#enableShared_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//分享功能，5.0变更单独渠道分享
	$("#shareMessage").fastClick(function () {
		var title = $("#shareMessage_tit").val();
		var link = $("#shareMessage_url").val();
		var imgUrl = $("#shareMessage_imgUrl").val();
		var content = $("#shareMessage_content").val();
		var type = $("#shareMessage_type").val();
		var dataUrl = $("#shareMessage_dataUrl").val();
		var arr = new Array();
		var qrCodeUrl = $("#shareMessage_qrCodeUrl").val();
		$("input[name='shareMessage_shareChannelArray']:checked").each(function (i) {
			arr[i] = $(this).val();
		});
		leadeon.shareMessage({
			debug: debugMode,
			title: title,          //分享标题
			link: link,            //分享链接
			imgUrl: imgUrl,        //分享图标
			content: content,      //分享内容
			type: type,            //分享类型,music、video或link，不填默认为link
			dataUrl: dataUrl,      //如果type是music或video，则要提供数据链接，默认为空
			shareChannelArray: arr,
			qrCodeUrl: qrCodeUrl,
			success: function (datas) {
				$("#shareMessage_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#shareMessage_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//查询交费历史
	//	$("#payHistory").fastClick(function(){
	//		leadeon.payHistory();
	//	});

	//扫描充值卡密码(OCR)
	$("#getOCR").fastClick(function () {
		leadeon.getOCR({
			debug: debugMode,
			success: function (datas) {
				$("#getOCR_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getOCR_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//客户端传递OCR充值卡密码
	//	leadeon.setPrepaidCardTab=js_sdk_test.setPrepaidCardTab;
	//	$("#setPrepaidCardTab").fastClick(function(){
	//		leadeon.setPrepaidCardTab({
	//			cardNum: '',        //充值卡密码
	//			tab: '',             //充值类型
	// success: function(datas) {
	// 	$("#setPrepaidCardTab_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
	// },
	// error: function(datas) {
	// 	$("#setPrepaidCardTab_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
	// }
	//		});
	//	});

	//查询实体营业厅
	$("#searchBizHall").fastClick(function () {
		var searchBizRadio = $("input[name='searchBizRadio']:checked").val();
		var isShowNearHall = searchBizRadio === "0" ? true : false;
		leadeon.searchBizHall({
			debug: debugMode,
			nearHallEnable: isShowNearHall, //是否显示附近营业厅按钮
			success: function (datas) {
				$("#searchBizHall_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#searchBizHall_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//加密功能
	$("#encryptString").fastClick(function () {
		var str = $("#encryptString_str").val();
		leadeon.encryptString({
			debug: debugMode,
			str: str,                     //需要加密的字符串
			success: function (datas) {
				$("#encryptString_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#encryptString_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//新手引导
	$("#newGuide").fastClick(function () {
		leadeon.newGuide();
	});

	//给我评分
	$("#giveMeScore").fastClick(function () {
		leadeon.giveMeScore();
	});

	//版本检测
	$("#checkVersion").fastClick(function () {
		var updateRadio = $("input[name='updateRadio']:checked").val();
		var isShowUpdate = updateRadio === "0" ? true : false;
		leadeon.checkVersion({
			debug: debugMode,
			showUpdate: isShowUpdate,     //是否显示升级提示
			success: function (datas) {
				$("#checkVersion_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#checkVersion_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	/*通知客户端浇花签到状态
	$("#waterFlowerState").fastClick(function(){
		var updateRadio = $("input[name='updateRadio1']:checked").val();
		var isShowUpdate = updateRadio === "0" ? true : false;
		leadeon.setWaterFlowerState({
			debug:debugMode,
			isSign: isShowUpdate,     //是否签到
			success: function(datas) {
				$("#waterFlowerState_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function(datas) {
				$("#waterFlowerState_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});
	*/
	//保存图片到相册，start
	$("#savePhoto2").hide();//默认第一次要隐藏
	$("#savePhoto3").hide();//默认第一次要隐藏
	$("input[name='updateRadio2']").click(function () {
		if ($(this).val() == 1) {
			$("#savePhoto1").show();
			$("#savePhoto2").hide();
			$("#savePhoto3").hide();
		}
		else if ($(this).val() == 2) {
			$("#savePhoto1").hide();
			$("#savePhoto2").show();
			$("#savePhoto3").hide();
		}
		else {
			$("#savePhoto1").hide();
			$("#savePhoto2").hide();
			$("#savePhoto3").show();
		}
	});
	$("#savePhoto").fastClick(function () {
		var updateRadio = $("input[name='updateRadio2']:checked").val();
		var savePhotoNo = $("#savePhotoNo").val();
		var st = "";//用于存储传递的数据
		if (updateRadio == 1) {
			st = $("#savePhoto1").val();
		}
		else if (updateRadio == 2) {
			st = $("#savePhoto2").val();
		}
		else {
			st = $("#savePhoto3").val();
		}
		leadeon.savePhoto({
			debug: debugMode,
			type: updateRadio,     //图片传参方式：1表示url方式，2表示base64方式
			data: st,	//根据type值不同，data为url链接或者base64数据
			phoneNum: savePhotoNo,	//手机号（只有android使用，用于图片命名）
			success: function (datas) {
				$("#savePhoto_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#savePhoto_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});
	//保存图片到相册，end

	//网络请求体数字签名
	$("#digitalSignature").fastClick(function () {
		var digitalSignature_url = $("#digitalSignature_url").val();
		var digitalSignature_body = $("#digitalSignature_body").val();
		leadeon.digitalSignature({
			debug: debugMode,
			requestUrl: digitalSignature_url,   //http 接口url
			requestBody: digitalSignature_body,  //请求体
			success: function (datas) {
				$("#digitalSignature_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#digitalSignature_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//调用登陆
	// $("#showLogin").fastClick(function(){
	// 	leadeon.showLogin({
	// 		debug:debugMode,
	// 		success: function(datas) {
	// 			$("#showLogin_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
	// 		},
	// 		error: function(datas) {
	// 			$("#showLogin_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
	// 		}
	// 	});
	// });

	//拉起统一支付
	$("#getNewPay").on("click", function () {
		leadeon.getNewPay({
			debug: debugMode,
			channelID: $("#getNewPay_num1").val(),//渠道号
			orderID: $("#getNewPay_num2").val(),//订单号
			success: function (datas) {
				$("#getNewPay_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getNewPay_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//设置webView标题-V3.8新加
	$("#setWebTitle").fastClick(function () {
		leadeon.setTitle({
			debug: debugMode,
			title: $("#setWebView_title").val(),//要设置的标题，不得为空
			success: function (datas) {
				$("#setWebTitle_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#setWebTitle_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//二级页面情感化插件-V3.8新加
	$("#secondPlug").fastClick(function () {
		var shareradios = $("input[name='shareradio2']:checked").val();
		var stf = "";//用于存储传递的数据
		if (shareradios == 1) {
			stf = 1;
		}
		else {
			stf = 0;
		}
		var id = $("#secondPlug_id").val();
		var iconUrl = $("#secondPlug_iconUrl").val();
		var actionUrl = $("#secondPlug_actionUrl").val();
		var isShare = $("#secondPlug_isShare").val();
		var verifyType = $("#secondPlug_verifyType").val();
		var loginType = $("#secondPlug_loginType").val();
		var isSso = $("#secondPlug_isSso").val();
		var ssoUrlAddr = $("#secondPlug_ssoUrlAddr").val();
		var location = $("#secondPlug_location").val();
		leadeon.assistiveControl({
			debug: debugMode,
			id: id,    //情感化插件id
			iconUrl: iconUrl,    //图标图片URL
			actionUrl: actionUrl,    //跳转H5页面URL
			isShare: isShare,    //是否分享  0：否；1：是 默认为0
			verifyType: verifyType,    //登录认证方式  1：H5；2：URL传参 默认为1
			loginType: loginType,    //登录方式  1：强制登录 2：非强制登录 默认为2
			isSso: isSso,    //是否SSO  1：是；0：否
			ssoUrlAddr: ssoUrlAddr,    //URL传参地址，是sso登录时才有此值
			location: location,		//10：详单查询；11：我的账单；12：充值订单；13：套餐余量；14：套餐订购；15：业务办理；16：配件商品列表；17：手机商品列表
			success: function (datas) {
				$("#secondPlug_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#secondPlug_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//导航栏返回及关闭按钮的显示状态
	$("#navigatReturn").fastClick(function () {
		var updateRadio3 = $("input[name='updateRadio3']:checked").val();
		var isShowUpdate2 = updateRadio3 === "0" ? true : false;
		leadeon.showNavBackAndCloseBtn({
			debug: debugMode,
			isShow: isShowUpdate2,     //是否显示升级提示
			success: function (datas) {
				// alert(isShowUpdate2);
				$("#navigatReturn_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#navigatReturn_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//客户端信息采集-V3.8新加
	$("#clientInformat").fastClick(function () {
		leadeon.getCatchInfo({
			debug: debugMode,
			success: function (datas) {
				var cid = datas.cid;  //推送标识
				var sv = datas.sv;        //系统版本号
				var ver = datas.version; //客户端版本号
				var sp = datas.sp;        //屏幕分辨率
				var xk = datas.xk;  //客户端安全ID
				var sn = datas.sn;        //设备型号
				var imei = datas.imei;  //客户端唯一标识
				var altitude = datas.altitude; //定位海拔
				var longtitude = datas.longtitude; //定位经度
				var latitude = datas.latitude; //定位纬度
				var locProvince = datas.locProvince; //定位省份名称
				var locCity = datas.locCity;         //定位城市名称
				var phone = datas.phoneNumber;  //登录电话号码
				var cTime = datas.cTime;  //客户端采集时间
				var netT = datas.netT;  //上网方式
				//以下信息仅android采集
				var imei2 = datas.imei2;  //
				var imsi = datas.imsi;  //imsi
				var imsi2 = datas.imsi2;  //
				var rsrp = datas.rsrp;  //
				var rsrq = datas.rsrq;  //
				var dl_sinr = datas.dl_sinr;  // dl_sinr
				var wifiMac = datas.wifiMac;  // WIFI_MAC
				$("#clientInformat_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#clientInformat_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//关闭当前webview-V3.8新加
	$("#closeCurrentWebView").fastClick(function () {
		leadeon.closeCurrentWebView({
			debug: debugMode,
			success: function (datas) {
				$("#closeCurrentWebView_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#closeCurrentWebView_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//清除缓存webview-V3.8新加
	$("#cleanCache").fastClick(function () {
		leadeon.cleanCache({
			debug: debugMode,
			success: function (datas) {
				$("#cleanCache_success").html("点击清理缓存按钮以后请关闭当前webView，二维码重新扫描当前地址，使用Fiddler抓包查看当前地址的http状态码是200还是304,304说明读的缓存，200说明浏览器缓存清理掉了");
			},
			error: function (datas) {
				$("#cleanCache_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//设置导航栏颜色 -V4.0新增
	$("#navigationColorSetting").fastClick(function () {
		var color = $("#navigationColorSetting_Color").val();
		var textColor = $("#navigationColorSetting_textColor").val();
		var iconType = $("#navigationColorSetting_iconType").val();
		leadeon.navigationColorSetting({
			debug: debugMode,
			bkColor: color,
			txtColor: textColor,
			iconType: iconType,
			success: function (datas) {
				$("#navigationColorSetting_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			},
			error: function (datas) {
				$("#navigationColorSetting_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			}
		});
	});

	//获得本机所有应用的列表（-V4.0新增）
	$("#getClientApplicationList").fastClick(function () {
		leadeon.getClientApplicationList({
			debug: debugMode,
			success: function (datas) {

				$("#getClientApplicationList_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			},
			error: function (datas) {
				$("#getClientApplicationList_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			}
		});
	});

	//打开应用 -V4.0新增
	$("#openApplication").fastClick(function () {
		var com = $("#openApplication_com").val();
		leadeon.openApplication({
			debug: debugMode,
			appPackageId: com,
			success: function (datas) {
				$("#openApplication_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			},
			error: function (datas) {
				$("#openApplication_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			}
		});
	});

	//调用下载 -V4.0新增
	$("#downloadApplication").fastClick(function () {
		var com = $("#downloadApplication_com").val();
		leadeon.downloadApplication({
			debug: debugMode,
			appDownUrl: com,
			success: function (datas) {
				$("#downloadApplication_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			},
			error: function (datas) {
				$("#downloadApplication_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			}
		});
	});

	//调起客户端插件 -V4.0新增
	$("#startPlugin").fastClick(function () {
		var pluginPackageName = $("#startPlugin_pluginPackageName").val();
		var pluginPageName = $("#startPlugin_pluginPageName").val();
		leadeon.startPlugin({
			debug: debugMode,
			pluginPackageName: pluginPackageName,
			pluginPageName: pluginPageName,
			success: function (datas) {
				$("#startPlugin_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			},
			error: function (datas) {
				$("#startPlugin_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			}
		});
	});

	//会话超时处理接口 -V4.0新增
	$("#overTime").fastClick(function () {
		leadeon.overTime({
			debug: debugMode,
			success: function (datas) {
				$("overTime_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			},
			error: function (datas) {
				$("#overTime_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			}
		});
	});


	//用于任意二级页面返回一级页面 -V4.1新增
	$("#backToRootView").fastClick(function () {
		leadeon.backToRootView({
			debug: debugMode,
			success: function (datas) {
				$("backToRootView_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			},
			error: function (datas) {
				$("#backToRootView_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			}
		});
	});

	// 用于多图分享 -V4.1新增
	$("#imagesShare").fastClick(function () {
		var picArr = [];
		$("input[name='pic']:checked").each(function () {
			picArr.push($(this).val());
		});
		leadeon.imagesShare({
			debug: false,
			imagesArray: picArr,//URL数组
			success: function (datas) {
				$("#imagesShare_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			},
			error: function (datas) {
				$("#imagesShare_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			}
		});
	});

	//刷新首页 -V4.1新增
	$("#mainPageUpdate").fastClick(function () {
		leadeon.mainPageUpdate({
			debug: debugMode,
			success: function (datas) {
				$("mainPageUpdate_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			},
			error: function (datas) {
				$("#mainPageUpdate_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			}
		});
	});

	// 注销登录 -V4.1新增
	$("#quitLogin").fastClick(function () {
		leadeon.quitLogin({
			debug: debugMode,
			success: function (datas) {
				$("#quitLogin_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			},
			error: function (datas) {
				$("#quitLogin_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			}
		});
	});

	// 触发语音识别 -V4.2新增
	$("#voiceRecognizer").on('touchend', function () {
		var updateRadio1 = $("input[name='shibie']:checked").val();
		var shibie = updateRadio1 === "1" ? true : false;
		leadeon.voiceRecognizer({
			debug: debugMode,
			voiceRecogEnable: shibie,		//默认不支持
			success: function (res) {

			},
			error: function (res) {
			}
		});
	});

	//语音识别回传 -V4.2
	leadeon.voiceRecogResult = function (res) {
		if (typeof (res) == "string") {
			res = JSON.parse(res);//转换成json对象
		}
		//语音识别的结果
		$("#voiceRecognizer_input").val(res.message);
	};

	//导航栏关闭按钮的显示状态-V4.3新加
	$("#showNavCloseBtn").fastClick(function () {
		var updateRadio1 = $("input[name='showNavCloseBtnRadio']:checked").val();
		var shibie = updateRadio1 === "1" ? true : false;
		leadeon.showNavCloseBtn({
			debug: debugMode,
			isShowCloseBtn: shibie,
			success: function (res) {

			},
			error: function (res) {
			}
		});
	});

	//导航栏返回按钮的显示状态-V4.3新加
	$("#showNavBackBtn").fastClick(function () {
		var updateRadio1 = $("input[name='showNavBackBtnRadio']:checked").val();
		var shibie = updateRadio1 === "1" ? true : false;
		leadeon.showNavBackBtn({
			debug: debugMode,
			isShowBackBtn: shibie,
			success: function (res) {

			},
			error: function (res) {
			}
		});
	});

	// 获取一键登录token(获取当前登录号码的token)-4.5新增
	$('#getIDMPLoginToken').fastClick(function () {
		leadeon.getIDMPLoginToken({
			debug: debugMode,
			success: function (res) {
				var token = res.token //token值
				$('#showLoginToken').html('<div class="pre"><pre>' + token + '</pre></div>')
			},
			error: function (res) {
				alert("getIDMPLoginToken报错:" + JSON.stringify(res));
			}
		});
	})

	// 获取一键登录token(获取当本机号码的token)-4.5新增
	$('#getLocalNumberLoginToken').fastClick(function () {
		leadeon.getLocalNumberLoginToken({
			debug: debugMode,
			success: function (res) {
				var token = res.token //token值
				$('#getLocalNumberLoginTokenhtml').html('<div class="pre"><pre>' + token + '</pre></div>');
			},
			error: function (res) {
				alert("getLocalNumberLoginToken报错:" + JSON.stringify(res));
			}
		});
	})

	//scheme打开其他应用（-V4.5 新增）
	$("#openOtherAPP").fastClick(function () {
		var updateRadio1 = $("input[name='openOtherAPPRadio']:checked").val();
		var openOtherAPP_com = $("#openOtherAPP_com").val();
		var openOtherAPP_scheme = $("#openOtherAPP_scheme").val();
		leadeon.openOtherAPP({
			debug: debugMode,
			type: updateRadio1, //打开应用的类型。‘0’表示打开其他APP，‘1’打开新浪微博
			packageName: openOtherAPP_com, //拉起APP的包名，安卓侧使用
			schemeString: openOtherAPP_scheme,
			success: function (res) { },
			error: function (res) {
				alert("openOtherAPP报错:" + JSON.stringify(res));
			}
		})
	});

	//Uid有效性校验 V4.7.0新增
	$("#checkUID").fastClick(function () {
		var checkUID_domain = $("#checkUID_domain").val();
		//var checkUID_url = $("#checkUID_url").val();
		var checkUID_chanelId = $("#checkUID_chanelId").val();
		leadeon.checkUID({
			debug: debugMode,
			domain: checkUID_domain,
			//url: checkUID_url,
			chanelId: checkUID_chanelId,
			success: function (datas) {
				$("#checkUID_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#checkUID_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//获取登录信息-V4.8 新增
	$("#getLoginInfo").fastClick(function () {
		leadeon.getLoginInfo({
			debug: debugMode,//调试模式
			success: function (datas) {
				$("#getLoginInfo_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getLoginInfo_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//获取登录信息-V4.8 新增
	$("#cmccSetUp").fastClick(function () {
		leadeon.cmccSetUp({
			debug: debugMode,//调试模式
			url: "http://wlan.10086.cn/wlansoft/upload/CMCC-SIM.mobileconfig",//iOS使用此参数拉起外部浏览器，固定值
			success: function (datas) {
				$("#cmccSetUp_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#cmccSetUp_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//重新扫描-V4.8 新增
	$("#rescanQRCode").fastClick(function () {
		leadeon.rescanQRCode({
			debug: debugMode,//调试模式
			success: function (datas) {
				$("#rescanQRCode_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#rescanQRCode_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//关闭当前页面-V4.8 新增
	$("#backToHostApp").fastClick(function () {
		leadeon.backToHostApp({
			debug: debugMode,//调试模式
			success: function (datas) {
				$("#backToHostApp_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#backToHostApp_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//打开和家亲功能页面--V5.0 新增
	$("#hejiaqin").fastClick(function () {
		var hejiaqin_bizCode = $("#hejiaqin_bizCode").val();
		var hejiaqin_deviceType = $("#hejiaqin_deviceType").val();
		var hejiaqin_deviceId = $("#hejiaqin_deviceId").val();
		var hejiaqin_productId = $("#hejiaqin_productId").val();
		var hejiaqin_pushParams = $("#hejiaqin_pushParams").val();
		leadeon.hejiaqin({
			debug: debugMode,
			bizCode: hejiaqin_bizCode,
			deviceType: hejiaqin_deviceType,
			deviceId: hejiaqin_deviceId,
			productId: hejiaqin_productId,
			pushParams: hejiaqin_pushParams,
			success: function (datas) {
				$("#hejiaqin_success").text('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#hejiaqin_success").text('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//隐藏分享按钮-V5.1 新增
	$("#hiddenShareButton").fastClick(function () {
		leadeon.hiddenShareButton({
			debug: debugMode,//调试模式
			success: function (datas) {
				$("#hiddenShareButton_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#hiddenShareButton_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//积分H5单独调用新登录状态接口（会话校验）--V5.2 新增
	$("#checkSessionIsvalidForJFLib").fastClick(function () {
		leadeon.checkSessionIsvalidForJFLib({
			debug: debugMode,//调试模式
			success: function (datas) {
				$("#checkSessionIsvalidForJFLib_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#checkSessionIsvalidForJFLib_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//拉起和包支付--V5.3 新增
	$("#hebaoPay").fastClick(function () {
		var hebaoPay_orderSession = $("#hebaoPay_orderSession").val();
		var hebaoPay_account = $("#hebaoPay_account").val();
		leadeon.hebaoPay({
			debug: debugMode,
			orderSession: hebaoPay_orderSession,
			account: hebaoPay_account,
			success: function (datas) {
				$("#hebaoPay_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#hebaoPay_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//调用登录接口--V5.3 新增
	$("#showLogin").fastClick(function () {
		var showLogin_url = $("#showLogin_url").val();
		var showLogin_urlType = $("#showLogin_urlType").val();
		leadeon.showLogin({
			debug: debugMode,
			url: showLogin_url,
			urlType: showLogin_urlType,
			success: function (datas) {
				$("#showLogin_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#showLogin_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	// 语音播报-V5.5 新增
	var str = '来辣老弟'
	$('#speechBroadcast_input').val(str)
	$('.test').on('click', '[name=speechBroadcast_radio]', function () {
		if ($(this).val() == '0') {
			str = '来辣老弟'
		} else if ($(this).val() == '1') {
			str = 'ཀའོ་དབྱང་ལ་ཨ་ཕ་ཟེར།'
		}
		$('#speechBroadcast_input').val(str)
	})
	$("#speechBroadcast").fastClick(function () {
		var speechBroadcast_radio = $("input[name='speechBroadcast_radio']:checked").val();
		var speechBroadcast_input = $("#speechBroadcast_input").val();
		leadeon.speechBroadcast({
			debug: false,
			text: speechBroadcast_input,//播放的文本内容
			languageType: speechBroadcast_radio,//语言类型 非必填，默认普通话。 0 普通话，1 藏语
			success: function (res) {
				$("#speechBroadcast_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (res) {
				$("#speechBroadcast_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//ios禁止浏览器上滑回弹效果-V5.5 新增
	$("#forbiddenWebviewScrollStyle").fastClick(function () {
		leadeon.forbiddenWebviewScrollStyle({
			debug: debugMode,//调试模式
			success: function (datas) {
				$("#forbiddenWebviewScrollStyle_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#forbiddenWebviewScrollStyle_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//是否隐藏导航栏（即全屏webview）-V5.5 新增
	$("#hiddenNavigationBar").fastClick(function () {
		var updateRadio1 = $("input[name='hiddenNavigationBar_radio']:checked").val();
		var shibie = updateRadio1 == "1" ? true : false;
		leadeon.hiddenNavigationBar({
			debug: debugMode,
			isHiddenNavigationBar: shibie,//bool类型，true为隐藏，false是显示
			success: function (datas) {
				$("#hiddenNavigationBar_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			},
			error: function (datas) {
				$("#hiddenNavigationBar_success").html('<div class="pre"><pre>' + JSON.stringify(datas) + '</pre></div>');
			}
		});
	});

	//支付宝授权登录 -V5.6 新增
	$("#alipaySDKauthV2").fastClick(function () {
		var alipaySDKauthV2_input = $("#alipaySDKauthV2_input").val();
		leadeon.alipaySDKauthV2({
			debug: debugMode,//调试模式
			infoStr: alipaySDKauthV2_input,
			success: function (datas) {
				$("#alipaySDKauthV2_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#alipaySDKauthV2_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//一号一终端 获取设备硬件信息--V5.6 新增
	$("#getDeviceMultiSimInfo").fastClick(function () {
		var packageName = $("#getDeviceMultiSimInfo_packageName").val();
		var serviceName = $("#getDeviceMultiSimInfo_serviceName").val();
		var publickey = $("#getDeviceMultiSimInfo_publickey").val();
		leadeon.getDeviceMultiSimInfo({
			debug: debugMode, //调试模式
			packageName: packageName,
			serviceName: serviceName,
			publickey: publickey,
			success: function (datas) {
				$("#getDeviceMultiSimInfo_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#getDeviceMultiSimInfo_success").html('<div class="pre"><pre>' + JSON
					.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});

	//H5页面打开小程序-V5.6 新增
	$("#openMiniProgram").fastClick(function () {
		var userName = $("#openMiniProgram_userName").val();
		var path = $("#openMiniProgram_path").val();
		var miniProgramType = $("#openMiniProgram_miniProgramType").val();
		leadeon.openMiniProgram({
			debug: debugMode,//调试模式
			wx: {
				"userName": userName, //小程序的username
				"path": path, //打开小程序指定页面路径
				"miniProgramType": miniProgramType, //0 正式版 1 开发板 2体验版
			},
			success: function (datas) {
				$("#openMiniProgram_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#openMiniProgram_success").html('<div class="pre"><pre>' + JSON.stringify(datas, null, 2) + '</pre></div>');
			}
		});
	});
	//页面不可见时暂停声音-V6.6 新增
	$("#pauseVolumeWhenPageDisappear").fastClick(function () {
		leadeon.pauseVolumeWhenPageDisappear({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#pauseVolumeWhenPageDisappear_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#pauseVolumeWhenPageDisappear_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			}
		});
	});
	//Ar活动页面调用-V6.7 新增
	$("#arForHtml5").fastClick(function () {
		leadeon.arForHtml5({
			debug: debugMode, //调试模式
			success: function (datas) {
				$("#arForHtml5_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#arForHtml5_success").html('<div class="pre"><pre>' + JSON.stringify(
					datas, null, 2) + '</pre></div>');
			}
		});
	});
	//语音识别（无界面） -V5.6 新增
	$("#newVoiceRecognizer").fastClick(function () {
		var time = $("#newVoiceRecognizer_time").val();
		var isStop = $("#newVoiceRecognizer_isStop").val();
		var accent = $("#newVoiceRecognizer_accent").val();
		leadeon.newVoiceRecognizer({
			debug: debugMode, //调试模式
			time: time,
			isStop: isStop,
			accent: accent, //5.7新增语言类型
			success: function (res) {
				$("#newVoiceRecognizer_success").html('<div class="pre"><pre>' + JSON
					.stringify(res, null, 2) + '</pre></div>');
			},
			error: function (datas) {
				$("#newVoiceRecognizer_success").html('<div class="pre"><pre>' + JSON
					.stringify(res, null, 2) + '</pre></div>');
			}
		});
	});
});

//var js_sdk_test={
//	/**
//	 * 客户端主调用方法，传递OCR充值卡密码
//	 * @param {Object} datas
//	 */
//	setPrepaidCardTab:function(datas){
//		$("#setPrepaidCardTab_success").text('成功(传过来的是字符串)：'+datas);
//	}
//};
