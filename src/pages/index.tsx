import Parallax from '../components/parallax/Parallax';

export default function Home() {

    return (
        <>
            <div id={"page"}>
            <section style={{backgroundColor: '#FFAF1B', height: 1030}}>
                <Parallax/>
            </section>
            <section style={{backgroundColor: '#210002', position:"relative"}}>
                <div className="h-screen lg:px-96 sm:px-6 text-white text-md">
                    Hello! this is a site for testing parallax <br/>
                    utilizing nextjs and react <br/>
                    all art belongs to <a className="text-blue-500 hover:underline" href="https://www.camposanto.com/" title="https://www.camposanto.com/"> campo santo</a> <br/>
                    and the <a className="text-blue-500 hover:underline" href="https://www.firewatchgame.com/" title="https://www.firewatchgame.com/"> firewatch team </a> <br/>
                    <br/>
                    if you would like to check out <br/>
                    the source code you <br/>
                    can find it on this <a className="text-blue-500 hover:underline" href="https://github.com/Naatchi/miaGithub.io" title="https://github.com/Naatchi/miaGithub.io"> repository </a> <br/>
                    <br/>
                    reverse engineered with love 💕
                </div>
            </section>
            </div>
        </>
    )
}
