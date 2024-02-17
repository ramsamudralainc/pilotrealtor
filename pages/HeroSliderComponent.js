import React from "react";
import HeroSlider, { Slide, Nav } from "hero-slider";

const slidesData = [
    {
        title: "Slide 1",
        description: "Description 1",
        image: "c:\\p3.jpg"
    },
    {
        title: "Slide 2",
        description: "Description 2",
        image: "c:\\p4.jpg"
    },
    {
        title: "Slide 3",
        description: "Description 3",
        image: "c:\\p5.jpg"
    },
];

const HeroSliderComponent = () => {
    return (
        <HeroSlider
            slidingAnimation="fade"
            orientation="horizontal"
            initialSlide={1}
            onBeforeChange={(previous, next) => console.log("onBeforeChange", previous, next)}
            onChange={(next) => console.log("onChange", next)}
            onAfterChange={(next) => console.log("onAfterChange", next)}
            style={{
                backgroundColor: "#000f",
            }}
            settings={{
                slidingDuration: 600,
                slidingDelay: 50,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 100,
                height: "30vh",
            }}
        >
            {slidesData.map((slide, index) => (
                <Slide
                    key={index}
                    background={{
                        backgroundImage: slide.image,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                >
                    <div >
                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                    </div>
                </Slide>
            ))}
           
        </HeroSlider>
    );
};

export default HeroSliderComponent;