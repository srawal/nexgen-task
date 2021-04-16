
  export const getRefVal = (inputVal) => {
    return (ref) => this[inputVal] = ref
  }

  export const  handleChange = (event) => {
    debugger;
    this.setState({searchString:event.target.value});
  }

  export const  getChangeVal = (key,e) => {
    this.setState({ [key]: e.target.value })
  }
