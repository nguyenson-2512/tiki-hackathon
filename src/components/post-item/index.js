var rs = "";
var moment = require('moment');
var userName = "";
function truncate( str, n ){
  if (str.toString().length <= n) { return str.toString(); }
  const subString = str.toString().substr(0, n-1);
  return (str.toString().length > n
    ? subString.substr(0, subString.lastIndexOf(" ")) 
    : subString) + "...";
};
Component({
  data: {
    cmts: [6, 12, 15],
    show: false,
    numberOfLike: 0,
    post: null,
    time: '',
    more: false,
    description: "NGHIÊNG s",
  },
  didMount() {
    this.setData({post: this.props.post})
  },

  methods: {
    didMount() {
    rs = truncate(this.props.post.description, 127);
    if (rs.length < this.props.post.description.length) {
      this.setData({ more: true, description: rs});
    } else {
      this.setData({ description: this.props.post.description })
    }

    my.getUserInfo({
      success: (res) => { userName = res.name },
      fail: (res) => { console.log(res.message); }
    });

    this.setData({
      post: this.props.post, 
      numberOfLike: this.props.post.like.length,
      time: moment(this.props.post.createdAt).fromNow()})
    },  
    handleLikePost() {
      const post = this.data.post;
      my.getStorage({
        key: 'user',
        success: async function (res) {
          if(res) {
            console.log('user', res)
          }
        },
        fail: function (res) {
          my.alert({ content: res.errorMessage });
        },
        complete: () => {
          my.request({
              url: 'https://tiki-be.herokuapp.com/api/' + post._id + '/like',
              method: 'PUT',
              headers: {
                "content-type": "application/json",
              },
              data: {
              author: {
                id: '1x',
                avatar: '',
                name: userName,
              },
                isPost: true
              },
              dataType: "json",
              success: (response) => {
                console.log(response, 'liked');
                console.log(post.like.length + 1)
                this.setData({
                  numberOfLike: post.like.length + 1
                })
              },
            });
        }
      });
    },
    navToDetail(event) {
      const id = event.target.dataset.item;
      console.log(event);
      my.navigateTo({ url: "pages/post-detail/index?" + id});
    },
  }
});
