<template>
  <div class="app-container">
    <div class="description-item">
      <span>姓名：</span>
      <span>{{ name }}</span>
    </div>

    <div class="description-item">
      <span>工作：</span>
      <span>{{ otherInfo.job }}</span>
    </div>
    <button @click="updateName">我要改名字</button>
    <button @click="updateJob">我要换工作</button>
  </div>
</template>
<script lang="ts">
// defineComponent 本身的功能很简单，但是最主要的功能是为了 ts 下的类型推到。
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  setup() {
    const name = ref<string>("泰罗奥特曼");

    const otherInfo = reactive<{ job: string }>({
      job: "打怪兽"
    });

    const updateName = () => {
      name.value = "奥特之父";
    };

    const updateJob = () => {
      otherInfo.job = "照顾小奥特曼";
    };

    return {
      name,
      otherInfo,
      updateName,
      updateJob
    };
  }
});
</script>
