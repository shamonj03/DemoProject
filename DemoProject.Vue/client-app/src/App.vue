<template>
	<a-layout>
		<a-layout-sider id="components-layout-demo-custom-trigger" v-model:collapsed="collapsed" :trigger="null" collapsible>
			<div class="logo" />
			<a-menu :default-selected-keys="['/']" :selected-keys="[$route.path]" theme="dark" mode="inline">
				<a-menu-item key="1">
					<router-link to="/">
						<home-outlined class="me-1" />
						<span>
							Home
						</span>
					</router-link>
				</a-menu-item>
				<a-menu-item key="2">
					<router-link to="/about">
						<video-camera-outlined class="me-1" />
						<span>
							About
						</span>
					</router-link>
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header class="ps-4" style="background: #fff;">
				<menu-unfold-outlined v-if="collapsed"
					class="trigger"
					@click="() => (collapsed = !collapsed)" />
				<menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
				<router-view />
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<script lang="ts" src="./app.ts"></script>

<style>
	#components-layout-demo-custom-trigger .trigger {
		font-size: 18px;
		line-height: 64px;
		padding: 0 24px;
		cursor: pointer;
		transition: color 0.3s;
	}

	#components-layout-demo-custom-trigger .trigger:hover {
		color: #1890ff;
	}

	#components-layout-demo-custom-trigger .logo {
		height: 32px;
		background: rgba(255, 255, 255, 0.3);
		margin: 16px;
	}

	.site-layout .site-layout-background {
		background: #fff;
	}
</style>