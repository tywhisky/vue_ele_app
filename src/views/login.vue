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
			<button>登录</button>
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
				disabled: false
			}
		},
		components: {
			InputGroup
		}
	}
</script>

<style>
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
</style>
