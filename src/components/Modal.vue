<template>
  <!-- Modal组件 -->
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{ title }}</span>
          <a
            href="javascript:;"
            class="icon-close"
            @click="$emit('cancel')"
          ></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == '1'"
            @click="$emit('submit')"
            >{{ sureText }}</a
          >
          <a
            href="javascript:;"
            class="btn btn-default"
            v-else-if="btnType == '2'"
            @click="$emit('cancel')"
            >{{ cancelText }}</a
          >

          <div class="btn-group" v-else>
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{
              sureText
            }}</a>
            <a
              href="javascript:;"
              class="btn btn-default"
              @click="$emit('cancel')"
              >{{ cancelText }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    //弹框类型，小框samll、中框middle、大框large、表单form
    modalType: {
      type: String,
      default: 'form'
    },
    //弹框标题
    title: String,
    // 按钮类型，1 确定  2 取消  3确定 取消
    btnType: {
      type: String,
      default: '1'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    sureText: {
      type: String,
      default: '确定'
    },
    showModal: Boolean
  },
  components: {},

  created() {},
  mounted() {},

  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/modal.scss';
</style>