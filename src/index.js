import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './style.css';

/*
* A simple React component
*/
class MarkdownPreViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      markdown: '<html><body><header><h1>Hello</h1> <h2>hello again</h2></header> <a href=youre awesome>Youre awesome</a><pre>Here is some pre code</pre> <code>Here is some code code</code> <p><ul><li>list hello</li></ul></p> <blockquote>blockquote hello</blockquote> <img src=star.png alt=image youre awesome><p><strong>strong youre awesome</strong></p></body></html>'
    });
    }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    return (
      <div id="mardownViewer">
      <h1 id="title">Markdown Previewer</h1>
      <Editor markdown={this.state.markdown}
      onChange={this.handleChange} />
      <hr/>
      <Preview markdown={this.state.markdown}/>
      </div>
    );
  }
};

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <textarea id='editor'
      value={this.props.markdown}
      onChange={this.props.onChange}
      type="text"
      />
      </div>
    );
  }
};

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const renderer = new marked.Renderer();
    return (
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.props.markdown, { renderer: renderer })}} />
    );
  }
};

/*
* Render the above component into the div#app
*/
ReactDOM.render(<MarkdownPreViewer />, document.getElementById("app"));
