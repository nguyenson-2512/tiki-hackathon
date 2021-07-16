var statusClick =  false;
var likeStatus =  false;
var rs = "";

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
    post: [],
    time: 1,
    more: false,
    description: "NGHIÊNG s",
  },

  methods: {
    didMount() {
    rs = truncate(this.props.post.description, 127);
    if (rs.length < this.props.post.description.length) {
      this.setData({ more: true, description: rs});
    } else {
      this.setData({ description: this.props.post.description })
    }
    this.setData({
      post: this.props.post, 
      time: this.props.post.createdAt.slice(0, 10),
      numberOfLike: this.props.post.like.length})
    },  

    openComment() {
      if (statusClick == false) {
        this.setData({ show: true});
        statusClick = true;
      } else {
        this.setData({ show: false});
         statusClick = false
      }
    },
    
    clickLike() {
      if (likeStatus == false) {
        this.setData({ numberOfLike: this.props.post.like.length + 1 });
        likeStatus = true;
      }
    },

    testNav() {
      my.navigateTo({ url: 'pages/create-new-post/index' })
    }
  }
});
