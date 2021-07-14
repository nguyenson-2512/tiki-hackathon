Page({
  data: {
    time: 6,
    content: ' Hien tai e dang phan van khong biet nen mua iphone X hay iphone Xs max,moi nguoi cho e xin it loi khuyen voi',

    show: false,
    position: 'top',
    animation: true,
    mask: true,
    zIndex: 10,
    disableScroll: true
  },
  onLoad() {},
  onOk() {
    this.setData({ show: false });
  },
  onCancel() {
    this.setData({ show: false });
  },
  onTap(e) {
    this.setData({ ...e.target.dataset.popup });
  },
  onChange() {

  }
});
