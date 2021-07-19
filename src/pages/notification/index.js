Page({
  data: {
    notificationList: [
        {
            influencer: {
                id: "2",
                avatar: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                name: "Super man"
            },
            isRead: false,
            _id: "60f286e45db0a426542f4ba7",
            postId: "60f13d6c6c74df30e41dfc74",
            content: "liked your post",
            targetUser: "12936235",
            createdAt: "11 months ago",
        }
    ]
  },
  onLoad() {
      // my.getStorage({
      //   key: 'user',
      //   success: function (res) {
      //     if(res) {
      //       my.request({
      //         url: `https://tiki-be.herokuapp.com/api/notification/${res.data.customer.id}`,
      //         method: 'GET',
      //         success: (response) => {
      //           console.log(response, 'my notifications');
      //           this.setData({
      //             notificationList: response.data
      //           })
      //         }
      //       });
      //     }
      //   },
      //   fail: function (res) {
      //     my.alert({ content: res.errorMessage });
      //   }
      // });
  },
  navToPostDetail(event) {
    const id = event.target.dataset['view-name']._id;
        if(event.target.dataset['view-name'].isRead == false) {
            my.request({
              url: `https://tiki-be.herokuapp.com/api/${id}/read-notification`,
              method: 'PUT',
              success: (response) => {
                console.log(response)
              }
            })  
        }
    const postId = event.target.dataset['view-name'].postId;                  
    console.log(event);
    my.navigateTo({ url: `pages/post-detail/index?` + postId});
  }
});