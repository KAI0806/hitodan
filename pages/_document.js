import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document{
    render(){
        return(
            <Html lang="ja" prefix="og:http://ogp.me/ns# fb:http://ogp.me/ns/fb# website:http://ogp.me/ns/website#">
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

                    <meta name="description" content="やきとり＆美味しいお酒｜人暖楽" />
                    <meta name="twitter:description" content="" />
                    <meta property="og:url" content="index.html" />
                    <meta property="og:description" content="" />
                    <meta property="og:locale" content="ja_JP" />
                    <meta property="og:image" content="" />
                    <meta property="og:image:secure_url" content="" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:image" content="" />

                    <Script id="font" strategy="afterInteractive" dangerouslySetInnerHTML={{
                        __html:`(function(d) {
                            var config = {
                              kitId: 'yra4ljj',
                              scriptTimeout: 3000,
                              async: true
                            },
                            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
                          })(document);`,}}
                    />
                    <Script id="formrun" src="https://sdk.form.run/js/v2/formrun.js"/>
                </Head>
                
                <body onClick="">
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}
export default MyDocument;