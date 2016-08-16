var ContainerNav = React.createClass({
  render: function () {
    return React.createElement(
      'div',
      { className: this.props.className },
      this.props.links.map(function (o, i) {
        return React.createElement('a', { key: i, href: o.url, className: o.cls, target: '_blank' });
      })
    );
  }
});

var SectionMe = React.createClass({
  render: function () {
    return React.createElement(
      'section',
      { className: 'section-me' },
      React.createElement('div', { className: 'selfie' }),
      React.createElement(
        'div',
        { className: 'text' },
        React.createElement(
          'div',
          { className: 'location' },
          'Charlotte, NC'
        ),
        React.createElement(
          'p',
          null,
          'Hi, welcome to untitled!'
        ),
        React.createElement(
          'p',
          null,
          'Create your own customized tv schedule, and watch it with friends.'
        ),
        React.createElement(
          'p',
          null,
          'The purpose of the project is to provide a community tv experience. Drop ',
          React.createElement(
            'a',
            { href: 'mailto:guestatmydoor@gmail.com?subject=Wowzers!', target: '_blank' },
            'a line'
          ),
          ' if you want to chat, We\'d love to talk!'
        )
      ),
      React.createElement(ContainerNav, {
        className: 'container-nav',
        links: [{ 'url': 'https://github.com/toka-io/untitled', 'cls': 'github' }]
      })
    );
  }
});

var sample = React.createElement(SectionMe, null);