var statusClick =  false;
var likeStatus =  false;
Component({
  data: {
    cmts: [6, 12, 15],
    show: false,
    numberOfLike: 0,
  },
  methods: {
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
        this.setData({ numberOfLike: this.data.numberOfLike + 1 });
        likeStatus = true;
      }
    }
  }
});
