class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: `# Markdown Previewer
## Change text here and see changes below!
### For example, this is an header 3
This is a [link](www.fabiomancin.org) to my website!
This is a code line: \` <div></div> \`

\`\`\`
  // this is multi-line code:

  const doSomething = e => e.map(doSomethingElse(e));

  alert("Ohai!")
\`\`\`

1. You can
1. create 
1. lists **with bold parts**

> and Block Quotes!

![React Logo w/ Text](https://goo.gl/Umyytc)
` };


    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ editor: event.target.value });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        value: this.state.editor,
        onChange: this.handleChange }), /*#__PURE__*/

      React.createElement("div", {
        id: "preview",
        dangerouslySetInnerHTML: {
          __html: DOMPurify.sanitize(
          marked(this.state.editor, { breaks: true })) } })));
  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Markdown, null), document.getElementById("app"));