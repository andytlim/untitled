var ContainerNav = React.createClass({
  render: function() {
    return (
      <div className={this.props.className}>
        {this.props.links.map(function(o, i) {
          return <a key={i} href={o.url} className={o.cls} target='_blank'></a>;
        })}
      </div>
    )
  }
});

var SectionMe = React.createClass({
  render: function() {
    return (
      <section className='section-me'>
        <div className='selfie'></div>
        <div className='text'>
          <div className='location'>Charlotte, NC</div>
          <p>Hi, welcome to untitled!</p>
          <p>Create your own customized tv schedule, and watch it with friends.</p>
          <p>The purpose of the project is to provide a community tv experience. Drop <a href="mailto:guestatmydoor@gmail.com?subject=Wowzers!" target="_blank">a line</a> if you want to chat, We'd love to talk!</p>
        </div>
        <ContainerNav 
          className='container-nav' 
          links={[
              {'url': 'https://github.com/toka-io/untitled', 'cls': 'github'}      
          ]} 
        />        
      </section>        
    )
  }
});

var sample = <SectionMe />;