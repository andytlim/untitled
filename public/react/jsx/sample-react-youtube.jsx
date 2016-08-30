var videolist = React.createClass({
    render:function() {
        return (
            <div>
                <h1>Your video list!</h1>
            </div>
        )
    }
});


var YoutubeSection = React.createClass({
  getInitialState: function() {
    return {
      videos: ["hi"]
    };
  },

  render: function() {
    return (
        <div>
            <h1> This is the youtube test page. </h1>  
            <p>Please enter a youtube ID: </p>
            <input type="text"></input>
            <button>Click me!</button>
            
            <videolist />
            
            <p>yo</p>
            
        </div>
    )
  }
});

var sample = <YoutubeSection />;