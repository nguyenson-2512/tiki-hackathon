Page({
  data: {
    content: ' Hien tai e dang phan van khong biet nen mua iphone X hay iphone Xs max,moi nguoi cho e xin it loi khuyen voi',

    times: [6, 12, 15],
    show: false,
    position: 'top',
    animation: true,
    mask: true,
    zIndex: 10,
    disableScroll: true,
    avt: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/90203015_10158237720437769_4332317920743915520_n.png?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=M3MRu-Lv04cAX-pNDJu&_nc_ht=scontent-hkt1-1.xx&oh=a8993067e14e9365a62e5d9ae9e6593e&oe=60F45F2C",
    na: "User Name"
  },
  onLoad() {
    // my.getUserInfo({
    //   success: (res) => {this.setData({ avt: res.avatar, na: res.name })},
    //   fail: (res) => {}
    // });

    //  my.getStorage({
    //   key: 'user',
    //   success: function (res) {
    //     my.alert({ content: 'Title' + res.data.title });
    //   },
    //   fail: function (res) {
    //     my.alert({ content: res.errorMessage });
    //   }
    // });
  },
  onShow() {
    console.log('hshhshsh')
  },
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