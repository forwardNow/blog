<template>
  <div id="app">
    <button @click="handleClickOpenDialogButton">open a dialog</button>
    <button @click="handleClickCloseDialogButton">close the dialog</button>
  </div>
</template>
<script>
import create from './create';
import Dialog from './Dialog';

export default {
  methods: {
    handleClickOpenDialogButton() {
      const dialog = create(Dialog, { title: '提示', content: '中奖了！！！'});

      dialog.show();

      this.dialog = dialog;
    },
    handleClickCloseDialogButton() {
      this.dialog.hide();
    },
  }
}
</script>
