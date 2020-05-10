<template>
	<div class="login">
		<div class="logo">
			<img src="../assets/logo.jpg" alt="my login image" />
		</div>
		<!-- 手机号输入框 -->
		<InputGroup
			type="number"
			v-model="phone"
			placeholder="手机号"
			:btnTitle="btnTitle"
			:disabled="disabled"
			:error="errors.phone"
			@btnclick="getVertifyCode"
		></InputGroup>
		<!-- 验证码 -->
		<InputGroup
			type="number"
			v-model="verifyCode"
			placeholder="验证码"
			:error="errors.code"
		></InputGroup>
		<!-- 用户协议 -->
		<div class="login_des">
			<p>
				新用户登录即自动注册，表示已同意
				<span>《用户服务协议》</span>
			</p>
		</div>
		<!-- 登录按钮 -->
		<div class="login_btn">
			<button :disabled="isClick" @click="handlelogin">登录</button>
		</div>
	</div>
</template>

<script>
	import InputGroup from "../components/inputGroup.vue";
	export default {
		name:"login",
		data(){
			return {
				phone: "",
				verifyCode: "",
				errors:{},
				btnTitle:"获取验证码",
				disabled: false,
			}
		},
		computed:{
			isClick(){
				if(!this.phone || !this.verifyCode) return true
				else return false
			}
		},
		methods:{
			handlelogin(){
				//取消错误提醒
				this.errors = {}
				//发送请求
				// this.$axios.post("/api/posts/sms_back")
				if(this.phone == 13112333445 && this.verifyCode == 1234){
					localStorage.setItem("ele_login",true)
					this.$router.push("/")
				}
				else
				{
					//返回错误信息
					this.errors = {
						code:err.response.data.msg
					}
				}
			},
			getVertifyCode(){
				if(this.validatePhone()){
					//发送验证码
					//开始倒计时
					this.validateBtn();
					this.$axios.post("/api/posts/sms_send",{
						//你的聚合数据代码
						tpl_id:"",//模板ID
						key:"",
						phone:this.phone
					})
					.then(res => {
						console.log(res)
					})
				}
			},
			validateBtn(){
				let time = 60;
				let timer = setInterval(() => {
					if(time == 0){
						clearInterval(timer);
						this.btnTitle = "获取验证码";
						this.disabled = false;
					}
					else {
						//倒计时
						this.btnTitle = time + "秒后重试";
						this.disabled = true;
						time --;
					}
				},1000)
			},
			validatePhone(){
				//验证手机
				if(!this.phone){
					this.errors = {
						phone:"手机号码不能为空"
					}
					return false
				}
				else if(!/^1[345678]\d{9}$/.test(this.phone)){
					this.errors = {
						phone:"请填写正确的手机号码"
					}
					return false
				}
				else {
					this.errors = {}
					return true
				}
			}
		},
		components: {
			InputGroup
		}
	}
</script>

<style scoped>
	.login {
		width: 100%;
		height: 100%;
		padding: 30px;
		box-sizing: border-box;
		background: #fff;
	}
	
	.logo {
		text-align: center;
	}
	.logo img {
		width: 150px;
	}
	.login_btn button {
		width: 100%;
		height: 40px;
		background-color: #48ca38;
		border-radius: 4px;
		color: #fff;
		font-size: 14px;
		border: none;
		outline: none;
	}
	.login_des span {
		color: #4d90fe
	}
	.login_des {
		color: #aaa;
		line-height: 22px;
	}
	.text_group,
	.login_des,
	.login_btn {
		margin-top: 20px;
	}
	.login_btn button[disabled]{
		background-color: #8bda81;
	}
</style>
