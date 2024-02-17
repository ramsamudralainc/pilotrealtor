import React from "react";
import HeroSlider, { Slide, Nav } from "hero-slider";

const HeroCarousel = () => {
    return (
        <HeroSlider
            slidingAnimation="left_to_right"
            orientation="horizontal"
            initialSlide={1}
            onBeforeChange={(previousSlide, nextSlide) =>
                console.log("onBeforeChange", previousSlide, nextSlide)
            }
            onChange={(nextSlide) => console.log("onChange", nextSlide)}
            onAfterChange={(nextSlide) =>
                console.log("onAfterChange", nextSlide)
            }
            style={{
                backgroundColor: "#000000"
            }}
            settings={{
                slidingDuration: 50,
                slidingDelay: 50,
                shouldAutoplay: true,
                autoplayDuration: 500,
                shouldDisplayButtons: true,
                shouldSlideOnArrowKeypress: true,
                shouldSlideOnDotClick: true,
                pauseOnMouseOver: true,
                pauseOnWindowBlur: false,
                dotsPosition: "bottom",
                hideDots: false,
                shouldShowHeroSlider: true
            }}
        >
            <Slide
                background={{
                    backgroundImage:
                        "static/p4.jpg"
                }}
            >
                <div>
                    <h1>Slide 1</h1>
                </div>
            </Slide>
            <Slide
                background={{
                    backgroundImage:
                        "static/p5.jpg"
                }}
            >
                <div>
                    <h1>Slide 2</h1>
                </div>
            </Slide>
            <Slide
                background={{
                    backgroundImage:
                        "static/p6.jpg"
                }}
            >
                <div>
                    <h1>Slide 3</h1>
                </div>
            </Slide>
            <Nav />
        </HeroSlider>
    );
};

export default HeroCarousel;

