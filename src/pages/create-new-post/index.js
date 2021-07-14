Page({
  data: {
    
  },

  onSubmit() {
    my.alert({
      content: 'Form value：${JSON.stringify(e.detail.value)}'
    });
  },
});