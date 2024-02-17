import Link from "next/link";
import Layout from "../components/Layout";

const myStyle = {
    color: "red",
    borderLeft: "5px solid black",
    padding: "15px"
};

const About = () => (
    <Layout
        subpage="My About Page built with Next JS"
        footer={`This is built by Ryan`}
    >
        <h2>About page</h2>
        <Link href="/">
            <a style={myStyle}>Home page</a>
        </Link>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            odio, fuga error, cum, veniam excepturi quos nulla similique
            explicabo libero corrupti nobis minus eaque eligendi voluptatibus
            sequi nesciunt aliquid eius!
        </p>

        <style jsx>{`
            p {
                color: white;
                font-size: 10px;
            }
        `}</style>
    </Layout>
);

export default About;
