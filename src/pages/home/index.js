
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
    fullTopList: null,
    search: '',
    filterLike: '',
    filterTag: ["phone", "accessory", "laptop", "other"]
  },
  onLoad() {
    my.request({
      url: 'https://tiki-be.herokuapp.com/api/get-top-posts',
      method: 'GET',
      success: (response) => {
        console.log(response, 'list');
        this.setData({
          topList: response.data,
          fullTopList: response.data
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
    if(this.data.filterLike == 'increment') {
      const filteredData = [...this.data.fullTopList].reverse();
      this.setData({
        topList: filteredData
      })
    }
    this.setData({ show: false });
  },
  onTap(e) {
    this.setData({ ...e.target.dataset.popup });
  },
  handleInputSearch(event) {
    this.setData({
      search: event.detail.value
    })
    function contains(post, query) {
      if (post.description.includes(query)) {
        return true;
      }
      return false;
    }
    const formattedQuery = event.detail.value.toLowerCase();
    const filteredData = this.data.fullTopList.filter(post => {
      return contains(post, formattedQuery);
    })
    this.setData({
      topList: filteredData
    })
  },
  onChange(e) {
    console.log('onChange', e);
    this.setData({
      filterLike: e.detail.value
    })
  },
  onGroupChange(e) {
    console.log('onChange checkbox', e);
    this.setData({
      filterTag: e.detail.value
    })   
  },
});
