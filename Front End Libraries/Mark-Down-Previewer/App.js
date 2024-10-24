

const App = () => {
    return (
      
        <Editor />
      
    );
  };
  
  const Editor = () => {
    const [text, setText] = React.useState("");
  
    const handleChange = (event) => {
      setText(event.target.value);
      
    };
    
    let toggle = false;

    
    const toggleSize=()=>{
      const editorBox = document.getElementById('editor-box');
      const previewBox = document.getElementById('preview-box');
      toggle=!toggle;
      if(toggle){
      previewBox.style.display = "none";
      editorBox.style.height = "100vh";

      }else{
        previewBox.style.display = "flex";
        editorBox.style.height= "300px"
      }
    }

  
    return (
      <React.Fragment>
      <div id="editor-box">
        <div id="editor-toolbar">
          <i className="fa-solid fa-terminal ficon"></i>
          <p className="title">Editor</p>
          <i className="fa-solid fa-maximize" onClick={toggleSize}></i>
        </div>
        <textarea id="editor" onChange={handleChange}></textarea>
        
      </div>
      <Previewer text={text} />
      </React.Fragment>
    );
  };
  
  const Previewer = ({ text }) => {


    let toggle = false;

    const getHTML = (value)=>{
        
        const msg= marked.parse(value)
        return DOMPurify.sanitize(msg)
        
    }

    const toggleSize=()=>{
      const editorBox = document.getElementById('editor-box');
      const previewBox = document.getElementById('preview-box');
      toggle=!toggle;
      if(toggle){
      editorBox.style.display = "none";
      previewBox.style.minHeight = "100vh";

      }else{
        editorBox.style.display = "flex";
        previewBox.style.minHeight="200px"
        
      }
    }

    return (
      <div id="preview-box">
        <div id="preview-toolbar">
          <i className="fa-solid fa-terminal ficon"></i>
          <p className="title">Preview</p>
          <i className="fa-solid fa-maximize" onClick={toggleSize}></i>
        </div>
        <div id="preview" 
            dangerouslySetInnerHTML={{__html: getHTML(text)}}
        ></div>
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));
  