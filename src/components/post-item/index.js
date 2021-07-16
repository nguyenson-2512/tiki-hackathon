Component({
  data: {
    cmts: [6, 12, 15],
    post: []
  },
  didMount() {
    this.setData({post: this.props.post})
  },
});
