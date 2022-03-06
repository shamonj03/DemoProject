import { defineComponent } from "vue";
import HelloWorld from "@/components/helloWorld/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
	name: "HomeView",
	components: {
		HelloWorld,
	},
});