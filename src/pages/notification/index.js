Page({
  data: {
    notificationList: null
  },
   onLoad() {
    let userId = ''
       my.getStorage({
        key: 'user',
        success: async function (res) {
          if(res) {
             userId = res.data.customer.id
          }
        },
        fail: function (res) {
          my.alert({ content: res.errorMessage });
        },
        complete: () => {
          my.request({
              url: `https://tiki-be.herokuapp.com/api/notification/${userId}`,
              method: 'GET',
              success: (response) => {
                function formatDate(date) {
                  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() 
                }
                let result = response.data.map(item => {
                  return {...item, createdAt: formatDate(new Date(item.createdAt))}
                })
                this.setData({
                  notificationList: result
                })
              }
            });
        }
      });
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