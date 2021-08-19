<template>
        <div style="height:100%">
            
            <div>
                <div style="height:100%;width: 10%;float: left;background: #0B243B;">
                   <div style="width: 100%;float: left;border-bottom:1px">
                       <div style="padding-left: 35px;padding-top: 40px;">
                           <span style="font-size: 14px;color: #37eef2;">学生</span>
                       </div>
                   </div>
                   <div style="width: 100%;height:250px;float: left;">
                        <div style="padding-top: 50px;padding-left: 60px;">
                            <span style="font-size: 14px;color: #37eef2;text-align: left;">结束实验</span>
                       </div>
                        <div style="padding-top: 50px;padding-left: 60px;">
                            <span style="font-size: 14px;color: #37eef2;text-align: left;">下个实验</span>
                       </div>
                        <div style="padding-top: 50px;padding-left: 60px;">
                            <span style="font-size: 14px;color: #37eef2;text-align: left;">关闭页面</span>
                       </div>

                   </div>
                   <div style="width: 100%;height:250px;float: left;">
                       <div style="padding-top: 50px;padding-left: 5px;">
                            <span style="font-size: 14px;color: #9da2ab;text-align: left;">实验名称:
                                <span style="color: #37eef2;">
                                    智能合约编辑器2.0
                                </span>
                            </span>
                       </div>
                        <div style="padding-top: 50px;padding-left: 5px;">
                            <span style="font-size: 14px;color: #9da2ab;text-align: left;">实验时间:
                                 <span style="color: #37eef2;">
                                     1小时
                                </span>
                            </span>
                       </div>
                        <div style="padding-top: 50px;padding-left: 5px;">
                            <span style="font-size: 14px;color: #9da2ab;text-align: left;">倒计时:
                                <span style="color: #37eef2;">
                                      50分32秒
                                </span>
                            </span>
                       </div>

                   </div>
                   <div style="width: 100%;height:421px;float: left;">
                       <div style="padding-top: 50px;padding-left: 5px;">
                            <span style="font-size: 14px;color: #37eef2;text-align: left;">智能合约编辑器2.0</span>
                       </div>
                        <div style="padding-top: 50px;padding-left: 5px;">
                            <span style="font-size: 14px;color: #9da2ab;text-align: left;">测试实验1</span>
                       </div>
                   </div>
                </div>
                 <div style="float:left;width: 90%;height:100%;">
                       <iframe
                        ref="myFrame" 
                        src="http://10.107.105.18:5001/#/login"
                        frameborder="0"
                        width="100%"
                        height="980"
                    ></iframe>
                 </div>
                </div>
        </div>
</template>
<script>

    export default {
        data() {
            return {};
        },
        created() {},
        mounted() {
            this.iframeInit();
        },
        computed: {},
        methods: {
            iframeInit() {
            let myFrame = this.$refs["myFrame"];
            if (myFrame.attachEvent) {
                //兼容浏览器判断
                myFrame.attachEvent("onload", function () {
                let iframeWin = myFrame.contentWindow;
                iframeWin.postMessage(
                    { router: "/contract", user:localStorage.getItem("userName"), password: localStorage.getItem("passWord")},
                    "*"
                );
                //data传递的参数   *写成子页面的域名或者是ip
                });
            } else {
                myFrame.onload = function () {
                let iframeWin = myFrame.contentWindow;
                iframeWin.postMessage(
                    { router: "/contract", user: localStorage.getItem("userName"),password: localStorage.getItem("passWord")},
                    "*"
                );
                };
            }
            },
        },
    };
</script>
<style>
.main {
    width: 100%;
    min-width: 1200px; 
}
.el-message__content {
    display: inline-block;
}
.el-message__closeBtn {
    display: inline-block !important;
    vertical-align: middle !important;
    line-height: 0 !important;
}
.home-center {
    margin-right: 20px;
}
</style>
