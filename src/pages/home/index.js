Page({
  data: {
    tabs: [{ title: "Bài đăng của tôi" }, { title: "Bài đăng nổi bật" }],
    activeTab: 1,
    topList: null,
    myList: null,
    show: false,
    position: 'top',
    animation: true,
    mask: true,
    zIndex: 10,
    disableScroll: true,
  },
  onLoad() {
    my.request({
      url: 'https://tiki-be.herokuapp.com/api/get-top-posts',
      method: 'GET',
      success: (response) => {
        console.log(response, 'list');
        this.setData({
          topList: response.data
        })
      },
      fail: (re) => {
        console.log('haha')
      }
    });
  },
  onTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
    if(index == 0 && !this.data.myList) {
      my.getStorage({
        key: 'user',
        success: function (res) {
          if(res) {
            my.request({
              url: `https://tiki-be.herokuapp.com/api/get-my-posts/${res.data.customer.id}`,
              method: 'GET',
              success: (response) => {
                console.log(response, 'my list');
                this.setData({
                  myList: response.data
                })
              }
            });
          }
        },
        fail: function (res) {
          my.alert({ content: res.errorMessage });
        }
      });
    }
  },
  onTabChange({ index, tabsNamse }) {
    this.setData({
      [tabsName]: index,
    });
  },
  navigateToCreate() {
    my.navigateTo({ url: 'pages/create-new-post/index' });
  },
  navToSearch() {
    my.navigateTo({ url: 'pages/top-posts/index' });
  },
  onCancel() {
    this.setData({ show: false });
  },
  onTap(e) {
    this.setData({ ...e.target.dataset.popup });
  },
});
