import React from 'react';
class TagManager extends React.Component {
  render() {
    const gtmScript = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-N3T4PG');`;

    return (
      <div>
        <script dangerouslySetInnerHTML={{ __html: gtmScript }}></script>
      </div>
    );
  }
}

export default TagManager;
