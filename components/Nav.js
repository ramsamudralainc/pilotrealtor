import Link from "next/link";


const myStyle = {
    color: "red",
    borderLeft: "5px solid black",
    padding: "5px"
};


const Nav = () => (
    <div className="my-nav" style={myStyle}>
        <img src="/static/logo.png" alt="logo" height="50" />
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/blogs">
            <a>Blogs</a>
        </Link>
        <Link href="/news">
            <a>News</a>
        </Link>

        <style jsx>{`
            a,
            img {
                padding: 10px;
            }
        `}</style>
    </div>
);

export default Nav;
