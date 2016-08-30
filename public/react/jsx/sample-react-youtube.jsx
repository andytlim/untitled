
var YoutubeSection = React.createClass({
  render: function() {
    return (
        <div>
            <h1> This is the youtube test page. </h1>  
            <p>Please enter a youtube ID: </p>
            <form>
                <input type="text"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
  }
});

var sample = <YoutubeSection />;