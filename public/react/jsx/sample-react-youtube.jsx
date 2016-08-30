var YoutubeList = React.createClass({
    render: function() {
        return(
         <ul>
          {this.props.videos.map(function(videoname){
            return <li>{videoname}</li>;
          })}
        </ul>
        
        )
    }
});


var YoutubeSection = React.createClass({
    getInitialState: function(){
		return {videos: ['test']};
	},
    
    updateItems: function(newItem){
		var allItems = this.state.videos.concat([newItem]);
		this.setState({items: allItems});
	},
    

  render: function() {
    return (
        <div>
            <h1> This is the youtube test page. </h1>  
            <p>Please enter a youtube ID: </p>
            <input type="text"></input>
            <button onClick={this.updateItems("hi")}>Click me!</button>
            
            <YoutubeList videos={this.state.videos}/>
            
            <p>yo</p>
            
        </div>
    )
  }
});



var sample = <YoutubeSection />;